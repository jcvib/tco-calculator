# 🛠️ Guide de développement — TCO Calculator

## Architecture générale

```
src/
├── components/
│   ├── Header.jsx              En-tête de l'application
│   ├── Controls.jsx            Filtres heatmap historique
│   ├── ViewSelector.jsx        Navigation Heatmap ↔ Mode Challenger
│   ├── Heatmap.jsx             Heatmap OB vs CSP (existante — ne pas modifier)
│   └── Challenger/             Module Mode Challenger (v7.0)
│       ├── ChallengerView.jsx
│       ├── ChallengerForm.jsx
│       ├── ChallengerResult.jsx
│       ├── ChallengerHeatmap.jsx
│       └── BrickBreakdown.jsx
├── engine/                     Moteur de calcul (sans dépendances React)
│   ├── pricingEngine.js
│   ├── stackComposer.js
│   ├── currencyUtils.js
│   └── narrativeGenerator.js
├── data/                       Données statiques (ES modules)
│   ├── ob_pricing_mar2026.js
│   ├── vne_pricing_mar2026.js
│   ├── vpnaas_pricing_mar2026.js
│   ├── megaport_pricing_mar2026.js   → megaport_pricing_20260403.json
│   ├── equinix_pricing_mar2026.js    → equinix_pricing_20260403.json
│   ├── geoMappings.js
│   └── useCases.json
└── i18n/
    ├── LanguageContext.jsx
    └── translations.js
```

## Stack technique

- **React 18** + **Vite 5** — `"type": "module"` dans package.json
- **Tailwind CSS 3** — classes utilitaires, pas de CSS custom
- **Recharts 2** — heatmap historique uniquement
- **JSON imports** natifs Vite (pas besoin de `with { type: 'json' }` dans le code app)

---

## Moteur de calcul (`src/engine/`)

### `pricingEngine.js`

Point d'entrée principal : `computeAllLevels(params)` et `computeLevel(params)`.

**Flux :**
1. `computeAllLevels(params)` → détecte si multi-pays (`params.countries`) et route vers `computeLevelMultiCountry` ou `computeLevel`
2. `computeLevel(params)` → appelle `computeActor` pour les 3 acteurs
3. `computeActor(actor, params)` → `composeStack` + `calcOB` / `calcMegaport` / `calcEquinix`

**Règles importantes :**
- Toutes les devises sources passent par `toDisplay(montant, sourceCurrency)` :
  - OB → source `'EUR'` (ob_pricing, vne_pricing, vpnaas_pricing sont en EUR)
  - Megaport → source `'USD'`
  - Equinix → source variable par metro (EUR/GBP/HKD…)
- En contexte MPLS : `port = 0` pour les acteurs DIY, sauf si `params.add_port_mpls === true`
- Megaport VXC : fallback symétrique AWS↔Azure (prix identiques, v5 utilise le sampling)
- Equinix VC : fallback term=12 si 24 ou 36 demandé (pas de données pour ces termes dans le dataset)

**Multi-pays (Cas E) :**
```
computeActorMultiCountry(actor, params)
  ├── perDcStack = composeStack({...params, m_dcs:1}, actor)
  ├── Pour chaque pays : calcOB/calcMegaport/calcEquinix avec ce stack
  └── OB : VPNaaS ajouté une seule fois (global), CC + VNE par pays
```

### `stackComposer.js`

Lit `useCases.json` et retourne les quantités de briques pour un acteur/résilience/contexte donné.

```js
composeStack(params, actor)
// → { cc:2, vne:2 }  (OB greenfield mid)
// → { port:2, mcr:1, vxc:2 }  (Megaport mid)
```

