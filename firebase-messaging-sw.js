// firebase-messaging-sw.js
importScripts("https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyAWFEXIphYDlDJ0pg0JpbYUROSn_hcBuLs",
  authDomain: "ridly-app.firebaseapp.com",
  projectId: "ridly-app",
  storageBucket: "ridly-app.appspot.com",
  messagingSenderId: "402614688384",
  appId: "1:402614688384:web:a79d007ffeffa94af92465"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("📩 [SW] Message reçu en background:", payload);
  const notif = payload.notification || {};
  self.registration.showNotification(notif.title || "RIDLY", {
    body: notif.body || "",
    icon: "/image/1logo_ridly.png"
  });
});
