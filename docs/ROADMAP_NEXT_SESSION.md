# Roadmap — prochaine session

Source unique pour la prochaine session de développement, consolidée le 2026-07-17 à l'issue de la session v6.3 (pipeline de pricing Cloud Connect unifié, détecteur de bascule Private/Public, passerelle Heatmap ↔ Challenger, URL partageable — voir le changelog du [README](../README.md)). Regroupe trois discussions distinctes de la même session : la refonte visuelle de la heatmap (synthèse + prototype de Jean-Charles), la fiabilisation du pipeline de pricing (Lambda orchestrateur), et un backlog d'évolutions plus larges brainstormées en fin de session. Ordre = priorité.

---

## 1 — Heatmap OB vs CSP : fix du bug + refonte visuelle

Spécification issue d'une synthèse de Jean-Charles et d'un prototype interactif (`Heatmap Redesign.dc.html`, option **2a — Combo badges + palette contrastée**), fournis via un lien claude.ai/design (non accessible depuis cet environnement) puis via l'export `Benchmarking Evolution Platform-handoff.zip` (contenu extrait et intégré au repo cette session).

**Aperçu visuel** (captures de la session de design) : [`docs/redesign-assets/redesign-preview-summary-banner.png`](./redesign-assets/redesign-preview-summary-banner.png) · [`docs/redesign-assets/redesign-preview-grid.png`](./redesign-assets/redesign-preview-grid.png)

### 1.1 — Fix prioritaire : le % de la heatmap n'est pas borné côté CSP gagnant

**Confirmé dans le code actuel** ([`Heatmap.jsx:154`](../src/components/Heatmap.jsx)) :
```js
const savingsPercent = egressCostData.total > 0 ? (savings / egressCostData.total) * 100 : 0;
```
Le dénominateur est toujours le coût egress CSP, même quand OB perd largement (le coût OB devient alors le numérateur dominant) — le pourcentage explose (ex. -8963%, voire -11642% à 10G/512GiB, observés en donnée réelle). Confirmé aussi côté [`colors.js`](../src/utils/colors.js) : le dernier bin `{ min: -Infinity, bg: '#8B8F99' }` absorbe tout en dessous de -100%, donc toute perte OB au-delà de ce seuil s'affiche avec la même teinte — aucune différenciation visuelle sur l'ampleur réelle de la perte côté CSP.

**Fix** : calculer un magnitude toujours borné 0–100 en changeant de dénominateur selon le gagnant (coût du perdant, qui est toujours le plus grand des deux) :
```js
// utils/colors.js ou calculations.js
function winnerMagnitude(savingsPercent, egressCost, privateCost) {
  if (savingsPercent >= 0) return savingsPercent; // déjà borné 0-100
  return ((privateCost - egressCost) / privateCost) * 100; // borné 0-100 aussi
}
```
Résultat : chaque case se lit « le gagnant coûte X% de moins que le perdant », toujours entre 0 et 100%, des deux côtés. `savingsPercent` brut reste calculé tel quel pour la logique existante (tri, seuils) — seul l'**affichage** change. Contrairement au prototype (qui *reconstruit* egress/private depuis un `savingsPercent` figé, donnée illustrative), le vrai moteur a déjà `egressCostData.total` et `cell.privateCost.total` sous la main au moment du calcul (`Heatmap.jsx:152-154`) : pas besoin de les reconstruire, juste calculer `magnitude` directement à partir de ces deux valeurs déjà présentes.

**Recommandation** : livrer ce point seul et en premier, indépendamment du reste de la refonte — c'est une correction de données mal affichées à un client, pas une question d'esthétique.

### 1.2 — Palette (`utils/colors.js`)

