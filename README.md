# Portfolio de Fanta Kone (une seule page)

Site statique en **HTML + CSS + JavaScript pur**. Tout est dans `index.html` (une page longue), rangé en blocs commentés.

## Où modifier quoi

| Je veux changer…                          | J’ouvre…                                                        |
|-------------------------------------------|-----------------------------------------------------------------|
| Le texte d’une section                    | `index.html`, Ctrl+F puis `BLOC : NOM-DE-LA-SECTION`            |
| Un projet (ou en ajouter)                 | `js/data.js`                                                    |
| Une expérience du parcours                | `index.html`, bloc PARCOURS (un `<article class="tli">` par ligne, du plus récent au plus ancien) |
| Les couleurs (Jour / Nuit / Néon)         | `css/base.css`, en haut                                         |
| Le menu flottant et le pied de page       | `index.html` (blocs MENU et PIED DE PAGE) + `css/header-footer.css` |
| Le fond animé (réseau de points)          | `js/background.js`                                              |
| Le formulaire de contact                  | `index.html` (bloc CONTACT) + `js/contact.js`                   |
| Ma photo                                  | remplacer `assets/photo.jpg` (même nom)                         |

## Structure

```
portfolio/
├── index.html      la page complète, en BLOCS commentés
├── css/            un fichier de style par bloc (base, header-footer, hero, profil, projets, detail,
│                   competences, parcours, engagement, contact, responsive)
├── js/             utils, data, projets, lang, theme, background, nav, contact, main
└── assets/photo.jpg
```

## Règles à retenir

- **Textes** : le français est dans la balise, l’anglais dans `data-en="..."`. Modifie les deux. Pour les champs du formulaire, l’anglais du texte d’exemple est dans `data-enp="..."`.
- **Ordre des scripts** à la fin de `index.html` : ne le change pas (`main.js` en dernier).
- **Ajouter une section** : copie un bloc `<section id="...">`, ajoute son fichier `css/` et son `<link>`, puis une ligne `<a href="#id">` dans le menu (le lien actif se gère tout seul).

## Formulaire de contact

Le formulaire **ouvre la messagerie du visiteur** avec le message prérempli (`mailto:`). Rien n’est stocké sur le site. Pour recevoir les messages directement, on peut brancher un service comme Formspree plus tard.

## Mettre à jour le site sur GitHub

```
git add -A
git commit -m "Ce que j’ai changé"
git push
```
