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
│   │   ├── ob_pricing_jul2026.js      OB Cloud Connect (Private + Public/IPsec) — source unique, Heatmap ET Challenger
│   │   ├── vne_pricing_mar2026.js     VNE hosting + internet
│   │   ├── vpnaas_pricing_mar2026.js  VPNaaS OB
│   │   ├── megaport_pricing_20260403.json / equinix_pricing_20260403.json  Pricing Megaport/Equinix
│   │   ├── geoMappings.js          Pays → PoP Megaport + metro Equinix + taux FX
│   │   ├── useCases.json           Définition des 4 cas d'usage Challenger
│   │   └── discountGrid.js         Grille de remise EVP (TCV × durée) — Heatmap OB vs CSP
│   ├── hooks/
│   │   └── useUrlState.js          Synchronise la config Heatmap avec les query params de l'URL (lien partageable)
│   ├── utils/                      # Calculs & formatage — Heatmap OB vs CSP
│   │   ├── calculations.js, formatters.js, colors.js, currency.js
│   ├── styles/
│   │   └── ouds-tokens/             Vrais tokens CSS Orange Design System (couleurs, typo, spacing, radii, ombres)
│   ├── i18n/
│   │   ├── LanguageContext.jsx     Contexte React FR/EN + hook useLanguage()
│   │   └── translations.js         Toutes les chaînes FR/EN (les deux vues)
│   ├── App.jsx
│   └── main.jsx
├── scripts/
│   └── convert_ob_pricing.mjs      Régénère src/data/ob_pricing_*.js depuis un export CSV ODCC
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
| Orange Business Cloud Connect (Private + Public/IPsec) | `ODCCpricingJul26.csv` → `src/data/ob_pricing_jul2026.js` | 2026-07 |

Le pricing OB Jul26 est intégralement PAYG (plus de frais de réservation), nativement en EUR, avec disponibilité par CSP tracée par bande passante. **Source unique** : ce même fichier alimente à la fois la Heatmap (import ES direct par `App.jsx`) et le Mode Challenger (import par `pricingEngine.js`) — plus de duplication entre les deux vues. La date de génération (`OB_PRICING_META.generatedAt`) est affichée dans le header de l'app. Pour régénérer ce fichier après une nouvelle extraction tarifaire :
```bash
node scripts/convert_ob_pricing.mjs "<chemin CSV>" src/data/ob_pricing_<label>.js
```
puis mettre à jour l'import dans `App.jsx` et `pricingEngine.js` si le nom de fichier change.

### Orange Business — Mode Challenger (source interne — EUR)
| Fichier | Contenu |
|---|---|
| `ob_pricing_jul2026.js` | CC Private par pays / débit (partagé avec la Heatmap, voir ci-dessus) |
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
- [Roadmap prochaine session](docs/ROADMAP_NEXT_SESSION.md) — Source unique des priorités en cours (fix + refonte heatmap et CI/tests livrés en v6.4 ; reste : fiabilisation du pipeline de pricing, backlog d'évolutions)

---

## 📝 Changelog

### v6.4 (2026-07-21)
- 🐛 **Fix heatmap OB vs CSP** : le % affiché n'était pas borné côté CSP gagnant (le dénominateur restait le coût egress CSP même quand OB perdait largement), produisant des valeurs aberrantes (ex. -11642% à 10G/512GiB). Le nouveau calcul bascule le dénominateur sur le coût du perdant, bornant l'affichage 0-100% des deux côtés
- ✨ **Refonte visuelle de la heatmap** : badges texte nommant le gagnant (`OB −X%` / `AWS −X%`), palette symétrique sur les vrais tokens du Design System Orange (OUDS, vendorés dans `src/styles/ouds-tokens/`), bandeau de synthèse (taux de gain OB), légende permanente à 9 paliers, indicateur de bascule Private/Public toujours visible (au lieu du survol), panneau de détail avec bandeau de statut et puces colorées à la place des émojis
- ✅ **CI + tests unitaires** : GitHub Actions (build → test → lint) et 39 tests vitest sur les fonctions pures de calcul (`utils/calculations.js`, `utils/colors.js`, `engine/pricingEngine.js`, `engine/currencyUtils.js`) — le repo n'avait jusqu'ici aucune vérification automatisée

### v6.3 (2026-07-16)
- 🔄 **Pipeline de pricing Cloud Connect unifié** : la Heatmap OB vs CSP et le Mode Challenger partagent désormais une seule source (`src/data/ob_pricing_jul2026.js`, EUR natif, PAYG) — le Challenger tournait jusqu'ici sur des tarifs de mars 2026 obsolètes et une dimension géographique (Local/Regional/Inter-Regional) qui n'existe plus dans le modèle de pricing actuel du produit Cloud Connect (elle subsiste côté Network Connect, un produit différent)
- ✨ **Fraîcheur des données visible dans l'UI** : le header affiche désormais "Pricing Cloud Connect à jour au JJ/MM/AAAA" (FR/EN), à partir d'une métadonnée `OB_PRICING_META` générée par `convert_ob_pricing.mjs`
- ✨ **Détecteur de point de bascule Private ↔ Public/IPsec** : pour chaque bande passante, la Heatmap calcule et affiche automatiquement le volume mensuel où le Cloud Connect Public/IPsec devient plus ou moins cher que le Private (architecture Standard/HA précisée), avec l'explication détaillée dans le panneau de détail de cellule
- ✨ **Passerelle Heatmap → Mode Challenger** : depuis le détail d'une cellule, un bouton "Comparer aussi vs Megaport/Equinix" bascule vers le Mode Challenger en réutilisant le pays, la bande passante et le CSP déjà sélectionnés
- ✨ **URL partageable** : la configuration de la Heatmap (pays, CSP, région, mode Private/Public, architecture, devise, TCV/durée, volumes personnalisés, coûts client, et la cellule de détail ouverte le cas échéant) est encodée dans l'URL et relue au chargement — un commercial peut envoyer un lien direct plutôt que de redécrire un scénario
- 🐛 Fix : le Challenger traitait les tarifs Cloud Connect de mars 2026 (en USD) comme s'ils étaient en EUR lors de la conversion d'affichage — corrigé de fait par l'unification de la source de pricing

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
