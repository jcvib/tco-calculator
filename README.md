# 🌐 TCO Calculator — Orange Business Cloud Connectivity

Outil de comparaison de coûts TCO pour la connectivité cloud, à destination des équipes commerciales et marketing Orange Business.

## ✨ Fonctionnalités

### Heatmap OB vs CSP (vue historique)
- Heatmap interactive : économies/surcoûts OB vs egress Internet (AWS Direct Connect / Azure ExpressRoute)
- 15 pays Orange Business, AWS (10 débits) & Azure (8 débits)
- Graphiques Recharts, détail des calculs, analyse de charge du lien

### ⚔️ Mode Challenger (v7.0)
Comparaison en coûts réels entre **Orange Business**, **Megaport** et **Equinix** sur 3 niveaux de résilience :

| Feature | Détail |
|---|---|
| **4 cas d'usage** | On-ramp simple (A), Multi-cloud (C), Multi-site multi-cloud (E), Cloud-to-cloud (F) |
| **3 niveaux de résilience** | Bottom-line · Intermédiaire · Apple-to-Apple |
| **2 contextes** | MPLS existant (VPNaaS) · Greenfield (VNE + Internet) |
| **Cas E multi-pays** | Chaque DC peut être dans un pays différent, pricing local par DC |
| **Switch port MPLS** | Basculer le port DIY ON/OFF en contexte MPLS pour évaluer l'impact |
| **Devises** | USD / EUR avec taux de change configurable (affiché dynamiquement) |
| **Engagement** | 1 / 12 / 24 / 36 mois |
| **Heatmap Challenger** | Grille 15 pays × 8 débits — winner par cellule avec % delta |
| **Heatmap Couverture** | Vue disponibilité des données par acteur et combinaison |
| **Argumentaire auto** | Texte généré automatiquement pour les équipes commerciales |
| **Bilingue** | Switch FR / EN sur toute l'interface |

**Acteurs comparés :**
- **Orange Business** : Cloud Connect + VNE/Internet (greenfield) + VPNaaS (MPLS)
- **Megaport** : Port + MCR (cloud router) + VXC (connexion vers CSP)
- **Equinix** : Port + FCR (fabric cloud router) + VC (fabric cloud SP)

---

## 🚀 Démarrage rapide

