// ============================================================
// RIDLY — Edge Function « park-checkin »
//
// Toute la validation est ici, cote serveur. Le navigateur ne peut
// pas ecrire dans park_checkins (aucune policy d'INSERT), donc il ne
// peut pas s'attribuer de points : il ne fait qu'envoyer sa position.
//
// Controles :
//   1. rider connecte (JWT verifie)
//   2. precision GPS suffisante
//   3. coordonnees du park lues en base, jamais fournies par le client
//   4. distance calculee cote serveur
//   5. cooldown de 24 h par park
//   6. vitesse de deplacement plausible depuis le dernier check-in
//
// Deploiement :
//   supabase functions deploy park-checkin
// ============================================================

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SCAN_RADIUS_M      = 150;   // rayon de validation
const MAX_ACCURACY_M     = 100;   // au-dela, la position ne veut rien dire
const COOLDOWN_HOURS     = 24;    // un check-in par park et par jour
const MAX_SPEED_KMH      = 200;   // au-dela, GPS falsifie
const POINTS_PER_CHECKIN = 1;     // 1 point = 1 heure de ride dans l'echelle existante
const POINTS_FIRST_BONUS = 2;     // premiere visite d'un park

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS, "Content-Type": "application/json" },
  });
}

function distanceMeters(lat1: number, lng1: number, lat2: number, lng2: number) {
  const R = 6371000, toRad = (x: number) => (x * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1), dLng = toRad(lng2 - lng1);
  const a = Math.sin(dLat / 2) ** 2 +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  if (req.method !== "POST")    return json({ error: "Méthode non autorisée" }, 405);

  const url     = Deno.env.get("SUPABASE_URL")!;
  const anon    = Deno.env.get("SUPABASE_ANON_KEY")!;
  const service = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

  // ---- 1. Identite du rider, etablie par le JWT et non par le corps de requete
  const authHeader = req.headers.get("Authorization") ?? "";
  const asUser = createClient(url, anon, {
    global: { headers: { Authorization: authHeader } },
  });
  const { data: { user }, error: authError } = await asUser.auth.getUser();
  if (authError || !user) {
    return json({ ok: false, reason: "auth", message: "Connecte-toi pour scanner un park." }, 401);
  }

  // ---- 2. Position envoyee par le telephone
  let body: { lat?: number; lng?: number; accuracy?: number };
  try { body = await req.json(); }
  catch { return json({ ok: false, reason: "payload", message: "Requête invalide." }, 400); }

  const lat = Number(body.lat), lng = Number(body.lng);
  const accuracy = Number(body.accuracy);
  if (!Number.isFinite(lat) || !Number.isFinite(lng) ||
      lat < -90 || lat > 90 || lng < -180 || lng > 180) {
    return json({ ok: false, reason: "payload", message: "Position invalide." }, 400);
  }

  // Une precision de +/-1000 m rend le test des 150 m absurde.
  if (Number.isFinite(accuracy) && accuracy > MAX_ACCURACY_M) {
    return json({
      ok: false, reason: "accuracy",
      message: `Signal GPS trop faible (±${Math.round(accuracy)} m). Sors à découvert et réessaie.`,
    });
  }

  const db = createClient(url, service);

  // ---- 3. Le park le plus proche, coordonnees lues en base
  const { data: spots, error: spotsError } = await db
    .from("spots").select("id,nom,ville,lat,lng");
  if (spotsError) return json({ ok: false, reason: "db", message: "Base indisponible." }, 500);

  let nearest: { id: string; nom: string; ville: string | null; d: number } | null = null;
  for (const s of spots ?? []) {
    const sLat = Number(s.lat), sLng = Number(s.lng);
    if (!Number.isFinite(sLat) || !Number.isFinite(sLng)) continue;
    const d = distanceMeters(lat, lng, sLat, sLng);
    if (!nearest || d < nearest.d) nearest = { id: s.id, nom: s.nom, ville: s.ville, d };
  }
  if (!nearest) return json({ ok: false, reason: "empty", message: "Aucun park dans la base." });

  if (nearest.d > SCAN_RADIUS_M) {
    return json({
      ok: false, reason: "too_far",
      message: `Le park le plus proche est ${nearest.nom}, à environ ${Math.round(nearest.d)} m.`,
      nearest: { nom: nearest.nom, distance_m: Math.round(nearest.d) },
    });
  }

  // ---- 4. Cooldown sur ce park
  const since = new Date(Date.now() - COOLDOWN_HOURS * 3600_000).toISOString();
  const { data: recent } = await db
    .from("park_checkins")
    .select("created_at")
    .eq("user_id", user.id).eq("spot_id", nearest.id)
    .gte("created_at", since)
    .order("created_at", { ascending: false })
    .limit(1);

  if (recent && recent.length) {
    const next = new Date(recent[0].created_at).getTime() + COOLDOWN_HOURS * 3600_000;
    const hours = Math.ceil((next - Date.now()) / 3600_000);
    return json({
      ok: false, reason: "cooldown",
      message: `${nearest.nom} est déjà validé. Nouveau check-in dans environ ${hours} h.`,
    });
  }

  // ---- 5. Vitesse plausible depuis le dernier check-in, tous parks confondus.
  // Un GPS falsifie permet de valider Genève puis Zurich a dix minutes
  // d'intervalle : impossible physiquement.
  const { data: last } = await db
    .from("park_checkins")
    .select("lat,lng,created_at")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false })
    .limit(1);

  if (last && last.length) {
    const prev = last[0];
    const km = distanceMeters(lat, lng, Number(prev.lat), Number(prev.lng)) / 1000;
    const hours = (Date.now() - new Date(prev.created_at).getTime()) / 3600_000;
    if (hours > 0 && km / hours > MAX_SPEED_KMH) {
      return json({
        ok: false, reason: "implausible",
        message: "Ce check-in n'a pas pu être validé. Réessaie depuis le skatepark.",
      });
    }
  }

  // ---- 6. Premiere visite ?
  const { count } = await db
    .from("park_checkins")
    .select("id", { count: "exact", head: true })
    .eq("user_id", user.id).eq("spot_id", nearest.id);

  const first  = (count ?? 0) === 0;
  const earned = POINTS_PER_CHECKIN + (first ? POINTS_FIRST_BONUS : 0);

  const { error: insertError } = await db.from("park_checkins").insert([{
    user_id: user.id,
    spot_id: nearest.id,
    points: earned,
    lat, lng,
    accuracy_m: Number.isFinite(accuracy) ? accuracy : null,
    distance_m: Math.round(nearest.d),
  }]);
  if (insertError) {
    return json({ ok: false, reason: "db", message: "Enregistrement impossible." }, 500);
  }

  return json({
    ok: true,
    first,
    earned,
    spot: { id: nearest.id, nom: nearest.nom, ville: nearest.ville },
    distance_m: Math.round(nearest.d),
    accuracy_m: Number.isFinite(accuracy) ? Math.round(accuracy) : null,
  });
});
