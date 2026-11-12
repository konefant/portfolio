# Portfolio de Fanta Kone

Site statique : **HTML + CSS + JavaScript pur**. Aucun outil à installer, il suffit d’un navigateur et d’un éditeur de code (VS Code par exemple).

## Structure

```
portfolio/
├── index.html          Accueil (présentation + profil)
├── projets.html        Projets (cartes + fenêtre de détail)
├── parcours.html       Parcours + compétences
├── engagement.html     eseoBantout, ambassadrice Capgemini, bénévolat
├── contact.html        Email, LinkedIn, téléphone
├── css/style.css       Tous les styles et les couleurs des thèmes
├── js/main.js          En-tête, thèmes Jour/Nuit/Néon, langue FR/EN, fond interactif
├── js/data.js          Les projets (textes FR/EN, technologies)
└── assets/photo.jpg    Ta photo
```

## Voir le site sur ton PC

Double-clique sur `index.html`. Avec VS Code, l’extension **Live Server** recharge la page à chaque modification.

## Modifier

- **Un texte** : ouvre la page concernée. Le texte français est dans la balise, la version anglaise dans l’attribut `data-en="..."`. Modifie les deux.
- **Un projet** : dans `js/data.js`, copie un bloc `{ ... }` et change les textes. Chaque texte a deux versions : `["français", "anglais"]`. Le champ `c` donne la couleur (`v` violet, `c` corail, `s` jaune, `m` menthe) et `big:1` rend la carte pleine largeur.
- **Les couleurs** : variables au début de `css/style.css` (`:root`, puis `dark` et `neon`).
- **La photo** : remplace `assets/photo.jpg` (même nom).
- **Ajouter une page** : copie `contact.html`, change le contenu, puis ajoute une ligne dans `NAV` en haut de `js/main.js`.
- **Ton CV** : mets `cv.pdf` dans `assets/` et ajoute dans `contact.html` : `<a href="assets/cv.pdf" download>Télécharger mon CV</a>`.

## Mettre sur GitHub et publier (GitHub Pages)

1. Crée un dépôt vide sur github.com (par exemple `portfolio`).
2. Dans le dossier du site, dans un terminal :

```
git init
git add .
git commit -m "Premier commit : portfolio"
git branch -M main
git remote add origin https://github.com/TON-PSEUDO/portfolio.git
git push -u origin main
```

3. Sur GitHub : **Settings → Pages → Source : Deploy from a branch → `main` / `(root)` → Save**.
4. Après une minute, le site est en ligne sur `https://TON-PSEUDO.github.io/portfolio/`.
   Avec un dépôt nommé `TON-PSEUDO.github.io`, l’adresse devient `https://TON-PSEUDO.github.io/`.

Ensuite, chaque `git add . && git commit -m "..." && git push` met le site à jour.

## À savoir

- Le site est public : ton email et ton numéro de téléphone (dans `contact.html`) seront visibles par tous.
- Les textes eseoBantout et ambassadrice Capgemini (`engagement.html`) sont généraux : à personnaliser.
