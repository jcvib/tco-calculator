/**
 * Utilitaires de formatage pour nombres, unités, devises
 */

import { usdToEur } from './currency.js';

// Ordre canonique des bandes passantes OB (Jul26) : 5M à 10G
export const BANDWIDTH_ORDER = [
  '5M', '10M', '20M', '30M', '40M', '50M', '100M', '200M', '300M', '400M', '500M',
  '1G', '2G', '5G', '10G',
];

export function sortBandwidths(bandwidths) {
  return [...bandwidths].sort((a, b) => BANDWIDTH_ORDER.indexOf(a) - BANDWIDTH_ORDER.indexOf(b));
}

// Devise d'affichage — tous les calculs internes restent en USD,
// la conversion n'a lieu qu'au moment du formatage.
let displayCurrency = 'EUR';

export function setDisplayCurrency(currency) {
  displayCurrency = currency;
}

export function getDisplayCurrency() {
  return displayCurrency;
}

export const VOLUME_LABELS = {
  0.5: "512 GiB",
  1: "1 TiB",
  2: "2 TiB",
  5: "5 TiB",
  10: "10 TiB",
  20: "20 TiB",
  50: "50 TiB",
  100: "100 TiB",
  200: "200 TiB",
  500: "500 TiB"
};

export function parseBandwidth(bw) {
  if (bw.endsWith('G')) {
    return parseInt(bw) * 1000;
  }
  return parseInt(bw);
}

export function formatCurrency(amountUsd) {
  if (amountUsd === undefined || amountUsd === null || isNaN(amountUsd)) {
    return displayCurrency === 'EUR' ? '0,00 €' : '$0.00';
  }
  if (displayCurrency === 'EUR') {
    return `${usdToEur(Number(amountUsd)).toFixed(2)} €`;
  }
  return `$${Number(amountUsd).toFixed(2)}`;
}

export function formatPercentage(value) {
  if (value === undefined || value === null || isNaN(value)) {
    return '0.0%';
  }
  return `${value > 0 ? '+' : ''}${Number(value).toFixed(1)}%`;
}

export function getVolumeLabel(vol, unit, csp) {
  if (unit === 'tb' || (unit === 'native' && csp === 'Azure')) {
    return `${vol} TB`;
  }
  return VOLUME_LABELS[vol] || `${vol} TiB`;
}

export function getDisplayedVolume(volumeGiB, unit, csp) {
  if (unit === 'tb' || (unit === 'native' && csp === 'Azure')) {
    return {
      value: (volumeGiB * 1.073741824 / 1000).toFixed(2),
      unit: 'TB'
    };
  }
  return {
    value: (volumeGiB / 1024).toFixed(2),
    unit: 'TiB'
  };
}

export function formatDate(isoString, lang) {
  if (!isoString) return '—';
  const date = new Intl.DateTimeFormat(lang === 'fr' ? 'fr-FR' : 'en-GB', {
    day: '2-digit', month: '2-digit', year: 'numeric',
  }).format(new Date(isoString));
  return date;
}

export function getVolumeInGiB(displayedVolume, unit, csp) {
  if (unit === 'tb') {
    const volumeGB = displayedVolume * 1000;
    return volumeGB / 1.073741824;
  } else if (unit === 'native' && csp === 'Azure') {
    const volumeGB = displayedVolume * 1000;
    return volumeGB / 1.073741824;
  }
  return displayedVolume * 1024;
}
