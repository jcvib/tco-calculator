/**
 * Palette de couleurs pour la heatmap — rampe divergente symétrique bornée sur un
 * magnitude 0-100 (jamais sur le savingsPercent brut, qui explose côté CSP gagnant).
 * Orange = Orange Business avantageux, warm-gray = Egress Internet CSP avantageux,
 * 5 paliers par côté, tokens OUDS réels (src/styles/ouds-tokens/colors-raw.css).
 *
 * Contraste WCAG texte/fond vérifié via le validateur de la skill dataviz (contrast()),
 * pas au jugé : bascule texte blanc/encre à idx >= 3 sur les deux rampes (pire cas
 * 4.89:1 orange-700 et 4.99:1 orange-600, tous >= 4.5:1 AA).
 */

export const ORANGE_STOPS = ['#fff2e6', '#ffc18a', '#e86e00', '#b55600', '#8c4300']; // orange-50/200/600/700/800
export const GRAY_STOPS = ['#f9f5f0', '#d6c4ae', '#a99275', '#685d50', '#353228']; // warm-gray-100/300/500/700/900
export const THRESH = [1, 15, 35, 60];

const INK = '#212328';
const WHITE = '#ffffff';

function bucketIndex(magnitude) {
  for (let i = THRESH.length - 1; i >= 0; i--) {
    if (magnitude >= THRESH[i]) return i + 1;
  }
  return 0;
}

/**
 * Magnitude toujours bornée 0-100 : le savingsPercent brut reste inchangé pour la
 * logique existante (tri, seuils, savingsAmount) — ceci ne change que l'affichage.
 * Quand OB perd, le dénominateur bascule sur le coût du perdant (privateCost, qui
 * est alors toujours le plus grand des deux) au lieu du coût egress CSP.
 */
export function winnerMagnitude(savingsPercent, egressCost, privateCost) {
  if (savingsPercent >= 0) return savingsPercent;
  if (!privateCost) return 0;
  return ((privateCost - egressCost) / privateCost) * 100;
}

export function getWinner(savingsPercent) {
  return savingsPercent >= 0 ? 'OB' : 'CSP';
}

export function getCellColor(magnitude, winner) {
  const idx = bucketIndex(magnitude);
  return (winner === 'OB' ? ORANGE_STOPS : GRAY_STOPS)[idx];
}

export function getTextColor(magnitude) {
  return bucketIndex(magnitude) >= 3 ? WHITE : INK;
}
