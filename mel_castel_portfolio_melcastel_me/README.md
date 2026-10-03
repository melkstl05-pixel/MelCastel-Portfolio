# MEL CASTEL — Portfolio

Portfolio personnel de Mel Castel.

## Domaine

Le site est préparé pour :

**https://melcastel.me**

Le fichier `CNAME` contient déjà `melcastel.me`.

## Mettre le site sur GitHub Pages

### 1. Créer le repository

Sur GitHub, crée un repository public, par exemple :

`mel-castel-portfolio`

Puis téléverse :
- `index.html`
- `style.css`
- `script.js`
- `CNAME`

### 2. Activer GitHub Pages

Dans le repository :

**Settings → Pages**

Sous **Build and deployment** :
- Source : `Deploy from a branch`
- Branch : `main`
- Folder : `/ (root)`
- Save

### 3. Connecter melcastel.me

Dans **Settings → Pages → Custom domain**, écris :

`melcastel.me`

GitHub vérifiera ensuite la configuration du domaine.

### 4. DNS chez le registrar où tu as acheté melcastel.me

Pour le domaine racine `melcastel.me`, configure les enregistrements DNS indiqués par GitHub dans sa documentation actuelle.

Pour `www`, crée un enregistrement CNAME qui pointe vers ton adresse GitHub Pages, par exemple :

`TON-USERNAME.github.io`

Ne supprime pas les éventuels enregistrements nécessaires à ton email si tu utilises une adresse @melcastel.me.

### 5. HTTPS

Une fois le domaine correctement relié, active :

**Settings → Pages → Enforce HTTPS**

Le site sera alors accessible avec :

**https://melcastel.me**

## Important

Le domaine reste enregistré chez ton registrar. GitHub Pages est uniquement l'hébergement du site.

Tu peux donc changer d'hébergeur plus tard sans perdre `melcastel.me`.

## Personnaliser le site

Dans `index.html`, remplace :
- `hello@yourdomain.com`
- les textes de projets
- les liens Instagram / Spotify / Vimeo
- les emplacements visuels par tes vraies images et vidéos

Les styles sont dans `style.css` et les interactions dans `script.js`.
