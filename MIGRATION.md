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


## Cartes — filigrane "API KEY REQUIRED"

Cause externe : CARTO a commencé à exiger une clé API sur ses basemaps raster
en août 2026, et filigrane les tuiles demandées sans clé. La carte fonctionne
toujours, c'est un avis, pas un blocage. Tous les projets utilisant
`basemaps.cartocdn.com` sont touchés.

Deux autres fournisseurs étaient déjà cassés sans que ça se voie :
- **Watercolor** pointait vers `stamen-tiles.a.ssl.fastly.net`, dont les
  redirections ont cessé le 31 octobre 2023. Style mort depuis presque 3 ans.
- **Satellite** dépendait de `MAPTILER_KEY`, absente de `env.js`. Le
  `.filter(d=>!!d.url)` la retirait silencieusement du sélecteur.

Et la carte démarrait sur le style clair `positron` alors que toute la DA est noire.

### Ce qui a été fait
`ou_rider.html` lit maintenant `CARTO_KEY` depuis `env.js`. Si elle est vide,
les styles Noir et Clair basculent automatiquement sur Stadia Maps
(`alidade_smooth_dark` / `alidade_smooth`), dont le tier gratuit fonctionne par
autorisation de domaine, sans clé dans le code. Watercolor repointe sur Stadia,
plafonné au zoom 16 comme le recommande leur documentation. Le style Noir est
désormais celui par défaut.

Sans aucune clé : 4 styles fonctionnels sur 6. Avec une clé CARTO : 5. Avec
MapTiler en plus : 6.

### À faire
Option rapide — clé CARTO gratuite sur https://carto.com/basemaps/apikey
(5 M tuiles/mois, sans compte), à coller dans `env.js`. Mais CARTO annonce le
retrait progressif des basemaps raster, donc c'est un sursis.

Option durable — compte Stadia Maps gratuit, et déclarer les domaines
`ridly.ch` et `ridly-beta.vercel.app` dans leur tableau de bord. Rien à mettre
dans le code.


## Partage de story en message privé

Ton chat encodait déjà les médias avec un préfixe de type dans la colonne
`content` : `VOICE:`, `IMG:`, `VID:`. Une story partagée devient un quatrième
type, `FLASH:`. **Aucune modification de schéma** : `ridly_private_messages`
garde `id, from_id, to_id, content, created_at`.

Format : `FLASH:<flash_id>|<media_url>|<expires_at>|<légende>`
La légende est placée en dernier, elle peut contenir des « | ».

### Ce qui a été ajouté
- `feed.html` — bouton ➤ dans la visionneuse de stories, ouvrant une feuille de
  partage avec recherche. Destinataires : riders suivis + riders qui te suivent
  (`rider_follows` dans les deux sens).
- `chat1v1.html` — rendu d'une story reçue en carte verticale avec badge STORY,
  ouverture en plein écran au tap, aperçu `[story]` dans la liste.

### Expiration : un choix à faire
Constante `FLASH_EXPIRE_IN_CHAT` en tête du bloc dans `chat1v1.html`.
- `true` (actuel) : passé `expires_at`, le message affiche « Cette story a expiré ».
- `false` : la story reste consultable indéfiniment dans la conversation.

À noter : rien ne supprime le fichier du Storage à l'expiration, et
`from('flashes').delete()` ne retire que la ligne en base. Le média reste donc
techniquement accessible dans les deux cas — l'expiration est une convention
d'affichage, pas une garantie.

### Piège rencontré
La première version injectait le JS avant le dernier `</script>` du fichier,
qui se trouvait être `<script src="/js/pwa.js">`. Un script portant un attribut
`src` ignore son contenu inline : le code n'aurait jamais été exécuté, sans
aucune erreur en console. Le patch vise désormais le dernier bloc inline.

## Lya — garde-fou contenu sexuel (public mineur)

Trois problèmes, dont un invisible dans les captures.

