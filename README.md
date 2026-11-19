# Portfolio de Fanta Kone (une seule page)

Site statique en **HTML + CSS + JavaScript pur**. Tout est dans `index.html`, rangé en blocs commentés (Ctrl+F puis `BLOC :`).

## Où modifier quoi

| Je veux changer…                         | J’ouvre…                                                              |
|------------------------------------------|-----------------------------------------------------------------------|
| Une compétence ou une carte              | `index.html`, bloc COMPÉTENCES (un `<article class="sk">` par carte)  |
| Une expérience (carte)                   | `index.html`, bloc EXPÉRIENCES (un `<article class="xi">`, du plus récent au plus ancien) |
| Le détail d’une expérience (fenêtre)     | `js/experiences-data.js`                                               |
| Une formation                            | `index.html`, bloc FORMATION (le numéro est dans `data-n="01"`)       |
| Une certification                        | `index.html`, bloc CERTIFICATIONS                                     |
| Un projet                                | `js/data.js`                                                          |
| Engagements, cuisine, photos             | `index.html`, bloc ENGAGEMENT ET PASSIONS                             |
| Un logo                                  | remplacer le fichier dans `assets/logos/` (voir ci-dessous)           |
| Les photos                               | `assets/photos/` (mêmes noms de fichiers)                             |
| Les couleurs (Jour / Nuit / Néon)        | `css/base.css`, en haut                                               |
| Le fond animé                            | `js/background.js`                                                    |
| Le formulaire de contact                 | `index.html` (bloc CONTACT) + `js/contact.js`                         |

## Logos

- **Vrais logos** dans `assets/logos/` (fichiers `.png`) : Capgemini, Hitachi, ImsCloud, RobotsMali, ESEO, ITMA, CLOE, INRS, MOOC GdP, Lycée Sacré-Cœur (emblème seul, version « 20 ans ») et MyDigitalSchool (extrait de la plaquette du programme).
- **Logos dessinés** (`.svg`) pour ESEOBANTU et la cuisine, faute de logo officiel. Pour mettre un vrai logo d’ESEOBANTU : enregistre-le dans `assets/logos/` (par exemple `eseobantu.png`), puis dans `index.html` fais Ctrl+H et remplace `eseobantu.svg` par `eseobantu.png`.

## Apparence

- **Palette** (Jour, Nuit, Néon) : variables en haut de `css/base.css`.
- **Bannière d’accueil** : `css/hero.css` et le bloc ACCUEIL de `index.html`.
- **Bordures, ombres, arrondis** : `css/pro.css`.

## Détail des expériences

Le bouton « Voir le détail complet » de chaque expérience ouvre une fenêtre avec le contexte, ce que tu as fait, les résultats chiffrés et les technologies. Tout se modifie dans `js/experiences-data.js` : le numéro d’une expérience suit l’ordre des cartes (0 = la première). Chaque texte existe en deux versions `[français, anglais]`. Pour un chiffre, ajoute une ligne dans `res` : `{"n":"550","l":["Skip Records traités","Skip Records processed"]}`.

## Règles à retenir

- **Textes** : le français est dans la balise, l’anglais dans `data-en="..."`. Modifie les deux.
- **Ordre des scripts** à la fin de `index.html` : ne le change pas (`main.js` en dernier).
- **Ajouter une section** : copie un bloc `<section id="...">`, ajoute son fichier `css/` et son `<link>`, puis une ligne `<a href="#id">` dans le menu (le lien actif se gère tout seul).
- **Photos de groupe** : ces photos montrent d’autres personnes, vérifie que c’est OK pour elles avant de publier.

## Voir le site sur ton PC

Double-clique sur `index.html`, ou utilise l’extension **Live Server** de VS Code.

## Mettre à jour le site sur GitHub

```
git add -A
git commit -m "Ce que j’ai changé"
git push
```
