# 🌐 TCO Calculator - Orange Business Cloud Connectivity

Calculateur de Total Cost of Ownership (TCO) pour comparer les coûts de connectivité cloud entre Orange Business ODCC et l'egress Internet standard (AWS Direct Connect / Azure ExpressRoute).

## ✨ Fonctionnalités

### Phase B - Public/IPsec, remise EVP & internationalisation (v6.2)
- ✅ Cloud Connect Public/IPsec (Evolution Platform), architectures Standard et Haute Disponibilité
- ✅ Grille de remise à deux dimensions (TCV × durée d'engagement)
- ✅ Bascule d'affichage EUR/USD
- ✅ Estimation optionnelle des coûts côté client (NAT Gateway + boîtier IPsec), hypothèses affichées
- ✅ Interface bilingue FR/EN
- ✅ Identité visuelle Orange (couleur de marque, Helvetica Neue, grille inspirée d'OUDS)
- ✅ Échelle de volumes resserrée sous 50 TiB/mois, volumes plus élevés ajoutables à la volée

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
- **Orange Business** : Cloud Connect Private + Public/IPsec (15 pays)

| Jeu de données | Source | Date |
|---|---|---|
| AWS / Azure (port, egress) | `pricing_data_jan2026.js` | 2026-01-26 |
| Orange Business Cloud Connect (Private + Public/IPsec) | `ODCCpricingJul26.csv` → `public/ob_pricing_jul2026.js` | 2026-07 |

Le pricing OB Jul26 est intégralement PAYG (plus de frais de réservation), nativement en EUR, avec disponibilité par CSP tracée par bande passante. Pour régénérer ce fichier après une nouvelle extraction tarifaire :
```bash
node scripts/convert_ob_pricing.mjs "<chemin CSV>" public/ob_pricing_<label>.js
```
puis mettre à jour la référence du script dans `index.html`.

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

### v6.2 (2026-07-08)
- ✨ Nouveau : Cloud Connect Public/IPsec (Evolution Platform) — architectures Standard et Haute Disponibilité, egress facturé côté CSP au tarif Internet standard (pas de port/egress privé DX/ExpressRoute)
- ✨ Nouvelle grille de remise Orange Business à deux dimensions (TCV × durée d'engagement, modèle EVP), remplace l'ancien modèle "engagement seul"
- ✨ Bascule d'affichage EUR/USD (l'OB est facturé en EUR, les coûts CSP en USD — conversion à l'affichage uniquement, les calculs internes restent en USD)
- ✨ Estimation optionnelle des coûts côté client (NAT Gateway + boîtier IPsec), hypothèses de calcul consultables dans l'UI
- ✨ Interface bilingue FR/EN (switch dans le header)
- ✨ Identité visuelle : couleur de marque Orange (#FF7900), police Helvetica Neue, grille et hiérarchie typographique inspirées d'OUDS
- ✨ Échelle de volumes resserrée sous 50 TiB/mois (≈90% du parc clients/prospects), volumes élevés toujours accessibles via l'ajout personnalisé
- 🔄 Pricing Orange Business Cloud Connect mis à jour — source `ODCCpricingJul26.csv` (juillet 2026), modèle 100% PAYG (suppression des frais de réservation), bandes passantes étendues (5M-40M ajoutées)
- 🐛 Fix : violation des Rules of Hooks dans `App.jsx` (hook appelé après un retour conditionnel)

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