### 1. Le garde-fou s'exécutait trop tard
`answerBoundary` était appelé après une dizaine de routeurs (encyclopédie,
recherche de personnes, contexte de conversation). Il est désormais la
**première** instruction de `ask()`.

Conséquence observée : « Tu me suces ? » n'était pas détecté, tombait dans le
moteur de FAQ, et recevait une réponse commençant par « Oui. » (celle sur les
X Games). Lu par un enfant, cela ressemble à un consentement.

### 2. Les motifs rataient les conjugaisons et les mots composés
`sucer` ne reconnaissait pas « suces », `\bsexe\b` ne reconnaissait pas
« sexetape ». Sur dix formulations testées, huit passaient à travers.

Une première correction par liste de racines large s'est révélée pire : elle
bloquait **« baisser le guidon »**, « bande de grip », « pipe de direction »,
« faire la queue », « au sein du club », « cumul des points » — du vocabulaire
trottinette courant. Lya aurait accusé des riders posant une vraie question.

La détection est donc en trois niveaux :
- **racines** (préfixe) pour ce qui n'a aucun sens innocent : `suce`, `baise`,
  `niqu`, `porno`, `sexuel`…
- **mots exacts** pour les termes crus isolés
- **parties du corps avec possessif** : « ton cul » compte, « le cul de la
  trottinette » non

Validé sur 33 cas (15 à bloquer, 18 à laisser passer) : 33/33.

### 3. Quinze blagues aléatoires, ce n'est pas une limite
Les réponses tirées au hasard (« Joli essai 😏 », « Je décline élégamment 😌 »)
transforment la limite en collection à débloquer : un public jeune spamme pour
voir les quinze. La variété récompense la tentative.

Remplacé par **une seule réponse, toujours identique, sans emoji**, dans les
quatre langues. Au troisième message du même type dans la session, une
formulation plus ferme. Le pack `flirt` ne remercie plus le compliment
(« Je prends le compliment 😎 ») — il redirige.

L'ancien objet `BOUNDARY_REPLIES` reste dans le fichier mais n'est plus appelé.

## Lya -> JF Ride Shop : liens « Aucun résultat »

La recherche Odoo est un ET sur tous les mots. Les URLs étaient construites avec
des phrases descriptives françaises alors que les produits s'appellent
« Striker Grip Trottinette Freestyle - Golden Bloom ».

- `jfGripBrowseUrl()` cherchait **grips trottinette mousse**. Le mot « mousse »
  n'apparaît dans aucun nom de produit, et la boutique dit « Poignées », pas
  « grips ». Zéro résultat garanti.
- `jfDeckBrowseUrl()` ajoutait « park », « street » ou « polyvalent », qui ne
  figurent dans aucun nom.
- `jfPartSearchUrl()` composait `<catégorie> trottinette freestyle`.

### Correction
Deux chemins distincts :
- **Parcourir une catégorie** -> URL de catégorie réelle. Une page de catégorie
  affiche toujours des produits. Les identifiants sont dans `JF_SHOP_CATEGORIES`
  (deck 21, bar 23, fork 24, JDD 25, roues 26, collier 27, griptape 28,
  poignée/grip 29, pegs+frein 30, hardware 33, complete 22).
- **Chercher un modèle précis** -> `jfSearchUrl()` retire les mots vides
  (trottinette, freestyle, pour, mousse, park…) et ne garde que marque + modèle.
  « ODI Longneck Soft pour trottinette » -> `ODI Longneck Soft`.
  Si le nettoyage ne laisse rien, on renvoie la catégorie plutôt qu'une
  recherche vide.

### Reste à vérifier
Quatre recherches de modèles sont codées en dur : Panda Initio V2, Longway
Summit, North Satisfact, Tilt Contact Build. « Tilt Contact Build » existe bien
au catalogue. « Panda Initio V2 » ne renvoie rien d'exploitable — le catalogue
contient « Panda Initio scooter Freestyle », sans V2. À remplacer par des liens
produit directs.
