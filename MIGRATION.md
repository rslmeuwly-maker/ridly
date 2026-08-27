# RIDLY — Migration Netlify → Vercel

## Config Vercel

Framework Preset **Other**, Build Command vide, Output Directory `.`, Install Command vide.

## À faire dans les consoles

**Supabase** (projet `jynxifufaauoxwzjapzq`) → Authentication → URL Configuration → Redirect URLs :
ajouter `https://ridly-beta.vercel.app/**` puis `https://ridly.ch/**`.
Toute l'authentification du site est sur Supabase — Firebase ne sert qu'aux notifications.

**Firebase** → vérifier que la config de `js/firebase-config.js` correspond bien à la console.

## Corrections appliquées

### Firebase
Il existait **trois configurations différentes** dans le projet, avec trois `apiKey` et deux `vapidKey`.
Tout est maintenant unifié dans `js/firebase-config.js`, avec les valeurs de `feed.html`,
`chat1v1.html` et `ou_rider.html` — les trois pages en production, qui avaient toutes
la même config. Les autres valeurs venaient de fichiers qui n'ont jamais tourné.

Le SDK est passé en 10.13.2 partout (six occurrences étaient en 9.6.11).

Le SDK n'était chargé sur aucune des pages qui appelaient `js/firebase.js` :
`firebase.initializeApp()` plantait sur un objet inexistant. Corrigé.

Les `Notification.requestPermission()` déclenchés au chargement de page ont été supprimés.
La majorité des navigateurs les refusent, et sur iOS ça grille définitivement la permission.
Remplacés par `ridlyActiverNotifications()`, à appeler depuis un clic bouton.

### Service worker
Passé en `ridly-v4`, network-first sur le HTML. En cache-first, les utilisateurs seraient
restés bloqués sur l'ancienne version après chaque déploiement. `skipWaiting` +
`clients.claim` forcent la mise à jour des installations existantes.

### PWA
`manifest.json` pointait vers `images/logo_rsl.png` — dossier et fichier inexistants.
Vraies icônes 192/512 + maskable générées depuis le logo.

### Design
`profil_ou_rider.html` passé sur la DA 2026 (noir/rouge, Bebas Neue + Barlow Condensed),
via un bloc `RIDLY_PROFIL_DA_2026` sur le modèle de `recherche.html` et `feed.html`.

Barre du bas unifiée sur 7 pages : 5 onglets (Spots, Feed, Recherche, Lya, Profil)
au lieu de 6 en emoji. Game et Classement déplacés dans le menu `•••` du header.

### Liens
- `reset_password` → `connexion.html` (inexistant) → `compte.html`
- `ou_rider` → `connexion.html` → `compte.html`
- `profil_ou_rider` → `conditions_ridly.html` → `conditions.html`
- `js/notif_privee.js` → `chat_prive.html` → `chat1v1.html`
- `images/pn360.png` → `image/logo_pn360.png`

### Divers
URLs absolues `https://ridly.ch/sons/...` passées en relatif (10 occurrences).
Balises Netlify Identity mortes supprimées (6 pages).
`ou_rider (2).html` supprimé (MD5 identique à `ou_rider.html`).
`sonsnotif.mp3` racine supprimé (doublon non référencé).

## Reste à traiter

**7 pages orphelines** — `access_photos.html` et les 6 `game_*.html` (hors `game_scoot_classic`).
Restes d'un template RSL, aucune page ne pointe vers elles. Elles réclament un dossier `css/`
absent du repo et 15 pages inexistantes. Déjà cassées avant la migration.
Soit récupérer le `css/` de rsl-swiss.ch, soit les supprimer.

**2 liens morts** — `games.html` → `game_scoot_video.html`, `ou_rider.html` → `cours.html`.
Ces pages n'ont jamais été committées. `js/cours.js` existe mais n'est chargé nulle part.

**5 pages encore en DA verte** — `spot`, `games`, `ajouter`, `chat`, `chat1v1`, `admin_spots`,
`classement`. Seule la barre du bas a été alignée.
