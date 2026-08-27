// firebase-messaging-sw.js — RIDLY
// Doit rester STRICTEMENT identique a js/firebase-config.js

importScripts("https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyAWFExlphYDlDjOpgOjpbYUROsN_hcBuLs",
  authDomain: "ridly-app.firebaseapp.com",
  projectId: "ridly-app",
  storageBucket: "ridly-app.appspot.com",
  messagingSenderId: "402614688384",
  appId: "1:402614688384:web:a79d007ffeffa94afd92465"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notif = payload.notification || {};
  const data  = payload.data || {};

  self.registration.showNotification(notif.title || "RIDLY", {
    body:  notif.body || "",
    icon:  "/image/icon-192.png",
    badge: "/image/icon-192.png",
    tag:   data.tag || "ridly",
    data:  { url: data.url || "/feed" }
  });
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const target = (event.notification.data && event.notification.data.url) || "/feed";

  event.waitUntil(
    clients.matchAll({ type: "window", includeUncontrolled: true })
      .then((list) => {
        for (const c of list) {
          if (c.url.includes(target) && "focus" in c) return c.focus();
        }
        return clients.openWindow(target);
      })
  );
});
