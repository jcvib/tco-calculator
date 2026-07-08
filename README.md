# 🌐 TCO Calculator — Orange Business Cloud Connectivity

Outil de comparaison de coûts TCO pour la connectivité cloud, à destination des équipes commerciales et marketing Orange Business.

## ✨ Fonctionnalités

### Heatmap OB vs CSP
- Heatmap interactive : économies/surcoûts OB vs egress Internet (AWS Direct Connect / Azure ExpressRoute)
- Cloud Connect **Private** (DX/ExpressRoute) et **Public/IPsec** (Evolution Platform, Standard/HA)
- Grille de remise à deux dimensions (TCV × durée d'engagement, modèle EVP)
- Bascule d'affichage EUR/USD, estimation optionnelle des coûts côté client (NAT Gateway + boîtier IPsec)
- 15 pays Orange Business, AWS (10 débits) & Azure (8 débits)
- Graphiques Recharts, détail des calculs, analyse de charge du lien
- Identité visuelle Orange (couleur de marque, Helvetica Neue, grille inspirée d'OUDS)

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

**Acteurs comparés :**
- **Orange Business** : Cloud Connect + VNE/Internet (greenfield) + VPNaaS (MPLS)
- **Megaport** : Port + MCR (cloud router) + VXC (connexion vers CSP)
- **Equinix** : Port + FCR (fabric cloud router) + VC (fabric cloud SP)

### 🌍 Bilingue
Switch FR / EN sur toute l'interface (Heatmap OB vs CSP et Mode Challenger), pas de dépendance d'internationalisation externe.

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
│   │   ├── Header.jsx              # En-tête + switch FR/EN
│   │   ├── Controls.jsx            # Filtres heatmap OB vs CSP
│   │   ├── ViewSelector.jsx        # Onglets Heatmap / Challenger
│   │   ├── Heatmap.jsx             # Heatmap OB vs CSP
│   │   ├── CellDetails/            # Panneau de détail (graphes, breakdown, charge du lien)
│   │   └── Challenger/             # Mode Challenger (v7.0)
│   │       ├── ChallengerView.jsx     Orchestrateur (tabs calc/heatmap)
│   │       ├── ChallengerForm.jsx     Formulaire de paramétrage
│   │       ├── ChallengerResult.jsx   Cartes résultat (3 acteurs)
│   │       ├── ChallengerHeatmap.jsx  Heatmap compétitif + couverture
│   │       └── BrickBreakdown.jsx     Accordéon détail briques
│   ├── engine/                     # Moteur de calcul du Mode Challenger
│   │   ├── pricingEngine.js        Calculs par acteur (OB/Megaport/Equinix)
│   │   ├── stackComposer.js        Composition des stacks depuis useCases.json
│   │   ├── currencyUtils.js        Conversion de devises (toDisplay, formatCurrency)
│   │   └── narrativeGenerator.js   Argumentaire commercial FR/EN
│   ├── data/
│   │   ├── ob_pricing_mar2026.js      OB Cloud Connect (Challenger) — prix par pays/débit
│   │   ├── vne_pricing_mar2026.js     VNE hosting + internet
│   │   ├── vpnaas_pricing_mar2026.js  VPNaaS OB
│   │   ├── megaport_pricing_20260403.json / equinix_pricing_20260403.json  Pricing Megaport/Equinix
│   │   ├── geoMappings.js          Pays → PoP Megaport + metro Equinix + taux FX
│   │   ├── useCases.json           Définition des 4 cas d'usage Challenger
│   │   └── discountGrid.js         Grille de remise EVP (TCV × durée) — Heatmap OB vs CSP
│   ├── utils/                      # Calculs & formatage — Heatmap OB vs CSP
│   │   ├── calculations.js, formatters.js, colors.js, currency.js
│   ├── i18n/
│   │   ├── LanguageContext.jsx     Contexte React FR/EN + hook useLanguage()
│   │   └── translations.js         Toutes les chaînes FR/EN (les deux vues)
│   ├── App.jsx
│   └── main.jsx
├── public/
│   └── ob_pricing_jul2026.js       Pricing OB Cloud Connect (Heatmap OB vs CSP), chargé en <script>
├── scripts/
│   └── convert_ob_pricing.mjs      Régénère public/ob_pricing_*.js depuis un export CSV ODCC
├── docs/
│   ├── SETUP_LOCAL.md
│   ├── SETUP_AMPLIFY.md
│   ├── DEVELOPMENT.md
│   └── IMPLEMENTATION_PLAN.md     Spécification technique du Mode Challenger
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
| Recharts | 2 | Graphiques (heatmap OB vs CSP) |
| Node.js | 18+ | Environnement |

Pas de dépendance d'internationalisation externe — i18n maison (`src/i18n/`).

---

## 📊 Données de pricing

### Orange Business — Heatmap OB vs CSP (source EUR native)
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

### Orange Business — Mode Challenger (source interne — EUR)
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

### Taux de change (configuré dans `geoMappings.js`, Mode Challenger)
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

### v7.0 (2026-04)
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

### v6.2 (2026-07-08)
- ✨ Nouveau : Cloud Connect Public/IPsec (Evolution Platform) — architectures Standard et Haute Disponibilité, egress facturé côté CSP au tarif Internet standard (pas de port/egress privé DX/ExpressRoute)
- ✨ Nouvelle grille de remise Orange Business à deux dimensions (TCV × durée d'engagement, modèle EVP), remplace l'ancien modèle "engagement seul"
- ✨ Bascule d'affichage EUR/USD (l'OB est facturé en EUR, les coûts CSP en USD — conversion à l'affichage uniquement, les calculs internes restent en USD)
- ✨ Estimation optionnelle des coûts côté client (NAT Gateway + boîtier IPsec), hypothèses de calcul consultables dans l'UI
- ✨ Interface bilingue FR/EN (switch dans le header) — fusionnée avec le système i18n du Mode Challenger (v7.0)
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

---

## 👥 Contributeurs

- Jean-Charles (Orange Business) — Product Owner
- Claude (Anthropic) — Architecture & Développement

## 📄 License

Copyright © 2026 Orange Business. Tous droits réservés.
