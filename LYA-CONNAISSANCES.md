# Base de connaissances de Lya

Tout ce que Lya sait vit dans **`js/lya-knowledge.js`**. Le moteur — la
recherche, le score, le garde-fou, les langues — reste dans `ridly-lya.html`
et n'a pas à être touché pour corriger une réponse.

296 entrées à ce jour.

## Modifier une réponse

Ouvre `js/lya-knowledge.js`, cherche l'entrée par son `id` ou par son texte,
corrige, déploie. C'est tout.

## Ajouter une entrée

Copie ce modèle à la fin du tableau, avant le `]` final :

```js
 {
  "id": "scooter-mon-trick",
  "category": "Trottinette freestyle",
  "questions": {
   "fr": "C'est quoi un mon-trick ?",
   "de": "Was ist ein mon-trick?",
   "it": "Cos'è un mon-trick?",
   "en": "What is a mon-trick?"
  },
  "answer": {
   "fr": "Le mon-trick, c'est … Puis la technique.",
   "de": "…",
   "it": "…",
   "en": "…"
  },
  "keywords": ["mon-trick", "c est quoi mon-trick", "trick"],
  "source": { "label": "RSL – Cours", "url": "https://rsl-swiss.ch/cours" },
  "dynamic": false,
  "verified": "2026-08-31"
 }
```

### Règles qui comptent

**Commencer par une définition, puis la technique.** C'est ce qui permet à
« c'est quoi X » et « comment faire X » de tomber sur la même entrée sans la
dupliquer. Une entrée rédigée uniquement en « comment apprendre » répond à
côté quand on lui demande ce que c'est.

**Un `id` unique.** Certaines règles de score visent des identifiants précis :
un doublon casse leur comportement.

**Les quatre langues.** Une entrée sans `en` ou sans `de` renverra du vide aux
riders qui ont choisi cette langue.

**Mots-clés en minuscules sans accent.** Le moteur normalise avant de
comparer : `c est quoi` et non `c'est quoi`.

**Pas de mot-clé partagé entre deux entrées.** « whip » était à la fois sur
`scooter-tailwhip` et `scooter-heelwhip` : le gagnant dépendait du score, donc
du hasard.

## Vérifier après modification

```bash
node --check js/lya-knowledge.js

node -e 'global.window={};require("./js/lya-knowledge.js");
const k=window.RIDLY_KNOWLEDGE;
const ids=new Set(k.map(e=>e.id));
console.log(k.length,"entrees,",ids.size,"ids uniques");
console.log("sans reponse FR :",k.filter(e=>!e.answer?.fr).length);'
```

## Ce qui n'est pas ici

Les spots ne sont plus dans ce fichier : Lya les lit en direct dans la table
`spots` de Supabase. Un park ajouté via l'app est connu d'elle immédiatement.

Les liens vers JF Ride Shop sont construits par le code, à partir des
catégories réelles de la boutique. Voir `JF_SHOP_CATEGORIES` dans
`ridly-lya.html`.

---

# Graphe de progression

`window.RIDLY_PROGRESSION`, en bas de `js/lya-knowledge.js`, relie les tricks
entre eux. C'est lui qui permet à Lya de répondre à « et après ? », « c'est
dur ? » ou « je bloque dessus » sans qu'on lui répète de quoi on parle.

```js
"scooter-tailwhip": {
  avant: ["scooter-bunny-hop","scooter-180"],   // prérequis
  apres: ["scooter-heelwhip","scooter-bar-to-whip"],
  difficulte: 3,                                 // 1 débutant … 5 confirmé
  erreur: "Tu suis le deck des yeux en tournant la tête. …"
}
```

**`erreur`** est le champ qui fait le plus d'effet : c'est ce qu'un pote te
dirait en te regardant rater. Quand un rider écrit « j'y arrive pas », Lya sort
cette phrase. Une entrée sans `erreur` retombe sur un conseil générique — donc
plus tu en remplis, plus elle paraît compétente.

**Les identifiants doivent exister** dans la base de connaissances, sinon le
lien est mort. Pour vérifier :

```bash
node -e 'global.window={};require("./js/lya-knowledge.js");
const k=new Set(window.RIDLY_KNOWLEDGE.map(e=>e.id));
let n=0;
for(const [id,g] of Object.entries(window.RIDLY_PROGRESSION)){
  if(!k.has(id)) {console.log("inconnu:",id);n++;}
  [...g.avant,...g.apres].forEach(r=>{if(!k.has(r)){console.log("lien casse:",id,"->",r);n++;}});
}
console.log(n?n+" probleme(s)":"graphe coherent");'
```
