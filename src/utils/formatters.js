/**
 * Utilitaires de formatage pour nombres, unités, devises
 */

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

export function formatCurrency(amount) {
  return `$${amount.toFixed(2)}`;
}

export function formatPercentage(value) {
  return `${value > 0 ? '+' : ''}${value.toFixed(1)}%`;
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