Remplacer les hex en dur par une rampe symétrique bornée sur le nouveau magnitude, avec les tokens OUDS réels (voir §1.6) au lieu de l'échelle `graphite` Tailwind :
```js
const ORANGE_STOPS = ['#fff2e6','#ffc18a','#e86e00','#b55600','#8c4300']; // var(--ouds-orange-50/200/600/700/800)
const GRAY_STOPS   = ['#f9f5f0','#d6c4ae','#a99275','#685d50','#353228']; // var(--ouds-warm-gray-100/300/500/700/900)
const THRESH = [1, 15, 35, 60]; // 5 paliers, mêmes seuils des deux côtés
```
`winner = savingsPercent >= 0 ? 'OB' : 'CSP'` → couleur dans `ORANGE_STOPS` ou `GRAY_STOPS` selon l'index du palier atteint par le magnitude.

### 1.3 — Contenu de la case (`Heatmap.jsx`)

Remplacer `{{savingsPercent}}% / {{montant}}` par un badge texte qui nomme le gagnant :
- `OB −{magnitude}%` (fond orange, texte blanc) si OB gagne
- `AWS −{magnitude}%` / `Azure −{magnitude}%` (fond warm-gray-700, texte blanc) sinon
- Montant € en petit dessous, inchangé

### 1.4 — Bandeau de synthèse (nouveau, en tête de heatmap)

```js
const wins = cellsVisibles.filter(c => c.savingsPercent > 0).length;
const winRate = Math.round(wins / cellsVisibles.length * 100);
```
Affichage : gros chiffre `{winRate}%` + « des cas testés où Orange Business est moins cher que l'egress direct {CSP} » + `{wins} gains · {pertes} pertes sur {total} combinaisons débit × volume`. Recalculer à chaque changement de filtre (pas seulement au montage).

### 1.5 — Légende permanente, indicateur de bascule visible, panneau de détail

