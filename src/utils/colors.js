/**
 * Palette de couleurs pour la heatmap (dark theme)
 * Vert = Orange Business avantageux
 * Bleu = CSP Egress avantageux
 */

export function getCellColor(savingsPercent) {
  if (savingsPercent >= 50) return '#15803d';
  if (savingsPercent >= 40) return '#166534';
  if (savingsPercent >= 30) return '#14532d';
  if (savingsPercent >= 20) return '#1a5c32';
  if (savingsPercent >= 10) return '#1e4a2e';
  if (savingsPercent >= 0) return '#854d0e';
  if (savingsPercent >= -10) return '#78350f';
  if (savingsPercent >= -20) return '#1e3a5f';
  if (savingsPercent >= -50) return '#1d4ed8';
  if (savingsPercent >= -100) return '#1e3a8a';
  return '#172554';
}

export function getTextColor(savingsPercent) {
  if (savingsPercent >= 30) return 'white';
  if (savingsPercent >= 10) return '#86efac';
  if (savingsPercent >= 0) return '#fde68a';
  if (savingsPercent >= -10) return '#fde68a';
  if (savingsPercent >= -20) return '#93c5fd';
  return 'white';
}
