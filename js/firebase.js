// js/firebase.js

// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getMessaging, getToken, onMessage } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-messaging.js";

// --- CONFIG FIREBASE ---
// 👉 EXACTEMENT ce que tu as dans la console (ce que tu m'as montré en photo)
const firebaseConfig = {
  apiKey: "AIzaSyAWFEXlpHYDlJ0pg0JpbYUROSn_hcBuLs",
  authDomain: "ridly-app.firebaseapp.com",
  projectId: "ridly-app",
  storageBucket: "ridly-app.firebasestorage.app",
  messagingSenderId: "402614688384",
  appId: "1:402614688384:web:a79d007ffeffa94af92465",
  measurementId: "G-K4S62BL7TK"
};

// Initialise Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// Ta clé publique VAPID (celle de la page Web push)
const VAPID_KEY =
  "BBocWMR1I1ZxsgkuDQw_JzklkTwxa5VATFjt6V2P5GjZzsjh16wxuJEuwifZgzlfhSpxzIhug-aIPJUDTFK6G_o";

async function initFirebaseMessaging() {
  if (!("serviceWorker" in navigator)) {
    console.log("❌ Service worker non supporté");
    return;
  }

  console.log("Demande de permission notifications...");
  const permission = await Notification.requestPermission();

  if (permission !== "granted") {
    console.log("❌ Permission notifications refusée.");
    return;
  }
  console.log("✔ Notifications autorisées !");

  try {
    // 1) on enregistre le SW ici
    const registration = await navigator.serviceWorker.register(
      "/firebase-messaging-sw.js"
    );
    console.log("SW FCM OK", registration);

    // 2) on récupère le token lié à ce SW
    const token = await getToken(messaging, {
      vapidKey: VAPID_KEY,
      serviceWorkerRegistration: registration
    });

    console.log("🔥 TOKEN FCM pour cet appareil :", token);

    // TODO plus tard : envoyer le token à Supabase
  } catch (err) {
    console.error("❌ Erreur lors de getToken FCM :", err);
  }
}

// Lancer au chargement
initFirebaseMessaging();

// Notification reçue quand la page est ouverte
onMessage(messaging, (payload) => {
  console.log("🔔 Notification reçue en premier plan :", payload);
});
