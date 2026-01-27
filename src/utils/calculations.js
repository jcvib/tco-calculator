/**
 * Fonctions de calcul des coûts TCO
 */

import { parseBandwidth } from './formatters.js';

/**
 * Calcule le coût de l'egress Internet avec détail des tiers
 */
export function calculateEgressCost(volumeGiB, region, csp, egressRegions) {
  const regionData = egressRegions[region];
  if (!regionData) return { total: 0, tiers: [], freeAllowance: 100, volume: 0 };

  // Azure utilise GB (base 10), AWS utilise GiB (base 2)
  const volume = csp === 'Azure' ? volumeGiB * 1.073741824 : volumeGiB;

  // 100 premiers GB/GiB gratuits
  const freeAllowance = 100;
  const chargeableVolume = Math.max(0, volume - freeAllowance);

  let totalCost = 0;
  let remainingVolume = chargeableVolume;
  const tiersDetail = [];

  for (const tier of regionData.tiers) {
    if (remainingVolume <= 0) break;
    
    const tierMax = tier.max_gb === null ? Infinity : tier.max_gb;
    const tierCapacity = tierMax - tier.min_gb;
    const volumeInTier = Math.min(remainingVolume, tierCapacity);
    const costInTier = volumeInTier * tier.rate;
    
    if (volumeInTier > 0) {
      tiersDetail.push({
        min: tier.min_gb,
        max: tierMax,
        rate: tier.rate,
        volume: volumeInTier,
        cost: costInTier
      });
    }
    
    totalCost += costInTier;
    remainingVolume -= volumeInTier;
  }

  return {
    total: totalCost,
    tiers: tiersDetail,
    freeAllowance: freeAllowance,
    volume: volume,
    chargeableVolume: chargeableVolume
  };
}

/**
 * Calcule le coût de la connectivité privée avec détails complets
 */
export function calculatePrivateCost(params) {
  const {
    bandwidth, volumeGiB, obCountry, csp, region,
    obPricing, awsPortCosts, awsPortCostsJapan, awsPrivateEgress,
    azurePortCosts, azurePrivateEgress, azureRegionsToZones, azureErGwConfig
  } = params;

  // 1. Coût Orange Business (High Availability + Local uniquement)
  const obData = obPricing[obCountry]?.['High Availability']?.['Local']?.[bandwidth];
  if (!obData) return null;

  const obMonthlyCost = obData.monthly_cost_744h;
  const obReservedBW = obData.reserved_bw_fee_usd;
  const obHourlyRate = obData.hourly_rate_usd;
  const obHours = 744;

  // 2. Coût Port CSP
  const monthlyHours = 730;
  let cspPortCost, numCircuits, portCostPerHour, privateEgressRate, erGwCost = 0;
  let erGwScaleUnits = 0, erGwCostPerHour = 0;
  let zone = "";

  if (csp === 'AWS') {
    const isJapan = region === 'ap-northeast-1';
    const portCost = isJapan ? awsPortCostsJapan[bandwidth] : awsPortCosts[bandwidth];
    
    portCostPerHour = portCost || 0;
    numCircuits = 2;
    cspPortCost = portCostPerHour * monthlyHours * numCircuits;
    privateEgressRate = awsPrivateEgress[region] || 0.02;
  } else {
    const regionInfo = azureRegionsToZones[region];
    zone = regionInfo?.zone || "Zone 1";
    
    const portCostsByZone = azurePortCosts[bandwidth] || {};
    cspPortCost = portCostsByZone[zone] || 0;
    
    numCircuits = 1;
    portCostPerHour = cspPortCost / monthlyHours;
    privateEgressRate = azurePrivateEgress[zone] || 0.025;
    
    const bandwidthMbps = parseBandwidth(bandwidth);
    const bandwidthGbps = bandwidthMbps / 1000;
    erGwScaleUnits = Math.ceil(bandwidthGbps);
    erGwCostPerHour = erGwScaleUnits * (azureErGwConfig.cost_per_scale_unit_per_hour || 0.21);
    erGwCost = erGwCostPerHour * monthlyHours;
  }

  // 3. Coût Egress Privé
  const volumeForEgress = csp === 'Azure' ? volumeGiB * 1.073741824 : volumeGiB;
  const privateEgressCost = volumeForEgress * privateEgressRate;

  return {
    obCost: obMonthlyCost,
    obReservedBW: obReservedBW,
    obHourlyRate: obHourlyRate,
    obHours: obHours,
    obUsageCost: obHourlyRate * obHours,
    
    cspPortCost: cspPortCost,
    portCostPerHour: portCostPerHour,
    numCircuits: numCircuits,
    monthlyHours: monthlyHours,
    
    erGwCost: erGwCost,
    erGwScaleUnits: erGwScaleUnits,
    erGwCostPerHour: erGwCostPerHour,
    
    privateEgressCost: privateEgressCost,
    privateEgressRate: privateEgressRate,
    volumeForEgress: volumeForEgress,
    
    zone: zone,
    total: obMonthlyCost + cspPortCost + erGwCost + privateEgressCost
  };
}

/**
 * Calcule la charge du lien
 */
export function calculateLinkLoad(volumeTiB, bandwidthMbps, threshold) {
  const MBPS_TO_TIB_MONTH = (1e6 * 730 * 3600) / (8 * Math.pow(1024, 4));
  const monthlyCapacityTiB = bandwidthMbps * MBPS_TO_TIB_MONTH;
  const loadPercent = (volumeTiB / monthlyCapacityTiB) * 100;

  return {
    capacityTiB: monthlyCapacityTiB,
    loadPercent: loadPercent,
    isOverThreshold: loadPercent > threshold
  };
}
