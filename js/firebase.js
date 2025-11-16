// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getMessaging, getToken, onMessage } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-messaging.js";

// --- CONFIG FIREBASE ---
const firebaseConfig = {
  apiKey: "AIzaSyAWFExIphYDlJ0pg0jbpYUROsN_hcBuLs",
  authDomain: "ridly-app.firebaseapp.com",
  projectId: "ridly-app",
  storageBucket: "ridly-app.appspot.com",
  messagingSenderId: "402614688384",
  appId: "1:402614688384:web:a79d007fffef49a4af92465",
  measurementId: "G-K4S62BL7TK"
};

// Initialise Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// Ta clé publique VAPID (pour notifications Web Push)
const VAPID_KEY = "BB0cWMR1t11ZxsgkuDQw_JzkIkTwxa5VATFjt6V2P5GjZsjh16wxuJEuwifZgzlfhSpxzIhug-aIPJUDTFK6G_o";

// Demande de permission + récupération du token FCM
async function askPermissionForNotifs() {
  console.log("Demande de permission notifications...");

  const permission = await Notification.requestPermission();

  if (permission === "granted") {
    console.log("✔ Notifications autorisées !");

    try {
      const token = await getToken(messaging, { vapidKey: VAPID_KEY });
      console.log("🔥 TOKEN FCM pour cet appareil :", token);

      // Ici plus tard : envoyer ce token à Supabase
    } catch (err) {
      console.error("❌ Erreur lors de getToken FCM :", err);
    }

  } else {
    console.log("❌ Permission notifications refusée.");
  }
}

// Lancer la fonction
askPermissionForNotifs();

// Lorsqu'une notification arrive alors que l'app est ouverte
onMessage(messaging, (payload) => {
  console.log("🔔 Notification reçue en premier plan :", payload);
});