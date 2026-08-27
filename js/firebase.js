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
})();
