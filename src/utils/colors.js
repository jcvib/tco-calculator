/**
 * Palette de couleurs pour la heatmap — échelle divergente asymétrique
 * Orange (marque) = Orange Business avantageux, dégradé clair→foncé selon l'ampleur
 * Blanc → gris = Egress Internet CSP avantageux, dégradé selon l'ampleur (texte noir partout)
 * Gris très clair = zone de quasi-parité
 *
 * Seuils calculés (pas au jugé) via le contraste WCAG texte/fond — voir la skill
 * dataviz. Le texte blanc n'est utilisé que là où il passe réellement ≥ 4.5:1
 * (paliers #9C4700 → 6.34:1, #C25800 → 4.48:1) ; en dessous le texte reste en encre
 * graphite, qui elle passe ≥ 4.5:1 sur toute la rampe grise et sur l'orange clair/moyen.
 */

const BINS = [
  { min: 60, bg: '#9C4700', text: 'white' },
  { min: 40, bg: '#C25800', text: 'white' },
  { min: 25, bg: '#FF9526', text: '#212328' },
  { min: 10, bg: '#FFCB85', text: '#212328' },
  { min: 0, bg: '#FFF4E8', text: '#212328' },
  { min: -10, bg: '#F7F8F9', text: '#212328' },
  { min: -25, bg: '#EDEEF1', text: '#212328' },
  { min: -50, bg: '#DBDDE2', text: '#212328' },
  { min: -100, bg: '#B9BCC4', text: '#212328' },
  { min: -Infinity, bg: '#8B8F99', text: '#212328' },
];

function findBin(savingsPercent) {
  return BINS.find(b => savingsPercent >= b.min) ?? BINS[BINS.length - 1];
}

export function getCellColor(savingsPercent) {
  return findBin(savingsPercent).bg;
}

export function getTextColor(savingsPercent) {
  return findBin(savingsPercent).text;
}
