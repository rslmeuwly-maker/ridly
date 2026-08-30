
// ===== env.js (LIVE) =====
window.env = {
  SUPABASE_URL: "https://jynxifufaauoxwzjapzq.supabase.co",
  // Clé ANON (publique côté client) — OK à exposer sur le site
  SUPABASE_ANON: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp5bnhpZnVmYWF1b3h3emphcHpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEzODI2NzcsImV4cCI6MjA3Njk1ODY3N30.vFPGhGakPIM3Xg5rn8_BrAXl6oJMJOssO780C9nXmr4",

  // Cartes — CARTO exige une cle depuis aout 2026 (gratuit, 5M tuiles/mois,
  // sans compte : https://carto.com/basemaps/apikey).
  // Laisse vide : la carte bascule alors sur OpenStreetMap, qui ne
  // demande aucune inscription et fonctionne toujours.
  CARTO_KEY: "",

  // Stadia Maps : ne passe a true QUE si tu as cree un compte ET declare
  // tes domaines (ridly.ch, ridly-beta.vercel.app) dans leur tableau de bord.
  // Sans domaine declare, Stadia renvoie 401 et la carte reste vide.
  // Attention : leur offre gratuite exclut l'usage commercial.
  STADIA_ENABLED: false,

  // Optionnel : active le style Satellite (https://maptiler.com)
  MAPTILER_KEY: ""
};
