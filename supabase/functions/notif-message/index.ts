// ============================================================
// RIDLY — Edge Function « notif-message »
//
// Envoie une notification push au destinataire d'un message privé.
//
// L'expéditeur appelle cette fonction après avoir inséré son message.
// La fonction vérifie que le message existe vraiment et qu'il en est
// bien l'auteur : sans ça, n'importe qui pourrait déclencher des
// notifications au nom de n'importe qui.
//
// FCM HTTP v1 exige un jeton OAuth2 signé par un compte de service.
// Le secret FIREBASE_SERVICE_ACCOUNT contient le JSON téléchargé
// depuis la console Firebase.
//
// Déploiement :
//   supabase secrets set FIREBASE_SERVICE_ACCOUNT="$(cat cle.json)"
//   supabase functions deploy notif-message
// ============================================================

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status, headers: { ...CORS, "Content-Type": "application/json" },
  });
}

// ---- OAuth2 : signature d'un JWT avec la clé du compte de service
function b64url(data: Uint8Array | string): string {
  const bytes = typeof data === "string" ? new TextEncoder().encode(data) : data;
  return btoa(String.fromCharCode(...bytes))
    .replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function pemToBytes(pem: string): Uint8Array {
  const body = pem.replace(/-----(BEGIN|END) PRIVATE KEY-----/g, "").replace(/\s/g, "");
  const raw = atob(body);
  return Uint8Array.from(raw, c => c.charCodeAt(0));
}

async function accessToken(sa: { client_email: string; private_key: string }): Promise<string> {
  const now = Math.floor(Date.now() / 1000);
  const header = b64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claim  = b64url(JSON.stringify({
    iss: sa.client_email,
    scope: "https://www.googleapis.com/auth/firebase.messaging",
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600,
  }));

  const key = await crypto.subtle.importKey(
    "pkcs8", pemToBytes(sa.private_key),
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" }, false, ["sign"],
  );
  const sig = await crypto.subtle.sign(
    "RSASSA-PKCS1-v1_5", key, new TextEncoder().encode(`${header}.${claim}`),
  );

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: `${header}.${claim}.${b64url(new Uint8Array(sig))}`,
    }),
  });
  const out = await res.json();
  if (!out.access_token) throw new Error("OAuth2 : " + JSON.stringify(out));
  return out.access_token;
}

// ---- Aperçu du message, en respectant la convention de préfixes du chat
function apercu(contenu: string): string {
  if (contenu.startsWith("VOICE:")) return "🎤 Message vocal";
  if (contenu.startsWith("IMG:"))   return "📷 Photo";
  if (contenu.startsWith("VID:"))   return "🎬 Vidéo";
  if (contenu.startsWith("FLASH:")) return "⚡ Story partagée";
  return contenu.length > 90 ? contenu.slice(0, 90) + "…" : contenu;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  if (req.method !== "POST")    return json({ error: "Méthode non autorisée" }, 405);

  const url     = Deno.env.get("SUPABASE_URL")!;
  const anon    = Deno.env.get("SUPABASE_ANON_KEY")!;
  const service = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  const saRaw   = Deno.env.get("FIREBASE_SERVICE_ACCOUNT");

  if (!saRaw) {
    console.error("[notif-message] FIREBASE_SERVICE_ACCOUNT absent");
    return json({ ok: false, reason: "config",
      message: "Le secret FIREBASE_SERVICE_ACCOUNT n'est pas configuré." }, 500);
  }

  // ---- 1. Identité de l'expéditeur, via son JWT
  const asUser = createClient(url, anon, {
    global: { headers: { Authorization: req.headers.get("Authorization") ?? "" } },
  });
  const { data: { user } } = await asUser.auth.getUser();
  if (!user) return json({ ok: false, reason: "auth" }, 401);

  let body: { message_id?: number | string };
  try { body = await req.json(); }
  catch { return json({ ok: false, reason: "payload" }, 400); }
  if (body.message_id == null) return json({ ok: false, reason: "payload" }, 400);

  const db = createClient(url, service);

  // ---- 2. Le message existe-t-il, et en est-il bien l'auteur ?
  // Sans cette vérification, n'importe qui pourrait déclencher des
  // notifications au nom d'un autre rider.
  const { data: msg, error: msgErr } = await db
    .from("ridly_private_messages")
    .select("id,from_id,to_id,content")
    .eq("id", body.message_id)
    .single();

  if (msgErr || !msg) return json({ ok: false, reason: "not_found" }, 404);
  if (msg.from_id !== user.id) return json({ ok: false, reason: "forbidden" }, 403);
  if (msg.to_id === user.id)   return json({ ok: true, envoyes: 0, note: "auto-message" });

  // ---- 3. Jetons du destinataire
  const { data: tokens } = await db
    .from("push_tokens").select("token").eq("user_id", msg.to_id);

  if (!tokens?.length) return json({ ok: true, envoyes: 0, note: "aucun appareil" });

  // ---- 4. Nom de l'expéditeur, pour le titre
  const { data: prof } = await db
    .from("profiles").select("pseudo,full_name").eq("id", user.id).single();
  const nom = prof?.pseudo || prof?.full_name || "Un rider";

  // ---- 5. Envoi
  const sa = JSON.parse(saRaw);
  let jeton: string;
  try { jeton = await accessToken(sa); }
  catch (e) {
    console.error("[notif-message] OAuth2:", e);
    return json({ ok: false, reason: "oauth", message: String(e) }, 500);
  }

  const endpoint = `https://fcm.googleapis.com/v1/projects/${sa.project_id}/messages:send`;
  let envoyes = 0;
  const perimes: string[] = [];

  for (const { token } of tokens) {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { Authorization: `Bearer ${jeton}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        message: {
          token,
          notification: { title: nom, body: apercu(msg.content || "") },
          data: { url: `/chat1v1.html?to=${msg.from_id}`, tag: `msg-${msg.from_id}` },
          webpush: {
            fcm_options: { link: `/chat1v1.html?to=${msg.from_id}` },
            notification: {
              icon: "/image/icon-192.png",
              // Android n'utilise QUE le canal alpha du badge et teinte la
              // forme. Une image opaque donne donc un carre blanc plein :
              // il faut une silhouette sur fond transparent.
              badge: "/image/badge-96.png",
            },
          },
        },
      }),
    });

    if (res.ok) { envoyes++; continue; }

    const err = await res.json().catch(() => ({}));
    const code = err?.error?.details?.[0]?.errorCode || err?.error?.status;
    // Appareil désinstallé ou jeton régénéré : on le retire.
    if (code === "UNREGISTERED" || code === "INVALID_ARGUMENT") perimes.push(token);
    else console.error("[notif-message] FCM:", JSON.stringify(err));
  }

  if (perimes.length) {
    await db.from("push_tokens").delete().in("token", perimes);
  }

  return json({ ok: true, envoyes, nettoyes: perimes.length });
});