- **Légende permanente** : barre à 9 segments (5 orange + 5 gris, symétrique), toujours visible, libellés « CSP moins cher ← → OB moins cher » aux extrémités — remplace la légende actuelle (muette, nécessite un clic).
- **Point de bascule Private ↔ Public/IPsec toujours visible** : actuellement `row.crossover.crossoverVolumeTiB` n'apparaît qu'au survol d'un petit texte sous la bande passante (ajouté cette session-ci). Remplacer par un mini-indicateur toujours affiché : mini-barre 2 tons (40×6px, bleu `#1fa2e0` = Public/IPsec moins cher, ambre `#ffb400` = Private moins cher, proportion = `crossoverVolumeTiB / volumeMax`) + valeur `{crossoverVolumeTiB} TiB` accolée. Si `crossoverReason === 'no-crossover'` : badge `● Private constant` (ambre). `title` conservé pour le détail exact au survol (progressive disclosure).
- **Panneau de détail** (`CellDetails/`) : garder la structure actuelle (elle est bonne), mais wrapper en composants stylés OUDS et resserrer l'entrée :
  - **Bandeau** : statut positif/négatif (« Orange Business gagne » / « {CSP} gagne ») + phrase de synthèse en tête (nouveau) : « {Gagnant} coûte {magnitude}% de moins que {Perdant} sur {débit} / {volume} par mois, soit {montant} €/mois d'écart. »
  - **Décomposition des coûts** (garder le pattern actuel) : barre pleine pour Egress CSP, barre segmentée 3 couleurs (OB / Port CSP / Egress privé) pour Cloud Connect Privée + légende à puces colorées (remplacer les émojis 🟠⚪⚫ par des puces `<span>` colorées — cohérence OUDS, pas d'emoji)
  - **Comparaison finale** : 3 chiffres (Egress CSP / Cloud Connect OB / Économies OB en €+%), inchangé
  - **Analyse de charge du lien** : jauge conservée telle quelle
  - Ne pas supprimer le détail ligne-à-ligne existant (ODCC, Port, Egress privé, paliers) — utile aux commerciaux, mais passe en second plan visuel derrière les cartes ci-dessus

### 1.6 — Intégration Orange Design System (tranché en session)

Le projet n'avait jusqu'ici aucune dépendance OUDS réelle (`tailwind.config.js` définit `orange`/`graphite`/`malachite` en hex bruts "inspirés"). Jean-Charles a fourni un export contenant de **vrais tokens CSS OUDS** (construits depuis le kit open-source **OUDS Web / Orange-Boosted-Bootstrap**, `https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap`), maintenant copiés dans [`src/styles/ouds-tokens/`](../src/styles/ouds-tokens/README.md) : `colors-raw.css`, `colors-semantic.css`, `typography.css`, `spacing.css`, `borders.css`, `elevation.css` + `styles.css` qui les importe tous. Ce ne sont **pas une approximation** — les valeurs (`--ouds-orange-500: #ff7900`, `--ouds-warm-gray-700: #685d50`, `--ouds-radius-medium: 8px`, `--ouds-elevation-raised: 0 1px 2px 0 rgba(0,0,0,.24)`, etc.) sont directement utilisables.

**Ce qui n'est PAS inclus** : les composants React empaquetés (Badge, Card, Button...) mentionnés dans l'export sont compilés dans un bundle lié au runtime propriétaire de l'outil de design claude.ai — non portable tel quel dans une app Vite/React. Le prototype lui-même ne les utilise d'ailleurs pas : il stylise des `<div>`/`<span>` en HTML brut avec les variables CSS directement — **c'est cette approche à reproduire** dans `Heatmap.jsx`/`LinkAnalysisFlat.jsx`/`indexFlat.jsx` : des éléments Tailwind/HTML classiques référençant `var(--ouds-*)`, pas d'import de composants.

**Décision** : importer `src/styles/ouds-tokens/styles.css` une fois dans `main.jsx`, puis référencer les tokens directement en style inline ou via `tailwind.config.js` (`theme.extend.colors` peut pointer vers des `var(--ouds-orange-500)`). Le reste de l'UI hors heatmap garde la palette Tailwind existante cette itération — pas de migration globale demandée.

### 1.7 — Appendix : algorithme exact extrait du prototype

Code JS embarqué dans le prototype (option 2a), directement adaptable — ce n'est pas une reformulation, c'est le calcul réel qui produit les captures d'écran référencées plus haut.

```js
// Magnitude toujours bornée 0-100, changement de dénominateur côté perdant
function costsAndMagnitude(pct, eur) {
  const savings = pct >= 0 ? eur : -eur;
  const egressCost = pct !== 0 ? (savings * 100) / pct : eur;
  const privateCost = egressCost - savings;
  const magnitude = pct >= 0 ? pct : ((privateCost - egressCost) / privateCost) * 100;
  return { egressCost, privateCost, magnitude };
}

// Palette retenue (2a — "coarse", 5 paliers par côté)
const COARSE_ORANGE = ['#fff2e6', '#ffc18a', '#e86e00', '#b55600', '#8c4300'];
const COARSE_GRAY   = ['#f9f5f0', '#d6c4ae', '#a99275', '#685d50', '#353228'];
const COARSE_THRESH = [1, 15, 35, 60];

function bucketIndex(magnitude, thresholds) {
  for (let i = thresholds.length - 1; i >= 0; i--) {
    if (magnitude >= thresholds[i]) return i + 1;
  }
  return 0;
}

function classify(pct, eur, orangeStops, grayStops, thresholds) {
  const { magnitude } = costsAndMagnitude(pct, eur);
  const idx = bucketIndex(magnitude, thresholds);
  const winner = pct >= 0 ? 'OB' : 'CSP';
  const bg = (winner === 'OB' ? orangeStops : grayStops)[idx];
  const text = idx >= orangeStops.length - 3 ? '#fff' : '#1a1a1a';
  return { magnitude, winner, bg, text };
}

// Badge texte (option 2a = variante "c" du prototype)
function tagFor(pct) {
  if (pct > 0) return { label: 'OB', bg: '#ff7900', text: '#fff' };
  return { label: 'AWS', bg: '#685d50', text: '#fff' }; // ou 'Azure' selon selectedCSP
}
// headline affiché dans la case : `${tag.label} −${Math.round(magnitude)}%`

// Phrase de synthèse du panneau de détail
function sentenceFor(bandwidth, volume, pct, eur, magnitude) {
  const m = Math.round(magnitude);
  if (pct > 0) {
    return `Orange Business coûte ${m}% de moins que l'egress direct AWS sur ${bandwidth} / ${volume} par mois, soit ${eur.toFixed(2)} €/mois d'économie.`;
  }
  return `AWS coûte ${m}% de moins qu'Orange Business sur ${bandwidth} / ${volume} par mois, soit ${eur.toFixed(2)} €/mois d'écart.`;
}
```

Le prototype illustre aussi le calcul du panneau de détail (répartition OB/Port CSP/Egress dans la barre segmentée, charge du lien, bandeau gagnant vert/rouge) et le rendu du point de bascule (mini-barre bleu/ambre) — cf. le fichier complet `Heatmap Redesign.dc.html` dans l'export zip original (`Downloads/Benchmarking Evolution Platform-handoff.zip`) si le détail des proportions est nécessaire au moment du dev (fonctions `buildDetail`, `crossoverFor`).

### 1.8 — Hors périmètre convenu

- Heatmap du **Mode Challenger** (`ChallengerHeatmap.jsx`) — non retouchée, même logique de bins/badges transposable si voulu (voir aussi §3.3)
- Mode Public/IPsec affiché en heatmap principale (actuellement seul Private vs egress est montré ; le point de bascule y fait référence mais le mode Public/IPsec lui-même n'a pas sa propre heatmap redessinée)

---

## 2 — Fiabilisation du pipeline de pricing (AWS/Azure/Megaport/Equinix)

**Constat de Jean-Charles** : 4 fonctions AWS Lambda existent déjà et récupèrent le pricing AWS, Azure, Megaport et Equinix. L'intégration dans l'app se fait aujourd'hui par "pseudo-insertions manuelles" à chaque montée de version — pas de pipeline, pas de garde-fou automatique. C'est le pendant infra de l'unification déjà faite côté OB Cloud Connect cette session (source unique + métadonnée de fraîcheur) : les 4 autres sources de données restent sur ce mode manuel.

**Décision de cadrage** : pas de Step Functions complet — jugé disproportionné/trop rigide pour la situation actuelle ("trop chaotique" pour un mode pipeline entièrement automatisé selon Jean-Charles). Approche retenue : un **Lambda chef d'orchestre** qui appelle les 4 sources en parallèle (`Promise.all` ou équivalent), plus simple à opérer et à faire évoluer qu'une définition Step Functions dès le départ.

Forme de pipeline envisagée :
```
Trigger (manuel ou EventBridge cron mensuel)
  → Lambda orchestrateur
      ├─ Promise.all([Lambda AWS, Lambda Azure, Lambda Megaport, Lambda Equinix])
      │    → chaque sortie atterrit dans S3 (bucket versionné, un prefix par date)
      ├─ Transform : raw → format attendu par l'app (généralise ce que fait déjà
      │    scripts/convert_ob_pricing.mjs pour le CSV OB, mais pour 4 formats sources
      │    différents — c'est là que se concentre la majorité du travail, pas dans
      │    l'orchestration)
      ├─ Validation : complétude par pays/bande passante, écart de prix anormal vs
      │    la version précédente (pattern déjà utilisé cette session pour vérifier
      │    ob_pricing_jul2026.js) → alerte si suspect, sinon on continue
      └─ Publication : commit des fichiers générés + PR GitHub (pas de push direct
           sur main, garde-fou humain avant qu'un changement de prix parte en prod)
           → Amplify build sur merge, comme aujourd'hui
```

**Ce chantier vit majoritairement côté AWS** (Lambdas, S3, appel API GitHub), hors du dépôt `tco-calculator` lui-même. Ce qui est directement réutilisable depuis ce repo : le pattern de script de conversion (`convert_ob_pricing.mjs`) à généraliser par source, et la logique de validation de complétude déjà éprouvée sur les données OB.

**Peut avancer en parallèle du chantier 1** — infrastructures différentes, aucune dépendance entre les deux.

---

## 3 — Backlog d'évolutions (nice-to-have, non urgentes)

Brainstorm de fin de session, pas encore priorisé finement — à challenger au cas par cas. Regroupé par thème.

### 3.1 — Fiabilité (recommandation la plus haute priorité du backlog)

Aucune vérification automatisée du repo aujourd'hui (pas de CI, pas de tests) — pour un outil qui manipule de vrais montants commerciaux (voir le bug de conversion EUR/USD trouvé et corrigé en v6.3), c'est le risque le plus sérieux du projet.
- CI GitHub Actions basique (`npm run build` + lint) — attraperait les erreurs d'import/syntaxe avant `main`
- Tests unitaires ciblés sur les fonctions pures : `src/utils/calculations.js`, `src/engine/pricingEngine.js`, `src/engine/currencyUtils.js`

### 3.2 — Données de pricing

- **Fraîcheur généralisée** : `OB_PRICING_META` (ajouté en v6.3) ne couvre que le Cloud Connect. VNE, VPNaaS, Megaport, Equinix trainent chacun une date différente sans que ce soit visible — même mécanisme partout donnerait une vraie transparence multi-source, surtout côté Challenger qui mélange plusieurs vintages silencieusement.
- **Validation de complétude automatisée** : le script de conversion pourrait signaler automatiquement les trous (bande passante/pays manquants) au lieu de les découvrir à l'usage (pattern déjà exercé manuellement cette session, à scripter).

### 3.3 — Heatmap OB vs CSP (au-delà de la refonte de la partie 1)

- **Vue combinée Private + Public** : afficher les deux courbes de savings simultanément (au lieu du toggle qui masque l'une des deux) — la bascule serait visuellement évidente sans lire le badge. Peut se recouper avec la refonte de la partie 1 selon comment elle est implémentée.
- **Export PDF/image** : pour envoyer un scénario à un client sans accès à l'outil (le lien partageable aide en interne, pas en externe).
- **Sensibilité des hypothèses côté client** : NAT Gateway et boîtier IPsec sont des estimations forfaitaires — un slider "et si ce coût était 2x plus élevé/faible" rendrait l'argumentaire plus robuste face à un client qui conteste ces hypothèses.
- Heatmap du Mode Challenger (`ChallengerHeatmap.jsx`) redessinée avec la même logique de bins/badges, si le besoin se confirme (voir §1.8).

### 3.4 — Mode Challenger

- **Passerelle inverse** (Challenger → Heatmap), symétrique à celle livrée en v6.3 : voir "et vs egress Internet direct, ça donnerait quoi" depuis un scénario Challenger.
- **Combler ou mieux visibiliser les trous connus** documentés dans `DEVELOPMENT.md` (Megaport 2G sans VXC pricing, Equinix Canada/UAE absents) — aujourd'hui seulement visibles dans la heatmap Couverture, pas dans le calculateur principal.
- Modélisation plus fine des termes/discounts Megaport/Equinix (le fallback VC sur term=12 pour 24/36 mois est une simplification documentée, pas un vrai calcul).

### 3.5 — Reworks plus structurants

- **`App.jsx`** gère encore une vingtaine de `useState` — un passage en `useReducer` ou une extraction en état local au composant Heatmap réduirait le prop-drilling (confirmé en construisant `useUrlState` cette session : l'état de la Heatmap est déjà cohérent et isolable).
- **TypeScript** : beaucoup de `?.` défensifs dans le code actuel, signe de formes de données implicites qui causent des bugs silencieux (comme celui corrigé en v6.3). Migration progressive envisageable, `src/engine/` d'abord (fonctions pures, sans dépendance React).
- **Bibliothèque de scénarios** : suite logique du lien partageable (v6.3) — nommer/sauvegarder 3-4 scénarios clients récurrents plutôt que ressaisir à chaque fois.

---

## Suggestion d'enchaînement

1. **1.1** — fix du % non borné (rapide, corrige un vrai bug, peut se livrer seul avant le reste)
2. **1.2 à 1.7** — refonte visuelle complète (plus gros morceau, arbitrage OUDS déjà tranché en §1.6)
3. **2** — pipeline de pricing (chantier séparé, côté AWS, peut être mené en parallèle de 1)
4. **3** — backlog à piocher selon disponibilité, `3.1` (CI/tests) recommandé en premier si du temps se libère
