// js/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getMessaging, getToken, onMessage }
  from "https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging.js";

// ⚠️ CONFIG EXACTE prise de ta console Firebase (pas la clé Web push !)
const firebaseConfig = {
  apiKey: "AIzaSyAWFEXIphYDlDJ0pg0JpbYUROSn_hcBuLs",
  authDomain: "ridly-app.firebaseapp.com",
  projectId: "ridly-app",
  storageBucket: "ridly-app.appspot.com", // je corrige .app en .appspot.com, plus classique
  messagingSenderId: "402614688384",
  appId: "1:402614688384:web:a79d007ffeffa94af92465",
  measurementId: "G-K4S628L7TK"
};

// Initialise Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// ✅ VAPID KEY = ta "Paire de clés Web push" (celle que tu as en photo)
const VAPID_KEY =
  "BBocWMR111IZxsgkuDQw_JzklkTwxa5VATFjt6V2P5GjZsjjh16wxuJEuwifZgzIfhSpxzIhug-aIPJUDTFK6G_o";

async function initFirebaseMessaging() {
  if (!("Notification" in window) || !("serviceWorker" in navigator)) {
    console.log("Notifications non supportées sur ce navigateur.");
    return;
  }

  console.log("Demande de permission notifications...");
  const perm = await Notification.requestPermission();

  if (perm !== "granted") {
    console.log("Notifications refusées :", perm);
    return;
  }
  console.log("✓ Notifications autorisées !");

  // Register du service worker
  const reg = await navigator.serviceWorker.register("/firebase-messaging-sw.js");
  console.log("SW FCM OK", reg);

  try {
    const token = await getToken(messaging, {
      vapidKey: VAPID_KEY,
      serviceWorkerRegistration: reg
    });
    console.log("FCM token OK :", token);
    // ici tu pourras plus tard envoyer le token à Supabase
  } catch (err) {
    console.error("❌ Erreur lors de getToken FCM :", err);
  }
}

// Lance le setup
initFirebaseMessaging().catch(err => {
  console.error("Erreur initFirebaseMessaging", err);
});

// Réception d’un message quand l’onglet est ouvert
onMessage(messaging, (payload) => {
  console.log("📩 Message reçu en foreground :", payload);
});
