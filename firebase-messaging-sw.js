importScripts("https://www.gstatic.com/firebasejs/11.0.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/11.0.1/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyAWFExIphYDlJ0pg0jbpYUROsN_hcBuLs",
  authDomain: "ridly-app.firebaseapp.com",
  projectId: "ridly-app",
  storageBucket: "ridly-app.appspot.com",
  messagingSenderId: "402614688384",
  appId: "1:402614688384:web:a79d007fffef49a4af92465",
  measurementId: "G-K4S62BL7TK"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || "Ridly";
  const options = {
    body: payload.notification?.body || "",
    icon: "/image/1logo_ridly.png"
  };

  self.registration.showNotification(title, options);
});