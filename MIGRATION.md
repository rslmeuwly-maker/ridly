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

## Park Scanner — points côté serveur

### Ce que l'audit de la base a révélé
`rider_spot_stats` n'est pas une table, c'est une **vue** :

    points = floor(sum(seconds_spent) / 3600)

Soit **1 point par heure** passée sur un spot. Le scanner d'origine
distribuait 10 points par check-in et 25 de bonus : un rider pointant son
GPS deux secondes aurait gagné l'équivalent de 35 heures de ride. Et
inversement, un check-in ne durant rien, écrit tel quel il aurait rapporté 0.

### Architecture retenue
Les check-ins ne sont **pas** écrits dans `rider_spot_sessions` : la colonne
`seconds_spent` représente du temps réel, affiché sur le profil. Y injecter une
durée forfaitaire aurait rendu ce chiffre faux et irrécupérable.

Table dédiée `park_checkins`, et la vue additionne les deux sources.
`total_seconds` garde exactement son sens d'origine. Vérifié : sans aucun
check-in, la vue renvoie les mêmes valeurs qu'avant.

Échelle : 1 point par check-in, 3 au premier passage (constantes
`POINTS_PER_CHECKIN` / `POINTS_FIRST_BONUS` en tête de l'Edge Function).

### Anti-triche
`park_checkins` n'a **aucune policy d'INSERT**. Le navigateur ne peut donc rien
y écrire, même avec la clé anon en clair dans `env.js`. Seule l'Edge Function
`park-checkin`, qui utilise la service_role, insère — après avoir vérifié :
- identité du rider via le JWT, jamais via le corps de la requête
- précision GPS sous 100 m (sinon le test des 150 m ne veut rien dire)
- coordonnées du park lues en base, distance calculée côté serveur
- pas de check-in sur ce park depuis 24 h
- vitesse plausible depuis le check-in précédent (200 km/h max)

Ce dernier contrôle est celui qui gêne le fake GPS : valider deux parks
distants de 200 km à dix minutes d'intervalle est physiquement impossible.

### Page
`park.html`, construite en réutilisant l'ossature de `spot.html` : socle PWA,
en-tête avec wordmark, barre du bas à 5 onglets, DA 2026, et les polices
Bebas Neue / Barlow Condensed réellement chargées (le prototype les déclarait
sans jamais les inclure, d'où un rendu en Arial).

Lien ajouté dans le menu ••• de 11 pages.

L'anti-doublon compare désormais aux parks officiels **et** aux propositions
déjà envoyées.

## Cartes — correction de ma correction

Le correctif précédent basculait le style par défaut sur Stadia Maps quand
aucune clé CARTO n'était renseignée. Deux problèmes que je n'avais pas vérifiés :

1. **Stadia exige un domaine déclaré.** Leur authentification valide les
   en-têtes Origin et Referer ; sans domaine enregistré dans leur tableau de
   bord, chaque tuile renvoie 401. Sans compte Stadia, la carte n'affichait
   donc plus rien du tout — pire que le filigrane CARTO qu'on voulait retirer.
2. **Leur offre gratuite exclut l'usage commercial**, ce qui couvre l'usage par
   une organisation à but lucratif ou dans un produit générant du revenu.
   RIDLY renvoie vers JF Ride Shop : la question se pose.

### Nouvelle chaîne de repli
    CARTO_KEY renseignée   -> CARTO dark   (sombre, cohérent avec la DA)
    STADIA_ENABLED = true  -> Stadia dark  (uniquement si domaine déclaré)
    sinon                  -> OSM standard (aucune inscription, jamais de 401)

`STADIA_ENABLED` est à `false` par défaut dans `env.js`. Vérifié par simulation
sur les quatre configurations possibles : au moins un style fonctionne toujours,
la carte ne peut plus être vide.

Le fond par défaut retombe sur le premier style disponible, jamais sur un
identifiant qui pourrait ne pas exister.

## Lya — tricks et spots

### Tricks
La base ne couvrait que bunny hop, tailwhip, barspin, manual, grinds et la
progression débutant. Sept entrées ajoutées, dans les quatre langues :
180, fakie, heelwhip, briflip, tuck no hander, 360, et une entrée « liste des
tricks » qui donne l'ordre d'apprentissage et invite à demander le détail.

La base passe de 205 à 212 entrées.

À noter : la pénalité de -45 sur `scooter-tailwhip` / `scooter-barspin`
(ligne ~2402) n'est pas un bug. Elle ne s'applique que si la question porte sur
le **choix** d'une trottinette, pour éviter qu'un tutoriel réponde à une question
d'achat. En revanche `scooter-bunnyhop` y est listé alors que l'identifiant réel
est `scooter-bunny-hop` : la pénalité ne s'applique jamais à cette entrée.

### Spots en direct
Les spots étaient des réponses figées. Lya interroge désormais la table `spots`
de Supabase : un park ajouté via l'app est immédiatement connu d'elle.

`ridly-lya.html` ne chargeait **ni le SDK Supabase ni `env.js`** — la recherche
aurait toujours renvoyé vide, sans erreur visible. Les deux balises ont été
ajoutées.

Le routeur passe après le garde-fou et avant la FAQ. Si Supabase ne répond pas,
le routeur normal reprend la main (`askFallback`), avec un verrou pour éviter la
récursion. Quand un lieu est demandé sans correspondance, Lya le dit et propose
d'ajouter le spot, au lieu de sortir une liste au hasard.

Vérifié : 7 formulations déclenchent la recherche, 5 formulations proches
(« c'est quoi un spot ») ne la déclenchent pas.

## Lya — définition avant technique

Test réel : « c'est quoi un whip » renvoyait le tutoriel du tailwhip, identique
à ce que renvoyait « whip ». Chaque trick n'avait qu'une entrée, rédigée en
« comment apprendre », sans jamais dire ce qu'est le trick.

Sept entrées commençaient directement par la technique : bunny hop, tailwhip,
barspin, grinds, manual, 180, 360. Une phrase de définition a été mise en tête
de chacune, dans les quatre langues, et les mots-clés « c'est quoi X » /
« définition X » ont été ajoutés. Une seule entrée répond désormais
correctement aux deux formes de question.

« whip » était un mot-clé partagé entre `scooter-tailwhip` et
`scooter-heelwhip` : le gagnant dépendait du score. Retiré de heelwhip, qui
garde « heelwhip » et « heel whip ». Dans l'usage courant, un whip est un
tailwhip.

## Lya — extension encyclopédique + emoji trottinette

### Emoji
16 occurrences de 🛹 (skateboard) remplacées par 🛴 dans 11 fichiers, dont le
marqueur des skateparks sur la carte de `ou_rider.html` et l'icône des parks
débloqués du scanner. RIDLY est une app de trottinette.

À noter : le marqueur « park » reste violet (`#7c3aed`) sur la carte, ce qui
jure avec la DA noir/rouge. Changement de couleur non fait, c'est un choix
graphique — les couleurs distinguent aussi les catégories (street orange,
shop rouge, cours vert).

### 31 entrées ajoutées
La base passe de 212 à **243 entrées**.

- Rotations : 540, nollie, nose manual
- Grinds : 50-50, feeble, smith, icepick, toothpick, crooked
- Style : no footer, one foot, can can, x-up, tabletop
- Combinaisons : bar to whip, double whip, finger whip, opposite
- Transition : drop in, pump, air, transfer, tailtap
- Flips : backflip, frontflip, flair
- Vocabulaire : coping, run, clean/sketchy, bail, session

Chaque entrée suit le schéma **définition d'abord, technique ensuite**, dans
les quatre langues. C'est ce qui permet à « c'est quoi X » et « comment faire
X » de tomber sur la même entrée sans la dupliquer.

### Encadrement des tricks à risque
Les entrées backflip, frontflip et flair renvoient explicitement au foam pit ou
à l'airbag et à un encadrement, et déconseillent l'apprentissage en autodidacte
sur du dur. Le backflip mentionne le risque tête et nuque et invite les mineurs
à en parler à un coach. L'entrée `bail` traite la chute contrôlée comme une
compétence à apprendre en même temps que les tricks.

Vérifié : 243 entrées, 0 identifiant en double, les 4 langues sur chaque entrée.

## Profil — heures de ride et passeport séparés

Deux sections distinctes :
- **Statistiques RIDLY — Spots** : le temps passé, avec les points de ride seuls.
  Les spots sans temps de ride n'y apparaissent plus.
- **Passeport skateparks** : les parks débloqués au scanner, triés par nombre de
  check-ins, avec un en-tête « X débloqués sur Y » et un lien vers le scanner.

Aucun point n'est compté deux fois : la liste des heures affiche
`points - checkin_points`, le passeport affiche `checkin_points`, et la ligne
« Total RIDLY » affiche la somme.

### Deux défauts existants corrigés au passage
- « Total RIDLY » affichait `Math.floor(totalSecondsAll/3600)` : il recalculait
  les points depuis le temps au lieu d'additionner la colonne `points`. Depuis la
  mise en service des check-ins, ce total les ignorait et **sous-estimait** les
  points du rider.
- Le bloc entier ne s'affichait que si `totalSecondsAll > 0`. Un rider n'ayant
  que des check-ins et aucune session ne voyait rien.

Le tri par `total_seconds` est conservé pour la ligne « Skatepark local » : le
park d'attache est celui où l'on passe des heures, pas celui où l'on a pointé
une fois.

## Nouveau logo — DA 2026

### Le problème
`image/1logo_ridly.png` est l'ancien logo : **vert sur fond blanc**. Toutes les
icônes d'application en avaient été dérivées par `sips`. L'icône sur l'écran
d'accueil du téléphone était donc verte sur blanc, alors que toute l'app est
noire et rouge.

Il restait aussi 14 occurrences de `box-shadow:0 0 12px rgba(34,197,94,.7)` —
une lueur verte autour du logo dans l'en-tête de 14 pages.

### Ce qui a été fait
Logo redessiné en **vectoriel**, donc net à toutes les tailles et modifiable
sans repasser par un éditeur d'images. Deux fichiers distincts :

- `image/ridly-logo.svg` — le verrou complet (repère + RIDLY + BY RSL),
  pour les en-têtes et les supports imprimés
- `image/ridly-mark.svg` — le symbole seul, pour les icônes

La séparation est nécessaire : à 192 px sur un écran d'accueil, « BY RSL »
serait illisible. Une icône d'app ne porte que le symbole.

Jeu d'icônes régénéré : `icon-192`, `icon-512`, `apple-touch-icon`,
`icon-maskable-192`, `icon-maskable-512`.

### Version maskable
Android rogne jusqu'à 20 % de chaque bord selon le lanceur. Le symbole de la
version maskable est réduit à 70 % et recentré pour tenir dans la zone sûre.
Vérifié par contrôle programmatique des 10 % de bordure, puis visuellement en
simulant le rognage : la pointe du repère reste entière.

Lisibilité vérifiée à 512, 192, 96 et 48 px.

La lueur verte de l'en-tête est passée au rouge sur les 14 pages, et le cache
du service worker est passé de `ridly-v4` à `ridly-v5` pour que les anciennes
icônes vertes ne restent pas servies depuis le cache des riders.

## Pages d'entrée — DA 2026

`reset_password.html`, `conditions.html` et `confidentialite.html` avaient reçu
le socle PWA mais **jamais la charte 2026**. Elles gardaient le vert `#22c55e`,
le vert foncé `#16a34a` et un fond bleu nuit `#020617` / `#022c22`, hérités de
l'ancienne identité. Constaté en production sur `ridly.ch/reset_password`.

Corrigé : variables `--green` / `--green-dark` renommées en `--red` /
`--red-dark`, fonds passés au noir de la DA avec la lueur rouge, polices Bebas
Neue et Barlow Condensed ajoutées, titres alignés. Zéro résidu vert sur ces
trois pages. La logique de réinitialisation est intacte.

### Vert résiduel ailleurs — volontairement non traité
16 pages contiennent encore des occurrences de `#22c55e` / `#16a34a`, mais la
plupart sont **mortes** : le bloc DA redéfinit `--accent:#cc0000` plus bas dans
la feuille, donc tout ce qui passe par la variable rend en rouge.

Restent visibles quelques valeurs écrites en dur, notamment dans
`ou_rider.html` : un texte en style inline ligne 1276, le dégradé du bouton de
partage ligne 463, des bordures lignes 2074 et 2103.

Aucun remplacement global effectué : `int:mk('#16a34a','🏫')` est la couleur de
la catégorie « cours » sur la carte, elle est délibérée, et un remplacement
aveugle casserait la distinction visuelle des catégories.

## Logo — retour au logo de marque existant

Constat en production sur `ridly.ch/reset_password` : le logo d'en-tête restait
vert. C'était une **image**, que le patch CSS des pages d'entrée ne touchait pas.

En cherchant, `image/ridly-logo-exact.webp` s'est révélé être le vrai logo de
marque, déjà correct en noir et rouge, déjà utilisé par `compte.html` et
`index.html`. Le SVG que j'avais dessiné auparavant était donc **inutile** : il
recréait approximativement un logo qui existait déjà. Il a été supprimé
(`ridly-logo.svg`, `ridly-mark.svg`, `logo-ridly.png`).

### Références à l'ancien logo vert, toutes corrigées
- `reset_password.html` — logo d'en-tête
- `feed.html` et `spot.html` — **avatar par défaut des riders sans photo**.
  Tous les nouveaux inscrits avaient donc un avatar vert. Remplacé par
  `icon-192.png`, lisible dans une pastille ronde.
- `service-worker.js` — préchargement de l'ancien fichier

### Icônes régénérées depuis le repère officiel
Le repère a été extrait du logo de marque par détection de sa boîte englobante
rouge, plutôt que redessiné. Premier essai : un carré noir visible entourait le
symbole, le découpage ayant emporté le fond `#000` du logo alors que la toile
est en `#080808`. Corrigé en dérivant l'alpha du canal rouge, ce qui préserve
l'antialiasing des bords sans emporter le fond. Bordure vérifiée uniforme.

Le verrou complet ne convient pas comme icône : à 96 px, « BY RSL » devient une
tache. Les icônes ne portent donc que le repère, le verrou reste pour les
en-têtes.

Maskable à 56 % du cadre, vérifié par contrôle des 10 % de bordure puis
visuellement en simulant le rognage Android.
