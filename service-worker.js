// service-worker.js — RIDLY
// v4 : migration Netlify -> Vercel
// Changement de nom du cache = force la mise a jour chez tous les users.

const CACHE_NAME = 'ridly-v4';

// Uniquement des assets stables. PAS de HTML :
// avec cleanUrls, /feed.html redirige vers /feed et le precache
// ne correspondrait plus aux requetes reelles.
const URLS_TO_CACHE = [
  '/',
  '/manifest.json',
  '/image/1logo_ridly.png',
  '/image/ridly-logo-exact.webp',
  '/image/icon-192.png',
  '/image/icon-512.png'
];

// ----- INSTALL -----
self.addEventListener('install', (event) => {
  self.skipWaiting(); // le nouveau SW prend la main sans attendre
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      // addAll echoue en bloc si UN seul fichier manque -> on tolere l'echec unitaire
      Promise.allSettled(URLS_TO_CACHE.map((u) => cache.add(u)))
    )
  );
});

// ----- ACTIVATE : purge des anciens caches -----
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

// ----- FETCH -----
self.addEventListener('fetch', (event) => {
  const req = event.request;

  // 1) GET uniquement (sinon on casse les POST/PUT)
  if (req.method !== 'GET') return;

  let url;
  try { url = new URL(req.url); } catch { return; }

  // 2) On ne touche qu'a notre propre origine.
  //    Supabase, Firebase, Google Fonts, tuiles de carte : on laisse passer.
  if (url.origin !== self.location.origin) return;

  // 3) Pages HTML : NETWORK-FIRST.
  //    Indispensable : en cache-first, un user resterait bloque
  //    sur une vieille version apres chaque deploiement.
  const isPage = req.mode === 'navigate'
    || (req.headers.get('accept') || '').includes('text/html');

  if (isPage) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((c) => c.put(req, copy));
          return res;
        })
        .catch(() =>
          caches.match(req).then((hit) => hit || caches.match('/'))
        )
    );
    return;
  }

  // 4) Assets (images, sons, js, css) : CACHE-FIRST
  event.respondWith(
    caches.match(req).then((hit) => {
      if (hit) return hit;
      return fetch(req).then((res) => {
        if (res.ok && res.type === 'basic') {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((c) => c.put(req, copy));
        }
        return res;
      });
    })
  );
});

// Active immediatement la nouvelle version quand js/pwa.js le demande
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
