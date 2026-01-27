/**
 * Palette de couleurs pour la heatmap
 * Vert = Orange Business avantageux
 * Bleu = CSP Egress avantageux
 */

export function getCellColor(savingsPercent) {
  if (savingsPercent >= 50) return '#2e7d32';  // Vert foncé
  if (savingsPercent >= 40) return '#4caf50';  // Vert moyen
  if (savingsPercent >= 30) return '#66bb6a';  // Vert
  if (savingsPercent >= 20) return '#81c784';  // Vert clair
  if (savingsPercent >= 10) return '#c8e6c9';  // Vert très clair
  if (savingsPercent >= 0) return '#fff9c4';   // Jaune clair
  if (savingsPercent >= -10) return '#fff9c4'; // Jaune clair
  if (savingsPercent >= -20) return '#e3f2fd'; // Bleu très clair
  if (savingsPercent >= -50) return '#90caf9'; // Bleu clair
  if (savingsPercent >= -100) return '#42a5f5'; // Bleu moyen
  return '#1976d2'; // Bleu foncé
}

export function getTextColor(savingsPercent) {
  return Math.abs(savingsPercent) > 30 ? 'white' : '#333';
}
