import { describe, it, expect } from 'vitest';
import {
  calculateEgressCost,
  calculatePrivateCost,
  calculatePublicIPsecCost,
  calculateNatGwCost,
  calculateIpsecCpeCost,
  getMonthlyCapacityTiB,
  calculateLinkLoad,
  findPrivatePublicCrossover,
  NAT_GW_HOURLY_USD,
  NAT_GW_PER_GB_USD,
  NAT_GW_MONTHLY_HOURS,
  IPSEC_CPE_MONTHLY_USD
} from './calculations';

const AWS_EGRESS_REGIONS = {
  'eu-west-1': {
    tiers: [
      { min_gb: 0, max_gb: 10240, rate: 0.09 },
      { min_gb: 10240, max_gb: null, rate: 0.07 }
    ]
  }
};

describe('calculateEgressCost', () => {
  it('applies the 100 GiB free allowance before the first paid tier', () => {
    const result = calculateEgressCost(100, 'eu-west-1', 'AWS', AWS_EGRESS_REGIONS);
    expect(result.total).toBe(0);
    expect(result.chargeableVolume).toBe(0);
  });

  it('splits volume across tiers once the free allowance is exceeded', () => {
    // 200 GiB - 100 GiB franchise = 100 GiB facturés, tout dans le 1er palier (0.09/GiB)
    const result = calculateEgressCost(200, 'eu-west-1', 'AWS', AWS_EGRESS_REGIONS);
    expect(result.chargeableVolume).toBe(100);
    expect(result.total).toBeCloseTo(100 * 0.09, 6);
    expect(result.tiers).toHaveLength(1);
  });

  it('returns an empty result when the region is unknown', () => {
    const result = calculateEgressCost(500, 'unknown-region', 'AWS', AWS_EGRESS_REGIONS);
    expect(result).toEqual({ total: 0, tiers: [], freeAllowance: 100, volume: 0 });
  });
});

describe('calculateNatGwCost / calculateIpsecCpeCost', () => {
  it('computes the NAT Gateway estimate from the documented hourly + per-GB assumption', () => {
    const result = calculateNatGwCost(1000);
    expect(result.hourlyCost).toBeCloseTo(NAT_GW_HOURLY_USD * NAT_GW_MONTHLY_HOURS, 6);
    expect(result.dataCost).toBeCloseTo(1000 * NAT_GW_PER_GB_USD, 6);
    expect(result.total).toBeCloseTo(result.hourlyCost + result.dataCost, 6);
  });

  it('returns the flat IPsec CPE estimate regardless of volume', () => {
    expect(calculateIpsecCpeCost()).toEqual({ total: IPSEC_CPE_MONTHLY_USD });
  });
});

describe('getMonthlyCapacityTiB / calculateLinkLoad', () => {
  it('flags load over the given threshold', () => {
    const capacityTiB = getMonthlyCapacityTiB(100); // 100 Mbps
    const comfortable = calculateLinkLoad(capacityTiB * 0.5, 100, 80);
    const overThreshold = calculateLinkLoad(capacityTiB * 0.95, 100, 80);

    expect(comfortable.isOverThreshold).toBe(false);
    expect(overThreshold.isOverThreshold).toBe(true);
    expect(overThreshold.loadPercent).toBeCloseTo(95, 0);
  });
});

describe('calculatePrivateCost', () => {
  const baseParams = {
    bandwidth: '100M',
    volumeGiB: 1024,
    obCountry: 'France',
    region: 'eu-west-1',
    obPricing: {
      France: { '100M': { monthly_cost_744h: 1000, hourly_rate_eur: 1.34 } }
    },
    obDiscount: 0
  };

  it('sums OB (EUR→USD) + port + private egress for AWS (2 circuits, no ErGw)', () => {
    const result = calculatePrivateCost({
      ...baseParams,
      csp: 'AWS',
      awsPortCosts: { '100M': 0.30 },
      awsPortCostsJapan: {},
      awsPrivateEgress: { 'eu-west-1': 0.02 },
      azurePortCosts: {},
      azurePrivateEgress: {},
      azureRegionsToZones: {},
      azureErGwConfig: {}
    });

    expect(result.obCost).toBeCloseTo(1000 * 1.08, 6); // EUR_TO_USD = 1.08
    expect(result.numCircuits).toBe(2);
    expect(result.cspPortCost).toBeCloseTo(0.30 * 730 * 2, 6);
    expect(result.erGwCost).toBe(0);
    expect(result.privateEgressCost).toBeCloseTo(1024 * 0.02, 6); // AWS: pas de conversion GiB→GB
    expect(result.total).toBeCloseTo(result.obCost + result.cspPortCost + result.privateEgressCost, 6);
  });

  it('applies obDiscount only to the OB portion, not to CSP port/egress', () => {
    const noDiscount = calculatePrivateCost({
      ...baseParams,
      csp: 'AWS',
      awsPortCosts: { '100M': 0.30 },
      awsPortCostsJapan: {},
      awsPrivateEgress: { 'eu-west-1': 0.02 },
      azurePortCosts: {}, azurePrivateEgress: {}, azureRegionsToZones: {}, azureErGwConfig: {}
    });
    const withDiscount = calculatePrivateCost({
      ...baseParams,
      csp: 'AWS',
      obDiscount: 20,
      awsPortCosts: { '100M': 0.30 },
      awsPortCostsJapan: {},
      awsPrivateEgress: { 'eu-west-1': 0.02 },
      azurePortCosts: {}, azurePrivateEgress: {}, azureRegionsToZones: {}, azureErGwConfig: {}
    });

    expect(withDiscount.obCostWithDiscount).toBeCloseTo(noDiscount.obCost * 0.8, 6);
    expect(withDiscount.cspPortCost).toBe(noDiscount.cspPortCost);
    expect(withDiscount.totalWithDiscount).toBeLessThan(noDiscount.totalWithoutDiscount);
  });

  it('computes Azure ErGw scale units from bandwidth and applies the GiB→GB egress factor', () => {
    const result = calculatePrivateCost({
      ...baseParams,
      csp: 'Azure',
      region: 'westeurope',
      azureRegionsToZones: { westeurope: { zone: 'Zone 1' } },
      azurePortCosts: { '100M': { 'Zone 1': 300 } },
      azurePrivateEgress: { 'Zone 1': 0.025 },
      azureErGwConfig: { cost_per_scale_unit_per_hour: 0.21 },
      awsPortCosts: {}, awsPortCostsJapan: {}, awsPrivateEgress: {}
    });

    expect(result.numCircuits).toBe(1);
    expect(result.erGwScaleUnits).toBe(1); // ceil(100 Mbps / 1000)
    expect(result.erGwCost).toBeCloseTo(1 * 0.21 * 730, 6);
    expect(result.volumeForEgress).toBeCloseTo(1024 * 1.073741824, 6);
    expect(result.privateEgressCost).toBeCloseTo(result.volumeForEgress * 0.025, 6);
  });

  it('returns null when no OB pricing is available for this country/bandwidth', () => {
    const result = calculatePrivateCost({
      ...baseParams,
      obCountry: 'Unknown',
      csp: 'AWS',
      awsPortCosts: {}, awsPortCostsJapan: {}, awsPrivateEgress: {},
      azurePortCosts: {}, azurePrivateEgress: {}, azureRegionsToZones: {}, azureErGwConfig: {}
    });
    expect(result).toBeNull();
  });
});