### Prérequis
- Node.js 18+ ([télécharger](https://nodejs.org/))
- Git

### Installation

```bash
git clone <url-du-repo>
cd tco-calculator
npm install
npm run dev
```

L'application s'ouvre sur http://localhost:5173

### Build production

```bash
npm run build    # génère dist/
npm run preview  # preview local sur :4173
```

---

## 📁 Structure du projet

```
tco-calculator/
├── src/
│   ├── components/
│   │   ├── Header.jsx              # En-tête
│   │   ├── Controls.jsx            # Filtres heatmap existante
│   │   ├── ViewSelector.jsx        # Onglets Heatmap / Challenger
│   │   ├── Heatmap.jsx             # Heatmap OB vs CSP (existante)
│   │   └── Challenger/             # Mode Challenger (v7.0)
│   │       ├── ChallengerView.jsx     Orchestrateur (tabs calc/heatmap)
│   │       ├── ChallengerForm.jsx     Formulaire de paramétrage
│   │       ├── ChallengerResult.jsx   Cartes résultat (3 acteurs)
│   │       ├── ChallengerHeatmap.jsx  Heatmap compétitif + couverture
│   │       └── BrickBreakdown.jsx     Accordéon détail briques
│   ├── engine/
│   │   ├── pricingEngine.js        Calculs par acteur (OB/Megaport/Equinix)
│   │   ├── stackComposer.js        Composition des stacks depuis useCases.json
│   │   ├── currencyUtils.js        Conversion de devises (toDisplay, formatCurrency)
│   │   └── narrativeGenerator.js   Argumentaire commercial FR/EN
│   ├── data/
│   │   ├── ob_pricing_mar2026.js      OB Cloud Connect — prix par pays/débit
│   │   ├── vne_pricing_mar2026.js     VNE hosting + internet
│   │   ├── vpnaas_pricing_mar2026.js  VPNaaS OB
│   │   ├── megaport_pricing_mar2026.js  Wrapper → megaport_pricing_20260403.json
│   │   ├── equinix_pricing_mar2026.js   Wrapper → equinix_pricing_20260403.json
│   │   ├── megaport_pricing_20260403.json  Pricing Megaport v5.0 (avril 2026)
│   │   ├── equinix_pricing_20260403.json   Pricing Equinix (avril 2026)
│   │   ├── geoMappings.js          Pays → PoP Megaport + metro Equinix + taux FX
│   │   └── useCases.json           Définition des 4 cas d'usage (stacks par niveau)
│   ├── i18n/
│   │   ├── LanguageContext.jsx     Contexte React FR/EN + hook useLanguage()
│   │   └── translations.js         Toutes les chaînes FR/EN
│   ├── App.jsx
│   └── main.jsx
├── docs/
│   ├── SETUP_LOCAL.md
│   ├── SETUP_AMPLIFY.md
│   ├── DEVELOPMENT.md
│   └── IMPLEMENTATION_PLAN.md     Spécification du Mode Challenger (référence)
├── package.json
└── vite.config.js
```

---

## 🛠️ Stack technique

| Outil | Version | Rôle |
|---|---|---|
| React | 18 | Framework UI |
| Vite | 5 | Build tool & dev server |
| Tailwind CSS | 3 | Styling utilitaire |
| Recharts | 2 | Graphiques (heatmap historique) |
| Node.js | 18+ | Environnement |

Pas de dépendance d'internationalisation externe — i18n maison (~100 lignes).

---

## 📊 Données de pricing

### Orange Business (source interne — EUR)
| Fichier | Contenu |
|---|---|
| `ob_pricing_mar2026.js` | CC par pays / débit / HA / Local |
| `vne_pricing_mar2026.js` | VNE hosting + internet par pays / config / terme |
| `vpnaas_pricing_mar2026.js` | VPNaaS par pays / footprint / ville / débit |

### Megaport (API v5.0 — USD, sampling optimisé)
- `megaport_pricing_20260403.json` — Port, MCR, VXC (AWS + Azure) par PoP / débit / terme
- Fallback symétrique AWS↔Azure : si l'un est absent, l'autre est utilisé (prix identiques)
- Termes disponibles : 1, 12, 24, 36 mois

### Equinix (USD/EUR/GBP/HKD/AUD/SGD/JPY/BRL/ZAR selon metro)
- `equinix_pricing_20260403.json` — Port, FCR, fabric_cloud_sp (VC) par metro / débit / terme
- VC terms : 1 et 12 mois uniquement (24/36 mois → fallback term=12)
- 13/15 pays disponibles (Canada TO et UAE DX absents du dataset)

### Taux de change (configuré dans `geoMappings.js`)
```js
FX_RATES_TO_USD = { USD:1.0, EUR:1.18, GBP:1.27, HKD:0.128, AUD:0.63, SGD:0.74, JPY:0.0067, BRL:0.175, ZAR:0.054 }
```
Toutes les devises sources sont converties vers USD ou EUR selon le choix d'affichage.

---

## 📖 Documentation

- [Setup local](docs/SETUP_LOCAL.md) — Installation et lancement en développement
- [Setup AWS Amplify](docs/SETUP_AMPLIFY.md) — Déploiement CI/CD
- [Guide développement](docs/DEVELOPMENT.md) — Architecture, moteur de calcul, i18n
- [Plan d'implémentation](docs/IMPLEMENTATION_PLAN.md) — Spécification technique du Mode Challenger

---

## 📝 Changelog

### v7.0 (avril 2026)
- ✨ **Mode Challenger** : comparaison OB vs Megaport vs Equinix sur 3 niveaux de résilience
- ✨ **4 cas d'usage** : A (on-ramp), C (multi-cloud), E (multi-site), F (cloud-to-cloud)
- ✨ **Cas E multi-pays** : pricing local par DC, VPNaaS global comptabilisé une seule fois
- ✨ **Switch port MPLS** : évaluer l'impact du port DIY sur la comparaison
- ✨ **Heatmap Challenger** : 15 pays × 8 débits, winner + % delta OB vs DIY
- ✨ **Vue Couverture** : disponibilité des données par acteur (3 points colorés par cellule)
- ✨ **Cas "A+port"** dans la heatmap : Cas A avec port DIY inclus, contexte MPLS forcé
- ✨ **Switch FR/EN** : interface entièrement bilingue via LanguageContext
- ✨ **Devise dynamique** : taux EUR/USD affiché en temps réel depuis la config
- 🐛 Fix : montants OB non convertis lors du switch devise (EUR → toDisplay)
- 🐛 Fix : narrative argumentaire non traduit en anglais
- 🗂 Pricing Megaport v5.0 (avril 2026) + Equinix (avril 2026)

### v6.0 (janvier 2026)
- ✨ Migration vers architecture React + Vite modulaire
- ✨ Graphiques Recharts (comparaison + composition)
- ✨ Détails complets des calculs avec coûts unitaires
- ✨ Analyse de charge du lien

---

## 👥 Contributeurs

- Jean-Charles (Orange Business) — Product Owner
- Claude (Anthropic) — Architecture & Développement

## 📄 License

Copyright © 2026 Orange Business. Tous droits réservés.