Les expressions comme `"n_csps*m_dcs*2"` sont évaluées par `safeEval()` (regex-whitelisted, pas d'`eval` non maîtrisé).

### `currencyUtils.js`

Module-level state `displayCurrency` ('USD' par défaut). Mis à jour par `setDisplayCurrency(cur)` avant chaque recalcul.

```js
toDisplay(amount, sourceCurrency)
// EUR 100 → USD 118  (si displayCurrency='USD', EUR rate=1.18)
// EUR 100 → EUR 100  (si displayCurrency='EUR')
// USD 698 → EUR 592  (si displayCurrency='EUR')

formatCurrency(amount)
// 592 → '€592'  ou  '698' → '$698' selon displayCurrency
```

### `narrativeGenerator.js`

`generateNarrative(allLevels, { resilience, lang })` → string argumentaire commercial.

Deux fonctions internes `buildNarrativeFR` / `buildNarrativeEN`. Dans `ChallengerView`, la narrative est recalculée à chaque render (pas en state) pour réagir instantanément aux changements de langue et de devise.

---

## Données (`src/data/`)

### `useCases.json`

Définit les 4 cas d'usage. Chaque cas a des `stacks` par acteur (`ob_greenfield`, `ob_mpls`, `megaport`, `equinix`) et par niveau de résilience (`bot`, `mid`, `a2a`).

Les quantités peuvent être des entiers ou des expressions : `"n_csps*m_dcs*2"`.

```json
{
  "id": "A",
  "label": "On-ramp simple",
  "label_en": "Simple on-ramp",
  "stacks": {
    "megaport": {
      "mid": { "port": 2, "mcr": 1, "vxc": "n_csps*2" }
    }
  }
}
```

Pour ajouter un cas d'usage : ajouter une entrée dans `useCases.json`, les composants se mettent à jour automatiquement.

### `geoMappings.js`

- `COUNTRY_TO_MEGAPORT` : pays → `{ country_key, metro, loc_id }` (loc_id dans `megaport_pricing_20260403.json`)
- `COUNTRY_TO_EQUINIX_METRO` : pays → code metro 2 lettres
- `CHALLENGER_COUNTRIES` : 15 pays disponibles dans le formulaire
- `CHALLENGER_BANDWIDTHS` : `[50, 100, 200, 500, 1000, 2000, 5000, 10000]` (Mbps)
- `FX_RATES_TO_USD` : taux vers USD (mise à jour manuelle)

### Mettre à jour les données de pricing

**Megaport :**
1. Déposer le nouveau JSON dans `src/data/`
2. Mettre à jour le `import` dans `megaport_pricing_mar2026.js`
3. Vérifier la structure : `pricing[country_key][loc_id].port[bw][term].monthlyRate`
4. Vérifier les `loc_id` dans `geoMappings.js` (certains PoPs peuvent changer entre versions)

**Equinix :**
1. Déposer le nouveau JSON dans `src/data/`
2. Mettre à jour le `import` dans `equinix_pricing_mar2026.js`
3. Structure attendue : `services.ports.data`, `services.fabric_cloud_sp.data`, `services.cloud_router.data`

**OB (CC, VNE, VPNaaS) :**
- Modifier directement les fichiers `.js` (données statiques inline)
- Tous les montants sont en **EUR**
- Le wrapper `toDisplay(montant, 'EUR')` gère la conversion à l'affichage

---

## Internationalisation (`src/i18n/`)

### Ajouter une chaîne traduite

1. Ajouter dans `translations.js` dans les deux objets `fr` et `en` :
```js
fr: { monSection: { ma_cle: 'Texte français' } }
en: { monSection: { ma_cle: 'English text'  } }
```

2. Utiliser dans un composant :
```jsx
const { t, lang } = useLanguage()
// ...
<span>{t('monSection.ma_cle')}</span>
```

Le hook `t(path)` utilise la notation pointée. Si une clé est absente, il retourne le chemin brut (pas d'erreur silencieuse).

### Ajouter une langue

1. Ajouter une clé de niveau dans `translations.js` (ex. `es: { ... }`)
2. Ajouter le bouton dans le composant `LangSwitch` dans `App.jsx`
3. Le `LanguageContext` est générique — aucune autre modification nécessaire

---

## Composants Challenger

### `ChallengerView.jsx`
Orchestrateur. Gère les tabs `calc` / `heatmap`, l'état `params` et `allLevels`, la devise, et déclenche le recalcul via `runCompute(params)`. La narrative est un dérivé calculé au render (pas en state).

### `ChallengerForm.jsx`
Formulaire à 3 sections (Contexte / Topologie / Réseau). Points clés :
- Cas E : sélecteurs multi-pays par DC (`dcCountries` array)
- Contexte MPLS : toggle "Inclure le port" (`addPortMpls`)
- Les contraintes par cas (`max_csps`, `fixed_csps`) sont lues depuis `useCases.json`

### `ChallengerResult.jsx`
3 cartes acteurs + tableau synthétique + narrative. La carte "Meilleur prix" est détectée par `findCheapest(level)` et reçoit `border-4` + badge 🏆.

### `ChallengerHeatmap.jsx`
Deux modes de vue :
- **Compétitif** (`viewMode='winner'`) : winner par cellule avec % delta OB/DIY
- **Couverture** (`viewMode='coverage'`) : 3 points colorés (OB|MP|EQ) + fond selon complétude

Cas "A+port" : use case virtuel, force `add_port_mpls=true` et `context='mpls'`.

Les deux grilles (`winnerGrid`, `coverageGrid`) sont calculées par `useMemo` avec les mêmes dépendances `[usecaseId, context, resilience, term]`.

---

## Workflow de développement

### 1. Créer une branche
```bash
git checkout -b feat/nom-feature
```

### 2. Développer
```bash
npm run dev   # Hot reload sur :5173
```

### 3. Build & vérification
```bash
npm run build    # Erreurs TypeScript/JSX éventuelles
npm run preview  # Test du build sur :4173
```

### 4. Commit
```bash
git add src/ docs/
git commit -m "feat: description concise"
git push origin feat/nom-feature
```

### Conventions de commit
```
feat:     Nouvelle fonctionnalité
fix:      Correction de bug
data:     Mise à jour des données de pricing
docs:     Documentation
refactor: Refactoring sans changement de comportement
style:    Styling / UI
```

---

## Problèmes courants

### "Module needs import attribute of type: json"
Ce message apparaît si on exécute directement avec `node` les fichiers du projet. Les imports JSON natifs sont gérés par Vite. **Toujours lancer via `npm run dev` ou `npm run build`**, pas directement via `node`.

### Devise non mise à jour
La conversion se fait à l'appel de `toDisplay()` dans les fonctions de calcul. Si un acteur affiche des montants non convertis, vérifier que ses montants passent bien par `toDisplay(valeur, sourceCurrency)` (bug connu en v6 : OB n'utilisait pas `toDisplay` — corrigé en v7).

### Données manquantes dans la heatmap
Utiliser la vue **Couverture** pour identifier les gaps. Les lacunes connues :
- Megaport 2G : pas de VXC pricing pour ce débit dans le dataset v5
- Canada Equinix : metro TO absent du dataset
- UAE / Afrique du Sud / Inde : Megaport non disponible

---

## Questions ?

- 📖 Spécification Mode Challenger : [`docs/IMPLEMENTATION_PLAN.md`](./IMPLEMENTATION_PLAN.md)
- 🐛 Issues : GitHub Issues
- 💬 Contact : Jean-Charles (Orange Business)
