// js/lya-knowledge.js — base de connaissances de Lya
//
// Ce fichier ne contient QUE des donnees. Le moteur de Lya vit dans
// ridly-lya.html et n'a pas besoin d'etre touche pour corriger une
// reponse ou ajouter une entree.
//
// Format d'une entree :
//   {
//     "id":        identifiant unique, sert aux regles de score
//     "category":  regroupement thematique
//     "questions": { fr, de, it, en }   la question type
//     "answer":    { fr, de, it, en }   la reponse
//     "keywords":  [ ... ]              termes qui declenchent l'entree
//     "source":    { label, url }       affiche sous la reponse
//     "dynamic":   false                true = donnee susceptible de changer
//     "verified":  "AAAA-MM-JJ"         derniere verification
//   }
//
// Pour une entree de trick, commencer la reponse par une DEFINITION puis
// donner la technique : « c'est quoi X » et « comment faire X » tombent
// ainsi sur la meme entree.

window.RIDLY_KNOWLEDGE = [
 {
  "id": "ridly-overview",
  "category": "RIDLY",
  "questions": {
   "fr": "C’est quoi RIDLY ?",
   "de": "Was ist RIDLY?",
   "it": "Cos’è RIDLY?",
   "en": "What is RIDLY?"
  },
  "answer": {
   "fr": "RIDLY est un mini-réseau social orienté sports de ride, avec un cœur très trottinette freestyle. Il réunit une carte de spots, des profils riders, un feed, des classements, du chat et des jeux comme le Game of Scoot.",
   "de": "RIDLY ist eine kleine Social-App für Actionsport und besonders Freestyle-Scooter. Sie verbindet Spot-Karte, Rider-Profile, Feed, Rankings, Chat und Games wie Game of Scoot.",
   "it": "RIDLY è una mini-app social dedicata agli sport di ride, soprattutto al monopattino freestyle. Riunisce mappa degli spot, profili rider, feed, classifiche, chat e giochi come Game of Scoot.",
   "en": "RIDLY is a small social app for ride sports, especially freestyle scooter. It combines a spot map, rider profiles, a feed, rankings, chat and games such as Game of Scoot."
  },
  "keywords": [
   "ridly",
   "application",
   "app",
   "réseau social",
   "social network",
   "social app",
   "mini réseau",
   "monopattino",
   "scooter"
  ],
  "source": {
   "label": "RIDLY",
   "url": "https://ridly.ch/"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "ridly-free",
  "category": "RIDLY",
  "questions": {
   "fr": "RIDLY est-il gratuit ?",
   "de": "Ist RIDLY kostenlos?",
   "it": "RIDLY è gratuito?",
   "en": "Is RIDLY free?"
  },
  "answer": {
   "fr": "L’accès RIDLY est présenté comme gratuit. Il faut se connecter pour accéder aux spots, au feed et aux games. Les conditions prévoient que des fonctions payantes pourraient éventuellement apparaître plus tard.",
   "de": "RIDLY wird als kostenlos zugänglich präsentiert. Für Spots, Feed und Games ist eine Anmeldung erforderlich. Die Bedingungen lassen offen, dass später kostenpflichtige Funktionen hinzukommen könnten.",
   "it": "RIDLY è presentato come accessibile gratuitamente. Per spot, feed e giochi serve il login. Le condizioni prevedono che in futuro possano essere aggiunte funzioni a pagamento.",
   "en": "RIDLY is presented as free to access. You need to sign in for spots, the feed and games. The terms allow for paid features to potentially be added later."
  },
  "keywords": [
   "gratuit",
   "prix",
   "free",
   "kostenlos",
   "gratis",
   "payer",
   "payant",
   "paid"
  ],
  "source": {
   "label": "RIDLY",
   "url": "https://ridly.ch/"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "ridly-map",
  "category": "RIDLY",
  "questions": {
   "fr": "Qu’est-ce qu’on trouve sur la carte RIDLY ?",
   "de": "Was findet man auf der RIDLY-Karte?",
   "it": "Cosa si trova sulla mappa RIDLY?",
   "en": "What is on the RIDLY map?"
  },
  "answer": {
   "fr": "La carte RIDLY sert à trouver des skateparks, des street spots, des shops partenaires et des lieux de cours. Elle peut utiliser ta géolocalisation pour afficher ce qui se trouve autour de toi.",
   "de": "Auf der RIDLY-Karte findest du Skateparks, Street-Spots, Partner-Shops und Kursorte. Mit deiner Erlaubnis kann die Standortfunktion Spots in deiner Nähe anzeigen.",
   "it": "La mappa RIDLY permette di trovare skatepark, street spot, shop partner e luoghi dei corsi. Con il tuo permesso può usare la posizione per mostrare ciò che è vicino a te.",
   "en": "The RIDLY map helps you find skateparks, street spots, partner shops and course locations. With permission it can use geolocation to show what is near you."
  },
  "keywords": [
   "carte",
   "map",
   "spot",
   "skatepark",
   "street",
   "shop partenaire",
   "cours",
   "karte",
   "mappa",
   "geolocalisation"
  ],
  "source": {
   "label": "RIDLY Map",
   "url": "https://ridly.ch/"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "ridly-geolocation",
  "category": "RIDLY",
  "questions": {
   "fr": "Est-ce que RIDLY utilise ma position ?",
   "de": "Verwendet RIDLY meinen Standort?",
   "it": "RIDLY usa la mia posizione?",
   "en": "Does RIDLY use my location?"
  },
  "answer": {
   "fr": "La carte peut demander ta géolocalisation pour centrer la recherche autour de toi. Le navigateur doit te demander l’autorisation : tu peux refuser et utiliser la carte manuellement.",
   "de": "Die Karte kann nach deinem Standort fragen, um die Suche auf deine Umgebung zu zentrieren. Der Browser muss um Erlaubnis fragen; du kannst ablehnen und die Karte manuell nutzen.",
   "it": "La mappa può chiedere la geolocalizzazione per centrare la ricerca vicino a te. Il browser deve chiedere il permesso; puoi rifiutare e usare la mappa manualmente.",
   "en": "The map can request your location to center searches around you. Your browser must ask for permission; you can refuse and use the map manually."
  },
  "keywords": [
   "position",
   "géolocalisation",
   "gps",
   "location",
   "standort",
   "posizione",
   "autour de moi",
   "near me"
  ],
  "source": {
   "label": "RIDLY Map",
   "url": "https://ridly.ch/"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "ridly-add-spot",
  "category": "RIDLY",
  "questions": {
   "fr": "Comment ajouter un spot sur RIDLY ?",
   "de": "Wie füge ich einen Spot auf RIDLY hinzu?",
   "it": "Come aggiungo uno spot su RIDLY?",
   "en": "How do I add a spot on RIDLY?"
  },
  "answer": {
   "fr": "Passe par la page Ajouter : tu peux créer un spot en indiquant notamment son nom, pays, ville et emplacement sur la carte. Vérifie bien la position et les informations avant de publier.",
   "de": "Nutze die Seite „Hinzufügen“: Dort kannst du einen Spot mit Name, Land, Stadt und Kartenposition anlegen. Prüfe Standort und Angaben vor dem Veröffentlichen.",
   "it": "Vai nella pagina Aggiungi: puoi creare uno spot indicando nome, paese, città e posizione sulla mappa. Controlla bene i dati prima di pubblicare.",
   "en": "Use the Add page: you can create a spot with its name, country, city and map location. Check the position and details before publishing."
  },
  "keywords": [
   "ajouter spot",
   "créer spot",
   "add spot",
   "new spot",
   "spot hinzufügen",
   "aggiungi spot",
   "nom ville latitude longitude"
  ],
  "source": {
   "label": "RIDLY – Ajouter",
   "url": "ajouter.html"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "ridly-post",
  "category": "RIDLY",
  "questions": {
   "fr": "Qu’est-ce que je peux publier sur RIDLY ?",
   "de": "Was kann ich auf RIDLY posten?",
   "it": "Cosa posso pubblicare su RIDLY?",
   "en": "What can I post on RIDLY?"
  },
  "answer": {
   "fr": "RIDLY prévoit plusieurs formats : publication dans le feed, Story temporaire et Reel vertical. Lors de la publication, tu peux choisir une catégorie comme Street, Park, Pumptrack, Contest ou Lifestyle et éventuellement rattacher le contenu à un spot.",
   "de": "RIDLY bietet mehrere Formate: Feed-Post, temporäre Story und vertikales Reel. Beim Posten kannst du Kategorien wie Street, Park, Pumptrack, Contest oder Lifestyle wählen und den Inhalt optional mit einem Spot verknüpfen.",
   "it": "RIDLY prevede diversi formati: post nel feed, Story temporanea e Reel verticale. Puoi scegliere categorie come Street, Park, Pumptrack, Contest o Lifestyle e collegare eventualmente il contenuto a uno spot.",
   "en": "RIDLY supports several formats: feed posts, temporary Stories and vertical Reels. You can choose categories such as Street, Park, Pumptrack, Contest or Lifestyle and optionally link the content to a spot."
  },
  "keywords": [
   "publier",
   "post",
   "feed",
   "story",
   "reel",
   "street",
   "park",
   "pumptrack",
   "contest",
   "lifestyle",
   "veröffentlichen",
   "pubblicare"
  ],
  "source": {
   "label": "RIDLY – Ajouter",
   "url": "ajouter.html"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "ridly-story",
  "category": "RIDLY",
  "questions": {
   "fr": "Combien de temps dure une Story RIDLY ?",
   "de": "Wie lange bleibt eine RIDLY-Story?",
   "it": "Quanto dura una Story RIDLY?",
   "en": "How long does a RIDLY Story last?"
  },
  "answer": {
   "fr": "Dans la version actuelle du projet, une Story RIDLY est prévue comme contenu temporaire pendant 48 heures.",
   "de": "In der aktuellen Projektversion ist eine RIDLY-Story als temporärer Inhalt für 48 Stunden vorgesehen.",
   "it": "Nella versione attuale del progetto, una Story RIDLY è prevista come contenuto temporaneo per 48 ore.",
   "en": "In the current project version, a RIDLY Story is designed as temporary content lasting 48 hours."
  },
  "keywords": [
   "story",
   "48h",
   "48 heures",
   "temporary",
   "temporär",
   "temporanea"
  ],
  "source": {
   "label": "RIDLY – Ajouter",
   "url": "ajouter.html"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "ridly-feed-rating",
  "category": "RIDLY",
  "questions": {
   "fr": "Peut-on noter les publications RIDLY ?",
   "de": "Kann man RIDLY-Posts bewerten?",
   "it": "Si possono valutare i post RIDLY?",
   "en": "Can RIDLY posts be rated?"
  },
  "answer": {
   "fr": "Oui. Le feed prévoit une notation de 1 à 5 roues pour réagir aux publications.",
   "de": "Ja. Im Feed können Beiträge mit 1 bis 5 Rädern bewertet werden.",
   "it": "Sì. Nel feed i post possono essere valutati da 1 a 5 ruote.",
   "en": "Yes. The feed includes a 1-to-5 wheel rating for posts."
  },
  "keywords": [
   "noter",
   "note",
   "rating",
   "roues",
   "wheels",
   "bewerten",
   "ruote",
   "1 5"
  ],
  "source": {
   "label": "RIDLY – Feed",
   "url": "feed.html"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "ridly-share-message",
  "category": "RIDLY",
  "questions": {
   "fr": "Peut-on partager un post en message privé ?",
   "de": "Kann ich einen Post privat teilen?",
   "it": "Posso condividere un post in privato?",
   "en": "Can I share a post in a private message?"
  },
  "answer": {
   "fr": "Oui. Le feed prévoit le partage d’une publication dans une conversation privée RIDLY.",
   "de": "Ja. Ein Feed-Beitrag kann in einer privaten RIDLY-Unterhaltung geteilt werden.",
   "it": "Sì. Un post del feed può essere condiviso in una conversazione privata RIDLY.",
   "en": "Yes. A feed post can be shared into a private RIDLY conversation."
  },
  "keywords": [
   "partager",
   "share",
   "message privé",
   "private message",
   "teilen",
   "condividere",
   "dm"
  ],
  "source": {
   "label": "RIDLY – Feed",
   "url": "feed.html"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "ridly-profile",
  "category": "RIDLY",
  "questions": {
   "fr": "Qu’y a-t-il sur un profil rider ?",
   "de": "Was steht in einem Rider-Profil?",
   "it": "Cosa contiene un profilo rider?",
   "en": "What is on a rider profile?"
  },
  "answer": {
   "fr": "Le profil RIDLY peut contenir pseudo, nom, ville, canton, pays, genre, Instagram, bio et avatar. Il affiche aussi des éléments sociaux et d’activité comme publications, followers et statistiques liées aux spots ou sessions.",
   "de": "Ein RIDLY-Profil kann Nickname, Name, Stadt, Kanton, Land, Geschlecht, Instagram, Bio und Avatar enthalten. Dazu kommen soziale und Aktivitätsdaten wie Beiträge, Follower sowie Spot- oder Session-Statistiken.",
   "it": "Un profilo RIDLY può contenere nickname, nome, città, cantone, paese, genere, Instagram, bio e avatar. Mostra anche elementi social e attività come post, follower e statistiche di spot o sessioni.",
   "en": "A RIDLY profile can include username, name, city, canton, country, gender, Instagram, bio and avatar. It also shows social/activity elements such as posts, followers and spot or session statistics."
  },
  "keywords": [
   "profil",
   "profile",
   "pseudo",
   "avatar",
   "bio",
   "instagram",
   "followers",
   "statistiques",
   "profil rider"
  ],
  "source": {
   "label": "RIDLY – Profil",
   "url": "profil_ou_rider.html"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "ridly-rankings",
  "category": "RIDLY",
  "questions": {
   "fr": "Comment fonctionnent les classements RIDLY ?",
   "de": "Wie funktionieren die RIDLY-Rankings?",
   "it": "Come funzionano le classifiche RIDLY?",
   "en": "How do RIDLY rankings work?"
  },
  "answer": {
   "fr": "La page Classements permet de filtrer notamment par pays, spot et recherche rider/ville. Le projet prévoit des classements globaux ou par spot avec du temps et des points.",
   "de": "Auf der Ranking-Seite kann unter anderem nach Land, Spot und Rider/Stadt gefiltert werden. Vorgesehen sind globale oder spotbezogene Rankings mit Zeit und Punkten.",
   "it": "La pagina Classifiche permette di filtrare per paese, spot e ricerca rider/città. Il progetto prevede classifiche globali o per spot con tempo e punti.",
   "en": "The Rankings page can be filtered by country, spot and rider/city search. The project supports global or per-spot rankings with time and points."
  },
  "keywords": [
   "classement",
   "ranking",
   "points",
   "temps",
   "spot",
   "country",
   "pays",
   "rangliste",
   "classifica"
  ],
  "source": {
   "label": "RIDLY – Classements",
   "url": "classement.html"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "ridly-global-chat",
  "category": "RIDLY",
  "questions": {
   "fr": "RIDLY a-t-il un chat général ?",
   "de": "Hat RIDLY einen öffentlichen Chat?",
   "it": "RIDLY ha una chat generale?",
   "en": "Does RIDLY have a global chat?"
  },
  "answer": {
   "fr": "Oui. RIDLY comporte un chat riders général réservé aux utilisateurs connectés. Une modération automatique bloque déjà certains mots.",
   "de": "Ja. RIDLY enthält einen allgemeinen Rider-Chat für angemeldete Nutzer. Einige Wörter werden bereits automatisch moderiert.",
   "it": "Sì. RIDLY include una chat generale per rider accessibile agli utenti connessi. Alcune parole vengono già bloccate automaticamente.",
   "en": "Yes. RIDLY includes a general riders chat for signed-in users. Some words are already blocked by automatic moderation."
  },
  "keywords": [
   "chat",
   "chat général",
   "global chat",
   "discussion",
   "moderation",
   "modération"
  ],
  "source": {
   "label": "RIDLY – Chat",
   "url": "chat.html"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "ridly-private-chat",
  "category": "RIDLY",
  "questions": {
   "fr": "Peut-on parler en privé sur RIDLY ?",
   "de": "Gibt es private Nachrichten auf RIDLY?",
   "it": "Ci sono messaggi privati su RIDLY?",
   "en": "Does RIDLY have private messages?"
  },
  "answer": {
   "fr": "Oui. RIDLY comporte aussi un chat privé 1 contre 1. Le projet prévoit l’envoi de médias et une interface pour l’audio ; les vidéos sont limitées à 20 secondes dans cette version.",
   "de": "Ja. RIDLY hat auch einen privaten 1-zu-1-Chat. Medien und eine Audio-Funktion sind vorgesehen; Videos sind in dieser Version auf 20 Sekunden begrenzt.",
   "it": "Sì. RIDLY include anche una chat privata 1 a 1. Sono previsti media e una funzione audio; in questa versione i video sono limitati a 20 secondi.",
   "en": "Yes. RIDLY also has one-to-one private chat. Media and an audio interface are supported; videos are limited to 20 seconds in this version."
  },
  "keywords": [
   "chat privé",
   "private chat",
   "message privé",
   "dm",
   "1v1",
   "audio",
   "video 20"
  ],
  "source": {
   "label": "RIDLY – Chat privé",
   "url": "chat1v1.html"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "ridly-games",
  "category": "RIDLY",
  "questions": {
   "fr": "Quels jeux y a-t-il sur RIDLY ?",
   "de": "Welche Games gibt es auf RIDLY?",
   "it": "Quali giochi ci sono su RIDLY?",
   "en": "What games are on RIDLY?"
  },
  "answer": {
   "fr": "RIDLY possède un Game Hub autour de la trottinette : Game of Scoot classique et vidéo, ainsi que plusieurs mini-jeux/challenges comme Simon, Random Tricks, Challenges, Scoot Runner ou Finger Hero selon la version disponible.",
   "de": "RIDLY hat einen Scooter-Game-Hub mit klassischem und Video-Game-of-Scoot sowie mehreren Mini-Games/Challenges wie Simon, Random Tricks, Challenges, Scoot Runner oder Finger Hero – je nach verfügbarer Version.",
   "it": "RIDLY ha un Game Hub dedicato al monopattino con Game of Scoot classico e video, oltre a mini-giochi/challenge come Simon, Random Tricks, Challenges, Scoot Runner o Finger Hero secondo la versione.",
   "en": "RIDLY has a scooter Game Hub with classic and video Game of Scoot plus mini-games/challenges such as Simon, Random Tricks, Challenges, Scoot Runner or Finger Hero depending on the version."
  },
  "keywords": [
   "games",
   "jeux",
   "game of scoot",
   "simon",
   "random tricks",
   "finger hero",
   "scoot runner",
   "challenge"
  ],
  "source": {
   "label": "RIDLY – Games",
   "url": "games.html"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "ridly-game-of-scoot",
  "category": "RIDLY",
  "questions": {
   "fr": "Comment marche le Game of Scoot classique ?",
   "de": "Wie funktioniert das klassische Game of Scoot?",
   "it": "Come funziona il Game of Scoot classico?",
   "en": "How does classic Game of Scoot work?"
  },
  "answer": {
   "fr": "Le mode classique sert à organiser un Game of Scoot avec les lettres S-C-O-O-T. RIDLY permet de partager un code de partie et ce mode ne demande pas obligatoirement de vidéo.",
   "de": "Der klassische Modus organisiert ein Game of Scoot mit den Buchstaben S-C-O-O-T. RIDLY ermöglicht einen Spielcode; in diesem Modus ist kein Video zwingend erforderlich.",
   "it": "La modalità classica organizza un Game of Scoot con le lettere S-C-O-O-T. RIDLY permette di condividere un codice partita e non richiede obbligatoriamente un video.",
   "en": "Classic mode runs a Game of Scoot using the letters S-C-O-O-T. RIDLY lets players share a game code and this mode does not require video."
  },
  "keywords": [
   "game of scoot",
   "scoot",
   "lettres scoot",
   "code partie",
   "game code",
   "classique"
  ],
  "source": {
   "label": "RIDLY – Game of Scoot",
   "url": "game_scoot_classic.html"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "ridly-account",
  "category": "RIDLY",
  "questions": {
   "fr": "Comment se connecter à RIDLY ?",
   "de": "Wie melde ich mich bei RIDLY an?",
   "it": "Come accedo a RIDLY?",
   "en": "How do I sign in to RIDLY?"
  },
  "answer": {
   "fr": "La page Compte utilise Supabase Auth. Tu peux te connecter par e-mail et mot de passe ; le projet prévoit aussi un lien magique par e-mail. Si tu as déjà une session valide, RIDLY peut t’envoyer directement vers la carte.",
   "de": "Die Konto-Seite nutzt Supabase Auth. Du kannst dich mit E-Mail und Passwort anmelden; außerdem ist ein Magic-Link per E-Mail vorgesehen. Mit gültiger Session kann RIDLY direkt zur Karte weiterleiten.",
   "it": "La pagina Account usa Supabase Auth. Puoi accedere con e-mail e password; è previsto anche un link magico via e-mail. Con una sessione valida RIDLY può portarti direttamente alla mappa.",
   "en": "The Account page uses Supabase Auth. You can sign in with email and password, and the project also supports an email magic link. With an existing valid session RIDLY can send you straight to the map."
  },
  "keywords": [
   "connexion",
   "login",
   "compte",
   "account",
   "supabase",
   "mot de passe",
   "password",
   "magic link",
   "lien magique"
  ],
  "source": {
   "label": "RIDLY – Compte",
   "url": "compte.html"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "ridly-password-reset",
  "category": "RIDLY",
  "questions": {
   "fr": "J’ai oublié mon mot de passe RIDLY.",
   "de": "Ich habe mein RIDLY-Passwort vergessen.",
   "it": "Ho dimenticato la password RIDLY.",
   "en": "I forgot my RIDLY password."
  },
  "answer": {
   "fr": "Utilise « Mot de passe oublié ? » sur la page Compte. RIDLY envoie un e-mail de réinitialisation et renvoie ensuite vers la page dédiée au nouveau mot de passe.",
   "de": "Nutze „Passwort vergessen?“ auf der Konto-Seite. RIDLY verschickt eine Reset-E-Mail und führt anschließend zur Seite für das neue Passwort.",
   "it": "Usa “Password dimenticata?” nella pagina Account. RIDLY invia un’e-mail di reimpostazione e poi apre la pagina dedicata alla nuova password.",
   "en": "Use “Forgot password?” on the Account page. RIDLY sends a reset email and then directs you to the dedicated new-password page."
  },
  "keywords": [
   "mot de passe oublié",
   "forgot password",
   "reset password",
   "passwort vergessen",
   "password dimenticata"
  ],
  "source": {
   "label": "RIDLY – Compte",
   "url": "compte.html"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "ridly-pwa",
  "category": "RIDLY",
  "questions": {
   "fr": "Peut-on installer RIDLY comme une app ?",
   "de": "Kann RIDLY als App installiert werden?",
   "it": "Si può installare RIDLY come app?",
   "en": "Can RIDLY be installed like an app?"
  },
  "answer": {
   "fr": "Oui. RIDLY est conçu comme une PWA : avec le manifest et le service worker, un navigateur compatible peut proposer « Installer » ou « Ajouter à l’écran d’accueil ». Sur iPhone, l’installation passe généralement par Safari > Partager > Ajouter à l’écran d’accueil.",
   "de": "Ja. RIDLY ist als PWA ausgelegt: Mit Manifest und Service Worker kann ein kompatibler Browser „Installieren“ oder „Zum Home-Bildschirm“ anbieten. Auf dem iPhone läuft es meist über Safari > Teilen > Zum Home-Bildschirm.",
   "it": "Sì. RIDLY è progettato come PWA: con manifest e service worker un browser compatibile può proporre “Installa” o “Aggiungi alla schermata Home”. Su iPhone di solito si usa Safari > Condividi > Aggiungi alla schermata Home.",
   "en": "Yes. RIDLY is designed as a PWA: with its manifest and service worker a compatible browser can offer Install/Add to Home Screen. On iPhone this is usually Safari > Share > Add to Home Screen."
  },
  "keywords": [
   "pwa",
   "installer",
   "installation",
   "app",
   "écran accueil",
   "home screen",
   "installieren",
   "schermata home"
  ],
  "source": {
   "label": "RIDLY",
   "url": "https://ridly.ch/"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "ridly-age",
  "category": "RIDLY",
  "questions": {
   "fr": "Quel âge faut-il pour s’inscrire et publier sur RIDLY ?",
   "de": "Wie alt muss man sein, um sich bei RIDLY anzumelden und zu posten?",
   "it": "Quanti anni bisogna avere per iscriversi e pubblicare su RIDLY?",
   "en": "How old do you need to be to sign up and post on RIDLY?"
  },
  "answer": {
   "fr": "Pour créer un compte, s’inscrire et publier sur RIDLY, il faut avoir au minimum 13 ans. Pour les moins de 16 ans, le consentement du représentant légal est prévu.",
   "de": "Um ein RIDLY-Konto zu erstellen, sich anzumelden und Inhalte zu veröffentlichen, muss man mindestens 13 Jahre alt sein. Unter 16 Jahren ist die Zustimmung eines gesetzlichen Vertreters vorgesehen.",
   "it": "Per creare un account, iscriversi e pubblicare su RIDLY bisogna avere almeno 13 anni. Per chi ha meno di 16 anni è previsto il consenso del rappresentante legale.",
   "en": "You must be at least 13 to create an account, sign up and publish on RIDLY. Users under 16 are expected to have consent from a legal guardian."
  },
  "keywords": [
   "âge minimum ridly",
   "age minimum ridly",
   "quel âge ridly",
   "quel age ridly",
   "combien d ans ridly",
   "j ai 12 ans ridly",
   "j ai douze ans ridly",
   "j ai 13 ans ridly",
   "m inscrire ridly",
   "inscription ridly",
   "créer compte ridly",
   "creer compte ridly",
   "publier ridly",
   "poster ridly",
   "mettre un reel ridly",
   "trop jeune ridly",
   "minimum 13 ans",
   "13 ans",
   "moins de 13 ans",
   "mineur ridly",
   "parent ridly",
   "mindestalter ridly",
   "bei ridly anmelden",
   "ridly posten",
   "13 jahre ridly",
   "età minima ridly",
   "eta minima ridly",
   "iscriversi ridly",
   "pubblicare ridly",
   "13 anni ridly",
   "minimum age ridly",
   "sign up ridly",
   "register ridly",
   "post on ridly",
   "13 years old ridly"
  ],
  "policy": {
   "minAge": 13,
   "guardianConsentUnder": 16,
   "appliesTo": [
    "account",
    "registration",
    "publishing"
   ]
  },
  "responseVariants": {
   "fr": {
    "generic": [
     "Pour s’inscrire et publier sur RIDLY, il faut avoir au minimum {minAge} ans. Si tu as moins de {guardianAge} ans, l’accord d’un représentant légal est prévu.",
     "L’âge minimum pour créer un compte et publier sur RIDLY est de {minAge} ans. En dessous, l’inscription n’est pas possible.",
     "RIDLY demande au moins {minAge} ans pour l’inscription et la publication. Pour les moins de {guardianAge} ans, le consentement d’un représentant légal est prévu."
    ],
    "under": [
     "Pas encore 😅 À {age} ans, tu es en dessous de l’âge minimum. Il faut avoir au moins {minAge} ans pour s’inscrire et publier sur RIDLY.",
     "Non, pas encore. RIDLY demande {minAge} ans minimum pour créer un compte et publier. À {age} ans, il faut encore attendre un peu 🙂",
     "À {age} ans, tu ne peux pas encore t’inscrire ni publier sur RIDLY. L’âge minimum est de {minAge} ans."
    ],
    "allowedMinor": [
     "Oui 👍 À {age} ans, tu as l’âge minimum pour t’inscrire et publier sur RIDLY. Comme tu as moins de {guardianAge} ans, le consentement d’un représentant légal est prévu.",
     "Oui, à {age} ans c’est possible : RIDLY accepte l’inscription dès {minAge} ans. Avant {guardianAge} ans, l’accord d’un représentant légal est prévu.",
     "Tu as l’âge requis 👍 À {age} ans, tu peux t’inscrire et publier sur RIDLY, avec le consentement prévu d’un représentant légal puisque tu as moins de {guardianAge} ans."
    ],
    "allowedAdult": [
     "Oui 👍 À {age} ans, tu dépasses l’âge minimum de {minAge} ans pour t’inscrire et publier sur RIDLY.",
     "Oui, aucun problème côté âge : RIDLY demande au minimum {minAge} ans et tu as {age} ans.",
     "Côté âge, c’est bon 👍 Il faut au moins {minAge} ans pour s’inscrire et publier sur RIDLY."
    ]
   },
   "de": {
    "generic": [
     "Für Anmeldung und Veröffentlichungen auf RIDLY gilt ein Mindestalter von {minAge} Jahren. Unter {guardianAge} Jahren ist die Zustimmung eines gesetzlichen Vertreters vorgesehen.",
     "Das Mindestalter für ein RIDLY-Konto und zum Posten beträgt {minAge} Jahre.",
     "RIDLY verlangt mindestens {minAge} Jahre für Registrierung und Veröffentlichungen. Unter {guardianAge} Jahren ist die Zustimmung eines gesetzlichen Vertreters vorgesehen."
    ],
    "under": [
     "Noch nicht 😅 Mit {age} Jahren liegst du unter dem Mindestalter. Für Anmeldung und Posts auf RIDLY musst du mindestens {minAge} sein.",
     "Nein, noch nicht. RIDLY verlangt mindestens {minAge} Jahre. Mit {age} musst du noch etwas warten 🙂",
     "Mit {age} Jahren kannst du dich noch nicht bei RIDLY anmelden oder posten. Das Mindestalter ist {minAge}."
    ],
    "allowedMinor": [
     "Ja 👍 Mit {age} Jahren erfüllst du das Mindestalter von {minAge}. Unter {guardianAge} Jahren ist die Zustimmung eines gesetzlichen Vertreters vorgesehen.",
     "Ja, mit {age} ist die Anmeldung möglich. RIDLY startet ab {minAge}; unter {guardianAge} ist die Zustimmung eines gesetzlichen Vertreters vorgesehen.",
     "Das Alter passt 👍 Mit {age} kannst du dich anmelden und posten; unter {guardianAge} ist die Zustimmung eines gesetzlichen Vertreters vorgesehen."
    ],
    "allowedAdult": [
     "Ja 👍 Mit {age} Jahren liegst du über dem RIDLY-Mindestalter von {minAge}.",
     "Ja, vom Alter her passt es: RIDLY verlangt mindestens {minAge} Jahre.",
     "Alter passt 👍 Für Anmeldung und Posts auf RIDLY gilt ein Mindestalter von {minAge}."
    ]
   },
   "it": {
    "generic": [
     "Per iscriversi e pubblicare su RIDLY bisogna avere almeno {minAge} anni. Sotto i {guardianAge} anni è previsto il consenso di un rappresentante legale.",
     "L’età minima per creare un account e pubblicare su RIDLY è di {minAge} anni.",
     "RIDLY richiede almeno {minAge} anni per iscrizione e pubblicazione. Sotto i {guardianAge} anni è previsto il consenso di un rappresentante legale."
    ],
    "under": [
     "Non ancora 😅 A {age} anni sei sotto l’età minima. Servono almeno {minAge} anni per iscriversi e pubblicare su RIDLY.",
     "No, non ancora. RIDLY richiede almeno {minAge} anni. A {age} anni devi aspettare ancora un po’ 🙂",
     "A {age} anni non puoi ancora iscriverti o pubblicare su RIDLY. L’età minima è {minAge} anni."
    ],
    "allowedMinor": [
     "Sì 👍 A {age} anni hai l’età minima richiesta. Sotto i {guardianAge} anni è previsto il consenso di un rappresentante legale.",
     "Sì, a {age} anni puoi iscriverti: RIDLY parte da {minAge} anni. Prima dei {guardianAge} è previsto il consenso di un rappresentante legale.",
     "L’età va bene 👍 A {age} anni puoi iscriverti e pubblicare; sotto i {guardianAge} anni è previsto il consenso di un rappresentante legale."
    ],
    "allowedAdult": [
     "Sì 👍 A {age} anni superi l’età minima RIDLY di {minAge} anni.",
     "Sì, per l’età va bene: RIDLY richiede almeno {minAge} anni.",
     "Età ok 👍 Per iscriversi e pubblicare su RIDLY servono almeno {minAge} anni."
    ]
   },
   "en": {
    "generic": [
     "You must be at least {minAge} to sign up and publish on RIDLY. If you are under {guardianAge}, consent from a legal guardian is expected.",
     "The minimum age to create a RIDLY account and post is {minAge}.",
     "RIDLY requires users to be at least {minAge} to register and publish. Under {guardianAge}, legal-guardian consent is expected."
    ],
    "under": [
     "Not yet 😅 At {age}, you are below the minimum age. You need to be at least {minAge} to sign up and publish on RIDLY.",
     "No, not yet. RIDLY requires a minimum age of {minAge}. At {age}, you’ll need to wait a little longer 🙂",
     "At {age}, you can’t sign up or publish on RIDLY yet. The minimum age is {minAge}."
    ],
    "allowedMinor": [
     "Yes 👍 At {age}, you meet the minimum age of {minAge}. If you are under {guardianAge}, legal-guardian consent is expected.",
     "Yes, at {age} you can sign up: RIDLY starts at age {minAge}. Under {guardianAge}, legal-guardian consent is expected.",
     "Your age is fine 👍 At {age}, you can sign up and publish; under {guardianAge}, legal-guardian consent is expected."
    ],
    "allowedAdult": [
     "Yes 👍 At {age}, you are above RIDLY’s minimum age of {minAge}.",
     "Yes, age-wise you’re good: RIDLY requires users to be at least {minAge}.",
     "Age is fine 👍 You need to be at least {minAge} to sign up and publish on RIDLY."
    ]
   }
  },
  "source": {
   "label": "RIDLY – Conditions",
   "url": "conditions.html"
  },
  "dynamic": false,
  "verified": "2026-08-27"
 },
 {
  "id": "ridly-moderation",
  "category": "RIDLY",
  "questions": {
   "fr": "Qu’est-ce qui est interdit sur RIDLY ?",
   "de": "Was ist auf RIDLY verboten?",
   "it": "Cosa è vietato su RIDLY?",
   "en": "What is prohibited on RIDLY?"
  },
  "answer": {
   "fr": "Les règles interdisent notamment les contenus haineux, pornographiques ou illégaux, le harcèlement, le spam et les incitations dangereuses. RIDLY peut modérer, supprimer du contenu ou suspendre un compte en cas d’abus.",
   "de": "Verboten sind unter anderem Hassinhalte, Pornografie oder illegale Inhalte, Belästigung, Spam und gefährliche Aufforderungen. RIDLY kann Inhalte moderieren/entfernen oder Konten bei Missbrauch sperren.",
   "it": "Sono vietati tra l’altro contenuti d’odio, pornografici o illegali, molestie, spam e incitazioni pericolose. RIDLY può moderare/rimuovere contenuti o sospendere account in caso di abuso.",
   "en": "Prohibited content includes hateful, pornographic or illegal material, harassment, spam and dangerous incitement. RIDLY may moderate/remove content or suspend accounts for abuse."
  },
  "keywords": [
   "interdit",
   "modération",
   "moderation",
   "harcèlement",
   "spam",
   "illegal",
   "hateful",
   "verboten",
   "vietato"
  ],
  "source": {
   "label": "RIDLY – Conditions",
   "url": "conditions.html"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "ridly-data",
  "category": "RIDLY",
  "questions": {
   "fr": "Quelles données RIDLY utilise-t-il ?",
   "de": "Welche Daten verarbeitet RIDLY?",
   "it": "Quali dati usa RIDLY?",
   "en": "What data does RIDLY use?"
  },
  "answer": {
   "fr": "Les conditions et la politique du projet couvrent les données de compte, les contenus publiés et certaines données techniques. Supabase est utilisé pour la base de données et l’authentification. RIDLY indique ne pas vendre les données et ne les partager qu’avec les prestataires nécessaires au fonctionnement.",
   "de": "Die Projektbedingungen und Datenschutztexte umfassen Kontodaten, veröffentlichte Inhalte und technische Daten. Supabase wird für Datenbank und Authentifizierung genutzt. RIDLY erklärt, Daten nicht zu verkaufen und nur mit notwendigen Dienstleistern zu teilen.",
   "it": "Le condizioni e la privacy del progetto coprono dati account, contenuti pubblicati e alcuni dati tecnici. Supabase è usato per database e autenticazione. RIDLY dichiara di non vendere i dati e di condividerli solo con fornitori necessari al servizio.",
   "en": "The project terms/privacy cover account data, published content and some technical data. Supabase is used for database and authentication. RIDLY states that it does not sell data and only shares it with providers needed to run the service."
  },
  "keywords": [
   "données",
   "data",
   "privacy",
   "confidentialité",
   "supabase",
   "protection données",
   "datenschutz",
   "privacy policy"
  ],
  "source": {
   "label": "RIDLY – Confidentialité",
   "url": "confidentialite.html"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "ridly-content-rights",
  "category": "RIDLY",
  "questions": {
   "fr": "À qui appartiennent les photos et vidéos publiées sur RIDLY ?",
   "de": "Wem gehören Fotos und Videos auf RIDLY?",
   "it": "A chi appartengono foto e video pubblicati su RIDLY?",
   "en": "Who owns photos and videos posted on RIDLY?"
  },
  "answer": {
   "fr": "Selon les conditions du projet, l’utilisateur conserve ses droits sur son contenu. En publiant, il accorde toutefois à RIDLY une licence non exclusive, mondiale et gratuite permettant d’héberger, adapter et diffuser ce contenu dans le service et sa promotion.",
   "de": "Nach den Projektbedingungen behält der Nutzer seine Rechte am eigenen Inhalt. Durch das Veröffentlichen erhält RIDLY jedoch eine nicht-exklusive, weltweite und kostenlose Lizenz, den Inhalt im Dienst und zur Bewerbung zu hosten, anzupassen und zu verbreiten.",
   "it": "Secondo le condizioni del progetto, l’utente mantiene i diritti sui propri contenuti. Pubblicando concede però a RIDLY una licenza non esclusiva, mondiale e gratuita per ospitare, adattare e distribuire il contenuto nel servizio e nella sua promozione.",
   "en": "Under the project terms, users keep their rights to their content. By posting, they grant RIDLY a non-exclusive, worldwide, royalty-free licence to host, adapt and distribute that content within the service and its promotion."
  },
  "keywords": [
   "droits photo",
   "copyright",
   "contenu",
   "content rights",
   "photo vidéo",
   "license",
   "licence",
   "urheberrecht",
   "diritti"
  ],
  "source": {
   "label": "RIDLY – Conditions",
   "url": "conditions.html"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "ridly-home-summary",
  "category": "RIDLY",
  "questions": {
   "fr": "Que dit la page d’accueil RIDLY ?",
   "de": "Was sagt die RIDLY-Startseite?",
   "it": "Cosa dice la home di RIDLY?",
   "en": "What does the RIDLY homepage say?"
  },
  "answer": {
   "fr": "La page publique présente RIDLY comme « la carte des spots pour tous les riders » : skateparks, street spots, shops partenaires et lieux de cours, avec clips, Game of Scoot et profil rider. La connexion est annoncée comme gratuite.",
   "de": "Die öffentliche Startseite beschreibt RIDLY als „Spot-Karte für alle Rider“: Skateparks, Street-Spots, Partner-Shops und Kursorte, ergänzt durch Clips, Game of Scoot und Rider-Profil. Die Anmeldung wird als kostenlos präsentiert.",
   "it": "La home pubblica presenta RIDLY come “la mappa degli spot per tutti i rider”: skatepark, street spot, shop partner e luoghi dei corsi, con clip, Game of Scoot e profilo rider. La connessione è indicata come gratuita.",
   "en": "The public homepage presents RIDLY as “the spot map for all riders”: skateparks, street spots, partner shops and course locations, plus clips, Game of Scoot and a rider profile. Sign-in is presented as free."
  },
  "keywords": [
   "accueil ridly",
   "homepage",
   "carte des spots",
   "ouvrir ridly",
   "clips"
  ],
  "source": {
   "label": "RIDLY",
   "url": "https://ridly.ch/"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "rsl-overview",
  "category": "RSL",
  "questions": {
   "fr": "C’est quoi la RSL ?",
   "de": "Was ist die RSL?",
   "it": "Cos’è la RSL?",
   "en": "What is the RSL?"
  },
  "answer": {
   "fr": "La RSL, Romandie Scooter League, structure la trottinette freestyle en Suisse romande avec championnat, cours et stages, formation de coachs, carte de spots reliée à RIDLY, événements et services pour la communauté. Le site la présente comme sous-fédération officielle Swiss Skate.",
   "de": "Die RSL, Romandie Scooter League, strukturiert Freestyle-Scooter in der Romandie mit Meisterschaft, Kursen, Coach-Ausbildung, einer mit RIDLY verbundenen Spot-Karte, Events und Community-Angeboten. Die Website bezeichnet sie als offizielle Unterföderation von Swiss Skate.",
   "it": "La RSL, Romandie Scooter League, struttura il monopattino freestyle nella Svizzera romanda con campionato, corsi, formazione coach, mappa spot collegata a RIDLY, eventi e servizi per la community. Il sito la presenta come sotto-federazione ufficiale Swiss Skate.",
   "en": "RSL, the Romandie Scooter League, structures freestyle scooter in French-speaking Switzerland with a championship, courses, coach training, a RIDLY-connected spot map, events and community services. Its website presents it as an official Swiss Skate sub-federation."
  },
  "keywords": [
   "rsl",
   "romandie scooter league",
   "ligue",
   "swiss skate",
   "association",
   "sous fédération",
   "unterverband",
   "lega"
  ],
  "source": {
   "label": "RSL",
   "url": "https://rsl-swiss.ch/"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "rsl-vision",
  "category": "RSL",
  "questions": {
   "fr": "Quelle est la vision de la RSL ?",
   "de": "Was ist die Vision der RSL?",
   "it": "Qual è la visione della RSL?",
   "en": "What is RSL’s vision?"
  },
  "answer": {
   "fr": "La RSL vient de la structure Ride4Style développée depuis 2018. Sa vision est d’offrir une progression claire, du premier drop jusqu’aux contests officiels, avec cours, stages, événements et communauté.",
   "de": "Die RSL entstand aus der seit 2018 aufgebauten Ride4Style-Struktur. Ziel ist eine klare Entwicklung vom ersten Drop bis zu offiziellen Contests – mit Kursen, Camps, Events und Community.",
   "it": "La RSL nasce dalla struttura Ride4Style sviluppata dal 2018. L’obiettivo è offrire una progressione chiara, dal primo drop fino ai contest ufficiali, con corsi, stage, eventi e community.",
   "en": "RSL grows out of the Ride4Style structure developed since 2018. Its vision is a clear progression from a rider’s first drop to official contests, supported by courses, camps, events and community."
  },
  "keywords": [
   "vision",
   "histoire",
   "history",
   "ride4style",
   "2018",
   "progression",
   "premier drop",
   "geschichte",
   "storia"
  ],
  "source": {
   "label": "RSL – Comité",
   "url": "https://rsl-swiss.ch/comite"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "rsl-committee",
  "category": "RSL",
  "questions": {
   "fr": "Qui est dans le comité RSL ?",
   "de": "Wer ist im RSL-Komitee?",
   "it": "Chi fa parte del comitato RSL?",
   "en": "Who is on the RSL committee?"
  },
  "answer": {
   "fr": "Le site RSL liste Joël Meuwly comme président (coordination, résultats, sponsors), William Maurer comme trésorier (comptabilité, trésorerie, prof RSL), Florian Barbezat comme responsable médias et prof RSL, et Louis Zanolli comme co-responsable médias et prof RSL.",
   "de": "Die RSL-Website nennt Joël Meuwly als Präsident (Koordination, Resultate, Sponsoren), William Maurer als Kassier (Buchhaltung, Finanzen, RSL-Coach), Florian Barbezat als Medienverantwortlichen/RSL-Coach und Louis Zanolli als Co-Medienverantwortlichen/RSL-Coach.",
   "it": "Il sito RSL indica Joël Meuwly come presidente (coordinamento, risultati, sponsor), William Maurer come tesoriere (contabilità, tesoreria, coach RSL), Florian Barbezat come responsabile media/coach RSL e Louis Zanolli come co-responsabile media/coach RSL.",
   "en": "The RSL site lists Joël Meuwly as president (coordination, results, sponsors), William Maurer as treasurer (accounts, treasury, RSL coach), Florian Barbezat as media lead/RSL coach and Louis Zanolli as co-media lead/RSL coach."
  },
  "keywords": [
   "comité",
   "committee",
   "präsident",
   "président",
   "trésorier",
   "media",
   "joel",
   "william",
   "florian",
   "louis",
   "comitato"
  ],
  "source": {
   "label": "RSL – Comité",
   "url": "https://rsl-swiss.ch/comite"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "rsl-championship",
  "category": "RSL",
  "questions": {
   "fr": "Comment fonctionne le championnat RSL ?",
   "de": "Wie funktioniert die RSL-Meisterschaft?",
   "it": "Come funziona il campionato RSL?",
   "en": "How does the RSL championship work?"
  },
  "answer": {
   "fr": "Le site RSL présente un Championnat Romand de Trottinette Freestyle sur 3 manches, avec classements officiels. Les catégories annoncées sont U13, U15, Amateur et Pro, avec disciplines Park et Street.",
   "de": "Die RSL-Website beschreibt eine Romandie-Meisterschaft im Freestyle-Scooter über 3 Runden mit offiziellen Rankings. Angekündigt sind U13, U15, Amateur und Pro sowie Park und Street.",
   "it": "Il sito RSL presenta un Campionato Romando di monopattino freestyle su 3 manche, con classifiche ufficiali. Le categorie annunciate sono U13, U15, Amateur e Pro, nelle discipline Park e Street.",
   "en": "The RSL site presents a 3-round Romandie Freestyle Scooter Championship with official rankings. Announced categories are U13, U15, Amateur and Pro, across Park and Street."
  },
  "keywords": [
   "championnat",
   "championship",
   "meisterschaft",
   "campionato",
   "3 manches",
   "u13",
   "u15",
   "amateur",
   "pro",
   "park street"
  ],
  "source": {
   "label": "RSL",
   "url": "https://rsl-swiss.ch/"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rsl-next-event",
  "category": "RSL",
  "questions": {
   "fr": "C’est quand le prochain événement RSL ?",
   "de": "Wann ist das nächste RSL-Event?",
   "it": "Quando è il prossimo evento RSL?",
   "en": "When is the next RSL event?"
  },
  "answer": {
   "fr": "Les dates d’événements changent et la page publique peut parfois conserver une ancienne « prochaine manche ». Pour une date actuelle, ouvre directement la page RSL et vérifie la section événements avant de te déplacer.",
   "de": "Event-Daten ändern sich und die öffentliche Seite kann gelegentlich noch eine ältere „nächste Runde“ anzeigen. Für das aktuelle Datum bitte direkt die RSL-Eventseite prüfen, bevor du anreist.",
   "it": "Le date degli eventi cambiano e la pagina pubblica può talvolta mostrare ancora una vecchia “prossima manche”. Per la data attuale, controlla direttamente la pagina eventi RSL prima di partire.",
   "en": "Event dates change and the public page may sometimes still show an older “next round”. For the current date, check the RSL event page directly before travelling."
  },
  "keywords": [
   "prochain événement",
   "next event",
   "prochaine manche",
   "date contest",
   "event date",
   "nächstes event",
   "prossimo evento"
  ],
  "source": {
   "label": "RSL – Événements",
   "url": "https://rsl-swiss.ch/"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rsl-vidy-2026",
  "category": "RSL",
  "questions": {
   "fr": "Qu’était le Contest Vidy du 27 juin 2026 ?",
   "de": "Was war der Vidy Contest am 27. Juni 2026?",
   "it": "Cos’era il Contest Vidy del 27 giugno 2026?",
   "en": "What was the Vidy Contest on 27 June 2026?"
  },
  "answer": {
   "fr": "Le site RSL a publié le Scooter Contest Vidy du 27 juin 2026 à Lausanne comme 2e manche du championnat romand, avec U13, U15, Amateur, Pro, Park et Street. Le casque était obligatoire et les riders devaient être présents avant leur passage.",
   "de": "Die RSL-Website veröffentlichte den Scooter Contest Vidy am 27. Juni 2026 in Lausanne als 2. Runde der Romandie-Meisterschaft mit U13, U15, Amateur, Pro, Park und Street. Helm war Pflicht.",
   "it": "Il sito RSL ha pubblicato il Scooter Contest Vidy del 27 giugno 2026 a Losanna come 2ª manche del campionato romando, con U13, U15, Amateur, Pro, Park e Street. Il casco era obbligatorio.",
   "en": "RSL published the 27 June 2026 Scooter Contest Vidy in Lausanne as round 2 of the Romandie championship, with U13, U15, Amateur, Pro, Park and Street. Helmets were mandatory."
  },
  "keywords": [
   "vidy",
   "27 juin 2026",
   "27 june 2026",
   "lausanne",
   "2e manche",
   "contest vidy"
  ],
  "source": {
   "label": "RSL",
   "url": "https://rsl-swiss.ch/"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "rsl-park",
  "category": "RSL",
  "questions": {
   "fr": "C’est quoi le Park en trottinette freestyle ?",
   "de": "Was ist Park im Freestyle-Scooter?",
   "it": "Cos’è il Park nel monopattino freestyle?",
   "en": "What is Park in freestyle scooter?"
  },
  "answer": {
   "fr": "En RSL, le Park se ride surtout sur bowls, quarters, funbox et spines. On recherche amplitude, flow, lignes et combos aériens propres ; des tricks typiques sont tailwhip, bri flip, backflip ou barspin en combo.",
   "de": "Bei RSL wird Park vor allem auf Bowls, Quarters, Funboxen und Spines gefahren. Wichtig sind Höhe, Flow, Linien und saubere Air-Kombos; typische Tricks sind Tailwhip, Bri Flip, Backflip oder Barspin-Kombos.",
   "it": "Per RSL il Park usa soprattutto bowl, quarter, funbox e spine. Conta ampiezza, flow, linee e combo aeree pulite; trick tipici sono tailwhip, bri flip, backflip o combo di barspin.",
   "en": "In RSL, Park mainly uses bowls, quarters, funboxes and spines. The focus is amplitude, flow, lines and clean aerial combos; typical tricks include tailwhip, bri flip, backflip and barspin combos."
  },
  "keywords": [
   "park",
   "bowl",
   "quarter",
   "spine",
   "funbox",
   "amplitude",
   "flow",
   "air"
  ],
  "source": {
   "label": "RSL – Disciplines",
   "url": "https://rsl-swiss.ch/disciplines"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "rsl-street",
  "category": "RSL",
  "questions": {
   "fr": "C’est quoi le Street en trottinette freestyle ?",
   "de": "Was ist Street im Freestyle-Scooter?",
   "it": "Cos’è lo Street nel monopattino freestyle?",
   "en": "What is Street in freestyle scooter?"
  },
  "answer": {
   "fr": "En RSL, le Street s’appuie sur rails, ledges, marches, gaps et curbs. La notation valorise précision, contrôle, originalité, grinds/slides, manuals et lignes propres ; exemples : feeble, smith, boardslide ou nose manual.",
   "de": "Bei RSL nutzt Street Rails, Ledges, Treppen, Gaps und Curbs. Bewertet werden Präzision, Kontrolle, Originalität, Grinds/Slides, Manuals und saubere Lines; Beispiele sind Feeble, Smith, Boardslide oder Nose Manual.",
   "it": "Per RSL lo Street usa rail, ledge, scale, gap e curb. Si valorizzano precisione, controllo, originalità, grind/slide, manual e linee pulite; esempi: feeble, smith, boardslide e nose manual.",
   "en": "In RSL, Street uses rails, ledges, stairs, gaps and curbs. Precision, control, originality, grinds/slides, manuals and clean lines matter; examples include feeble, smith, boardslide and nose manual."
  },
  "keywords": [
   "street",
   "rail",
   "ledge",
   "gap",
   "curb",
   "grind",
   "slide",
   "manual",
   "feeble",
   "smith",
   "boardslide"
  ],
  "source": {
   "label": "RSL – Disciplines",
   "url": "https://rsl-swiss.ch/disciplines"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "rsl-contest-formats",
  "category": "RSL",
  "questions": {
   "fr": "Quels formats de contest utilise la RSL ?",
   "de": "Welche Contest-Formate nutzt RSL?",
   "it": "Quali formati di contest usa RSL?",
   "en": "What contest formats does RSL use?"
  },
  "answer": {
   "fr": "La base RSL prévoit plusieurs formats : Run de 45 à 60 secondes, Best Trick (par exemple 5 essais, 2 minutes ou trick mis en banque), Best Line et Jam. Le format exact peut être adapté au skatepark et au nombre de riders.",
   "de": "RSL nennt mehrere Basisformate: 45–60 Sekunden Run, Best Trick (z.B. 5 Versuche, 2 Minuten oder „banked trick“), Best Line und Jam. Das genaue Format kann an Park und Teilnehmerzahl angepasst werden.",
   "it": "La base RSL prevede: Run da 45–60 secondi, Best Trick (per esempio 5 tentativi, 2 minuti o trick “in banca”), Best Line e Jam. Il formato può essere adattato al park e al numero di rider.",
   "en": "RSL’s base formats include a 45–60 second Run, Best Trick (for example 5 attempts, 2 minutes or a banked trick), Best Line and Jam. The exact format can be adapted to the park and rider count."
  },
  "keywords": [
   "format",
   "run",
   "best trick",
   "best line",
   "jam",
   "45 60",
   "5 essais"
  ],
  "source": {
   "label": "RSL – Disciplines",
   "url": "https://rsl-swiss.ch/disciplines"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "rsl-scoring",
  "category": "RSL",
  "questions": {
   "fr": "Comment la RSL note une run ?",
   "de": "Wie bewertet RSL einen Run?",
   "it": "Come valuta RSL una run?",
   "en": "How does RSL score a run?"
  },
  "answer": {
   "fr": "La base de notation RSL est sur 100 points : difficulté 40, exécution/propreté 30, style/flow 20 et créativité 10. Une réception sketchy peut compter mais être fortement pénalisée.",
   "de": "Die RSL-Basiswertung geht bis 100 Punkte: Schwierigkeit 40, Ausführung/Sauberkeit 30, Style/Flow 20 und Kreativität 10. Eine sketchy Landung kann zählen, wird aber stark abgewertet.",
   "it": "La base RSL è su 100 punti: difficoltà 40, esecuzione/pulizia 30, stile/flow 20 e creatività 10. Un atterraggio sketchy può contare ma essere penalizzato molto.",
   "en": "RSL’s base scoring is out of 100: difficulty 40, execution/cleanliness 30, style/flow 20 and creativity 10. A sketchy landing can count but be heavily penalised."
  },
  "keywords": [
   "notation",
   "scoring",
   "100 points",
   "difficulté",
   "exécution",
   "style",
   "flow",
   "créativité",
   "40 30 20 10",
   "sketchy"
  ],
  "source": {
   "label": "RSL – Disciplines",
   "url": "https://rsl-swiss.ch/disciplines"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "rsl-runs",
  "category": "RSL",
  "questions": {
   "fr": "Combien de runs en compétition RSL ?",
   "de": "Wie viele Runs gibt es bei RSL?",
   "it": "Quante run ci sono in gara RSL?",
   "en": "How many runs are there in RSL competition?"
  },
  "answer": {
   "fr": "Le règlement de base indique 2 runs en qualification et 2 runs en finale, avec le meilleur run qui compte. Ce format peut être adapté selon l’événement.",
   "de": "Die Grundregel nennt 2 Qualifikations-Runs und 2 Final-Runs, wobei der beste Run zählt. Je nach Event kann das Format angepasst werden.",
   "it": "Il regolamento base indica 2 run in qualifica e 2 run in finale, con la migliore che conta. Il formato può essere adattato all’evento.",
   "en": "The base rule is 2 qualifying runs and 2 final runs, with the best run counting. The format may be adapted for a specific event."
  },
  "keywords": [
   "2 runs",
   "qualification",
   "finale",
   "qualif",
   "best run",
   "meilleur run"
  ],
  "source": {
   "label": "RSL – Disciplines",
   "url": "https://rsl-swiss.ch/disciplines"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "rsl-tie",
  "category": "RSL",
  "questions": {
   "fr": "Que se passe-t-il en cas d’égalité RSL ?",
   "de": "Was passiert bei Gleichstand bei RSL?",
   "it": "Cosa succede in caso di parità RSL?",
   "en": "What happens in an RSL tie?"
  },
  "answer": {
   "fr": "La règle de base donne priorité au run le plus propre, puis au trick le plus difficile si l’égalité reste.",
   "de": "Die Grundregel gibt zuerst dem saubereren Run den Vorrang und danach, falls nötig, dem schwierigeren Trick.",
   "it": "La regola base dà priorità alla run più pulita e poi, se necessario, al trick più difficile.",
   "en": "The base rule gives priority to the cleaner run, then to the harder trick if a tie remains."
  },
  "keywords": [
   "égalité",
   "tie",
   "gleichstand",
   "parità",
   "propre",
   "harder trick"
  ],
  "source": {
   "label": "RSL – Disciplines",
   "url": "https://rsl-swiss.ch/disciplines"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "rsl-helmet",
  "category": "RSL",
  "questions": {
   "fr": "Le casque est-il obligatoire en compétition RSL ?",
   "de": "Ist ein Helm bei RSL Pflicht?",
   "it": "Il casco è obbligatorio nelle gare RSL?",
   "en": "Is a helmet mandatory at RSL competitions?"
  },
  "answer": {
   "fr": "Oui. Le règlement RSL de base rend le casque obligatoire pour tous les riders et toutes les catégories. Les protections genoux/coudes sont recommandées et peuvent être imposées selon la catégorie ou l’événement.",
   "de": "Ja. Das RSL-Grundreglement schreibt für alle Rider und Kategorien einen Helm vor. Knie- und Ellbogenschoner werden empfohlen und können je nach Kategorie/Event vorgeschrieben werden.",
   "it": "Sì. Il regolamento base RSL rende il casco obbligatorio per tutti i rider e categorie. Ginocchiere e gomitiere sono raccomandate e possono essere imposte secondo categoria/evento.",
   "en": "Yes. The base RSL rules require a helmet for every rider and category. Knee and elbow pads are recommended and may be required depending on category/event."
  },
  "keywords": [
   "casque",
   "helmet",
   "helm",
   "casco",
   "obligatoire",
   "protection",
   "genoux",
   "coudes",
   "pads"
  ],
  "source": {
   "label": "RSL – Disciplines",
   "url": "https://rsl-swiss.ch/disciplines"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "rsl-courses",
  "category": "RSL",
  "questions": {
   "fr": "La RSL donne-t-elle des cours ?",
   "de": "Bietet RSL Kurse an?",
   "it": "RSL organizza corsi?",
   "en": "Does RSL offer courses?"
  },
  "answer": {
   "fr": "Oui. La RSL propose des cours et stages en skatepark pour plusieurs niveaux, encadrés par des coachs formés RSL. La page d’inscription permet de filtrer les séances par mois, lieu et disponibilité.",
   "de": "Ja. RSL bietet Skatepark-Kurse und Camps für verschiedene Niveaus mit ausgebildeten RSL-Coaches an. Auf der Anmeldeseite lassen sich Termine nach Monat, Ort und Verfügbarkeit filtern.",
   "it": "Sì. RSL propone corsi e stage in skatepark per diversi livelli, seguiti da coach formati RSL. La pagina iscrizioni permette di filtrare per mese, luogo e disponibilità.",
   "en": "Yes. RSL offers skatepark courses and camps for different levels, run by trained RSL coaches. The registration page can filter sessions by month, location and availability."
  },
  "keywords": [
   "cours",
   "course",
   "kurs",
   "corsi",
   "stage",
   "coach",
   "skatepark",
   "inscription"
  ],
  "source": {
   "label": "RSL – Cours",
   "url": "https://rsl-swiss.ch/cours"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rsl-course-registration",
  "category": "RSL",
  "questions": {
   "fr": "Quelles infos faut-il pour inscrire un rider à un cours RSL ?",
   "de": "Welche Angaben braucht man für einen RSL-Kurs?",
   "it": "Quali dati servono per iscriversi a un corso RSL?",
   "en": "What information is needed to register for an RSL course?"
  },
  "answer": {
   "fr": "Le panier cours demande les infos du payeur et du rider, l’âge du rider, et permet une remarque médicale/allergie. Il prévoit l’attestation du représentant légal, l’acceptation de la décharge et de l’intervention en urgence ; l’autorisation photo/vidéo est optionnelle.",
   "de": "Die Kursanmeldung fragt nach Daten des Zahlers und Riders, Alter sowie optional medizinischen Hinweisen/Allergien. Vorgesehen sind Zustimmung des gesetzlichen Vertreters, Haftungs-/Notfallbestätigung; Foto/Video-Einwilligung ist optional.",
   "it": "L’iscrizione ai corsi chiede i dati del pagante e del rider, l’età e un’eventuale nota medica/allergia. Prevede attestazione del rappresentante legale, accettazione della liberatoria/intervento d’urgenza; foto/video è opzionale.",
   "en": "Course checkout asks for payer and rider details, rider age and an optional medical/allergy note. It includes legal-guardian confirmation, waiver/emergency-care consent, with photo/video permission optional."
  },
  "keywords": [
   "inscrire cours",
   "registration",
   "payeur",
   "rider age",
   "allergie",
   "représentant légal",
   "décharge",
   "photo vidéo"
  ],
  "source": {
   "label": "RSL – Panier cours",
   "url": "https://rsl-swiss.ch/panier/panier"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rsl-coach-training",
  "category": "RSL",
  "questions": {
   "fr": "C’est quoi la formation Moniteur RSL ?",
   "de": "Was ist die RSL-Coach-Ausbildung?",
   "it": "Cos’è la formazione Monitore RSL?",
   "en": "What is the RSL coach training?"
  },
  "answer": {
   "fr": "La formation Moniteur RSL est une journée complète d’environ 6–7 heures mêlant pédagogie, encadrement, sécurité skatepark, pratique et module Samaritains BLS-AED. Elle vise les riders/adultes qui souhaitent encadrer des jeunes proprement.",
   "de": "Die RSL-Coach-Ausbildung ist ein ganzer Tag von etwa 6–7 Stunden mit Pädagogik, Gruppenführung, Skatepark-Sicherheit, Praxis und Samariter-BLS-AED-Modul. Sie richtet sich an Rider/Erwachsene, die Jugendliche betreuen möchten.",
   "it": "La formazione Monitore RSL dura circa 6–7 ore e unisce pedagogia, gestione del gruppo, sicurezza in skatepark, pratica e modulo Samaritani BLS-AED. È rivolta a rider/adulti che vogliono seguire giovani.",
   "en": "RSL Coach Training is a full 6–7 hour day combining pedagogy, supervision, skatepark safety, practice and a Samaritan BLS-AED module. It targets riders/adults who want to coach young people properly."
  },
  "keywords": [
   "formation",
   "moniteur",
   "coach training",
   "ausbildung",
   "formazione",
   "bls",
   "aed",
   "samaritains",
   "6 7h"
  ],
  "source": {
   "label": "RSL – Formation",
   "url": "https://rsl-swiss.ch/formation"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rsl-coach-price",
  "category": "RSL",
  "questions": {
   "fr": "Combien coûte la formation Moniteur RSL ?",
   "de": "Was kostet die RSL-Coach-Ausbildung?",
   "it": "Quanto costa la formazione Monitore RSL?",
   "en": "How much is RSL coach training?"
  },
  "answer": {
   "fr": "La page formation affiche 249 CHF par personne comme prix de lancement 2026, avec un prix plein annoncé à 350 CHF. Comme les tarifs peuvent évoluer, vérifie la page officielle avant l’inscription.",
   "de": "Die Ausbildungsseite zeigt 249 CHF pro Person als Einführungspreis 2026 und 350 CHF als Vollpreis. Da Preise sich ändern können, bitte vor Anmeldung die offizielle Seite prüfen.",
   "it": "La pagina formazione mostra 249 CHF a persona come prezzo lancio 2026 e 350 CHF come prezzo pieno. I prezzi possono cambiare: verifica la pagina ufficiale prima dell’iscrizione.",
   "en": "The training page lists CHF 249 per person as a 2026 launch price and CHF 350 as the full price. Prices can change, so check the official page before registering."
  },
  "keywords": [
   "prix formation",
   "249",
   "350",
   "coach price",
   "kosten ausbildung",
   "prezzo formazione"
  ],
  "source": {
   "label": "RSL – Formation",
   "url": "https://rsl-swiss.ch/formation"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rsl-coach-program",
  "category": "RSL",
  "questions": {
   "fr": "Que contient le programme de formation RSL ?",
   "de": "Was enthält das RSL-Ausbildungsprogramm?",
   "it": "Cosa comprende il programma di formazione RSL?",
   "en": "What is in the RSL training programme?"
  },
  "answer": {
   "fr": "Le programme publié couvre rôle/responsabilité du moniteur, relation avec les parents, pédagogie et progression, communication et gestion de groupe, BLS-AED/144 et traumatologie, lecture du park et des risques, mini-cours pratique, feedback et validation.",
   "de": "Das veröffentlichte Programm umfasst Rolle/Verantwortung des Coaches, Elternkontakt, Pädagogik/Progression, Kommunikation/Gruppenführung, BLS-AED/144 und Verletzungen, Park-/Risikoanalyse, Praxis-Minilektion, Feedback und Abschluss.",
   "it": "Il programma pubblicato comprende ruolo/responsabilità del coach, rapporto con i genitori, pedagogia/progressione, comunicazione/gestione gruppo, BLS-AED/144 e traumatologia, lettura dei rischi del park, mini-lezione pratica, feedback e validazione.",
   "en": "The published programme covers coach role/responsibility, parent relationships, pedagogy/progression, communication/group management, BLS-AED/144 and injuries, park/risk assessment, a practical mini-class, feedback and validation."
  },
  "keywords": [
   "programme formation",
   "pédagogie",
   "parents",
   "144",
   "traumatologie",
   "sécurité",
   "mini cours",
   "validation"
  ],
  "source": {
   "label": "RSL – Formation",
   "url": "https://rsl-swiss.ch/formation"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rsl-sponsors",
  "category": "RSL",
  "questions": {
   "fr": "Comment sponsoriser la RSL ?",
   "de": "Wie kann man RSL sponsern?",
   "it": "Come si sponsorizza RSL?",
   "en": "How can I sponsor RSL?"
  },
  "answer": {
   "fr": "La page d’accueil 2026 affiche des packs de soutien avec visibilité sur le site, les events et les réseaux : Bronze 100 CHF, Argent 250 CHF et Or 500 CHF+. Vérifie les offres actuelles sur le site avant engagement.",
   "de": "Die Startseite 2026 zeigt Sponsoring-Pakete mit Sichtbarkeit auf Website, Events und Social Media: Bronze 100 CHF, Silber 250 CHF und Gold 500 CHF+. Vor einer Zusage bitte die aktuellen Angebote prüfen.",
   "it": "La home 2026 mostra pacchetti sponsor con visibilità su sito, eventi e social: Bronzo 100 CHF, Argento 250 CHF e Oro 500 CHF+. Verifica l’offerta attuale prima di confermare.",
   "en": "The 2026 homepage lists sponsorship packages with visibility on the website, events and social media: Bronze CHF 100, Silver CHF 250 and Gold CHF 500+. Check current offers before committing."
  },
  "keywords": [
   "sponsor",
   "sponsoring",
   "bronze",
   "argent",
   "or",
   "gold",
   "silver",
   "100",
   "250",
   "500"
  ],
  "source": {
   "label": "RSL",
   "url": "https://rsl-swiss.ch/"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rsl-rental",
  "category": "RSL",
  "questions": {
   "fr": "La RSL loue-t-elle du matériel pour les événements ?",
   "de": "Vermietet RSL Event-Material?",
   "it": "RSL noleggia materiale per eventi?",
   "en": "Does RSL rent event equipment?"
  },
  "answer": {
   "fr": "Oui. La RSL propose location de matériel, initiations, démonstrations et animations. Le matériel publié comprend notamment une sonorisation Alto Professional complète et une table de brasserie pliante ; disponibilité, transport, durée et tarif sont confirmés au cas par cas.",
   "de": "Ja. RSL bietet Materialmiete, Einführungen, Demos und Animationen. Veröffentlicht sind u.a. ein komplettes Alto-Professional-Soundsystem und ein Klapptisch; Verfügbarkeit, Transport, Dauer und Preis werden individuell bestätigt.",
   "it": "Sì. RSL propone noleggio materiale, introduzioni, demo e animazioni. Tra il materiale pubblicato ci sono un impianto audio Alto Professional completo e un tavolo pieghevole; disponibilità, trasporto, durata e prezzo sono confermati caso per caso.",
   "en": "Yes. RSL offers equipment rental, initiations, demos and event activities. Published equipment includes a complete Alto Professional sound system and a folding table; availability, transport, duration and price are confirmed case by case."
  },
  "keywords": [
   "location matériel",
   "rental",
   "sonorisation",
   "alto",
   "table",
   "event equipment",
   "mieten",
   "noleggio"
  ],
  "source": {
   "label": "RSL – Location",
   "url": "https://rsl-swiss.ch/location-rsl"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rsl-sound-system",
  "category": "RSL",
  "questions": {
   "fr": "Quelle sonorisation la RSL loue-t-elle ?",
   "de": "Welche Tonanlage vermietet RSL?",
   "it": "Quale impianto audio noleggia RSL?",
   "en": "What sound system does RSL rent?"
  },
  "answer": {
   "fr": "La liste actuelle indique 2 enceintes actives Alto TX412 12 pouces, 1 caisson TX18S 18 pouces, une table de mixage TrueMix 800FX, 2 supports d’enceintes, un micro, un pied de micro et les câbles nécessaires.",
   "de": "Die aktuelle Liste nennt 2 aktive Alto TX412 12-Zoll-Lautsprecher, 1 TX18S 18-Zoll-Subwoofer, TrueMix 800FX Mischpult, 2 Lautsprecherstative, Mikrofon, Mikrofonständer und benötigte Kabel.",
   "it": "L’elenco attuale indica 2 casse attive Alto TX412 da 12\", 1 subwoofer TX18S da 18\", mixer TrueMix 800FX, 2 supporti casse, microfono, asta microfono e cavi necessari.",
   "en": "The current list shows 2 Alto TX412 12-inch active speakers, 1 TX18S 18-inch subwoofer, a TrueMix 800FX mixer, 2 speaker stands, a microphone, mic stand and required cables."
  },
  "keywords": [
   "alto tx412",
   "tx18s",
   "truemix",
   "sonorisation",
   "sound system",
   "lautsprecher",
   "impianto audio"
  ],
  "source": {
   "label": "RSL – Location",
   "url": "https://rsl-swiss.ch/location-rsl"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rsl-shop",
  "category": "RSL",
  "questions": {
   "fr": "Qu’est-ce qu’on trouve au Shop RSL ?",
   "de": "Was gibt es im RSL Shop?",
   "it": "Cosa si trova nello Shop RSL?",
   "en": "What is in the RSL Shop?"
  },
  "answer": {
   "fr": "Le Shop RSL présente du textile officiel, des protections et une sélection de trottinettes recommandées. La page a notamment affiché des produits Versatyl, S2S, Ethic et ALK13 ; stock, prix et disponibilité peuvent changer.",
   "de": "Der RSL Shop zeigt offizielles Textil, Schutzausrüstung und eine Auswahl empfohlener Scooter. Auf der Seite wurden u.a. Versatyl-, S2S-, Ethic- und ALK13-Produkte gezeigt; Bestand, Preise und Verfügbarkeit können sich ändern.",
   "it": "Lo Shop RSL presenta abbigliamento ufficiale, protezioni e una selezione di monopattini consigliati. La pagina ha mostrato prodotti Versatyl, S2S, Ethic e ALK13; stock, prezzi e disponibilità possono cambiare.",
   "en": "The RSL Shop presents official apparel, protection and a selection of recommended scooters. The page has featured Versatyl, S2S, Ethic and ALK13 products; stock, prices and availability can change."
  },
  "keywords": [
   "shop rsl",
   "merch",
   "hoodie",
   "tshirt",
   "alk13",
   "versatyl",
   "s2s",
   "ethic",
   "produits"
  ],
  "source": {
   "label": "RSL – Shop",
   "url": "https://rsl-swiss.ch/shop-rsl"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rsl-size-guide",
  "category": "RSL",
  "questions": {
   "fr": "Quelle taille de trottinette choisir selon ma taille ?",
   "de": "Welche Scooter-Höhe passt zu meiner Körpergröße?",
   "it": "Quale altezza di monopattino scegliere?",
   "en": "What scooter height should I choose for my height?"
  },
  "answer": {
   "fr": "Repère RSL de hauteur totale (sol au sommet du guidon) : <100 cm → 65–69 ; 100–110 → 69–72 ; 110–120 → 72–75 ; 120–130 → 75–77 ; 130–140 → 77–80 ; 140–150 → 80–84 ; 150–160 → 84–88 ; 160–170 → 88–94 ; 170–180 → 94–100 ; 180+ → 100+ cm. C’est un point de départ, le style et les préférences comptent aussi.",
   "de": "RSL-Richtwert Gesamthöhe (Boden bis Bar-Oberkante): <100 cm → 65–69; 100–110 → 69–72; 110–120 → 72–75; 120–130 → 75–77; 130–140 → 77–80; 140–150 → 80–84; 150–160 → 84–88; 160–170 → 88–94; 170–180 → 94–100; 180+ → 100+ cm. Fahrstil und Vorlieben zählen ebenfalls.",
   "it": "Riferimento RSL altezza totale (terra-cima manubrio): <100 cm → 65–69; 100–110 → 69–72; 110–120 → 72–75; 120–130 → 75–77; 130–140 → 77–80; 140–150 → 80–84; 150–160 → 84–88; 160–170 → 88–94; 170–180 → 94–100; 180+ → 100+ cm. Stile e preferenze contano comunque.",
   "en": "RSL total-height guide (ground to top of bar): <100 cm → 65–69; 100–110 → 69–72; 110–120 → 72–75; 120–130 → 75–77; 130–140 → 77–80; 140–150 → 80–84; 150–160 → 84–88; 160–170 → 88–94; 170–180 → 94–100; 180+ → 100+ cm. Riding style and preference also matter."
  },
  "keywords": [
   "taille trottinette",
   "hauteur",
   "size guide",
   "körpergröße",
   "altezza",
   "65 69",
   "94 100",
   "guidon"
  ],
  "source": {
   "label": "RSL – Guide tailles",
   "url": "https://rsl-swiss.ch/shop-rsl"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "rsl-broomstick",
  "category": "RSL",
  "questions": {
   "fr": "C’est quoi la méthode du manche à balai pour la taille ?",
   "de": "Was ist die Besenstiel-Methode für die Scooter-Höhe?",
   "it": "Cos’è il metodo del manico di scopa?",
   "en": "What is the broomstick method for scooter height?"
  },
  "answer": {
   "fr": "La méthode RSL : place un manche à balai à la hauteur souhaitée du guidon, souvent autour de la hanche, mesure la distance jusqu’au sol puis ajoute environ 5 cm pour estimer la hauteur totale de la trottinette.",
   "de": "RSL-Methode: Halte einen Besenstiel auf gewünschter Lenkerhöhe, oft etwa an der Hüfte, miss bis zum Boden und addiere ungefähr 5 cm für die geschätzte Gesamthöhe des Scooters.",
   "it": "Metodo RSL: posiziona un manico di scopa all’altezza desiderata del manubrio, spesso circa all’anca, misura fino a terra e aggiungi circa 5 cm per stimare l’altezza totale del monopattino.",
   "en": "RSL method: hold a broomstick at your desired bar height, often around the hip, measure to the ground and add about 5 cm to estimate total scooter height."
  },
  "keywords": [
   "manche à balai",
   "broomstick",
   "besenstiel",
   "manico di scopa",
   "taille",
   "hauteur"
  ],
  "source": {
   "label": "RSL – Guide tailles",
   "url": "https://rsl-swiss.ch/shop-rsl"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "rsl-ridly-link",
  "category": "RSL",
  "questions": {
   "fr": "Quel est le lien entre RSL et RIDLY ?",
   "de": "Wie hängen RSL und RIDLY zusammen?",
   "it": "Qual è il legame tra RSL e RIDLY?",
   "en": "How are RSL and RIDLY connected?"
  },
  "answer": {
   "fr": "RSL renvoie vers une carte des spots et skateparks connectée à RIDLY. RIDLY apporte la partie application/sociale : découverte des spots, riders, clips, profils, feed et games.",
   "de": "RSL verweist auf eine mit RIDLY verbundene Spot-/Skatepark-Karte. RIDLY bringt den App-/Social-Teil: Spots entdecken, Rider, Clips, Profile, Feed und Games.",
   "it": "RSL rimanda a una mappa di spot e skatepark collegata a RIDLY. RIDLY aggiunge la parte app/social: scoperta spot, rider, clip, profili, feed e giochi.",
   "en": "RSL links to a spot/skatepark map connected to RIDLY. RIDLY provides the app/social side: discovering spots, riders, clips, profiles, feed and games."
  },
  "keywords": [
   "ridly rsl",
   "lien rsl ridly",
   "connected",
   "carte spots",
   "verbindung",
   "collegamento"
  ],
  "source": {
   "label": "RSL",
   "url": "https://rsl-swiss.ch/"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "jf-overview",
  "category": "JF Ride Shop",
  "questions": {
   "fr": "C’est quoi JF Rideshop ?",
   "de": "Was ist JF Rideshop?",
   "it": "Cos’è JF Rideshop?",
   "en": "What is JF Rideshop?"
  },
  "answer": {
   "fr": "JF Ride Shop, c’est le shop partenaire de RSL et RIDLY pour la trottinette freestyle. Petit bonus : avec le code ONLINE10, tu obtiens 10 % sur ta commande. Le shop a été créé par Joël Meuwly autour d’un projet ambitieux au cœur de la trottinette freestyle, avec une vraie implication dans la scène romande. Si tu cherches une trottinette ou une pièce, Lya peut d’abord te proposer un modèle adapté, puis te montrer où le trouver chez JF Ride Shop.",
   "de": "JF Ride Shop ist der Partner-Shop von RSL und RIDLY für Freestyle-Scooter. Mit dem Code ONLINE10 erhältst du 10 % Rabatt auf deine Bestellung. Der Shop wurde von Joël Meuwly als ambitioniertes Projekt mitten in der Freestyle-Scooter-Szene aufgebaut und ist stark in der Romandie engagiert. Wenn du einen Scooter oder ein Teil suchst, kann Lya dir zuerst ein passendes Modell vorschlagen und dir danach zeigen, wo du es bei JF Ride Shop findest.",
   "it": "JF Ride Shop è lo shop partner di RSL e RIDLY per il monopattino freestyle. Con il codice ONLINE10 ottieni il 10% di sconto sul tuo ordine. Il negozio è stato creato da Joël Meuwly come progetto ambizioso nel cuore della scena freestyle scooter ed è molto attivo nella Svizzera romanda. Se cerchi un monopattino o un componente, Lya può prima proporti un modello adatto e poi mostrarti dove trovarlo su JF Ride Shop.",
   "en": "JF Ride Shop is the RSL and RIDLY partner shop for freestyle scootering. Use code ONLINE10 for 10% off your order. The shop was created by Joël Meuwly as an ambitious project at the heart of the freestyle scooter scene and is strongly involved in French-speaking Switzerland. If you need a scooter or part, Lya can first suggest a suitable model and then show you where to find it at JF Ride Shop."
  },
  "keywords": [
   "jf",
   "jfrideshop",
   "jf rideshop",
   "jf ride shop",
   "shop partenaire",
   "sponsor officiel",
   "shop officiel",
   "trottinette",
   "scooter freestyle",
   "online",
   "online10",
   "code online10",
   "code promo jf",
   "reduction jf",
   "réduction jf",
   "10% jf"
  ],
  "source": {
   "label": "JF Rideshop – À propos",
   "url": "https://www.jfrideshop.ch/en/about-us"
  },
  "dynamic": false,
  "verified": "2026-08-27"
 },
 {
  "id": "jf-history-2017",
  "category": "JF Ride Shop",
  "questions": {
   "fr": "Quand JF Rideshop a-t-il commencé ?",
   "de": "Wann begann JF Rideshop?",
   "it": "Quando è iniziato JF Rideshop?",
   "en": "When did JF Rideshop start?"
  },
  "answer": {
   "fr": "L’histoire remonte à 2017 avec J&F Skateboards, créé par Joël et Frank. Entre 2017 et 2019, un petit magasin à Rue développe des skates et longboards artisanaux, de la trottinette freestyle et du matériel graffiti sous le nom JF-Skateboards.",
   "de": "Die Geschichte beginnt 2017 mit J&F Skateboards, gegründet von Joël und Frank. Von 2017 bis 2019 entwickelte ein kleiner Laden in Rue handgefertigte Skate-/Longboards, Freestyle-Scooter und Graffiti-Material unter dem Namen JF-Skateboards.",
   "it": "La storia inizia nel 2017 con J&F Skateboards, creato da Joël e Frank. Tra 2017 e 2019 un piccolo negozio a Rue sviluppa skate e longboard artigianali, monopattini freestyle e materiale graffiti con il nome JF-Skateboards.",
   "en": "The story goes back to 2017 with J&F Skateboards, created by Joël and Frank. From 2017 to 2019 a small shop in Rue developed handmade skate/longboards, freestyle scooters and graffiti gear under the JF-Skateboards name."
  },
  "keywords": [
   "histoire jf",
   "history jf",
   "2017",
   "j&f skateboards",
   "jf-skateboards",
   "rue",
   "frank",
   "joel"
  ],
  "source": {
   "label": "JF Rideshop – À propos",
   "url": "https://www.jfrideshop.ch/en/about-us"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "jf-history-2021",
  "category": "JF Ride Shop",
  "questions": {
   "fr": "Quand JF Ride Shop Sàrl a-t-elle été créée ?",
   "de": "Wann entstand JF Ride Shop Sàrl?",
   "it": "Quando è nata JF Ride Shop Sàrl?",
   "en": "When was JF Ride Shop Sàrl created?"
  },
  "answer": {
   "fr": "Entre 2020 et 2021, Jérémie rejoint le projet et aide à développer le web et la structure. Mi-2021, l’activité devient officiellement JF Ride Shop Sàrl à Montreux.",
   "de": "Zwischen 2020 und 2021 kam Jérémie zum Projekt und half beim Web-/Strukturaufbau. Mitte 2021 wurde daraus offiziell JF Ride Shop Sàrl in Montreux.",
   "it": "Tra 2020 e 2021 Jérémie entra nel progetto e aiuta a sviluppare web e struttura. A metà 2021 l’attività diventa ufficialmente JF Ride Shop Sàrl a Montreux.",
   "en": "Between 2020 and 2021 Jérémie joined the project and helped develop the web/structure. In mid-2021 the business officially became JF Ride Shop Sàrl in Montreux."
  },
  "keywords": [
   "2020",
   "2021",
   "jeremie",
   "sàrl",
   "montreux",
   "creation company"
  ],
  "source": {
   "label": "JF Rideshop – À propos",
   "url": "https://www.jfrideshop.ch/en/about-us"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "jf-online-only",
  "category": "JF Ride Shop",
  "questions": {
   "fr": "Le magasin JF Rideshop est-il encore ouvert à Montreux ?",
   "de": "Ist der JF-Rideshop in Montreux noch normal geöffnet?",
   "it": "Il negozio JF Rideshop a Montreux è ancora aperto normalmente?",
   "en": "Is the JF Rideshop store in Montreux still normally open?"
  },
  "answer": {
   "fr": "JF Rideshop est désormais principalement en ligne. Le magasin physique n’est plus exploité comme une boutique classique avec des horaires fixes ; le shop reste visible sur certains événements, contests et cours.",
   "de": "JF Rideshop ist inzwischen hauptsächlich online. Der physische Laden wird nicht mehr als klassisches Geschäft mit festen Öffnungszeiten betrieben; der Shop ist weiterhin bei ausgewählten Events, Contests und Kursen präsent.",
   "it": "JF Rideshop è ormai principalmente online. Il negozio fisico non funziona più come una boutique classica con orari fissi; lo shop resta presente in alcuni eventi, contest e corsi.",
   "en": "JF Rideshop is now mainly online. The physical shop no longer operates as a traditional store with fixed hours; the shop remains present at selected events, contests and courses."
  },
  "keywords": [
   "magasin montreux",
   "shop montreux",
   "ouvert",
   "opening hours",
   "online",
   "laden",
   "negozio"
  ],
  "source": {
   "label": "JF Rideshop – À propos",
   "url": "https://www.jfrideshop.ch/en/about-us"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "jf-products",
  "category": "JF Ride Shop",
  "questions": {
   "fr": "Que vend JF Rideshop ?",
   "de": "Was verkauft JF Rideshop?",
   "it": "Cosa vende JF Rideshop?",
   "en": "What does JF Rideshop sell?"
  },
  "answer": {
   "fr": "L’univers JF comprend notamment trottinettes freestyle complètes et pièces, skateboards, longboards, rollers/skates, protections et casques, vêtements, chaussures, street-art/graffiti, cartes cadeaux et divers produits de ride. Le site mentionne aussi des produits hiver comme snowscoot/snowskate et le S-Downboards.",
   "de": "JF führt unter anderem komplette Freestyle-Scooter und Teile, Skateboards, Longboards, Roll-/Skates, Schutz/Helme, Kleidung, Schuhe, Street-Art/Graffiti, Gutscheine und weitere Ride-Produkte. Die Website nennt auch Winterprodukte wie Snowscoot/Snowskate und S-Downboards.",
   "it": "JF propone tra l’altro monopattini freestyle completi e pezzi, skateboard, longboard, roller/skate, protezioni e caschi, abbigliamento, scarpe, street-art/graffiti, carte regalo e altri prodotti ride. Il sito cita anche snowscoot/snowskate e S-Downboards.",
   "en": "JF carries complete freestyle scooters and parts, skateboards, longboards, roller/skates, protection and helmets, clothing, shoes, street-art/graffiti, gift cards and other ride products. The site also mentions winter products such as snowscoot/snowskate and S-Downboards."
  },
  "keywords": [
   "produits",
   "products",
   "trottinette",
   "pièces",
   "skateboard",
   "longboard",
   "roller",
   "casque",
   "graffiti",
   "snowscoot",
   "snowskate"
  ],
  "source": {
   "label": "JF Rideshop",
   "url": "https://www.jfrideshop.ch/"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "jf-mission",
  "category": "JF Ride Shop",
  "questions": {
   "fr": "Quelle est la mission de JF Rideshop ?",
   "de": "Was ist die Mission von JF Rideshop?",
   "it": "Qual è la missione di JF Rideshop?",
   "en": "What is JF Rideshop’s mission?"
  },
  "answer": {
   "fr": "JF Rideshop explique vouloir conseiller les riders, proposer du bon matériel, offrir un produit local et soutenir/développer la scène ride et graffiti suisse.",
   "de": "JF Rideshop beschreibt seine Mission als Beratung der Rider, gutes Material anzubieten und die Schweizer Ride- und Graffiti-Szene mit einem lokalen Ansatz zu unterstützen.",
   "it": "JF Rideshop indica come missione consigliare i rider, proporre buon materiale e sostenere/sviluppare la scena ride e graffiti svizzera con un approccio locale.",
   "en": "JF Rideshop describes its mission as advising riders, offering good equipment and supporting/developing the Swiss ride and graffiti scene with a local approach."
  },
  "keywords": [
   "mission",
   "objectif",
   "scene suisse",
   "support riders",
   "graffiti",
   "local"
  ],
  "source": {
   "label": "JF Rideshop – À propos",
   "url": "https://www.jfrideshop.ch/en/about-us"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "jf-contact",
  "category": "JF Ride Shop",
  "questions": {
   "fr": "Comment contacter JF Rideshop ?",
   "de": "Wie kontaktiere ich JF Rideshop?",
   "it": "Come contatto JF Rideshop?",
   "en": "How do I contact JF Rideshop?"
  },
  "answer": {
   "fr": "Le site public indique contact@jfrideshop.ch et le +41 79 330 80 03. Pour une question de compatibilité ou un produit en rupture, le contact direct est utile.",
   "de": "Die öffentliche Website nennt contact@jfrideshop.ch und +41 79 330 80 03. Bei Kompatibilitätsfragen oder ausverkauften Produkten ist direkter Kontakt sinnvoll.",
   "it": "Il sito pubblico indica contact@jfrideshop.ch e +41 79 330 80 03. Per compatibilità o prodotti esauriti è utile contattare direttamente lo shop.",
   "en": "The public website lists contact@jfrideshop.ch and +41 79 330 80 03. Direct contact is useful for compatibility questions or out-of-stock products."
  },
  "keywords": [
   "contact jf",
   "email jf",
   "telephone jf",
   "téléphone",
   "contact@jfrideshop.ch",
   "0793308003",
   "+41 79"
  ],
  "source": {
   "label": "JF Rideshop",
   "url": "https://www.jfrideshop.ch/"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "jf-stock",
  "category": "JF Ride Shop",
  "questions": {
   "fr": "Que faire si un produit JF est en rupture de stock ?",
   "de": "Was tun, wenn ein JF-Produkt ausverkauft ist?",
   "it": "Cosa fare se un prodotto JF è esaurito?",
   "en": "What if a JF product is out of stock?"
  },
  "answer": {
   "fr": "Plusieurs fiches produits indiquent qu’en cas de rupture, il vaut la peine de contacter JF Rideshop car le shop peut souvent commander le produit. Le délai dépend alors du fournisseur.",
   "de": "Mehrere Produktseiten weisen darauf hin, dass man JF Rideshop bei Ausverkauf kontaktieren sollte, da der Shop den Artikel oft bestellen kann. Die Lieferzeit hängt dann vom Lieferanten ab.",
   "it": "Diverse schede prodotto indicano di contattare JF Rideshop in caso di esaurimento, perché spesso lo shop può ordinare l’articolo. I tempi dipendono dal fornitore.",
   "en": "Several product pages say to contact JF Rideshop when an item is out of stock because the shop can often order it. Lead time then depends on the supplier."
  },
  "keywords": [
   "rupture stock",
   "out of stock",
   "stock",
   "commander fournisseur",
   "ausverkauft",
   "esaurito"
  ],
  "source": {
   "label": "JF Rideshop",
   "url": "https://www.jfrideshop.ch/"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "jf-payment",
  "category": "JF Ride Shop",
  "questions": {
   "fr": "Quels moyens de paiement accepte JF Rideshop ?",
   "de": "Welche Zahlungsmittel akzeptiert JF Rideshop?",
   "it": "Quali pagamenti accetta JF Rideshop?",
   "en": "What payment methods does JF Rideshop accept?"
  },
  "answer": {
   "fr": "Les CGV listent PayPal, virement bancaire, carte de débit, TWINT et paiement sur place en cas de retrait. Une commande web est livrée après réception du paiement complet.",
   "de": "Die AGB nennen PayPal, Banküberweisung, Debitkarte, TWINT und Zahlung vor Ort bei Abholung. Webbestellungen werden nach vollständigem Zahlungseingang geliefert.",
   "it": "Le CGV elencano PayPal, bonifico bancario, carta di debito, TWINT e pagamento sul posto in caso di ritiro. Gli ordini web vengono spediti dopo il pagamento completo.",
   "en": "The terms list PayPal, bank transfer, debit card, TWINT and on-site payment for pickup. Web orders are shipped after full payment is received."
  },
  "keywords": [
   "paiement",
   "payment",
   "paypal",
   "twint",
   "virement",
   "debit",
   "zahlung",
   "pagamento"
  ],
  "source": {
   "label": "JF Rideshop – CGV",
   "url": "https://www.jfrideshop.ch/terms"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "jf-shipping",
  "category": "JF Ride Shop",
  "questions": {
   "fr": "Quels sont les délais de livraison JF Rideshop ?",
   "de": "Wie lange dauert der Versand bei JF Rideshop?",
   "it": "Quali sono i tempi di consegna JF Rideshop?",
   "en": "What are JF Rideshop shipping times?"
  },
  "answer": {
   "fr": "Les CGV indiquent généralement jusqu’à 5 jours ouvrés après paiement pour les articles en stock et environ 5 à 20 jours ouvrés pour les articles sur commande. Certaines fiches produits affichent des délais plus précis : vérifie toujours la fiche au moment de l’achat.",
   "de": "Die AGB nennen für Lagerware im Allgemeinen bis zu 5 Werktage nach Zahlung und für Bestellware etwa 5–20 Werktage. Einzelne Produktseiten können genauere Zeiten zeigen; bitte beim Kauf prüfen.",
   "it": "Le CGV indicano in generale fino a 5 giorni lavorativi dopo il pagamento per articoli in stock e circa 5–20 giorni lavorativi per articoli su ordinazione. Alcune schede possono indicare tempi più precisi.",
   "en": "The terms generally state up to 5 business days after payment for in-stock items and about 5–20 business days for special-order items. Individual product pages may show more specific times, so check at purchase time."
  },
  "keywords": [
   "livraison",
   "shipping",
   "delivery",
   "5 jours",
   "20 jours",
   "délai",
   "versand",
   "consegna"
  ],
  "source": {
   "label": "JF Rideshop – CGV",
   "url": "https://www.jfrideshop.ch/terms"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "jf-po-box",
  "category": "JF Ride Shop",
  "questions": {
   "fr": "JF Rideshop livre-t-il en case postale ?",
   "de": "Liefert JF Rideshop an Postfächer?",
   "it": "JF Rideshop consegna a caselle postali?",
   "en": "Does JF Rideshop deliver to PO boxes?"
  },
  "answer": {
   "fr": "Les CGV indiquent que JF Rideshop ne livre plus les colis en case postale depuis 2022.",
   "de": "Die AGB geben an, dass JF Rideshop seit 2022 keine Pakete mehr an Postfächer liefert.",
   "it": "Le CGV indicano che JF Rideshop non consegna più pacchi a caselle postali dal 2022.",
   "en": "The terms state that JF Rideshop has not delivered parcels to PO boxes since 2022."
  },
  "keywords": [
   "case postale",
   "po box",
   "postfach",
   "casella postale",
   "livraison"
  ],
  "source": {
   "label": "JF Rideshop – CGV",
   "url": "https://www.jfrideshop.ch/terms"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "jf-returns",
  "category": "JF Ride Shop",
  "questions": {
   "fr": "Comment retourner un article chez JF Rideshop ?",
   "de": "Wie funktioniert eine Rückgabe bei JF Rideshop?",
   "it": "Come si restituisce un articolo a JF Rideshop?",
   "en": "How do returns work at JF Rideshop?"
  },
  "answer": {
   "fr": "Pour les clients en Suisse, les CGV demandent un retour dans les 7 jours après réception, avec article intact, complet, emballage d’origine, étiquettes et bordereau. Les frais de retour sont à la charge du client. Contacte le shop avant l’envoi pour confirmer la procédure actuelle.",
   "de": "Für Kunden in der Schweiz verlangen die AGB eine Rücksendung innerhalb von 7 Tagen nach Erhalt, vollständig und unbenutzt in Originalverpackung mit Etiketten und Lieferschein. Rücksendekosten trägt der Kunde. Vorher den Shop kontaktieren.",
   "it": "Per i clienti in Svizzera, le CGV chiedono il reso entro 7 giorni dalla ricezione, con articolo integro, completo, imballo originale, etichette e documento di consegna. Le spese di ritorno sono a carico del cliente. Contatta prima lo shop.",
   "en": "For customers in Switzerland, the terms require returns within 7 days of receipt, with the item intact and complete in original packaging with labels and delivery note. Return shipping is paid by the customer. Contact the shop first to confirm the current procedure."
  },
  "keywords": [
   "retour",
   "return",
   "échange",
   "exchange",
   "7 jours",
   "rückgabe",
   "reso",
   "emballage"
  ],
  "source": {
   "label": "JF Rideshop – CGV",
   "url": "https://www.jfrideshop.ch/terms"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "jf-warranty",
  "category": "JF Ride Shop",
  "questions": {
   "fr": "Comment fonctionne la garantie JF Rideshop ?",
   "de": "Wie funktioniert die Garantie bei JF Rideshop?",
   "it": "Come funziona la garanzia JF Rideshop?",
   "en": "How does JF Rideshop warranty work?"
  },
  "answer": {
   "fr": "La garantie dépend des conditions du fournisseur du matériel. L’usure normale, le mauvais entretien ou une mauvaise utilisation ne sont pas couverts. Les défauts ou dégâts de transport doivent être signalés rapidement ; les frais de renvoi au fournisseur sont souvent à la charge du client.",
   "de": "Die Garantie richtet sich nach den Bedingungen des jeweiligen Lieferanten. Normale Abnutzung, schlechte Wartung oder falsche Nutzung sind nicht gedeckt. Mängel/Transportschäden schnell melden; Rücksendekosten zum Lieferanten liegen oft beim Kunden.",
   "it": "La garanzia dipende dalle condizioni del fornitore. Usura normale, cattiva manutenzione o uso scorretto non sono coperti. Difetti/danni di trasporto vanno segnalati rapidamente; spesso le spese di invio al fornitore sono a carico del cliente.",
   "en": "Warranty follows the equipment supplier’s terms. Normal wear, poor maintenance or misuse are not covered. Defects/transport damage should be reported quickly; shipping back to the supplier is often paid by the customer."
  },
  "keywords": [
   "garantie",
   "warranty",
   "défaut",
   "usure",
   "fournisseur",
   "garantiebedingungen",
   "garanzia"
  ],
  "source": {
   "label": "JF Rideshop – CGV",
   "url": "https://www.jfrideshop.ch/terms"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "jf-braderie",
  "category": "JF Ride Shop",
  "questions": {
   "fr": "Quelles règles pour les articles de braderie JF ?",
   "de": "Welche Regeln gelten für JF-Sale-/Braderie-Artikel?",
   "it": "Quali regole valgono per gli articoli Braderie JF?",
   "en": "What are the rules for JF clearance items?"
  },
  "answer": {
   "fr": "Les CGV précisent que la braderie peut contenir des invendus ou anciennes saisons stockés longtemps. Un emballage marqué ou de petites rayures superficielles ne sont pas automatiquement considérés comme défaut ; les défauts majeurs restent traités selon les conditions annoncées.",
   "de": "Die AGB erklären, dass Braderie-/Clearance-Ware aus älteren Saisons oder länger gelagerten Restbeständen stammen kann. Beschädigte Verpackung oder kleine oberflächliche Kratzer gelten nicht automatisch als Mangel; größere Defekte werden nach den angegebenen Bedingungen behandelt.",
   "it": "Le CGV spiegano che la Braderie può includere invenduti o stagioni precedenti conservati a lungo. Imballi segnati o piccoli graffi superficiali non sono automaticamente difetti; i difetti importanti restano gestiti secondo le condizioni.",
   "en": "The terms explain that clearance items may be old-season/unsold stock stored for a long time. Marked packaging or small superficial scratches are not automatically considered defects; major defects remain handled under the stated conditions."
  },
  "keywords": [
   "braderie",
   "clearance",
   "invendus",
   "rayure",
   "ancienne saison",
   "sale",
   "ausverkauf"
  ],
  "source": {
   "label": "JF Rideshop – CGV",
   "url": "https://www.jfrideshop.ch/terms"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "jf-wiki",
  "category": "JF Ride Shop",
  "questions": {
   "fr": "C’est quoi le WIKI-JF ?",
   "de": "Was ist das WIKI-JF?",
   "it": "Cos’è il WIKI-JF?",
   "en": "What is WIKI-JF?"
  },
  "answer": {
   "fr": "WIKI-JF est la partie articles/conseils du site : tutoriels, explications, conseils, actualités riders et sujets comme le sponsoring. Certains articles sont anciens, donc une offre ou réduction citée dans un article historique doit être vérifiée avant achat.",
   "de": "WIKI-JF ist der Artikel-/Ratgeberbereich mit Tutorials, Erklärungen, Tipps, Rider-News und Themen wie Sponsoring. Einige Artikel sind älter; historische Rabatte/Angebote sollten vor einem Kauf geprüft werden.",
   "it": "WIKI-JF è la sezione articoli/consigli con tutorial, spiegazioni, news rider e temi come sponsorizzazione. Alcuni articoli sono vecchi: sconti/offerte storici vanno verificati prima dell’acquisto.",
   "en": "WIKI-JF is the site’s advice/article area with tutorials, explanations, rider news and topics such as sponsorship. Some articles are older, so historical discounts/offers should be checked before purchase."
  },
  "keywords": [
   "wiki jf",
   "blog jf",
   "conseil",
   "tutoriel",
   "sponsoring",
   "articles",
   "advice"
  ],
  "source": {
   "label": "WIKI-JF",
   "url": "https://www.jfrideshop.ch/blog/wiki-jf-1"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "jf-loyalty-historic",
  "category": "JF Ride Shop",
  "questions": {
   "fr": "JF Rideshop a-t-il un programme de fidélité ?",
   "de": "Hat JF Rideshop ein Treueprogramm?",
   "it": "JF Rideshop ha un programma fedeltà?",
   "en": "Does JF Rideshop have a loyalty programme?"
  },
  "answer": {
   "fr": "Un article WIKI-JF de 2023 annonçait un programme où 1 CHF donnait 1 point de fidélité. Comme cette information est historique, Lya ne garantit pas qu’elle soit encore valable : vérifie ton compte ou contacte JF avant de compter dessus.",
   "de": "Ein WIKI-JF-Artikel von 2023 kündigte ein Programm an, bei dem 1 CHF = 1 Treuepunkt war. Da diese Information historisch ist, kann Lya nicht bestätigen, dass sie noch gilt; bitte im Konto prüfen oder JF kontaktieren.",
   "it": "Un articolo WIKI-JF del 2023 annunciava 1 CHF = 1 punto fedeltà. Essendo un’informazione storica, Lya non garantisce che sia ancora valida: verifica l’account o contatta JF.",
   "en": "A 2023 WIKI-JF article announced a programme where CHF 1 equalled 1 loyalty point. Because this is historical information, Lya cannot guarantee it is still active; check your account or contact JF."
  },
  "keywords": [
   "fidélité",
   "loyalty",
   "1 chf 1 point",
   "points fidélité",
   "treue",
   "fedeltà"
  ],
  "source": {
   "label": "WIKI-JF",
   "url": "https://www.jfrideshop.ch/blog/wiki-jf-1"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "jf-association-discount-historic",
  "category": "JF Ride Shop",
  "questions": {
   "fr": "JF Rideshop fait-il des réductions aux associations ?",
   "de": "Gibt JF Rideshop Vereinsrabatte?",
   "it": "JF Rideshop fa sconti alle associazioni?",
   "en": "Does JF Rideshop offer association discounts?"
  },
  "answer": {
   "fr": "Un article WIKI-JF de 2023 annonçait des réductions pour des membres d’associations sportives de ride. Les conditions pouvant avoir changé, il faut demander au shop si l’offre est encore active et quelles associations sont concernées.",
   "de": "Ein WIKI-JF-Artikel von 2023 kündigte Rabatte für Mitglieder von Ride-Sportvereinen an. Da sich die Bedingungen geändert haben können, bitte beim Shop nach aktuellem Status und berechtigten Vereinen fragen.",
   "it": "Un articolo WIKI-JF del 2023 annunciava sconti per membri di associazioni sportive ride. Le condizioni possono essere cambiate: chiedi allo shop se l’offerta è ancora attiva.",
   "en": "A 2023 WIKI-JF article announced discounts for members of ride-sport associations. Conditions may have changed, so ask the shop whether the offer is still active and which associations qualify."
  },
  "keywords": [
   "réduction association",
   "association discount",
   "club discount",
   "rabatt verein",
   "sconto associazione"
  ],
  "source": {
   "label": "WIKI-JF",
   "url": "https://www.jfrideshop.ch/blog/wiki-jf-1"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "jf-sponsoring",
  "category": "JF Ride Shop",
  "questions": {
   "fr": "Que dit JF Rideshop sur le sponsoring rider ?",
   "de": "Was sagt JF Rideshop über Rider-Sponsoring?",
   "it": "Cosa dice JF Rideshop sulla sponsorizzazione rider?",
   "en": "What does JF Rideshop say about rider sponsorship?"
  },
  "answer": {
   "fr": "WIKI-JF possède une série sur le sponsoring : ce qu’est un sponsor et comment savoir si un rider est prêt. L’idée centrale est qu’un sponsoring est un vrai engagement entre shop/marque et rider expérimenté, pas seulement du matériel gratuit.",
   "de": "WIKI-JF enthält eine Sponsoring-Serie: Was Sponsoring ist und wann ein Rider dafür bereit ist. Kernidee: Sponsoring ist eine echte Verpflichtung zwischen Shop/Marke und erfahrenem Rider, nicht nur kostenloses Material.",
   "it": "WIKI-JF contiene una serie sulla sponsorizzazione: cos’è uno sponsor e quando un rider è pronto. Il punto centrale è che una sponsorship è un impegno reale tra shop/marca e rider esperto, non solo materiale gratis.",
   "en": "WIKI-JF has a sponsorship series covering what sponsorship is and when a rider is ready. The core idea is that sponsorship is a real commitment between a shop/brand and an experienced rider, not simply free gear."
  },
  "keywords": [
   "sponsoring",
   "sponsor rider",
   "sponsorship",
   "matériel gratuit",
   "contrat rider"
  ],
  "source": {
   "label": "WIKI-JF",
   "url": "https://www.jfrideshop.ch/blog/wiki-jf-1"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "jf-sdownboard",
  "category": "JF Ride Shop",
  "questions": {
   "fr": "C’est quoi un S-Downboards ?",
   "de": "Was ist ein S-Downboard?",
   "it": "Cos’è un S-Downboard?",
   "en": "What is an S-Downboard?"
  },
  "answer": {
   "fr": "JF a présenté le S-Downboards comme un concept entre longboard et trottinette freestyle. L’article WIKI-JF décrit notamment un neck SDB JF spécifique ; pour les pièces et versions actuellement disponibles, utilise la recherche du shop.",
   "de": "JF präsentierte S-Downboards als Konzept zwischen Longboard und Freestyle-Scooter. Der WIKI-JF-Artikel beschreibt u.a. einen speziellen JF-SDB-Neck; aktuelle Teile/Versionen bitte im Shop suchen.",
   "it": "JF ha presentato S-Downboards come concetto a metà tra longboard e monopattino freestyle. L’articolo WIKI-JF descrive anche un neck SDB JF specifico; per pezzi/versioni attuali usa la ricerca shop.",
   "en": "JF presented S-Downboards as a concept between a longboard and freestyle scooter. The WIKI-JF article describes a specific JF SDB neck; use the shop search for currently available parts/versions."
  },
  "keywords": [
   "s-downboards",
   "sdownboard",
   "sdb",
   "longboard trottinette",
   "neck jf"
  ],
  "source": {
   "label": "WIKI-JF",
   "url": "https://www.jfrideshop.ch/blog/wiki-jf-1"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "jf-assortment-online",
  "category": "JF Ride Shop",
  "questions": {
   "fr": "Tout l’assortiment JF est-il en ligne ?",
   "de": "Ist das ganze JF-Sortiment online?",
   "it": "Tutto l’assortimento JF è online?",
   "en": "Is all JF stock online?"
  },
  "answer": {
   "fr": "Les pages catégories indiquent que la boutique en ligne regroupe environ 98 % de l’assortiment Ride. Si tu ne trouves pas une référence, utilise la recherche du site ou contacte le shop.",
   "de": "Die Kategorieseiten geben an, dass der Onlineshop ungefähr 98 % des Ride-Sortiments enthält. Wenn du etwas nicht findest, nutze die Shop-Suche oder kontaktiere JF.",
   "it": "Le pagine categoria indicano che lo shop online contiene circa il 98% dell’assortimento Ride. Se non trovi un articolo, usa la ricerca o contatta JF.",
   "en": "Category pages state that the online shop contains about 98% of the Ride assortment. If you cannot find an item, use site search or contact JF."
  },
  "keywords": [
   "98%",
   "assortiment",
   "catalogue",
   "online shop",
   "boutique en ligne",
   "sortiment"
  ],
  "source": {
   "label": "JF Rideshop",
   "url": "https://www.jfrideshop.ch/"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "scooter-parts",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "Quelles sont les pièces principales d’une trottinette freestyle ?",
   "de": "Was sind die wichtigsten Teile eines Freestyle-Scooters?",
   "it": "Quali sono i pezzi principali di un monopattino freestyle?",
   "en": "What are the main parts of a freestyle scooter?"
  },
  "answer": {
   "fr": "Les principales pièces sont le deck, le guidon/bar, la fourche, le système de compression, le collier, le jeu de direction, les roues avec roulements, les poignées, les axes et le frein ou fender. La compatibilité entre diamètre de barre, compression, fourche et roues est essentielle.",
   "de": "Wichtige Teile sind Deck, Bar/Lenker, Gabel, Kompressionssystem, Clamp, Headset, Rollen mit Lagern, Griffe, Achsen und Bremse/Fender. Die Kompatibilität von Bar-Durchmesser, Kompression, Gabel und Rollen ist entscheidend.",
   "it": "I pezzi principali sono deck, manubrio/bar, forcella, sistema di compressione, collarino, headset, ruote con cuscinetti, manopole, assi e freno/fender. È fondamentale la compatibilità tra diametro bar, compressione, forcella e ruote.",
   "en": "Main parts are the deck, bar, fork, compression system, clamp, headset, wheels/bearings, grips, axles and brake/fender. Compatibility between bar diameter, compression, fork and wheels is essential."
  },
  "keywords": [
   "pièces trottinette",
   "parts",
   "deck",
   "bar",
   "fourche",
   "fork",
   "compression",
   "clamp",
   "roues",
   "wheels",
   "headset"
  ],
  "source": {
   "label": "JF Rideshop",
   "url": "https://www.jfrideshop.ch/"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "scooter-bar-height",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "À quelle hauteur doit arriver le guidon ?",
   "de": "Wie hoch sollte der Lenker sein?",
   "it": "A che altezza deve arrivare il manubrio?",
   "en": "How high should my scooter bar be?"
  },
  "answer": {
   "fr": "Comme point de départ, le guidon arrive souvent autour de la hanche au nombril. En Street on choisit souvent plus haut pour le confort et le contrôle ; en Park on peut préférer plus bas pour gagner en maniabilité. La taille exacte reste personnelle.",
   "de": "Als Ausgangspunkt liegt die Lenkerhöhe oft ungefähr zwischen Hüfte und Bauchnabel. Street-Rider wählen häufig höher für Komfort/Kontrolle, Park-Rider manchmal tiefer für Beweglichkeit. Die genaue Höhe ist persönlich.",
   "it": "Come punto di partenza il manubrio arriva spesso tra anca e ombelico. Nello Street si sceglie spesso più alto per comfort/controllo, nel Park talvolta più basso per maneggevolezza. La misura esatta è personale.",
   "en": "As a starting point, the bar often sits around hip-to-navel height. Street riders often choose higher for comfort/control, while Park riders may prefer lower for manoeuvrability. Exact height is personal."
  },
  "keywords": [
   "hauteur guidon",
   "bar height",
   "nombril",
   "hanche",
   "street park",
   "lenkerhöhe",
   "altezza manubrio"
  ],
  "source": {
   "label": "RSL – Guide tailles",
   "url": "https://rsl-swiss.ch/shop-rsl"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "scooter-bar-materials",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "Quelle matière choisir pour un guidon : acier, alu ou titane ?",
   "de": "Welches Bar-Material: Stahl, Alu oder Titan?",
   "it": "Quale materiale per il manubrio: acciaio, alluminio o titanio?",
   "en": "Which bar material: steel, aluminium or titanium?"
  },
  "answer": {
   "fr": "Chromoly/acier : robuste et généralement plus lourd. Aluminium : très léger mais demande de respecter strictement compatibilités et limites d’usage. Titane : léger, plus souple au ressenti et cher. Le meilleur choix dépend du style, du poids recherché et de la compatibilité du setup.",
   "de": "Chromoly/Stahl: robust und meist schwerer. Aluminium: sehr leicht, aber Kompatibilität und Einsatzgrenzen strikt beachten. Titan: leicht, oft flexibler im Gefühl und teuer. Die Wahl hängt von Fahrstil, gewünschtem Gewicht und Setup-Kompatibilität ab.",
   "it": "Chromoly/acciaio: robusto e in genere più pesante. Alluminio: molto leggero ma richiede compatibilità e limiti d’uso rigorosi. Titanio: leggero, più flessibile come feeling e costoso. La scelta dipende da stile, peso e compatibilità.",
   "en": "Chromoly/steel is robust and usually heavier. Aluminium is very light but requires strict compatibility and use limits. Titanium is light, often feels more flexible and is expensive. Choice depends on style, target weight and setup compatibility."
  },
  "keywords": [
   "acier",
   "chromoly",
   "aluminium",
   "alu",
   "titane",
   "titanium",
   "bar material",
   "stahl",
   "titan"
  ],
  "source": {
   "label": "JF Rideshop",
   "url": "https://www.jfrideshop.ch/"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "scooter-standard-oversized",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "C’est quoi un guidon standard ou oversized ?",
   "de": "Was bedeutet Standard oder Oversized bei Bars?",
   "it": "Cosa significa manubrio standard o oversized?",
   "en": "What is a standard vs oversized scooter bar?"
  },
  "answer": {
   "fr": "En trottinette freestyle, on rencontre surtout un diamètre extérieur de serrage d’environ 31,8 mm pour une barre standard et environ 34,9–35 mm pour une oversized. Vérifie toujours le diamètre interne/externe et le système de compression avant achat.",
   "de": "Bei Freestyle-Scootern liegt der äußere Klemmdurchmesser typischerweise bei ca. 31,8 mm für Standard und ca. 34,9–35 mm für Oversized. Vor Kauf immer Innen-/Außendurchmesser und Kompressionssystem prüfen.",
   "it": "Nel monopattino freestyle il diametro esterno di serraggio è tipicamente circa 31,8 mm per standard e circa 34,9–35 mm per oversized. Verifica sempre diametri e sistema di compressione.",
   "en": "Freestyle scooter bars typically use about 31.8 mm outer clamp diameter for standard and about 34.9–35 mm for oversized. Always check internal/external diameter and compression compatibility."
  },
  "keywords": [
   "standard oversized",
   "31.8",
   "34.9",
   "35 mm",
   "diamètre barre",
   "bar diameter",
   "oversize"
  ],
  "source": {
   "label": "JF Rideshop",
   "url": "https://www.jfrideshop.ch/"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "scooter-ihc",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "C’est quoi le système IHC ?",
   "de": "Was ist IHC?",
   "it": "Cos’è IHC?",
   "en": "What is IHC?"
  },
  "answer": {
   "fr": "IHC est un système de compression léger très courant sur les setups Park et complets. Il utilise un shim autour du tube de fourche ; la barre doit être compatible avec le diamètre et comporte généralement une fente. Ne mélange pas IHC, HIC et SCS sans vérifier chaque pièce.",
   "de": "IHC ist ein leichtes Kompressionssystem, häufig bei Park-Setups und Komplettscootern. Ein Shim sitzt um den Gabelschaft; die Bar muss zum Durchmesser passen und hat normalerweise einen Schlitz. IHC/HIC/SCS nicht ohne Kompatibilitätsprüfung mischen.",
   "it": "IHC è un sistema di compressione leggero, comune nei setup Park e completi. Usa uno shim intorno al tubo forcella; il manubrio deve avere diametro compatibile e normalmente una fessura. Non mischiare IHC/HIC/SCS senza controllare.",
   "en": "IHC is a lightweight compression system common on Park setups and completes. It uses a shim around the fork tube; the bar must match the diameter and normally has a slit. Do not mix IHC/HIC/SCS without checking compatibility."
  },
  "keywords": [
   "ihc",
   "compression",
   "shim",
   "fente",
   "slit",
   "park setup"
  ],
  "source": {
   "label": "JF Rideshop",
   "url": "https://www.jfrideshop.ch/"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "scooter-hic",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "C’est quoi le HIC ?",
   "de": "Was ist HIC?",
   "it": "Cos’è HIC?",
   "en": "What is HIC?"
  },
  "answer": {
   "fr": "HIC est un système de compression utilisant un shim et généralement une barre oversized avec fente. Il faut faire correspondre fourche, shim, diamètre interne de barre et collier.",
   "de": "HIC ist ein Kompressionssystem mit Shim und normalerweise einer geschlitzten Oversized-Bar. Gabel, Shim, Innendurchmesser der Bar und Clamp müssen zusammenpassen.",
   "it": "HIC è un sistema di compressione con shim e normalmente un manubrio oversized con fessura. Forcella, shim, diametro interno e collarino devono essere compatibili.",
   "en": "HIC is a compression system using a shim and usually a slit oversized bar. Fork, shim, bar inner diameter and clamp all need to match."
  },
  "keywords": [
   "hic",
   "compression hic",
   "oversized",
   "shim",
   "fente"
  ],
  "source": {
   "label": "JF Rideshop",
   "url": "https://www.jfrideshop.ch/"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "scooter-scs",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "C’est quoi le SCS ?",
   "de": "Was ist SCS?",
   "it": "Cos’è SCS?",
   "en": "What is SCS?"
  },
  "answer": {
   "fr": "SCS combine le serrage du guidon et la compression dans un gros collier. Une barre utilisée en SCS ne doit normalement pas avoir de fente dans la zone serrée. Le système est apprécié pour sa robustesse, surtout en Street, mais il ajoute du poids.",
   "de": "SCS kombiniert Bar-Klemmung und Kompression in einer großen Clamp. Eine SCS-Bar sollte im Klemmbereich normalerweise keinen Schlitz haben. Das System ist robust und besonders im Street beliebt, wiegt aber mehr.",
   "it": "SCS combina serraggio del manubrio e compressione in un collarino grande. Una bar usata in SCS normalmente non deve avere fessura nella zona di serraggio. È robusto, molto usato nello Street, ma aggiunge peso.",
   "en": "SCS combines bar clamping and compression in one large clamp. A bar used with SCS should normally have no slit in the clamped area. It is valued for robustness, especially in Street, but adds weight."
  },
  "keywords": [
   "scs",
   "compression scs",
   "collier",
   "clamp",
   "sans fente",
   "no slit",
   "street"
  ],
  "source": {
   "label": "JF Rideshop",
   "url": "https://www.jfrideshop.ch/"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "scooter-slit",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "Pourquoi certaines barres ont une fente ?",
   "de": "Warum haben manche Bars einen Schlitz?",
   "it": "Perché alcuni manubri hanno una fessura?",
   "en": "Why do some scooter bars have a slit?"
  },
  "answer": {
   "fr": "La fente permet à la barre de se resserrer autour d’un shim sur des systèmes comme IHC/HIC. En SCS, une fente dans la zone de serrage est généralement incompatible/dangereuse sauf modification correcte prévue pour la pièce.",
   "de": "Der Schlitz ermöglicht es der Bar, sich bei IHC/HIC um einen Shim zusammenzuziehen. Bei SCS ist ein Schlitz im Klemmbereich normalerweise inkompatibel/problematisch, außer die Bar wurde korrekt dafür angepasst.",
   "it": "La fessura permette alla bar di stringersi attorno allo shim nei sistemi IHC/HIC. Con SCS una fessura nella zona di serraggio è normalmente incompatibile/problematicа, salvo adattamento corretto.",
   "en": "The slit lets a bar clamp around a shim on systems such as IHC/HIC. With SCS, a slit in the clamping area is normally incompatible/problematic unless the bar has been correctly adapted."
  },
  "keywords": [
   "fente barre",
   "slit",
   "bar slit",
   "scs slit",
   "ihc hic"
  ],
  "source": {
   "label": "JF Rideshop",
   "url": "https://www.jfrideshop.ch/"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "scooter-wheel-size",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "Quelle taille de roues choisir : 100, 110, 120 ou 125 mm ?",
   "de": "Welche Rollengröße: 100, 110, 120 oder 125 mm?",
   "it": "Quale misura ruote: 100, 110, 120 o 125 mm?",
   "en": "Which wheel size: 100, 110, 120 or 125 mm?"
  },
  "answer": {
   "fr": "110 mm est un standard très courant. 100 mm est petit et réactif ; 120/125 mm peut apporter plus de roulage et de confort, mais seulement si la fourche et le deck/frein acceptent le diamètre. Vérifie aussi la largeur de roue.",
   "de": "110 mm ist sehr verbreitet. 100 mm ist klein und agil; 120/125 mm kann besser rollen und komfortabler sein, aber nur wenn Gabel und Deck/Bremse den Durchmesser erlauben. Auch Rollenbreite prüfen.",
   "it": "110 mm è molto comune. 100 mm è piccolo e reattivo; 120/125 mm può scorrere meglio e dare comfort, ma solo se forcella e deck/freno accettano il diametro. Controlla anche la larghezza.",
   "en": "110 mm is very common. 100 mm is small and responsive; 120/125 mm can roll smoother and faster, but only if fork and deck/brake support the diameter. Check wheel width too."
  },
  "keywords": [
   "100mm",
   "110mm",
   "120mm",
   "125mm",
   "taille roue",
   "wheel size",
   "rollengröße",
   "misura ruota"
  ],
  "source": {
   "label": "JF Rideshop",
   "url": "https://www.jfrideshop.ch/"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "scooter-wheel-width",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "C’est quoi une roue 24 mm ou 30 mm de large ?",
   "de": "Was bedeutet 24 mm oder 30 mm Rollenbreite?",
   "it": "Cosa significa ruota larga 24 o 30 mm?",
   "en": "What does 24 mm vs 30 mm wheel width mean?"
  },
  "answer": {
   "fr": "24 mm est la largeur classique de nombreuses roues freestyle. Les roues 30 mm offrent une surface plus large mais demandent une fourche, un deck, des entretoises et parfois un frein compatibles. Diamètre et largeur sont deux compatibilités différentes.",
   "de": "24 mm ist die klassische Breite vieler Freestyle-Rollen. 30-mm-Rollen sind breiter, benötigen aber kompatible Gabel, Deck, Spacer und ggf. Bremse. Durchmesser und Breite sind zwei getrennte Kompatibilitäten.",
   "it": "24 mm è la larghezza classica di molte ruote freestyle. Le ruote da 30 mm sono più larghe ma richiedono forcella, deck, distanziali e a volte freno compatibili. Diametro e larghezza sono compatibilità diverse.",
   "en": "24 mm is the classic width for many freestyle wheels. 30 mm wheels are wider but require compatible fork, deck, spacers and sometimes brake. Diameter and width are separate compatibility checks."
  },
  "keywords": [
   "24mm",
   "30mm",
   "largeur roue",
   "wheel width",
   "breite",
   "larghezza ruota"
  ],
  "source": {
   "label": "JF Rideshop",
   "url": "https://www.jfrideshop.ch/"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "scooter-bearings",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "Quels roulements utilisent les roues de trottinette freestyle ?",
   "de": "Welche Lager nutzen Freestyle-Scooter-Rollen?",
   "it": "Quali cuscinetti usano le ruote freestyle?",
   "en": "What bearings do freestyle scooter wheels use?"
  },
  "answer": {
   "fr": "La grande majorité des roues freestyle utilisent des roulements au format 608. Il faut aussi les entretoises adaptées entre les roulements et dans le deck/fourche.",
   "de": "Die große Mehrheit der Freestyle-Rollen nutzt Lager im 608-Format. Passende Spacer zwischen den Lagern sowie in Deck/Gabel sind ebenfalls wichtig.",
   "it": "La grande maggioranza delle ruote freestyle usa cuscinetti formato 608. Servono anche distanziali adatti tra i cuscinetti e nel deck/forcella.",
   "en": "Most freestyle scooter wheels use 608-format bearings. Correct spacers between bearings and in the deck/fork are also important."
  },
  "keywords": [
   "roulement",
   "bearing",
   "608",
   "lager",
   "cuscinetti",
   "entretoise",
   "spacer"
  ],
  "source": {
   "label": "JF Rideshop",
   "url": "https://www.jfrideshop.ch/"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "scooter-park-setup",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "À quoi ressemble un setup Park ?",
   "de": "Wie sieht ein Park-Setup aus?",
   "it": "Com’è un setup Park?",
   "en": "What is a Park setup like?"
  },
  "answer": {
   "fr": "Un setup Park recherche souvent faible poids et réactivité : deck plus court/étroit, guidon parfois plus bas/étroit, roues rapides et compression légère comme IHC. Ce n’est pas une règle absolue : choisis surtout un setup adapté à ton niveau et ta morphologie.",
   "de": "Ein Park-Setup zielt oft auf geringes Gewicht und Agilität: kürzeres/schmaleres Deck, teils niedrigere/schmalere Bar, schnelle Rollen und leichte Kompression wie IHC. Das ist keine Pflicht – Setup an Niveau/Körper anpassen.",
   "it": "Un setup Park cerca spesso leggerezza e reattività: deck più corto/stretto, manubrio talvolta più basso/stretto, ruote veloci e compressione leggera come IHC. Non è una regola assoluta.",
   "en": "A Park setup often prioritises low weight and responsiveness: shorter/narrower deck, sometimes lower/narrower bar, fast wheels and light compression such as IHC. It is not an absolute rule; fit the setup to rider and level."
  },
  "keywords": [
   "setup park",
   "park scooter",
   "léger",
   "light",
   "deck court",
   "ihc"
  ],
  "source": {
   "label": "RSL – Disciplines",
   "url": "https://rsl-swiss.ch/disciplines"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "scooter-street-setup",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "À quoi ressemble un setup Street ?",
   "de": "Wie sieht ein Street-Setup aus?",
   "it": "Com’è un setup Street?",
   "en": "What is a Street setup like?"
  },
  "answer": {
   "fr": "Un setup Street privilégie souvent stabilité et grind : deck plus long et plus large, bouts plus boxy, guidon plus haut/large et système robuste comme SCS. Cela augmente généralement le poids mais apporte du contrôle sur rails, ledges et gaps.",
   "de": "Street-Setups priorisieren oft Stabilität und Grinds: längeres/breiteres, boxigeres Deck, höhere/breitere Bar und robuste Kompression wie SCS. Das erhöht meist das Gewicht, bringt aber Kontrolle auf Rails/Ledges/Gaps.",
   "it": "Un setup Street privilegia spesso stabilità e grind: deck più lungo/largo e boxy, manubrio più alto/largo e sistema robusto come SCS. Pesa di più ma dà controllo su rail, ledge e gap.",
   "en": "A Street setup often prioritises stability and grinding: longer/wider, boxier deck, higher/wider bar and robust compression such as SCS. It is usually heavier but gives control on rails, ledges and gaps."
  },
  "keywords": [
   "setup street",
   "street scooter",
   "deck large",
   "boxy",
   "scs",
   "rail",
   "ledge"
  ],
  "source": {
   "label": "RSL – Disciplines",
   "url": "https://rsl-swiss.ch/disciplines"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "scooter-headset-play",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "Pourquoi ma trottinette a du jeu dans la direction ?",
   "de": "Warum hat mein Scooter Spiel im Headset?",
   "it": "Perché il monopattino ha gioco nello sterzo?",
   "en": "Why does my scooter have headset play?"
  },
  "answer": {
   "fr": "Le jeu peut venir d’une compression insuffisante, d’un headset mal placé/usé, d’un collier desserré ou de pièces incompatibles. Desserre d’abord le collier, règle la compression juste assez pour supprimer le jeu tout en gardant une direction fluide, puis resserre le collier. Si le jeu revient, inspecte les pièces.",
   "de": "Spiel kann von zu wenig Kompression, falsch sitzendem/verschlissenem Headset, lockerer Clamp oder inkompatiblen Teilen kommen. Clamp lösen, Kompression nur so weit einstellen, dass Spiel weg ist und die Lenkung frei bleibt, dann Clamp festziehen. Bei erneutem Spiel Teile prüfen.",
   "it": "Il gioco può venire da compressione insufficiente, headset montato male/usurato, collarino allentato o pezzi incompatibili. Allenta il collarino, regola la compressione finché il gioco sparisce ma lo sterzo resta fluido, poi stringi il collarino.",
   "en": "Play can come from insufficient compression, a badly seated/worn headset, loose clamp or incompatible parts. Loosen the clamp, adjust compression only enough to remove play while steering stays smooth, then retighten the clamp. Inspect parts if play returns."
  },
  "keywords": [
   "jeu direction",
   "headset play",
   "compression",
   "collier desserré",
   "lenkung spiel",
   "gioco sterzo"
  ],
  "source": {
   "label": "JF Rideshop",
   "url": "https://www.jfrideshop.ch/"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "scooter-foam-grips",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "Comment monter des poignées mousse sans les abîmer ?",
   "de": "Wie montiert man Schaumstoffgriffe ohne sie zu beschädigen?",
   "it": "Come montare manopole in schiuma senza rovinarle?",
   "en": "How do I install foam grips without damaging them?"
  },
  "answer": {
   "fr": "Une méthode pratique consiste à glisser 4–5 petits colliers/attaches rapides entre le guidon et la poignée afin que la mousse ne frotte pas directement sur toute la barre. Fais coulisser la poignée en t’aidant des attaches, puis retire-les progressivement. Un compresseur peut aussi aider.",
   "de": "Praktisch ist es, 4–5 kleine Kabelbinder zwischen Bar und Schaumgriff zu schieben, damit der Schaum nicht vollflächig reibt. Griff darüber schieben und die Binder nach und nach herausziehen. Druckluft kann ebenfalls helfen.",
   "it": "Un metodo pratico è inserire 4–5 fascette tra manubrio e manopola in schiuma, così la schiuma non sfrega su tutta la barra. Fai scorrere la manopola e sfila gradualmente le fascette. Può aiutare anche aria compressa.",
   "en": "A practical method is to slide 4–5 small zip ties between the bar and foam grip so the foam does not drag over the full bar. Slide the grip using the ties, then remove them one by one. Compressed air can also help."
  },
  "keywords": [
   "poignée mousse",
   "foam grip",
   "grips",
   "colliers",
   "attaches rapides",
   "zip ties",
   "montage poignée"
  ],
  "source": {
   "label": "JF Rideshop – conseils",
   "url": "https://www.jfrideshop.ch/blog/wiki-jf-1"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "scooter-no-wd40-foam",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "Peut-on utiliser du WD-40 pour monter des poignées mousse ?",
   "de": "Kann man WD-40 für Schaumstoffgriffe verwenden?",
   "it": "Si può usare WD-40 per montare manopole in schiuma?",
   "en": "Can I use WD-40 to install foam grips?"
  },
  "answer": {
   "fr": "Évite le WD-40 sur des poignées mousse : il peut rester gras et n’est pas adapté à ce montage. Préfère la méthode des attaches rapides, de l’air comprimé ou un produit qui s’évapore complètement si le fabricant le permet.",
   "de": "WD-40 bei Schaumstoffgriffen vermeiden: Es kann fettig bleiben und ist für diese Montage ungeeignet. Besser Kabelbinder-Methode, Druckluft oder nur ein vollständig verdunstendes Mittel verwenden, wenn der Hersteller es erlaubt.",
   "it": "Evita WD-40 sulle manopole in schiuma: può restare unto e non è adatto al montaggio. Meglio fascette, aria compressa o un prodotto che evapora completamente se consentito dal produttore.",
   "en": "Avoid WD-40 on foam grips: it can stay greasy and is not suitable for this installation. Prefer zip ties, compressed air, or a fully evaporating product if the manufacturer allows it."
  },
  "keywords": [
   "wd40",
   "wd-40",
   "poignée mousse",
   "foam grips",
   "lubrifiant",
   "grips"
  ],
  "source": {
   "label": "JF Rideshop – conseils",
   "url": "https://www.jfrideshop.ch/blog/wiki-jf-1"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "scooter-maintenance",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "Quel entretien faire sur une trottinette freestyle ?",
   "de": "Welche Wartung braucht ein Freestyle-Scooter?",
   "it": "Che manutenzione serve a un monopattino freestyle?",
   "en": "What maintenance does a freestyle scooter need?"
  },
  "answer": {
   "fr": "Contrôle régulièrement axes, collier, compression, headset, roues/roulements, frein et fissures du deck/guidon/fourche. Nettoie sans noyer les roulements, remplace les pièces usées et respecte les couples de serrage : trop serrer peut aussi abîmer le matériel.",
   "de": "Regelmäßig Achsen, Clamp, Kompression, Headset, Rollen/Lager, Bremse und Risse an Deck/Bar/Gabel prüfen. Reinigen ohne Lager zu fluten, Verschleißteile ersetzen und sinnvoll anziehen – zu fest kann ebenfalls Schäden verursachen.",
   "it": "Controlla regolarmente assi, collarino, compressione, headset, ruote/cuscinetti, freno e crepe su deck/manubrio/forcella. Pulisci senza inondare i cuscinetti, sostituisci parti usurate e non stringere eccessivamente.",
   "en": "Regularly check axles, clamp, compression, headset, wheels/bearings, brake and cracks in deck/bar/fork. Clean without flooding bearings, replace worn parts and use sensible tightening; overtightening can also damage parts."
  },
  "keywords": [
   "entretien",
   "maintenance",
   "serrage",
   "axes",
   "fissure",
   "crack",
   "roulement",
   "headset"
  ],
  "source": {
   "label": "JF Rideshop",
   "url": "https://www.jfrideshop.ch/"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "scooter-safety",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "Quelles protections pour la trottinette freestyle ?",
   "de": "Welche Schutzausrüstung für Freestyle-Scooter?",
   "it": "Quali protezioni per monopattino freestyle?",
   "en": "What protection should I use for freestyle scooter?"
  },
  "answer": {
   "fr": "Le casque est la base et il est obligatoire en compétition RSL. Genouillères et coudières sont fortement utiles, surtout pour apprendre ou rider de gros modules ; selon la pratique on peut aussi ajouter protège-poignets et autres protections adaptées.",
   "de": "Ein Helm ist die Basis und bei RSL-Wettkämpfen Pflicht. Knie- und Ellbogenschoner sind besonders beim Lernen oder auf großen Obstacles sehr sinnvoll; je nach Fahrstil können weitere passende Protektoren ergänzt werden.",
   "it": "Il casco è la base ed è obbligatorio nelle gare RSL. Ginocchiere e gomitiere sono molto utili soprattutto nell’apprendimento o su grandi moduli; si possono aggiungere altre protezioni adatte.",
   "en": "A helmet is the baseline and is mandatory in RSL competition. Knee and elbow pads are very useful, especially when learning or riding large obstacles; add other suitable protection as needed."
  },
  "keywords": [
   "protection",
   "casque",
   "helmet",
   "pads",
   "genouillère",
   "coudière",
   "sécurité",
   "safety"
  ],
  "source": {
   "label": "RSL – Disciplines",
   "url": "https://rsl-swiss.ch/disciplines"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "scooter-beginner-progression",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "Quels tricks apprendre en premier ?",
   "de": "Welche Tricks sollte man zuerst lernen?",
   "it": "Quali trick imparare per primi?",
   "en": "Which tricks should I learn first?"
  },
  "answer": {
   "fr": "Commence par une position stable, freinage et bunny hop, puis travaille 180/fakie et manual. Quand ces bases sont propres, tu peux progresser vers tailwhip, barspin et petits grinds selon ton style. Mieux vaut un trick simple bien contrôlé qu’un gros trick forcé.",
   "de": "Beginne mit stabiler Position, Bremsen und Bunny Hop, dann 180/Fakie und Manual. Wenn die Basics sauber sind, kannst du je nach Stil zu Tailwhip, Barspin und kleinen Grinds weitergehen. Kontrolle vor Größe.",
   "it": "Inizia da posizione stabile, frenata e bunny hop, poi 180/fakie e manual. Quando le basi sono pulite, passa a tailwhip, barspin e piccoli grind secondo il tuo stile. Meglio un trick semplice controllato che uno grande forzato.",
   "en": "Start with stable stance, braking and bunny hop, then 180/fakie and manual. Once those basics are clean, progress to tailwhip, barspin and small grinds depending on style. A controlled simple trick beats a forced big trick."
  },
  "keywords": [
   "débutant",
   "beginner",
   "tricks débutant",
   "bunny hop",
   "180",
   "fakie",
   "manual",
   "tailwhip",
   "barspin"
  ],
  "source": {
   "label": "RSL – Disciplines",
   "url": "https://rsl-swiss.ch/disciplines"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "scooter-bunny-hop",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "Comment faire un bunny hop ?",
   "de": "Wie macht man einen Bunny Hop?",
   "it": "Come si fa un bunny hop?",
   "en": "How do I bunny hop?"
  },
  "answer": {
   "fr": "Le bunny hop, c'est le saut de base : décoller les deux roues sans rampe ni module. Fléchis légèrement, tire le guidon vers le haut tout en poussant dans les jambes, puis ramène le deck sous toi pour décoller les deux roues. Commence bas, cherche une réception avec les deux pieds bien placés et augmente la hauteur progressivement.",
   "de": "Der Bunny Hop ist der Basissprung: beide Räder ohne Rampe vom Boden lösen. Leicht in die Knie gehen, Bar nach oben ziehen und gleichzeitig aus den Beinen drücken, dann Deck unter den Körper bringen, sodass beide Rollen abheben. Niedrig beginnen, sauber mit beiden Füßen landen und Höhe langsam steigern.",
   "it": "Il bunny hop è il salto di base: staccare entrambe le ruote senza rampa. Piega leggermente le gambe, tira il manubrio verso l’alto mentre spingi con le gambe e porta il deck sotto di te per staccare entrambe le ruote. Inizia basso e aumenta gradualmente mantenendo atterraggi controllati.",
   "en": "The bunny hop is the basic jump: lifting both wheels with no ramp. Bend slightly, pull the bar upward while driving through your legs, then bring the deck under you so both wheels leave the ground. Start low, land with both feet well placed and build height progressively."
  },
  "keywords": [
   "anfänger",
   "bunny hop",
   "c est quoi bunny hop",
   "cest quoi bunny hop",
   "definition bunny hop",
   "hop",
   "jump",
   "salto",
   "saut"
  ],
  "source": {
   "label": "RSL – Cours",
   "url": "https://rsl-swiss.ch/cours"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "scooter-tailwhip",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "Comment apprendre le tailwhip ?",
   "de": "Wie lernt man Tailwhip?",
   "it": "Come imparare il tailwhip?",
   "en": "How do I learn a tailwhip?"
  },
  "answer": {
   "fr": "Le tailwhip, c'est faire tourner le deck d'un tour complet autour de la potence pendant que tu restes en l'air, avant de le récupérer sous les pieds. Maîtrise d’abord un bunny hop stable. Lance le deck avec les pieds puis accompagne sa rotation surtout avec les poignets/avant-bras, garde le guidon devant toi, regarde le deck revenir et pose les pieds dessus. Travaille d’abord sur terrain plat ou module adapté avec protections.",
   "de": "Beim Tailwhip dreht sich das Deck einmal komplett um den Steuersatz, während du in der Luft bist. Zuerst einen stabilen Bunny Hop beherrschen. Deck mit den Füßen anstoßen und die Rotation vor allem mit Handgelenken/Unterarmen führen, Bar vor dir halten, Deck beobachten und wieder mit beiden Füßen fangen. Mit Schutz und auf geeignetem Untergrund üben.",
   "it": "Nel tailwhip il deck compie un giro completo attorno alla forcella mentre sei in aria. Prima padroneggia un bunny hop stabile. Lancia il deck con i piedi e accompagna la rotazione soprattutto con polsi/avambracci, tieni il manubrio davanti, guarda tornare il deck e riprendilo con entrambi i piedi. Allenati con protezioni.",
   "en": "In a tailwhip the deck spins a full turn around the headset while you're in the air. First master a stable bunny hop. Kick the deck, then guide its rotation mainly with wrists/forearms, keep the bar in front, watch the deck return and catch it with both feet. Practise with protection on suitable terrain."
  },
  "keywords": [
   "apprendre tailwhip",
   "c est quoi tailwhip",
   "cest quoi tailwhip",
   "definition tailwhip",
   "tailwhip",
   "trick",
   "whip"
  ],
  "source": {
   "label": "RSL – Cours",
   "url": "https://rsl-swiss.ch/cours"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "scooter-barspin",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "Comment apprendre le barspin ?",
   "de": "Wie lernt man Barspin?",
   "it": "Come imparare il barspin?",
   "en": "How do I learn a barspin?"
  },
  "answer": {
   "fr": "Le barspin, c'est faire tourner le guidon d'un tour complet en l'air pendant que tes pieds restent sur le deck. Avant de le lancer en l’air, entraîne la rotation du guidon à l’arrêt pour comprendre le passage des mains. Ensuite combine avec un bunny hop, garde le guidon près du corps et récupère les poignées proprement. Vérifie qu’aucun câble ne gêne : une trottinette freestyle classique n’en a généralement pas.",
   "de": "Beim Barspin dreht sich die Bar in der Luft einmal komplett, die Füße bleiben auf dem Deck. Übe die Bar-Drehung zuerst im Stand, um den Handwechsel zu verstehen. Dann mit Bunny Hop kombinieren, Bar nah am Körper halten und Griffe sauber fangen. Achte darauf, dass nichts die Rotation behindert.",
   "it": "Nel barspin il manubrio fa un giro completo in aria, i piedi restano sul deck. Prima prova la rotazione del manubrio da fermo per capire il passaggio delle mani. Poi combinala con bunny hop, tieni il manubrio vicino al corpo e riprendi bene le manopole. Assicurati che nulla ostacoli la rotazione.",
   "en": "In a barspin the bar spins a full turn mid-air while your feet stay on the deck. Practise the bar rotation while stationary first to understand the hand pass. Then combine it with a bunny hop, keep the bar close and catch the grips cleanly. Make sure nothing interferes with rotation."
  },
  "keywords": [
   "bar spin",
   "barspin",
   "c est quoi barspin",
   "cest quoi barspin",
   "definition barspin",
   "rotation guidon",
   "trick"
  ],
  "source": {
   "label": "RSL – Cours",
   "url": "https://rsl-swiss.ch/cours"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "scooter-grinds",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "Quels grinds apprendre en Street ?",
   "de": "Welche Grinds zuerst im Street?",
   "it": "Quali grind imparare nello Street?",
   "en": "Which grinds should I learn first in Street?"
  },
  "answer": {
   "fr": "Un grind, c'est glisser sur une barre ou un rebord en appui sur le deck ou les pegs, sans que les roues touchent. Commence sur un ledge bas et propre avec des positions simples comme feeble ou boardslide selon ton aisance. Travaille l’approche, le bunny hop, le placement du deck et surtout la sortie contrôlée avant d’augmenter hauteur ou vitesse.",
   "de": "Ein Grind ist das Rutschen auf einer Rail oder Kante auf Deck oder Pegs, ohne Bodenkontakt der Räder. Auf einem niedrigen, sauberen Ledge mit einfachen Positionen wie Feeble oder Boardslide beginnen. Anfahrt, Bunny Hop, Deck-Platzierung und vor allem kontrollierten Ausstieg üben, bevor Höhe/Tempo steigen.",
   "it": "Un grind è scivolare su un rail o un bordo appoggiandosi su deck o pegs, senza toccare con le ruote. Inizia su un ledge basso e pulito con posizioni semplici come feeble o boardslide. Lavora su avvicinamento, bunny hop, posizione del deck e soprattutto uscita controllata prima di aumentare altezza o velocità.",
   "en": "A grind is sliding along a rail or ledge on your deck or pegs, wheels off the surface. Start on a low, clean ledge with simple positions such as feeble or boardslide depending on comfort. Work on approach, bunny hop, deck placement and especially a controlled exit before adding height or speed."
  },
  "keywords": [
   "boardslide",
   "c est quoi grinds",
   "cest quoi grinds",
   "definition grinds",
   "feeble",
   "grind",
   "grinds",
   "ledge",
   "rail",
   "smith",
   "street trick"
  ],
  "source": {
   "label": "RSL – Disciplines",
   "url": "https://rsl-swiss.ch/disciplines"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "scooter-manual",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "Comment progresser en manual ?",
   "de": "Wie verbessert man Manuals?",
   "it": "Come migliorare il manual?",
   "en": "How do I improve manuals?"
  },
  "answer": {
   "fr": "Le manual, c'est rouler en équilibre sur la roue arrière, roue avant en l'air, sans poser le pied. Cherche d’abord le point d’équilibre à faible vitesse, bras détendus et genoux souples. Utilise surtout les hanches et les jambes pour corriger, pas de grands mouvements de guidon. Mesure ta progression en distance ou en repères au sol.",
   "de": "Beim Manual balancierst du auf dem Hinterrad, das Vorderrad in der Luft. Suche den Balancepunkt zuerst bei niedriger Geschwindigkeit, Arme locker und Knie weich. Korrigiere hauptsächlich mit Hüfte/Beinen statt großen Bar-Bewegungen. Fortschritt über Distanz oder Bodenmarken messen.",
   "it": "Il manual è rullare in equilibrio sulla ruota posteriore, anteriore sollevata. Trova il punto di equilibrio a bassa velocità, braccia rilassate e ginocchia morbide. Correggi soprattutto con anche/gambe, non con grandi movimenti del manubrio. Misura i progressi in distanza.",
   "en": "A manual is rolling balanced on the back wheel with the front wheel up. Find the balance point at low speed first, with relaxed arms and soft knees. Correct mainly with hips/legs rather than big bar movements. Track progress by distance or ground markers."
  },
  "keywords": [
   "balance",
   "c est quoi manual",
   "cest quoi manual",
   "definition manual",
   "manual",
   "nose manual",
   "street",
   "équilibre"
  ],
  "source": {
   "label": "RSL – Disciplines",
   "url": "https://rsl-swiss.ch/disciplines"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "scooter-contest-prep",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "Comment préparer une compétition de trottinette ?",
   "de": "Wie bereite ich mich auf einen Scooter-Contest vor?",
   "it": "Come prepararsi a una gara di monopattino?",
   "en": "How should I prepare for a scooter contest?"
  },
  "answer": {
   "fr": "Prépare une run réaliste que tu peux répéter proprement, repère le park, garde 1–2 tricks de secours et ne mise pas tout sur ton trick le plus risqué. Vérifie le setup, casque et horaires, arrive en avance et chauffe progressivement.",
   "de": "Plane einen realistischen Run, den du sauber wiederholen kannst, lerne den Park, halte 1–2 Ersatztricks bereit und setze nicht alles auf den riskantesten Trick. Setup/Helm/Zeiten prüfen, früh kommen und progressiv aufwärmen.",
   "it": "Prepara una run realistica e ripetibile, studia il park, tieni 1–2 trick di riserva e non puntare tutto sul trick più rischioso. Controlla setup, casco e orari, arriva in anticipo e riscaldati progressivamente.",
   "en": "Build a realistic run you can repeat cleanly, learn the park, keep 1–2 backup tricks and do not gamble everything on your riskiest trick. Check setup, helmet and schedule, arrive early and warm up progressively."
  },
  "keywords": [
   "préparer contest",
   "competition prep",
   "run",
   "échauffement",
   "warm up",
   "contest"
  ],
  "source": {
   "label": "RSL – Disciplines",
   "url": "https://rsl-swiss.ch/disciplines"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "scooter-sketchy",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "C’est quoi une réception sketchy ?",
   "de": "Was ist eine sketchy Landung?",
   "it": "Cos’è un atterraggio sketchy?",
   "en": "What is a sketchy landing?"
  },
  "answer": {
   "fr": "“Sketchy” signifie que la réception n’est pas vraiment propre ou contrôlée : pied qui touche, gros déséquilibre, mouvement de rattrapage, etc. En règlement RSL, le trick peut parfois être compté mais il est fortement pénalisé en exécution/propreté.",
   "de": "„Sketchy“ bedeutet eine unsaubere oder schlecht kontrollierte Landung, z.B. Fußkontakt oder starkes Abfangen. Bei RSL kann der Trick eventuell zählen, wird aber bei Ausführung/Sauberkeit stark abgewertet.",
   "it": "“Sketchy” indica un atterraggio non pulito o poco controllato, per esempio piede a terra o forte recupero. In RSL il trick può talvolta contare ma viene penalizzato molto nell’esecuzione/pulizia.",
   "en": "“Sketchy” means the landing is not clean or well controlled, for example a foot touch or major save. Under RSL rules the trick may still count but is heavily penalised for execution/cleanliness."
  },
  "keywords": [
   "sketchy",
   "réception",
   "landing",
   "propreté",
   "execution",
   "landung",
   "atterraggio"
  ],
  "source": {
   "label": "RSL – Disciplines",
   "url": "https://rsl-swiss.ch/disciplines"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "scooter-commuter-vs-freestyle",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "Quelle différence entre trottinette freestyle et trottinette de déplacement ?",
   "de": "Was ist der Unterschied zwischen Freestyle- und City-Scooter?",
   "it": "Differenza tra monopattino freestyle e da trasporto?",
   "en": "What is the difference between a freestyle and commuter scooter?"
  },
  "answer": {
   "fr": "Une trottinette freestyle est conçue pour encaisser sauts et tricks : structure fixe, deck/fourche/bar renforcés, petites roues PU et absence de mécanisme de pliage classique. Une trottinette de déplacement privilégie confort, grandes roues, pliage ou équipement urbain, mais n’est pas faite pour les impacts freestyle.",
   "de": "Ein Freestyle-Scooter ist für Sprünge/Tricks gebaut: feste Konstruktion, verstärktes Deck/Gabel/Bar, kleine PU-Rollen und kein klassischer Klappmechanismus. Ein City-Scooter priorisiert Komfort, größere Rollen und Faltung, ist aber nicht für Freestyle-Impacts gedacht.",
   "it": "Un monopattino freestyle è costruito per salti/trick: struttura fissa, deck/forcella/manubrio rinforzati, piccole ruote PU e niente classico sistema pieghevole. Un monopattino da trasporto privilegia comfort e praticità, non gli impatti freestyle.",
   "en": "A freestyle scooter is built for jumps/tricks: fixed construction, reinforced deck/fork/bar, small PU wheels and no typical folding mechanism. A commuter scooter prioritises comfort, larger wheels and portability, but is not designed for freestyle impacts."
  },
  "keywords": [
   "freestyle vs normal",
   "trottinette déplacement",
   "commuter",
   "city scooter",
   "pliable",
   "folding"
  ],
  "source": {
   "label": "JF Rideshop",
   "url": "https://www.jfrideshop.ch/"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "rsl-memberships",
  "category": "RSL",
  "questions": {
   "fr": "Quelles sont les formules membres RSL ?",
   "de": "Welche RSL-Mitgliedschaften gibt es?",
   "it": "Quali formule membro RSL esistono?",
   "en": "What RSL membership plans are available?"
  },
  "answer": {
   "fr": "La page Membres présente 5 formules : Starter 50 CHF/an, Rider 80 CHF/an, Pro/Soutien 15 CHF/mois ou 149 CHF/an, Progression 289 CHF/an ou 25 CHF/mois, Premium 490 CHF/an ou 43 CHF/mois. Les avantages augmentent selon la formule : réductions, priorités, cours inclus ou gratuits et suivi.",
   "de": "Die Mitgliederseite zeigt 5 Modelle: Starter 50 CHF/Jahr, Rider 80 CHF/Jahr, Pro/Soutien 15 CHF/Monat oder 149 CHF/Jahr, Progression 289 CHF/Jahr oder 25 CHF/Monat, Premium 490 CHF/Jahr oder 43 CHF/Monat. Vorteile steigen je nach Paket.",
   "it": "La pagina Membri presenta 5 formule: Starter 50 CHF/anno, Rider 80 CHF/anno, Pro/Soutien 15 CHF/mese o 149 CHF/anno, Progression 289 CHF/anno o 25 CHF/mese, Premium 490 CHF/anno o 43 CHF/mese. I vantaggi aumentano secondo il piano.",
   "en": "The Members page lists 5 plans: Starter CHF 50/year, Rider CHF 80/year, Pro/Support CHF 15/month or 149/year, Progression CHF 289/year or 25/month, and Premium CHF 490/year or 43/month. Benefits increase with each plan."
  },
  "keywords": [
   "membre",
   "membership",
   "starter",
   "rider",
   "soutien",
   "progression",
   "premium",
   "50",
   "80",
   "149",
   "289",
   "490"
  ],
  "source": {
   "label": "RSL – Membres",
   "url": "https://rsl-swiss.ch/membres"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rsl-member-starter",
  "category": "RSL",
  "questions": {
   "fr": "Que comprend la formule Starter RSL ?",
   "de": "Was enthält RSL Starter?",
   "it": "Cosa comprende RSL Starter?",
   "en": "What does RSL Starter include?"
  },
  "answer": {
   "fr": "Starter est affiché à 50 CHF/an : statut membre officiel, cours à 20 CHF au lieu de 30, –10 % sur le livret de tricks, –10 % dans les boutiques partenaires et sticker/support visuel RSL.",
   "de": "Starter kostet laut Seite 50 CHF/Jahr: offizieller Mitgliedsstatus, Kurse für 20 statt 30 CHF, –10 % auf das Trick-Heft, –10 % bei Partner-Shops und RSL-Sticker/Visual.",
   "it": "Starter è indicato a 50 CHF/anno: status membro ufficiale, corsi a 20 invece di 30 CHF, –10% sul libretto trick, –10% nei negozi partner e sticker/supporto RSL.",
   "en": "Starter is listed at CHF 50/year: official member status, courses at CHF 20 instead of 30, 10% off the trick booklet, 10% off partner shops and an RSL sticker/visual."
  },
  "keywords": [
   "starter",
   "50 chf",
   "cours 20",
   "10%",
   "membre officiel"
  ],
  "source": {
   "label": "RSL – Membres",
   "url": "https://rsl-swiss.ch/membres"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rsl-member-rider",
  "category": "RSL",
  "questions": {
   "fr": "Que comprend la formule Rider RSL ?",
   "de": "Was enthält RSL Rider?",
   "it": "Cosa comprende RSL Rider?",
   "en": "What does RSL Rider include?"
  },
  "answer": {
   "fr": "Rider est affiché à 80 CHF/an : priorité à certaines sessions/events, cours à 20 CHF au lieu de 30, –15 % sur le livret de tricks et –15 % dans les boutiques partenaires RSL.",
   "de": "Rider kostet laut Seite 80 CHF/Jahr: Priorität bei bestimmten Sessions/Events, Kurse für 20 statt 30 CHF, –15 % auf Trick-Heft und –15 % bei RSL-Partner-Shops.",
   "it": "Rider è indicato a 80 CHF/anno: priorità su alcune session/eventi, corsi a 20 invece di 30 CHF, –15% sul libretto trick e –15% nei negozi partner RSL.",
   "en": "Rider is listed at CHF 80/year: priority for some sessions/events, courses at CHF 20 instead of 30, 15% off the trick booklet and 15% off RSL partner shops."
  },
  "keywords": [
   "rider plan",
   "80 chf",
   "15%",
   "priorité session"
  ],
  "source": {
   "label": "RSL – Membres",
   "url": "https://rsl-swiss.ch/membres"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rsl-member-support",
  "category": "RSL",
  "questions": {
   "fr": "Que comprend Pro / Soutien RSL ?",
   "de": "Was enthält RSL Pro / Support?",
   "it": "Cosa comprende Pro / Soutien RSL?",
   "en": "What does RSL Pro / Support include?"
  },
  "answer": {
   "fr": "Pro / Soutien est affiché à 15 CHF/mois ou 149 CHF/an. Il vise notamment marques, commerces, parents et riders adultes qui veulent soutenir la ligue ; il inclut livret de tricks, cours à 20 CHF et –15 % chez les partenaires.",
   "de": "Pro/Support kostet laut Seite 15 CHF/Monat oder 149 CHF/Jahr. Es richtet sich u.a. an Marken, Shops, Eltern und erwachsene Rider zur Unterstützung der Liga; enthalten sind Trick-Heft, Kurse für 20 CHF und –15 % bei Partnern.",
   "it": "Pro/Soutien è indicato a 15 CHF/mese o 149 CHF/anno. È rivolto anche a marchi, negozi, genitori e rider adulti che sostengono la lega; include libretto trick, corsi a 20 CHF e –15% dai partner.",
   "en": "Pro/Support is listed at CHF 15/month or 149/year. It targets brands, businesses, parents and adult riders supporting the league; it includes the trick booklet, CHF 20 courses and 15% off partners."
  },
  "keywords": [
   "pro soutien",
   "support",
   "149",
   "15 mois",
   "marque commerce"
  ],
  "source": {
   "label": "RSL – Membres",
   "url": "https://rsl-swiss.ch/membres"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rsl-member-progression",
  "category": "RSL",
  "questions": {
   "fr": "Que comprend la formule Progression RSL ?",
   "de": "Was enthält RSL Progression?",
   "it": "Cosa comprende RSL Progression?",
   "en": "What does RSL Progression include?"
  },
  "answer": {
   "fr": "Progression est affiché à 289 CHF/an ou 25 CHF/mois. La formule comprend 15 cours, puis les suivants à 20 CHF, –15 % sur matériel/partenaires et un T-shirt RSL offert.",
   "de": "Progression kostet laut Seite 289 CHF/Jahr oder 25 CHF/Monat. Enthalten sind 15 Kurse, danach weitere für 20 CHF, –15 % auf Material/Partner und ein RSL-T-Shirt.",
   "it": "Progression è indicato a 289 CHF/anno o 25 CHF/mese. Include 15 corsi, poi corsi a 20 CHF, –15% su materiale/partner e una T-shirt RSL.",
   "en": "Progression is listed at CHF 289/year or 25/month. It includes 15 courses, then further courses at CHF 20, 15% off equipment/partners and an RSL T-shirt."
  },
  "keywords": [
   "progression",
   "289",
   "25 mois",
   "15 cours",
   "t-shirt"
  ],
  "source": {
   "label": "RSL – Membres",
   "url": "https://rsl-swiss.ch/membres"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rsl-member-premium",
  "category": "RSL",
  "questions": {
   "fr": "Que comprend la formule Premium RSL ?",
   "de": "Was enthält RSL Premium?",
   "it": "Cosa comprende RSL Premium?",
   "en": "What does RSL Premium include?"
  },
  "answer": {
   "fr": "Premium est affiché à 490 CHF/an ou 43 CHF/mois : tous les cours gratuits, –50 % sur les events, suivi avancé, T-shirt et sweat offerts.",
   "de": "Premium kostet laut Seite 490 CHF/Jahr oder 43 CHF/Monat: alle Kurse kostenlos, –50 % auf Events, erweitertes Coaching sowie T-Shirt und Hoodie.",
   "it": "Premium è indicato a 490 CHF/anno o 43 CHF/mese: tutti i corsi gratis, –50% sugli eventi, follow-up avanzato, T-shirt e felpa inclusi.",
   "en": "Premium is listed at CHF 490/year or 43/month: all courses free, 50% off events, advanced follow-up, plus a T-shirt and hoodie."
  },
  "keywords": [
   "premium",
   "490",
   "43 mois",
   "cours gratuits",
   "50% events",
   "sweat"
  ],
  "source": {
   "label": "RSL – Membres",
   "url": "https://rsl-swiss.ch/membres"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rsl-course-price",
  "category": "RSL",
  "questions": {
   "fr": "Combien coûte un cours RSL ?",
   "de": "Was kostet ein RSL-Kurs?",
   "it": "Quanto costa un corso RSL?",
   "en": "How much is an RSL course?"
  },
  "answer": {
   "fr": "La page Membres utilise 30 CHF comme tarif normal de référence et 20 CHF pour les membres concernés par les avantages cours. Le prix exact d’une séance doit être vérifié au moment de l’inscription.",
   "de": "Die Mitgliederseite verwendet 30 CHF als regulären Referenzpreis und 20 CHF für berechtigte Mitglieder. Den genauen Preis einer Session bitte bei der Anmeldung prüfen.",
   "it": "La pagina Membri usa 30 CHF come prezzo normale di riferimento e 20 CHF per i membri con vantaggio corsi. Verifica il prezzo esatto al momento dell’iscrizione.",
   "en": "The Members page uses CHF 30 as the regular reference price and CHF 20 for members with course benefits. Check the exact session price when registering."
  },
  "keywords": [
   "prix cours",
   "30 chf",
   "20 chf",
   "course price",
   "kurs preis",
   "prezzo corso"
  ],
  "source": {
   "label": "RSL – Membres",
   "url": "https://rsl-swiss.ch/membres"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rsl-course-locations",
  "category": "RSL",
  "questions": {
   "fr": "Où ont lieu les cours RSL ?",
   "de": "Wo finden RSL-Kurse statt?",
   "it": "Dove si svolgono i corsi RSL?",
   "en": "Where are RSL courses held?"
  },
  "answer": {
   "fr": "Les lieux communiqués dans le projet RSL incluent notamment Lausanne/Vidy, Montreux, Martigny et Yverdon selon les périodes. Les lieux et dates changent : utilise toujours la page Cours pour voir les séances réellement ouvertes.",
   "de": "Im RSL-Projekt wurden je nach Zeitraum u.a. Lausanne/Vidy, Montreux, Martigny und Yverdon als Kursorte kommuniziert. Orte und Daten ändern sich: immer die aktuelle Kursseite prüfen.",
   "it": "Nel progetto RSL sono stati comunicati, a seconda del periodo, luoghi come Losanna/Vidy, Montreux, Martigny e Yverdon. Luoghi e date cambiano: controlla sempre la pagina Corsi.",
   "en": "RSL project communications have included locations such as Lausanne/Vidy, Montreux, Martigny and Yverdon depending on the period. Locations and dates change, so always use the Courses page for currently open sessions."
  },
  "keywords": [
   "lausanne",
   "vidy",
   "montreux",
   "martigny",
   "yverdon",
   "où cours",
   "course locations"
  ],
  "source": {
   "label": "RSL – Cours",
   "url": "https://rsl-swiss.ch/cours"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rsl-shop-tshirt",
  "category": "RSL",
  "questions": {
   "fr": "Quel est le prix de T-shirt officiel RSL au Shop RSL ?",
   "de": "Was kostet Offizielles RSL T-Shirt im RSL Shop?",
   "it": "Quanto costa T-shirt ufficiale RSL nello Shop RSL?",
   "en": "How much is the Official RSL T-shirt in the RSL Shop?"
  },
  "answer": {
   "fr": "La page Shop RSL affichait T-shirt officiel RSL à 35 CHF lors de la dernière vérification. Le catalogue est évolutif : vérifie le prix, le stock et les variantes sur la page officielle.",
   "de": "Die RSL-Shopseite zeigte Offizielles RSL T-Shirt bei der letzten Prüfung für 35 CHF. Katalog, Preis, Bestand und Varianten können sich ändern; bitte die offizielle Seite prüfen.",
   "it": "La pagina Shop RSL mostrava T-shirt ufficiale RSL a 35 CHF all’ultima verifica. Catalogo, prezzo, stock e varianti possono cambiare: verifica la pagina ufficiale.",
   "en": "The RSL Shop page listed the Official RSL T-shirt at 35 CHF at the last check. Catalogue, price, stock and variants can change, so verify the official page."
  },
  "keywords": [
   "T-shirt officiel RSL",
   "Official RSL T-shirt",
   "Offizielles RSL T-Shirt",
   "T-shirt ufficiale RSL",
   "35 CHF",
   "shop rsl",
   "prix"
  ],
  "source": {
   "label": "RSL – Shop",
   "url": "https://rsl-swiss.ch/shop-rsl"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rsl-shop-helmet",
  "category": "RSL",
  "questions": {
   "fr": "Quel est le prix de Casque ALK13 Krypton au Shop RSL ?",
   "de": "Was kostet ALK13 Krypton Helm im RSL Shop?",
   "it": "Quanto costa Casco ALK13 Krypton nello Shop RSL?",
   "en": "How much is the ALK13 Krypton helmet in the RSL Shop?"
  },
  "answer": {
   "fr": "La page Shop RSL affichait Casque ALK13 Krypton à 48 CHF lors de la dernière vérification. Le catalogue est évolutif : vérifie le prix, le stock et les variantes sur la page officielle.",
   "de": "Die RSL-Shopseite zeigte ALK13 Krypton Helm bei der letzten Prüfung für 48 CHF. Katalog, Preis, Bestand und Varianten können sich ändern; bitte die offizielle Seite prüfen.",
   "it": "La pagina Shop RSL mostrava Casco ALK13 Krypton a 48 CHF all’ultima verifica. Catalogo, prezzo, stock e varianti possono cambiare: verifica la pagina ufficiale.",
   "en": "The RSL Shop page listed the ALK13 Krypton helmet at 48 CHF at the last check. Catalogue, price, stock and variants can change, so verify the official page."
  },
  "keywords": [
   "Casque ALK13 Krypton",
   "ALK13 Krypton helmet",
   "ALK13 Krypton Helm",
   "Casco ALK13 Krypton",
   "48 CHF",
   "shop rsl",
   "prix"
  ],
  "source": {
   "label": "RSL – Shop",
   "url": "https://rsl-swiss.ch/shop-rsl"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rsl-shop-hoodie",
  "category": "RSL",
  "questions": {
   "fr": "Quel est le prix de Sweat à capuche officiel RSL au Shop RSL ?",
   "de": "Was kostet Offizieller RSL Hoodie im RSL Shop?",
   "it": "Quanto costa Felpa ufficiale RSL nello Shop RSL?",
   "en": "How much is the Official RSL hoodie in the RSL Shop?"
  },
  "answer": {
   "fr": "La page Shop RSL affichait Sweat à capuche officiel RSL à 69 CHF lors de la dernière vérification. Le catalogue est évolutif : vérifie le prix, le stock et les variantes sur la page officielle.",
   "de": "Die RSL-Shopseite zeigte Offizieller RSL Hoodie bei der letzten Prüfung für 69 CHF. Katalog, Preis, Bestand und Varianten können sich ändern; bitte die offizielle Seite prüfen.",
   "it": "La pagina Shop RSL mostrava Felpa ufficiale RSL a 69 CHF all’ultima verifica. Catalogo, prezzo, stock e varianti possono cambiare: verifica la pagina ufficiale.",
   "en": "The RSL Shop page listed the Official RSL hoodie at 69 CHF at the last check. Catalogue, price, stock and variants can change, so verify the official page."
  },
  "keywords": [
   "Sweat à capuche officiel RSL",
   "Official RSL hoodie",
   "Offizieller RSL Hoodie",
   "Felpa ufficiale RSL",
   "69 CHF",
   "shop rsl",
   "prix"
  ],
  "source": {
   "label": "RSL – Shop",
   "url": "https://rsl-swiss.ch/shop-rsl"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rsl-shop-pads",
  "category": "RSL",
  "questions": {
   "fr": "Quel est le prix de Set protections ALK13 au Shop RSL ?",
   "de": "Was kostet ALK13 Schützer-Set im RSL Shop?",
   "it": "Quanto costa Set protezioni ALK13 nello Shop RSL?",
   "en": "How much is the ALK13 protection set in the RSL Shop?"
  },
  "answer": {
   "fr": "La page Shop RSL affichait Set protections ALK13 à 49 CHF lors de la dernière vérification. Le catalogue est évolutif : vérifie le prix, le stock et les variantes sur la page officielle.",
   "de": "Die RSL-Shopseite zeigte ALK13 Schützer-Set bei der letzten Prüfung für 49 CHF. Katalog, Preis, Bestand und Varianten können sich ändern; bitte die offizielle Seite prüfen.",
   "it": "La pagina Shop RSL mostrava Set protezioni ALK13 a 49 CHF all’ultima verifica. Catalogo, prezzo, stock e varianti possono cambiare: verifica la pagina ufficiale.",
   "en": "The RSL Shop page listed the ALK13 protection set at 49 CHF at the last check. Catalogue, price, stock and variants can change, so verify the official page."
  },
  "keywords": [
   "Set protections ALK13",
   "ALK13 protection set",
   "ALK13 Schützer-Set",
   "Set protezioni ALK13",
   "49 CHF",
   "shop rsl",
   "prix"
  ],
  "source": {
   "label": "RSL – Shop",
   "url": "https://rsl-swiss.ch/shop-rsl"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rsl-shop-bloody",
  "category": "RSL",
  "questions": {
   "fr": "Quel est le prix de Versatyl Bloody Mary V2 au Shop RSL ?",
   "de": "Was kostet Versatyl Bloody Mary V2 im RSL Shop?",
   "it": "Quanto costa Versatyl Bloody Mary V2 nello Shop RSL?",
   "en": "How much is the Versatyl Bloody Mary V2 in the RSL Shop?"
  },
  "answer": {
   "fr": "La page Shop RSL affichait Versatyl Bloody Mary V2 à 139.95 CHF lors de la dernière vérification. Le catalogue est évolutif : vérifie le prix, le stock et les variantes sur la page officielle.",
   "de": "Die RSL-Shopseite zeigte Versatyl Bloody Mary V2 bei der letzten Prüfung für 139.95 CHF. Katalog, Preis, Bestand und Varianten können sich ändern; bitte die offizielle Seite prüfen.",
   "it": "La pagina Shop RSL mostrava Versatyl Bloody Mary V2 a 139.95 CHF all’ultima verifica. Catalogo, prezzo, stock e varianti possono cambiare: verifica la pagina ufficiale.",
   "en": "The RSL Shop page listed the Versatyl Bloody Mary V2 at 139.95 CHF at the last check. Catalogue, price, stock and variants can change, so verify the official page."
  },
  "keywords": [
   "Versatyl Bloody Mary V2",
   "Versatyl Bloody Mary V2",
   "Versatyl Bloody Mary V2",
   "Versatyl Bloody Mary V2",
   "139.95 CHF",
   "shop rsl",
   "prix"
  ],
  "source": {
   "label": "RSL – Shop",
   "url": "https://rsl-swiss.ch/shop-rsl"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rsl-shop-s2s",
  "category": "RSL",
  "questions": {
   "fr": "Quel est le prix de Trottinette S2S Edition au Shop RSL ?",
   "de": "Was kostet S2S Edition Scooter im RSL Shop?",
   "it": "Quanto costa Monopattino S2S Edition nello Shop RSL?",
   "en": "How much is the S2S Edition scooter in the RSL Shop?"
  },
  "answer": {
   "fr": "La page Shop RSL affichait Trottinette S2S Edition à 179 CHF lors de la dernière vérification. Le catalogue est évolutif : vérifie le prix, le stock et les variantes sur la page officielle.",
   "de": "Die RSL-Shopseite zeigte S2S Edition Scooter bei der letzten Prüfung für 179 CHF. Katalog, Preis, Bestand und Varianten können sich ändern; bitte die offizielle Seite prüfen.",
   "it": "La pagina Shop RSL mostrava Monopattino S2S Edition a 179 CHF all’ultima verifica. Catalogo, prezzo, stock e varianti possono cambiare: verifica la pagina ufficiale.",
   "en": "The RSL Shop page listed the S2S Edition scooter at 179 CHF at the last check. Catalogue, price, stock and variants can change, so verify the official page."
  },
  "keywords": [
   "Trottinette S2S Edition",
   "S2S Edition scooter",
   "S2S Edition Scooter",
   "Monopattino S2S Edition",
   "179 CHF",
   "shop rsl",
   "prix"
  ],
  "source": {
   "label": "RSL – Shop",
   "url": "https://rsl-swiss.ch/shop-rsl"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rsl-shop-pandora",
  "category": "RSL",
  "questions": {
   "fr": "Quel est le prix de Ethic Pandora au Shop RSL ?",
   "de": "Was kostet Ethic Pandora im RSL Shop?",
   "it": "Quanto costa Ethic Pandora nello Shop RSL?",
   "en": "How much is the Ethic Pandora in the RSL Shop?"
  },
  "answer": {
   "fr": "La page Shop RSL affichait Ethic Pandora à 239 CHF lors de la dernière vérification. Le catalogue est évolutif : vérifie le prix, le stock et les variantes sur la page officielle.",
   "de": "Die RSL-Shopseite zeigte Ethic Pandora bei der letzten Prüfung für 239 CHF. Katalog, Preis, Bestand und Varianten können sich ändern; bitte die offizielle Seite prüfen.",
   "it": "La pagina Shop RSL mostrava Ethic Pandora a 239 CHF all’ultima verifica. Catalogo, prezzo, stock e varianti possono cambiare: verifica la pagina ufficiale.",
   "en": "The RSL Shop page listed the Ethic Pandora at 239 CHF at the last check. Catalogue, price, stock and variants can change, so verify the official page."
  },
  "keywords": [
   "Ethic Pandora",
   "Ethic Pandora",
   "Ethic Pandora",
   "Ethic Pandora",
   "239 CHF",
   "shop rsl",
   "prix"
  ],
  "source": {
   "label": "RSL – Shop",
   "url": "https://rsl-swiss.ch/shop-rsl"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "scooter-ihc-vs-scs",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "Quelle différence entre IHC et SCS ?",
   "de": "Was ist der Unterschied zwischen IHC und SCS?",
   "it": "Qual è la differenza tra IHC e SCS?",
   "en": "What is the difference between IHC and SCS?"
  },
  "answer": {
   "fr": "IHC est généralement plus léger et courant sur les setups Park ; il utilise un shim et une barre compatible avec fente. SCS est plus massif : le gros collier fait aussi la compression, la barre est normalement sans fente dans la zone serrée et le système est très apprécié en Street pour sa robustesse.",
   "de": "IHC ist meist leichter und im Park verbreitet; es nutzt einen Shim und eine kompatible geschlitzte Bar. SCS ist massiver: Die große Clamp übernimmt auch die Kompression, die Bar ist im Klemmbereich normalerweise schlitzlos und das System ist im Street wegen Robustheit beliebt.",
   "it": "IHC è in genere più leggero e comune nel Park; usa uno shim e una bar compatibile con fessura. SCS è più massiccio: il grande collarino fa anche la compressione, la bar normalmente non ha fessura nella zona serrata ed è molto usato nello Street per robustezza.",
   "en": "IHC is generally lighter and common in Park; it uses a shim and a compatible slit bar. SCS is bulkier: the large clamp also provides compression, the bar normally has no slit in the clamped area, and Street riders value it for robustness."
  },
  "keywords": [
   "ihc vs scs",
   "ihc ou scs",
   "difference ihc scs",
   "compression comparison",
   "vergleich ihc scs"
  ],
  "source": {
   "label": "JF Rideshop",
   "url": "https://www.jfrideshop.ch/"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "scooter-park-vs-street",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "Quelle différence entre Park et Street ?",
   "de": "Was ist der Unterschied zwischen Park und Street?",
   "it": "Qual è la differenza tra Park e Street?",
   "en": "What is the difference between Park and Street?"
  },
  "answer": {
   "fr": "Park met davantage l’accent sur airs, amplitude, flow et combos sur quarters/bowls/spines. Street se concentre sur rails, ledges, gaps, grinds, manuals, précision et créativité. Beaucoup de riders mélangent les deux styles : ce sont des tendances, pas des cases obligatoires.",
   "de": "Park betont eher Airs, Höhe, Flow und Combos auf Quarters/Bowls/Spines. Street konzentriert sich auf Rails, Ledges, Gaps, Grinds, Manuals, Präzision und Kreativität. Viele Rider mischen beide Stile.",
   "it": "Il Park mette più l’accento su air, ampiezza, flow e combo su quarter/bowl/spine. Lo Street si concentra su rail, ledge, gap, grind, manual, precisione e creatività. Molti rider mescolano i due stili.",
   "en": "Park focuses more on airs, amplitude, flow and combos on quarters/bowls/spines. Street focuses on rails, ledges, gaps, grinds, manuals, precision and creativity. Many riders mix both styles."
  },
  "keywords": [
   "park vs street",
   "park ou street",
   "difference park street",
   "street park"
  ],
  "source": {
   "label": "RSL – Disciplines",
   "url": "https://rsl-swiss.ch/disciplines"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-jayden-sharman",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Jayden Sharman ?",
   "de": "Wer ist Jayden Sharman?",
   "it": "Chi è Jayden Sharman?",
   "en": "Who is Jayden Sharman?"
  },
  "answer": {
   "fr": "Jayden Sharman est un rider britannique de trottinette freestyle, spécialisé surtout en Park. Jayden Sharman a terminé 1er du classement mondial World Skate 2023‑2024 en Park. Il a aussi remporté le Championnat du monde Park 2024 puis 2025.",
   "de": "Jayden Sharman ist ein britischer Freestyle-Scooter-Rider, vor allem im Park. Im World-Skate-Weltranking 2023‑2024 belegte Jayden Sharman Platz 1. im Park. Er gewann außerdem die Park-Weltmeisterschaften 2024 und 2025.",
   "it": "Jayden Sharman è un rider britannico di monopattino freestyle, soprattutto nel Park. Nel ranking mondiale World Skate 2023‑2024 ha chiuso 1° nel Park. Ha inoltre vinto i Mondiali Park 2024 e 2025.",
   "en": "Jayden Sharman is a British freestyle scooter rider, best known for Park. Jayden Sharman finished 1st in the 2023‑2024 World Skate Park ranking. He also won the Park World Championships in 2024 and 2025."
  },
  "keywords": [
   "Jayden Sharman",
   "jayden sharman",
   "bio jayden sharman",
   "rider jayden sharman",
   "trottinette",
   "scooter",
   "park",
   "britannique",
   "british"
  ],
  "source": {
   "label": "World Skate",
   "url": "https://www.worldskate.org/scootering/rankings.html?download=7251%3Aworld-ranking-men-park"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-jordan-clark",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Jordan Clark ?",
   "de": "Wer ist Jordan Clark?",
   "it": "Chi è Jordan Clark?",
   "en": "Who is Jordan Clark?"
  },
  "answer": {
   "fr": "Jordan Clark est un rider britannique de trottinette freestyle, spécialisé surtout en Park. Jordan Clark a terminé 2e du classement mondial World Skate 2023‑2024 en Park. Multiple champion du monde, il a pris l'argent mondial Park 2024 et 2025.",
   "de": "Jordan Clark ist ein britischer Freestyle-Scooter-Rider, vor allem im Park. Im World-Skate-Weltranking 2023‑2024 belegte Jordan Clark Platz 2. im Park. Mehrfacher Weltmeister; 2024 und 2025 gewann er Park-WM-Silber.",
   "it": "Jordan Clark è un rider britannico di monopattino freestyle, soprattutto nel Park. Nel ranking mondiale World Skate 2023‑2024 ha chiuso 2° nel Park. Pluricampione del mondo, ha conquistato l'argento Park ai Mondiali 2024 e 2025.",
   "en": "Jordan Clark is a British freestyle scooter rider, best known for Park. Jordan Clark finished 2nd in the 2023‑2024 World Skate Park ranking. A multiple world champion, he took Park world silver in 2024 and 2025."
  },
  "keywords": [
   "Jordan Clark",
   "jordan clark",
   "bio jordan clark",
   "rider jordan clark",
   "trottinette",
   "scooter",
   "park",
   "britannique",
   "british"
  ],
  "source": {
   "label": "World Skate",
   "url": "https://www.worldskate.org/scootering/rankings.html?download=7251%3Aworld-ranking-men-park"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-esteban-clot",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Esteban Clot ?",
   "de": "Wer ist Esteban Clot?",
   "it": "Chi è Esteban Clot?",
   "en": "Who is Esteban Clot?"
  },
  "answer": {
   "fr": "Esteban Clot est un rider français de trottinette freestyle, spécialisé surtout en Park. Esteban Clot a terminé 3e du classement mondial World Skate 2023‑2024 en Park.",
   "de": "Esteban Clot ist ein französischer Freestyle-Scooter-Rider, vor allem im Park. Im World-Skate-Weltranking 2023‑2024 belegte Esteban Clot Platz 3. im Park.",
   "it": "Esteban Clot è un rider francese di monopattino freestyle, soprattutto nel Park. Nel ranking mondiale World Skate 2023‑2024 ha chiuso 3° nel Park.",
   "en": "Esteban Clot is a French freestyle scooter rider, best known for Park. Esteban Clot finished 3rd in the 2023‑2024 World Skate Park ranking."
  },
  "keywords": [
   "Esteban Clot",
   "esteban clot",
   "bio esteban clot",
   "rider esteban clot",
   "trottinette",
   "scooter",
   "park",
   "français",
   "french"
  ],
  "source": {
   "label": "World Skate",
   "url": "https://www.worldskate.org/scootering/rankings.html?download=7251%3Aworld-ranking-men-park"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-jamie-hull",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Jamie Hull ?",
   "de": "Wer ist Jamie Hull?",
   "it": "Chi è Jamie Hull?",
   "en": "Who is Jamie Hull?"
  },
  "answer": {
   "fr": "Jamie Hull est un rider britannique de trottinette freestyle, spécialisé surtout en Park. Jamie Hull a terminé 4e du classement mondial World Skate 2023‑2024 en Park.",
   "de": "Jamie Hull ist ein britischer Freestyle-Scooter-Rider, vor allem im Park. Im World-Skate-Weltranking 2023‑2024 belegte Jamie Hull Platz 4. im Park.",
   "it": "Jamie Hull è un rider britannico di monopattino freestyle, soprattutto nel Park. Nel ranking mondiale World Skate 2023‑2024 ha chiuso 4° nel Park.",
   "en": "Jamie Hull is a British freestyle scooter rider, best known for Park. Jamie Hull finished 4th in the 2023‑2024 World Skate Park ranking."
  },
  "keywords": [
   "Jamie Hull",
   "jamie hull",
   "bio jamie hull",
   "rider jamie hull",
   "trottinette",
   "scooter",
   "park",
   "britannique",
   "british"
  ],
  "source": {
   "label": "World Skate",
   "url": "https://www.worldskate.org/scootering/rankings.html?download=7251%3Aworld-ranking-men-park"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-calum-connor",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Calum Connor ?",
   "de": "Wer ist Calum Connor?",
   "it": "Chi è Calum Connor?",
   "en": "Who is Calum Connor?"
  },
  "answer": {
   "fr": "Calum Connor est un rider britannique de trottinette freestyle, spécialisé surtout en Park. Calum Connor a terminé 5e du classement mondial World Skate 2023‑2024 en Park.",
   "de": "Calum Connor ist ein britischer Freestyle-Scooter-Rider, vor allem im Park. Im World-Skate-Weltranking 2023‑2024 belegte Calum Connor Platz 5. im Park.",
   "it": "Calum Connor è un rider britannico di monopattino freestyle, soprattutto nel Park. Nel ranking mondiale World Skate 2023‑2024 ha chiuso 5° nel Park.",
   "en": "Calum Connor is a British freestyle scooter rider, best known for Park. Calum Connor finished 5th in the 2023‑2024 World Skate Park ranking."
  },
  "keywords": [
   "Calum Connor",
   "calum connor",
   "bio calum connor",
   "rider calum connor",
   "trottinette",
   "scooter",
   "park",
   "britannique",
   "british"
  ],
  "source": {
   "label": "World Skate",
   "url": "https://www.worldskate.org/scootering/rankings.html?download=7251%3Aworld-ranking-men-park"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-hjalte-hansen",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Hjalte Hansen ?",
   "de": "Wer ist Hjalte Hansen?",
   "it": "Chi è Hjalte Hansen?",
   "en": "Who is Hjalte Hansen?"
  },
  "answer": {
   "fr": "Hjalte Hansen est un rider danois de trottinette freestyle, spécialisé surtout en Street. Hjalte Hansen a terminé 5e du classement mondial World Skate 2023‑2024 en Street.",
   "de": "Hjalte Hansen ist ein dänischer Freestyle-Scooter-Rider, vor allem im Street. Im World-Skate-Weltranking 2023‑2024 belegte Hjalte Hansen Platz 5. im Street.",
   "it": "Hjalte Hansen è un rider danese di monopattino freestyle, soprattutto nel Street. Nel ranking mondiale World Skate 2023‑2024 ha chiuso 5° nel Street.",
   "en": "Hjalte Hansen is a Danish freestyle scooter rider, best known for Street. Hjalte Hansen finished 5th in the 2023‑2024 World Skate Street ranking."
  },
  "keywords": [
   "Hjalte Hansen",
   "hjalte hansen",
   "bio hjalte hansen",
   "rider hjalte hansen",
   "trottinette",
   "scooter",
   "street",
   "danois",
   "danish"
  ],
  "source": {
   "label": "World Skate",
   "url": "https://www.worldskate.org/scootering/rankings.html?download=7254%3Aworld-ranking-men-street"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-harvey-perkins",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Harvey Perkins ?",
   "de": "Wer ist Harvey Perkins?",
   "it": "Chi è Harvey Perkins?",
   "en": "Who is Harvey Perkins?"
  },
  "answer": {
   "fr": "Harvey Perkins est un rider britannique de trottinette freestyle, spécialisé surtout en Park. Harvey Perkins a terminé 7e du classement mondial World Skate 2023‑2024 en Park.",
   "de": "Harvey Perkins ist ein britischer Freestyle-Scooter-Rider, vor allem im Park. Im World-Skate-Weltranking 2023‑2024 belegte Harvey Perkins Platz 7. im Park.",
   "it": "Harvey Perkins è un rider britannico di monopattino freestyle, soprattutto nel Park. Nel ranking mondiale World Skate 2023‑2024 ha chiuso 7° nel Park.",
   "en": "Harvey Perkins is a British freestyle scooter rider, best known for Park. Harvey Perkins finished 7th in the 2023‑2024 World Skate Park ranking."
  },
  "keywords": [
   "Harvey Perkins",
   "harvey perkins",
   "bio harvey perkins",
   "rider harvey perkins",
   "trottinette",
   "scooter",
   "park",
   "britannique",
   "british"
  ],
  "source": {
   "label": "World Skate",
   "url": "https://www.worldskate.org/scootering/rankings.html?download=7251%3Aworld-ranking-men-park"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-timon-pharabod",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Timon Pharabod ?",
   "de": "Wer ist Timon Pharabod?",
   "it": "Chi è Timon Pharabod?",
   "en": "Who is Timon Pharabod?"
  },
  "answer": {
   "fr": "Timon Pharabod est un rider français de trottinette freestyle, spécialisé surtout en Park. Timon Pharabod a terminé 8e du classement mondial World Skate 2023‑2024 en Park. Il a pris le bronze au Mondial Park 2025 à Sakai.",
   "de": "Timon Pharabod ist ein französischer Freestyle-Scooter-Rider, vor allem im Park. Im World-Skate-Weltranking 2023‑2024 belegte Timon Pharabod Platz 8. im Park. Er gewann Bronze bei der Park-WM 2025 in Sakai.",
   "it": "Timon Pharabod è un rider francese di monopattino freestyle, soprattutto nel Park. Nel ranking mondiale World Skate 2023‑2024 ha chiuso 8° nel Park. Ha conquistato il bronzo Park ai Mondiali 2025 di Sakai.",
   "en": "Timon Pharabod is a French freestyle scooter rider, best known for Park. Timon Pharabod finished 8th in the 2023‑2024 World Skate Park ranking. He won bronze at the 2025 Park World Championship in Sakai."
  },
  "keywords": [
   "Timon Pharabod",
   "timon pharabod",
   "bio timon pharabod",
   "rider timon pharabod",
   "trottinette",
   "scooter",
   "park",
   "français",
   "french"
  ],
  "source": {
   "label": "World Skate",
   "url": "https://www.worldskate.org/scootering/rankings.html?download=7251%3Aworld-ranking-men-park"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-matej-pekarek",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Matěj Pekárek ?",
   "de": "Wer ist Matěj Pekárek?",
   "it": "Chi è Matěj Pekárek?",
   "en": "Who is Matěj Pekárek?"
  },
  "answer": {
   "fr": "Matěj Pekárek est un rider tchèque de trottinette freestyle, spécialisé surtout en Park. Matěj Pekárek a terminé 9e du classement mondial World Skate 2023‑2024 en Park. Il était aussi 10e du classement mondial Street 2023‑2024 et a terminé 2e de la World Cup Park de Rome 2026.",
   "de": "Matěj Pekárek ist ein tschechischer Freestyle-Scooter-Rider, vor allem im Park. Im World-Skate-Weltranking 2023‑2024 belegte Matěj Pekárek Platz 9. im Park. Außerdem war er 10. im Street-Weltranking 2023‑2024 und wurde 2026 Zweiter beim Park World Cup in Rom.",
   "it": "Matěj Pekárek è un rider ceco di monopattino freestyle, soprattutto nel Park. Nel ranking mondiale World Skate 2023‑2024 ha chiuso 9° nel Park. Era anche 10° nel ranking Street 2023‑2024 e ha chiuso 2° nella World Cup Park di Roma 2026.",
   "en": "Matěj Pekárek is a Czech freestyle scooter rider, best known for Park. Matěj Pekárek finished 9th in the 2023‑2024 World Skate Park ranking. He was also 10th in the 2023‑2024 Street ranking and finished 2nd at the Rome 2026 Park World Cup."
  },
  "keywords": [
   "Matěj Pekárek",
   "matěj pekárek",
   "bio matěj pekárek",
   "rider matěj pekárek",
   "trottinette",
   "scooter",
   "park",
   "tchèque",
   "czech",
   "street",
   "world cup rome 2026"
  ],
  "source": {
   "label": "World Skate",
   "url": "https://www.worldskate.org/scootering/rankings.html?download=7251%3Aworld-ranking-men-park"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-alex-perez",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Alex Perez ?",
   "de": "Wer ist Alex Perez?",
   "it": "Chi è Alex Perez?",
   "en": "Who is Alex Perez?"
  },
  "answer": {
   "fr": "Alex Perez est un rider espagnol de trottinette freestyle, spécialisé surtout en Park. Alex Perez a terminé 10e du classement mondial World Skate 2023‑2024 en Park.",
   "de": "Alex Perez ist ein spanischer Freestyle-Scooter-Rider, vor allem im Park. Im World-Skate-Weltranking 2023‑2024 belegte Alex Perez Platz 10. im Park.",
   "it": "Alex Perez è un rider spagnolo di monopattino freestyle, soprattutto nel Park. Nel ranking mondiale World Skate 2023‑2024 ha chiuso 10° nel Park.",
   "en": "Alex Perez is a Spanish freestyle scooter rider, best known for Park. Alex Perez finished 10th in the 2023‑2024 World Skate Park ranking."
  },
  "keywords": [
   "Alex Perez",
   "alex perez",
   "bio alex perez",
   "rider alex perez",
   "trottinette",
   "scooter",
   "park",
   "espagnol",
   "spanish"
  ],
  "source": {
   "label": "World Skate",
   "url": "https://www.worldskate.org/scootering/rankings.html?download=7251%3Aworld-ranking-men-park"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-nils-qvarford",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Nils Qvarford ?",
   "de": "Wer ist Nils Qvarford?",
   "it": "Chi è Nils Qvarford?",
   "en": "Who is Nils Qvarford?"
  },
  "answer": {
   "fr": "Nils Qvarford est un rider américain de trottinette freestyle, spécialisé surtout en Park. Nils Qvarford a terminé 11e du classement mondial World Skate 2023‑2024 en Park.",
   "de": "Nils Qvarford ist ein US-amerikanischer Freestyle-Scooter-Rider, vor allem im Park. Im World-Skate-Weltranking 2023‑2024 belegte Nils Qvarford Platz 11. im Park.",
   "it": "Nils Qvarford è un rider statunitense di monopattino freestyle, soprattutto nel Park. Nel ranking mondiale World Skate 2023‑2024 ha chiuso 11° nel Park.",
   "en": "Nils Qvarford is a American freestyle scooter rider, best known for Park. Nils Qvarford finished 11th in the 2023‑2024 World Skate Park ranking."
  },
  "keywords": [
   "Nils Qvarford",
   "nils qvarford",
   "bio nils qvarford",
   "rider nils qvarford",
   "trottinette",
   "scooter",
   "park",
   "américain",
   "american"
  ],
  "source": {
   "label": "World Skate",
   "url": "https://www.worldskate.org/scootering/rankings.html?download=7251%3Aworld-ranking-men-park"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-revin-cachat",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Revin Cachat ?",
   "de": "Wer ist Revin Cachat?",
   "it": "Chi è Revin Cachat?",
   "en": "Who is Revin Cachat?"
  },
  "answer": {
   "fr": "Revin Cachat est un rider américain de trottinette freestyle, spécialisé surtout en Park. Revin Cachat a terminé 12e du classement mondial World Skate 2023‑2024 en Park.",
   "de": "Revin Cachat ist ein US-amerikanischer Freestyle-Scooter-Rider, vor allem im Park. Im World-Skate-Weltranking 2023‑2024 belegte Revin Cachat Platz 12. im Park.",
   "it": "Revin Cachat è un rider statunitense di monopattino freestyle, soprattutto nel Park. Nel ranking mondiale World Skate 2023‑2024 ha chiuso 12° nel Park.",
   "en": "Revin Cachat is a American freestyle scooter rider, best known for Park. Revin Cachat finished 12th in the 2023‑2024 World Skate Park ranking."
  },
  "keywords": [
   "Revin Cachat",
   "revin cachat",
   "bio revin cachat",
   "rider revin cachat",
   "trottinette",
   "scooter",
   "park",
   "américain",
   "american"
  ],
  "source": {
   "label": "World Skate",
   "url": "https://www.worldskate.org/scootering/rankings.html?download=7251%3Aworld-ranking-men-park"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-fantin-pharabod",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Fantin Pharabod ?",
   "de": "Wer ist Fantin Pharabod?",
   "it": "Chi è Fantin Pharabod?",
   "en": "Who is Fantin Pharabod?"
  },
  "answer": {
   "fr": "Fantin Pharabod est un rider français de trottinette freestyle, spécialisé surtout en Park. Fantin Pharabod a terminé 13e du classement mondial World Skate 2023‑2024 en Park.",
   "de": "Fantin Pharabod ist ein französischer Freestyle-Scooter-Rider, vor allem im Park. Im World-Skate-Weltranking 2023‑2024 belegte Fantin Pharabod Platz 13. im Park.",
   "it": "Fantin Pharabod è un rider francese di monopattino freestyle, soprattutto nel Park. Nel ranking mondiale World Skate 2023‑2024 ha chiuso 13° nel Park.",
   "en": "Fantin Pharabod is a French freestyle scooter rider, best known for Park. Fantin Pharabod finished 13th in the 2023‑2024 World Skate Park ranking."
  },
  "keywords": [
   "Fantin Pharabod",
   "fantin pharabod",
   "bio fantin pharabod",
   "rider fantin pharabod",
   "trottinette",
   "scooter",
   "park",
   "français",
   "french"
  ],
  "source": {
   "label": "World Skate",
   "url": "https://www.worldskate.org/scootering/rankings.html?download=7251%3Aworld-ranking-men-park"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-charley-dyson",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Charley Dyson ?",
   "de": "Wer ist Charley Dyson?",
   "it": "Chi è Charley Dyson?",
   "en": "Who is Charley Dyson?"
  },
  "answer": {
   "fr": "Charley Dyson est un rider britannique de trottinette freestyle, spécialisé surtout en Park. Charley Dyson a terminé 14e du classement mondial World Skate 2023‑2024 en Park. Il a remporté la Scootering World Cup Park de Rome en 2026.",
   "de": "Charley Dyson ist ein britischer Freestyle-Scooter-Rider, vor allem im Park. Im World-Skate-Weltranking 2023‑2024 belegte Charley Dyson Platz 14. im Park. Er gewann 2026 den Scootering Park World Cup in Rom.",
   "it": "Charley Dyson è un rider britannico di monopattino freestyle, soprattutto nel Park. Nel ranking mondiale World Skate 2023‑2024 ha chiuso 14° nel Park. Ha vinto la World Cup Park di Roma 2026.",
   "en": "Charley Dyson is a British freestyle scooter rider, best known for Park. Charley Dyson finished 14th in the 2023‑2024 World Skate Park ranking. He won the 2026 Scootering Park World Cup in Rome."
  },
  "keywords": [
   "Charley Dyson",
   "charley dyson",
   "bio charley dyson",
   "rider charley dyson",
   "trottinette",
   "scooter",
   "park",
   "britannique",
   "british"
  ],
  "source": {
   "label": "World Skate",
   "url": "https://www.worldskate.org/scootering/rankings.html?download=7251%3Aworld-ranking-men-park"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-nicholas-nelson",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Nicholas Nelson ?",
   "de": "Wer ist Nicholas Nelson?",
   "it": "Chi è Nicholas Nelson?",
   "en": "Who is Nicholas Nelson?"
  },
  "answer": {
   "fr": "Nicholas Nelson est un rider canadien de trottinette freestyle, spécialisé surtout en Park. Nicholas Nelson a terminé 15e du classement mondial World Skate 2023‑2024 en Park.",
   "de": "Nicholas Nelson ist ein kanadischer Freestyle-Scooter-Rider, vor allem im Park. Im World-Skate-Weltranking 2023‑2024 belegte Nicholas Nelson Platz 15. im Park.",
   "it": "Nicholas Nelson è un rider canadese di monopattino freestyle, soprattutto nel Park. Nel ranking mondiale World Skate 2023‑2024 ha chiuso 15° nel Park.",
   "en": "Nicholas Nelson is a Canadian freestyle scooter rider, best known for Park. Nicholas Nelson finished 15th in the 2023‑2024 World Skate Park ranking."
  },
  "keywords": [
   "Nicholas Nelson",
   "nicholas nelson",
   "bio nicholas nelson",
   "rider nicholas nelson",
   "trottinette",
   "scooter",
   "park",
   "canadien",
   "canadian"
  ],
  "source": {
   "label": "World Skate",
   "url": "https://www.worldskate.org/scootering/rankings.html?download=7251%3Aworld-ranking-men-park"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-alex-gonzalez",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Alex Gonzalez ?",
   "de": "Wer ist Alex Gonzalez?",
   "it": "Chi è Alex Gonzalez?",
   "en": "Who is Alex Gonzalez?"
  },
  "answer": {
   "fr": "Alex Gonzalez est un rider espagnol de trottinette freestyle, spécialisé surtout en Park. Alex Gonzalez a terminé 16e du classement mondial World Skate 2023‑2024 en Park.",
   "de": "Alex Gonzalez ist ein spanischer Freestyle-Scooter-Rider, vor allem im Park. Im World-Skate-Weltranking 2023‑2024 belegte Alex Gonzalez Platz 16. im Park.",
   "it": "Alex Gonzalez è un rider spagnolo di monopattino freestyle, soprattutto nel Park. Nel ranking mondiale World Skate 2023‑2024 ha chiuso 16° nel Park.",
   "en": "Alex Gonzalez is a Spanish freestyle scooter rider, best known for Park. Alex Gonzalez finished 16th in the 2023‑2024 World Skate Park ranking."
  },
  "keywords": [
   "Alex Gonzalez",
   "alex gonzalez",
   "bio alex gonzalez",
   "rider alex gonzalez",
   "trottinette",
   "scooter",
   "park",
   "espagnol",
   "spanish"
  ],
  "source": {
   "label": "World Skate",
   "url": "https://www.worldskate.org/scootering/rankings.html?download=7251%3Aworld-ranking-men-park"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-camiel-wajer",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Camiel Wajer ?",
   "de": "Wer ist Camiel Wajer?",
   "it": "Chi è Camiel Wajer?",
   "en": "Who is Camiel Wajer?"
  },
  "answer": {
   "fr": "Camiel Wajer est un rider néerlandais de trottinette freestyle, spécialisé surtout en Park. Camiel Wajer a terminé 17e du classement mondial World Skate 2023‑2024 en Park.",
   "de": "Camiel Wajer ist ein niederländischer Freestyle-Scooter-Rider, vor allem im Park. Im World-Skate-Weltranking 2023‑2024 belegte Camiel Wajer Platz 17. im Park.",
   "it": "Camiel Wajer è un rider olandese di monopattino freestyle, soprattutto nel Park. Nel ranking mondiale World Skate 2023‑2024 ha chiuso 17° nel Park.",
   "en": "Camiel Wajer is a Dutch freestyle scooter rider, best known for Park. Camiel Wajer finished 17th in the 2023‑2024 World Skate Park ranking."
  },
  "keywords": [
   "Camiel Wajer",
   "camiel wajer",
   "bio camiel wajer",
   "rider camiel wajer",
   "trottinette",
   "scooter",
   "park",
   "néerlandais",
   "dutch"
  ],
  "source": {
   "label": "World Skate",
   "url": "https://www.worldskate.org/scootering/rankings.html?download=7251%3Aworld-ranking-men-park"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-lucas-di-meglio",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Lucas Di Meglio ?",
   "de": "Wer ist Lucas Di Meglio?",
   "it": "Chi è Lucas Di Meglio?",
   "en": "Who is Lucas Di Meglio?"
  },
  "answer": {
   "fr": "Lucas Di Meglio est un rider français de trottinette freestyle, spécialisé surtout en Street. Lucas Di Meglio a terminé 1er du classement mondial World Skate 2023‑2024 en Street. Champion du monde Street 2023 et 2024, il a pris l'argent mondial en 2025.",
   "de": "Lucas Di Meglio ist ein französischer Freestyle-Scooter-Rider, vor allem im Street. Im World-Skate-Weltranking 2023‑2024 belegte Lucas Di Meglio Platz 1. im Street. Street-Weltmeister 2023 und 2024; 2025 gewann er WM-Silber.",
   "it": "Lucas Di Meglio è un rider francese di monopattino freestyle, soprattutto nel Street. Nel ranking mondiale World Skate 2023‑2024 ha chiuso 1° nel Street. Campione del mondo Street 2023 e 2024, ha conquistato l'argento mondiale nel 2025.",
   "en": "Lucas Di Meglio is a French freestyle scooter rider, best known for Street. Lucas Di Meglio finished 1st in the 2023‑2024 World Skate Street ranking. Street world champion in 2023 and 2024, he took world silver in 2025."
  },
  "keywords": [
   "Lucas Di Meglio",
   "lucas di meglio",
   "bio lucas di meglio",
   "rider lucas di meglio",
   "trottinette",
   "scooter",
   "street",
   "français",
   "french"
  ],
  "source": {
   "label": "World Skate",
   "url": "https://www.worldskate.org/scootering/rankings.html?download=7254%3Aworld-ranking-men-street"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-alexandre-bailly",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Alexandre Bailly ?",
   "de": "Wer ist Alexandre Bailly?",
   "it": "Chi è Alexandre Bailly?",
   "en": "Who is Alexandre Bailly?"
  },
  "answer": {
   "fr": "Alexandre Bailly est un rider français de trottinette freestyle, spécialisé surtout en Street. Alexandre Bailly a terminé 2e du classement mondial World Skate 2023‑2024 en Street.",
   "de": "Alexandre Bailly ist ein französischer Freestyle-Scooter-Rider, vor allem im Street. Im World-Skate-Weltranking 2023‑2024 belegte Alexandre Bailly Platz 2. im Street.",
   "it": "Alexandre Bailly è un rider francese di monopattino freestyle, soprattutto nel Street. Nel ranking mondiale World Skate 2023‑2024 ha chiuso 2° nel Street.",
   "en": "Alexandre Bailly is a French freestyle scooter rider, best known for Street. Alexandre Bailly finished 2nd in the 2023‑2024 World Skate Street ranking."
  },
  "keywords": [
   "Alexandre Bailly",
   "alexandre bailly",
   "bio alexandre bailly",
   "rider alexandre bailly",
   "trottinette",
   "scooter",
   "street",
   "français",
   "french"
  ],
  "source": {
   "label": "World Skate",
   "url": "https://www.worldskate.org/scootering/rankings.html?download=7254%3Aworld-ranking-men-street"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-matis-neyroud",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Matis Neyroud ?",
   "de": "Wer ist Matis Neyroud?",
   "it": "Chi è Matis Neyroud?",
   "en": "Who is Matis Neyroud?"
  },
  "answer": {
   "fr": "Matis Neyroud est un rider suisse Street de Chardonne. Il a commencé en 2013, est surnommé TISMA et cite le fakie frontflip comme trick préféré. Il a gagné FISE Montpellier Street 2024 et a fini 3e du ranking mondial Street 2023‑2024.",
   "de": "Matis Neyroud ist ein Schweizer Street-Rider aus Chardonne. Er begann 2013, trägt den Spitznamen TISMA und nennt Fakie Frontflip als Lieblingstrick. Er gewann FISE Montpellier Street 2024 und war 3. im Street-Weltranking 2023‑2024.",
   "it": "Matis Neyroud è un rider Street svizzero di Chardonne. Ha iniziato nel 2013, è soprannominato TISMA e indica il fakie frontflip come trick preferito. Ha vinto FISE Montpellier Street 2024 ed è arrivato 3° nel ranking mondiale Street 2023‑2024.",
   "en": "Matis Neyroud is a Swiss Street rider from Chardonne. He started in 2013, is nicknamed TISMA and lists fakie frontflip as his favourite trick. He won FISE Montpellier Street 2024 and finished 3rd in the 2023‑2024 Street world ranking."
  },
  "keywords": [
   "Matis Neyroud",
   "matis neyroud",
   "bio matis neyroud",
   "rider matis neyroud",
   "trottinette",
   "scooter",
   "street",
   "suisse",
   "swiss",
   "tisma",
   "schweiz",
   "svizzera",
   "team suisse"
  ],
  "source": {
   "label": "Swiss Skate / rider profile",
   "url": "https://nkdscooters.com/team/matis-neyroud/"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-jonathan-perroni",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Jonathan Perroni ?",
   "de": "Wer ist Jonathan Perroni?",
   "it": "Chi è Jonathan Perroni?",
   "en": "Who is Jonathan Perroni?"
  },
  "answer": {
   "fr": "Jonathan Perroni est un rider français de trottinette freestyle, spécialisé surtout en Street. Jonathan Perroni a terminé 4e du classement mondial World Skate 2023‑2024 en Street.",
   "de": "Jonathan Perroni ist ein französischer Freestyle-Scooter-Rider, vor allem im Street. Im World-Skate-Weltranking 2023‑2024 belegte Jonathan Perroni Platz 4. im Street.",
   "it": "Jonathan Perroni è un rider francese di monopattino freestyle, soprattutto nel Street. Nel ranking mondiale World Skate 2023‑2024 ha chiuso 4° nel Street.",
   "en": "Jonathan Perroni is a French freestyle scooter rider, best known for Street. Jonathan Perroni finished 4th in the 2023‑2024 World Skate Street ranking."
  },
  "keywords": [
   "Jonathan Perroni",
   "jonathan perroni",
   "bio jonathan perroni",
   "rider jonathan perroni",
   "trottinette",
   "scooter",
   "street",
   "français",
   "french"
  ],
  "source": {
   "label": "World Skate",
   "url": "https://www.worldskate.org/scootering/rankings.html?download=7254%3Aworld-ranking-men-street"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-jack-walsh",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Jack Walsh ?",
   "de": "Wer ist Jack Walsh?",
   "it": "Chi è Jack Walsh?",
   "en": "Who is Jack Walsh?"
  },
  "answer": {
   "fr": "Jack Walsh est un rider américain de trottinette freestyle, spécialisé surtout en Street. Jack Walsh a terminé 6e du classement mondial World Skate 2023‑2024 en Street. Il a pris le bronze au Championnat du monde Street 2025 à Sakai.",
   "de": "Jack Walsh ist ein US-amerikanischer Freestyle-Scooter-Rider, vor allem im Street. Im World-Skate-Weltranking 2023‑2024 belegte Jack Walsh Platz 6. im Street. Er gewann Bronze bei der Street-WM 2025 in Sakai.",
   "it": "Jack Walsh è un rider statunitense di monopattino freestyle, soprattutto nel Street. Nel ranking mondiale World Skate 2023‑2024 ha chiuso 6° nel Street. Ha conquistato il bronzo Street ai Mondiali 2025 di Sakai.",
   "en": "Jack Walsh is a American freestyle scooter rider, best known for Street. Jack Walsh finished 6th in the 2023‑2024 World Skate Street ranking. He took bronze at the 2025 Street World Championship in Sakai."
  },
  "keywords": [
   "Jack Walsh",
   "jack walsh",
   "bio jack walsh",
   "rider jack walsh",
   "trottinette",
   "scooter",
   "street",
   "américain",
   "american"
  ],
  "source": {
   "label": "World Skate",
   "url": "https://www.worldskate.org/scootering/rankings.html?download=7254%3Aworld-ranking-men-street"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-guifre-obradors",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Guifre Obradors ?",
   "de": "Wer ist Guifre Obradors?",
   "it": "Chi è Guifre Obradors?",
   "en": "Who is Guifre Obradors?"
  },
  "answer": {
   "fr": "Guifre Obradors est un rider espagnol de trottinette freestyle, spécialisé surtout en Street. Guifre Obradors a terminé 7e du classement mondial World Skate 2023‑2024 en Street.",
   "de": "Guifre Obradors ist ein spanischer Freestyle-Scooter-Rider, vor allem im Street. Im World-Skate-Weltranking 2023‑2024 belegte Guifre Obradors Platz 7. im Street.",
   "it": "Guifre Obradors è un rider spagnolo di monopattino freestyle, soprattutto nel Street. Nel ranking mondiale World Skate 2023‑2024 ha chiuso 7° nel Street.",
   "en": "Guifre Obradors is a Spanish freestyle scooter rider, best known for Street. Guifre Obradors finished 7th in the 2023‑2024 World Skate Street ranking."
  },
  "keywords": [
   "Guifre Obradors",
   "guifre obradors",
   "bio guifre obradors",
   "rider guifre obradors",
   "trottinette",
   "scooter",
   "street",
   "espagnol",
   "spanish"
  ],
  "source": {
   "label": "World Skate",
   "url": "https://www.worldskate.org/scootering/rankings.html?download=7254%3Aworld-ranking-men-street"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-cory-griffiths",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Cory Griffiths ?",
   "de": "Wer ist Cory Griffiths?",
   "it": "Chi è Cory Griffiths?",
   "en": "Who is Cory Griffiths?"
  },
  "answer": {
   "fr": "Cory Griffiths est un rider néo-zélandais de trottinette freestyle, spécialisé surtout en Street. Cory Griffiths a terminé 8e du classement mondial World Skate 2023‑2024 en Street.",
   "de": "Cory Griffiths ist ein neuseeländischer Freestyle-Scooter-Rider, vor allem im Street. Im World-Skate-Weltranking 2023‑2024 belegte Cory Griffiths Platz 8. im Street.",
   "it": "Cory Griffiths è un rider neozelandese di monopattino freestyle, soprattutto nel Street. Nel ranking mondiale World Skate 2023‑2024 ha chiuso 8° nel Street.",
   "en": "Cory Griffiths is a New Zealand freestyle scooter rider, best known for Street. Cory Griffiths finished 8th in the 2023‑2024 World Skate Street ranking."
  },
  "keywords": [
   "Cory Griffiths",
   "cory griffiths",
   "bio cory griffiths",
   "rider cory griffiths",
   "trottinette",
   "scooter",
   "street",
   "néo-zélandais",
   "new zealand"
  ],
  "source": {
   "label": "World Skate",
   "url": "https://www.worldskate.org/scootering/rankings.html?download=7254%3Aworld-ranking-men-street"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-hugo-strauss",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Hugo Strauss ?",
   "de": "Wer ist Hugo Strauss?",
   "it": "Chi è Hugo Strauss?",
   "en": "Who is Hugo Strauss?"
  },
  "answer": {
   "fr": "Hugo Strauss est un rider français de trottinette freestyle, spécialisé surtout en Street. Hugo Strauss a terminé 9e du classement mondial World Skate 2023‑2024 en Street.",
   "de": "Hugo Strauss ist ein französischer Freestyle-Scooter-Rider, vor allem im Street. Im World-Skate-Weltranking 2023‑2024 belegte Hugo Strauss Platz 9. im Street.",
   "it": "Hugo Strauss è un rider francese di monopattino freestyle, soprattutto nel Street. Nel ranking mondiale World Skate 2023‑2024 ha chiuso 9° nel Street.",
   "en": "Hugo Strauss is a French freestyle scooter rider, best known for Street. Hugo Strauss finished 9th in the 2023‑2024 World Skate Street ranking."
  },
  "keywords": [
   "Hugo Strauss",
   "hugo strauss",
   "bio hugo strauss",
   "rider hugo strauss",
   "trottinette",
   "scooter",
   "street",
   "français",
   "french"
  ],
  "source": {
   "label": "World Skate",
   "url": "https://www.worldskate.org/scootering/rankings.html?download=7254%3Aworld-ranking-men-street"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-baptiste-depenoux",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Baptiste D’epenoux ?",
   "de": "Wer ist Baptiste D’epenoux?",
   "it": "Chi è Baptiste D’epenoux?",
   "en": "Who is Baptiste D’epenoux?"
  },
  "answer": {
   "fr": "Baptiste D’epenoux est un rider français de trottinette freestyle, spécialisé surtout en Street. Baptiste D’epenoux a terminé 11e du classement mondial World Skate 2023‑2024 en Street.",
   "de": "Baptiste D’epenoux ist ein französischer Freestyle-Scooter-Rider, vor allem im Street. Im World-Skate-Weltranking 2023‑2024 belegte Baptiste D’epenoux Platz 11. im Street.",
   "it": "Baptiste D’epenoux è un rider francese di monopattino freestyle, soprattutto nel Street. Nel ranking mondiale World Skate 2023‑2024 ha chiuso 11° nel Street.",
   "en": "Baptiste D’epenoux is a French freestyle scooter rider, best known for Street. Baptiste D’epenoux finished 11th in the 2023‑2024 World Skate Street ranking."
  },
  "keywords": [
   "Baptiste D’epenoux",
   "baptiste d’epenoux",
   "bio baptiste d’epenoux",
   "rider baptiste d’epenoux",
   "trottinette",
   "scooter",
   "street",
   "français",
   "french"
  ],
  "source": {
   "label": "World Skate",
   "url": "https://www.worldskate.org/scootering/rankings.html?download=7254%3Aworld-ranking-men-street"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-eden-gagliano",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Eden Gagliano ?",
   "de": "Wer ist Eden Gagliano?",
   "it": "Chi è Eden Gagliano?",
   "en": "Who is Eden Gagliano?"
  },
  "answer": {
   "fr": "Eden Gagliano est un rider britannique de trottinette freestyle, spécialisé surtout en Street. Eden Gagliano a terminé 12e du classement mondial World Skate 2023‑2024 en Street.",
   "de": "Eden Gagliano ist ein britischer Freestyle-Scooter-Rider, vor allem im Street. Im World-Skate-Weltranking 2023‑2024 belegte Eden Gagliano Platz 12. im Street.",
   "it": "Eden Gagliano è un rider britannico di monopattino freestyle, soprattutto nel Street. Nel ranking mondiale World Skate 2023‑2024 ha chiuso 12° nel Street.",
   "en": "Eden Gagliano is a British freestyle scooter rider, best known for Street. Eden Gagliano finished 12th in the 2023‑2024 World Skate Street ranking."
  },
  "keywords": [
   "Eden Gagliano",
   "eden gagliano",
   "bio eden gagliano",
   "rider eden gagliano",
   "trottinette",
   "scooter",
   "street",
   "britannique",
   "british"
  ],
  "source": {
   "label": "World Skate",
   "url": "https://www.worldskate.org/scootering/rankings.html?download=7254%3Aworld-ranking-men-street"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-david-senkyr",
  "category": "Riders",
  "questions": {
   "fr": "Qui est David Senkyr ?",
   "de": "Wer ist David Senkyr?",
   "it": "Chi è David Senkyr?",
   "en": "Who is David Senkyr?"
  },
  "answer": {
   "fr": "David Senkyr est un rider tchèque de trottinette freestyle, spécialisé surtout en Street. David Senkyr a terminé 13e du classement mondial World Skate 2023‑2024 en Street.",
   "de": "David Senkyr ist ein tschechischer Freestyle-Scooter-Rider, vor allem im Street. Im World-Skate-Weltranking 2023‑2024 belegte David Senkyr Platz 13. im Street.",
   "it": "David Senkyr è un rider ceco di monopattino freestyle, soprattutto nel Street. Nel ranking mondiale World Skate 2023‑2024 ha chiuso 13° nel Street.",
   "en": "David Senkyr is a Czech freestyle scooter rider, best known for Street. David Senkyr finished 13th in the 2023‑2024 World Skate Street ranking."
  },
  "keywords": [
   "David Senkyr",
   "david senkyr",
   "bio david senkyr",
   "rider david senkyr",
   "trottinette",
   "scooter",
   "street",
   "tchèque",
   "czech"
  ],
  "source": {
   "label": "World Skate",
   "url": "https://www.worldskate.org/scootering/rankings.html?download=7254%3Aworld-ranking-men-street"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-diarra-sanoussi",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Diarra Sanoussi ?",
   "de": "Wer ist Diarra Sanoussi?",
   "it": "Chi è Diarra Sanoussi?",
   "en": "Who is Diarra Sanoussi?"
  },
  "answer": {
   "fr": "Diarra Sanoussi est un rider français de trottinette freestyle, spécialisé surtout en Street. Diarra Sanoussi a terminé 14e du classement mondial World Skate 2023‑2024 en Street.",
   "de": "Diarra Sanoussi ist ein französischer Freestyle-Scooter-Rider, vor allem im Street. Im World-Skate-Weltranking 2023‑2024 belegte Diarra Sanoussi Platz 14. im Street.",
   "it": "Diarra Sanoussi è un rider francese di monopattino freestyle, soprattutto nel Street. Nel ranking mondiale World Skate 2023‑2024 ha chiuso 14° nel Street.",
   "en": "Diarra Sanoussi is a French freestyle scooter rider, best known for Street. Diarra Sanoussi finished 14th in the 2023‑2024 World Skate Street ranking."
  },
  "keywords": [
   "Diarra Sanoussi",
   "diarra sanoussi",
   "bio diarra sanoussi",
   "rider diarra sanoussi",
   "trottinette",
   "scooter",
   "street",
   "français",
   "french"
  ],
  "source": {
   "label": "World Skate",
   "url": "https://www.worldskate.org/scootering/rankings.html?download=7254%3Aworld-ranking-men-street"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-niko-kylmala",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Niko Kylmälä ?",
   "de": "Wer ist Niko Kylmälä?",
   "it": "Chi è Niko Kylmälä?",
   "en": "Who is Niko Kylmälä?"
  },
  "answer": {
   "fr": "Niko Kylmälä est un rider finlandais de trottinette freestyle, spécialisé surtout en Street. Niko Kylmälä a terminé 15e du classement mondial World Skate 2023‑2024 en Street.",
   "de": "Niko Kylmälä ist ein finnischer Freestyle-Scooter-Rider, vor allem im Street. Im World-Skate-Weltranking 2023‑2024 belegte Niko Kylmälä Platz 15. im Street.",
   "it": "Niko Kylmälä è un rider finlandese di monopattino freestyle, soprattutto nel Street. Nel ranking mondiale World Skate 2023‑2024 ha chiuso 15° nel Street.",
   "en": "Niko Kylmälä is a Finnish freestyle scooter rider, best known for Street. Niko Kylmälä finished 15th in the 2023‑2024 World Skate Street ranking."
  },
  "keywords": [
   "Niko Kylmälä",
   "niko kylmälä",
   "bio niko kylmälä",
   "rider niko kylmälä",
   "trottinette",
   "scooter",
   "street",
   "finlandais",
   "finnish"
  ],
  "source": {
   "label": "World Skate",
   "url": "https://www.worldskate.org/scootering/rankings.html?download=7254%3Aworld-ranking-men-street"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-joel-ingold",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Joel Ingold ?",
   "de": "Wer ist Joel Ingold?",
   "it": "Chi è Joel Ingold?",
   "en": "Who is Joel Ingold?"
  },
  "answer": {
   "fr": "Joel Ingold est un rider australien de trottinette freestyle, spécialisé surtout en Street. Joel Ingold a terminé 16e du classement mondial World Skate 2023‑2024 en Street.",
   "de": "Joel Ingold ist ein australischer Freestyle-Scooter-Rider, vor allem im Street. Im World-Skate-Weltranking 2023‑2024 belegte Joel Ingold Platz 16. im Street.",
   "it": "Joel Ingold è un rider australiano di monopattino freestyle, soprattutto nel Street. Nel ranking mondiale World Skate 2023‑2024 ha chiuso 16° nel Street.",
   "en": "Joel Ingold is a Australian freestyle scooter rider, best known for Street. Joel Ingold finished 16th in the 2023‑2024 World Skate Street ranking."
  },
  "keywords": [
   "Joel Ingold",
   "joel ingold",
   "bio joel ingold",
   "rider joel ingold",
   "trottinette",
   "scooter",
   "street",
   "australien",
   "australian"
  ],
  "source": {
   "label": "World Skate",
   "url": "https://www.worldskate.org/scootering/rankings.html?download=7254%3Aworld-ranking-men-street"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-ian-mcdonald",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Ian Mcdonald ?",
   "de": "Wer ist Ian Mcdonald?",
   "it": "Chi è Ian Mcdonald?",
   "en": "Who is Ian Mcdonald?"
  },
  "answer": {
   "fr": "Ian Mcdonald est un rider américain de trottinette freestyle, spécialisé surtout en Street. Ian Mcdonald a terminé 17e du classement mondial World Skate 2023‑2024 en Street.",
   "de": "Ian Mcdonald ist ein US-amerikanischer Freestyle-Scooter-Rider, vor allem im Street. Im World-Skate-Weltranking 2023‑2024 belegte Ian Mcdonald Platz 17. im Street.",
   "it": "Ian Mcdonald è un rider statunitense di monopattino freestyle, soprattutto nel Street. Nel ranking mondiale World Skate 2023‑2024 ha chiuso 17° nel Street.",
   "en": "Ian Mcdonald is a American freestyle scooter rider, best known for Street. Ian Mcdonald finished 17th in the 2023‑2024 World Skate Street ranking."
  },
  "keywords": [
   "Ian Mcdonald",
   "ian mcdonald",
   "bio ian mcdonald",
   "rider ian mcdonald",
   "trottinette",
   "scooter",
   "street",
   "américain",
   "american"
  ],
  "source": {
   "label": "World Skate",
   "url": "https://www.worldskate.org/scootering/rankings.html?download=7254%3Aworld-ranking-men-street"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-claire-parks",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Claire Parks ?",
   "de": "Wer ist Claire Parks?",
   "it": "Chi è Claire Parks?",
   "en": "Who is Claire Parks?"
  },
  "answer": {
   "fr": "Claire Parks est un rider américain de trottinette freestyle, spécialisé surtout en Park. Claire Parks a terminé 1er du classement mondial World Skate 2023‑2024 en Park. Championne du monde Park 2023 et 2024, elle a pris l'argent mondial Park en 2025. Claire Parks était aussi 6e du classement mondial Street 2023‑2024.",
   "de": "Claire Parks ist ein US-amerikanischer Freestyle-Scooter-Rider, vor allem im Park. Im World-Skate-Weltranking 2023‑2024 belegte Claire Parks Platz 1. im Park. Park-Weltmeisterin 2023 und 2024; 2025 gewann sie WM-Silber. Außerdem war Claire Parks 6. im Street-Weltranking 2023‑2024.",
   "it": "Claire Parks è un rider statunitense di monopattino freestyle, soprattutto nel Park. Nel ranking mondiale World Skate 2023‑2024 ha chiuso 1° nel Park. Campionessa del mondo Park 2023 e 2024, ha conquistato l'argento mondiale Park nel 2025. Era anche 6° nel ranking mondiale Street 2023‑2024.",
   "en": "Claire Parks is a American freestyle scooter rider, best known for Park. Claire Parks finished 1st in the 2023‑2024 World Skate Park ranking. Park world champion in 2023 and 2024, she took Park world silver in 2025. Claire Parks was also 6th in the 2023‑2024 Street world ranking."
  },
  "keywords": [
   "Claire Parks",
   "claire parks",
   "bio claire parks",
   "rider claire parks",
   "trottinette",
   "scooter",
   "park",
   "américain",
   "american",
   "street",
   "women street"
  ],
  "source": {
   "label": "World Skate",
   "url": "https://www.worldskate.org/scootering/rankings.html?download=7253%3Aworld-ranking-women-park"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-neve-entwistle",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Neve Entwistle ?",
   "de": "Wer ist Neve Entwistle?",
   "it": "Chi è Neve Entwistle?",
   "en": "Who is Neve Entwistle?"
  },
  "answer": {
   "fr": "Neve Entwistle est un rider britannique de trottinette freestyle, spécialisé surtout en Park. Neve Entwistle a terminé 2e du classement mondial World Skate 2023‑2024 en Park. Elle a remporté le titre mondial Park 2025 à Sakai.",
   "de": "Neve Entwistle ist ein britischer Freestyle-Scooter-Rider, vor allem im Park. Im World-Skate-Weltranking 2023‑2024 belegte Neve Entwistle Platz 2. im Park. Sie gewann 2025 in Sakai den Park-Weltmeistertitel.",
   "it": "Neve Entwistle è un rider britannico di monopattino freestyle, soprattutto nel Park. Nel ranking mondiale World Skate 2023‑2024 ha chiuso 2° nel Park. Ha vinto il titolo mondiale Park 2025 a Sakai.",
   "en": "Neve Entwistle is a British freestyle scooter rider, best known for Park. Neve Entwistle finished 2nd in the 2023‑2024 World Skate Park ranking. She won the 2025 Park world title in Sakai."
  },
  "keywords": [
   "Neve Entwistle",
   "neve entwistle",
   "bio neve entwistle",
   "rider neve entwistle",
   "trottinette",
   "scooter",
   "park",
   "britannique",
   "british"
  ],
  "source": {
   "label": "World Skate",
   "url": "https://www.worldskate.org/scootering/rankings.html?download=7253%3Aworld-ranking-women-park"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-lucy-evans",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Lucy Evans ?",
   "de": "Wer ist Lucy Evans?",
   "it": "Chi è Lucy Evans?",
   "en": "Who is Lucy Evans?"
  },
  "answer": {
   "fr": "Lucy Evans est un rider britannique de trottinette freestyle, spécialisé surtout en Park. Lucy Evans a terminé 3e du classement mondial World Skate 2023‑2024 en Park. Lucy Evans était aussi 16e du classement mondial Street 2023‑2024.",
   "de": "Lucy Evans ist ein britischer Freestyle-Scooter-Rider, vor allem im Park. Im World-Skate-Weltranking 2023‑2024 belegte Lucy Evans Platz 3. im Park. Außerdem war Lucy Evans 16. im Street-Weltranking 2023‑2024.",
   "it": "Lucy Evans è un rider britannico di monopattino freestyle, soprattutto nel Park. Nel ranking mondiale World Skate 2023‑2024 ha chiuso 3° nel Park. Era anche 16° nel ranking mondiale Street 2023‑2024.",
   "en": "Lucy Evans is a British freestyle scooter rider, best known for Park. Lucy Evans finished 3rd in the 2023‑2024 World Skate Park ranking. Lucy Evans was also 16th in the 2023‑2024 Street world ranking."
  },
  "keywords": [
   "Lucy Evans",
   "lucy evans",
   "bio lucy evans",
   "rider lucy evans",
   "trottinette",
   "scooter",
   "park",
   "britannique",
   "british",
   "street",
   "women street"
  ],
  "source": {
   "label": "World Skate",
   "url": "https://www.worldskate.org/scootering/rankings.html?download=7253%3Aworld-ranking-women-park"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-alexandra-madsen",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Alexandra Madsen ?",
   "de": "Wer ist Alexandra Madsen?",
   "it": "Chi è Alexandra Madsen?",
   "en": "Who is Alexandra Madsen?"
  },
  "answer": {
   "fr": "Alexandra Madsen est un rider néo-zélandais de trottinette freestyle, spécialisé surtout en Park. Alexandra Madsen a terminé 4e du classement mondial World Skate 2023‑2024 en Park. Elle a pris le bronze mondial Park 2025 à Sakai.",
   "de": "Alexandra Madsen ist ein neuseeländischer Freestyle-Scooter-Rider, vor allem im Park. Im World-Skate-Weltranking 2023‑2024 belegte Alexandra Madsen Platz 4. im Park. Sie gewann Bronze bei der Park-WM 2025 in Sakai.",
   "it": "Alexandra Madsen è un rider neozelandese di monopattino freestyle, soprattutto nel Park. Nel ranking mondiale World Skate 2023‑2024 ha chiuso 4° nel Park. Ha conquistato il bronzo Park ai Mondiali 2025 di Sakai.",
   "en": "Alexandra Madsen is a New Zealand freestyle scooter rider, best known for Park. Alexandra Madsen finished 4th in the 2023‑2024 World Skate Park ranking. She won bronze at the 2025 Park World Championship in Sakai."
  },
  "keywords": [
   "Alexandra Madsen",
   "alexandra madsen",
   "bio alexandra madsen",
   "rider alexandra madsen",
   "trottinette",
   "scooter",
   "park",
   "néo-zélandais",
   "new zealand"
  ],
  "source": {
   "label": "World Skate",
   "url": "https://www.worldskate.org/scootering/rankings.html?download=7253%3Aworld-ranking-women-park"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-alli-vormala",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Alli Vormala ?",
   "de": "Wer ist Alli Vormala?",
   "it": "Chi è Alli Vormala?",
   "en": "Who is Alli Vormala?"
  },
  "answer": {
   "fr": "Alli Vormala est un rider finlandais de trottinette freestyle, spécialisé surtout en Park. Alli Vormala a terminé 5e du classement mondial World Skate 2023‑2024 en Park.",
   "de": "Alli Vormala ist ein finnischer Freestyle-Scooter-Rider, vor allem im Park. Im World-Skate-Weltranking 2023‑2024 belegte Alli Vormala Platz 5. im Park.",
   "it": "Alli Vormala è un rider finlandese di monopattino freestyle, soprattutto nel Park. Nel ranking mondiale World Skate 2023‑2024 ha chiuso 5° nel Park.",
   "en": "Alli Vormala is a Finnish freestyle scooter rider, best known for Park. Alli Vormala finished 5th in the 2023‑2024 World Skate Park ranking."
  },
  "keywords": [
   "Alli Vormala",
   "alli vormala",
   "bio alli vormala",
   "rider alli vormala",
   "trottinette",
   "scooter",
   "park",
   "finlandais",
   "finnish"
  ],
  "source": {
   "label": "World Skate",
   "url": "https://www.worldskate.org/scootering/rankings.html?download=7253%3Aworld-ranking-women-park"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-lera-stekerhofa",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Lera Štekerhofa ?",
   "de": "Wer ist Lera Štekerhofa?",
   "it": "Chi è Lera Štekerhofa?",
   "en": "Who is Lera Štekerhofa?"
  },
  "answer": {
   "fr": "Lera Štekerhofa est un rider letton de trottinette freestyle, spécialisé surtout en Park. Lera Štekerhofa a terminé 6e du classement mondial World Skate 2023‑2024 en Park. Lera Štekerhofa était aussi 7e du classement mondial Street 2023‑2024.",
   "de": "Lera Štekerhofa ist ein lettischer Freestyle-Scooter-Rider, vor allem im Park. Im World-Skate-Weltranking 2023‑2024 belegte Lera Štekerhofa Platz 6. im Park. Außerdem war Lera Štekerhofa 7. im Street-Weltranking 2023‑2024.",
   "it": "Lera Štekerhofa è un rider lettone di monopattino freestyle, soprattutto nel Park. Nel ranking mondiale World Skate 2023‑2024 ha chiuso 6° nel Park. Era anche 7° nel ranking mondiale Street 2023‑2024.",
   "en": "Lera Štekerhofa is a Latvian freestyle scooter rider, best known for Park. Lera Štekerhofa finished 6th in the 2023‑2024 World Skate Park ranking. Lera Štekerhofa was also 7th in the 2023‑2024 Street world ranking."
  },
  "keywords": [
   "Lera Štekerhofa",
   "lera štekerhofa",
   "bio lera štekerhofa",
   "rider lera štekerhofa",
   "trottinette",
   "scooter",
   "park",
   "letton",
   "latvian",
   "street",
   "women street"
  ],
  "source": {
   "label": "World Skate",
   "url": "https://www.worldskate.org/scootering/rankings.html?download=7253%3Aworld-ranking-women-park"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-mia-catalano",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Mia Catalano ?",
   "de": "Wer ist Mia Catalano?",
   "it": "Chi è Mia Catalano?",
   "en": "Who is Mia Catalano?"
  },
  "answer": {
   "fr": "Mia Catalano est un rider américain de trottinette freestyle, spécialisé surtout en Park. Mia Catalano a terminé 7e du classement mondial World Skate 2023‑2024 en Park. Mia Catalano était aussi 1er du classement mondial Street 2023‑2024. Championne du monde Street 2023 et 2024, elle a pris le bronze mondial Street en 2025.",
   "de": "Mia Catalano ist ein US-amerikanischer Freestyle-Scooter-Rider, vor allem im Park. Im World-Skate-Weltranking 2023‑2024 belegte Mia Catalano Platz 7. im Park. Außerdem war Mia Catalano 1. im Street-Weltranking 2023‑2024. Street-Weltmeisterin 2023 und 2024; 2025 gewann sie WM-Bronze.",
   "it": "Mia Catalano è un rider statunitense di monopattino freestyle, soprattutto nel Park. Nel ranking mondiale World Skate 2023‑2024 ha chiuso 7° nel Park. Era anche 1° nel ranking mondiale Street 2023‑2024. Campionessa del mondo Street 2023 e 2024, ha conquistato il bronzo mondiale Street nel 2025.",
   "en": "Mia Catalano is a American freestyle scooter rider, best known for Park. Mia Catalano finished 7th in the 2023‑2024 World Skate Park ranking. Mia Catalano was also 1st in the 2023‑2024 Street world ranking. Street world champion in 2023 and 2024, she took world bronze in 2025."
  },
  "keywords": [
   "Mia Catalano",
   "mia catalano",
   "bio mia catalano",
   "rider mia catalano",
   "trottinette",
   "scooter",
   "park",
   "américain",
   "american",
   "street",
   "women street"
  ],
  "source": {
   "label": "World Skate",
   "url": "https://www.worldskate.org/scootering/rankings.html?download=7253%3Aworld-ranking-women-park"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-maja-dudek",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Maja Dudek ?",
   "de": "Wer ist Maja Dudek?",
   "it": "Chi è Maja Dudek?",
   "en": "Who is Maja Dudek?"
  },
  "answer": {
   "fr": "Maja Dudek est un rider polonais de trottinette freestyle, spécialisé surtout en Park. Maja Dudek a terminé 8e du classement mondial World Skate 2023‑2024 en Park.",
   "de": "Maja Dudek ist ein polnischer Freestyle-Scooter-Rider, vor allem im Park. Im World-Skate-Weltranking 2023‑2024 belegte Maja Dudek Platz 8. im Park.",
   "it": "Maja Dudek è un rider polacco di monopattino freestyle, soprattutto nel Park. Nel ranking mondiale World Skate 2023‑2024 ha chiuso 8° nel Park.",
   "en": "Maja Dudek is a Polish freestyle scooter rider, best known for Park. Maja Dudek finished 8th in the 2023‑2024 World Skate Park ranking."
  },
  "keywords": [
   "Maja Dudek",
   "maja dudek",
   "bio maja dudek",
   "rider maja dudek",
   "trottinette",
   "scooter",
   "park",
   "polonais",
   "polish"
  ],
  "source": {
   "label": "World Skate",
   "url": "https://www.worldskate.org/scootering/rankings.html?download=7253%3Aworld-ranking-women-park"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-jessica-jose",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Jessica Jose ?",
   "de": "Wer ist Jessica Jose?",
   "it": "Chi è Jessica Jose?",
   "en": "Who is Jessica Jose?"
  },
  "answer": {
   "fr": "Jessica Jose est un rider britannique de trottinette freestyle, spécialisé surtout en Park. Jessica Jose a terminé 9e du classement mondial World Skate 2023‑2024 en Park.",
   "de": "Jessica Jose ist ein britischer Freestyle-Scooter-Rider, vor allem im Park. Im World-Skate-Weltranking 2023‑2024 belegte Jessica Jose Platz 9. im Park.",
   "it": "Jessica Jose è un rider britannico di monopattino freestyle, soprattutto nel Park. Nel ranking mondiale World Skate 2023‑2024 ha chiuso 9° nel Park.",
   "en": "Jessica Jose is a British freestyle scooter rider, best known for Park. Jessica Jose finished 9th in the 2023‑2024 World Skate Park ranking."
  },
  "keywords": [
   "Jessica Jose",
   "jessica jose",
   "bio jessica jose",
   "rider jessica jose",
   "trottinette",
   "scooter",
   "park",
   "britannique",
   "british"
  ],
  "source": {
   "label": "World Skate",
   "url": "https://www.worldskate.org/scootering/rankings.html?download=7253%3Aworld-ranking-women-park"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-ellie-scott",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Ellie Scott ?",
   "de": "Wer ist Ellie Scott?",
   "it": "Chi è Ellie Scott?",
   "en": "Who is Ellie Scott?"
  },
  "answer": {
   "fr": "Ellie Scott est un rider britannique de trottinette freestyle, spécialisé surtout en Park. Ellie Scott a terminé 10e du classement mondial World Skate 2023‑2024 en Park.",
   "de": "Ellie Scott ist ein britischer Freestyle-Scooter-Rider, vor allem im Park. Im World-Skate-Weltranking 2023‑2024 belegte Ellie Scott Platz 10. im Park.",
   "it": "Ellie Scott è un rider britannico di monopattino freestyle, soprattutto nel Park. Nel ranking mondiale World Skate 2023‑2024 ha chiuso 10° nel Park.",
   "en": "Ellie Scott is a British freestyle scooter rider, best known for Park. Ellie Scott finished 10th in the 2023‑2024 World Skate Park ranking."
  },
  "keywords": [
   "Ellie Scott",
   "ellie scott",
   "bio ellie scott",
   "rider ellie scott",
   "trottinette",
   "scooter",
   "park",
   "britannique",
   "british"
  ],
  "source": {
   "label": "World Skate",
   "url": "https://www.worldskate.org/scootering/rankings.html?download=7253%3Aworld-ranking-women-park"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-chanel-martin",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Chanel Martin ?",
   "de": "Wer ist Chanel Martin?",
   "it": "Chi è Chanel Martin?",
   "en": "Who is Chanel Martin?"
  },
  "answer": {
   "fr": "Chanel Martin est un rider américain de trottinette freestyle, spécialisé surtout en Park. Chanel Martin a terminé 11e du classement mondial World Skate 2023‑2024 en Park.",
   "de": "Chanel Martin ist ein US-amerikanischer Freestyle-Scooter-Rider, vor allem im Park. Im World-Skate-Weltranking 2023‑2024 belegte Chanel Martin Platz 11. im Park.",
   "it": "Chanel Martin è un rider statunitense di monopattino freestyle, soprattutto nel Park. Nel ranking mondiale World Skate 2023‑2024 ha chiuso 11° nel Park.",
   "en": "Chanel Martin is a American freestyle scooter rider, best known for Park. Chanel Martin finished 11th in the 2023‑2024 World Skate Park ranking."
  },
  "keywords": [
   "Chanel Martin",
   "chanel martin",
   "bio chanel martin",
   "rider chanel martin",
   "trottinette",
   "scooter",
   "park",
   "américain",
   "american"
  ],
  "source": {
   "label": "World Skate",
   "url": "https://www.worldskate.org/scootering/rankings.html?download=7253%3Aworld-ranking-women-park"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-megan-dillon",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Megan Dillon ?",
   "de": "Wer ist Megan Dillon?",
   "it": "Chi è Megan Dillon?",
   "en": "Who is Megan Dillon?"
  },
  "answer": {
   "fr": "Megan Dillon est un rider britannique de trottinette freestyle, spécialisé surtout en Park. Megan Dillon a terminé 12e du classement mondial World Skate 2023‑2024 en Park.",
   "de": "Megan Dillon ist ein britischer Freestyle-Scooter-Rider, vor allem im Park. Im World-Skate-Weltranking 2023‑2024 belegte Megan Dillon Platz 12. im Park.",
   "it": "Megan Dillon è un rider britannico di monopattino freestyle, soprattutto nel Park. Nel ranking mondiale World Skate 2023‑2024 ha chiuso 12° nel Park.",
   "en": "Megan Dillon is a British freestyle scooter rider, best known for Park. Megan Dillon finished 12th in the 2023‑2024 World Skate Park ranking."
  },
  "keywords": [
   "Megan Dillon",
   "megan dillon",
   "bio megan dillon",
   "rider megan dillon",
   "trottinette",
   "scooter",
   "park",
   "britannique",
   "british"
  ],
  "source": {
   "label": "World Skate",
   "url": "https://www.worldskate.org/scootering/rankings.html?download=7253%3Aworld-ranking-women-park"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-rebeca-ortiz",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Rebeca Ortiz ?",
   "de": "Wer ist Rebeca Ortiz?",
   "it": "Chi è Rebeca Ortiz?",
   "en": "Who is Rebeca Ortiz?"
  },
  "answer": {
   "fr": "Rebeca Ortiz est un rider américain de trottinette freestyle, spécialisé surtout en Park. Rebeca Ortiz a terminé 13e du classement mondial World Skate 2023‑2024 en Park. Rebeca Ortiz était aussi 10e du classement mondial Street 2023‑2024.",
   "de": "Rebeca Ortiz ist ein US-amerikanischer Freestyle-Scooter-Rider, vor allem im Park. Im World-Skate-Weltranking 2023‑2024 belegte Rebeca Ortiz Platz 13. im Park. Außerdem war Rebeca Ortiz 10. im Street-Weltranking 2023‑2024.",
   "it": "Rebeca Ortiz è un rider statunitense di monopattino freestyle, soprattutto nel Park. Nel ranking mondiale World Skate 2023‑2024 ha chiuso 13° nel Park. Era anche 10° nel ranking mondiale Street 2023‑2024.",
   "en": "Rebeca Ortiz is a American freestyle scooter rider, best known for Park. Rebeca Ortiz finished 13th in the 2023‑2024 World Skate Park ranking. Rebeca Ortiz was also 10th in the 2023‑2024 Street world ranking."
  },
  "keywords": [
   "Rebeca Ortiz",
   "rebeca ortiz",
   "bio rebeca ortiz",
   "rider rebeca ortiz",
   "trottinette",
   "scooter",
   "park",
   "américain",
   "american",
   "street",
   "women street"
  ],
  "source": {
   "label": "World Skate",
   "url": "https://www.worldskate.org/scootering/rankings.html?download=7253%3Aworld-ranking-women-park"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-lena-zieba",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Lena Zieba ?",
   "de": "Wer ist Lena Zieba?",
   "it": "Chi è Lena Zieba?",
   "en": "Who is Lena Zieba?"
  },
  "answer": {
   "fr": "Lena Zieba est un rider polonais de trottinette freestyle, spécialisé surtout en Park. Lena Zieba a terminé 14e du classement mondial World Skate 2023‑2024 en Park.",
   "de": "Lena Zieba ist ein polnischer Freestyle-Scooter-Rider, vor allem im Park. Im World-Skate-Weltranking 2023‑2024 belegte Lena Zieba Platz 14. im Park.",
   "it": "Lena Zieba è un rider polacco di monopattino freestyle, soprattutto nel Park. Nel ranking mondiale World Skate 2023‑2024 ha chiuso 14° nel Park.",
   "en": "Lena Zieba is a Polish freestyle scooter rider, best known for Park. Lena Zieba finished 14th in the 2023‑2024 World Skate Park ranking."
  },
  "keywords": [
   "Lena Zieba",
   "lena zieba",
   "bio lena zieba",
   "rider lena zieba",
   "trottinette",
   "scooter",
   "park",
   "polonais",
   "polish"
  ],
  "source": {
   "label": "World Skate",
   "url": "https://www.worldskate.org/scootering/rankings.html?download=7253%3Aworld-ranking-women-park"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-alana-reardon",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Alana Reardon ?",
   "de": "Wer ist Alana Reardon?",
   "it": "Chi è Alana Reardon?",
   "en": "Who is Alana Reardon?"
  },
  "answer": {
   "fr": "Alana Reardon est un rider néo-zélandais de trottinette freestyle, spécialisé surtout en Park. Alana Reardon a terminé 15e du classement mondial World Skate 2023‑2024 en Park.",
   "de": "Alana Reardon ist ein neuseeländischer Freestyle-Scooter-Rider, vor allem im Park. Im World-Skate-Weltranking 2023‑2024 belegte Alana Reardon Platz 15. im Park.",
   "it": "Alana Reardon è un rider neozelandese di monopattino freestyle, soprattutto nel Park. Nel ranking mondiale World Skate 2023‑2024 ha chiuso 15° nel Park.",
   "en": "Alana Reardon is a New Zealand freestyle scooter rider, best known for Park. Alana Reardon finished 15th in the 2023‑2024 World Skate Park ranking."
  },
  "keywords": [
   "Alana Reardon",
   "alana reardon",
   "bio alana reardon",
   "rider alana reardon",
   "trottinette",
   "scooter",
   "park",
   "néo-zélandais",
   "new zealand"
  ],
  "source": {
   "label": "World Skate",
   "url": "https://www.worldskate.org/scootering/rankings.html?download=7253%3Aworld-ranking-women-park"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-lea-mai-pellerin",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Lea Mai Pellerin ?",
   "de": "Wer ist Lea Mai Pellerin?",
   "it": "Chi è Lea Mai Pellerin?",
   "en": "Who is Lea Mai Pellerin?"
  },
  "answer": {
   "fr": "Lea Mai Pellerin est un rider canadien de trottinette freestyle, spécialisé surtout en Park. Lea Mai Pellerin a terminé 16e du classement mondial World Skate 2023‑2024 en Park.",
   "de": "Lea Mai Pellerin ist ein kanadischer Freestyle-Scooter-Rider, vor allem im Park. Im World-Skate-Weltranking 2023‑2024 belegte Lea Mai Pellerin Platz 16. im Park.",
   "it": "Lea Mai Pellerin è un rider canadese di monopattino freestyle, soprattutto nel Park. Nel ranking mondiale World Skate 2023‑2024 ha chiuso 16° nel Park.",
   "en": "Lea Mai Pellerin is a Canadian freestyle scooter rider, best known for Park. Lea Mai Pellerin finished 16th in the 2023‑2024 World Skate Park ranking."
  },
  "keywords": [
   "Lea Mai Pellerin",
   "lea mai pellerin",
   "bio lea mai pellerin",
   "rider lea mai pellerin",
   "trottinette",
   "scooter",
   "park",
   "canadien",
   "canadian"
  ],
  "source": {
   "label": "World Skate",
   "url": "https://www.worldskate.org/scootering/rankings.html?download=7253%3Aworld-ranking-women-park"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-josephine-zgorski",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Joséphine Zgorski ?",
   "de": "Wer ist Joséphine Zgorski?",
   "it": "Chi è Joséphine Zgorski?",
   "en": "Who is Joséphine Zgorski?"
  },
  "answer": {
   "fr": "Joséphine Zgorski est un rider français de trottinette freestyle, spécialisé surtout en Park. Joséphine Zgorski a terminé 17e du classement mondial World Skate 2023‑2024 en Park. Joséphine Zgorski était aussi 4e du classement mondial Street 2023‑2024. Elle est devenue championne du monde Street 2025 à Sakai.",
   "de": "Joséphine Zgorski ist ein französischer Freestyle-Scooter-Rider, vor allem im Park. Im World-Skate-Weltranking 2023‑2024 belegte Joséphine Zgorski Platz 17. im Park. Außerdem war Joséphine Zgorski 4. im Street-Weltranking 2023‑2024. 2025 wurde sie in Sakai Street-Weltmeisterin.",
   "it": "Joséphine Zgorski è un rider francese di monopattino freestyle, soprattutto nel Park. Nel ranking mondiale World Skate 2023‑2024 ha chiuso 17° nel Park. Era anche 4° nel ranking mondiale Street 2023‑2024. È diventata campionessa del mondo Street 2025 a Sakai.",
   "en": "Joséphine Zgorski is a French freestyle scooter rider, best known for Park. Joséphine Zgorski finished 17th in the 2023‑2024 World Skate Park ranking. Joséphine Zgorski was also 4th in the 2023‑2024 Street world ranking. She became the 2025 Street world champion in Sakai."
  },
  "keywords": [
   "Joséphine Zgorski",
   "joséphine zgorski",
   "bio joséphine zgorski",
   "rider joséphine zgorski",
   "trottinette",
   "scooter",
   "park",
   "français",
   "french",
   "street",
   "women street"
  ],
  "source": {
   "label": "World Skate",
   "url": "https://www.worldskate.org/scootering/rankings.html?download=7253%3Aworld-ranking-women-park"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-sophie-molyneux",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Sophie Molyneux ?",
   "de": "Wer ist Sophie Molyneux?",
   "it": "Chi è Sophie Molyneux?",
   "en": "Who is Sophie Molyneux?"
  },
  "answer": {
   "fr": "Sophie Molyneux est un rider britannique de trottinette freestyle, spécialisé surtout en Street. Sophie Molyneux a terminé 2e du classement mondial World Skate 2023‑2024 en Street.",
   "de": "Sophie Molyneux ist ein britischer Freestyle-Scooter-Rider, vor allem im Street. Im World-Skate-Weltranking 2023‑2024 belegte Sophie Molyneux Platz 2. im Street.",
   "it": "Sophie Molyneux è un rider britannico di monopattino freestyle, soprattutto nel Street. Nel ranking mondiale World Skate 2023‑2024 ha chiuso 2° nel Street.",
   "en": "Sophie Molyneux is a British freestyle scooter rider, best known for Street. Sophie Molyneux finished 2nd in the 2023‑2024 World Skate Street ranking."
  },
  "keywords": [
   "Sophie Molyneux",
   "sophie molyneux",
   "bio sophie molyneux",
   "rider sophie molyneux",
   "trottinette",
   "scooter",
   "street",
   "britannique",
   "british"
  ],
  "source": {
   "label": "World Skate",
   "url": "https://www.worldskate.org/scootering/rankings.html?download=7250%3Aworld-ranking-women-street"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-romane-gilliet",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Romane Gilliet ?",
   "de": "Wer ist Romane Gilliet?",
   "it": "Chi è Romane Gilliet?",
   "en": "Who is Romane Gilliet?"
  },
  "answer": {
   "fr": "Romane Gilliet est un rider français de trottinette freestyle, spécialisé surtout en Street. Romane Gilliet a terminé 3e du classement mondial World Skate 2023‑2024 en Street. Elle a pris l'argent mondial Street en 2024 puis à nouveau en 2025.",
   "de": "Romane Gilliet ist ein französischer Freestyle-Scooter-Rider, vor allem im Street. Im World-Skate-Weltranking 2023‑2024 belegte Romane Gilliet Platz 3. im Street. Sie gewann Street-WM-Silber 2024 und erneut 2025.",
   "it": "Romane Gilliet è un rider francese di monopattino freestyle, soprattutto nel Street. Nel ranking mondiale World Skate 2023‑2024 ha chiuso 3° nel Street. Ha conquistato l'argento mondiale Street nel 2024 e di nuovo nel 2025.",
   "en": "Romane Gilliet is a French freestyle scooter rider, best known for Street. Romane Gilliet finished 3rd in the 2023‑2024 World Skate Street ranking. She took Street world silver in 2024 and again in 2025."
  },
  "keywords": [
   "Romane Gilliet",
   "romane gilliet",
   "bio romane gilliet",
   "rider romane gilliet",
   "trottinette",
   "scooter",
   "street",
   "français",
   "french"
  ],
  "source": {
   "label": "World Skate",
   "url": "https://www.worldskate.org/scootering/rankings.html?download=7250%3Aworld-ranking-women-street"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-paloma-cantillo",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Paloma Cantillo ?",
   "de": "Wer ist Paloma Cantillo?",
   "it": "Chi è Paloma Cantillo?",
   "en": "Who is Paloma Cantillo?"
  },
  "answer": {
   "fr": "Paloma Cantillo est un rider espagnol de trottinette freestyle, spécialisé surtout en Street. Paloma Cantillo a terminé 5e du classement mondial World Skate 2023‑2024 en Street.",
   "de": "Paloma Cantillo ist ein spanischer Freestyle-Scooter-Rider, vor allem im Street. Im World-Skate-Weltranking 2023‑2024 belegte Paloma Cantillo Platz 5. im Street.",
   "it": "Paloma Cantillo è un rider spagnolo di monopattino freestyle, soprattutto nel Street. Nel ranking mondiale World Skate 2023‑2024 ha chiuso 5° nel Street.",
   "en": "Paloma Cantillo is a Spanish freestyle scooter rider, best known for Street. Paloma Cantillo finished 5th in the 2023‑2024 World Skate Street ranking."
  },
  "keywords": [
   "Paloma Cantillo",
   "paloma cantillo",
   "bio paloma cantillo",
   "rider paloma cantillo",
   "trottinette",
   "scooter",
   "street",
   "espagnol",
   "spanish"
  ],
  "source": {
   "label": "World Skate",
   "url": "https://www.worldskate.org/scootering/rankings.html?download=7250%3Aworld-ranking-women-street"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-bianca-dilworth",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Bianca Dilworth ?",
   "de": "Wer ist Bianca Dilworth?",
   "it": "Chi è Bianca Dilworth?",
   "en": "Who is Bianca Dilworth?"
  },
  "answer": {
   "fr": "Bianca Dilworth est un rider australien de trottinette freestyle, spécialisé surtout en Street. Bianca Dilworth a terminé 8e du classement mondial World Skate 2023‑2024 en Street.",
   "de": "Bianca Dilworth ist ein australischer Freestyle-Scooter-Rider, vor allem im Street. Im World-Skate-Weltranking 2023‑2024 belegte Bianca Dilworth Platz 8. im Street.",
   "it": "Bianca Dilworth è un rider australiano di monopattino freestyle, soprattutto nel Street. Nel ranking mondiale World Skate 2023‑2024 ha chiuso 8° nel Street.",
   "en": "Bianca Dilworth is a Australian freestyle scooter rider, best known for Street. Bianca Dilworth finished 8th in the 2023‑2024 World Skate Street ranking."
  },
  "keywords": [
   "Bianca Dilworth",
   "bianca dilworth",
   "bio bianca dilworth",
   "rider bianca dilworth",
   "trottinette",
   "scooter",
   "street",
   "australien",
   "australian"
  ],
  "source": {
   "label": "World Skate",
   "url": "https://www.worldskate.org/scootering/rankings.html?download=7250%3Aworld-ranking-women-street"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-lilou-richard",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Lilou Richard ?",
   "de": "Wer ist Lilou Richard?",
   "it": "Chi è Lilou Richard?",
   "en": "Who is Lilou Richard?"
  },
  "answer": {
   "fr": "Lilou Richard est un rider français de trottinette freestyle, spécialisé surtout en Street. Lilou Richard a terminé 9e du classement mondial World Skate 2023‑2024 en Street.",
   "de": "Lilou Richard ist ein französischer Freestyle-Scooter-Rider, vor allem im Street. Im World-Skate-Weltranking 2023‑2024 belegte Lilou Richard Platz 9. im Street.",
   "it": "Lilou Richard è un rider francese di monopattino freestyle, soprattutto nel Street. Nel ranking mondiale World Skate 2023‑2024 ha chiuso 9° nel Street.",
   "en": "Lilou Richard is a French freestyle scooter rider, best known for Street. Lilou Richard finished 9th in the 2023‑2024 World Skate Street ranking."
  },
  "keywords": [
   "Lilou Richard",
   "lilou richard",
   "bio lilou richard",
   "rider lilou richard",
   "trottinette",
   "scooter",
   "street",
   "français",
   "french"
  ],
  "source": {
   "label": "World Skate",
   "url": "https://www.worldskate.org/scootering/rankings.html?download=7250%3Aworld-ranking-women-street"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-lucy-davis",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Lucy Davis ?",
   "de": "Wer ist Lucy Davis?",
   "it": "Chi è Lucy Davis?",
   "en": "Who is Lucy Davis?"
  },
  "answer": {
   "fr": "Lucy Davis est un rider néo-zélandais de trottinette freestyle, spécialisé surtout en Street. Lucy Davis a terminé 11e du classement mondial World Skate 2023‑2024 en Street.",
   "de": "Lucy Davis ist ein neuseeländischer Freestyle-Scooter-Rider, vor allem im Street. Im World-Skate-Weltranking 2023‑2024 belegte Lucy Davis Platz 11. im Street.",
   "it": "Lucy Davis è un rider neozelandese di monopattino freestyle, soprattutto nel Street. Nel ranking mondiale World Skate 2023‑2024 ha chiuso 11° nel Street.",
   "en": "Lucy Davis is a New Zealand freestyle scooter rider, best known for Street. Lucy Davis finished 11th in the 2023‑2024 World Skate Street ranking."
  },
  "keywords": [
   "Lucy Davis",
   "lucy davis",
   "bio lucy davis",
   "rider lucy davis",
   "trottinette",
   "scooter",
   "street",
   "néo-zélandais",
   "new zealand"
  ],
  "source": {
   "label": "World Skate",
   "url": "https://www.worldskate.org/scootering/rankings.html?download=7250%3Aworld-ranking-women-street"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-lea-boularand",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Léa Boularand ?",
   "de": "Wer ist Léa Boularand?",
   "it": "Chi è Léa Boularand?",
   "en": "Who is Léa Boularand?"
  },
  "answer": {
   "fr": "Léa Boularand est un rider français de trottinette freestyle, spécialisé surtout en Street. Léa Boularand a terminé 12e du classement mondial World Skate 2023‑2024 en Street.",
   "de": "Léa Boularand ist ein französischer Freestyle-Scooter-Rider, vor allem im Street. Im World-Skate-Weltranking 2023‑2024 belegte Léa Boularand Platz 12. im Street.",
   "it": "Léa Boularand è un rider francese di monopattino freestyle, soprattutto nel Street. Nel ranking mondiale World Skate 2023‑2024 ha chiuso 12° nel Street.",
   "en": "Léa Boularand is a French freestyle scooter rider, best known for Street. Léa Boularand finished 12th in the 2023‑2024 World Skate Street ranking."
  },
  "keywords": [
   "Léa Boularand",
   "léa boularand",
   "bio léa boularand",
   "rider léa boularand",
   "trottinette",
   "scooter",
   "street",
   "français",
   "french"
  ],
  "source": {
   "label": "World Skate",
   "url": "https://www.worldskate.org/scootering/rankings.html?download=7250%3Aworld-ranking-women-street"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-tatiana-barriga",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Tatiana Barriga ?",
   "de": "Wer ist Tatiana Barriga?",
   "it": "Chi è Tatiana Barriga?",
   "en": "Who is Tatiana Barriga?"
  },
  "answer": {
   "fr": "Tatiana Barriga est un rider colombien de trottinette freestyle, spécialisé surtout en Street. Tatiana Barriga a terminé 13e du classement mondial World Skate 2023‑2024 en Street.",
   "de": "Tatiana Barriga ist ein kolumbianischer Freestyle-Scooter-Rider, vor allem im Street. Im World-Skate-Weltranking 2023‑2024 belegte Tatiana Barriga Platz 13. im Street.",
   "it": "Tatiana Barriga è un rider colombiano di monopattino freestyle, soprattutto nel Street. Nel ranking mondiale World Skate 2023‑2024 ha chiuso 13° nel Street.",
   "en": "Tatiana Barriga is a Colombian freestyle scooter rider, best known for Street. Tatiana Barriga finished 13th in the 2023‑2024 World Skate Street ranking."
  },
  "keywords": [
   "Tatiana Barriga",
   "tatiana barriga",
   "bio tatiana barriga",
   "rider tatiana barriga",
   "trottinette",
   "scooter",
   "street",
   "colombien",
   "colombian"
  ],
  "source": {
   "label": "World Skate",
   "url": "https://www.worldskate.org/scootering/rankings.html?download=7250%3Aworld-ranking-women-street"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-emily-gibson",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Emily Gibson ?",
   "de": "Wer ist Emily Gibson?",
   "it": "Chi è Emily Gibson?",
   "en": "Who is Emily Gibson?"
  },
  "answer": {
   "fr": "Emily Gibson est un rider australien de trottinette freestyle, spécialisé surtout en Street. Emily Gibson a terminé 14e du classement mondial World Skate 2023‑2024 en Street.",
   "de": "Emily Gibson ist ein australischer Freestyle-Scooter-Rider, vor allem im Street. Im World-Skate-Weltranking 2023‑2024 belegte Emily Gibson Platz 14. im Street.",
   "it": "Emily Gibson è un rider australiano di monopattino freestyle, soprattutto nel Street. Nel ranking mondiale World Skate 2023‑2024 ha chiuso 14° nel Street.",
   "en": "Emily Gibson is a Australian freestyle scooter rider, best known for Street. Emily Gibson finished 14th in the 2023‑2024 World Skate Street ranking."
  },
  "keywords": [
   "Emily Gibson",
   "emily gibson",
   "bio emily gibson",
   "rider emily gibson",
   "trottinette",
   "scooter",
   "street",
   "australien",
   "australian"
  ],
  "source": {
   "label": "World Skate",
   "url": "https://www.worldskate.org/scootering/rankings.html?download=7250%3Aworld-ranking-women-street"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-cathrine-thomasen",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Cathrine Thomasen ?",
   "de": "Wer ist Cathrine Thomasen?",
   "it": "Chi è Cathrine Thomasen?",
   "en": "Who is Cathrine Thomasen?"
  },
  "answer": {
   "fr": "Cathrine Thomasen est un rider danois de trottinette freestyle, spécialisé surtout en Street. Cathrine Thomasen a terminé 15e du classement mondial World Skate 2023‑2024 en Street.",
   "de": "Cathrine Thomasen ist ein dänischer Freestyle-Scooter-Rider, vor allem im Street. Im World-Skate-Weltranking 2023‑2024 belegte Cathrine Thomasen Platz 15. im Street.",
   "it": "Cathrine Thomasen è un rider danese di monopattino freestyle, soprattutto nel Street. Nel ranking mondiale World Skate 2023‑2024 ha chiuso 15° nel Street.",
   "en": "Cathrine Thomasen is a Danish freestyle scooter rider, best known for Street. Cathrine Thomasen finished 15th in the 2023‑2024 World Skate Street ranking."
  },
  "keywords": [
   "Cathrine Thomasen",
   "cathrine thomasen",
   "bio cathrine thomasen",
   "rider cathrine thomasen",
   "trottinette",
   "scooter",
   "street",
   "danois",
   "danish"
  ],
  "source": {
   "label": "World Skate",
   "url": "https://www.worldskate.org/scootering/rankings.html?download=7250%3Aworld-ranking-women-street"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-kai-martin",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Kai Martin ?",
   "de": "Wer ist Kai Martin?",
   "it": "Chi è Kai Martin?",
   "en": "Who is Kai Martin?"
  },
  "answer": {
   "fr": "Kai Martin est un rider américain de Street. Il a remporté le titre mondial Street 2025 à Sakai devant Lucas Di Meglio et Jack Walsh.",
   "de": "Kai Martin ist ein US-amerikanischer Street-Rider. 2025 gewann er in Sakai den Street-Weltmeistertitel vor Lucas Di Meglio und Jack Walsh.",
   "it": "Kai Martin è un rider Street statunitense. Ha vinto il titolo mondiale Street 2025 a Sakai davanti a Lucas Di Meglio e Jack Walsh.",
   "en": "Kai Martin is an American Street rider. He won the 2025 Street world title in Sakai ahead of Lucas Di Meglio and Jack Walsh."
  },
  "keywords": [
   "Kai Martin",
   "kai martin",
   "bio kai martin",
   "rider kai martin",
   "street",
   "scooter",
   "trottinette"
  ],
  "source": {
   "label": "World Skate / results",
   "url": "https://www.majoreventsinternational.com/post/we-are-wrapped-in-sakai-japan-closing-out-the-incredible-2025-scootering-world-championships-and-4"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-bastian-brey",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Bastian Brey ?",
   "de": "Wer ist Bastian Brey?",
   "it": "Chi è Bastian Brey?",
   "en": "Who is Bastian Brey?"
  },
  "answer": {
   "fr": "Bastian Brey est un rider allemand de Park. Il a fini 7e du Mondial Park 2025 et 4e de la World Cup Park de Rome 2026.",
   "de": "Bastian Brey ist ein deutscher Park-Rider. Er wurde 7. bei der Park-WM 2025 und 4. beim Park World Cup Rom 2026.",
   "it": "Bastian Brey è un rider tedesco Park. Ha chiuso 7° al Mondiale Park 2025 e 4° alla World Cup Park di Roma 2026.",
   "en": "Bastian Brey is a German Park rider. He finished 7th at the 2025 Park Worlds and 4th at the Rome 2026 Park World Cup."
  },
  "keywords": [
   "Bastian Brey",
   "bastian brey",
   "bio bastian brey",
   "rider bastian brey",
   "park",
   "scooter",
   "trottinette"
  ],
  "source": {
   "label": "World Skate / results",
   "url": "https://www.liveheats.com/events/522107/divisions/938662"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-maksim-tihhomirov",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Maksim Tihhomirov ?",
   "de": "Wer ist Maksim Tihhomirov?",
   "it": "Chi è Maksim Tihhomirov?",
   "en": "Who is Maksim Tihhomirov?"
  },
  "answer": {
   "fr": "Maksim Tihhomirov est un rider estonien de Park. Il a fini 8e du Mondial Park 2025 et 5e de la World Cup Park de Rome 2026.",
   "de": "Maksim Tihhomirov ist ein estnischer Park-Rider. Er wurde 8. bei der Park-WM 2025 und 5. beim Park World Cup Rom 2026.",
   "it": "Maksim Tihhomirov è un rider estone Park. Ha chiuso 8° al Mondiale Park 2025 e 5° alla World Cup Park di Roma 2026.",
   "en": "Maksim Tihhomirov is an Estonian Park rider. He finished 8th at the 2025 Park Worlds and 5th at the Rome 2026 Park World Cup."
  },
  "keywords": [
   "Maksim Tihhomirov",
   "maksim tihhomirov",
   "bio maksim tihhomirov",
   "rider maksim tihhomirov",
   "park",
   "scooter",
   "trottinette"
  ],
  "source": {
   "label": "World Skate / results",
   "url": "https://www.liveheats.com/events/522107/divisions/938662"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-taj-shambrook",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Taj Shambrook ?",
   "de": "Wer ist Taj Shambrook?",
   "it": "Chi è Taj Shambrook?",
   "en": "Who is Taj Shambrook?"
  },
  "answer": {
   "fr": "Taj Shambrook est un rider australien de Park. Il a pris la 3e place de la World Cup Park de Rome 2026.",
   "de": "Taj Shambrook ist ein australischer Park-Rider. Er wurde Dritter beim Park World Cup Rom 2026.",
   "it": "Taj Shambrook è un rider australiano Park. Ha conquistato il 3° posto alla World Cup Park di Roma 2026.",
   "en": "Taj Shambrook is an Australian Park rider. He placed 3rd at the Rome 2026 Park World Cup."
  },
  "keywords": [
   "Taj Shambrook",
   "taj shambrook",
   "bio taj shambrook",
   "rider taj shambrook",
   "park",
   "scooter",
   "trottinette"
  ],
  "source": {
   "label": "World Skate / results",
   "url": "https://www.liveheats.com/events/522107/divisions/938662"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-corey-sponseller",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Corey Sponseller ?",
   "de": "Wer ist Corey Sponseller?",
   "it": "Chi è Corey Sponseller?",
   "en": "Who is Corey Sponseller?"
  },
  "answer": {
   "fr": "Corey Sponseller est un rider australien de Park. Il a terminé 6e du Championnat du monde Park 2025.",
   "de": "Corey Sponseller ist ein australischer Park-Rider. Er wurde 6. bei der Park-WM 2025.",
   "it": "Corey Sponseller è un rider australiano Park. Ha chiuso 6° al Mondiale Park 2025.",
   "en": "Corey Sponseller is an Australian Park rider. He finished 6th at the 2025 Park World Championship."
  },
  "keywords": [
   "Corey Sponseller",
   "corey sponseller",
   "bio corey sponseller",
   "rider corey sponseller",
   "park",
   "scooter",
   "trottinette"
  ],
  "source": {
   "label": "World Skate / results",
   "url": "https://liveheats.com/events/445878/divisions/818515/leaderboard"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-adrien-gay-crosier",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Adrien Gay-Crosier ?",
   "de": "Wer ist Adrien Gay-Crosier?",
   "it": "Chi è Adrien Gay-Crosier?",
   "en": "Who is Adrien Gay-Crosier?"
  },
  "answer": {
   "fr": "Adrien Gay-Crosier est un rider suisse de trottinette freestyle, engagé principalement en Street. Il apparaît dans les sélections officielles Swiss Skate pour les grands événements internationaux récents.",
   "de": "Adrien Gay-Crosier ist ein Schweizer Freestyle-Scooter-Rider, hauptsächlich im Street. Der Name erscheint in offiziellen Swiss-Skate-Aufgeboten für große internationale Events.",
   "it": "Adrien Gay-Crosier è un rider svizzero di monopattino freestyle, soprattutto nel Street. Compare nelle selezioni ufficiali Swiss Skate per i principali eventi internazionali recenti.",
   "en": "Adrien Gay-Crosier is a Swiss freestyle scooter rider, mainly competing in Street. The rider appears in official Swiss Skate selections for recent major international events."
  },
  "keywords": [
   "Adrien Gay-Crosier",
   "adrien gay-crosier",
   "bio adrien gay-crosier",
   "rider adrien gay-crosier",
   "suisse",
   "swiss",
   "schweiz",
   "svizzera",
   "trottinette",
   "scooter"
  ],
  "source": {
   "label": "Swiss Skate",
   "url": "https://www.swissskate.ch/fr/actualites/article/la-selection-suisse-de-trotinette-est-connue/"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-alain-zuber",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Alain Zuber ?",
   "de": "Wer ist Alain Zuber?",
   "it": "Chi è Alain Zuber?",
   "en": "Who is Alain Zuber?"
  },
  "answer": {
   "fr": "Alain Zuber est un rider suisse de trottinette freestyle, engagé principalement en Park. Il apparaît dans les sélections officielles Swiss Skate pour les grands événements internationaux récents.",
   "de": "Alain Zuber ist ein Schweizer Freestyle-Scooter-Rider, hauptsächlich im Park. Der Name erscheint in offiziellen Swiss-Skate-Aufgeboten für große internationale Events.",
   "it": "Alain Zuber è un rider svizzero di monopattino freestyle, soprattutto nel Park. Compare nelle selezioni ufficiali Swiss Skate per i principali eventi internazionali recenti.",
   "en": "Alain Zuber is a Swiss freestyle scooter rider, mainly competing in Park. The rider appears in official Swiss Skate selections for recent major international events."
  },
  "keywords": [
   "Alain Zuber",
   "alain zuber",
   "bio alain zuber",
   "rider alain zuber",
   "suisse",
   "swiss",
   "schweiz",
   "svizzera",
   "trottinette",
   "scooter"
  ],
  "source": {
   "label": "Swiss Skate",
   "url": "https://www.swissskate.ch/fr/actualites/article/neuf-riders-representent-swiss-skate-a-montpellier/"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-anthony-grant",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Anthony Grant ?",
   "de": "Wer ist Anthony Grant?",
   "it": "Chi è Anthony Grant?",
   "en": "Who is Anthony Grant?"
  },
  "answer": {
   "fr": "Anthony Grant est un rider suisse Park. Il a représenté la Suisse aux Mondiaux 2023 à Madrid et apparaissait alors dans le top 10 du ranking Park après l'épreuve.",
   "de": "Anthony Grant ist ein Schweizer Park-Rider. Er vertrat die Schweiz bei der WM 2023 in Madrid und lag danach in den Top 10 des Park-Rankings.",
   "it": "Anthony Grant è un rider Park svizzero. Ha rappresentato la Svizzera ai Mondiali 2023 di Madrid ed era nella top 10 del ranking Park dopo l'evento.",
   "en": "Anthony Grant is a Swiss Park rider. He represented Switzerland at the 2023 Worlds in Madrid and was inside the Park ranking top 10 after that event."
  },
  "keywords": [
   "Anthony Grant",
   "anthony grant",
   "bio anthony grant",
   "rider anthony grant",
   "suisse",
   "swiss",
   "schweiz",
   "svizzera",
   "trottinette",
   "scooter"
  ],
  "source": {
   "label": "Swiss Skate",
   "url": "https://www.swissskate.ch/news/artikel-1/sechs-scooter-riders-fuer-die-schweiz-an-der-wm/"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-enak-markwalder",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Enak Markwalder ?",
   "de": "Wer ist Enak Markwalder?",
   "it": "Chi è Enak Markwalder?",
   "en": "Who is Enak Markwalder?"
  },
  "answer": {
   "fr": "Enak Markwalder est un rider suisse né à Lausanne. Il venait du ski alpin de haut niveau avant qu'une blessure ne le réoriente vers la trottinette freestyle. Il a fini 3e en Junior Park au Pro Tour de Barcelone 2023 et a représenté la Suisse aux grands événements World Skate.",
   "de": "Enak Markwalder ist ein in Lausanne geborener Schweizer Rider. Er kam aus dem leistungsorientierten Ski alpin, bevor ihn eine Verletzung zum Freestyle-Scooter brachte. 2023 wurde er 3. im Junior Park beim Pro Tour Barcelona und vertrat die Schweiz bei großen World-Skate-Events.",
   "it": "Enak Markwalder è un rider svizzero nato a Losanna. Arrivava dallo sci alpino agonistico prima che un infortunio lo portasse al freestyle scooter. È arrivato 3° nel Junior Park al Pro Tour Barcellona 2023 e ha rappresentato la Svizzera nei grandi eventi World Skate.",
   "en": "Enak Markwalder is a Swiss rider born in Lausanne. He came from high-level alpine skiing before an injury redirected him toward freestyle scootering. He placed 3rd in Junior Park at Barcelona Pro Tour 2023 and represented Switzerland at major World Skate events."
  },
  "keywords": [
   "Enak Markwalder",
   "enak markwalder",
   "bio enak markwalder",
   "rider enak markwalder",
   "suisse",
   "swiss",
   "schweiz",
   "svizzera",
   "trottinette",
   "scooter"
  ],
  "source": {
   "label": "Swiss Skate",
   "url": "https://www.esc.live/riders-2025/enak-markwalder"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-jaime-glaus",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Jaime Glaus ?",
   "de": "Wer ist Jaime Glaus?",
   "it": "Chi è Jaime Glaus?",
   "en": "Who is Jaime Glaus?"
  },
  "answer": {
   "fr": "Jaime Glaus est un rider suisse de trottinette freestyle, engagé principalement en Park. Il apparaît dans les sélections officielles Swiss Skate pour les grands événements internationaux récents.",
   "de": "Jaime Glaus ist ein Schweizer Freestyle-Scooter-Rider, hauptsächlich im Park. Der Name erscheint in offiziellen Swiss-Skate-Aufgeboten für große internationale Events.",
   "it": "Jaime Glaus è un rider svizzero di monopattino freestyle, soprattutto nel Park. Compare nelle selezioni ufficiali Swiss Skate per i principali eventi internazionali recenti.",
   "en": "Jaime Glaus is a Swiss freestyle scooter rider, mainly competing in Park. The rider appears in official Swiss Skate selections for recent major international events."
  },
  "keywords": [
   "Jaime Glaus",
   "jaime glaus",
   "bio jaime glaus",
   "rider jaime glaus",
   "suisse",
   "swiss",
   "schweiz",
   "svizzera",
   "trottinette",
   "scooter"
  ],
  "source": {
   "label": "Swiss Skate",
   "url": "https://www.swissskate.ch/fr/actualites/article/neuf-riders-representent-swiss-skate-a-montpellier/"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-janosch-steinmann",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Janosch Steinmann ?",
   "de": "Wer ist Janosch Steinmann?",
   "it": "Chi è Janosch Steinmann?",
   "en": "Who is Janosch Steinmann?"
  },
  "answer": {
   "fr": "Janosch Steinmann est un rider suisse de trottinette freestyle, engagé principalement en Park. Il apparaît dans les sélections officielles Swiss Skate pour les grands événements internationaux récents.",
   "de": "Janosch Steinmann ist ein Schweizer Freestyle-Scooter-Rider, hauptsächlich im Park. Der Name erscheint in offiziellen Swiss-Skate-Aufgeboten für große internationale Events.",
   "it": "Janosch Steinmann è un rider svizzero di monopattino freestyle, soprattutto nel Park. Compare nelle selezioni ufficiali Swiss Skate per i principali eventi internazionali recenti.",
   "en": "Janosch Steinmann is a Swiss freestyle scooter rider, mainly competing in Park. The rider appears in official Swiss Skate selections for recent major international events."
  },
  "keywords": [
   "Janosch Steinmann",
   "janosch steinmann",
   "bio janosch steinmann",
   "rider janosch steinmann",
   "suisse",
   "swiss",
   "schweiz",
   "svizzera",
   "trottinette",
   "scooter"
  ],
  "source": {
   "label": "Swiss Skate",
   "url": "https://www.swissskate.ch/fr/actualites/article/la-selection-suisse-de-trotinette-est-connue/"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-jari-brandstetter",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Jari Brandstetter ?",
   "de": "Wer ist Jari Brandstetter?",
   "it": "Chi è Jari Brandstetter?",
   "en": "Who is Jari Brandstetter?"
  },
  "answer": {
   "fr": "Jari Brandstetter est un rider suisse de trottinette freestyle, engagé principalement en Park. Il apparaît dans les sélections officielles Swiss Skate pour les grands événements internationaux récents.",
   "de": "Jari Brandstetter ist ein Schweizer Freestyle-Scooter-Rider, hauptsächlich im Park. Der Name erscheint in offiziellen Swiss-Skate-Aufgeboten für große internationale Events.",
   "it": "Jari Brandstetter è un rider svizzero di monopattino freestyle, soprattutto nel Park. Compare nelle selezioni ufficiali Swiss Skate per i principali eventi internazionali recenti.",
   "en": "Jari Brandstetter is a Swiss freestyle scooter rider, mainly competing in Park. The rider appears in official Swiss Skate selections for recent major international events."
  },
  "keywords": [
   "Jari Brandstetter",
   "jari brandstetter",
   "bio jari brandstetter",
   "rider jari brandstetter",
   "suisse",
   "swiss",
   "schweiz",
   "svizzera",
   "trottinette",
   "scooter"
  ],
  "source": {
   "label": "Swiss Skate",
   "url": "https://www.swissskate.ch/fr/actualites/article/une-forte-delegation-suisse-pour-les-championnats-du-monde-de-trottinette/"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-jarno-landolt",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Jarno Landolt ?",
   "de": "Wer ist Jarno Landolt?",
   "it": "Chi è Jarno Landolt?",
   "en": "Who is Jarno Landolt?"
  },
  "answer": {
   "fr": "Jarno Landolt est un rider suisse de trottinette freestyle, engagé principalement en Park. Il apparaît dans les sélections officielles Swiss Skate pour les grands événements internationaux récents.",
   "de": "Jarno Landolt ist ein Schweizer Freestyle-Scooter-Rider, hauptsächlich im Park. Der Name erscheint in offiziellen Swiss-Skate-Aufgeboten für große internationale Events.",
   "it": "Jarno Landolt è un rider svizzero di monopattino freestyle, soprattutto nel Park. Compare nelle selezioni ufficiali Swiss Skate per i principali eventi internazionali recenti.",
   "en": "Jarno Landolt is a Swiss freestyle scooter rider, mainly competing in Park. The rider appears in official Swiss Skate selections for recent major international events."
  },
  "keywords": [
   "Jarno Landolt",
   "jarno landolt",
   "bio jarno landolt",
   "rider jarno landolt",
   "suisse",
   "swiss",
   "schweiz",
   "svizzera",
   "trottinette",
   "scooter"
  ],
  "source": {
   "label": "Swiss Skate",
   "url": "https://www.swissskate.ch/fr/actualites/article/une-forte-delegation-suisse-pour-les-championnats-du-monde-de-trottinette/"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-joshua-mangelsdorf",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Joshua Mangelsdorf ?",
   "de": "Wer ist Joshua Mangelsdorf?",
   "it": "Chi è Joshua Mangelsdorf?",
   "en": "Who is Joshua Mangelsdorf?"
  },
  "answer": {
   "fr": "Joshua Mangelsdorf est un rider suisse de trottinette freestyle, engagé principalement en Park. Il apparaît dans les sélections officielles Swiss Skate pour les grands événements internationaux récents.",
   "de": "Joshua Mangelsdorf ist ein Schweizer Freestyle-Scooter-Rider, hauptsächlich im Park. Der Name erscheint in offiziellen Swiss-Skate-Aufgeboten für große internationale Events.",
   "it": "Joshua Mangelsdorf è un rider svizzero di monopattino freestyle, soprattutto nel Park. Compare nelle selezioni ufficiali Swiss Skate per i principali eventi internazionali recenti.",
   "en": "Joshua Mangelsdorf is a Swiss freestyle scooter rider, mainly competing in Park. The rider appears in official Swiss Skate selections for recent major international events."
  },
  "keywords": [
   "Joshua Mangelsdorf",
   "joshua mangelsdorf",
   "bio joshua mangelsdorf",
   "rider joshua mangelsdorf",
   "suisse",
   "swiss",
   "schweiz",
   "svizzera",
   "trottinette",
   "scooter"
  ],
  "source": {
   "label": "Swiss Skate",
   "url": "https://www.swissskate.ch/fr/actualites/article/la-selection-suisse-de-trotinette-est-connue/"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-julien-rota",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Julien Rota ?",
   "de": "Wer ist Julien Rota?",
   "it": "Chi è Julien Rota?",
   "en": "Who is Julien Rota?"
  },
  "answer": {
   "fr": "Julien Rota est un rider suisse de trottinette freestyle, engagé principalement en Park. Il apparaît dans les sélections officielles Swiss Skate pour les grands événements internationaux récents.",
   "de": "Julien Rota ist ein Schweizer Freestyle-Scooter-Rider, hauptsächlich im Park. Der Name erscheint in offiziellen Swiss-Skate-Aufgeboten für große internationale Events.",
   "it": "Julien Rota è un rider svizzero di monopattino freestyle, soprattutto nel Park. Compare nelle selezioni ufficiali Swiss Skate per i principali eventi internazionali recenti.",
   "en": "Julien Rota is a Swiss freestyle scooter rider, mainly competing in Park. The rider appears in official Swiss Skate selections for recent major international events."
  },
  "keywords": [
   "Julien Rota",
   "julien rota",
   "bio julien rota",
   "rider julien rota",
   "suisse",
   "swiss",
   "schweiz",
   "svizzera",
   "trottinette",
   "scooter"
  ],
  "source": {
   "label": "Swiss Skate",
   "url": "https://www.swissskate.ch/fr/actualites/article/la-selection-suisse-de-trotinette-est-connue/"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-jerome-petrich",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Jérôme Petrich ?",
   "de": "Wer ist Jérôme Petrich?",
   "it": "Chi è Jérôme Petrich?",
   "en": "Who is Jérôme Petrich?"
  },
  "answer": {
   "fr": "Jérôme Petrich est un rider suisse de trottinette freestyle, engagé principalement en Park. Il apparaît dans les sélections officielles Swiss Skate pour les grands événements internationaux récents.",
   "de": "Jérôme Petrich ist ein Schweizer Freestyle-Scooter-Rider, hauptsächlich im Park. Der Name erscheint in offiziellen Swiss-Skate-Aufgeboten für große internationale Events.",
   "it": "Jérôme Petrich è un rider svizzero di monopattino freestyle, soprattutto nel Park. Compare nelle selezioni ufficiali Swiss Skate per i principali eventi internazionali recenti.",
   "en": "Jérôme Petrich is a Swiss freestyle scooter rider, mainly competing in Park. The rider appears in official Swiss Skate selections for recent major international events."
  },
  "keywords": [
   "Jérôme Petrich",
   "jérôme petrich",
   "bio jérôme petrich",
   "rider jérôme petrich",
   "suisse",
   "swiss",
   "schweiz",
   "svizzera",
   "trottinette",
   "scooter"
  ],
  "source": {
   "label": "Swiss Skate",
   "url": "https://www.swissskate.ch/fr/actualites/article/une-forte-delegation-suisse-pour-les-championnats-du-monde-de-trottinette/"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-karim-heritier",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Karim Héritier ?",
   "de": "Wer ist Karim Héritier?",
   "it": "Chi è Karim Héritier?",
   "en": "Who is Karim Héritier?"
  },
  "answer": {
   "fr": "Karim Héritier est un rider suisse de trottinette freestyle, engagé principalement en Park. Il apparaît dans les sélections officielles Swiss Skate pour les grands événements internationaux récents.",
   "de": "Karim Héritier ist ein Schweizer Freestyle-Scooter-Rider, hauptsächlich im Park. Der Name erscheint in offiziellen Swiss-Skate-Aufgeboten für große internationale Events.",
   "it": "Karim Héritier è un rider svizzero di monopattino freestyle, soprattutto nel Park. Compare nelle selezioni ufficiali Swiss Skate per i principali eventi internazionali recenti.",
   "en": "Karim Héritier is a Swiss freestyle scooter rider, mainly competing in Park. The rider appears in official Swiss Skate selections for recent major international events."
  },
  "keywords": [
   "Karim Héritier",
   "karim héritier",
   "bio karim héritier",
   "rider karim héritier",
   "suisse",
   "swiss",
   "schweiz",
   "svizzera",
   "trottinette",
   "scooter"
  ],
  "source": {
   "label": "Swiss Skate",
   "url": "https://www.swissskate.ch/fr/actualites/article/la-selection-suisse-de-trotinette-est-connue/"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-killian-froidevaux",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Killian Froidevaux ?",
   "de": "Wer ist Killian Froidevaux?",
   "it": "Chi è Killian Froidevaux?",
   "en": "Who is Killian Froidevaux?"
  },
  "answer": {
   "fr": "Killian Froidevaux est un rider suisse de Tavannes. En 2024, Digger le présentait à 21 ans, apprenti menuisier, avec dix ans de pratique dont cinq au niveau pro international. Il représente régulièrement Swiss Skate en Street.",
   "de": "Killian Froidevaux ist ein Schweizer Street-Rider aus Tavannes. 2024 beschrieb Digger ihn mit 21 Jahren als Schreinerlehrling mit zehn Jahren Scooter-Erfahrung, davon fünf auf internationalem Pro-Niveau.",
   "it": "Killian Froidevaux è un rider Street svizzero di Tavannes. Nel 2024 Digger lo presentava a 21 anni, apprendista falegname, con dieci anni di pratica di cui cinque a livello pro internazionale.",
   "en": "Killian Froidevaux is a Swiss Street rider from Tavannes. In 2024 Digger described him, aged 21, as a carpenter apprentice with ten years of riding, five at international pro level."
  },
  "keywords": [
   "Killian Froidevaux",
   "killian froidevaux",
   "bio killian froidevaux",
   "rider killian froidevaux",
   "suisse",
   "swiss",
   "schweiz",
   "svizzera",
   "trottinette",
   "scooter"
  ],
  "source": {
   "label": "Swiss Skate",
   "url": "https://digger.ngo/wp-content/uploads/2024/06/DN72_FR_web.pdf"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-lony-savary",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Lony Savary ?",
   "de": "Wer ist Lony Savary?",
   "it": "Chi è Lony Savary?",
   "en": "Who is Lony Savary?"
  },
  "answer": {
   "fr": "Lony Savary est un rider suisse de trottinette freestyle, engagé principalement en Park et Street. Il apparaît dans les sélections officielles Swiss Skate pour les grands événements internationaux récents.",
   "de": "Lony Savary ist ein Schweizer Freestyle-Scooter-Rider, hauptsächlich in Park und Street. Der Name erscheint in offiziellen Swiss-Skate-Aufgeboten für große internationale Events.",
   "it": "Lony Savary è un rider svizzero di monopattino freestyle, soprattutto nel Park e Street. Compare nelle selezioni ufficiali Swiss Skate per i principali eventi internazionali recenti.",
   "en": "Lony Savary is a Swiss freestyle scooter rider, mainly competing in Park and Street. The rider appears in official Swiss Skate selections for recent major international events."
  },
  "keywords": [
   "Lony Savary",
   "lony savary",
   "bio lony savary",
   "rider lony savary",
   "suisse",
   "swiss",
   "schweiz",
   "svizzera",
   "trottinette",
   "scooter"
  ],
  "source": {
   "label": "Swiss Skate",
   "url": "https://www.swissskate.ch/fr/actualites/article/la-selection-suisse-de-trotinette-est-connue/"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-martin-rolle",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Martin Rolle ?",
   "de": "Wer ist Martin Rolle?",
   "it": "Chi è Martin Rolle?",
   "en": "Who is Martin Rolle?"
  },
  "answer": {
   "fr": "Martin Rolle est un rider suisse de trottinette freestyle, engagé principalement en Street. Il apparaît dans les sélections officielles Swiss Skate pour les grands événements internationaux récents.",
   "de": "Martin Rolle ist ein Schweizer Freestyle-Scooter-Rider, hauptsächlich im Street. Der Name erscheint in offiziellen Swiss-Skate-Aufgeboten für große internationale Events.",
   "it": "Martin Rolle è un rider svizzero di monopattino freestyle, soprattutto nel Street. Compare nelle selezioni ufficiali Swiss Skate per i principali eventi internazionali recenti.",
   "en": "Martin Rolle is a Swiss freestyle scooter rider, mainly competing in Street. The rider appears in official Swiss Skate selections for recent major international events."
  },
  "keywords": [
   "Martin Rolle",
   "martin rolle",
   "bio martin rolle",
   "rider martin rolle",
   "suisse",
   "swiss",
   "schweiz",
   "svizzera",
   "trottinette",
   "scooter"
  ],
  "source": {
   "label": "Swiss Skate",
   "url": "https://www.swissskate.ch/fr/actualites/article/la-selection-suisse-de-trotinette-est-connue/"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-mathieu-vilminot",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Mathieu Vilminot ?",
   "de": "Wer ist Mathieu Vilminot?",
   "it": "Chi è Mathieu Vilminot?",
   "en": "Who is Mathieu Vilminot?"
  },
  "answer": {
   "fr": "Mathieu Vilminot est un rider suisse de trottinette freestyle, engagé principalement en Street. Il apparaît dans les sélections officielles Swiss Skate pour les grands événements internationaux récents.",
   "de": "Mathieu Vilminot ist ein Schweizer Freestyle-Scooter-Rider, hauptsächlich im Street. Der Name erscheint in offiziellen Swiss-Skate-Aufgeboten für große internationale Events.",
   "it": "Mathieu Vilminot è un rider svizzero di monopattino freestyle, soprattutto nel Street. Compare nelle selezioni ufficiali Swiss Skate per i principali eventi internazionali recenti.",
   "en": "Mathieu Vilminot is a Swiss freestyle scooter rider, mainly competing in Street. The rider appears in official Swiss Skate selections for recent major international events."
  },
  "keywords": [
   "Mathieu Vilminot",
   "mathieu vilminot",
   "bio mathieu vilminot",
   "rider mathieu vilminot",
   "suisse",
   "swiss",
   "schweiz",
   "svizzera",
   "trottinette",
   "scooter"
  ],
  "source": {
   "label": "Swiss Skate",
   "url": "https://www.swissskate.ch/fr/actualites/article/la-selection-suisse-de-trotinette-est-connue/"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-patrick-frossard",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Patrick Frossard ?",
   "de": "Wer ist Patrick Frossard?",
   "it": "Chi è Patrick Frossard?",
   "en": "Who is Patrick Frossard?"
  },
  "answer": {
   "fr": "Patrick Frossard est un rider suisse de trottinette freestyle, engagé principalement en Street. Il apparaît dans les sélections officielles Swiss Skate pour les grands événements internationaux récents.",
   "de": "Patrick Frossard ist ein Schweizer Freestyle-Scooter-Rider, hauptsächlich im Street. Der Name erscheint in offiziellen Swiss-Skate-Aufgeboten für große internationale Events.",
   "it": "Patrick Frossard è un rider svizzero di monopattino freestyle, soprattutto nel Street. Compare nelle selezioni ufficiali Swiss Skate per i principali eventi internazionali recenti.",
   "en": "Patrick Frossard is a Swiss freestyle scooter rider, mainly competing in Street. The rider appears in official Swiss Skate selections for recent major international events."
  },
  "keywords": [
   "Patrick Frossard",
   "patrick frossard",
   "bio patrick frossard",
   "rider patrick frossard",
   "suisse",
   "swiss",
   "schweiz",
   "svizzera",
   "trottinette",
   "scooter"
  ],
  "source": {
   "label": "Swiss Skate",
   "url": "https://www.swissskate.ch/fr/actualites/article/une-forte-delegation-suisse-pour-les-championnats-du-monde-de-trottinette/"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-paul-harti",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Paul Harti ?",
   "de": "Wer ist Paul Harti?",
   "it": "Chi è Paul Harti?",
   "en": "Who is Paul Harti?"
  },
  "answer": {
   "fr": "Paul Harti est un rider suisse de trottinette freestyle, engagé principalement en Park. Il apparaît dans les sélections officielles Swiss Skate pour les grands événements internationaux récents.",
   "de": "Paul Harti ist ein Schweizer Freestyle-Scooter-Rider, hauptsächlich im Park. Der Name erscheint in offiziellen Swiss-Skate-Aufgeboten für große internationale Events.",
   "it": "Paul Harti è un rider svizzero di monopattino freestyle, soprattutto nel Park. Compare nelle selezioni ufficiali Swiss Skate per i principali eventi internazionali recenti.",
   "en": "Paul Harti is a Swiss freestyle scooter rider, mainly competing in Park. The rider appears in official Swiss Skate selections for recent major international events."
  },
  "keywords": [
   "Paul Harti",
   "paul harti",
   "bio paul harti",
   "rider paul harti",
   "suisse",
   "swiss",
   "schweiz",
   "svizzera",
   "trottinette",
   "scooter"
  ],
  "source": {
   "label": "Swiss Skate",
   "url": "https://www.swissskate.ch/fr/actualites/article/la-selection-suisse-de-trotinette-est-connue/"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-pierrick-frossard",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Pierrick Frossard ?",
   "de": "Wer ist Pierrick Frossard?",
   "it": "Chi è Pierrick Frossard?",
   "en": "Who is Pierrick Frossard?"
  },
  "answer": {
   "fr": "Pierrick Frossard est un rider suisse de trottinette freestyle, engagé principalement en Street. Il apparaît dans les sélections officielles Swiss Skate pour les grands événements internationaux récents.",
   "de": "Pierrick Frossard ist ein Schweizer Freestyle-Scooter-Rider, hauptsächlich im Street. Der Name erscheint in offiziellen Swiss-Skate-Aufgeboten für große internationale Events.",
   "it": "Pierrick Frossard è un rider svizzero di monopattino freestyle, soprattutto nel Street. Compare nelle selezioni ufficiali Swiss Skate per i principali eventi internazionali recenti.",
   "en": "Pierrick Frossard is a Swiss freestyle scooter rider, mainly competing in Street. The rider appears in official Swiss Skate selections for recent major international events."
  },
  "keywords": [
   "Pierrick Frossard",
   "pierrick frossard",
   "bio pierrick frossard",
   "rider pierrick frossard",
   "suisse",
   "swiss",
   "schweiz",
   "svizzera",
   "trottinette",
   "scooter"
  ],
  "source": {
   "label": "Swiss Skate",
   "url": "https://www.swissskate.ch/fr/actualites/article/la-selection-suisse-de-trotinette-est-connue/"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-tiago-carvalho-morais",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Tiago Carvalho Morais ?",
   "de": "Wer ist Tiago Carvalho Morais?",
   "it": "Chi è Tiago Carvalho Morais?",
   "en": "Who is Tiago Carvalho Morais?"
  },
  "answer": {
   "fr": "Tiago Carvalho Morais, aussi cité comme Tiago Morais, est un rider suisse Park qui a représenté Swiss Skate aux Mondiaux 2023 et au FISE Montpellier 2024.",
   "de": "Tiago Carvalho Morais, auch Tiago Morais genannt, ist ein Schweizer Park-Rider und vertrat Swiss Skate bei der WM 2023 und beim FISE Montpellier 2024.",
   "it": "Tiago Carvalho Morais, citato anche come Tiago Morais, è un rider Park svizzero che ha rappresentato Swiss Skate ai Mondiali 2023 e al FISE Montpellier 2024.",
   "en": "Tiago Carvalho Morais, also listed as Tiago Morais, is a Swiss Park rider who represented Swiss Skate at the 2023 Worlds and FISE Montpellier 2024."
  },
  "keywords": [
   "Tiago Carvalho Morais",
   "tiago carvalho morais",
   "bio tiago carvalho morais",
   "rider tiago carvalho morais",
   "suisse",
   "swiss",
   "schweiz",
   "svizzera",
   "trottinette",
   "scooter"
  ],
  "source": {
   "label": "Swiss Skate",
   "url": "https://www.swissskate.ch/news/artikel-1/sechs-scooter-riders-fuer-die-schweiz-an-der-wm/"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-xavier-gremaud",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Xavier Gremaud ?",
   "de": "Wer ist Xavier Gremaud?",
   "it": "Chi è Xavier Gremaud?",
   "en": "Who is Xavier Gremaud?"
  },
  "answer": {
   "fr": "Xavier Gremaud est un rider suisse Street. Aux Mondiaux 2023 à Madrid, Swiss Skate indique qu'il a terminé 8e dans le classement final Street suisse/international de l'épreuve.",
   "de": "Xavier Gremaud ist ein Schweizer Street-Rider. Bei der WM 2023 in Madrid wurde er laut Swiss Skate Achter.",
   "it": "Xavier Gremaud è un rider Street svizzero. Ai Mondiali 2023 di Madrid Swiss Skate lo indica all'8° posto.",
   "en": "Xavier Gremaud is a Swiss Street rider. Swiss Skate reports an 8th-place result at the 2023 Worlds in Madrid."
  },
  "keywords": [
   "Xavier Gremaud",
   "xavier gremaud",
   "bio xavier gremaud",
   "rider xavier gremaud",
   "suisse",
   "swiss",
   "schweiz",
   "svizzera",
   "trottinette",
   "scooter"
  ],
  "source": {
   "label": "Swiss Skate",
   "url": "https://www.swissskate.ch/news/artikel-1/sechs-scooter-riders-fuer-die-schweiz-an-der-wm/"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-yann-montani",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Yann Montani ?",
   "de": "Wer ist Yann Montani?",
   "it": "Chi è Yann Montani?",
   "en": "Who is Yann Montani?"
  },
  "answer": {
   "fr": "Yann Montani est un rider suisse de trottinette freestyle, engagé principalement en Park et Street. Il apparaît dans les sélections officielles Swiss Skate pour les grands événements internationaux récents.",
   "de": "Yann Montani ist ein Schweizer Freestyle-Scooter-Rider, hauptsächlich in Park und Street. Der Name erscheint in offiziellen Swiss-Skate-Aufgeboten für große internationale Events.",
   "it": "Yann Montani è un rider svizzero di monopattino freestyle, soprattutto nel Park e Street. Compare nelle selezioni ufficiali Swiss Skate per i principali eventi internazionali recenti.",
   "en": "Yann Montani is a Swiss freestyle scooter rider, mainly competing in Park and Street. The rider appears in official Swiss Skate selections for recent major international events."
  },
  "keywords": [
   "Yann Montani",
   "yann montani",
   "bio yann montani",
   "rider yann montani",
   "suisse",
   "swiss",
   "schweiz",
   "svizzera",
   "trottinette",
   "scooter"
  ],
  "source": {
   "label": "Swiss Skate",
   "url": "https://www.swissskate.ch/fr/actualites/article/la-selection-suisse-de-trotinette-est-connue/"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-ryan-williams",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Ryan Williams ?",
   "de": "Wer ist Ryan Williams?",
   "it": "Chi è Ryan Williams?",
   "en": "Who is Ryan Williams?"
  },
  "answer": {
   "fr": "Ryan « R‑Willy » Williams est un rider australien de trottinette freestyle et BMX, originaire de la Sunshine Coast. Nitro Circus le présente comme un pionnier des World Firsts et vainqueur de l'épreuve Scooter des Nitro World Games 2017.",
   "de": "Ryan „R‑Willy“ Williams ist ein australischer Freestyle-Scooter- und BMX-Rider von der Sunshine Coast. Nitro Circus nennt ihn einen Pionier zahlreicher World Firsts und Sieger des Scooter-Events bei den Nitro World Games 2017.",
   "it": "Ryan « R‑Willy » Williams è un rider australiano di freestyle scooter e BMX della Sunshine Coast. Nitro Circus lo presenta come pioniere di numerosi world first e vincitore dell'evento Scooter ai Nitro World Games 2017.",
   "en": "Ryan “R‑Willy” Williams is an Australian freestyle scooter and BMX rider from the Sunshine Coast. Nitro Circus describes him as a pioneer of numerous world-first tricks and winner of the Scooter event at the 2017 Nitro World Games."
  },
  "keywords": [
   "Ryan Williams",
   "ryan williams",
   "bio ryan williams",
   "legend",
   "légende",
   "scooter",
   "trottinette"
  ],
  "source": {
   "label": "Rider / official profile",
   "url": "https://www.nitrocircus.com/athlete-profiles/ryan-williams"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-dakota-schuetz",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Dakota Schuetz ?",
   "de": "Wer ist Dakota Schuetz?",
   "it": "Chi è Dakota Schuetz?",
   "en": "Who is Dakota Schuetz?"
  },
  "answer": {
   "fr": "Dakota « Kota » Schuetz est l'une des grandes légendes historiques de la trottinette freestyle, particulièrement connue pour ses titres mondiaux ISA au début des années 2010.",
   "de": "Dakota „Kota“ Schuetz ist eine der großen historischen Freestyle-Scooter-Legenden und besonders für seine ISA-Weltmeistertitel zu Beginn der 2010er bekannt.",
   "it": "Dakota « Kota » Schuetz è una delle grandi leggende storiche del freestyle scooter, noto soprattutto per i titoli mondiali ISA dei primi anni 2010.",
   "en": "Dakota “Kota” Schuetz is one of freestyle scootering's major historic legends, especially known for ISA world titles in the early 2010s."
  },
  "keywords": [
   "Dakota Schuetz",
   "dakota schuetz",
   "bio dakota schuetz",
   "legend",
   "légende",
   "scooter",
   "trottinette"
  ],
  "source": {
   "label": "Rider / official profile",
   "url": "https://www.worldscooterchampionships.com/"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "rider-raymond-warner",
  "category": "Riders",
  "questions": {
   "fr": "Qui est Raymond Warner ?",
   "de": "Wer ist Raymond Warner?",
   "it": "Chi è Raymond Warner?",
   "en": "Who is Raymond Warner?"
  },
  "answer": {
   "fr": "Raymond Warner est un rider et créateur américain de longue date, connu pour ses vidéos, ses tricks Park et sa contribution à la popularisation de la trottinette freestyle en ligne.",
   "de": "Raymond Warner ist ein langjähriger US-Rider und Creator, bekannt für Videos, Park-Tricks und seinen Beitrag zur Online-Popularität des Scootering.",
   "it": "Raymond Warner è un rider e creator statunitense di lunga data, noto per video, trick Park e per aver contribuito alla popolarità online del freestyle scooter.",
   "en": "Raymond Warner is a long-time American rider and creator known for videos, Park tricks and helping popularize freestyle scootering online."
  },
  "keywords": [
   "Raymond Warner",
   "raymond warner",
   "bio raymond warner",
   "legend",
   "légende",
   "scooter",
   "trottinette"
  ],
  "source": {
   "label": "Rider / official profile",
   "url": "https://www.raymondwarner.com/"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "riders-suisse-liste",
  "category": "Riders",
  "questions": {
   "fr": "Quels sont les riders suisses ?",
   "de": "Welche Schweizer Scooter-Rider gibt es?",
   "it": "Quali sono i rider svizzeri?",
   "en": "Who are the Swiss scooter riders?"
  },
  "answer": {
   "fr": "Lya connaît notamment ces riders suisses repérés dans les sélections Swiss Skate 2023‑2025 : Adrien Gay-Crosier, Alain Zuber, Anthony Grant, Enak Markwalder, Jaime Glaus, Janosch Steinmann, Jari Brandstetter, Jarno Landolt, Joshua Mangelsdorf, Julien Rota, Jérôme Petrich, Karim Héritier, Killian Froidevaux, Lony Savary, Martin Rolle, Mathieu Vilminot, Matis Neyroud, Patrick Frossard, Paul Harti, Pierrick Frossard, Tiago Carvalho Morais, Xavier Gremaud, Yann Montani. La scène évolue, donc cette liste pourra être enrichie.",
   "de": "Lya kennt unter anderem diese Schweizer Rider aus Swiss-Skate-Aufgeboten 2023‑2025: Adrien Gay-Crosier, Alain Zuber, Anthony Grant, Enak Markwalder, Jaime Glaus, Janosch Steinmann, Jari Brandstetter, Jarno Landolt, Joshua Mangelsdorf, Julien Rota, Jérôme Petrich, Karim Héritier, Killian Froidevaux, Lony Savary, Martin Rolle, Mathieu Vilminot, Matis Neyroud, Patrick Frossard, Paul Harti, Pierrick Frossard, Tiago Carvalho Morais, Xavier Gremaud, Yann Montani. Die Szene entwickelt sich weiter.",
   "it": "Lya conosce tra gli altri questi rider svizzeri presenti nelle selezioni Swiss Skate 2023‑2025: Adrien Gay-Crosier, Alain Zuber, Anthony Grant, Enak Markwalder, Jaime Glaus, Janosch Steinmann, Jari Brandstetter, Jarno Landolt, Joshua Mangelsdorf, Julien Rota, Jérôme Petrich, Karim Héritier, Killian Froidevaux, Lony Savary, Martin Rolle, Mathieu Vilminot, Matis Neyroud, Patrick Frossard, Paul Harti, Pierrick Frossard, Tiago Carvalho Morais, Xavier Gremaud, Yann Montani. La scena continua a evolvere.",
   "en": "Lya knows, among others, these Swiss riders appearing in Swiss Skate selections from 2023‑2025: Adrien Gay-Crosier, Alain Zuber, Anthony Grant, Enak Markwalder, Jaime Glaus, Janosch Steinmann, Jari Brandstetter, Jarno Landolt, Joshua Mangelsdorf, Julien Rota, Jérôme Petrich, Karim Héritier, Killian Froidevaux, Lony Savary, Martin Rolle, Mathieu Vilminot, Matis Neyroud, Patrick Frossard, Paul Harti, Pierrick Frossard, Tiago Carvalho Morais, Xavier Gremaud, Yann Montani. The scene keeps evolving."
  },
  "keywords": [
   "riders suisses",
   "rider suisse",
   "team suisse",
   "swiss riders",
   "schweizer rider",
   "rider svizzeri"
  ],
  "source": {
   "label": "Swiss Skate",
   "url": "https://www.swissskate.ch/fr/actualites/article/une-forte-delegation-suisse-pour-les-championnats-du-monde-de-trottinette/"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "riders-mondiaux-liste",
  "category": "Riders",
  "questions": {
   "fr": "Quels sont les meilleurs riders mondiaux ?",
   "de": "Wer sind bekannte internationale Scooter-Rider?",
   "it": "Quali sono i rider mondiali più conosciuti?",
   "en": "Who are some of the top world scooter riders?"
  },
  "answer": {
   "fr": "Lya contient maintenant les principaux riders des classements officiels World Skate Park et Street 2023‑2024, ainsi que des champions 2025, des finalistes de Rome 2026 et plusieurs légendes. Tu peux demander directement « bio Jayden Sharman », « qui est Matis Neyroud ? », « riders suisses », etc.",
   "de": "Lya enthält jetzt die wichtigsten Rider der offiziellen World-Skate-Rankings Park und Street 2023‑2024, dazu Champions 2025, Finalisten Rom 2026 und mehrere Legenden.",
   "it": "Lya contiene ora i principali rider dei ranking ufficiali World Skate Park e Street 2023‑2024, oltre ai campioni 2025, finalisti di Roma 2026 e diverse leggende.",
   "en": "Lya now includes the main riders from the official 2023‑2024 World Skate Park and Street rankings, plus 2025 champions, Rome 2026 finalists and several legends."
  },
  "keywords": [
   "riders mondiaux",
   "meilleurs riders",
   "world riders",
   "best scooter riders",
   "rider world skate",
   "champions trottinette"
  ],
  "source": {
   "label": "World Skate",
   "url": "https://www.worldskate.org/scootering/rankings.html?download=7251%3Aworld-ranking-men-park"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "person-joel-meuwly",
  "category": "RSL",
  "questions": {
   "fr": "Qui est Joël Meuwly ?",
   "de": "Wer ist Joël Meuwly?",
   "it": "Chi è Joël Meuwly?",
   "en": "Who is Joël Meuwly?"
  },
  "answer": {
   "fr": "Joël Meuwly est un entrepreneur suisse romand et une figure centrale de la structuration actuelle de la trottinette freestyle en Suisse romande. Il est président de la Romandie Scooter League (RSL), où il s'occupe notamment de la coordination, des résultats et des sponsors. Il est aussi le fondateur de JF-Skateboards et de JF Ride Shop, projet développé à partir de 2015-2017 avant la création de JF Ride Shop Sàrl en 2021. Depuis 2022, JF Ride Shop a repris l'organisation du Montreux Scooter Contest à l'Empire Skate Building ; l'ASSIR remercie explicitement Joël et sa team de perpétuer cette tradition historique. Menuisier de métier, Joël a également fabriqué artisanalement des skateboards et longboards. La RSL prolonge le travail de Ride4Style autour des cours, contests et de la structuration de la scène romande. Il est aussi à l'origine de RELÈVE, plateforme suisse romande dédiée aux premières expériences professionnelles des jeunes.",
   "de": "Joël Meuwly ist ein Westschweizer Unternehmer, der in der Ride- und Freestyle-Scooter-Szene aktiv ist. Er ist Präsident der Romandie Scooter League (RSL) und kümmert sich dort unter anderem um Koordination, Resultate und Sponsoren. Außerdem ist er Gründer von JF-Skateboards und JF Ride Shop, einem Projekt, das er ab 2015-2017 aufbaute; 2021 entstand daraus JF Ride Shop Sàrl in Montreux. Von Beruf ist er Schreiner und arbeitete auch an handgefertigten Skateboards und Longboards. Die RSL führt das seit 2018 entwickelte Ride4Style-Projekt mit Kursen, Contests und dem Aufbau der Freestyle-Scooter-Szene in der Romandie weiter. Joël steht außerdem hinter RELÈVE, einer Westschweizer Plattform für erste Jobs und lokale Einsätze von Jugendlichen.",
   "it": "Joël Meuwly è un imprenditore della Svizzera romanda attivo nella scena ride e nel freestyle scooter. È presidente della Romandie Scooter League (RSL), dove si occupa in particolare di coordinamento, risultati e sponsor. È anche fondatore di JF-Skateboards e JF Ride Shop, progetto sviluppato dal 2015-2017 e diventato JF Ride Shop Sàrl a Montreux nel 2021. Falegname di formazione, ha lavorato anche nella produzione artigianale di skateboard e longboard. La RSL prosegue il lavoro di Ride4Style, sviluppato dal 2018 con corsi, contest e strutturazione del freestyle scooter nella Svizzera romanda. Joël è inoltre all'origine di RELÈVE, piattaforma romanda dedicata alle prime esperienze professionali dei giovani.",
   "en": "Joël Meuwly is a French-speaking Swiss entrepreneur active in the ride and freestyle scooter scene. He is president of the Romandie Scooter League (RSL), where his responsibilities include coordination, results and sponsors. He is also the founder of JF-Skateboards and JF Ride Shop, a project developed from 2015-2017 before becoming JF Ride Shop Sàrl in Montreux in 2021. A carpenter by trade, he also worked on handcrafted skateboards and longboards. RSL continues the Ride4Style project developed since 2018 around lessons, contests and structuring freestyle scootering in French-speaking Switzerland. Joël is also behind RELÈVE, a regional platform designed to help young people access their first local jobs and work experiences."
  },
  "keywords": [
   "joel meuwly",
   "joël meuwly",
   "joel",
   "joël",
   "president rsl",
   "président rsl",
   "fondateur rsl",
   "jf rideshop",
   "jf ride shop",
   "jf skateboards",
   "jf-skateboards",
   "ride4style",
   "releve",
   "relève",
   "menuisier",
   "carpenter",
   "romandie scooter league"
  ],
  "source": {
   "label": "RSL / JF Ride Shop / RELÈVE",
   "url": "https://rsl-swiss.ch/comite"
  },
  "dynamic": true,
  "verified": "2026-08-26"
 },
 {
  "id": "scooter-deck-size",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "Quelle taille de deck choisir ?",
   "de": "Welche Deck-Größe soll ich wählen?",
   "it": "Che misura di deck devo scegliere?",
   "en": "What deck size should I choose?"
  },
  "answer": {
   "fr": "Pour le deck, la taille dépend surtout de ton style et de ton gabarit — pas de la hauteur du guidon 😄 En Park, on choisit généralement un deck plus court et plus étroit pour gagner en légèreté et faciliter les rotations : environ 4.5 à 5.0 pouces de large et 19.5 à 20.5 pouces de long. Pour un setup polyvalent, autour de 5.0 à 5.5 pouces de large et 20 à 21.5 pouces de long fonctionne bien. En Street, on préfère souvent plus large et plus long pour la stabilité et les grinds : environ 5.5 à 7 pouces de large et 21 à 23 pouces ou plus. La pointure compte aussi : plus le pied est grand, plus un deck large/long peut être confortable. Donne-moi ta taille, ta pointure et si tu roules plutôt Park, Street ou polyvalent, et je te donne une taille de deck beaucoup plus précise.",
   "de": "Bei der Deck-Größe zählen vor allem Fahrstil und Körperbau – nicht die Lenkerhöhe 😄 Für Park nimmt man meist ein kürzeres und schmaleres Deck, ungefähr 4.5–5.0 Zoll breit und 19.5–20.5 Zoll lang. Allround liegt oft bei etwa 5.0–5.5 Zoll Breite und 20–21.5 Zoll Länge. Street-Decks sind meist breiter und länger, ungefähr 5.5–7 Zoll breit und 21–23 Zoll oder länger, für mehr Stabilität und Grinds. Auch die Schuhgröße spielt eine Rolle. Nenn mir Körpergröße, Schuhgröße und Park/Street/Allround, dann kann ich genauer empfehlen.",
   "it": "La misura del deck dipende soprattutto dallo stile e dalla corporatura, non dall'altezza del manubrio 😄 Per Park si sceglie normalmente un deck più corto e stretto: circa 4.5–5.0 pollici di larghezza e 19.5–20.5 di lunghezza. Per un setup versatile: circa 5.0–5.5 pollici di larghezza e 20–21.5 di lunghezza. Per Street si preferisce spesso più largo e lungo: circa 5.5–7 pollici di larghezza e 21–23 o più di lunghezza. Conta anche il numero di scarpe. Dimmi altezza, numero di scarpe e Park/Street/polivalente e posso consigliarti meglio.",
   "en": "Deck size depends mainly on riding style and body/foot size — not bar height 😄 For Park, riders usually choose a shorter, narrower deck for lower weight and easier rotations: roughly 4.5–5.0 inches wide and 19.5–20.5 inches long. For an all-round setup, around 5.0–5.5 inches wide and 20–21.5 inches long is common. For Street, wider and longer decks are usually preferred for stability and grinds: roughly 5.5–7 inches wide and 21–23 inches or longer. Shoe size matters too. Tell me your height, shoe size and whether you ride Park, Street or all-round, and I can narrow it down."
  },
  "keywords": [
   "taille deck",
   "taille de deck",
   "quel deck",
   "choisir deck",
   "deck size",
   "deck width",
   "deck length",
   "largeur deck",
   "longueur deck",
   "dimension deck",
   "dimensions deck",
   "deck park",
   "deck street",
   "deck polyvalent",
   "deck allround",
   "breite deck",
   "deck länge",
   "misura deck",
   "larghezza deck",
   "lunghezza deck"
  ],
  "source": {
   "label": "Guide matériel RIDLY / RSL",
   "url": "https://rsl-swiss.ch"
  },
  "dynamic": false,
  "verified": "2026-08-26"
 },
 {
  "id": "scooter-180",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "Comment faire un 180 ?",
   "de": "Wie macht man einen 180?",
   "it": "Come si fa un 180?",
   "en": "How do I do a 180?"
  },
  "answer": {
   "fr": "Le 180, c'est un demi-tour en l'air : tu décolles en avant et tu retombes en marche arrière. Pars d'un bunny hop propre. Amorce la rotation avec les épaules et le regard avant de décoller, garde le poids centré sur le deck et laisse les hanches suivre. Retombe en fakie, roule en arrière quelques mètres puis ressors. Travaille d'abord le fakie seul, sinon la réception te surprendra à chaque fois.",
   "de": "Der 180 ist eine halbe Drehung in der Luft: vorwärts abspringen, rückwärts landen. Beginne mit einem sauberen Bunny Hop. Leite die Rotation mit Schultern und Blick ein, bevor du abhebst, halte das Gewicht mittig und lass die Hüfte folgen. Lande fakie und rolle ein paar Meter rückwärts. Übe zuerst Fakie allein.",
   "it": "Il 180 è mezzo giro in aria: stacchi in avanti e atterri all'indietro. Parti da un bunny hop pulito. Avvia la rotazione con spalle e sguardo prima di staccare, tieni il peso centrato e lascia seguire i fianchi. Atterra in fakie e rotola indietro. Allena prima il fakie da solo.",
   "en": "A 180 is a half turn in the air: take off forwards, land rolling backwards. Start from a clean bunny hop. Wind up the rotation with your shoulders and eyes before takeoff, keep your weight centred and let your hips follow. Land fakie and roll backwards a few metres. Practise fakie on its own first."
  },
  "keywords": [
   "180",
   "c est quoi 180",
   "cest quoi 180",
   "definition 180",
   "demi tour",
   "fakie",
   "one eighty",
   "trick"
  ],
  "source": {
   "label": "RSL – Cours",
   "url": "https://rsl-swiss.ch/cours"
  },
  "dynamic": false,
  "verified": "2026-08-28"
 },
 {
  "id": "scooter-fakie",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "Comment rouler en fakie ?",
   "de": "Wie fährt man fakie?",
   "it": "Come si va in fakie?",
   "en": "How do I ride fakie?"
  },
  "answer": {
   "fr": "Le fakie, c'est rouler en marche arrière. Recule le poids légèrement vers l'arrière du deck, garde le guidon droit et regarde par-dessus l'épaule côté pied avant. Commence sur une petite pente douce pour prendre de la vitesse sans pousser. C'est la base du 180, du half-cab et de la plupart des sorties de module.",
   "de": "Fakie heisst rückwärts fahren. Gewicht leicht nach hinten, Bar gerade halten, über die Schulter schauen. Beginne auf leichtem Gefälle. Grundlage für 180, Half-Cab und die meisten Ausfahrten.",
   "it": "Fakie significa andare all'indietro. Peso leggermente arretrato, manubrio dritto, sguardo sopra la spalla. Inizia su una leggera pendenza. È la base di 180, half-cab e quasi tutte le uscite dai moduli.",
   "en": "Fakie means rolling backwards. Shift your weight slightly back, keep the bar straight and look over your shoulder. Start on a gentle slope. It's the basis for 180s, half-cabs and most transitions."
  },
  "keywords": [
   "fakie",
   "marche arriere",
   "switch",
   "trick"
  ],
  "source": {
   "label": "RSL – Cours",
   "url": "https://rsl-swiss.ch/cours"
  },
  "dynamic": false,
  "verified": "2026-08-28"
 },
 {
  "id": "scooter-heelwhip",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "C'est quoi un heelwhip ?",
   "de": "Was ist ein Heelwhip?",
   "it": "Cos'è un heelwhip?",
   "en": "What is a heelwhip?"
  },
  "answer": {
   "fr": "C'est un tailwhip qui tourne dans l'autre sens : le deck part vers l'extérieur, poussé par le talon au lieu de la pointe. La mécanique est la même que le tailwhip mais le lancement est moins naturel, donc attends d'avoir un tailwhip solide avant de t'y mettre. Beaucoup de riders le trouvent plus dur à réceptionner.",
   "de": "Ein Tailwhip in die andere Richtung: Das Deck wird mit der Ferse nach aussen gestossen. Gleiche Mechanik, unnatürlicherer Absprung. Erst mit sicherem Tailwhip anfangen.",
   "it": "Un tailwhip che gira dall'altra parte: il deck parte verso l'esterno, spinto dal tallone. Stessa meccanica, lancio meno naturale. Aspetta di avere un tailwhip solido.",
   "en": "A tailwhip spinning the other way: the deck goes outward, pushed with the heel. Same mechanics, less natural kick. Wait until your tailwhip is solid."
  },
  "keywords": [
   "c est quoi heelwhip",
   "cest quoi heelwhip",
   "heel whip",
   "heelwhip",
   "trick"
  ],
  "source": {
   "label": "RSL – Cours",
   "url": "https://rsl-swiss.ch/cours"
  },
  "dynamic": false,
  "verified": "2026-08-28"
 },
 {
  "id": "scooter-briflip",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "C'est quoi un briflip ?",
   "de": "Was ist ein Briflip?",
   "it": "Cos'è un briflip?",
   "en": "What is a briflip?"
  },
  "answer": {
   "fr": "Le briflip combine une rotation du deck sous les pieds avec un mouvement du guidon, le deck faisant un tour complet dans l'axe. C'est un trick avancé : il demande un tailwhip et un barspin déjà automatiques, et beaucoup de répétitions sur foam pit ou airbag avant de le tenter sur du dur. Ne te lance pas dessus en autodidacte sans protections.",
   "de": "Der Briflip kombiniert eine Deck-Rotation mit einer Bar-Bewegung, das Deck dreht sich komplett um die Achse. Fortgeschrittener Trick: Tailwhip und Barspin müssen sitzen. Erst im Foam Pit oder Airbag üben.",
   "it": "Il briflip combina una rotazione del deck con un movimento del manubrio, il deck fa un giro completo. Trick avanzato: servono tailwhip e barspin automatici. Prima allenalo su foam pit o airbag.",
   "en": "A briflip combines a deck rotation with a bar movement, the deck doing a full turn on its axis. Advanced trick: you need automatic tailwhips and barspins. Train it into a foam pit or airbag first."
  },
  "keywords": [
   "briflip",
   "bri flip",
   "bri",
   "trick avance"
  ],
  "source": {
   "label": "RSL – Cours",
   "url": "https://rsl-swiss.ch/cours"
  },
  "dynamic": false,
  "verified": "2026-08-28"
 },
 {
  "id": "scooter-tuck-no-hander",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "C'est quoi un tuck no hander ?",
   "de": "Was ist ein Tuck No Hander?",
   "it": "Cos'è un tuck no hander?",
   "en": "What is a tuck no hander?"
  },
  "answer": {
   "fr": "Tu lâches le guidon en l'air en le calant contre tes genoux ou tes cuisses, puis tu le reprends avant la réception. C'est souvent le premier trick « sans les mains » qu'on apprend, parce que le guidon ne quitte jamais vraiment le corps. Apprends-le sur un saut où tu es à l'aise, jamais sur un module que tu découvres.",
   "de": "Du lässt die Bar in der Luft los und klemmst sie an Knie oder Oberschenkel, dann greifst du wieder zu. Oft der erste No-Hander-Trick. Auf einem vertrauten Sprung üben.",
   "it": "Lasci il manubrio in aria bloccandolo contro ginocchia o cosce, poi lo riprendi. Spesso il primo trick senza mani. Allenalo su un salto che conosci bene.",
   "en": "You let go of the bar mid-air, tucking it against your knees or thighs, then grab it back. Often the first no-hander trick. Practise on a jump you know well."
  },
  "keywords": [
   "tuck no hander",
   "no hander",
   "tuck",
   "trick"
  ],
  "source": {
   "label": "RSL – Cours",
   "url": "https://rsl-swiss.ch/cours"
  },
  "dynamic": false,
  "verified": "2026-08-28"
 },
 {
  "id": "scooter-360",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "Comment faire un 360 ?",
   "de": "Wie macht man einen 360?",
   "it": "Come si fa un 360?",
   "en": "How do I do a 360?"
  },
  "answer": {
   "fr": "Le 360, c'est un tour complet en l'air, en repartant dans le même sens qu'au décollage. Il faut un 180 propre des deux côtés avant d'y penser. Arme la rotation avec les épaules bien avant le décollage, garde le regard qui tourne en avance sur le corps et reste compact — plus tu t'ouvres, plus tu ralentis. Sur module courbé c'est plus facile qu'à plat, la transition t'aide à finir la rotation.",
   "de": "Der 360 ist eine ganze Drehung in der Luft, Landung in Fahrtrichtung. Erst ein sauberer 180 auf beiden Seiten. Rotation früh mit den Schultern aufbauen, Blick voraus, kompakt bleiben. Auf gekrümmten Modulen leichter als flat.",
   "it": "Il 360 è un giro completo in aria, si riparte nello stesso senso. Serve prima un 180 pulito da entrambi i lati. Carica la rotazione con le spalle prima dello stacco, sguardo in anticipo, resta compatto. Più facile su transizione che in piano.",
   "en": "A 360 is a full turn in the air, landing in the same direction you took off. You need a clean 180 both ways first. Wind up early with your shoulders, keep your eyes ahead of your body, stay compact. Easier on a transition than on flat."
  },
  "keywords": [
   "360",
   "c est quoi 360",
   "cest quoi 360",
   "definition 360",
   "rotation",
   "three sixty",
   "trick"
  ],
  "source": {
   "label": "RSL – Cours",
   "url": "https://rsl-swiss.ch/cours"
  },
  "dynamic": false,
  "verified": "2026-08-28"
 },
 {
  "id": "scooter-trick-list",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "Quels tricks je peux apprendre en trottinette ?",
   "de": "Welche Tricks kann ich lernen?",
   "it": "Quali trick posso imparare?",
   "en": "Which tricks can I learn?"
  },
  "answer": {
   "fr": "Dans l'ordre classique : bunny hop, puis manual et fakie, puis 180, puis barspin et tailwhip, puis les grinds, puis heelwhip, tuck no hander et 360, et enfin les tricks avancés comme le briflip. Demande-moi n'importe lequel et je te détaille la technique. Le saut d'étape est la première cause de blessure : chaque trick de la liste sert de base au suivant.",
   "de": "Klassische Reihenfolge: Bunny Hop, Manual und Fakie, 180, Barspin und Tailwhip, Grinds, Heelwhip, Tuck No Hander und 360, dann Fortgeschrittenes wie Briflip. Frag mich nach einem davon.",
   "it": "Ordine classico: bunny hop, manual e fakie, 180, barspin e tailwhip, grind, heelwhip, tuck no hander e 360, poi avanzati come il briflip. Chiedimene uno e ti spiego.",
   "en": "Classic order: bunny hop, manual and fakie, 180, barspin and tailwhip, grinds, heelwhip, tuck no hander and 360, then advanced ones like the briflip. Ask me about any of them."
  },
  "keywords": [
   "tricks",
   "liste tricks",
   "quels tricks",
   "apprendre",
   "progression",
   "figures"
  ],
  "source": {
   "label": "RSL – Cours",
   "url": "https://rsl-swiss.ch/cours"
  },
  "dynamic": false,
  "verified": "2026-08-28"
 },
 {
  "id": "scooter-540",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "C'est quoi un 540 ?",
   "de": "C'est quoi un 540 ?",
   "it": "C'est quoi un 540 ?",
   "en": "What is a 540?"
  },
  "answer": {
   "fr": "Le 540, c'est un tour et demi en l'air : tu décolles en avant et tu retombes en fakie. Il se fait presque toujours sur une transition ou un quarter, la courbe t'aidant à finir la rotation. Il faut un 360 automatique des deux côtés avant d'y penser, et un fakie solide pour la réception.",
   "de": "Le 540, c'est un tour et demi en l'air : tu décolles en avant et tu retombes en fakie. Il se fait presque toujours sur une transition ou un quarter, la courbe t'aidant à finir la rotation. Il faut un 360 automatique des deux côtés avant d'y penser, et un fakie solide pour la réception.",
   "it": "Le 540, c'est un tour et demi en l'air : tu décolles en avant et tu retombes en fakie. Il se fait presque toujours sur une transition ou un quarter, la courbe t'aidant à finir la rotation. Il faut un 360 automatique des deux côtés avant d'y penser, et un fakie solide pour la réception.",
   "en": "A 540 is one and a half turns in the air, taking off forwards and landing fakie. Almost always done on a transition or quarter. You need an automatic 360 both ways and a solid fakie first."
  },
  "keywords": [
   "540",
   "five forty",
   "c est quoi 540",
   "rotation",
   "trick avance"
  ],
  "source": {
   "label": "RSL – Cours",
   "url": "https://rsl-swiss.ch/cours"
  },
  "dynamic": false,
  "verified": "2026-08-28"
 },
 {
  "id": "scooter-nollie",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "C'est quoi un nollie ?",
   "de": "C'est quoi un nollie ?",
   "it": "C'est quoi un nollie ?",
   "en": "What is a nollie?"
  },
  "answer": {
   "fr": "Le nollie, c'est un saut amorcé depuis la roue avant au lieu de la roue arrière : tu charges l'avant puis tu rebondis dessus. Ça sert surtout à enchaîner depuis un nose manual ou à sortir d'un module. Moins haut qu'un bunny hop, mais très utile en street.",
   "de": "Le nollie, c'est un saut amorcé depuis la roue avant au lieu de la roue arrière : tu charges l'avant puis tu rebondis dessus. Ça sert surtout à enchaîner depuis un nose manual ou à sortir d'un module. Moins haut qu'un bunny hop, mais très utile en street.",
   "it": "Le nollie, c'est un saut amorcé depuis la roue avant au lieu de la roue arrière : tu charges l'avant puis tu rebondis dessus. Ça sert surtout à enchaîner depuis un nose manual ou à sortir d'un module. Moins haut qu'un bunny hop, mais très utile en street.",
   "en": "A nollie is a hop initiated off the front wheel instead of the back. Useful to link out of a nose manual or off a ledge. Lower than a bunny hop but handy in street."
  },
  "keywords": [
   "nollie",
   "c est quoi nollie",
   "saut avant",
   "street"
  ],
  "source": {
   "label": "RSL – Cours",
   "url": "https://rsl-swiss.ch/cours"
  },
  "dynamic": false,
  "verified": "2026-08-28"
 },
 {
  "id": "scooter-nose-manual",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "C'est quoi un nose manual ?",
   "de": "C'est quoi un nose manual ?",
   "it": "C'est quoi un nose manual ?",
   "en": "What is a nose manual?"
  },
  "answer": {
   "fr": "Le nose manual, c'est l'inverse du manual : tu roules en équilibre sur la roue avant, roue arrière en l'air. Beaucoup plus engagé, parce que le moindre excès de poids t'envoie par-dessus le guidon. Apprends-le avec des protections et à faible vitesse.",
   "de": "Le nose manual, c'est l'inverse du manual : tu roules en équilibre sur la roue avant, roue arrière en l'air. Beaucoup plus engagé, parce que le moindre excès de poids t'envoie par-dessus le guidon. Apprends-le avec des protections et à faible vitesse.",
   "it": "Le nose manual, c'est l'inverse du manual : tu roules en équilibre sur la roue avant, roue arrière en l'air. Beaucoup plus engagé, parce que le moindre excès de poids t'envoie par-dessus le guidon. Apprends-le avec des protections et à faible vitesse.",
   "en": "A nose manual is balancing on the front wheel with the back wheel up. Far more committing than a manual — too much weight forward sends you over the bar. Learn it slow, with protection."
  },
  "keywords": [
   "nose manual",
   "nosemanual",
   "c est quoi nose manual",
   "equilibre"
  ],
  "source": {
   "label": "RSL – Cours",
   "url": "https://rsl-swiss.ch/cours"
  },
  "dynamic": false,
  "verified": "2026-08-28"
 },
 {
  "id": "scooter-feeble",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "C'est quoi un feeble grind ?",
   "de": "C'est quoi un feeble grind ?",
   "it": "C'est quoi un feeble grind ?",
   "en": "What is a feeble grind?"
  },
  "answer": {
   "fr": "Le feeble, c'est un grind où le deck est en travers de la barre, le peg arrière dessus et l'avant qui dépasse de l'autre côté. C'est l'un des premiers grinds qu'on apprend après le 50-50, parce que la position est stable une fois posée. Commence sur un ledge bas et cirré.",
   "de": "Le feeble, c'est un grind où le deck est en travers de la barre, le peg arrière dessus et l'avant qui dépasse de l'autre côté. C'est l'un des premiers grinds qu'on apprend après le 50-50, parce que la position est stable une fois posée. Commence sur un ledge bas et cirré.",
   "it": "Le feeble, c'est un grind où le deck est en travers de la barre, le peg arrière dessus et l'avant qui dépasse de l'autre côté. C'est l'un des premiers grinds qu'on apprend après le 50-50, parce que la position est stable une fois posée. Commence sur un ledge bas et cirré.",
   "en": "In a feeble the deck sits across the rail, back peg on it and the front hanging over the far side. One of the first grinds after a 50-50. Start on a low waxed ledge."
  },
  "keywords": [
   "feeble",
   "feeble grind",
   "c est quoi feeble",
   "grind"
  ],
  "source": {
   "label": "RSL – Cours",
   "url": "https://rsl-swiss.ch/cours"
  },
  "dynamic": false,
  "verified": "2026-08-28"
 },
 {
  "id": "scooter-smith",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "C'est quoi un smith grind ?",
   "de": "C'est quoi un smith grind ?",
   "it": "C'est quoi un smith grind ?",
   "en": "What is a smith grind?"
  },
  "answer": {
   "fr": "Le smith, c'est le miroir du feeble : le peg avant est sur la barre et l'arrière pend de l'autre côté. Il demande plus de contrôle du poids que le feeble, parce que l'appui est devant toi. Les deux se travaillent en parallèle, chacun développe un équilibre différent.",
   "de": "Le smith, c'est le miroir du feeble : le peg avant est sur la barre et l'arrière pend de l'autre côté. Il demande plus de contrôle du poids que le feeble, parce que l'appui est devant toi. Les deux se travaillent en parallèle, chacun développe un équilibre différent.",
   "it": "Le smith, c'est le miroir du feeble : le peg avant est sur la barre et l'arrière pend de l'autre côté. Il demande plus de contrôle du poids que le feeble, parce que l'appui est devant toi. Les deux se travaillent en parallèle, chacun développe un équilibre différent.",
   "en": "A smith is the mirror of a feeble: front peg on the rail, back hanging over. Needs more weight control since the contact point is ahead of you."
  },
  "keywords": [
   "smith",
   "smith grind",
   "c est quoi smith",
   "grind"
  ],
  "source": {
   "label": "RSL – Cours",
   "url": "https://rsl-swiss.ch/cours"
  },
  "dynamic": false,
  "verified": "2026-08-28"
 },
 {
  "id": "scooter-icepick",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "C'est quoi un icepick ?",
   "de": "C'est quoi un icepick ?",
   "it": "C'est quoi un icepick ?",
   "en": "What is an icepick?"
  },
  "answer": {
   "fr": "L'icepick, c'est un grind sur le peg arrière seul, l'avant de la trottinette relevé. C'est un grind d'équilibre pur : rien ne te stabilise à part ton placement. On le travaille après avoir un 50-50 et un feeble propres.",
   "de": "L'icepick, c'est un grind sur le peg arrière seul, l'avant de la trottinette relevé. C'est un grind d'équilibre pur : rien ne te stabilise à part ton placement. On le travaille après avoir un 50-50 et un feeble propres.",
   "it": "L'icepick, c'est un grind sur le peg arrière seul, l'avant de la trottinette relevé. C'est un grind d'équilibre pur : rien ne te stabilise à part ton placement. On le travaille après avoir un 50-50 et un feeble propres.",
   "en": "An icepick is grinding on the back peg alone with the front end lifted. Pure balance — nothing stabilises you but your positioning."
  },
  "keywords": [
   "icepick",
   "ice pick",
   "ice",
   "c est quoi icepick",
   "grind"
  ],
  "source": {
   "label": "RSL – Cours",
   "url": "https://rsl-swiss.ch/cours"
  },
  "dynamic": false,
  "verified": "2026-08-28"
 },
 {
  "id": "scooter-toothpick",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "C'est quoi un toothpick ?",
   "de": "C'est quoi un toothpick ?",
   "it": "C'est quoi un toothpick ?",
   "en": "What is a toothpick?"
  },
  "answer": {
   "fr": "Le toothpick, c'est l'inverse de l'icepick : tu grindes sur le peg avant seul, l'arrière en l'air. Très engagé, parce que si le peg accroche, tu pars en avant. À garder pour quand les grinds de base sont automatiques.",
   "de": "Le toothpick, c'est l'inverse de l'icepick : tu grindes sur le peg avant seul, l'arrière en l'air. Très engagé, parce que si le peg accroche, tu pars en avant. À garder pour quand les grinds de base sont automatiques.",
   "it": "Le toothpick, c'est l'inverse de l'icepick : tu grindes sur le peg avant seul, l'arrière en l'air. Très engagé, parce que si le peg accroche, tu pars en avant. À garder pour quand les grinds de base sont automatiques.",
   "en": "A toothpick is grinding on the front peg alone with the back end up. Committing — if the peg catches, you go forward. Save it for when basic grinds are automatic."
  },
  "keywords": [
   "toothpick",
   "tooth pick",
   "c est quoi toothpick",
   "grind"
  ],
  "source": {
   "label": "RSL – Cours",
   "url": "https://rsl-swiss.ch/cours"
  },
  "dynamic": false,
  "verified": "2026-08-28"
 },
 {
  "id": "scooter-crooked",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "C'est quoi un crooked grind ?",
   "de": "C'est quoi un crooked grind ?",
   "it": "C'est quoi un crooked grind ?",
   "en": "What is a crooked grind?"
  },
  "answer": {
   "fr": "Le crooked, c'est un grind sur le peg avant avec la trottinette en biais par rapport à la barre. L'angle est ce qui le rend difficile : trop droit tu perds l'appui, trop de travers tu décroches. Il se travaille après le smith.",
   "de": "Le crooked, c'est un grind sur le peg avant avec la trottinette en biais par rapport à la barre. L'angle est ce qui le rend difficile : trop droit tu perds l'appui, trop de travers tu décroches. Il se travaille après le smith.",
   "it": "Le crooked, c'est un grind sur le peg avant avec la trottinette en biais par rapport à la barre. L'angle est ce qui le rend difficile : trop droit tu perds l'appui, trop de travers tu décroches. Il se travaille après le smith.",
   "en": "A crooked is a front-peg grind with the scooter angled across the rail. The angle is the hard part: too straight and you lose the lock, too sideways and you slip off."
  },
  "keywords": [
   "crooked",
   "crook",
   "c est quoi crooked",
   "grind"
  ],
  "source": {
   "label": "RSL – Cours",
   "url": "https://rsl-swiss.ch/cours"
  },
  "dynamic": false,
  "verified": "2026-08-28"
 },
 {
  "id": "scooter-5050",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "C'est quoi un 50-50 ?",
   "de": "C'est quoi un 50-50 ?",
   "it": "C'est quoi un 50-50 ?",
   "en": "What is a 50-50?"
  },
  "answer": {
   "fr": "Le 50-50, c'est le grind de base : les deux pegs sur la barre, la trottinette parallèle à celle-ci. C'est le premier grind à apprendre, celui sur lequel tous les autres se construisent. Commence sur un ledge bas, cirré, à vitesse modérée et en visant droit.",
   "de": "Le 50-50, c'est le grind de base : les deux pegs sur la barre, la trottinette parallèle à celle-ci. C'est le premier grind à apprendre, celui sur lequel tous les autres se construisent. Commence sur un ledge bas, cirré, à vitesse modérée et en visant droit.",
   "it": "Le 50-50, c'est le grind de base : les deux pegs sur la barre, la trottinette parallèle à celle-ci. C'est le premier grind à apprendre, celui sur lequel tous les autres se construisent. Commence sur un ledge bas, cirré, à vitesse modérée et en visant droit.",
   "en": "The 50-50 is the basic grind: both pegs on the rail, scooter parallel to it. The first grind to learn and the base for all the others."
  },
  "keywords": [
   "50 50",
   "5050",
   "cinquante",
   "c est quoi 50 50",
   "grind",
   "premier grind"
  ],
  "source": {
   "label": "RSL – Cours",
   "url": "https://rsl-swiss.ch/cours"
  },
  "dynamic": false,
  "verified": "2026-08-28"
 },
 {
  "id": "scooter-no-footer",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "C'est quoi un no footer ?",
   "de": "C'est quoi un no footer ?",
   "it": "C'est quoi un no footer ?",
   "en": "What is a no footer?"
  },
  "answer": {
   "fr": "Le no footer, c'est décoller les deux pieds du deck en l'air puis les reposer avant l'atterrissage. Tu tiens le guidon en permanence, donc c'est surtout une question de timing et de confiance. Un bon saut bien maîtrisé suffit pour commencer.",
   "de": "Le no footer, c'est décoller les deux pieds du deck en l'air puis les reposer avant l'atterrissage. Tu tiens le guidon en permanence, donc c'est surtout une question de timing et de confiance. Un bon saut bien maîtrisé suffit pour commencer.",
   "it": "Le no footer, c'est décoller les deux pieds du deck en l'air puis les reposer avant l'atterrissage. Tu tiens le guidon en permanence, donc c'est surtout une question de timing et de confiance. Un bon saut bien maîtrisé suffit pour commencer.",
   "en": "A no footer means taking both feet off the deck mid-air then putting them back before landing. You keep hold of the bar throughout — mostly timing and confidence."
  },
  "keywords": [
   "no footer",
   "nofooter",
   "sans les pieds",
   "c est quoi no footer"
  ],
  "source": {
   "label": "RSL – Cours",
   "url": "https://rsl-swiss.ch/cours"
  },
  "dynamic": false,
  "verified": "2026-08-28"
 },
 {
  "id": "scooter-one-foot",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "C'est quoi un one foot ?",
   "de": "C'est quoi un one foot ?",
   "it": "C'est quoi un one foot ?",
   "en": "What is a one foot?"
  },
  "answer": {
   "fr": "Le one foot, c'est sortir un seul pied du deck en l'air, souvent en le tendant sur le côté ou vers l'avant. C'est le plus accessible des tricks de style, et une bonne préparation au no footer.",
   "de": "Le one foot, c'est sortir un seul pied du deck en l'air, souvent en le tendant sur le côté ou vers l'avant. C'est le plus accessible des tricks de style, et une bonne préparation au no footer.",
   "it": "Le one foot, c'est sortir un seul pied du deck en l'air, souvent en le tendant sur le côté ou vers l'avant. C'est le plus accessible des tricks de style, et une bonne préparation au no footer.",
   "en": "A one foot means extending a single foot off the deck mid-air. The most accessible style trick and good preparation for a no footer."
  },
  "keywords": [
   "one foot",
   "onefoot",
   "un pied",
   "c est quoi one foot"
  ],
  "source": {
   "label": "RSL – Cours",
   "url": "https://rsl-swiss.ch/cours"
  },
  "dynamic": false,
  "verified": "2026-08-28"
 },
 {
  "id": "scooter-can-can",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "C'est quoi un can can ?",
   "de": "C'est quoi un can can ?",
   "it": "C'est quoi un can can ?",
   "en": "What is a can can?"
  },
  "answer": {
   "fr": "Le can can, c'est passer une jambe par-dessus le guidon en l'air, puis la ramener. Ça demande un saut avec un peu de temps de vol, mais aucune rotation, donc c'est plus une question de souplesse que de technique.",
   "de": "Le can can, c'est passer une jambe par-dessus le guidon en l'air, puis la ramener. Ça demande un saut avec un peu de temps de vol, mais aucune rotation, donc c'est plus une question de souplesse que de technique.",
   "it": "Le can can, c'est passer une jambe par-dessus le guidon en l'air, puis la ramener. Ça demande un saut avec un peu de temps de vol, mais aucune rotation, donc c'est plus une question de souplesse que de technique.",
   "en": "A can can means swinging one leg over the bar mid-air and bringing it back. Needs a bit of airtime but no rotation — more flexibility than technique."
  },
  "keywords": [
   "can can",
   "cancan",
   "c est quoi can can"
  ],
  "source": {
   "label": "RSL – Cours",
   "url": "https://rsl-swiss.ch/cours"
  },
  "dynamic": false,
  "verified": "2026-08-28"
 },
 {
  "id": "scooter-x-up",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "C'est quoi un x-up ?",
   "de": "C'est quoi un x-up ?",
   "it": "C'est quoi un x-up ?",
   "en": "What is an x-up?"
  },
  "answer": {
   "fr": "Le x-up, c'est tourner le guidon d'un demi-tour en l'air, bras croisés en X, puis le remettre droit. C'est souvent le premier trick de guidon qu'on apprend, avant le barspin, parce que tu ne lâches jamais les poignées.",
   "de": "Le x-up, c'est tourner le guidon d'un demi-tour en l'air, bras croisés en X, puis le remettre droit. C'est souvent le premier trick de guidon qu'on apprend, avant le barspin, parce que tu ne lâches jamais les poignées.",
   "it": "Le x-up, c'est tourner le guidon d'un demi-tour en l'air, bras croisés en X, puis le remettre droit. C'est souvent le premier trick de guidon qu'on apprend, avant le barspin, parce que tu ne lâches jamais les poignées.",
   "en": "An x-up is turning the bar a half turn mid-air with arms crossed, then straightening it. Often the first bar trick, before a barspin, since you never let go."
  },
  "keywords": [
   "x up",
   "xup",
   "x-up",
   "c est quoi x up",
   "guidon"
  ],
  "source": {
   "label": "RSL – Cours",
   "url": "https://rsl-swiss.ch/cours"
  },
  "dynamic": false,
  "verified": "2026-08-28"
 },
 {
  "id": "scooter-tabletop",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "C'est quoi un tabletop ?",
   "de": "C'est quoi un tabletop ?",
   "it": "C'est quoi un tabletop ?",
   "en": "What is a tabletop?"
  },
  "answer": {
   "fr": "Le tabletop, c'est incliner la trottinette à l'horizontale sur le côté en l'air, comme une table. C'est un trick de style pur : rien ne tourne, tu poses juste la trotti à plat et tu la redresses. Il faut un saut confortable et de la hauteur.",
   "de": "Le tabletop, c'est incliner la trottinette à l'horizontale sur le côté en l'air, comme une table. C'est un trick de style pur : rien ne tourne, tu poses juste la trotti à plat et tu la redresses. Il faut un saut confortable et de la hauteur.",
   "it": "Le tabletop, c'est incliner la trottinette à l'horizontale sur le côté en l'air, comme une table. C'est un trick de style pur : rien ne tourne, tu poses juste la trotti à plat et tu la redresses. Il faut un saut confortable et de la hauteur.",
   "en": "A tabletop means tilting the scooter flat and sideways in the air, like a table. Pure style — nothing rotates. Needs a comfortable jump with height."
  },
  "keywords": [
   "tabletop",
   "table top",
   "c est quoi tabletop",
   "style"
  ],
  "source": {
   "label": "RSL – Cours",
   "url": "https://rsl-swiss.ch/cours"
  },
  "dynamic": false,
  "verified": "2026-08-28"
 },
 {
  "id": "scooter-bar-to-whip",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "C'est quoi un bar to whip ?",
   "de": "C'est quoi un bar to whip ?",
   "it": "C'est quoi un bar to whip ?",
   "en": "What is a bar to whip?"
  },
  "answer": {
   "fr": "Le bar to whip, c'est enchaîner un barspin puis un tailwhip dans le même saut. Les deux tricks doivent être automatiques séparément, et il faut un saut assez haut pour avoir le temps. C'est la première vraie combinaison que la plupart des riders apprennent.",
   "de": "Le bar to whip, c'est enchaîner un barspin puis un tailwhip dans le même saut. Les deux tricks doivent être automatiques séparément, et il faut un saut assez haut pour avoir le temps. C'est la première vraie combinaison que la plupart des riders apprennent.",
   "it": "Le bar to whip, c'est enchaîner un barspin puis un tailwhip dans le même saut. Les deux tricks doivent être automatiques séparément, et il faut un saut assez haut pour avoir le temps. C'est la première vraie combinaison que la plupart des riders apprennent.",
   "en": "A bar to whip links a barspin then a tailwhip in the same jump. Both must be automatic separately, and you need enough airtime."
  },
  "keywords": [
   "bar to whip",
   "bartowhip",
   "combo",
   "c est quoi bar to whip"
  ],
  "source": {
   "label": "RSL – Cours",
   "url": "https://rsl-swiss.ch/cours"
  },
  "dynamic": false,
  "verified": "2026-08-28"
 },
 {
  "id": "scooter-double-whip",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "C'est quoi un double whip ?",
   "de": "C'est quoi un double whip ?",
   "it": "C'est quoi un double whip ?",
   "en": "What is a double whip?"
  },
  "answer": {
   "fr": "Le double whip, c'est deux tours complets du deck dans un seul saut. Il faut un tailwhip très rapide et beaucoup de hauteur, donc il se travaille sur gros module ou en foam pit avant le dur.",
   "de": "Le double whip, c'est deux tours complets du deck dans un seul saut. Il faut un tailwhip très rapide et beaucoup de hauteur, donc il se travaille sur gros module ou en foam pit avant le dur.",
   "it": "Le double whip, c'est deux tours complets du deck dans un seul saut. Il faut un tailwhip très rapide et beaucoup de hauteur, donc il se travaille sur gros module ou en foam pit avant le dur.",
   "en": "A double whip is two full deck rotations in one jump. Needs a fast tailwhip and lots of height — train it into foam first."
  },
  "keywords": [
   "double whip",
   "doublewhip",
   "c est quoi double whip",
   "trick avance"
  ],
  "source": {
   "label": "RSL – Cours",
   "url": "https://rsl-swiss.ch/cours"
  },
  "dynamic": false,
  "verified": "2026-08-28"
 },
 {
  "id": "scooter-finger-whip",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "C'est quoi un finger whip ?",
   "de": "C'est quoi un finger whip ?",
   "it": "C'est quoi un finger whip ?",
   "en": "What is a finger whip?"
  },
  "answer": {
   "fr": "Le finger whip, c'est un tailwhip lancé à la main plutôt qu'au pied : tu attrapes le deck et tu le lances. Ça se pratique souvent à l'arrêt ou en flat, et c'est une bonne façon de comprendre la trajectoire du deck avant le vrai tailwhip.",
   "de": "Le finger whip, c'est un tailwhip lancé à la main plutôt qu'au pied : tu attrapes le deck et tu le lances. Ça se pratique souvent à l'arrêt ou en flat, et c'est une bonne façon de comprendre la trajectoire du deck avant le vrai tailwhip.",
   "it": "Le finger whip, c'est un tailwhip lancé à la main plutôt qu'au pied : tu attrapes le deck et tu le lances. Ça se pratique souvent à l'arrêt ou en flat, et c'est une bonne façon de comprendre la trajectoire du deck avant le vrai tailwhip.",
   "en": "A finger whip is a tailwhip thrown by hand rather than by foot. Often practised stationary or on flat — a good way to understand the deck's path."
  },
  "keywords": [
   "finger whip",
   "fingerwhip",
   "c est quoi finger whip"
  ],
  "source": {
   "label": "RSL – Cours",
   "url": "https://rsl-swiss.ch/cours"
  },
  "dynamic": false,
  "verified": "2026-08-28"
 },
 {
  "id": "scooter-opposite",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "C'est quoi un trick en opposite ?",
   "de": "C'est quoi un trick en opposite ?",
   "it": "C'est quoi un trick en opposite ?",
   "en": "What does opposite mean?"
  },
  "answer": {
   "fr": "Opposite, ou opp, veut dire faire un trick dans le sens inverse de son sens naturel. Un rider complet travaille ses tricks des deux côtés : c'est ce qui ouvre les combinaisons et ce que regardent les juges en contest.",
   "de": "Opposite, ou opp, veut dire faire un trick dans le sens inverse de son sens naturel. Un rider complet travaille ses tricks des deux côtés : c'est ce qui ouvre les combinaisons et ce que regardent les juges en contest.",
   "it": "Opposite, ou opp, veut dire faire un trick dans le sens inverse de son sens naturel. Un rider complet travaille ses tricks des deux côtés : c'est ce qui ouvre les combinaisons et ce que regardent les juges en contest.",
   "en": "Opposite, or opp, means doing a trick the non-natural way round. Complete riders train both sides — it opens up combos and judges notice."
  },
  "keywords": [
   "opposite",
   "opp",
   "sens inverse",
   "c est quoi opposite"
  ],
  "source": {
   "label": "RSL – Cours",
   "url": "https://rsl-swiss.ch/cours"
  },
  "dynamic": false,
  "verified": "2026-08-28"
 },
 {
  "id": "scooter-drop-in",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "C'est quoi un drop in ?",
   "de": "C'est quoi un drop in ?",
   "it": "C'est quoi un drop in ?",
   "en": "What is a drop in?"
  },
  "answer": {
   "fr": "Le drop in, c'est démarrer depuis le haut d'une rampe ou d'un quarter en basculant dedans. Tout se joue sur l'engagement : il faut pousser le poids vers l'avant au moment de basculer. Hésiter en plein milieu est la première cause de chute. Fais-le d'abord sur un petit module avec quelqu'un d'expérimenté à côté.",
   "de": "Le drop in, c'est démarrer depuis le haut d'une rampe ou d'un quarter en basculant dedans. Tout se joue sur l'engagement : il faut pousser le poids vers l'avant au moment de basculer. Hésiter en plein milieu est la première cause de chute. Fais-le d'abord sur un petit module avec quelqu'un d'expérimenté à côté.",
   "it": "Le drop in, c'est démarrer depuis le haut d'une rampe ou d'un quarter en basculant dedans. Tout se joue sur l'engagement : il faut pousser le poids vers l'avant au moment de basculer. Hésiter en plein milieu est la première cause de chute. Fais-le d'abord sur un petit module avec quelqu'un d'expérimenté à côté.",
   "en": "A drop in means starting from the top of a ramp by tipping into it. It's all about commitment: push your weight forward as you tip. Hesitating halfway is the main cause of falls."
  },
  "keywords": [
   "drop in",
   "dropin",
   "c est quoi drop in",
   "rampe",
   "quarter"
  ],
  "source": {
   "label": "RSL – Cours",
   "url": "https://rsl-swiss.ch/cours"
  },
  "dynamic": false,
  "verified": "2026-08-28"
 },
 {
  "id": "scooter-pump",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "C'est quoi pomper dans une transition ?",
   "de": "C'est quoi pomper dans une transition ?",
   "it": "C'est quoi pomper dans une transition ?",
   "en": "What is pumping?"
  },
  "answer": {
   "fr": "Pomper, c'est gagner de la vitesse sans pousser au sol, en fléchissant et en tendant les jambes au bon moment dans la courbe. Tu te détends en bas de la transition et tu te compresses en haut. C'est la base de tout le riding en bowl et en pumptrack.",
   "de": "Pomper, c'est gagner de la vitesse sans pousser au sol, en fléchissant et en tendant les jambes au bon moment dans la courbe. Tu te détends en bas de la transition et tu te compresses en haut. C'est la base de tout le riding en bowl et en pumptrack.",
   "it": "Pomper, c'est gagner de la vitesse sans pousser au sol, en fléchissant et en tendant les jambes au bon moment dans la courbe. Tu te détends en bas de la transition et tu te compresses en haut. C'est la base de tout le riding en bowl et en pumptrack.",
   "en": "Pumping is gaining speed without pushing, by extending and compressing your legs at the right point in the curve. The basis of all bowl and pumptrack riding."
  },
  "keywords": [
   "pump",
   "pomper",
   "pumptrack",
   "transition",
   "bowl",
   "vitesse"
  ],
  "source": {
   "label": "RSL – Cours",
   "url": "https://rsl-swiss.ch/cours"
  },
  "dynamic": false,
  "verified": "2026-08-28"
 },
 {
  "id": "scooter-air",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "C'est quoi un air ?",
   "de": "C'est quoi un air ?",
   "it": "C'est quoi un air ?",
   "en": "What is an air?"
  },
  "answer": {
   "fr": "Un air, c'est un saut hors d'un module de transition, quarter ou bowl, où tu sors au-dessus du coping avant de retomber dedans. La hauteur vient de la vitesse et du pump, pas d'un saut avec les jambes. On mesure souvent un rider à la propreté de ses airs.",
   "de": "Un air, c'est un saut hors d'un module de transition, quarter ou bowl, où tu sors au-dessus du coping avant de retomber dedans. La hauteur vient de la vitesse et du pump, pas d'un saut avec les jambes. On mesure souvent un rider à la propreté de ses airs.",
   "it": "Un air, c'est un saut hors d'un module de transition, quarter ou bowl, où tu sors au-dessus du coping avant de retomber dedans. La hauteur vient de la vitesse et du pump, pas d'un saut avec les jambes. On mesure souvent un rider à la propreté de ses airs.",
   "en": "An air is a jump out of a transition, going above the coping and landing back in. Height comes from speed and pumping, not from jumping."
  },
  "keywords": [
   "air",
   "c est quoi un air",
   "quarter",
   "coping",
   "bowl"
  ],
  "source": {
   "label": "RSL – Cours",
   "url": "https://rsl-swiss.ch/cours"
  },
  "dynamic": false,
  "verified": "2026-08-28"
 },
 {
  "id": "scooter-transfer",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "C'est quoi un transfer ?",
   "de": "C'est quoi un transfer ?",
   "it": "C'est quoi un transfer ?",
   "en": "What is a transfer?"
  },
  "answer": {
   "fr": "Un transfer, c'est passer d'un module à un autre en l'air, au lieu de retomber dans celui d'où tu sors. Ça demande de bien lire le park et de connaître sa vitesse. C'est souvent ce qui fait la différence dans un run de contest.",
   "de": "Un transfer, c'est passer d'un module à un autre en l'air, au lieu de retomber dans celui d'où tu sors. Ça demande de bien lire le park et de connaître sa vitesse. C'est souvent ce qui fait la différence dans un run de contest.",
   "it": "Un transfer, c'est passer d'un module à un autre en l'air, au lieu de retomber dans celui d'où tu sors. Ça demande de bien lire le park et de connaître sa vitesse. C'est souvent ce qui fait la différence dans un run de contest.",
   "en": "A transfer means going from one obstacle to another in the air instead of landing back where you took off. Requires reading the park and knowing your speed."
  },
  "keywords": [
   "transfer",
   "c est quoi transfer",
   "module",
   "contest"
  ],
  "source": {
   "label": "RSL – Cours",
   "url": "https://rsl-swiss.ch/cours"
  },
  "dynamic": false,
  "verified": "2026-08-28"
 },
 {
  "id": "scooter-tailtap",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "C'est quoi un tailtap ?",
   "de": "C'est quoi un tailtap ?",
   "it": "C'est quoi un tailtap ?",
   "en": "What is a tailtap?"
  },
  "answer": {
   "fr": "Le tailtap, c'est venir poser le tail du deck sur le coping en haut d'un quarter, marquer un temps, puis redescendre. C'est un bon premier trick de coping, plus accessible qu'un vrai stall, et il apprend à gérer la hauteur.",
   "de": "Le tailtap, c'est venir poser le tail du deck sur le coping en haut d'un quarter, marquer un temps, puis redescendre. C'est un bon premier trick de coping, plus accessible qu'un vrai stall, et il apprend à gérer la hauteur.",
   "it": "Le tailtap, c'est venir poser le tail du deck sur le coping en haut d'un quarter, marquer un temps, puis redescendre. C'est un bon premier trick de coping, plus accessible qu'un vrai stall, et il apprend à gérer la hauteur.",
   "en": "A tailtap means setting the tail of the deck on the coping at the top of a quarter, pausing, then dropping back in. A good first coping trick."
  },
  "keywords": [
   "tailtap",
   "tail tap",
   "c est quoi tailtap",
   "coping",
   "quarter"
  ],
  "source": {
   "label": "RSL – Cours",
   "url": "https://rsl-swiss.ch/cours"
  },
  "dynamic": false,
  "verified": "2026-08-28"
 },
 {
  "id": "scooter-backflip",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "C'est quoi un backflip ?",
   "de": "C'est quoi un backflip ?",
   "it": "C'est quoi un backflip ?",
   "en": "What is a backflip?"
  },
  "answer": {
   "fr": "Le backflip, c'est une rotation complète vers l'arrière dans l'axe horizontal. C'est un trick à risque réel de blessure à la tête et à la nuque : il s'apprend en foam pit ou sur airbag, avec un encadrement, jamais en autodidacte sur du dur. Si tu es mineur, parles-en à un coach avant d'essayer quoi que ce soit.",
   "de": "Le backflip, c'est une rotation complète vers l'arrière dans l'axe horizontal. C'est un trick à risque réel de blessure à la tête et à la nuque : il s'apprend en foam pit ou sur airbag, avec un encadrement, jamais en autodidacte sur du dur. Si tu es mineur, parles-en à un coach avant d'essayer quoi que ce soit.",
   "it": "Le backflip, c'est une rotation complète vers l'arrière dans l'axe horizontal. C'est un trick à risque réel de blessure à la tête et à la nuque : il s'apprend en foam pit ou sur airbag, avec un encadrement, jamais en autodidacte sur du dur. Si tu es mineur, parles-en à un coach avant d'essayer quoi que ce soit.",
   "en": "A backflip is a full backwards rotation. Real risk of head and neck injury: learn it into a foam pit or airbag with supervision, never self-taught on hard ground."
  },
  "keywords": [
   "backflip",
   "back flip",
   "salto arriere",
   "c est quoi backflip",
   "flip"
  ],
  "source": {
   "label": "RSL – Cours",
   "url": "https://rsl-swiss.ch/cours"
  },
  "dynamic": false,
  "verified": "2026-08-28"
 },
 {
  "id": "scooter-frontflip",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "C'est quoi un frontflip ?",
   "de": "C'est quoi un frontflip ?",
   "it": "C'est quoi un frontflip ?",
   "en": "What is a frontflip?"
  },
  "answer": {
   "fr": "Le frontflip, c'est la rotation vers l'avant. Plus difficile à contrôler que le backflip parce que tu perds le repère visuel de la réception plus longtemps. Même règle : foam pit ou airbag et encadrement, jamais directement sur un module en dur.",
   "de": "Le frontflip, c'est la rotation vers l'avant. Plus difficile à contrôler que le backflip parce que tu perds le repère visuel de la réception plus longtemps. Même règle : foam pit ou airbag et encadrement, jamais directement sur un module en dur.",
   "it": "Le frontflip, c'est la rotation vers l'avant. Plus difficile à contrôler que le backflip parce que tu perds le repère visuel de la réception plus longtemps. Même règle : foam pit ou airbag et encadrement, jamais directement sur un module en dur.",
   "en": "A frontflip rotates forwards. Harder to control than a backflip because you lose sight of the landing for longer. Foam pit or airbag with supervision only."
  },
  "keywords": [
   "frontflip",
   "front flip",
   "salto avant",
   "c est quoi frontflip",
   "flip"
  ],
  "source": {
   "label": "RSL – Cours",
   "url": "https://rsl-swiss.ch/cours"
  },
  "dynamic": false,
  "verified": "2026-08-28"
 },
 {
  "id": "scooter-flair",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "C'est quoi un flair ?",
   "de": "C'est quoi un flair ?",
   "it": "C'est quoi un flair ?",
   "en": "What is a flair?"
  },
  "answer": {
   "fr": "Le flair, c'est un backflip combiné à un 180, exécuté dans un quarter : tu pars en avant et tu retombes dans la rampe en fakie. C'est un trick de haut niveau qui cumule les risques du backflip et d'une réception en fakie. Il ne s'apprend qu'avec un encadrement et une progression en airbag.",
   "de": "Le flair, c'est un backflip combiné à un 180, exécuté dans un quarter : tu pars en avant et tu retombes dans la rampe en fakie. C'est un trick de haut niveau qui cumule les risques du backflip et d'une réception en fakie. Il ne s'apprend qu'avec un encadrement et une progression en airbag.",
   "it": "Le flair, c'est un backflip combiné à un 180, exécuté dans un quarter : tu pars en avant et tu retombes dans la rampe en fakie. C'est un trick de haut niveau qui cumule les risques du backflip et d'une réception en fakie. Il ne s'apprend qu'avec un encadrement et une progression en airbag.",
   "en": "A flair is a backflip combined with a 180 in a quarter, landing back in fakie. High level, stacking backflip risk with a fakie landing. Supervised airbag progression only."
  },
  "keywords": [
   "flair",
   "c est quoi flair",
   "quarter",
   "trick avance",
   "flip"
  ],
  "source": {
   "label": "RSL – Cours",
   "url": "https://rsl-swiss.ch/cours"
  },
  "dynamic": false,
  "verified": "2026-08-28"
 },
 {
  "id": "scooter-coping",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "C'est quoi le coping ?",
   "de": "C'est quoi le coping ?",
   "it": "C'est quoi le coping ?",
   "en": "What is coping?"
  },
  "answer": {
   "fr": "Le coping, c'est le tube métallique qui borde le haut d'un quarter, d'une rampe ou d'un bowl. Il sert de repère pour les airs et de surface de grind ou de stall. Quand un rider dit qu'il « touche le coping », il sort juste au niveau du bord.",
   "de": "Le coping, c'est le tube métallique qui borde le haut d'un quarter, d'une rampe ou d'un bowl. Il sert de repère pour les airs et de surface de grind ou de stall. Quand un rider dit qu'il « touche le coping », il sort juste au niveau du bord.",
   "it": "Le coping, c'est le tube métallique qui borde le haut d'un quarter, d'une rampe ou d'un bowl. Il sert de repère pour les airs et de surface de grind ou de stall. Quand un rider dit qu'il « touche le coping », il sort juste au niveau du bord.",
   "en": "Coping is the metal tube along the top edge of a quarter, ramp or bowl. A reference point for airs and a surface for grinds and stalls."
  },
  "keywords": [
   "coping",
   "c est quoi coping",
   "quarter",
   "bowl",
   "vocabulaire"
  ],
  "source": {
   "label": "RSL – Cours",
   "url": "https://rsl-swiss.ch/cours"
  },
  "dynamic": false,
  "verified": "2026-08-28"
 },
 {
  "id": "scooter-run",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "C'est quoi un run ?",
   "de": "C'est quoi un run ?",
   "it": "C'est quoi un run ?",
   "en": "What is a run?"
  },
  "answer": {
   "fr": "Un run, c'est ton passage chronométré en contest, souvent 45 à 60 secondes, pendant lequel tu enchaînes tes tricks. Les juges regardent la difficulté, la propreté, l'usage du park et l'originalité. Un run bien construit vaut souvent mieux qu'un gros trick isolé raté.",
   "de": "Un run, c'est ton passage chronométré en contest, souvent 45 à 60 secondes, pendant lequel tu enchaînes tes tricks. Les juges regardent la difficulté, la propreté, l'usage du park et l'originalité. Un run bien construit vaut souvent mieux qu'un gros trick isolé raté.",
   "it": "Un run, c'est ton passage chronométré en contest, souvent 45 à 60 secondes, pendant lequel tu enchaînes tes tricks. Les juges regardent la difficulté, la propreté, l'usage du park et l'originalité. Un run bien construit vaut souvent mieux qu'un gros trick isolé raté.",
   "en": "A run is your timed contest pass, often 45 to 60 seconds. Judges look at difficulty, cleanliness, use of the park and originality."
  },
  "keywords": [
   "run",
   "c est quoi un run",
   "contest",
   "competition",
   "juges"
  ],
  "source": {
   "label": "RSL – Cours",
   "url": "https://rsl-swiss.ch/cours"
  },
  "dynamic": false,
  "verified": "2026-08-28"
 },
 {
  "id": "scooter-sketchy-vs-clean",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "C'est quoi un trick clean ou sketchy ?",
   "de": "C'est quoi un trick clean ou sketchy ?",
   "it": "C'est quoi un trick clean ou sketchy ?",
   "en": "What do clean and sketchy mean?"
  },
  "answer": {
   "fr": "Clean veut dire propre : réception stable, pieds bien posés, pas de rattrapage. Sketchy veut dire l'inverse : le trick passe mais mal, avec un déséquilibre visible. En contest, un trick facile mais clean marque souvent mieux qu'un trick dur et sketchy.",
   "de": "Clean veut dire propre : réception stable, pieds bien posés, pas de rattrapage. Sketchy veut dire l'inverse : le trick passe mais mal, avec un déséquilibre visible. En contest, un trick facile mais clean marque souvent mieux qu'un trick dur et sketchy.",
   "it": "Clean veut dire propre : réception stable, pieds bien posés, pas de rattrapage. Sketchy veut dire l'inverse : le trick passe mais mal, avec un déséquilibre visible. En contest, un trick facile mais clean marque souvent mieux qu'un trick dur et sketchy.",
   "en": "Clean means a stable, tidy landing. Sketchy means it went through but badly, with visible imbalance. In a contest a clean easy trick often scores better than a sketchy hard one."
  },
  "keywords": [
   "clean",
   "sketchy",
   "propre",
   "c est quoi clean",
   "c est quoi sketchy",
   "vocabulaire"
  ],
  "source": {
   "label": "RSL – Cours",
   "url": "https://rsl-swiss.ch/cours"
  },
  "dynamic": false,
  "verified": "2026-08-28"
 },
 {
  "id": "scooter-bail",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "C'est quoi un bail ?",
   "de": "C'est quoi un bail ?",
   "it": "C'est quoi un bail ?",
   "en": "What is a bail?"
  },
  "answer": {
   "fr": "Un bail, c'est abandonner volontairement un trick en cours pour éviter une chute pire. Savoir bailer, c'est une compétence à part entière : jeter la trottinette et retomber sur les pieds évite beaucoup de blessures. On l'apprend en même temps que les tricks, pas après.",
   "de": "Un bail, c'est abandonner volontairement un trick en cours pour éviter une chute pire. Savoir bailer, c'est une compétence à part entière : jeter la trottinette et retomber sur les pieds évite beaucoup de blessures. On l'apprend en même temps que les tricks, pas après.",
   "it": "Un bail, c'est abandonner volontairement un trick en cours pour éviter une chute pire. Savoir bailer, c'est une compétence à part entière : jeter la trottinette et retomber sur les pieds évite beaucoup de blessures. On l'apprend en même temps que les tricks, pas après.",
   "en": "A bail is deliberately abandoning a trick mid-way to avoid a worse crash. Knowing how to bail — ditching the scooter and landing on your feet — prevents a lot of injuries."
  },
  "keywords": [
   "bail",
   "c est quoi bail",
   "chute",
   "securite",
   "vocabulaire"
  ],
  "source": {
   "label": "RSL – Cours",
   "url": "https://rsl-swiss.ch/cours"
  },
  "dynamic": false,
  "verified": "2026-08-28"
 },
 {
  "id": "scooter-session",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "C'est quoi une session ?",
   "de": "C'est quoi une session ?",
   "it": "C'est quoi une session ?",
   "en": "What is a session?"
  },
  "answer": {
   "fr": "Une session, c'est simplement un moment de ride, seul ou à plusieurs. Sur RIDLY, le temps passé sur un spot compte : chaque heure de session vaut un point sur ce spot. C'est ce qui alimente ton profil et le classement.",
   "de": "Une session, c'est simplement un moment de ride, seul ou à plusieurs. Sur RIDLY, le temps passé sur un spot compte : chaque heure de session vaut un point sur ce spot. C'est ce qui alimente ton profil et le classement.",
   "it": "Une session, c'est simplement un moment de ride, seul ou à plusieurs. Sur RIDLY, le temps passé sur un spot compte : chaque heure de session vaut un point sur ce spot. C'est ce qui alimente ton profil et le classement.",
   "en": "A session is simply time spent riding. On RIDLY, time at a spot counts: each hour is one point on that spot, feeding your profile and the leaderboard."
  },
  "keywords": [
   "session",
   "c est quoi une session",
   "sesh",
   "points",
   "vocabulaire"
  ],
  "source": {
   "label": "RSL – Cours",
   "url": "https://rsl-swiss.ch/cours"
  },
  "dynamic": false,
  "verified": "2026-08-28"
 },
 {
  "id": "swiss-skate-official",
  "category": "Fédération suisse",
  "questions": {
   "fr": "C’est qui Swiss Skate ?",
   "de": "Was ist Swiss Skate?",
   "it": "Cos’è Swiss Skate?",
   "en": "What is Swiss Skate?"
  },
  "answer": {
   "fr": "Swiss Skate est l’association faîtière officielle du sport à roulettes en Suisse. Elle a été fondée en avril 2019 et est reconnue par Swiss Olympic depuis le 1er janvier 2020. Swiss Skate représente la Suisse auprès de World Skate et coordonne aussi la collaboration avec Swiss Olympic et l’Office fédéral du sport (OFSPO). La trottinette freestyle / Scooter fait officiellement partie de ses disciplines. Pour la trottinette, Swiss Skate sélectionne et engage notamment des riders suisses aux compétitions internationales comme les World Skate Games, les Championnats du monde et certaines étapes du Scootering Pro Tour. En Suisse romande, pour les infos pratiques, cours, événements et communauté trottinette freestyle, Lya met surtout en avant la RSL et ses partenaires.",
   "de": "Swiss Skate ist der offizielle Dachverband des Rollsports in der Schweiz. Er wurde im April 2019 gegründet und ist seit dem 1. Januar 2020 von Swiss Olympic anerkannt. Swiss Skate vertritt die Schweiz gegenüber World Skate und koordiniert die Zusammenarbeit mit Swiss Olympic und dem Bundesamt für Sport (BASPO). Freestyle-Scootering / Scooter gehört offiziell zu seinen Sportarten. Im Scooter-Bereich selektioniert und entsendet Swiss Skate Schweizer Rider unter anderem an die World Skate Games, Weltmeisterschaften und ausgewählte Stationen der Scootering Pro Tour. Für praktische Infos, Kurse, Events und die Freestyle-Scooter-Community in der Romandie stellt Lya vor allem die RSL und ihre Partner in den Vordergrund.",
   "it": "Swiss Skate è l’associazione mantello ufficiale degli sport a rotelle in Svizzera. È stata fondata nell’aprile 2019 ed è riconosciuta da Swiss Olympic dal 1° gennaio 2020. Swiss Skate rappresenta la Svizzera presso World Skate e coordina la collaborazione con Swiss Olympic e con l’Ufficio federale dello sport (UFSPO). Il monopattino freestyle / Scooter fa ufficialmente parte delle sue discipline. Per il monopattino, Swiss Skate seleziona e iscrive rider svizzeri a competizioni internazionali come i World Skate Games, i Campionati del mondo e alcune tappe dello Scootering Pro Tour. Per informazioni pratiche, corsi, eventi e community del monopattino freestyle nella Svizzera romanda, Lya mette soprattutto in evidenza la RSL e i suoi partner.",
   "en": "Swiss Skate is the official umbrella association for roller sports in Switzerland. It was founded in April 2019 and has been recognised by Swiss Olympic since 1 January 2020. Swiss Skate represents Switzerland within World Skate and coordinates cooperation with Swiss Olympic and the Federal Office of Sport (FOSPO). Freestyle scootering / Scooter is officially one of its disciplines. In scootering, Swiss Skate selects and enters Swiss riders for international competitions such as the World Skate Games, World Championships and selected Scootering Pro Tour events. For practical information, lessons, events and the freestyle scooter community in French-speaking Switzerland, Lya mainly highlights RSL and its partners."
  },
  "keywords": [
   "swiss skate",
   "swissskate",
   "swiss ket",
   "swissket",
   "swiss sket",
   "fédération sport à roulettes suisse",
   "federation sport a roulettes suisse",
   "fédération suisse trottinette",
   "federation suisse trottinette",
   "fédération trottinette suisse",
   "federation trottinette suisse",
   "dachverband rollsport schweiz",
   "world skate suisse",
   "swiss olympic scooter",
   "ofspo sport roulettes"
  ],
  "source": {
   "label": "Swiss Skate – Fédération",
   "url": "https://www.swissskate.ch/fr/federation/federation/"
  },
  "dynamic": false,
  "verified": "2026-08-27"
 },
 {
  "id": "swiss-skate-vs-ssa",
  "category": "Fédération suisse",
  "questions": {
   "fr": "Quelle différence entre Swiss Skate et Swiss Scoot Academy ?",
   "de": "Was ist der Unterschied zwischen Swiss Skate und Swiss Scoot Academy?",
   "it": "Qual è la differenza tra Swiss Skate e Swiss Scoot Academy?",
   "en": "What is the difference between Swiss Skate and Swiss Scoot Academy?"
  },
  "answer": {
   "fr": "Ce sont deux choses totalement différentes. Swiss Skate est l’association faîtière officielle du sport à roulettes en Suisse, reconnue par Swiss Olympic et représentante suisse auprès de World Skate. Elle encadre notamment la représentation nationale en trottinette freestyle. Swiss Scoot Academy (SSA), elle, est une structure privée de coaching/cours. SSA n’est ni Swiss Skate, ni la fédération suisse, ni une branche officielle de Swiss Skate d’après les informations publiques vérifiées. Quand Lya parle de sélection suisse, de licence fédérale, de World Skate ou de représentation officielle de la Suisse, il s’agit de Swiss Skate — pas de SSA.",
   "de": "Das sind zwei völlig verschiedene Dinge. Swiss Skate ist der offizielle Dachverband des Rollsports in der Schweiz, von Swiss Olympic anerkannt und die Schweizer Vertretung bei World Skate. Er ist unter anderem für die nationale Vertretung im Freestyle-Scootering zuständig. Die Swiss Scoot Academy (SSA) ist dagegen eine private Coaching-/Kursstruktur. Nach den öffentlich überprüften Informationen ist SSA weder Swiss Skate noch der Schweizer Verband noch eine offizielle Unterorganisation von Swiss Skate. Wenn Lya von Schweizer Selektion, Verbandslizenz, World Skate oder offizieller Vertretung der Schweiz spricht, ist Swiss Skate gemeint — nicht SSA.",
   "it": "Sono due realtà completamente diverse. Swiss Skate è l’associazione mantello ufficiale degli sport a rotelle in Svizzera, riconosciuta da Swiss Olympic e rappresentante svizzera presso World Skate. Si occupa tra l’altro della rappresentanza nazionale nel monopattino freestyle. Swiss Scoot Academy (SSA) è invece una struttura privata di coaching/corsi. In base alle informazioni pubbliche verificate, SSA non è Swiss Skate, non è la federazione svizzera e non è una sua sezione ufficiale. Quando Lya parla di selezione svizzera, licenza federale, World Skate o rappresentanza ufficiale della Svizzera, si riferisce a Swiss Skate — non a SSA.",
   "en": "They are two completely different things. Swiss Skate is the official umbrella association for roller sports in Switzerland, recognised by Swiss Olympic and representing Switzerland within World Skate. It is involved in Switzerland’s official representation in freestyle scootering. Swiss Scoot Academy (SSA), by contrast, is a private coaching/lesson structure. Based on the public information verified, SSA is not Swiss Skate, not the Swiss federation and not an official branch of Swiss Skate. When Lya talks about Swiss national selection, federation licences, World Skate or official representation of Switzerland, she means Swiss Skate — not SSA."
  },
  "keywords": [
   "swiss skate vs ssa",
   "différence swiss skate ssa",
   "difference swiss skate ssa",
   "swiss scoot academy swiss skate",
   "ssa swiss skate",
   "confondre swiss skate ssa",
   "fédération ou académie"
  ],
  "source": {
   "label": "Swiss Skate – Fédération",
   "url": "https://www.swissskate.ch/fr/federation/federation/"
  },
  "dynamic": false,
  "verified": "2026-08-27"
 },
 {
  "id": "academy-swiss-scoot",
  "category": "Académies / cours Suisse",
  "questions": {
   "fr": "C’est quoi Swiss Scoot Academy / SSA ?",
   "de": "Was ist die Swiss Scoot Academy / SSA?",
   "it": "Cos’è la Swiss Scoot Academy / SSA?",
   "en": "What is Swiss Scoot Academy / SSA?"
  },
  "answer": {
   "fr": "Swiss Scoot Academy (SSA) est une académie / offre de coaching en trottinette freestyle qui communique principalement autour de Genève et Lausanne. Elle annonce des cours, camps, préparation aux compétitions et événements. SSA n’est pas partenaire de RIDLY/RSL. Dans les informations publiques que j’ai pu vérifier, son statut d’association, son organisation juridique et la continuité exacte de ses prestations ne sont pas clairement documentés ; je ne la présente donc ni comme une fédération ni comme une association officielle. Avant de payer une inscription ou un camp, demande qui facture, le numéro CHE ou l’identité juridique de la structure, le responsable du cours, les qualifications du coach, l’assurance, les dates réellement garanties et les conditions d’annulation/remboursement.",
   "de": "Die Swiss Scoot Academy (SSA) ist eine Freestyle-Scooter-Akademie bzw. ein Coaching-Angebot, das hauptsächlich im Raum Genf und Lausanne auftritt. Angeboten werden Kurse, Camps, Wettkampfvorbereitung und Events. SSA ist kein Partner von RIDLY/RSL. In den öffentlich zugänglichen Informationen, die ich prüfen konnte, sind Vereinsstatus, rechtliche Organisation und die genaue Kontinuität der Leistungen nicht klar dokumentiert; deshalb stelle ich SSA weder als Verband noch als offiziellen Verein dar. Vor einer Zahlung solltest du klären, wer die Rechnung stellt, welche CHE-Nummer bzw. Rechtseinheit dahintersteht, wer den Kurs verantwortet, welche Qualifikationen und Versicherungen bestehen, welche Termine garantiert sind und welche Storno-/Rückerstattungsregeln gelten.",
   "it": "Swiss Scoot Academy (SSA) è un’accademia / offerta di coaching di monopattino freestyle che comunica soprattutto nell’area Ginevra-Losanna. Annuncia corsi, camp, preparazione alle competizioni ed eventi. SSA non è partner di RIDLY/RSL. Nelle informazioni pubbliche che ho potuto verificare, lo statuto associativo, l’organizzazione giuridica e la continuità esatta delle prestazioni non sono documentati in modo chiaro; quindi non la presento né come federazione né come associazione ufficiale. Prima di pagare un’iscrizione o un camp, chiedi chi emette la fattura, il numero CHE o l’identità giuridica, il responsabile del corso, le qualifiche del coach, l’assicurazione, le date realmente garantite e le condizioni di annullamento/rimborso.",
   "en": "Swiss Scoot Academy (SSA) is a freestyle-scooter academy / coaching offer that mainly operates around Geneva and Lausanne. It advertises lessons, camps, competition preparation and events. SSA is not a RIDLY/RSL partner. In the public information I could verify, its association status, legal organisation and exact continuity of services are not clearly documented, so I do not present it as a federation or an official association. Before paying for lessons or a camp, ask who invoices you, the CHE number or legal entity, who is responsible for the course, the coach’s qualifications, insurance, the dates actually guaranteed, and the cancellation/refund terms."
  },
  "keywords": [
   "ssa",
   "swiss scoot academy",
   "swiss scooter academy",
   "swissscootacademy",
   "academy suisse",
   "académie trottinette genève",
   "académie trottinette lausanne",
   "scooter academy geneva",
   "scooter academy lausanne",
   "swiss scoot academy instagram",
   "ssa instagram",
   "instagram ssa",
   "swiss scoot academy insta",
   "ssa insta",
   "swissscootacademy.com"
  ],
  "source": {
   "label": "Swiss Scoot Academy – informations publiques",
   "url": "https://swissscootacademy.com/"
  },
  "dynamic": false,
  "verified": "2026-08-27"
 },
 {
  "id": "academy-swiss-scoot-caution",
  "category": "Académies / cours Suisse",
  "questions": {
   "fr": "Est-ce que Swiss Scoot Academy est fiable / une association ?",
   "de": "Ist die Swiss Scoot Academy seriös / ein Verein?",
   "it": "Swiss Scoot Academy è affidabile / un’associazione?",
   "en": "Is Swiss Scoot Academy reliable / an association?"
  },
  "answer": {
   "fr": "Je reste sur ce qui est vérifiable : je n’ai pas assez d’éléments publics pour dire que Swiss Scoot Academy est une « arnaque » ou qu’elle existe uniquement pour gagner de l’argent. En revanche, je n’ai pas trouvé dans les informations publiques consultées de statut d’association clairement affiché ni de documentation suffisamment claire pour garantir la continuité future des cours, camps ou accompagnements annoncés. SSA n’est pas partenaire de RIDLY/RSL. Si tu envisages de payer, demande avant l’inscription : l’entité qui facture et son numéro CHE, le nom du responsable, les qualifications du coach, l’assurance, les dates et le nombre de séances garantis, ainsi que les conditions d’annulation et de remboursement. Si ces informations ne sont pas claires par écrit, mieux vaut demander des précisions avant de payer.",
   "de": "Ich bleibe bei überprüfbaren Fakten: Ich habe nicht genügend öffentliche Belege, um die Swiss Scoot Academy als „Betrug“ zu bezeichnen oder zu behaupten, sie existiere nur zum Geldverdienen. In den von mir geprüften öffentlichen Informationen fand ich jedoch keinen klar ausgewiesenen Vereinsstatus und keine ausreichend klare Dokumentation, die eine zukünftige Kontinuität der angekündigten Kurse, Camps oder Coachings garantiert. SSA ist kein RIDLY/RSL-Partner. Vor einer Zahlung solltest du die rechnungsstellende Rechtseinheit und CHE-Nummer, die verantwortliche Person, Coach-Qualifikationen, Versicherung, garantierte Termine und Anzahl Lektionen sowie Storno-/Rückerstattungsbedingungen schriftlich verlangen. Sind diese Punkte unklar, solltest du vor der Zahlung nachfragen.",
   "it": "Resto sui fatti verificabili: non ho abbastanza elementi pubblici per definire Swiss Scoot Academy una “truffa” o dire che esista solo per guadagnare denaro. Tuttavia, nelle informazioni pubbliche consultate non ho trovato uno statuto associativo chiaramente esposto né una documentazione abbastanza chiara da garantire la continuità futura dei corsi, camp o accompagnamenti annunciati. SSA non è partner di RIDLY/RSL. Prima di pagare, chiedi per iscritto: soggetto che fattura e numero CHE, responsabile, qualifiche del coach, assicurazione, date e numero di lezioni garantite, condizioni di annullamento e rimborso. Se questi elementi non sono chiari, meglio chiedere precisazioni prima del pagamento.",
   "en": "I’ll stick to verifiable facts: I do not have enough public evidence to call Swiss Scoot Academy a “scam” or say it exists only to make money. However, in the public information I checked, I did not find a clearly displayed association status or documentation clear enough to guarantee the future continuity of the lessons, camps or coaching advertised. SSA is not a RIDLY/RSL partner. Before paying, ask in writing for the invoicing legal entity and CHE number, the responsible person, coach qualifications, insurance, guaranteed dates and number of sessions, plus cancellation and refund terms. If these points are unclear, ask for clarification before paying."
  },
  "keywords": [
   "ssa fiable",
   "ssa association",
   "ssa arnaque",
   "swiss scoot academy fiable",
   "swiss scoot academy association",
   "swiss scoot academy club",
   "swiss scoot academy cours",
   "swiss scoot academy camp",
   "swiss scoot academy payer",
   "swiss scoot academy inscription",
   "swiss scooter academy fiable",
   "ssa che",
   "ssa assurance",
   "ssa remboursement"
  ],
  "source": {
   "label": "Swiss Scoot Academy – informations publiques consultées",
   "url": "https://swissscootacademy.com/"
  },
  "dynamic": false,
  "verified": "2026-08-27"
 },
 {
  "id": "academy-paid-checklist",
  "category": "Académies / cours Suisse",
  "questions": {
   "fr": "Comment vérifier une académie ou un club payant avant de s’inscrire ?",
   "de": "Wie prüfe ich eine kostenpflichtige Akademie oder einen Club vor der Anmeldung?",
   "it": "Come verificare un’accademia o un club a pagamento prima di iscriversi?",
   "en": "How do I check a paid academy or club before signing up?"
  },
  "answer": {
   "fr": "Pour n’importe quelle académie, école ou club payant, Lya distingue quatre choses : partenaire RIDLY/RSL, association ou fédération officiellement identifiable, structure commerciale identifiable, ou statut public non vérifié. Avant de payer, vérifie au minimum : qui facture et sous quelle entité/numéro CHE, qui est responsable, les qualifications des coachs, l’assurance, les dates et le nombre de séances garantis, le lieu, le prix total, et les conditions d’annulation/remboursement. Une belle page Instagram ou un site ne suffit pas à prouver le statut ou la continuité d’une structure.",
   "de": "Bei jeder kostenpflichtigen Akademie, Schule oder jedem Club unterscheidet Lya vier Punkte: RIDLY/RSL-Partner, klar identifizierbarer offizieller Verein/Verband, identifizierbares kommerzielles Unternehmen oder öffentlich nicht verifizierter Status. Vor einer Zahlung solltest du mindestens prüfen: Wer stellt die Rechnung und unter welcher Rechtseinheit/CHE-Nummer, wer ist verantwortlich, Coach-Qualifikationen, Versicherung, garantierte Termine und Anzahl Lektionen, Ort, Gesamtpreis sowie Storno-/Rückerstattungsbedingungen. Eine schöne Instagram-Seite oder Website beweist weder den Status noch die langfristige Kontinuität einer Struktur.",
   "it": "Per qualsiasi accademia, scuola o club a pagamento, Lya distingue quattro situazioni: partner RIDLY/RSL, associazione o federazione ufficialmente identificabile, struttura commerciale identificabile, oppure statuto pubblico non verificato. Prima di pagare, verifica almeno: chi fattura e con quale entità/numero CHE, chi è il responsabile, qualifiche dei coach, assicurazione, date e numero di lezioni garantite, luogo, prezzo totale e condizioni di annullamento/rimborso. Una bella pagina Instagram o un sito non dimostrano da soli lo statuto o la continuità di una struttura.",
   "en": "For any paid academy, school or club, Lya distinguishes four situations: a RIDLY/RSL partner, an officially identifiable association/federation, an identifiable commercial entity, or a publicly unverified status. Before paying, check at minimum: who invoices you and under which legal entity/CHE number, who is responsible, coach qualifications, insurance, guaranteed dates and number of sessions, location, total price, and cancellation/refund terms. A polished Instagram page or website alone does not prove a structure’s legal status or long-term continuity."
  },
  "keywords": [
   "club payant fiable",
   "académie fiable",
   "academy fiable",
   "avant de payer cours",
   "vérifier association",
   "verifier association",
   "numéro che club",
   "numero che club",
   "assurance cours",
   "remboursement cours",
   "statut académie",
   "statut academy",
   "club association ou entreprise"
  ],
  "source": {
   "label": "Guide de prudence RIDLY",
   "url": "https://rsl-swiss.ch"
  },
  "dynamic": false,
  "verified": "2026-08-27"
 },
 {
  "id": "scooter-foamy-grips",
  "category": "Matériel trottinette",
  "questions": {
   "fr": "C’est quoi Foamy Grips ?",
   "de": "Was sind Foamy Grips?",
   "it": "Cosa sono le Foamy Grips?",
   "en": "What are Foamy Grips?"
  },
  "answer": {
   "fr": "Foamy Grips désigne des poignées en mousse associées à Karim Héritier. Lya reconnaît aussi les écritures approximatives comme « foami grip », « foamy grippe », « faux mi grippe » ou « fromeryp ». D’après les informations disponibles dans la base RIDLY, ces poignées sont fabriquées par Dongguan Haoqi Industrial, un fabricant proposant de l’OEM/ODM et de la personnalisation : il s’agit donc d’un principe de marque blanche, avec un produit fabriqué par le fournisseur puis personnalisé pour la marque. Lya peut aussi proposer des alternatives sans pousser systématiquement JF Ride Shop.",
   "de": "Foamy Grips sind Schaumstoff-Griffe, die mit Karim Héritier verbunden sind. Ungefähre Schreibweisen werden ebenfalls erkannt. Aussagen wie « Designed in Switzerland » werden ohne überprüfbare offizielle Quelle nicht als wahr oder falsch dargestellt.",
   "it": "Foamy Grips sono manopole in schiuma associate a Karim Héritier. Lya riconosce anche grafie approssimative e non presenta affermazioni come « Designed in Switzerland » come vere o false senza una fonte ufficiale verificabile.",
   "en": "Foamy Grips are foam grips associated with Karim Héritier. Lya also recognizes approximate spellings and does not label marketing claims such as “Designed in Switzerland” true or false without a verifiable official source."
  },
  "keywords": [
   "foamy grips",
   "foamy grip",
   "foami grip",
   "fomy grip",
   "faumy grip",
   "foamy grippe",
   "faux mi grippe",
   "faux mi grip",
   "fromeryp",
   "fromerip",
   "foamygrip",
   "foamygrips",
   "grip mousse",
   "poignees mousse",
   "poignées mousse",
   "karim grip",
   "karim grips",
   "grips karim",
   "poignées karim",
   "poignees karim",
   "karim héritier grip",
   "karim heritier grip",
   "marque blanche",
   "white label",
   "oem",
   "odm",
   "dongguan haoqi",
   "haoqi"
  ],
  "source": {
   "label": "Base matériel RIDLY",
   "url": "https://www.jfrideshop.ch/"
  },
  "dynamic": false,
  "verified": "2026-08-27"
 },
 {
  "id": "scooter-beginner-start",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "Je veux commencer la trottinette freestyle, par où commencer ?",
   "de": "Wie fange ich mit Freestyle-Scooter an?",
   "it": "Come iniziare con il monopattino freestyle?",
   "en": "How do I start freestyle scootering?"
  },
  "answer": {
   "fr": "Pour débuter, choisis d’abord une trottinette à ta taille, solide et pas trop lourde. Ensuite commence par la position, le freinage, les virages et un bunny hop propre avant de passer aux figures. Donne-moi ta taille, ton style Park/Street/polyvalent et ton budget si tu veux une recommandation de modèle.",
   "de": "Zum Einstieg brauchst du zuerst einen passenden, stabilen und nicht zu schweren Scooter. Danach Grundposition, Bremsen, Kurven und Bunny Hop üben.",
   "it": "Per iniziare serve prima un monopattino della misura giusta, solido e non troppo pesante. Poi posizione, frenata, curve e bunny hop.",
   "en": "Start with a scooter that fits your height, is solid and not too heavy. Then learn stance, braking, turns and a clean bunny hop before harder tricks."
  },
  "keywords": [
   "commencer trottinette",
   "debuter trottinette",
   "débuter trottinette",
   "je commence",
   "sais pas ou commencer",
   "sais pas où commencer",
   "premiere trottinette",
   "première trottinette",
   "beginner scooter",
   "start scootering"
  ],
  "source": {
   "label": "Guide RIDLY / RSL",
   "url": "https://rsl-swiss.ch"
  },
  "dynamic": false,
  "verified": "2026-08-27"
 },
 {
  "id": "history-scooter-before-freestyle",
  "category": "Histoire trottinette",
  "questions": {
   "fr": "La trottinette freestyle vient d’où ?",
   "de": "La trottinette freestyle vient d’où ?",
   "it": "La trottinette freestyle vient d’où ?",
   "en": "La trottinette freestyle vient d’où ?"
  },
  "answer": {
   "fr": "La trottinette existait bien avant le freestyle : des patinettes et kick-scooters étaient déjà utilisés comme loisir et moyen de déplacement. Le tournant arrive à la fin des années 1990 avec les trottinettes modernes légères et pliables, puis au début des années 2000 quand des riders commencent à détourner ces modèles pour faire des tricks en skatepark. Le freestyle n'a donc pas été inventé d'un seul coup par une marque : il est né de la pratique des riders.",
   "de": "La trottinette existait bien avant le freestyle : des patinettes et kick-scooters étaient déjà utilisés comme loisir et moyen de déplacement. Le tournant arrive à la fin des années 1990 avec les trottinettes modernes légères et pliables, puis au début des années 2000 quand des riders commencent à détourner ces modèles pour faire des tricks en skatepark. Le freestyle n'a donc pas été inventé d'un seul coup par une marque : il est né de la pratique des riders.",
   "it": "La trottinette existait bien avant le freestyle : des patinettes et kick-scooters étaient déjà utilisés comme loisir et moyen de déplacement. Le tournant arrive à la fin des années 1990 avec les trottinettes modernes légères et pliables, puis au début des années 2000 quand des riders commencent à détourner ces modèles pour faire des tricks en skatepark. Le freestyle n'a donc pas été inventé d'un seul coup par une marque : il est né de la pratique des riders.",
   "en": "Scooters existed long before freestyle. The key change came in the late 1990s with lightweight folding scooters, then in the early 2000s when riders started using them for tricks in skateparks. Freestyle scootering was not invented overnight by one brand; it grew from rider culture."
  },
  "keywords": [
   "origine trottinette freestyle",
   "debut trottinette freestyle",
   "débuts trottinette",
   "histoire trottinette",
   "qui a invente trottinette freestyle",
   "inventé freestyle scooter",
   "origin scootering",
   "history scooter"
  ],
  "source": {
   "label": "Micro Mobility – histoire du Micro Scooter",
   "url": "https://www.micro-mobility.com/en/news/25-years-micro-scooter"
  },
  "dynamic": false,
  "verified": "2026-08-27"
 },
 {
  "id": "history-micro-1997",
  "category": "Histoire trottinette",
  "questions": {
   "fr": "Quel rôle Micro a joué dans l’histoire de la trottinette ?",
   "de": "Quel rôle Micro a joué dans l’histoire de la trottinette ?",
   "it": "Quel rôle Micro a joué dans l’histoire de la trottinette ?",
   "en": "Quel rôle Micro a joué dans l’histoire de la trottinette ?"
  },
  "answer": {
   "fr": "Le Suisse Wim Ouboter développe en 1997 le concept qui donnera le Micro Scooter moderne, pour faciliter de petits déplacements urbains. Micro précise lui-même qu'il n'a pas inventé la trottinette en général, mais cette génération de scooters compacts a largement contribué au boom mondial de 1999-2000 qui a fourni aux premiers riders freestyle leur matériel de départ.",
   "de": "Le Suisse Wim Ouboter développe en 1997 le concept qui donnera le Micro Scooter moderne, pour faciliter de petits déplacements urbains. Micro précise lui-même qu'il n'a pas inventé la trottinette en général, mais cette génération de scooters compacts a largement contribué au boom mondial de 1999-2000 qui a fourni aux premiers riders freestyle leur matériel de départ.",
   "it": "Le Suisse Wim Ouboter développe en 1997 le concept qui donnera le Micro Scooter moderne, pour faciliter de petits déplacements urbains. Micro précise lui-même qu'il n'a pas inventé la trottinette en général, mais cette génération de scooters compacts a largement contribué au boom mondial de 1999-2000 qui a fourni aux premiers riders freestyle leur matériel de départ.",
   "en": "Le Suisse Wim Ouboter développe en 1997 le concept qui donnera le Micro Scooter moderne, pour faciliter de petits déplacements urbains. Micro précise lui-même qu'il n'a pas inventé la trottinette en général, mais cette génération de scooters compacts a largement contribué au boom mondial de 1999-2000 qui a fourni aux premiers riders freestyle leur matériel de départ."
  },
  "keywords": [
   "micro scooter",
   "wim ouboter",
   "1997 scooter",
   "micro mobility",
   "qui a créé micro",
   "suisse trottinette moderne"
  ],
  "source": {
   "label": "Micro Mobility",
   "url": "https://www.micro-mobility.com/en/news/25-years-micro-scooter"
  },
  "dynamic": false,
  "verified": "2026-08-27"
 },
 {
  "id": "history-razor-2000",
  "category": "Histoire trottinette",
  "questions": {
   "fr": "Quel rôle Razor a joué dans le freestyle ?",
   "de": "Quel rôle Razor a joué dans le freestyle ?",
   "it": "Quel rôle Razor a joué dans le freestyle ?",
   "en": "Quel rôle Razor a joué dans le freestyle ?"
  },
  "answer": {
   "fr": "Razor lance son Model A en 2000 et participe à l'explosion mondiale de la petite trottinette aluminium pliable. Ces modèles n'étaient pas conçus pour encaisser du freestyle intensif, mais beaucoup de jeunes riders les ont utilisés, modifiés et cassés en apprenant des tricks. Cette période a poussé la scène à créer du matériel réellement conçu pour le freestyle.",
   "de": "Razor lance son Model A en 2000 et participe à l'explosion mondiale de la petite trottinette aluminium pliable. Ces modèles n'étaient pas conçus pour encaisser du freestyle intensif, mais beaucoup de jeunes riders les ont utilisés, modifiés et cassés en apprenant des tricks. Cette période a poussé la scène à créer du matériel réellement conçu pour le freestyle.",
   "it": "Razor lance son Model A en 2000 et participe à l'explosion mondiale de la petite trottinette aluminium pliable. Ces modèles n'étaient pas conçus pour encaisser du freestyle intensif, mais beaucoup de jeunes riders les ont utilisés, modifiés et cassés en apprenant des tricks. Cette période a poussé la scène à créer du matériel réellement conçu pour le freestyle.",
   "en": "Razor lance son Model A en 2000 et participe à l'explosion mondiale de la petite trottinette aluminium pliable. Ces modèles n'étaient pas conçus pour encaisser du freestyle intensif, mais beaucoup de jeunes riders les ont utilisés, modifiés et cassés en apprenant des tricks. Cette période a poussé la scène à créer du matériel réellement conçu pour le freestyle."
  },
  "keywords": [
   "razor",
   "razor a",
   "model a",
   "razor 2000",
   "premieres trottinettes freestyle",
   "premières trottinettes freestyle"
  ],
  "source": {
   "label": "Razor – About Us",
   "url": "https://razor.com/about-us/"
  },
  "dynamic": false,
  "verified": "2026-08-27"
 },
 {
  "id": "history-birth-2000-2003",
  "category": "Histoire trottinette",
  "questions": {
   "fr": "Comment la trottinette freestyle est-elle née au début des années 2000 ?",
   "de": "Comment la trottinette freestyle est-elle née au début des années 2000 ?",
   "it": "Comment la trottinette freestyle est-elle née au début des années 2000 ?",
   "en": "Comment la trottinette freestyle est-elle née au début des années 2000 ?"
  },
  "answer": {
   "fr": "Entre environ 2000 et 2003, des riders commencent à amener leurs scooters pliables dans les skateparks et à reprendre des idées du skate, du BMX et du roller : bunny hops, rotations, grinds, tailwhips et airs. Le matériel casse souvent : systèmes de pliage, petites roues, guidons et decks n'étaient pas prévus pour ces contraintes. Cette fragilité va accélérer la naissance de pièces renforcées et de vraies trottinettes freestyle.",
   "de": "Entre environ 2000 et 2003, des riders commencent à amener leurs scooters pliables dans les skateparks et à reprendre des idées du skate, du BMX et du roller : bunny hops, rotations, grinds, tailwhips et airs. Le matériel casse souvent : systèmes de pliage, petites roues, guidons et decks n'étaient pas prévus pour ces contraintes. Cette fragilité va accélérer la naissance de pièces renforcées et de vraies trottinettes freestyle.",
   "it": "Entre environ 2000 et 2003, des riders commencent à amener leurs scooters pliables dans les skateparks et à reprendre des idées du skate, du BMX et du roller : bunny hops, rotations, grinds, tailwhips et airs. Le matériel casse souvent : systèmes de pliage, petites roues, guidons et decks n'étaient pas prévus pour ces contraintes. Cette fragilité va accélérer la naissance de pièces renforcées et de vraies trottinettes freestyle.",
   "en": "Entre environ 2000 et 2003, des riders commencent à amener leurs scooters pliables dans les skateparks et à reprendre des idées du skate, du BMX et du roller : bunny hops, rotations, grinds, tailwhips et airs. Le matériel casse souvent : systèmes de pliage, petites roues, guidons et decks n'étaient pas prévus pour ces contraintes. Cette fragilité va accélérer la naissance de pièces renforcées et de vraies trottinettes freestyle."
  },
  "keywords": [
   "2000 2003",
   "naissance freestyle",
   "premiers riders",
   "premiers tricks",
   "debut scooter freestyle",
   "débuts scooter freestyle"
  ],
  "source": {
   "label": "PROTO Scooters – About",
   "url": "https://protoscooters.com/about/"
  },
  "dynamic": false,
  "verified": "2026-08-27"
 },
 {
  "id": "history-scooter-resource-2003",
  "category": "Histoire trottinette",
  "questions": {
   "fr": "C’est quoi The Scooter Resource ?",
   "de": "C’est quoi The Scooter Resource ?",
   "it": "C’est quoi The Scooter Resource ?",
   "en": "C’est quoi The Scooter Resource ?"
  },
  "answer": {
   "fr": "The Scooter Resource, souvent abrégé TSR, est l'un des grands sites communautaires historiques de la scène scooter. Andrew Broussard le crée en janvier 2003. Avant Instagram et même avant YouTube, forums et sites comme TSR permettaient aux riders de partager vidéos, tricks, modifications de matériel, contests et informations entre pays.",
   "de": "The Scooter Resource, souvent abrégé TSR, est l'un des grands sites communautaires historiques de la scène scooter. Andrew Broussard le crée en janvier 2003. Avant Instagram et même avant YouTube, forums et sites comme TSR permettaient aux riders de partager vidéos, tricks, modifications de matériel, contests et informations entre pays.",
   "it": "The Scooter Resource, souvent abrégé TSR, est l'un des grands sites communautaires historiques de la scène scooter. Andrew Broussard le crée en janvier 2003. Avant Instagram et même avant YouTube, forums et sites comme TSR permettaient aux riders de partager vidéos, tricks, modifications de matériel, contests et informations entre pays.",
   "en": "The Scooter Resource, souvent abrégé TSR, est l'un des grands sites communautaires historiques de la scène scooter. Andrew Broussard le crée en janvier 2003. Avant Instagram et même avant YouTube, forums et sites comme TSR permettaient aux riders de partager vidéos, tricks, modifications de matériel, contests et informations entre pays."
  },
  "keywords": [
   "the scooter resource",
   "scooter resource",
   "tsr",
   "andrew broussard forum",
   "forum scooter 2003"
  ],
  "source": {
   "label": "The Scooter Resource",
   "url": "https://forum.scooterresource.com/pages/aboutold/"
  },
  "dynamic": false,
  "verified": "2026-08-27"
 },
 {
  "id": "history-trotirider-2002",
  "category": "Histoire trottinette",
  "questions": {
   "fr": "C’est quoi TrotiRider ?",
   "de": "C’est quoi TrotiRider ?",
   "it": "C’est quoi TrotiRider ?",
   "en": "C’est quoi TrotiRider ?"
  },
  "answer": {
   "fr": "TrotiRider est une référence historique francophone. Fabien De Los Santos, alias Delos, raconte avoir reçu une JD Bug à Noël 2000 puis lancé TrotiRider en octobre 2002. Le site et son forum ont joué un rôle important pour connecter la première scène française et européenne de trottinette freestyle.",
   "de": "TrotiRider est une référence historique francophone. Fabien De Los Santos, alias Delos, raconte avoir reçu une JD Bug à Noël 2000 puis lancé TrotiRider en octobre 2002. Le site et son forum ont joué un rôle important pour connecter la première scène française et européenne de trottinette freestyle.",
   "it": "TrotiRider est une référence historique francophone. Fabien De Los Santos, alias Delos, raconte avoir reçu une JD Bug à Noël 2000 puis lancé TrotiRider en octobre 2002. Le site et son forum ont joué un rôle important pour connecter la première scène française et européenne de trottinette freestyle.",
   "en": "TrotiRider est une référence historique francophone. Fabien De Los Santos, alias Delos, raconte avoir reçu une JD Bug à Noël 2000 puis lancé TrotiRider en octobre 2002. Le site et son forum ont joué un rôle important pour connecter la première scène française et européenne de trottinette freestyle."
  },
  "keywords": [
   "trotirider",
   "troti rider",
   "delos",
   "fabien de los santos",
   "forum français trottinette",
   "2002 trottinette"
  ],
  "source": {
   "label": "TrotiRider – Histoire",
   "url": "https://www.trotirider.com/histoire"
  },
  "dynamic": false,
  "verified": "2026-08-27"
 },
 {
  "id": "history-montreux-2005",
  "category": "Montreux Scooter Contest",
  "questions": {
   "fr": "Quand a commencé le Montreux Scooter Contest ?",
   "de": "Quand a commencé le Montreux Scooter Contest ?",
   "it": "Quand a commencé le Montreux Scooter Contest ?",
   "en": "Quand a commencé le Montreux Scooter Contest ?"
  },
  "answer": {
   "fr": "La première édition du Montreux Scooter Contest a eu lieu le 24 avril 2005 à l'Empire Skate Building de Montreux. L'idée vient d'Eric Rabl, alors jeune membre de l'ASSIR et rider trottinette, aidé par Manu et l'association. L'Empire le présente comme le premier contest suisse, européen et peut-être mondial. Des archives communautaires américaines mentionnent toutefois des contests dès 2001 : RIDLY présente donc Montreux comme l'un des plus anciens contests documentés et un jalon majeur de l'histoire européenne, sans affirmer à tort qu'il est incontestablement le premier mondial.",
   "de": "La première édition du Montreux Scooter Contest a eu lieu le 24 avril 2005 à l'Empire Skate Building de Montreux. L'idée vient d'Eric Rabl, alors jeune membre de l'ASSIR et rider trottinette, aidé par Manu et l'association. L'Empire le présente comme le premier contest suisse, européen et peut-être mondial. Des archives communautaires américaines mentionnent toutefois des contests dès 2001 : RIDLY présente donc Montreux comme l'un des plus anciens contests documentés et un jalon majeur de l'histoire européenne, sans affirmer à tort qu'il est incontestablement le premier mondial.",
   "it": "La première édition du Montreux Scooter Contest a eu lieu le 24 avril 2005 à l'Empire Skate Building de Montreux. L'idée vient d'Eric Rabl, alors jeune membre de l'ASSIR et rider trottinette, aidé par Manu et l'association. L'Empire le présente comme le premier contest suisse, européen et peut-être mondial. Des archives communautaires américaines mentionnent toutefois des contests dès 2001 : RIDLY présente donc Montreux comme l'un des plus anciens contests documentés et un jalon majeur de l'histoire européenne, sans affirmer à tort qu'il est incontestablement le premier mondial.",
   "en": "La première édition du Montreux Scooter Contest a eu lieu le 24 avril 2005 à l'Empire Skate Building de Montreux. L'idée vient d'Eric Rabl, alors jeune membre de l'ASSIR et rider trottinette, aidé par Manu et l'association. L'Empire le présente comme le premier contest suisse, européen et peut-être mondial. Des archives communautaires américaines mentionnent toutefois des contests dès 2001 : RIDLY présente donc Montreux comme l'un des plus anciens contests documentés et un jalon majeur de l'histoire européenne, sans affirmer à tort qu'il est incontestablement le premier mondial."
  },
  "keywords": [
   "montreux scooter contest",
   "premier montreux",
   "24 avril 2005",
   "eric rabl",
   "assir scooter contest",
   "premier contest suisse",
   "premier contest europe"
  ],
  "source": {
   "label": "Empire Skate Building – Histoire du Scooter Contest",
   "url": "https://empireskatebuilding.ch/scooter-contest/"
  },
  "dynamic": false,
  "verified": "2026-08-27"
 },
 {
  "id": "history-montreux-organizers",
  "category": "Montreux Scooter Contest",
  "questions": {
   "fr": "Qui a organisé le Montreux Scooter Contest au fil des années ?",
   "de": "Qui a organisé le Montreux Scooter Contest au fil des années ?",
   "it": "Qui a organisé le Montreux Scooter Contest au fil des années ?",
   "en": "Qui a organisé le Montreux Scooter Contest au fil des années ?"
  },
  "answer": {
   "fr": "La chronologie officielle de l'Empire est la suivante : 2005-2006 Eric Rabl avec l'ASSIR ; dès 2007 Whitebox/Eric Rabl pendant une longue période, avec notamment une édition organisée par Dissidence en 2016 ; 2017-2018 reprise par l'ASSIR ; 2019 organisation confiée à Try Hard ; 2020-2021 annulations Covid ; depuis 2022 JF Ride Shop a repris l'organisation. Cela inclut donc les éditions 2023, 2024 et 2025. Le 6 décembre 2025, JF Ride Shop a organisé l'édition des 20 ans à l'Empire.",
   "de": "La chronologie officielle de l'Empire est la suivante : 2005-2006 Eric Rabl avec l'ASSIR ; dès 2007 Whitebox/Eric Rabl pendant une longue période, avec notamment une édition organisée par Dissidence en 2016 ; 2017-2018 reprise par l'ASSIR ; 2019 organisation confiée à Try Hard ; 2020-2021 annulations Covid ; depuis 2022 JF Ride Shop a repris l'organisation. Cela inclut donc les éditions 2023, 2024 et 2025. Le 6 décembre 2025, JF Ride Shop a organisé l'édition des 20 ans à l'Empire.",
   "it": "La chronologie officielle de l'Empire est la suivante : 2005-2006 Eric Rabl avec l'ASSIR ; dès 2007 Whitebox/Eric Rabl pendant une longue période, avec notamment une édition organisée par Dissidence en 2016 ; 2017-2018 reprise par l'ASSIR ; 2019 organisation confiée à Try Hard ; 2020-2021 annulations Covid ; depuis 2022 JF Ride Shop a repris l'organisation. Cela inclut donc les éditions 2023, 2024 et 2025. Le 6 décembre 2025, JF Ride Shop a organisé l'édition des 20 ans à l'Empire.",
   "en": "La chronologie officielle de l'Empire est la suivante : 2005-2006 Eric Rabl avec l'ASSIR ; dès 2007 Whitebox/Eric Rabl pendant une longue période, avec notamment une édition organisée par Dissidence en 2016 ; 2017-2018 reprise par l'ASSIR ; 2019 organisation confiée à Try Hard ; 2020-2021 annulations Covid ; depuis 2022 JF Ride Shop a repris l'organisation. Cela inclut donc les éditions 2023, 2024 et 2025. Le 6 décembre 2025, JF Ride Shop a organisé l'édition des 20 ans à l'Empire."
  },
  "keywords": [
   "organisateur montreux scooter contest",
   "qui organise montreux",
   "2022 montreux",
   "2023 montreux scooter",
   "2024 montreux scooter",
   "2025 montreux scooter",
   "try hard montreux",
   "whitebox montreux",
   "dissidence montreux"
  ],
  "source": {
   "label": "Empire Skate Building – Histoire du Scooter Contest",
   "url": "https://empireskatebuilding.ch/scooter-contest/"
  },
  "dynamic": false,
  "verified": "2026-08-27"
 },
 {
  "id": "history-joel-montreux-role",
  "category": "Montreux Scooter Contest",
  "questions": {
   "fr": "Quel rôle Joël Meuwly joue dans le Montreux Scooter Contest ?",
   "de": "Quel rôle Joël Meuwly joue dans le Montreux Scooter Contest ?",
   "it": "Quel rôle Joël Meuwly joue dans le Montreux Scooter Contest ?",
   "en": "Quel rôle Joël Meuwly joue dans le Montreux Scooter Contest ?"
  },
  "answer": {
   "fr": "Depuis la reprise du contest par JF Ride Shop en 2022, Joël Meuwly et son équipe portent l'organisation du Montreux Scooter Contest. Pour l'édition 2025, l'ASSIR précise que JF Ride Shop organise le contest et remercie chaleureusement Joël et sa team de perpétuer la tradition. Avec son rôle de président RSL, ses activités de cours, contests, coordination et sponsors, Joël fait aujourd'hui partie des figures centrales de la structuration de la trottinette freestyle en Suisse romande.",
   "de": "Depuis la reprise du contest par JF Ride Shop en 2022, Joël Meuwly et son équipe portent l'organisation du Montreux Scooter Contest. Pour l'édition 2025, l'ASSIR précise que JF Ride Shop organise le contest et remercie chaleureusement Joël et sa team de perpétuer la tradition. Avec son rôle de président RSL, ses activités de cours, contests, coordination et sponsors, Joël fait aujourd'hui partie des figures centrales de la structuration de la trottinette freestyle en Suisse romande.",
   "it": "Depuis la reprise du contest par JF Ride Shop en 2022, Joël Meuwly et son équipe portent l'organisation du Montreux Scooter Contest. Pour l'édition 2025, l'ASSIR précise que JF Ride Shop organise le contest et remercie chaleureusement Joël et sa team de perpétuer la tradition. Avec son rôle de président RSL, ses activités de cours, contests, coordination et sponsors, Joël fait aujourd'hui partie des figures centrales de la structuration de la trottinette freestyle en Suisse romande.",
   "en": "Depuis la reprise du contest par JF Ride Shop en 2022, Joël Meuwly et son équipe portent l'organisation du Montreux Scooter Contest. Pour l'édition 2025, l'ASSIR précise que JF Ride Shop organise le contest et remercie chaleureusement Joël et sa team de perpétuer la tradition. Avec son rôle de président RSL, ses activités de cours, contests, coordination et sponsors, Joël fait aujourd'hui partie des figures centrales de la structuration de la trottinette freestyle en Suisse romande."
  },
  "keywords": [
   "joel montreux scooter contest",
   "joël montreux contest",
   "meuwly montreux scooter",
   "joel organisateur scooter contest",
   "qui a relancé montreux scooter contest"
  ],
  "source": {
   "label": "ASSIR / Empire – Montreux Scooter Contest 2025",
   "url": "https://empireskatebuilding.ch/montreux-scooter-contest-samedi-06-12-25-esb/"
  },
  "dynamic": false,
  "verified": "2026-08-27"
 },
 {
  "id": "history-hardware-evolution",
  "category": "Matériel trottinette",
  "questions": {
   "fr": "Comment le matériel de trottinette freestyle a évolué ?",
   "de": "Comment le matériel de trottinette freestyle a évolué ?",
   "it": "Comment le matériel de trottinette freestyle a évolué ?",
   "en": "Comment le matériel de trottinette freestyle a évolué ?"
  },
  "answer": {
   "fr": "Le matériel est passé de petites trottinettes pliables avec roues minuscules et guidons réglables à des machines fixes pensées pour les chocs : decks soudés et renforcés, T-bars/Y-bars monoblocs, fourches threadless, headsets intégrés, compressions dédiées, roues metal-core et pièces remplaçables. L'évolution technique est directement liée aux riders qui cassaient le matériel de loisir en poussant les tricks toujours plus loin.",
   "de": "Le matériel est passé de petites trottinettes pliables avec roues minuscules et guidons réglables à des machines fixes pensées pour les chocs : decks soudés et renforcés, T-bars/Y-bars monoblocs, fourches threadless, headsets intégrés, compressions dédiées, roues metal-core et pièces remplaçables. L'évolution technique est directement liée aux riders qui cassaient le matériel de loisir en poussant les tricks toujours plus loin.",
   "it": "Le matériel est passé de petites trottinettes pliables avec roues minuscules et guidons réglables à des machines fixes pensées pour les chocs : decks soudés et renforcés, T-bars/Y-bars monoblocs, fourches threadless, headsets intégrés, compressions dédiées, roues metal-core et pièces remplaçables. L'évolution technique est directement liée aux riders qui cassaient le matériel de loisir en poussant les tricks toujours plus loin.",
   "en": "Le matériel est passé de petites trottinettes pliables avec roues minuscules et guidons réglables à des machines fixes pensées pour les chocs : decks soudés et renforcés, T-bars/Y-bars monoblocs, fourches threadless, headsets intégrés, compressions dédiées, roues metal-core et pièces remplaçables. L'évolution technique est directement liée aux riders qui cassaient le matériel de loisir en poussant les tricks toujours plus loin."
  },
  "keywords": [
   "evolution materiel",
   "évolution matériel",
   "ancien scooter",
   "ancienne trottinette",
   "pourquoi deck fixe",
   "histoire matériel scooter"
  ],
  "source": {
   "label": "PROTO Scooters – About",
   "url": "https://protoscooters.com/about/"
  },
  "dynamic": false,
  "verified": "2026-08-27"
 },
 {
  "id": "history-maddgear",
  "category": "Marques historiques",
  "questions": {
   "fr": "C’est quoi Madd Gear / MGP dans l’histoire du scooter ?",
   "de": "C’est quoi Madd Gear / MGP dans l’histoire du scooter ?",
   "it": "C’est quoi Madd Gear / MGP dans l’histoire du scooter ?",
   "en": "C’est quoi Madd Gear / MGP dans l’histoire du scooter ?"
  },
  "answer": {
   "fr": "Madd Gear, souvent associé au nom MGP, indique avoir été fondé en Australie en 2002. La marque fait partie des acteurs historiques qui ont contribué à faire évoluer la trottinette vers une catégorie pro avec des complètes et composants destinés au freestyle.",
   "de": "Madd Gear, souvent associé au nom MGP, indique avoir été fondé en Australie en 2002. La marque fait partie des acteurs historiques qui ont contribué à faire évoluer la trottinette vers une catégorie pro avec des complètes et composants destinés au freestyle.",
   "it": "Madd Gear, souvent associé au nom MGP, indique avoir été fondé en Australie en 2002. La marque fait partie des acteurs historiques qui ont contribué à faire évoluer la trottinette vers une catégorie pro avec des complètes et composants destinés au freestyle.",
   "en": "Madd Gear, souvent associé au nom MGP, indique avoir été fondé en Australie en 2002. La marque fait partie des acteurs historiques qui ont contribué à faire évoluer la trottinette vers une catégorie pro avec des complètes et composants destinés au freestyle."
  },
  "keywords": [
   "madd gear",
   "mgp",
   "madd gear pro",
   "histoire mgp",
   "madd gear 2002"
  ],
  "source": {
   "label": "Madd Gear – About",
   "url": "https://maddgear.com/pages/about"
  },
  "dynamic": false,
  "verified": "2026-08-27"
 },
 {
  "id": "history-proto",
  "category": "Marques historiques",
  "questions": {
   "fr": "Pourquoi PROTO est important dans l’histoire de la trottinette ?",
   "de": "Pourquoi PROTO est important dans l’histoire de la trottinette ?",
   "it": "Pourquoi PROTO est important dans l’histoire de la trottinette ?",
   "en": "Pourquoi PROTO est important dans l’histoire de la trottinette ?"
  },
  "answer": {
   "fr": "PROTO Scooters est fondé en 2008 à San Diego par Andrew Broussard, déjà connu pour The Scooter Resource. PROTO naît du besoin de fabriquer des composants capables de survivre au freestyle moderne. La marque est particulièrement importante pour l'évolution des roues, pièces usinées et du système SCS.",
   "de": "PROTO Scooters est fondé en 2008 à San Diego par Andrew Broussard, déjà connu pour The Scooter Resource. PROTO naît du besoin de fabriquer des composants capables de survivre au freestyle moderne. La marque est particulièrement importante pour l'évolution des roues, pièces usinées et du système SCS.",
   "it": "PROTO Scooters est fondé en 2008 à San Diego par Andrew Broussard, déjà connu pour The Scooter Resource. PROTO naît du besoin de fabriquer des composants capables de survivre au freestyle moderne. La marque est particulièrement importante pour l'évolution des roues, pièces usinées et du système SCS.",
   "en": "PROTO Scooters est fondé en 2008 à San Diego par Andrew Broussard, déjà connu pour The Scooter Resource. PROTO naît du besoin de fabriquer des composants capables de survivre au freestyle moderne. La marque est particulièrement importante pour l'évolution des roues, pièces usinées et du système SCS."
  },
  "keywords": [
   "proto scooters",
   "proto 2008",
   "andrew broussard proto",
   "histoire proto"
  ],
  "source": {
   "label": "PROTO Scooters – About",
   "url": "https://protoscooters.com/about/"
  },
  "dynamic": false,
  "verified": "2026-08-27"
 },
 {
  "id": "history-tilt",
  "category": "Marques historiques",
  "questions": {
   "fr": "Quand Tilt a commencé ?",
   "de": "Quand Tilt a commencé ?",
   "it": "Quand Tilt a commencé ?",
   "en": "Quand Tilt a commencé ?"
  },
  "answer": {
   "fr": "Tilt démarre en 2009 avec une logique très typique de cette époque : les pièces dont les riders avaient besoin n'existaient pas encore, donc il fallait les concevoir. La marque devient ensuite l'une des références majeures du matériel freestyle, notamment dans la culture Street.",
   "de": "Tilt démarre en 2009 avec une logique très typique de cette époque : les pièces dont les riders avaient besoin n'existaient pas encore, donc il fallait les concevoir. La marque devient ensuite l'une des références majeures du matériel freestyle, notamment dans la culture Street.",
   "it": "Tilt démarre en 2009 avec une logique très typique de cette époque : les pièces dont les riders avaient besoin n'existaient pas encore, donc il fallait les concevoir. La marque devient ensuite l'une des références majeures du matériel freestyle, notamment dans la culture Street.",
   "en": "Tilt démarre en 2009 avec une logique très typique de cette époque : les pièces dont les riders avaient besoin n'existaient pas encore, donc il fallait les concevoir. La marque devient ensuite l'une des références majeures du matériel freestyle, notamment dans la culture Street."
  },
  "keywords": [
   "tilt scooters",
   "tilt 2009",
   "histoire tilt",
   "tilt freestyle"
  ],
  "source": {
   "label": "Tilt – About Us",
   "url": "https://www.tiltlife.com/pages/about-us"
  },
  "dynamic": false,
  "verified": "2026-08-27"
 },
 {
  "id": "history-apex",
  "category": "Marques historiques",
  "questions": {
   "fr": "Quand Apex Pro Scooters a commencé ?",
   "de": "Quand Apex Pro Scooters a commencé ?",
   "it": "Quand Apex Pro Scooters a commencé ?",
   "en": "Quand Apex Pro Scooters a commencé ?"
  },
  "answer": {
   "fr": "Apex Pro Scooters commence à développer et produire des composants en Australie autour de 2010. La marque devient connue pour son usinage et ses composants haut de gamme, notamment decks, fourches, clamps et roues.",
   "de": "Apex Pro Scooters commence à développer et produire des composants en Australie autour de 2010. La marque devient connue pour son usinage et ses composants haut de gamme, notamment decks, fourches, clamps et roues.",
   "it": "Apex Pro Scooters commence à développer et produire des composants en Australie autour de 2010. La marque devient connue pour son usinage et ses composants haut de gamme, notamment decks, fourches, clamps et roues.",
   "en": "Apex Pro Scooters commence à développer et produire des composants en Australie autour de 2010. La marque devient connue pour son usinage et ses composants haut de gamme, notamment decks, fourches, clamps et roues."
  },
  "keywords": [
   "apex scooters",
   "apex pro scooters",
   "apex 2010",
   "histoire apex"
  ],
  "source": {
   "label": "Apex Pro Scooters – About",
   "url": "https://apexproscooters.com/about/"
  },
  "dynamic": false,
  "verified": "2026-08-27"
 },
 {
  "id": "history-scs",
  "category": "Technique / histoire",
  "questions": {
   "fr": "Qui a inventé le SCS ?",
   "de": "Qui a inventé le SCS ?",
   "it": "Qui a inventé le SCS ?",
   "en": "Qui a inventé le SCS ?"
  },
  "answer": {
   "fr": "Le SCS signifie Standard Compression System. Il est développé par Andrew Broussard / PROTO et apparaît autour de 2009. Le principe combine la compression du jeu de direction et le serrage du guidon dans un ensemble robuste. C'est devenu l'un des systèmes de compression les plus emblématiques de la trottinette freestyle.",
   "de": "Le SCS signifie Standard Compression System. Il est développé par Andrew Broussard / PROTO et apparaît autour de 2009. Le principe combine la compression du jeu de direction et le serrage du guidon dans un ensemble robuste. C'est devenu l'un des systèmes de compression les plus emblématiques de la trottinette freestyle.",
   "it": "Le SCS signifie Standard Compression System. Il est développé par Andrew Broussard / PROTO et apparaît autour de 2009. Le principe combine la compression du jeu de direction et le serrage du guidon dans un ensemble robuste. C'est devenu l'un des systèmes de compression les plus emblématiques de la trottinette freestyle.",
   "en": "Le SCS signifie Standard Compression System. Il est développé par Andrew Broussard / PROTO et apparaît autour de 2009. Le principe combine la compression du jeu de direction et le serrage du guidon dans un ensemble robuste. C'est devenu l'un des systèmes de compression les plus emblématiques de la trottinette freestyle."
  },
  "keywords": [
   "scs",
   "standard compression system",
   "qui a invente scs",
   "inventé scs",
   "andrew broussard scs",
   "proto scs"
  ],
  "source": {
   "label": "PROTO Scooters – About",
   "url": "https://protoscooters.com/about/"
  },
  "dynamic": false,
  "verified": "2026-08-27"
 },
 {
  "id": "history-compression-systems",
  "category": "Technique / histoire",
  "questions": {
   "fr": "Quelle différence entre SCS, HIC, IHC et ICS ?",
   "de": "Quelle différence entre SCS, HIC, IHC et ICS ?",
   "it": "Quelle différence entre SCS, HIC, IHC et ICS ?",
   "en": "Quelle différence entre SCS, HIC, IHC et ICS ?"
  },
  "answer": {
   "fr": "SCS, HIC, IHC et ICS sont différentes familles de compression servant à précharger le headset et à maintenir correctement fourche et guidon. Elles ne sont pas toutes compatibles entre elles : diamètre de barre standard/oversized, présence d'une fente dans le guidon, shim, type de fourche et clamp changent selon le système. Pour un montage précis, donne-moi ta barre, ta fourche et ton clamp.",
   "de": "SCS, HIC, IHC et ICS sont différentes familles de compression servant à précharger le headset et à maintenir correctement fourche et guidon. Elles ne sont pas toutes compatibles entre elles : diamètre de barre standard/oversized, présence d'une fente dans le guidon, shim, type de fourche et clamp changent selon le système. Pour un montage précis, donne-moi ta barre, ta fourche et ton clamp.",
   "it": "SCS, HIC, IHC et ICS sont différentes familles de compression servant à précharger le headset et à maintenir correctement fourche et guidon. Elles ne sont pas toutes compatibles entre elles : diamètre de barre standard/oversized, présence d'une fente dans le guidon, shim, type de fourche et clamp changent selon le système. Pour un montage précis, donne-moi ta barre, ta fourche et ton clamp.",
   "en": "SCS, HIC, IHC et ICS sont différentes familles de compression servant à précharger le headset et à maintenir correctement fourche et guidon. Elles ne sont pas toutes compatibles entre elles : diamètre de barre standard/oversized, présence d'une fente dans le guidon, shim, type de fourche et clamp changent selon le système. Pour un montage précis, donne-moi ta barre, ta fourche et ton clamp."
  },
  "keywords": [
   "scs hic ihc ics",
   "compression trottinette",
   "difference hic ihc",
   "différence scs hic",
   "systeme compression"
  ],
  "source": {
   "label": "Base technique RIDLY / PROTO",
   "url": "https://protoscooters.com/about/"
  },
  "dynamic": false,
  "verified": "2026-08-27"
 },
 {
  "id": "history-park-street",
  "category": "Culture freestyle",
  "questions": {
   "fr": "Quelle est la différence entre Park et Street ?",
   "de": "Quelle est la différence entre Park et Street ?",
   "it": "Quelle est la différence entre Park et Street ?",
   "en": "Quelle est la différence entre Park et Street ?"
  },
  "answer": {
   "fr": "Le Park utilise surtout transitions, quarters, box jumps, spines, bowls et hips ; il favorise souvent amplitude, vitesse, rotations, flips, whips et combinaisons aériennes. Le Street se construit davantage autour des rails, ledges, escaliers, curbs, gaps, banks et murs, avec beaucoup de grinds et de lignes techniques. Les setups Park ont souvent tendance à être plus légers et compacts ; les setups Street plus larges et longs. Beaucoup de riders restent hybrides.",
   "de": "Le Park utilise surtout transitions, quarters, box jumps, spines, bowls et hips ; il favorise souvent amplitude, vitesse, rotations, flips, whips et combinaisons aériennes. Le Street se construit davantage autour des rails, ledges, escaliers, curbs, gaps, banks et murs, avec beaucoup de grinds et de lignes techniques. Les setups Park ont souvent tendance à être plus légers et compacts ; les setups Street plus larges et longs. Beaucoup de riders restent hybrides.",
   "it": "Le Park utilise surtout transitions, quarters, box jumps, spines, bowls et hips ; il favorise souvent amplitude, vitesse, rotations, flips, whips et combinaisons aériennes. Le Street se construit davantage autour des rails, ledges, escaliers, curbs, gaps, banks et murs, avec beaucoup de grinds et de lignes techniques. Les setups Park ont souvent tendance à être plus légers et compacts ; les setups Street plus larges et longs. Beaucoup de riders restent hybrides.",
   "en": "Le Park utilise surtout transitions, quarters, box jumps, spines, bowls et hips ; il favorise souvent amplitude, vitesse, rotations, flips, whips et combinaisons aériennes. Le Street se construit davantage autour des rails, ledges, escaliers, curbs, gaps, banks et murs, avec beaucoup de grinds et de lignes techniques. Les setups Park ont souvent tendance à être plus légers et compacts ; les setups Street plus larges et longs. Beaucoup de riders restent hybrides."
  },
  "keywords": [
   "park street",
   "difference park street",
   "différence park street",
   "style park",
   "style street",
   "street vs park"
  ],
  "source": {
   "label": "FISE Media Guide 2025",
   "url": "https://newsroom.fise.fr/wp-content/uploads/2025/02/FISE-25_MEDIA-GUIDE_EN.pdf"
  },
  "dynamic": false,
  "verified": "2026-08-27"
 },
 {
  "id": "history-trick-families",
  "category": "Tricks",
  "questions": {
   "fr": "Quelles sont les grandes familles de tricks en trottinette freestyle ?",
   "de": "Quelles sont les grandes familles de tricks en trottinette freestyle ?",
   "it": "Quelles sont les grandes familles de tricks en trottinette freestyle ?",
   "en": "Quelles sont les grandes familles de tricks en trottinette freestyle ?"
  },
  "answer": {
   "fr": "On peut regrouper les tricks en grandes familles : bases (bunny hop, fakie, manual, 180, 360), rotations de deck (tailwhip, heelwhip, rewind, kickless), guidon (barspin et variantes), tricks typés scooter comme bri/inward/buttercup, flips et airs (backflip, frontflip, flair), puis grinds et lignes Street (feeble, smith, 50-50, slides, wallrides, gaps). Le haut niveau combine souvent plusieurs familles dans un seul trick.",
   "de": "On peut regrouper les tricks en grandes familles : bases (bunny hop, fakie, manual, 180, 360), rotations de deck (tailwhip, heelwhip, rewind, kickless), guidon (barspin et variantes), tricks typés scooter comme bri/inward/buttercup, flips et airs (backflip, frontflip, flair), puis grinds et lignes Street (feeble, smith, 50-50, slides, wallrides, gaps). Le haut niveau combine souvent plusieurs familles dans un seul trick.",
   "it": "On peut regrouper les tricks en grandes familles : bases (bunny hop, fakie, manual, 180, 360), rotations de deck (tailwhip, heelwhip, rewind, kickless), guidon (barspin et variantes), tricks typés scooter comme bri/inward/buttercup, flips et airs (backflip, frontflip, flair), puis grinds et lignes Street (feeble, smith, 50-50, slides, wallrides, gaps). Le haut niveau combine souvent plusieurs familles dans un seul trick.",
   "en": "On peut regrouper les tricks en grandes familles : bases (bunny hop, fakie, manual, 180, 360), rotations de deck (tailwhip, heelwhip, rewind, kickless), guidon (barspin et variantes), tricks typés scooter comme bri/inward/buttercup, flips et airs (backflip, frontflip, flair), puis grinds et lignes Street (feeble, smith, 50-50, slides, wallrides, gaps). Le haut niveau combine souvent plusieurs familles dans un seul trick."
  },
  "keywords": [
   "famille tricks",
   "liste tricks",
   "figures trottinette",
   "tricks scooter",
   "tailwhip barspin bri buttercup",
   "grinds scooter"
  ],
  "source": {
   "label": "Base RIDLY / World Skate",
   "url": "https://www.worldskate.org/scootering/about/regulations.html"
  },
  "dynamic": false,
  "verified": "2026-08-27"
 },
 {
  "id": "history-video-culture",
  "category": "Culture freestyle",
  "questions": {
   "fr": "Pourquoi les vidéos sont importantes dans le freestyle ?",
   "de": "Pourquoi les vidéos sont importantes dans le freestyle ?",
   "it": "Pourquoi les vidéos sont importantes dans le freestyle ?",
   "en": "Pourquoi les vidéos sont importantes dans le freestyle ?"
  },
  "answer": {
   "fr": "La culture freestyle ne se résume pas aux résultats de contest. En Street notamment, une video part peut avoir énormément de prestige : choix des spots, créativité, difficulté, style et qualité du montage comptent autant que la place dans un classement. Des projets comme la Dissidence Coalition ont marqué cette culture en réunissant riders et vidéastes autour d'edits produits en quelques jours.",
   "de": "La culture freestyle ne se résume pas aux résultats de contest. En Street notamment, une video part peut avoir énormément de prestige : choix des spots, créativité, difficulté, style et qualité du montage comptent autant que la place dans un classement. Des projets comme la Dissidence Coalition ont marqué cette culture en réunissant riders et vidéastes autour d'edits produits en quelques jours.",
   "it": "La culture freestyle ne se résume pas aux résultats de contest. En Street notamment, une video part peut avoir énormément de prestige : choix des spots, créativité, difficulté, style et qualité du montage comptent autant que la place dans un classement. Des projets comme la Dissidence Coalition ont marqué cette culture en réunissant riders et vidéastes autour d'edits produits en quelques jours.",
   "en": "La culture freestyle ne se résume pas aux résultats de contest. En Street notamment, une video part peut avoir énormément de prestige : choix des spots, créativité, difficulté, style et qualité du montage comptent autant que la place dans un classement. Des projets comme la Dissidence Coalition ont marqué cette culture en réunissant riders et vidéastes autour d'edits produits en quelques jours."
  },
  "keywords": [
   "video part scooter",
   "vidéo trottinette",
   "dissidence coalition",
   "culture street scooter",
   "edits scooter"
  ],
  "source": {
   "label": "Wise Scootering – Dissidence Coalition",
   "url": "https://wisescootering.com/dissidence-coalition/"
  },
  "dynamic": false,
  "verified": "2026-08-27"
 },
 {
  "id": "history-worlds-2012",
  "category": "Compétitions",
  "questions": {
   "fr": "Quand les championnats du monde de trottinette ont-ils commencé ?",
   "de": "Quand les championnats du monde de trottinette ont-ils commencé ?",
   "it": "Quand les championnats du monde de trottinette ont-ils commencé ?",
   "en": "Quand les championnats du monde de trottinette ont-ils commencé ?"
  },
  "answer": {
   "fr": "Le début des années 2010 marque la structuration d'un véritable circuit mondial autour de l'ISA. Dakota Schuetz est champion du monde en 2012 et devient l'un des symboles de cette première ère internationale. Les formats et organismes évolueront ensuite jusqu'à l'intégration de la discipline dans World Skate.",
   "de": "Le début des années 2010 marque la structuration d'un véritable circuit mondial autour de l'ISA. Dakota Schuetz est champion du monde en 2012 et devient l'un des symboles de cette première ère internationale. Les formats et organismes évolueront ensuite jusqu'à l'intégration de la discipline dans World Skate.",
   "it": "Le début des années 2010 marque la structuration d'un véritable circuit mondial autour de l'ISA. Dakota Schuetz est champion du monde en 2012 et devient l'un des symboles de cette première ère internationale. Les formats et organismes évolueront ensuite jusqu'à l'intégration de la discipline dans World Skate.",
   "en": "Le début des années 2010 marque la structuration d'un véritable circuit mondial autour de l'ISA. Dakota Schuetz est champion du monde en 2012 et devient l'un des symboles de cette première ère internationale. Les formats et organismes évolueront ensuite jusqu'à l'intégration de la discipline dans World Skate."
  },
  "keywords": [
   "champion monde 2012",
   "dakota schuetz 2012",
   "isa scooter",
   "international scooter association",
   "premier championnat monde scooter"
  ],
  "source": {
   "label": "Archive – Dakota Schuetz World Champion 2012",
   "url": "https://ist2011.over-blog.com/article-dakota-schuetz-world-champion-2012-en-interview-113571086.html"
  },
  "dynamic": false,
  "verified": "2026-08-27"
 },
 {
  "id": "history-world-skate-2019",
  "category": "Compétitions",
  "questions": {
   "fr": "Quand World Skate a intégré la trottinette ?",
   "de": "Quand World Skate a intégré la trottinette ?",
   "it": "Quand World Skate a intégré la trottinette ?",
   "en": "Quand World Skate a intégré la trottinette ?"
  },
  "answer": {
   "fr": "En 2019, la trottinette apparaît aux World Roller Games de Barcelone dans le cadre d'un championnat World Skate–ISA. JonMarco Gaydos remporte le Park hommes et Rebeca Ortiz le Park femmes. L'intégration institutionnelle se renforce ensuite, World Skate ajoutant officiellement le scootering à ses disciplines tout en conservant une autonomie sportive.",
   "de": "En 2019, la trottinette apparaît aux World Roller Games de Barcelone dans le cadre d'un championnat World Skate–ISA. JonMarco Gaydos remporte le Park hommes et Rebeca Ortiz le Park femmes. L'intégration institutionnelle se renforce ensuite, World Skate ajoutant officiellement le scootering à ses disciplines tout en conservant une autonomie sportive.",
   "it": "En 2019, la trottinette apparaît aux World Roller Games de Barcelone dans le cadre d'un championnat World Skate–ISA. JonMarco Gaydos remporte le Park hommes et Rebeca Ortiz le Park femmes. L'intégration institutionnelle se renforce ensuite, World Skate ajoutant officiellement le scootering à ses disciplines tout en conservant une autonomie sportive.",
   "en": "En 2019, la trottinette apparaît aux World Roller Games de Barcelone dans le cadre d'un championnat World Skate–ISA. JonMarco Gaydos remporte le Park hommes et Rebeca Ortiz le Park femmes. L'intégration institutionnelle se renforce ensuite, World Skate ajoutant officiellement le scootering à ses disciplines tout en conservant une autonomie sportive."
  },
  "keywords": [
   "world skate 2019 scooter",
   "barcelone 2019 scooter",
   "world roller games scooter",
   "jonmarco gaydos",
   "rebeca ortiz 2019"
  ],
  "source": {
   "label": "World Skate",
   "url": "https://www.worldskate.org/"
  },
  "dynamic": false,
  "verified": "2026-08-27"
 },
 {
  "id": "history-worlds-2021",
  "category": "Compétitions",
  "questions": {
   "fr": "Qui a gagné les Mondiaux de trottinette 2021 ?",
   "de": "Qui a gagné les Mondiaux de trottinette 2021 ?",
   "it": "Qui a gagné les Mondiaux de trottinette 2021 ?",
   "en": "Qui a gagné les Mondiaux de trottinette 2021 ?"
  },
  "answer": {
   "fr": "Aux Mondiaux 2021 organisés à Extreme Barcelona, Jordan Clark gagne le Men Park, Lucy Evans le Women Park et Lucas Di Meglio le Men Street. Lucas remporte le Street avec un score annoncé de 98,67/100. Cette période montre aussi la séparation internationale de plus en plus nette entre Park et Street.",
   "de": "Aux Mondiaux 2021 organisés à Extreme Barcelona, Jordan Clark gagne le Men Park, Lucy Evans le Women Park et Lucas Di Meglio le Men Street. Lucas remporte le Street avec un score annoncé de 98,67/100. Cette période montre aussi la séparation internationale de plus en plus nette entre Park et Street.",
   "it": "Aux Mondiaux 2021 organisés à Extreme Barcelona, Jordan Clark gagne le Men Park, Lucy Evans le Women Park et Lucas Di Meglio le Men Street. Lucas remporte le Street avec un score annoncé de 98,67/100. Cette période montre aussi la séparation internationale de plus en plus nette entre Park et Street.",
   "en": "Aux Mondiaux 2021 organisés à Extreme Barcelona, Jordan Clark gagne le Men Park, Lucy Evans le Women Park et Lucas Di Meglio le Men Street. Lucas remporte le Street avec un score annoncé de 98,67/100. Cette période montre aussi la séparation internationale de plus en plus nette entre Park et Street."
  },
  "keywords": [
   "mondiaux 2021 scooter",
   "world championship 2021 scooter",
   "jordan clark 2021",
   "lucy evans 2021",
   "lucas di meglio 2021"
  ],
  "source": {
   "label": "Extreme Barcelona 2021",
   "url": "https://extremebarcelona.com/2021/09/26/los-scooter-world-championships-la-gran-atraccion-de-los-espectadores-del-extreme-barcelona/"
  },
  "dynamic": false,
  "verified": "2026-08-27"
 },
 {
  "id": "history-world-skate-status",
  "category": "Compétitions",
  "questions": {
   "fr": "Quel est le rôle de World Skate dans la trottinette ?",
   "de": "Quel est le rôle de World Skate dans la trottinette ?",
   "it": "Quel est le rôle de World Skate dans la trottinette ?",
   "en": "Quel est le rôle de World Skate dans la trottinette ?"
  },
  "answer": {
   "fr": "World Skate est l'organisme international reconnu par le CIO qui gouverne notamment le scootering au niveau mondial. Il présente les Scootering World Championships comme l'événement international principal de la discipline. La structure moderne comprend compétitions nationales/continentales, événements de ranking, Pro Tour et Mondiaux selon les saisons.",
   "de": "World Skate est l'organisme international reconnu par le CIO qui gouverne notamment le scootering au niveau mondial. Il présente les Scootering World Championships comme l'événement international principal de la discipline. La structure moderne comprend compétitions nationales/continentales, événements de ranking, Pro Tour et Mondiaux selon les saisons.",
   "it": "World Skate est l'organisme international reconnu par le CIO qui gouverne notamment le scootering au niveau mondial. Il présente les Scootering World Championships comme l'événement international principal de la discipline. La structure moderne comprend compétitions nationales/continentales, événements de ranking, Pro Tour et Mondiaux selon les saisons.",
   "en": "World Skate est l'organisme international reconnu par le CIO qui gouverne notamment le scootering au niveau mondial. Il présente les Scootering World Championships comme l'événement international principal de la discipline. La structure moderne comprend compétitions nationales/continentales, événements de ranking, Pro Tour et Mondiaux selon les saisons."
  },
  "keywords": [
   "world skate scooter",
   "federation mondiale trottinette",
   "fédération mondiale trottinette",
   "championnat world skate",
   "pro tour scooter"
  ],
  "source": {
   "label": "World Skate – Scootering World Championships",
   "url": "https://www.worldskate.org/events/bid.html?download=6550%3Abidding-scootering-world-championships-2025"
  },
  "dynamic": false,
  "verified": "2026-08-27"
 },
 {
  "id": "history-judging",
  "category": "Compétitions",
  "questions": {
   "fr": "Comment est jugé un contest de trottinette ?",
   "de": "Comment est jugé un contest de trottinette ?",
   "it": "Comment est jugé un contest de trottinette ?",
   "en": "Comment est jugé un contest de trottinette ?"
  },
  "answer": {
   "fr": "Le jugement moderne ne récompense pas simplement le trick le plus difficile. Selon le format, les juges évaluent notamment difficulté, exécution, variété, style, utilisation du park, fluidité, amplitude, vitesse, réceptions et constance. En Street, certaines finales World Skate combinent runs et single tricks ; en Park, le meilleur run peut être retenu selon la phase et le règlement de l'événement.",
   "de": "Le jugement moderne ne récompense pas simplement le trick le plus difficile. Selon le format, les juges évaluent notamment difficulté, exécution, variété, style, utilisation du park, fluidité, amplitude, vitesse, réceptions et constance. En Street, certaines finales World Skate combinent runs et single tricks ; en Park, le meilleur run peut être retenu selon la phase et le règlement de l'événement.",
   "it": "Le jugement moderne ne récompense pas simplement le trick le plus difficile. Selon le format, les juges évaluent notamment difficulté, exécution, variété, style, utilisation du park, fluidité, amplitude, vitesse, réceptions et constance. En Street, certaines finales World Skate combinent runs et single tricks ; en Park, le meilleur run peut être retenu selon la phase et le règlement de l'événement.",
   "en": "Le jugement moderne ne récompense pas simplement le trick le plus difficile. Selon le format, les juges évaluent notamment difficulté, exécution, variété, style, utilisation du park, fluidité, amplitude, vitesse, réceptions et constance. En Street, certaines finales World Skate combinent runs et single tricks ; en Park, le meilleur run peut être retenu selon la phase et le règlement de l'événement."
  },
  "keywords": [
   "juges trottinette",
   "comment juger scooter",
   "score contest scooter",
   "criteres jugement",
   "critères jugement",
   "world skate judging"
  ],
  "source": {
   "label": "World Skate Games 2024 – Scootering bulletin",
   "url": "https://www.worldskate.org/component/phocadownload/category/1279-bulletin.html?download=6754%3Abulletin-02-world-skate-games-2024-scootering"
  },
  "dynamic": false,
  "verified": "2026-08-27"
 },
 {
  "id": "history-fise-origin",
  "category": "FISE",
  "questions": {
   "fr": "C’est quoi le FISE et quand a-t-il commencé ?",
   "de": "C’est quoi le FISE et quand a-t-il commencé ?",
   "it": "C’est quoi le FISE et quand a-t-il commencé ?",
   "en": "C’est quoi le FISE et quand a-t-il commencé ?"
  },
  "answer": {
   "fr": "FISE signifie Festival International des Sports Extrêmes. L'événement est fondé en 1997 par Hervé André-Benoit, d'abord à Palavas-les-Flots, puis Montpellier devient son rendez-vous historique majeur. Le FISE n'a pas été créé pour la trottinette, mais il a offert au scooter une scène internationale aux côtés du BMX, skate, roller et autres sports urbains.",
   "de": "FISE signifie Festival International des Sports Extrêmes. L'événement est fondé en 1997 par Hervé André-Benoit, d'abord à Palavas-les-Flots, puis Montpellier devient son rendez-vous historique majeur. Le FISE n'a pas été créé pour la trottinette, mais il a offert au scooter une scène internationale aux côtés du BMX, skate, roller et autres sports urbains.",
   "it": "FISE signifie Festival International des Sports Extrêmes. L'événement est fondé en 1997 par Hervé André-Benoit, d'abord à Palavas-les-Flots, puis Montpellier devient son rendez-vous historique majeur. Le FISE n'a pas été créé pour la trottinette, mais il a offert au scooter une scène internationale aux côtés du BMX, skate, roller et autres sports urbains.",
   "en": "FISE signifie Festival International des Sports Extrêmes. L'événement est fondé en 1997 par Hervé André-Benoit, d'abord à Palavas-les-Flots, puis Montpellier devient son rendez-vous historique majeur. Le FISE n'a pas été créé pour la trottinette, mais il a offert au scooter une scène internationale aux côtés du BMX, skate, roller et autres sports urbains."
  },
  "keywords": [
   "fise",
   "festival international sports extremes",
   "festival international des sports extrêmes",
   "hervé andré benoît",
   "fise 1997",
   "origine fise"
  ],
  "source": {
   "label": "FISE – La marque",
   "url": "https://shop.fise.fr/pages/la-marque"
  },
  "dynamic": false,
  "verified": "2026-08-27"
 },
 {
  "id": "history-fise-scooter",
  "category": "FISE",
  "questions": {
   "fr": "Depuis quand la trottinette est au FISE ?",
   "de": "Depuis quand la trottinette est au FISE ?",
   "it": "Depuis quand la trottinette est au FISE ?",
   "en": "Depuis quand la trottinette est au FISE ?"
  },
  "answer": {
   "fr": "La trottinette est documentée dans le programme du FISE Montpellier au moins dès 2015. Au fil des années, on y retrouve des formats Park Pro, amateurs/juniors, spine ramp, rail contests puis des étapes World Skate Scootering Pro Tour. Le FISE a joué un rôle majeur pour donner au scooter une visibilité comparable aux autres grands sports urbains.",
   "de": "La trottinette est documentée dans le programme du FISE Montpellier au moins dès 2015. Au fil des années, on y retrouve des formats Park Pro, amateurs/juniors, spine ramp, rail contests puis des étapes World Skate Scootering Pro Tour. Le FISE a joué un rôle majeur pour donner au scooter une visibilité comparable aux autres grands sports urbains.",
   "it": "La trottinette est documentée dans le programme du FISE Montpellier au moins dès 2015. Au fil des années, on y retrouve des formats Park Pro, amateurs/juniors, spine ramp, rail contests puis des étapes World Skate Scootering Pro Tour. Le FISE a joué un rôle majeur pour donner au scooter une visibilité comparable aux autres grands sports urbains.",
   "en": "La trottinette est documentée dans le programme du FISE Montpellier au moins dès 2015. Au fil des années, on y retrouve des formats Park Pro, amateurs/juniors, spine ramp, rail contests puis des étapes World Skate Scootering Pro Tour. Le FISE a joué un rôle majeur pour donner au scooter une visibilité comparable aux autres grands sports urbains."
  },
  "keywords": [
   "scooter fise",
   "trottinette fise",
   "fise montpellier scooter",
   "fise 2015 trottinette",
   "world skate pro tour fise"
  ],
  "source": {
   "label": "FISE Montpellier 2015",
   "url": "https://www.fise.fr/fr/fise-world-series-2015/fise-world-montpellier-2015/actualites/plan-bmx-park"
  },
  "dynamic": false,
  "verified": "2026-08-27"
 },
 {
  "id": "history-nitro-circus",
  "category": "Nitro / Big Air",
  "questions": {
   "fr": "Quel rôle Nitro Circus a joué dans la trottinette freestyle ?",
   "de": "Quel rôle Nitro Circus a joué dans la trottinette freestyle ?",
   "it": "Quel rôle Nitro Circus a joué dans la trottinette freestyle ?",
   "en": "Quel rôle Nitro Circus a joué dans la trottinette freestyle ?"
  },
  "answer": {
   "fr": "Nitro Circus représente surtout la branche show, Big Air et progression extrême du freestyle. Andrew Broussard indique avoir commencé à tourner avec Nitro Circus Live en 2010, ce qui fait partie des premières grosses connexions entre le scooter et les shows internationaux d'action sports. Ryan Williams deviendra ensuite l'une des figures majeures de cette progression en scooter et BMX.",
   "de": "Nitro Circus représente surtout la branche show, Big Air et progression extrême du freestyle. Andrew Broussard indique avoir commencé à tourner avec Nitro Circus Live en 2010, ce qui fait partie des premières grosses connexions entre le scooter et les shows internationaux d'action sports. Ryan Williams deviendra ensuite l'une des figures majeures de cette progression en scooter et BMX.",
   "it": "Nitro Circus représente surtout la branche show, Big Air et progression extrême du freestyle. Andrew Broussard indique avoir commencé à tourner avec Nitro Circus Live en 2010, ce qui fait partie des premières grosses connexions entre le scooter et les shows internationaux d'action sports. Ryan Williams deviendra ensuite l'une des figures majeures de cette progression en scooter et BMX.",
   "en": "Nitro Circus représente surtout la branche show, Big Air et progression extrême du freestyle. Andrew Broussard indique avoir commencé à tourner avec Nitro Circus Live en 2010, ce qui fait partie des premières grosses connexions entre le scooter et les shows internationaux d'action sports. Ryan Williams deviendra ensuite l'une des figures majeures de cette progression en scooter et BMX."
  },
  "keywords": [
   "nitro circus scooter",
   "andrew broussard nitro",
   "ryan williams nitro",
   "big air scooter"
  ],
  "source": {
   "label": "PROTO – Andrew Broussard",
   "url": "https://protoscooters.com/team/andrew-broussard/"
  },
  "dynamic": false,
  "verified": "2026-08-27"
 },
 {
  "id": "history-nitro-world-games-2016",
  "category": "Nitro / Big Air",
  "questions": {
   "fr": "Quand la trottinette est arrivée aux Nitro World Games ?",
   "de": "Quand la trottinette est arrivée aux Nitro World Games ?",
   "it": "Quand la trottinette est arrivée aux Nitro World Games ?",
   "en": "Quand la trottinette est arrivée aux Nitro World Games ?"
  },
  "answer": {
   "fr": "Les premiers Nitro World Games ont lieu en 2016 à Salt Lake City et comprennent officiellement un Scooter Best Tricks. Capron Funk gagne devant Jordan Clark et Corey Funk, avec Dakota Schuetz et Ryan Williams également en finale. En 2017, Ryan Williams remporte Scooter Best Trick. Nitro a fortement accéléré la course au Big Air et aux tricks de très haute difficulté.",
   "de": "Les premiers Nitro World Games ont lieu en 2016 à Salt Lake City et comprennent officiellement un Scooter Best Tricks. Capron Funk gagne devant Jordan Clark et Corey Funk, avec Dakota Schuetz et Ryan Williams également en finale. En 2017, Ryan Williams remporte Scooter Best Trick. Nitro a fortement accéléré la course au Big Air et aux tricks de très haute difficulté.",
   "it": "Les premiers Nitro World Games ont lieu en 2016 à Salt Lake City et comprennent officiellement un Scooter Best Tricks. Capron Funk gagne devant Jordan Clark et Corey Funk, avec Dakota Schuetz et Ryan Williams également en finale. En 2017, Ryan Williams remporte Scooter Best Trick. Nitro a fortement accéléré la course au Big Air et aux tricks de très haute difficulté.",
   "en": "Les premiers Nitro World Games ont lieu en 2016 à Salt Lake City et comprennent officiellement un Scooter Best Tricks. Capron Funk gagne devant Jordan Clark et Corey Funk, avec Dakota Schuetz et Ryan Williams également en finale. En 2017, Ryan Williams remporte Scooter Best Trick. Nitro a fortement accéléré la course au Big Air et aux tricks de très haute difficulté."
  },
  "keywords": [
   "nitro world games scooter",
   "nitro 2016 scooter",
   "capron funk 2016",
   "ryan williams 2017 scooter"
  ],
  "source": {
   "label": "Nitro World Games / archive vidéo",
   "url": "https://www.youtube.com/watch?v=OEyY6Aty28Q"
  },
  "dynamic": false,
  "verified": "2026-08-27"
 },
 {
  "id": "history-xgames-2026",
  "category": "X Games",
  "questions": {
   "fr": "La trottinette a-t-elle déjà été aux X Games ?",
   "de": "La trottinette a-t-elle déjà été aux X Games ?",
   "it": "La trottinette a-t-elle déjà été aux X Games ?",
   "en": "La trottinette a-t-elle déjà été aux X Games ?"
  },
  "answer": {
   "fr": "Oui. Le 24 juillet 2026 à X Games New Orleans a eu lieu le premier événement officiel de scooter de l'histoire des X Games : Men's Scooter Park Best Trick, présenté comme un Spotlight Event. Jack Ward a gagné, Cody Flom a terminé 2e et le Suisse Matis Neyroud 3e. Le format Spotlight sert à tester de nouvelles disciplines : cela ne signifie pas encore que le scooter est garanti comme discipline permanente des X Games.",
   "de": "Oui. Le 24 juillet 2026 à X Games New Orleans a eu lieu le premier événement officiel de scooter de l'histoire des X Games : Men's Scooter Park Best Trick, présenté comme un Spotlight Event. Jack Ward a gagné, Cody Flom a terminé 2e et le Suisse Matis Neyroud 3e. Le format Spotlight sert à tester de nouvelles disciplines : cela ne signifie pas encore que le scooter est garanti comme discipline permanente des X Games.",
   "it": "Oui. Le 24 juillet 2026 à X Games New Orleans a eu lieu le premier événement officiel de scooter de l'histoire des X Games : Men's Scooter Park Best Trick, présenté comme un Spotlight Event. Jack Ward a gagné, Cody Flom a terminé 2e et le Suisse Matis Neyroud 3e. Le format Spotlight sert à tester de nouvelles disciplines : cela ne signifie pas encore que le scooter est garanti comme discipline permanente des X Games.",
   "en": "Oui. Le 24 juillet 2026 à X Games New Orleans a eu lieu le premier événement officiel de scooter de l'histoire des X Games : Men's Scooter Park Best Trick, présenté comme un Spotlight Event. Jack Ward a gagné, Cody Flom a terminé 2e et le Suisse Matis Neyroud 3e. Le format Spotlight sert à tester de nouvelles disciplines : cela ne signifie pas encore que le scooter est garanti comme discipline permanente des X Games."
  },
  "keywords": [
   "x games scooter",
   "xgames trottinette",
   "premier x games scooter",
   "new orleans scooter 2026",
   "jack ward x games",
   "matis neyroud x games",
   "cody flom xgames"
  ],
  "source": {
   "label": "X Games New Orleans 2026",
   "url": "https://www.xgames.com/news/moonpay-x-games-new-orleans-2026-championship-takes-over-caesars-superdome-and-brings-the-worlds-best-action-sports-competition-to-the-big-easy/"
  },
  "dynamic": false,
  "verified": "2026-08-27"
 },
 {
  "id": "history-olympics-status",
  "category": "Compétitions",
  "questions": {
   "fr": "La trottinette freestyle est-elle olympique ?",
   "de": "La trottinette freestyle est-elle olympique ?",
   "it": "La trottinette freestyle est-elle olympique ?",
   "en": "La trottinette freestyle est-elle olympique ?"
  },
  "answer": {
   "fr": "Non, pas actuellement. World Skate est reconnu par le CIO et gouverne le scootering au niveau international, mais la trottinette freestyle ne figure pas au programme olympique de Los Angeles 2028. Il faut donc distinguer « discipline gérée par une fédération reconnue par le CIO » et « sport présent aux Jeux olympiques ».",
   "de": "Non, pas actuellement. World Skate est reconnu par le CIO et gouverne le scootering au niveau international, mais la trottinette freestyle ne figure pas au programme olympique de Los Angeles 2028. Il faut donc distinguer « discipline gérée par une fédération reconnue par le CIO » et « sport présent aux Jeux olympiques ».",
   "it": "Non, pas actuellement. World Skate est reconnu par le CIO et gouverne le scootering au niveau international, mais la trottinette freestyle ne figure pas au programme olympique de Los Angeles 2028. Il faut donc distinguer « discipline gérée par une fédération reconnue par le CIO » et « sport présent aux Jeux olympiques ».",
   "en": "Non, pas actuellement. World Skate est reconnu par le CIO et gouverne le scootering au niveau international, mais la trottinette freestyle ne figure pas au programme olympique de Los Angeles 2028. Il faut donc distinguer « discipline gérée par une fédération reconnue par le CIO » et « sport présent aux Jeux olympiques »."
  },
  "keywords": [
   "trottinette olympique",
   "scooter olympics",
   "jo 2028 scooter",
   "los angeles 2028 trottinette",
   "world skate cio"
  ],
  "source": {
   "label": "World Skate / CIO status",
   "url": "https://www.worldskate.org/events/bid.html?download=6550%3Abidding-scootering-world-championships-2025"
  },
  "dynamic": false,
  "verified": "2026-08-27"
 },
 {
  "id": "history-swiss-role",
  "category": "Suisse",
  "questions": {
   "fr": "Pourquoi la Suisse est importante dans l’histoire de la trottinette ?",
   "de": "Pourquoi la Suisse est importante dans l’histoire de la trottinette ?",
   "it": "Pourquoi la Suisse est importante dans l’histoire de la trottinette ?",
   "en": "Pourquoi la Suisse est importante dans l’histoire de la trottinette ?"
  },
  "answer": {
   "fr": "La Suisse apparaît à plusieurs moments clés : Wim Ouboter et Micro participent au boom de la trottinette moderne à la fin des années 1990 ; Montreux accueille dès 2005 l'un des plus anciens grands contests européens documentés ; la scène suisse s'est ensuite structurée via Swiss Skate et des organisations romandes ; enfin Matis Neyroud a décroché le bronze lors du tout premier Scooter Park Best Trick officiel des X Games en 2026.",
   "de": "La Suisse apparaît à plusieurs moments clés : Wim Ouboter et Micro participent au boom de la trottinette moderne à la fin des années 1990 ; Montreux accueille dès 2005 l'un des plus anciens grands contests européens documentés ; la scène suisse s'est ensuite structurée via Swiss Skate et des organisations romandes ; enfin Matis Neyroud a décroché le bronze lors du tout premier Scooter Park Best Trick officiel des X Games en 2026.",
   "it": "La Suisse apparaît à plusieurs moments clés : Wim Ouboter et Micro participent au boom de la trottinette moderne à la fin des années 1990 ; Montreux accueille dès 2005 l'un des plus anciens grands contests européens documentés ; la scène suisse s'est ensuite structurée via Swiss Skate et des organisations romandes ; enfin Matis Neyroud a décroché le bronze lors du tout premier Scooter Park Best Trick officiel des X Games en 2026.",
   "en": "La Suisse apparaît à plusieurs moments clés : Wim Ouboter et Micro participent au boom de la trottinette moderne à la fin des années 1990 ; Montreux accueille dès 2005 l'un des plus anciens grands contests européens documentés ; la scène suisse s'est ensuite structurée via Swiss Skate et des organisations romandes ; enfin Matis Neyroud a décroché le bronze lors du tout premier Scooter Park Best Trick officiel des X Games en 2026."
  },
  "keywords": [
   "histoire suisse trottinette",
   "suisse scooter histoire",
   "montreux micro matis",
   "trottinette suisse romande histoire"
  ],
  "source": {
   "label": "Empire Skate Building / Micro / X Games",
   "url": "https://empireskatebuilding.ch/scooter-contest/"
  },
  "dynamic": false,
  "verified": "2026-08-27"
 },
 {
  "id": "history-women",
  "category": "Histoire trottinette",
  "questions": {
   "fr": "Quelle place ont les femmes dans la trottinette freestyle ?",
   "de": "Quelle place ont les femmes dans la trottinette freestyle ?",
   "it": "Quelle place ont les femmes dans la trottinette freestyle ?",
   "en": "Quelle place ont les femmes dans la trottinette freestyle ?"
  },
  "answer": {
   "fr": "La première scène documentée était très majoritairement masculine, mais les catégories féminines se sont progressivement structurées au niveau international. Rebeca Ortiz gagne notamment le Park féminin mondial en 2019 et Lucy Evans le Park mondial en 2021. Aujourd'hui, World Skate organise et classe les principales catégories hommes/femmes en Park et Street, avec une scène féminine internationale beaucoup plus visible.",
   "de": "La première scène documentée était très majoritairement masculine, mais les catégories féminines se sont progressivement structurées au niveau international. Rebeca Ortiz gagne notamment le Park féminin mondial en 2019 et Lucy Evans le Park mondial en 2021. Aujourd'hui, World Skate organise et classe les principales catégories hommes/femmes en Park et Street, avec une scène féminine internationale beaucoup plus visible.",
   "it": "La première scène documentée était très majoritairement masculine, mais les catégories féminines se sont progressivement structurées au niveau international. Rebeca Ortiz gagne notamment le Park féminin mondial en 2019 et Lucy Evans le Park mondial en 2021. Aujourd'hui, World Skate organise et classe les principales catégories hommes/femmes en Park et Street, avec une scène féminine internationale beaucoup plus visible.",
   "en": "La première scène documentée était très majoritairement masculine, mais les catégories féminines se sont progressivement structurées au niveau international. Rebeca Ortiz gagne notamment le Park féminin mondial en 2019 et Lucy Evans le Park mondial en 2021. Aujourd'hui, World Skate organise et classe les principales catégories hommes/femmes en Park et Street, avec une scène féminine internationale beaucoup plus visible."
  },
  "keywords": [
   "femmes trottinette freestyle",
   "women scootering",
   "rideuses scooter",
   "rebeca ortiz",
   "lucy evans world champion"
  ],
  "source": {
   "label": "World Skate",
   "url": "https://www.worldskate.org/"
  },
  "dynamic": false,
  "verified": "2026-08-27"
 },
 {
  "id": "history-current-level",
  "category": "Compétitions",
  "questions": {
   "fr": "Quel est le niveau mondial actuel en trottinette freestyle ?",
   "de": "Quel est le niveau mondial actuel en trottinette freestyle ?",
   "it": "Quel est le niveau mondial actuel en trottinette freestyle ?",
   "en": "Quel est le niveau mondial actuel en trottinette freestyle ?"
  },
  "answer": {
   "fr": "La discipline est désormais internationale, avec des circuits World Skate, des Championnats du monde, des épreuves continentales et un niveau technique très éloigné des débuts sur scooters pliables. Les classements World Skate récents placent des riders comme Jayden Sharman, Jordan Clark, Esteban Clot, Hjalte Hansen ou Matis Neyroud parmi les références de leurs disciplines. Les résultats évoluent chaque saison, donc Lya doit dater ses informations de ranking.",
   "de": "La discipline est désormais internationale, avec des circuits World Skate, des Championnats du monde, des épreuves continentales et un niveau technique très éloigné des débuts sur scooters pliables. Les classements World Skate récents placent des riders comme Jayden Sharman, Jordan Clark, Esteban Clot, Hjalte Hansen ou Matis Neyroud parmi les références de leurs disciplines. Les résultats évoluent chaque saison, donc Lya doit dater ses informations de ranking.",
   "it": "La discipline est désormais internationale, avec des circuits World Skate, des Championnats du monde, des épreuves continentales et un niveau technique très éloigné des débuts sur scooters pliables. Les classements World Skate récents placent des riders comme Jayden Sharman, Jordan Clark, Esteban Clot, Hjalte Hansen ou Matis Neyroud parmi les références de leurs disciplines. Les résultats évoluent chaque saison, donc Lya doit dater ses informations de ranking.",
   "en": "La discipline est désormais internationale, avec des circuits World Skate, des Championnats du monde, des épreuves continentales et un niveau technique très éloigné des débuts sur scooters pliables. Les classements World Skate récents placent des riders comme Jayden Sharman, Jordan Clark, Esteban Clot, Hjalte Hansen ou Matis Neyroud parmi les références de leurs disciplines. Les résultats évoluent chaque saison, donc Lya doit dater ses informations de ranking."
  },
  "keywords": [
   "niveau mondial scooter",
   "top riders monde",
   "world ranking scootering",
   "niveau trottinette 2025",
   "niveau trottinette 2026"
  ],
  "source": {
   "label": "World Skate – Rankings",
   "url": "https://www.worldskate.org/scootering/rankings.html?download=7251%3Aworld-ranking-men-park"
  },
  "dynamic": false,
  "verified": "2026-08-27"
 },
 {
  "id": "history-scooter-unique",
  "category": "Culture freestyle",
  "questions": {
   "fr": "Qu’est-ce qui rend la trottinette différente du BMX et du skate ?",
   "de": "Qu’est-ce qui rend la trottinette différente du BMX et du skate ?",
   "it": "Qu’est-ce qui rend la trottinette différente du BMX et du skate ?",
   "en": "Qu’est-ce qui rend la trottinette différente du BMX et du skate ?"
  },
  "answer": {
   "fr": "La trottinette emprunte énormément au skate et au BMX, mais sa mécanique crée des mouvements propres : le guidon tourne indépendamment du deck, le deck peut tourner autour de l'axe du guidon et le rider peut aussi manipuler le deck avec les mains. Cela permet des familles de tricks typiques comme bri, buttercup, kickless, fingerwhip et de nombreuses combinaisons whips/bars/flips.",
   "de": "La trottinette emprunte énormément au skate et au BMX, mais sa mécanique crée des mouvements propres : le guidon tourne indépendamment du deck, le deck peut tourner autour de l'axe du guidon et le rider peut aussi manipuler le deck avec les mains. Cela permet des familles de tricks typiques comme bri, buttercup, kickless, fingerwhip et de nombreuses combinaisons whips/bars/flips.",
   "it": "La trottinette emprunte énormément au skate et au BMX, mais sa mécanique crée des mouvements propres : le guidon tourne indépendamment du deck, le deck peut tourner autour de l'axe du guidon et le rider peut aussi manipuler le deck avec les mains. Cela permet des familles de tricks typiques comme bri, buttercup, kickless, fingerwhip et de nombreuses combinaisons whips/bars/flips.",
   "en": "La trottinette emprunte énormément au skate et au BMX, mais sa mécanique crée des mouvements propres : le guidon tourne indépendamment du deck, le deck peut tourner autour de l'axe du guidon et le rider peut aussi manipuler le deck avec les mains. Cela permet des familles de tricks typiques comme bri, buttercup, kickless, fingerwhip et de nombreuses combinaisons whips/bars/flips."
  },
  "keywords": [
   "difference scooter bmx skate",
   "différence trottinette bmx skate",
   "tricks uniques scooter",
   "pourquoi scooter différent"
  ],
  "source": {
   "label": "FISE – présentation Scootering",
   "url": "https://newsroom.fise.fr/wp-content/uploads/2024/01/FISE-24_DP-FR_A4-planches.pdf"
  },
  "dynamic": false,
  "verified": "2026-08-27"
 },
 {
  "id": "history-fact-confidence",
  "category": "Méthode encyclopédie",
  "questions": {
   "fr": "Comment RIDLY gère les “premiers tricks” et les légendes historiques ?",
   "de": "Comment RIDLY gère les “premiers tricks” et les légendes historiques ?",
   "it": "Comment RIDLY gère les “premiers tricks” et les légendes historiques ?",
   "en": "Comment RIDLY gère les “premiers tricks” et les légendes historiques ?"
  },
  "answer": {
   "fr": "RIDLY distingue trois niveaux : vérifié (source officielle ou archive solide), historique communautaire (information ancienne et plausible mais moins documentée) et à confirmer (anecdote ou attribution incertaine). Pour les années 2000, certaines vidéos et archives ont disparu : Lya doit donc dire « souvent crédité à… » lorsqu'une invention de trick ou une première mondiale n'est pas suffisamment prouvée.",
   "de": "RIDLY distingue trois niveaux : vérifié (source officielle ou archive solide), historique communautaire (information ancienne et plausible mais moins documentée) et à confirmer (anecdote ou attribution incertaine). Pour les années 2000, certaines vidéos et archives ont disparu : Lya doit donc dire « souvent crédité à… » lorsqu'une invention de trick ou une première mondiale n'est pas suffisamment prouvée.",
   "it": "RIDLY distingue trois niveaux : vérifié (source officielle ou archive solide), historique communautaire (information ancienne et plausible mais moins documentée) et à confirmer (anecdote ou attribution incertaine). Pour les années 2000, certaines vidéos et archives ont disparu : Lya doit donc dire « souvent crédité à… » lorsqu'une invention de trick ou une première mondiale n'est pas suffisamment prouvée.",
   "en": "RIDLY distingue trois niveaux : vérifié (source officielle ou archive solide), historique communautaire (information ancienne et plausible mais moins documentée) et à confirmer (anecdote ou attribution incertaine). Pour les années 2000, certaines vidéos et archives ont disparu : Lya doit donc dire « souvent crédité à… » lorsqu'une invention de trick ou une première mondiale n'est pas suffisamment prouvée."
  },
  "keywords": [
   "premier trick",
   "qui a invente trick",
   "qui a inventé trick",
   "source historique",
   "legende scooter",
   "légende trottinette",
   "verifie ridly"
  ],
  "source": {
   "label": "Méthode éditoriale RIDLY",
   "url": "https://empireskatebuilding.ch/scooter-contest/"
  },
  "dynamic": false,
  "verified": "2026-08-27"
 },
 {
  "id": "shop-jf-position",
  "category": "Shops Suisse romande",
  "questions": {
   "fr": "JF Ride Shop, c’est quoi ?",
   "de": "Was ist JF Ride Shop?",
   "it": "Cos’è JF Ride Shop?",
   "en": "What is JF Ride Shop?"
  },
  "answer": {
   "fr": "JF Ride Shop, c’est le shop partenaire de RSL et RIDLY pour la trottinette freestyle. Avec le code ONLINE10, tu as 10 % sur ta commande. C’est un projet créé par Joël Meuwly et développé au cœur de la scène freestyle romande. Lya le met en avant pour les produits, mais elle te propose d’abord un modèle ou une pièce adaptée avant de t’envoyer vers le shop.",
   "de": "JF Ride Shop ist der Partner-Shop von RSL und RIDLY für Freestyle-Scooter. Mit dem Code ONLINE10 bekommst du 10 % Rabatt auf deine Bestellung. Das Projekt wurde von Joël Meuwly aufgebaut und mitten in der Freestyle-Szene der Romandie entwickelt. Lya hebt den Shop bei Produkten hervor, empfiehlt dir aber zuerst ein passendes Modell oder Teil, bevor sie dich zum Shop schickt.",
   "it": "JF Ride Shop è lo shop partner di RSL e RIDLY per il monopattino freestyle. Con il codice ONLINE10 hai il 10% di sconto sul tuo ordine. È un progetto creato da Joël Meuwly e sviluppato nel cuore della scena freestyle romanda. Lya lo mette in evidenza per i prodotti, ma prima ti propone un modello o un componente adatto e solo dopo ti indirizza al negozio.",
   "en": "JF Ride Shop is the RSL and RIDLY partner shop for freestyle scootering. Use code ONLINE10 for 10% off your order. It is a project created by Joël Meuwly and developed at the heart of the French-speaking Swiss freestyle scene. Lya highlights it for products, but first suggests a suitable model or part before sending you to the shop."
  },
  "keywords": [
   "jf ride shop",
   "jfrideshop",
   "jf rideshop",
   "shop jf",
   "shop partenaire",
   "sponsor officiel",
   "shop officiel",
   "shop reference rsl",
   "online10",
   "code promo",
   "10%"
  ],
  "source": {
   "label": "JF Ride Shop – À propos",
   "url": "https://www.jfrideshop.ch/en/about-us"
  },
  "dynamic": false,
  "verified": "2026-08-27"
 },
 {
  "id": "shop-sportmania",
  "category": "Shops Suisse romande",
  "questions": {
   "fr": "C’est quoi Sportmania ?",
   "de": "Was ist Sportmania?",
   "it": "Cos’è Sportmania?",
   "en": "What is Sportmania?"
  },
  "answer": {
   "fr": "Sportmania est un shop multisport. On y trouve du matériel pour différents sports et, selon leur offre ou leur stock, aussi de la trottinette freestyle. Ce n’est pas un partenaire RIDLY/RSL : Lya le cite simplement à titre informatif. Pour les recommandations et les liens produits, le shop partenaire officiel reste JF Ride Shop.",
   "de": "Sportmania ist ein Multisport-Shop. Dort findet man Material für verschiedene Sportarten und je nach Angebot oder Lagerbestand auch Freestyle-Scooter. Sportmania ist kein RIDLY/RSL-Partner; Lya nennt den Shop nur informativ. Für Empfehlungen und Produktlinks bleibt JF Ride Shop der offizielle Partner-Shop.",
   "it": "Sportmania è uno shop multisport. Offre materiale per diversi sport e, secondo assortimento o disponibilità, anche monopattini freestyle. Non è un partner RIDLY/RSL: Lya lo cita solo a titolo informativo. Per consigli e link prodotto, lo shop partner ufficiale resta JF Ride Shop.",
   "en": "Sportmania is a multisport shop. It carries equipment for various sports and, depending on its range or stock, freestyle scooters as well. It is not a RIDLY/RSL partner; Lya mentions it for information only. For recommendations and product links, JF Ride Shop remains the official partner shop."
  },
  "keywords": [
   "sportmania",
   "sport mania",
   "sportmania lausanne",
   "sportmania trottinette"
  ],
  "source": {
   "label": "Sportmania",
   "url": "https://www.sportmania.ch/"
  },
  "dynamic": false,
  "verified": "2026-08-27"
 },
 {
  "id": "shop-sports-discount",
  "category": "Shops Suisse romande",
  "questions": {
   "fr": "C’est quoi Sports Discount Lausanne ?",
   "de": "Was ist Sports Discount Lausanne?",
   "it": "Cos’è Sports Discount Lausanne?",
   "en": "What is Sports Discount Lausanne?"
  },
  "answer": {
   "fr": "Sports Discount est un shop multisport. On peut y trouver du matériel de glisse et, selon le catalogue ou le stock, de la trottinette freestyle. Ce n’est pas un partenaire RIDLY/RSL : Lya le cite simplement comme autre revendeur. Pour les recommandations produits, JF Ride Shop reste le shop partenaire officiel.",
   "de": "Sports Discount ist ein Multisport-Shop. Dort gibt es Gleitsport-Material und je nach Sortiment oder Lagerbestand auch Freestyle-Scooter. Es ist kein RIDLY/RSL-Partner; Lya nennt ihn lediglich als weiteren Händler. Für Produktempfehlungen bleibt JF Ride Shop der offizielle Partner-Shop.",
   "it": "Sports Discount è uno shop multisport. Può avere materiale per sport di scivolamento e, secondo catalogo o disponibilità, anche monopattini freestyle. Non è un partner RIDLY/RSL: Lya lo cita semplicemente come altro rivenditore. Per i consigli prodotto, JF Ride Shop resta lo shop partner ufficiale.",
   "en": "Sports Discount is a multisport shop. It may carry boardsports equipment and, depending on its range or stock, freestyle scooters. It is not a RIDLY/RSL partner; Lya simply mentions it as another retailer. For product recommendations, JF Ride Shop remains the official partner shop."
  },
  "keywords": [
   "sports discount",
   "sports-discount",
   "sport discount lausanne",
   "sports discount lausanne"
  ],
  "source": {
   "label": "Sports Discount Lausanne",
   "url": "https://www.sports-discount.net/fr/"
  },
  "dynamic": false,
  "verified": "2026-08-27"
 },
 {
  "id": "shop-factory-sport-outlet",
  "category": "Shops Suisse romande",
  "questions": {
   "fr": "C’est quoi Factory Sport Outlet Neuchâtel ?",
   "de": "Was ist Factory Sport Outlet Neuchâtel?",
   "it": "Cos’è Factory Sport Outlet Neuchâtel?",
   "en": "What is Factory Sport Outlet Neuchâtel?"
  },
  "answer": {
   "fr": "Factory Sport Outlet est un shop multisport/glisse. Selon le catalogue ou le stock, on peut aussi y trouver de la trottinette freestyle et certaines pièces. Ce n’est pas un partenaire RIDLY/RSL : Lya le cite à titre informatif. Pour les recommandations produits, JF Ride Shop reste le shop partenaire officiel.",
   "de": "Factory Sport Outlet ist ein Multisport-/Boardsport-Shop. Je nach Sortiment oder Lagerbestand findet man dort auch Freestyle-Scooter und einzelne Teile. Er ist kein RIDLY/RSL-Partner; Lya nennt ihn nur informativ. Für Produktempfehlungen bleibt JF Ride Shop der offizielle Partner-Shop.",
   "it": "Factory Sport Outlet è uno shop multisport/glisse. In base al catalogo o alla disponibilità può avere anche monopattini freestyle e alcuni componenti. Non è un partner RIDLY/RSL: Lya lo cita a titolo informativo. Per i consigli prodotto, JF Ride Shop resta lo shop partner ufficiale.",
   "en": "Factory Sport Outlet is a multisport/boardsports retailer. Depending on its range or stock, it may also carry freestyle scooters and some parts. It is not a RIDLY/RSL partner; Lya mentions it for information only. For product recommendations, JF Ride Shop remains the official partner shop."
  },
  "keywords": [
   "factory sport outlet",
   "factorysportoutlet",
   "factory neuchatel",
   "factory neuchâtel"
  ],
  "source": {
   "label": "Factory Sport Outlet",
   "url": "https://factorysportoutlet.ch/"
  },
  "dynamic": false,
  "verified": "2026-08-27"
 },
 {
  "id": "shop-decathlon",
  "category": "Shops Suisse romande",
  "questions": {
   "fr": "Est-ce que Decathlon vend de la trottinette freestyle ?",
   "de": "Verkauft Decathlon Freestyle-Scooter?",
   "it": "Decathlon vende monopattini freestyle?",
   "en": "Does Decathlon sell freestyle scooters?"
  },
  "answer": {
   "fr": "Decathlon est une grande enseigne multisport. Selon le magasin, le catalogue et le stock, on peut aussi y trouver des trottinettes freestyle. Ce n’est pas un partenaire RIDLY/RSL : Lya le mentionne simplement comme enseigne généraliste. Pour les recommandations produits, JF Ride Shop reste le shop partenaire officiel.",
   "de": "Decathlon ist eine grosse Multisport-Kette. Je nach Filiale, Sortiment und Lagerbestand gibt es dort auch Freestyle-Scooter. Decathlon ist kein RIDLY/RSL-Partner; Lya nennt die Kette nur als allgemeinen Händler. Für Produktempfehlungen bleibt JF Ride Shop der offizielle Partner-Shop.",
   "it": "Decathlon è una grande catena multisport. A seconda del negozio, del catalogo e della disponibilità può vendere anche monopattini freestyle. Non è un partner RIDLY/RSL: Lya lo cita semplicemente come rivenditore generalista. Per i consigli prodotto, JF Ride Shop resta lo shop partner ufficiale.",
   "en": "Decathlon is a large multisport chain. Depending on the store, range and stock, it may also carry freestyle scooters. It is not a RIDLY/RSL partner; Lya mentions it only as a general retailer. For product recommendations, JF Ride Shop remains the official partner shop."
  },
  "keywords": [
   "decathlon",
   "decathlon scooter",
   "decathlon trottinette",
   "oxelo freestyle",
   "mf100",
   "mf500",
   "mf520"
  ],
  "source": {
   "label": "Decathlon Suisse",
   "url": "https://www.decathlon.ch/"
  },
  "dynamic": false,
  "verified": "2026-08-27"
 },
 {
  "id": "shop-ochsner",
  "category": "Shops Suisse romande",
  "questions": {
   "fr": "Est-ce que Ochsner Sport vend des trottinettes freestyle ?",
   "de": "Verkauft Ochsner Sport Freestyle-Scooter?",
   "it": "Ochsner Sport vende monopattini freestyle?",
   "en": "Does Ochsner Sport sell freestyle scooters?"
  },
  "answer": {
   "fr": "Ochsner Sport est une grande enseigne multisport. Selon le catalogue et le stock, on peut aussi y trouver des trottinettes, parfois des modèles freestyle. Ce n’est pas un partenaire RIDLY/RSL : Lya le cite simplement comme enseigne généraliste. Pour les recommandations produits, JF Ride Shop reste le shop partenaire officiel.",
   "de": "Ochsner Sport ist eine grosse Multisport-Kette. Je nach Sortiment und Lagerbestand findet man dort auch Scooter und teilweise Freestyle-Modelle. Ochsner Sport ist kein RIDLY/RSL-Partner; Lya nennt die Kette nur als allgemeinen Händler. Für Produktempfehlungen bleibt JF Ride Shop der offizielle Partner-Shop.",
   "it": "Ochsner Sport è una grande catena multisport. A seconda del catalogo e della disponibilità può avere anche monopattini, talvolta modelli freestyle. Non è un partner RIDLY/RSL: Lya lo cita semplicemente come rivenditore generalista. Per i consigli prodotto, JF Ride Shop resta lo shop partner ufficiale.",
   "en": "Ochsner Sport is a large multisport chain. Depending on the range and stock, it may also carry scooters, sometimes freestyle models. It is not a RIDLY/RSL partner; Lya mentions it only as a general retailer. For product recommendations, JF Ride Shop remains the official partner shop."
  },
  "keywords": [
   "ochsner",
   "ochsner sport",
   "ochsner trottinette",
   "ochsner scooter"
  ],
  "source": {
   "label": "Ochsner Sport",
   "url": "https://www.ochsnersport.ch/"
  },
  "dynamic": false,
  "verified": "2026-08-27"
 },
 {
  "id": "shop-freestyle-pro",
  "category": "Shops Suisse romande",
  "questions": {
   "fr": "C’est quoi Freestyle-Pro Shop à Cheseaux ?",
   "de": "Was ist Freestyle-Pro Shop in Cheseaux?",
   "it": "Cos’è Freestyle-Pro Shop a Cheseaux?",
   "en": "What is Freestyle-Pro Shop in Cheseaux?"
  },
  "answer": {
   "fr": "Freestyle-Pro Shop est un autre shop référencé dans la région lausannoise, avec une orientation trottinette freestyle dans les annuaires publics. Ce n’est pas un partenaire RIDLY/RSL, donc Lya le cite simplement à titre informatif et ne le met pas en avant. Pour les recommandations produits, JF Ride Shop reste le shop partenaire officiel.",
   "de": "Freestyle-Pro Shop ist ein weiterer Händler im Raum Lausanne, der in öffentlichen Verzeichnissen mit Freestyle-Scootern geführt wird. Er ist kein RIDLY/RSL-Partner; Lya nennt ihn daher nur informativ und hebt ihn nicht hervor. Für Produktempfehlungen bleibt JF Ride Shop der offizielle Partner-Shop.",
   "it": "Freestyle-Pro Shop è un altro rivenditore della regione di Losanna, indicato negli elenchi pubblici con un orientamento al monopattino freestyle. Non è un partner RIDLY/RSL, quindi Lya lo cita solo a titolo informativo e non lo mette in evidenza. Per i consigli prodotto, JF Ride Shop resta lo shop partner ufficiale.",
   "en": "Freestyle-Pro Shop is another retailer in the Lausanne area, listed in public directories with a freestyle-scooter focus. It is not a RIDLY/RSL partner, so Lya mentions it only for information and does not highlight it. For product recommendations, JF Ride Shop remains the official partner shop."
  },
  "keywords": [
   "freestyle pro shop",
   "freestyle-pro shop",
   "freestyle pro cheseaux",
   "shop cheseaux scooter"
  ],
  "source": {
   "label": "Local.ch / Annuaire 2026",
   "url": "https://www.localsearch.ch/"
  },
  "dynamic": false,
  "verified": "2026-08-27"
 },
 {
  "id": "shop-romandie-overview",
  "category": "Shops Suisse romande",
  "questions": {
   "fr": "Quels shops vendent de la trottinette freestyle en Suisse romande ?",
   "de": "Welche Shops verkaufen Freestyle-Scooter in der Romandie?",
   "it": "Quali negozi vendono monopattini freestyle nella Svizzera romanda?",
   "en": "Which shops sell freestyle scooters in French-speaking Switzerland?"
  },
  "answer": {
   "fr": "Pour RIDLY/RSL, le shop partenaire officiel mis en avant est JF Ride Shop, spécialisé dans la trottinette freestyle. D’autres revendeurs existent en Suisse romande, comme Sportmania, Sports Discount, Factory Sport Outlet, Decathlon, Ochsner Sport ou Freestyle-Pro Shop. La plupart sont des enseignes multisports ou des revendeurs non partenaires : ils peuvent avoir de la trottinette selon leur catalogue et leur stock, mais Lya les cite seulement à titre informatif.",
   "de": "Für RIDLY/RSL ist JF Ride Shop der offizielle Partner-Shop und wird als Freestyle-Scooter-Spezialist hervorgehoben. Weitere Händler in der Romandie sind unter anderem Sportmania, Sports Discount, Factory Sport Outlet, Decathlon, Ochsner Sport und Freestyle-Pro Shop. Die meisten sind Multisport-Händler oder keine Partner; sie können je nach Sortiment und Lagerbestand Scooter führen, werden von Lya aber nur informativ genannt.",
   "it": "Per RIDLY/RSL, JF Ride Shop è lo shop partner ufficiale messo in evidenza come specialista del monopattino freestyle. Altri rivenditori nella Svizzera romanda includono Sportmania, Sports Discount, Factory Sport Outlet, Decathlon, Ochsner Sport e Freestyle-Pro Shop. La maggior parte sono multisport o non partner; possono avere monopattini secondo catalogo e disponibilità, ma Lya li cita solo a titolo informativo.",
   "en": "For RIDLY/RSL, JF Ride Shop is the official partner shop and is highlighted as the freestyle-scooter specialist. Other retailers in French-speaking Switzerland include Sportmania, Sports Discount, Factory Sport Outlet, Decathlon, Ochsner Sport and Freestyle-Pro Shop. Most are multisport retailers or non-partners; they may carry scooters depending on their range and stock, but Lya mentions them for information only."
  },
  "keywords": [
   "shops suisse romande",
   "shop trottinette suisse",
   "magasin trottinette romandie",
   "où acheter trottinette suisse romande",
   "ou acheter trottinette suisse romande",
   "magasins scooter romandie"
  ],
  "source": {
   "label": "Base RIDLY – shops Suisse romande",
   "url": "https://www.jfrideshop.ch/"
  },
  "dynamic": false,
  "verified": "2026-08-27"
 },
 {
  "id": "history-french-id",
  "category": "Histoire trottinette freestyle",
  "questions": {
   "fr": "Quel rôle French ID a joué dans l'histoire de la trottinette freestyle ?",
   "de": "Welche Rolle spielte French ID in der Geschichte des Freestyle-Scooters?",
   "it": "Che ruolo ha avuto French ID nella storia del monopattino freestyle?",
   "en": "What role did French ID play in freestyle scootering history?"
  },
  "answer": {
   "fr": "French ID fait partie des marques européennes pionnières de la fin des années 2000. Les archives communautaires de l'époque la citent notamment dans le développement de pièces réellement pensées pour le freestyle, comme des guidons monoblocs et des fourches threadless autour de 2008. Comme beaucoup d'informations de cette période viennent d'archives de forums, RIDLY classe ce point comme historique communautaire plutôt que comme record officiel.",
   "de": "French ID gehört zu den europäischen Pioniermarken der späten 2000er-Jahre. Zeitgenössische Community-Archive nennen unter anderem einteilige Bars und threadless Forks, die um 2008 speziell für Freestyle entwickelt wurden. Da viele Details aus alten Foren stammen, behandelt RIDLY dies als Community-Historie und nicht als offiziellen Rekord.",
   "it": "French ID è tra i marchi europei pionieri della fine degli anni 2000. Gli archivi della community dell'epoca citano, tra le altre cose, manubri monoblocco e forcelle threadless sviluppati per il freestyle intorno al 2008. Poiché molti dettagli provengono da vecchi forum, RIDLY lo considera storia della community e non un record ufficiale.",
   "en": "French ID was one of the pioneering European brands of the late 2000s. Period community archives mention purpose-built freestyle parts such as one-piece bars and threadless forks around 2008. Because much of this early information comes from archived forums, RIDLY treats it as community history rather than an official record."
  },
  "keywords": [
   "french id",
   "french-id",
   "frenchid",
   "ancienne marque french id",
   "pionnier french id",
   "one piece bar french id",
   "fourche french id"
  ],
  "source": {
   "label": "The Scooter Resource – historical timeline",
   "url": "https://forum.scooterresource.com/threads/scooter-history-timeline.32102/"
  },
  "dynamic": false,
  "verified": "2026-08-27"
 },
 {
  "id": "scooter-anatomy-modern",
  "category": "Matériel trottinette",
  "questions": {
   "fr": "Quelles sont les pièces d'une trottinette freestyle moderne ?",
   "de": "Aus welchen Teilen besteht ein moderner Freestyle-Scooter?",
   "it": "Quali sono i componenti di un monopattino freestyle moderno?",
   "en": "What are the parts of a modern freestyle scooter?"
  },
  "answer": {
   "fr": "Une trottinette freestyle moderne est construite autour de quelques éléments principaux : deck, fourche, headset/jeu de direction, système de compression, guidon, collier ou SCS, poignées, roues, roulements, axes et frein/fender. Contrairement aux petites trottinettes de loisir des débuts, le setup freestyle est généralement fixe, renforcé et conçu pour que les pièces puissent être choisies et remplacées séparément. Les compatibilités importantes concernent surtout le diamètre du guidon, la compression, la fourche, le headset et les dimensions de roues.",
   "de": "Ein moderner Freestyle-Scooter besteht hauptsächlich aus Deck, Fork, Headset, Compression-System, Bar, Clamp oder SCS, Grips, Wheels, Bearings, Axles und Brake/Fender. Im Gegensatz zu frühen Freizeit-Scootern ist das Freestyle-Setup in der Regel fest, verstärkt und modular. Besonders wichtig sind die Kompatibilitäten von Bar-Durchmesser, Compression, Fork, Headset und Wheel-Maßen.",
   "it": "Un monopattino freestyle moderno è composto principalmente da deck, forcella, headset, sistema di compressione, manubrio, clamp o SCS, manopole, ruote, cuscinetti, assi e freno/fender. A differenza dei primi monopattini da svago, il setup freestyle è normalmente fisso, rinforzato e modulare. Le compatibilità più importanti riguardano diametro del manubrio, compressione, forcella, headset e dimensioni delle ruote.",
   "en": "A modern freestyle scooter is built around a deck, fork, headset, compression system, bar, clamp or SCS, grips, wheels, bearings, axles and brake/fender. Unlike early recreational scooters, freestyle setups are generally fixed, reinforced and modular. The key compatibility points are bar diameter, compression, fork, headset and wheel dimensions."
  },
  "keywords": [
   "anatomie trottinette",
   "pieces trottinette",
   "pièces trottinette",
   "composants trottinette",
   "parties trottinette",
   "scooter anatomy",
   "scooter parts modern"
  ],
  "source": {
   "label": "World Skate – Scootering Rulebook / base technique RIDLY",
   "url": "https://www.worldskate.org/scootering/about/regulations.html"
  },
  "dynamic": false,
  "verified": "2026-08-27"
 },
 {
  "id": "rules-world-skate-safety",
  "category": "Règles & sécurité",
  "questions": {
   "fr": "Le casque est-il obligatoire en compétition de trottinette freestyle ?",
   "de": "Ist ein Helm bei Freestyle-Scooter-Wettkämpfen Pflicht?",
   "it": "Il casco è obbligatorio nelle gare di monopattino freestyle?",
   "en": "Is a helmet mandatory in freestyle scooter competitions?"
  },
  "answer": {
   "fr": "Dans les règlements World Skate récents, le casque est obligatoire en Park pendant les entraînements et la compétition. En Street, il est obligatoire pour les riders de 17 ans ou moins et fortement recommandé pour les autres. Les règlements peuvent évoluer : pour un événement précis, il faut toujours vérifier le règlement de l'organisateur. Pour apprendre et progresser, RIDLY recommande le casque indépendamment du minimum réglementaire.",
   "de": "Nach den aktuellen World-Skate-Regeln ist ein Helm im Park während Training und Wettkampf Pflicht. Im Street ist er für Rider bis einschließlich 17 Jahre Pflicht und für ältere Rider dringend empfohlen. Regeln können sich ändern; für ein konkretes Event sollte immer das Veranstalter-Reglement geprüft werden.",
   "it": "Nei regolamenti World Skate recenti il casco è obbligatorio nel Park durante allenamenti e gara. Nello Street è obbligatorio per i rider fino a 17 anni ed è fortemente consigliato agli altri. Le regole possono cambiare: per un evento specifico va sempre controllato il regolamento dell'organizzatore.",
   "en": "Under recent World Skate rules, helmets are mandatory in Park during practice and competition. In Street, they are mandatory for riders aged 17 and under and strongly recommended for older riders. Rules can change, so always check the organizer's rules for a specific event."
  },
  "keywords": [
   "casque obligatoire contest",
   "casque world skate",
   "helmet world skate",
   "helmet park street",
   "protection contest scooter",
   "reglement casque trottinette"
  ],
  "source": {
   "label": "World Skate Europe – Scootering rules",
   "url": "https://europe.worldskate.org/wp-content/uploads/SCOOTERING_EC_2025_1.pdf"
  },
  "dynamic": false,
  "verified": "2026-08-27"
 }
];
