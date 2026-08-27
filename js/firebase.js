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

  window.ridlyActiverNotifications = async function () {
    try {
      if (!("Notification" in window)) return null;
      if (!firebase.messaging) return null;

      const permission = await Notification.requestPermission();
      if (permission !== "granted") return null;

      const reg = await navigator.serviceWorker.register("/firebase-messaging-sw.js");

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
