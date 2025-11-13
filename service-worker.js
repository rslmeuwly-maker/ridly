// service-worker.js

// ⚠️ change de nom = force la mise à jour du SW
const CACHE_NAME = 'ridly-v3';

// ⚠️ Mets ici uniquement des fichiers qui EXISTENT vraiment en prod
const URLS_TO_CACHE = [
  '/',
  'ou_rider.html',
  'feed.html',
  'ajouter.html',
  'recherche.html',
  'profil_ou_rider.html',
  'spot.html',
  'games.html',          // si ton fichier s'appelle bien games.html
  'classement.html',
  'manifest.json',
  'image/1logo_ridly.png' // adapte si besoin
];

// ----- INSTALL -----
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(URLS_TO_CACHE))
      .catch((err) => {
        console.error('[SW] cache.addAll error', err);
      })
  );
});

// ----- ACTIVATE : nettoyage des vieux caches -----
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((k) => k !== CACHE_NAME)
          .map((k) => caches.delete(k))
      )
    )
  );
});

// ----- FETCH : NE TOUCHE PAS AUX REQUÊTES SUPABASE -----
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // 1) On laisse Supabase tranquille (auth, BDD, storage…)
  if (url.origin.endsWith('supabase.co')) {
    return; // pas de respondWith => le navigateur gère normalement
  }

  // 2) On ne gère que les requêtes GET (sinon ça casse les POST/PUT…)
  if (event.request.method !== 'GET') {
    return;
  }

  // 3) Pour le reste : cache-first simple
  event.respondWith(
    caches.match(event.request).then((resp) => {
      return resp || fetch(event.request);
    })
  );
});