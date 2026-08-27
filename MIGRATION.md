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

## Socle PWA et mobile (uniformisé sur les 20 pages)

Chaque page porte désormais le même bloc `RIDLY_PWA_HEAD` :
manifest, `theme-color` noir, icônes 192/512, `apple-touch-icon`,
`apple-mobile-web-app-capable`, `format-detection`.

`viewport` normalisé partout avec `viewport-fit=cover` (nécessaire pour
gérer les encoches iPhone). Trois pages avaient `user-scalable=no`, qui
bloque le zoom — retiré.

Bloc CSS `RIDLY_MOBILE_BASE` sur chaque page : `safe-area-inset` sur le
header et la barre du bas, `min-height:100svh`, `overscroll-behavior` pour
supprimer le rebond, `font-size:16px` sur les champs (en dessous, iOS zoome
automatiquement à la mise au point), et suppression du scroll horizontal.

Le service worker était enregistré en ligne sur 8 pages, avec des variantes.
Tout passe par `js/pwa.js`, chargé sur les 20 pages, qui gère aussi la mise à
jour automatique (`SKIP_WAITING` + rechargement unique).

Barre du bas identique sur les 14 pages applicatives : 5 onglets
(Spots, Feed, Recherche, Lya, Profil). `game.html`, `games1.html` et
`game_scoot_classic.html` étaient encore à 6 onglets ; `admin_spots.html`
n'en avait aucune.

### Pages volontairement sans barre du bas
`index`, `compte`, `reset_password` — pages d'entrée, avant connexion.
`conditions`, `confidentialite` — pages légales.

### ridly-lya.html
Interface de chat plein écran avec son propre champ de saisie fixé en bas :
la barre du bas la recouvrirait. Elle est donc laissée telle quelle.
Problème à traiter : c'est une cible de la navigation (onglet Lya), mais son
seul lien de sortie est `index.html`. Il lui faut un bouton retour dans son
en-tête, ou un décalage du bas de page pour accueillir la barre.


## ridly-lya.html — version v69 + bouton retour

Version `v69-swiss-skate-rsl` intégrée (1,11 Mo, remplace la précédente).
Le socle PWA et le CSS mobile lui ont été appliqués comme aux autres pages.

Un bouton retour existait déjà dans son en-tête (`← RIDLY`, `id="backLink"`,
déjà stylé, y compris en version carrée sur mobile) mais il pointait vers
`index.html` — la page d'accueil d'avant connexion. Un utilisateur connecté
arrivant par l'onglet Lya se retrouvait donc sur le mur de login.

Il pointe maintenant vers `feed.html` par défaut, et un script vérifie le
`referrer` : si l'utilisateur vient d'une page RIDLY connue, le bouton le
ramène exactement là, via `history.back()` pour préserver son scroll.

La barre du bas n'est toujours pas posée sur cette page : son champ de saisie
est fixé en bas et serait recouvert.


## Personnage Lya — problème de pixel

Cause identifiée : **le détourage des sprites a keyé sur le noir.** Le canal
alpha corrèle à +0,57 avec la luminosité, et 13 713 pixels sombres — luminance
moyenne 55, soit le hoodie et le pantalon — ont été rendus transparents.
Lya s'affichait donc en fantôme, seuls son visage, ses cheveux et les accents
rouges restant visibles.

Les 16 sprites d'animation **ne sont pas récupérables** : les pixels des
vêtements valent exactement (0,0,0), identiques au fond. L'information est
détruite. Il faut les ré-exporter depuis la source, avec un détourage qui ne
se base pas sur la luminosité, et les enregistrer en WebP *lossless* ou en PNG.

L'illustration principale et l'avatar ont été régénérés depuis `imagegen.png` :
- alpha normalisé (le maximum était à 254, rien n'était réellement opaque)
- purge du blanc sous les zones transparentes par `inpaint`, sinon le
  redimensionnement aspire le fond et crée un halo autour de la silhouette
- export en WebP lossless, en fichiers externes plutôt qu'en base64

`image/lya-hero.webp` (257 Ko) et `image/lya-avatar.webp` (126 Ko) sont mis en
cache un an par `vercel.json`, alors que le base64 était retéléchargé à chaque
visite. Le HTML passe de 1087 à 955 Ko.

## DA 2026 généralisée

Bloc `RIDLY_DA_2026_GENERIC` appliqué à `game`, `games1`, `game_scoot_classic`,
`classement`, `chat`, `chat1v1`, `ajouter`, `spot`, `games`, `admin_spots`.
Wordmark SVG dans l'en-tête de ces pages, à la place du logo + texte.

Bouton **+** rouge présent et visible sur les 13 pages applicatives. Il était
absent de `recherche.html`, et masqué par `display:none` dans les blocs DA de
`feed.html` et `ou_rider.html`.

`admin_spots.html` a reçu le bloc DA mais garde sa structure `<header>` propre :
ni wordmark ni bouton +, faute de conteneur `nav-left`.


## Incident — connexion cassée (corrigé)

Mon script de normalisation PWA supprimait les blocs `<script>` contenant
l'enregistrement du service worker. Sur `compte.html`, ce bloc contenait aussi
**tout le code d'authentification** : 9 002 octets supprimés, dont le client
Supabase, `signInWithPassword`, `signUp` et le reset de mot de passe.
La page de connexion était donc inerte.

Corrigé : le retrait se fait maintenant en comptant les accolades, pour ne
supprimer que le bloc `if("serviceWorker" in navigator){...}` lui-même.
238 octets retirés au lieu de 9 002. Audit passé sur les 20 pages : aucune
autre fonction perdue, seuls `register`, `log` et `then` du service worker
ont disparu, ce qui est voulu.

