# Déploiement GitHub Pages — Rapport & Guide

## Contexte

Mise en place d'une redirection automatique depuis `https://tchindajoel.github.io/portfoliojoel/`
vers `https://portfolio.deboston.space/` via GitHub Actions + GitHub Pages.

---

## Problèmes rencontrés et solutions

### 1. Lock file manquant (`npm ci` échoue)

**Erreur :**
```
Error: Dependencies lock file is not found. Supported file patterns: package-lock.json, npm-shrinkwrap.json, yarn.lock
```

**Cause :** `npm ci` exige un fichier de verrouillage commité dans le repo. Sans lui, la commande échoue.

**Solution :** Remplacer `npm ci` par `npm install` dans le workflow.

```yaml
# Avant
run: npm ci

# Après
run: npm install
```

---

### 2. Conflit de dépendances peer (`ERESOLVE`)

**Erreur :**
```
npm error ERESOLVE unable to resolve dependency tree
npm error peer vite@"^4.0.0 || ^5.0.0" from @builder.io/vite-plugin-jsx-loc@0.1.1
npm error Found: vite@7.3.2
```

**Cause :** Une dépendance (`@builder.io/vite-plugin-jsx-loc`) déclare une compatibilité uniquement avec Vite 4/5, mais le projet utilise Vite 7.

**Solution :** Ajouter `--legacy-peer-deps` pour ignorer les contraintes de peer dependencies.

```yaml
run: npm install --legacy-peer-deps
```

> **Note :** La vraie solution à long terme est de mettre à jour ou retirer `@builder.io/vite-plugin-jsx-loc`.

---

### 3. Permission refusée lors du push sur `gh-pages` (403)

**Erreur :**
```
remote: Permission to TCHINDAJOEL/portfoliojoel.git denied to github-actions[bot].
fatal: unable to access '...': The requested URL returned error: 403
```

**Causes :**
- Le paramètre `ACCESS_TOKEN` n'existe pas dans cette version de l'action (nom invalide → token non transmis)
- Le job n'avait pas la permission `contents: write`

**Solution :**

```yaml
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: write   # ← indispensable pour pousser sur gh-pages

    steps:
      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@4.1.7
        with:
          token: ${{ secrets.GITHUB_TOKEN }}  # ← "token", pas "ACCESS_TOKEN"
          branch: gh-pages
          folder: ./dist
```

---

### 4. 404 après déploiement réussi

**Erreur :** `https://tchindajoel.github.io/portfoliojoel/` → 404 GitHub Pages

**Causes possibles :**

| Cause | Diagnostic |
|---|---|
| Mauvais dossier déployé | Le build Vite sort dans `dist/public/`, pas `dist/` |
| GitHub Pages non configuré | La branche `gh-pages` existe mais n'est pas définie comme source |
| Build inutile | Le projet est une app fullstack — builder toute l'app pour une simple redirection est excessif |

**Solution finale — générer le HTML de redirection directement dans le workflow :**

```yaml
- name: Generate redirect page
  run: |
    mkdir -p dist
    cat > dist/index.html << 'EOF'
    <!DOCTYPE html>
    <html lang="fr">
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="refresh" content="0; url=https://portfolio.deboston.space/" />
        <link rel="canonical" href="https://portfolio.deboston.space/" />
      </head>
      <body>
        <script>window.location.replace('https://portfolio.deboston.space/');</script>
        <p>Ce portfolio a déménagé. <a href="https://portfolio.deboston.space/">Cliquez ici</a>.</p>
      </body>
    </html>
    EOF
```

**Configurer GitHub Pages dans les paramètres du repo :**

`Settings → Pages → Source → Deploy from a branch → gh-pages / (root) → Save`

---

## Workflow final

```yaml
name: Deploy redirect to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: write

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Generate redirect page
        run: |
          mkdir -p dist
          cat > dist/index.html << 'EOF'
          <!DOCTYPE html>
          <html lang="fr">
            <head>
              <meta charset="utf-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <title>Redirection en cours...</title>
              <meta http-equiv="refresh" content="0; url=https://portfolio.deboston.space/" />
              <link rel="canonical" href="https://portfolio.deboston.space/" />
            </head>
            <body>
              <script>window.location.replace('https://portfolio.deboston.space/');</script>
              <p>Ce portfolio a déménagé. Si la redirection ne fonctionne pas,
                <a href="https://portfolio.deboston.space/">cliquez ici</a>.
              </p>
            </body>
          </html>
          EOF

      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@4.1.7
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
          branch: gh-pages
          folder: ./dist
```

---

## Checklist pour éviter ces problèmes

- [ ] Vérifier le dossier de sortie du build (`outDir` dans `vite.config.ts`) avant de configurer `folder:`
- [ ] Utiliser `npm install` si `package-lock.json` n'est pas commité, ou commiter le lock file
- [ ] Toujours ajouter `permissions: contents: write` quand le workflow pousse du code
- [ ] Utiliser le nom exact des paramètres de l'action (lire le README de la version utilisée)
- [ ] Vérifier `Settings → Pages` après le premier déploiement pour activer la source `gh-pages`
- [ ] Pour une simple redirection, ne pas builder toute l'app — générer le HTML directement
