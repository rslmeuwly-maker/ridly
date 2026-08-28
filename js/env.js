
// ===== env.js (LIVE) =====
window.env = {
  SUPABASE_URL: "https://jynxifufaauoxwzjapzq.supabase.co",
  // Clé ANON (publique côté client) — OK à exposer sur le site
  SUPABASE_ANON: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp5bnhpZnVmYWF1b3h3emphcHpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEzODI2NzcsImV4cCI6MjA3Njk1ODY3N30.vFPGhGakPIM3Xg5rn8_BrAXl6oJMJOssO780C9nXmr4",

  // Cartes — CARTO exige une cle depuis aout 2026 (gratuit, 5M tuiles/mois,
  // sans compte : https://carto.com/basemaps/apikey).
  // Laisse vide pour basculer automatiquement sur Stadia Maps.
  CARTO_KEY: "",

  // Optionnel : active le style Satellite (https://maptiler.com)
  MAPTILER_KEY: ""
};
