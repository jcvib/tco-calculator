# 🛠️ Guide de développement - TCO Calculator

Guide pour contribuer au projet TCO Calculator.

## Architecture

### Stack technique
- **React 18** - UI components
- **Vite 5** - Build tool & dev server
- **Tailwind CSS 3** - Styling
- **Recharts 2** - Charts

### Structure modulaire

```
src/
├── components/          # Composants React
│   ├── Header.jsx      # En-tête
│   ├── Controls.jsx    # Sélecteurs
│   ├── Heatmap.jsx     # Table principale
│   └── CellDetails/    # Détails cellule
│       ├── index.jsx
│       ├── Charts.jsx
│       ├── CostBreakdown.jsx
│       └── LinkAnalysis.jsx
├── data/               # Données de pricing
│   ├── awsPricing.js
│   ├── azurePricing.js
│   └── obPricing.js
├── utils/              # Utilitaires
│   ├── calculations.js # Calculs TCO
│   ├── formatters.js   # Formatage
│   └── colors.js       # Palette heatmap
├── styles/
│   └── index.css       # Tailwind + custom
├── App.jsx             # Composant racine
└── main.jsx            # Point d'entrée
```

## Workflow de développement

### 1. Créer une branche

```bash
git checkout -b feature/nom-feature
```

### 2. Développer avec hot reload

```bash
npm run dev
```

- Modifiez les fichiers
- Sauvegardez
- Rechargement automatique !

### 3. Tester

```bash
# Build production
npm run build

# Preview
npm run preview
```

### 4. Commit et push

```bash
git add .
git commit -m "feat: description de la feature"
git push origin feature/nom-feature
```

## Ajouter une fonctionnalité

### Exemple : Phase B - Discounts

#### 1. Créer le composant

`src/components/Discounts.jsx` :
```jsx
export default function Discounts({ discount, setDiscount }) {
  return (
    <div className="bg-white rounded-lg p-4">
      <h3 className="font-bold mb-2">💰 Remises</h3>
      {/* UI pour configurer discounts */}
    </div>
  );
}
```

#### 2. Intégrer dans App.jsx

```jsx
import Discounts from './components/Discounts';

// Dans App :
const [discount, setDiscount] = useState(0);

<Discounts discount={discount} setDiscount={setDiscount} />
```

#### 3. Modifier les calculs

`src/utils/calculations.js` :
```js
export function applyDiscount(cost, discountPercent) {
  return cost * (1 - discountPercent / 100);
}
```

#### 4. Tester

```bash
npm run dev
# Vérifier visuellement
# Vérifier les calculs
```

#### 5. Commit

```bash
git add .
git commit -m "feat: ajout système de remises (Phase B)"
git push
```

## Modifier les données de pricing

### Structure des données

Les fichiers dans `src/data/` sont des wrappers ES6 qui importent les fichiers legacy :
- `pricing_data_jan2026.js` (AWS + Azure)
- `ob_pricing_jan2026.js` (Orange Business)

### Mettre à jour les prix

#### Option 1 : Remplacer les fichiers
```bash
# Copier les nouveaux fichiers
cp nouveau_pricing.js src/data/pricing_data_jan2026.js
cp nouveau_ob.js src/data/ob_pricing_jan2026.js
```

#### Option 2 : Modifier directement
Éditer `src/data/pricing_data_jan2026.js` ou `src/data/ob_pricing_jan2026.js`

⚠️ Ne pas oublier d'exporter via `window` :
```js
if (typeof window !== 'undefined') {
  window.CLOUD_PRICING_DATA = CLOUD_PRICING_DATA;
}
```

## Modifier les calculs

### Fichiers de calculs

`src/utils/calculations.js` contient :
- `calculateEgressCost()` - Egress Internet
- `calculatePrivateCost()` - Connectivité privée
- `calculateLinkLoad()` - Charge du lien

### Exemple : Ajouter un nouveau calcul

```js
export function calculateROI(privateCost, egressCost, months) {
  const monthlySavings = egressCost - privateCost;
  const totalSavings = monthlySavings * months;
  return {
    monthly: monthlySavings,
    total: totalSavings,
    breakEven: privateCost / monthlySavings
  };
}
```

## Styliser avec Tailwind

### Classes disponibles

Tailwind fournit des classes utilitaires :
```jsx
<div className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
  Contenu
</div>
```

### Classes personnalisées

`src/styles/index.css` :
```css
.heatmap-cell {
  @apply p-2 text-center font-semibold border;
}
```

### Couleurs custom

`tailwind.config.js` :
```js
theme: {
  extend: {
    colors: {
      'orange-ob': '#ff6600'
    }
  }
}
```

## Debugging

### Console navigateur

```jsx
console.log('Debug:', { privateCost, egressCost });
```

### React DevTools

1. Installer [React DevTools](https://react.dev/learn/react-developer-tools)
2. Inspecter les composants
3. Voir le state et props

### Vite logs

Le serveur Vite affiche les erreurs dans le terminal et dans le navigateur.

## Best practices

### Composants
- Un composant = un fichier
- Nommer en PascalCase (`Header.jsx`)
- Props en camelCase
- Déstructurer les props

### État
- useState pour l'état local
- Props pour passer les données
- Éviter l'état global (pas nécessaire ici)

### Performance
- useMemo pour calculs coûteux
- useCallback pour fonctions passées en props
- React.memo pour composants purs

### Commits
- feat: Nouvelle fonctionnalité
- fix: Correction de bug
- docs: Documentation
- refactor: Refactoring
- style: Styling
- test: Tests

## Phases à venir

### Phase B - Discounts
- [ ] Engagement contractuel (12/24/36 mois)
- [ ] Remise manuelle (0-50%)
- [ ] Application cumulative
- [ ] Affichage prix barré + prix final

### Phase C - Volumes custom
- [ ] Modal d'ajout volume
- [ ] Jusqu'à 3 volumes simultanés
- [ ] Colonne highlighted
- [ ] localStorage pour persistance

## Questions ?

- 📖 Documentation : `docs/`
- 🐛 Issues : GitHub Issues
- 💬 Contact : Jean-Charles (Orange Business)
