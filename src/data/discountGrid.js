/**
 * Grille de remise à deux dimensions (TCV × durée d'engagement) — modèle EVP.
 * Remplace l'ancien modèle "engagement seul" (12/24/36 mois → 10/15/20%).
 * Source: présentation Andrej, juillet 2026.
 */
// Le libellé affiché (band.label) est traduit via i18n — voir controls.tcvBands.* dans translations.js
export const TCV_BANDS = [
  { key: 'below_50k' },
  { key: 'above_50k' },
  { key: 'above_0_5m' },
  { key: 'above_1m' },
  { key: 'above_2m' },
  { key: 'above_3m' },
  { key: 'above_5m' },
];

export const DURATIONS = [1, 12, 24, 36, 60];

export const DISCOUNT_GRID = {
  below_50k: { 1: 0.0, 12: 0.0, 24: 0.0, 36: 0.0, 60: 0.0 },
  above_50k: { 1: 1.5, 12: 3.5, 24: 11.5, 36: 8.5, 60: 4.5 },
  above_0_5m: { 1: 2.0, 12: 5.0, 24: 13.0, 36: 11.0, 60: 7.0 },
  above_1m: { 1: 2.0, 12: 5.0, 24: 14.0, 36: 11.0, 60: 8.0 },
  above_2m: { 1: 3.0, 12: 7.0, 24: 16.0, 36: 15.0, 60: 9.0 },
  above_3m: { 1: 4.0, 12: 11.0, 24: 24.0, 36: 23.0, 60: 15.0 },
  above_5m: { 1: 5.0, 12: 12.0, 24: 35.0, 36: 32.0, 60: 27.0 },
};

export function getDiscountPercent(tcvBand, duration) {
  return DISCOUNT_GRID[tcvBand]?.[duration] ?? 0;
}
