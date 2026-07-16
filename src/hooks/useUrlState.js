// Synchronise la configuration de la Heatmap OB vs CSP avec les query params de l'URL,
// pour qu'un commercial puisse partager un lien direct plutôt que de redécrire un scénario.
// Lecture au chargement (readUrlState) + écriture à chaque changement via history.replaceState
// (pas de nouvelle entrée d'historique à chaque interaction).

import { useEffect } from 'react';

const CLIENT_COST_FLAG = '1';

function parseEnum(value, allowed) {
  return allowed.includes(value) ? value : undefined;
}

function parseNumber(value) {
  const n = Number(value);
  return Number.isFinite(n) ? n : undefined;
}

export function readUrlState() {
  const params = new URLSearchParams(window.location.search);

  const customVolumes = params.has('vols')
    ? params.get('vols').split(',').map(Number).filter(n => Number.isFinite(n) && n > 0 && n <= 1000)
    : undefined;

  const cellBandwidth = params.get('cellbw') || undefined;
  const cellVolumeTiB = params.has('cellvol') ? parseNumber(params.get('cellvol')) : undefined;

  return {
    viewMode: parseEnum(params.get('view'), ['heatmap', 'challenger']),
    selectedCountry: params.get('country') || undefined,
    selectedCSP: parseEnum(params.get('csp'), ['AWS', 'Azure']),
    selectedRegion: params.get('region') || undefined,
    ccMode: parseEnum(params.get('cc'), ['private', 'public']),
    publicArchitecture: parseEnum(params.get('arch'), ['Standard', 'High Availability']),
    displayCurrency: parseEnum(params.get('cur'), ['EUR', 'USD']),
    obTcvBand: params.get('tcv') || undefined,
    obDuration: params.has('term') ? parseNumber(params.get('term')) : undefined,
    obExtraDiscount: params.has('disc') ? parseNumber(params.get('disc')) : undefined,
    volumeUnit: parseEnum(params.get('unit'), ['native', 'tib', 'tb']),
    includeClientCost: params.get('client') === CLIENT_COST_FLAG,
    customVolumes,
    initialCellSelection: (cellBandwidth && cellVolumeTiB != null)
      ? { bandwidth: cellBandwidth, volumeTiB: cellVolumeTiB }
      : undefined,
  };
}

export function useSyncUrlState(state) {
  const {
    viewMode, selectedCountry, selectedCSP, selectedRegion, ccMode, publicArchitecture,
    displayCurrency, obTcvBand, obDuration, obExtraDiscount, volumeUnit, includeClientCost,
    customVolumes, selectedCellBandwidth, selectedCellVolumeTiB,
  } = state;

  useEffect(() => {
    const params = new URLSearchParams();
    params.set('view', viewMode);
    params.set('country', selectedCountry);
    params.set('csp', selectedCSP);
    params.set('region', selectedRegion);
    params.set('cc', ccMode);
    if (ccMode === 'public') params.set('arch', publicArchitecture);
    params.set('cur', displayCurrency);
    params.set('tcv', obTcvBand);
    params.set('term', String(obDuration));
    if (obExtraDiscount > 0) params.set('disc', String(obExtraDiscount));
    params.set('unit', volumeUnit);
    if (includeClientCost) params.set('client', CLIENT_COST_FLAG);
    if (customVolumes?.length) params.set('vols', customVolumes.join(','));
    if (selectedCellBandwidth && selectedCellVolumeTiB != null) {
      params.set('cellbw', selectedCellBandwidth);
      params.set('cellvol', String(selectedCellVolumeTiB));
    }

    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState(null, '', newUrl);
  }, [
    viewMode, selectedCountry, selectedCSP, selectedRegion, ccMode, publicArchitecture,
    displayCurrency, obTcvBand, obDuration, obExtraDiscount, volumeUnit, includeClientCost,
    customVolumes, selectedCellBandwidth, selectedCellVolumeTiB,
  ]);
}
