# 🖥️ Setup Local - TCO Calculator

Guide complet pour installer et exécuter le TCO Calculator en local.

## Prérequis

### 1. Node.js
- Version minimale : Node.js 18.x LTS
- [Télécharger Node.js](https://nodejs.org/)

Vérifier l'installation :
```bash
node --version  # Doit afficher v18.x ou v20.x
npm --version   # Doit afficher 9.x ou 10.x
```

### 2. Git
- [Télécharger Git](https://git-scm.com/)

## Installation

### Étape 1 : Cloner le projet
```bash
git clone <url-du-repo>
cd tco-calculator
```

### Étape 2 : Installer les dépendances
```bash
npm install
```

Cette commande installe :
- React 18
- Vite 5
- Recharts 2
- Tailwind CSS 3
- Toutes les dépendances de développement

⏱️ **Temps estimé** : 1-2 minutes

### Étape 3 : Lancer le serveur de développement
```bash
npm run dev
```

✅ L'application s'ouvre automatiquement sur http://localhost:5173

## Utilisation en développement

### Hot Reload
- Modifiez n'importe quel fichier dans `src/`
- Les changements sont reflétés **instantanément** dans le navigateur
- Pas besoin de recharger manuellement

### Structure des fichiers
- `src/components/` → Modifiez les composants React
- `src/data/` → Modifiez les données de pricing
- `src/utils/` → Modifiez les fonctions de calcul
- `src/styles/` → Modifiez les styles CSS

### Commandes disponibles
```bash
npm run dev      # Serveur de développement (port 5173)
npm run build    # Build production (dist/)
npm run preview  # Preview du build
```

## Build production

### Générer les fichiers statiques
```bash
npm run build
```

Les fichiers sont générés dans `dist/` :
```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── ...
```

### Tester le build localement
```bash
npm run preview
```

Ouvre http://localhost:4173

## Dépannage

### Erreur "command not found: npm"
➡️ Node.js n'est pas installé ou pas dans le PATH
- Réinstaller Node.js
- Redémarrer le terminal

### Erreur "Cannot find module"
➡️ Dépendances mal installées
```bash
rm -rf node_modules package-lock.json
npm install
```

### Port 5173 déjà utilisé
➡️ Changer le port dans `vite.config.js` :
```js
server: {
  port: 3000  // Ou un autre port
}
```

### Graphiques Recharts ne s'affichent pas
➡️ Vérifier l'installation de Recharts :
```bash
npm list recharts
```

Si absent :
```bash
npm install recharts
```

### Erreur de build Tailwind
➡️ Régénérer la config Tailwind :
```bash
npx tailwindcss init -p
```

## Performance

### Premier lancement
- Installation des dépendances : ~2 minutes
- Lancement du serveur : ~5 secondes
- Compilation initiale : ~10 secondes

### Relancement
- Lancement du serveur : ~2 secondes
- Hot reload : < 1 seconde

## Éditeur recommandé

### VS Code
Extensions utiles :
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- ES7+ React/Redux/React-Native snippets

### Configuration VS Code
`.vscode/settings.json` :
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "tailwindCSS.experimental.classRegex": [
    ["className\\s*=\\s*['\"`]([^'\"`]*)['\"`]"]
  ]
}
```

## Prochaines étapes

✅ Application tourne en local ?
→ Consultez [DEVELOPMENT.md](./DEVELOPMENT.md) pour contribuer

✅ Prêt à déployer ?
→ Consultez [SETUP_AMPLIFY.md](./SETUP_AMPLIFY.md) pour le déploiement AWS
