# 🌐 TCO Calculator - Orange Business Cloud Connectivity

Calculateur de Total Cost of Ownership (TCO) pour comparer les coûts de connectivité cloud entre Orange Business ODCC et l'egress Internet standard (AWS Direct Connect / Azure ExpressRoute).

## ✨ Fonctionnalités

### Phase A - Graphiques & Détails (v6.0)
- ✅ Heatmap interactive avec économies/surcoûts
- ✅ Graphiques Recharts professionnels
- ✅ Détails complets des calculs (coûts unitaires)
- ✅ Analyse de charge du lien
- ✅ 15 pays Orange Business
- ✅ AWS (10 bandes passantes) & Azure (8 bandes passantes)
- ✅ Seuil de capacité configurable (40-80%)

## 🚀 Démarrage rapide

### Prérequis
- Node.js 18+ ([télécharger](https://nodejs.org/))
- Git

### Installation locale

```bash
# 1. Cloner le projet
git clone <url-du-repo>
cd tco-calculator

# 2. Installer les dépendances
npm install

# 3. Lancer en mode développement
npm run dev
```

L'application s'ouvre automatiquement sur http://localhost:5173

### Build production

```bash
npm run build
```

Les fichiers statiques sont générés dans `dist/`

## 📁 Structure du projet

```
tco-calculator/
├── src/
│   ├── components/         # Composants React
│   │   ├── Header.jsx
│   │   ├── Controls.jsx
│   │   ├── Heatmap.jsx
│   │   └── CellDetails/
│   │       ├── index.jsx
│   │       ├── Charts.jsx
│   │       ├── CostBreakdown.jsx
│   │       └── LinkAnalysis.jsx
│   ├── data/              # Données de pricing
│   │   ├── awsPricing.js
│   │   ├── azurePricing.js
│   │   └── obPricing.js
│   ├── utils/             # Utilitaires
│   │   ├── calculations.js
│   │   ├── formatters.js
│   │   └── colors.js
│   ├── styles/            # Styles CSS
│   │   └── index.css
│   ├── App.jsx            # Composant racine
│   └── main.jsx           # Point d'entrée
├── docs/                  # Documentation
│   ├── SETUP_LOCAL.md
│   ├── SETUP_AMPLIFY.md
│   └── DEVELOPMENT.md
├── package.json
├── vite.config.js
└── README.md
```

## 🛠️ Stack technique

- **React 18** - Framework UI
- **Vite 5** - Build tool & dev server
- **Tailwind CSS 3** - Styling
- **Recharts 2** - Graphiques
- **Node.js 18+** - Environnement

## 📖 Documentation

- [Setup local](docs/SETUP_LOCAL.md) - Installation et configuration locale
- [Setup AWS Amplify](docs/SETUP_AMPLIFY.md) - Déploiement sur AWS
- [Guide développement](docs/DEVELOPMENT.md) - Contribuer au projet

## 🔄 Workflow de développement

### Développement local
```bash
npm run dev        # Serveur de développement avec hot reload
npm run build      # Build production
npm run preview    # Preview du build
```

### Déploiement AWS Amplify
1. Push sur GitHub
2. Amplify déploie automatiquement
3. URL disponible instantanément

## 📊 Données de pricing

Les données de pricing sont mises à jour régulièrement :
- **AWS** : Direct Connect + Egress Internet
- **Azure** : ExpressRoute + Egress Internet  
- **Orange Business** : ODCC (15 pays)

Source des données : `cloud_pricing_20260126_183930.json`

## 🎯 Utilisation

1. **Sélectionner** pays OB + CSP + région
2. **Configurer** l'unité d'affichage et seuil de capacité
3. **Visualiser** la heatmap (vert = économies, bleu = surcoût)
4. **Cliquer** sur une cellule pour voir les détails complets

## 🐛 Dépannage

### L'application ne démarre pas
```bash
# Supprimer node_modules et réinstaller
rm -rf node_modules package-lock.json
npm install
```

### Erreur de build
```bash
# Nettoyer le cache Vite
rm -rf node_modules/.vite
npm run build
```

### Graphiques ne s'affichent pas
- Vérifier que Recharts est installé : `npm list recharts`
- Vider le cache du navigateur (Ctrl+F5)

## 📝 Changelog

### v6.0 (2026-01-27)
- ✨ Migration vers architecture React + Vite modulaire
- ✨ Ajout graphiques Recharts (comparaison + composition)
- ✨ Détails complets des calculs avec coûts unitaires
- ✨ Tableaux détaillés pour Private et Egress
- ✨ Analyse de charge améliorée
- 🐛 Correction de tous les bugs de la v5.3-rc1
- 🏗️ Architecture propre et maintenable

### v5.3-beta (2026-01-26)
- Données de pricing janvier 2026
- Fix OB pricing (Private uniquement)
- 15 pays Orange Business

## 👥 Contributeurs

- Jean-Charles (Orange Business) - Product Owner
- Claude (Anthropic) - Architecture & Développement

## 📄 License

Copyright © 2026 Orange Business. Tous droits réservés.

---

**Questions ?** Consultez la [documentation](docs/) ou ouvrez une issue.
