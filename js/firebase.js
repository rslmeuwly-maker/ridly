// -------------------------------------------------------------
// Firebase RIDLY — init + messaging (FCM)
// La config vient de js/firebase-config.js (charge AVANT ce fichier)
// -------------------------------------------------------------

(function () {
  const cfg = window.RIDLY_FIREBASE_CONFIG;

  if (!cfg) {
    console.error("[Firebase] js/firebase-config.js n'est pas charge.");
    return;
  }
  if (typeof firebase === "undefined") {
    console.error("[Firebase] SDK absent.");
    return;
  }

  if (!firebase.apps.length) firebase.initializeApp(cfg);

  // ---------------------------------------------------------
  // Messaging : on NE demande PLUS la permission au chargement.
  // Un prompt automatique est refuse par la plupart des users
  // (et bloque definitivement sur Safari/iOS).
  // Appelle ridlyActiverNotifications() depuis un clic bouton.
  // ---------------------------------------------------------
  window.ridlyActiverNotifications = async function () {
    try {
      if (!("Notification" in window)) {
        console.warn("[Firebase] Notifications non supportees.");
        return null;
      }
      if (!firebase.messaging || !firebase.messaging.isSupported?.()) {
        console.warn("[Firebase] FCM non supporte sur ce navigateur.");
        return null;
      }

      const permission = await Notification.requestPermission();
      if (permission !== "granted") {
        console.log("[Firebase] Notifications refusees.");
        return null;
      }

      const reg = await navigator.serviceWorker.register(
        "/firebase-messaging-sw.js"
      );

      const token = await firebase.messaging().getToken({
        vapidKey: window.RIDLY_VAPID_KEY,
        serviceWorkerRegistration: reg
      });

      console.log("[Firebase] Token FCM obtenu.");
      return token;
    } catch (err) {
      console.error("[Firebase] Erreur activation notifications :", err);
      return null;
    }
  };

  // ---------------------------------------------------------
  // RIDLY_PUSH — enregistrement du jeton
  // Sans stockage cote serveur, un jeton ne sert a rien : personne
  // ne saurait a quel appareil envoyer la notification.
  // ---------------------------------------------------------
  window.ridlyEnregistrerToken = async function (token) {
    try {
      if (!token) return false;

      // On REUTILISE le client de la page. En creer un second fait
      // cohabiter deux GoTrueClient sur la meme cle de stockage : ils se
      // disputent la session et getUser() peut renvoyer null alors que le
      // rider est bien connecte — l'enregistrement echouait silencieusement.
      // Les pages declarent `const supa = ...`. Un const au niveau superieur
      // vit dans la portee lexicale globale : il est accessible par son nom,
      // mais PAS via window.supa. D'ou le typeof.
      let db = null;
      if (typeof supa !== "undefined" && supa?.auth) db = supa;
      else if (typeof sb !== "undefined" && sb?.auth) db = sb;
      else if (window.supabase && window.env?.SUPABASE_URL) {
        db = (window.__ridlyPushDb ||= window.supabase.createClient(
          window.env.SUPABASE_URL, window.env.SUPABASE_ANON));
      }
      if (!db) { console.warn("[Push] client Supabase introuvable."); return false; }

      const { data: { user } } = await db.auth.getUser();
      if (!user) { console.warn("[Push] rider non connecte."); return false; }

      const { error } = await db.from("push_tokens").upsert({
        token,
        user_id: user.id,
        plateforme: navigator.userAgent.slice(0, 120),
        updated_at: new Date().toISOString()
      }, { onConflict: "token" });

      if (error) { console.error("[Push] enregistrement:", error.message, error.code || "", error.details || ""); return false; }
      return true;
    } catch (e) {
      console.error("[Push] enregistrement:", e);
      return false;
    }
  };

  // Active les notifications ET enregistre le jeton, en une fois.
  // C'est cette fonction que les boutons doivent appeler.
  window.ridlyActiverPush = async function () {
    const token = await window.ridlyActiverNotifications();
    if (!token) return { ok: false, raison: "permission" };
    const ok = await window.ridlyEnregistrerToken(token);
    return { ok, raison: ok ? null : "enregistrement" };
  };

  // Si le rider a deja autorise, on rafraichit le jeton en silence :
  // Firebase le regenere periodiquement et l'ancien devient invalide.
  window.addEventListener("load", async () => {
    try {
      if (!("Notification" in window) || Notification.permission !== "granted") return;
      const token = await window.ridlyActiverNotifications();
      if (token) await window.ridlyEnregistrerToken(token);
    } catch (_) {}
  });

})();
