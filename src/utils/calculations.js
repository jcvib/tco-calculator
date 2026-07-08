/**
 * Fonctions de calcul des coûts TCO
 */

import { parseBandwidth } from './formatters.js';
import { eurToUsd } from './currency.js';

// Coûts côté client optionnels (estimation, activables via toggle) — voir calculateNatGwCost / calculateIpsecCpeCost
// Exportés pour affichage transparent des hypothèses dans l'UI (Controls.jsx)
export const NAT_GW_HOURLY_USD = 0.045;   // tarif public par défaut AWS/Azure NAT Gateway ($/h)
export const NAT_GW_PER_GB_USD = 0.045;   // tarif public par défaut AWS/Azure NAT Gateway ($/Go traité)
export const NAT_GW_MONTHLY_HOURS = 730;
export const IPSEC_CPE_MONTHLY_USD = 250; // estimation forfaitaire, pas de tarif public de référence

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
    azurePortCosts, azurePrivateEgress, azureRegionsToZones, azureErGwConfig,
    obDiscount = 0
  } = params;

  // 1. Coût Orange Business — Cloud Connect Private (prix Jul26, EUR natif, PAYG pur)
  const obData = obPricing[obCountry]?.[bandwidth];
  if (!obData) return null;

  const obMonthlyCost = eurToUsd(obData.monthly_cost_744h);
  const obReservedBW = 0; // plus de frais de réservation depuis Jul26 — modèle PAYG complet
  const obHourlyRate = eurToUsd(obData.hourly_rate_eur);
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

  // 4. Appliquer la remise OB (engagement + discount supplémentaire)
  const obCostWithDiscount = obMonthlyCost * (1 - obDiscount / 100);
  
  // CSP : pas de remise, coûts inchangés
  const totalWithoutDiscount = obMonthlyCost + cspPortCost + erGwCost + privateEgressCost;
  const totalWithDiscount = obCostWithDiscount + cspPortCost + erGwCost + privateEgressCost;

  return {
    // Coûts originaux
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
    
    // OB avec remise
    obCostWithDiscount,
    obDiscount,
    
    // Totaux
    totalWithoutDiscount,
    totalWithDiscount,
    total: totalWithDiscount  // total par défaut = avec remise OB
  };
}

/**
 * Coût NAT Gateway estimé côté client — s'applique à tout trafic qui sort vers Internet
 * côté CSP (baseline egress Internet ET Cloud Connect Public/IPsec), pas à la Cloud Connect
 * Private (routage privé DX/ExpressRoute, pas de NAT Gateway nécessaire).
 * Tarifs par défaut : AWS/Azure NAT Gateway public (~0,045$/h + 0,045$/Go traité).
 */
export function calculateNatGwCost(volumeGiB) {
  const hourlyCost = NAT_GW_HOURLY_USD * NAT_GW_MONTHLY_HOURS;
  const dataCost = volumeGiB * NAT_GW_PER_GB_USD;
  return { hourlyCost, dataCost, volumeGiB, total: hourlyCost + dataCost };
}

/**
 * Coût estimé du boîtier/instance IPsec côté client — uniquement pertinent pour
 * la Cloud Connect Public/IPsec (tunnels IPsec à terminer côté client).
 * Estimation forfaitaire, pas de tarif public de référence.
 */
export function calculateIpsecCpeCost() {
  return { total: IPSEC_CPE_MONTHLY_USD };
}

/**
 * Calcule le coût de la Cloud Connect Public/IPsec (Evolution Platform) avec détails complets.
 * Contrairement à la Private CC, il n'y a pas de port DX/ExpressRoute ni d'egress privé :
 * les tunnels IPsec transitent par Internet, donc le trafic est facturé côté CSP au tarif
 * egress Internet standard (même grille tarifaire que la baseline "Egress Internet").
 */
export function calculatePublicIPsecCost(params) {
  const {
    bandwidth, volumeGiB, obCountry, csp, region,
    obPricingPublic, architecture, egressRegions,
    obDiscount = 0, includeClientCost = false
  } = params;

  const obData = obPricingPublic[obCountry]?.[architecture]?.[bandwidth];
  if (!obData) return null;

  const obMonthlyCost = eurToUsd(obData.monthly_cost_744h);
  const available = obData.status?.[csp] === 'active';

  const egressCostData = calculateEgressCost(volumeGiB, region, csp, egressRegions);
  const cspEgressCost = egressCostData.total;

  const natGw = includeClientCost ? calculateNatGwCost(volumeGiB) : { total: 0 };
  const ipsecCpe = includeClientCost ? calculateIpsecCpeCost() : { total: 0 };
  const clientCost = natGw.total + ipsecCpe.total;

  const obCostWithDiscount = obMonthlyCost * (1 - obDiscount / 100);

  const totalWithoutDiscount = obMonthlyCost + cspEgressCost + clientCost;
  const totalWithDiscount = obCostWithDiscount + cspEgressCost + clientCost;

  return {
    obCost: obMonthlyCost,
    obCostWithDiscount,
    obDiscount,
    architecture,
    available,

    cspEgressCost,
    cspEgressTiers: egressCostData.tiers,
    volumeForEgress: egressCostData.volume,

    natGwCost: natGw.total,
    natGwDetail: natGw,
    ipsecCpeCost: ipsecCpe.total,
    clientCost,

    totalWithoutDiscount,
    totalWithDiscount,
    total: totalWithDiscount
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
