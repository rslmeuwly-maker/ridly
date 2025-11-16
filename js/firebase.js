// -------------------------------------------
// Firebase config Ridly (NE PAS MODIFIER)
// -------------------------------------------
const firebaseConfig = {
  apiKey: "AIzaSyAWFEklphYDlDj0Pg0jbYUR0Sn_hcBuLs",
  authDomain: "ridly-app.firebaseapp.com",
  projectId: "ridly-app",
  storageBucket: "ridly-app.appspot.com",
  messagingSenderId: "402614688384",
  appId: "1:402614688384:web:a79d007ffe5a94af92465",
};

// -------------------------------------------
// Init Firebase
// -------------------------------------------
firebase.initializeApp(firebaseConfig);

// -------------------------------------------
// Init Messaging (FCM)
// -------------------------------------------
let messaging = null;

try {
  messaging = firebase.messaging();

  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("✓ Notifications autorisées !");

      messaging
        .getToken({
          vapidKey:
            "BBIUiL7aSHlwG6Sq0ZEqkQf6rPdzKq1rp9hk6dJuO6QGDW0XpDPfkxaH1k3VTkC9XW7UzSsgxxLpKduhL0dxi6o",
        })
        .then((token) => {
          console.log("✓ FCM token :", token);
        })
        .catch((err) => {
          console.error("Erreur lors du getToken FCM :", err);
        });
    }
  });
} catch (err) {
  console.error("Erreur Firebase messaging :", err);
}
