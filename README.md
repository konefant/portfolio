# Portfolio de Fanta Kone (une seule page)

Site statique en **HTML + CSS + JavaScript pur**. Tout est dans `index.html`, rangé en blocs commentés (Ctrl+F puis `BLOC :`).

## Où modifier quoi

| Je veux changer…                         | J’ouvre…                                                              |
|------------------------------------------|-----------------------------------------------------------------------|
| Une compétence ou une carte              | `index.html`, bloc COMPÉTENCES (un `<article class="sk">` par carte)  |
| Une expérience                           | `index.html`, bloc EXPÉRIENCES (un `<article class="xi">`, du plus récent au plus ancien) |
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

- `hitachi.svg` vient d’une bibliothèque d’icônes libre. Les autres (`capgemini`, `eseo`, `itma`, `cci`, `inrs`, `mooc`, `imscloud`, `robotsmali`, `eseobantu`, `lycee`, `cuisine`) sont des **logos provisoires** (texte ou pictogramme).
- Pour mettre un vrai logo : enregistre-le dans `assets/logos/` sous le même nom. Si c’est un PNG, par exemple `capgemini.png`, remplace `capgemini.svg` par `capgemini.png` dans `index.html` (Ctrl+H).

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