describe('calculatePublicIPsecCost', () => {
  const params = {
    bandwidth: '100M',
    volumeGiB: 1024,
    obCountry: 'France',
    csp: 'AWS',
    region: 'eu-west-1',
    architecture: 'Standard',
    obPricingPublic: {
      France: { Standard: { '100M': { monthly_cost_744h: 500, status: { AWS: 'active' } } } }
    },
    egressRegions: AWS_EGRESS_REGIONS,
    obDiscount: 0
  };

  it('bills CSP egress at the standard Internet egress rate (no DX/ExpressRoute)', () => {
    const result = calculatePublicIPsecCost(params);
    expect(result.available).toBe(true);
    expect(result.cspEgressCost).toBeCloseTo(calculateEgressCost(1024, 'eu-west-1', 'AWS', AWS_EGRESS_REGIONS).total, 6);
    expect(result.clientCost).toBe(0); // includeClientCost non fourni → false par défaut
  });

  it('adds NAT Gateway + IPsec CPE estimates only when includeClientCost is true', () => {
    const result = calculatePublicIPsecCost({ ...params, includeClientCost: true });
    expect(result.natGwCost).toBeGreaterThan(0);
    expect(result.ipsecCpeCost).toBe(IPSEC_CPE_MONTHLY_USD);
    expect(result.clientCost).toBeCloseTo(result.natGwCost + result.ipsecCpeCost, 6);
  });

  it('flags unavailability per-CSP from the status map', () => {
    const result = calculatePublicIPsecCost({
      ...params,
      csp: 'Azure',
      obPricingPublic: {
        France: { Standard: { '100M': { monthly_cost_744h: 500, status: { AWS: 'active', Azure: 'planned' } } } }
      }
    });
    expect(result.available).toBe(false);
  });
});

describe('findPrivatePublicCrossover', () => {
  // Private moins cher à faible volume (coûts fixes bas, pas d'egress facturé au même tarif),
  // Public plus cher en volume car l'egress Internet standard coûte plus cher que l'egress
  // privé DX/ExpressRoute — on construit un fixture qui isole ce comportement.
  const crossoverParams = {
    bandwidth: '100M',
    bandwidthMbps: 100,
    obCountry: 'France',
    csp: 'AWS',
    region: 'eu-west-1',
    obPricing: { France: { '100M': { monthly_cost_744h: 1000, hourly_rate_eur: 1.34 } } },
    obPricingPublic: { France: { Standard: { '100M': { monthly_cost_744h: 200, status: { AWS: 'active' } } } } },
    architecture: 'Standard',
    egressRegions: AWS_EGRESS_REGIONS,
    awsPortCosts: { '100M': 0.30 },
    awsPortCostsJapan: {},
    awsPrivateEgress: { 'eu-west-1': 0.005 }, // egress privé très bon marché vs egress Internet public
    azurePortCosts: {}, azurePrivateEgress: {}, azureRegionsToZones: {}, azureErGwConfig: {},
    obDiscount: 0,
    includeClientCost: false
  };

  it('finds a volume where Private overtakes Public as the cheaper option', () => {
    const result = findPrivatePublicCrossover(crossoverParams);
    expect(result.crossoverVolumeTiB).not.toBeNull();
    expect(result.crossoverVolumeTiB).toBeGreaterThan(0);
    // Private a des coûts fixes plus élevés (port 2 circuits) → gagne seulement en volume
    expect(result.winnerBelow).toBe('public');
    expect(result.winnerAbove).toBe('private');
  });

  it('reports no-crossover when one option wins across the whole range', () => {
    const result = findPrivatePublicCrossover({
      ...crossoverParams,
      awsPrivateEgress: { 'eu-west-1': 0.09 } // egress privé aussi cher que l'egress public → Private ne rattrape jamais son surcoût de port fixe
    });
    expect(result.crossoverVolumeTiB).toBeNull();
    expect(result.reason).toBe('no-crossover');
    expect(result.constantWinner).toBe('public');
  });
});
