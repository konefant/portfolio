# Portfolio de Fanta Kone (une seule page)

Site statique en **HTML + CSS + JavaScript pur**. Tout le site est dans `index.html` (une page longue qui défile), mais le code est rangé en blocs pour s’y retrouver.

## Où modifier quoi

| Je veux changer…                         | J’ouvre…                                              |
|------------------------------------------|-------------------------------------------------------|
| Le texte d’une section                   | `index.html`, cherche `BLOC : NOM-DE-LA-SECTION`      |
| Un projet (ou en ajouter)                | `js/data.js`                                          |
| Les couleurs (Jour / Nuit / Néon)        | `css/base.css`, en haut                               |
| Le style d’une section                   | le fichier `css/` du même nom (`hero.css`, `projets.css`…) |
| La fenêtre de détail d’un projet         | `css/detail.css` (style) et `js/projets.js` (contenu) |
| Le fond interactif (bulles, confettis)   | `js/background.js`                                    |
| Les thèmes Jour / Nuit / Néon            | `js/theme.js`                                         |
| Le changement FR / EN                    | `js/lang.js`                                          |
| Ma photo                                 | remplacer `assets/photo.jpg` (même nom)               |

## Structure

```
portfolio/
├── index.html           la page complète, découpée en BLOCS commentés
├── css/                 un fichier de style par bloc
│   ├── base.css  header-footer.css  hero.css  profil.css  projets.css
│   └── detail.css  competences.css  parcours.css  engagement.css  contact.css  responsive.css
├── js/
│   ├── utils.js  data.js  projets.js  lang.js  theme.js  background.js  main.js
└── assets/photo.jpg
```

Dans `index.html`, chaque bloc commence par un cadre de commentaire qui indique son nom et ses fichiers de style. Utilise **Ctrl+F** puis `BLOC :` pour sauter d’un bloc à l’autre.

## Règles à retenir

- **Textes** : le français est dans la balise, l’anglais dans `data-en="..."`. Modifie les deux.
- **Ordre des scripts** à la fin de `index.html` : ne le change pas (`main.js` doit rester en dernier).
- **Ajouter une section** : copie un bloc `<section>` dans `index.html`, crée son fichier `css/ma-section.css`, ajoute la ligne `<link>` dans le `<head>` et un lien dans le menu.

## Voir le site sur ton PC

Double-clique sur `index.html`, ou utilise l’extension **Live Server** de VS Code.

## Mettre à jour le site sur GitHub

```
git add -A
git commit -m "Ce que j’ai changé"
git push
```

Le site se met à jour en une à deux minutes.
