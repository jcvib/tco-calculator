import { describe, it, expect } from 'vitest';
import {
  nearestOBBandwidth,
  nearestMegaportBandwidth,
  nearestEquinixBandwidth,
  nearestPortBandwidth,
  nearestVNEInternetBW,
  termLabel,
  calcMCRSize
} from './pricingEngine';

describe('nearestOBBandwidth', () => {
  it('rounds up to the nearest OB bandwidth tier', () => {
    expect(nearestOBBandwidth(15)).toBe('20M');
    expect(nearestOBBandwidth(100)).toBe('100M');
  });

  it('renders Gbps tiers with the G suffix instead of raw Mbps', () => {
    expect(nearestOBBandwidth(1000)).toBe('1G');
    expect(nearestOBBandwidth(1500)).toBe('2G');
  });

  it('clamps to the highest tier above the max bandwidth', () => {
    expect(nearestOBBandwidth(50000)).toBe('10G');
  });
});

describe('nearestMegaportBandwidth / nearestEquinixBandwidth', () => {
  it('round up to the nearest supported bandwidth (Mbps, numeric)', () => {
    expect(nearestMegaportBandwidth(60)).toBe(100);
    expect(nearestEquinixBandwidth(600)).toBe(1000);
  });
});

describe('nearestPortBandwidth', () => {
  it('only offers 1G or 10G ports, switching above the 10G threshold', () => {
    expect(nearestPortBandwidth(500)).toBe(1000);
    expect(nearestPortBandwidth(10000)).toBe(1000); // égal au seuil → encore 1G
    expect(nearestPortBandwidth(10001)).toBe(10000);
  });
});

describe('nearestVNEInternetBW', () => {
  it('mirrors the OB tiering (same bandwidth ladder)', () => {
    expect(nearestVNEInternetBW(15)).toBe('20M');
    expect(nearestVNEInternetBW(2500)).toBe('5G');
  });
});

describe('termLabel', () => {
  it('singularizes the 1-month term, pluralizes the rest', () => {
    expect(termLabel(1)).toBe('1 month');
    expect(termLabel(12)).toBe('12 months');
    expect(termLabel(36)).toBe('36 months');
  });
});

describe('calcMCRSize', () => {
  it('picks the first tier at or above total throughput (bandwidth × VXC count)', () => {
    // 4 VXCs × 500M = 2000M throughput → palier standard [1000,5000,10000] → 5000
    expect(calcMCRSize(500, 4, 'France')).toBe(5000);
  });

  it('uses a country-specific tier ladder when one is defined (e.g. high-tier countries)', () => {
    // Throughput 60000M dépasse le palier standard max (10000) mais rentre dans le
    // palier "HIGH" (jusqu'à 100000) réservé à certains pays.
    expect(calcMCRSize(20000, 3, 'Germany')).toBe(100000);
  });

  it('falls back to the highest available tier when throughput exceeds them all', () => {
    expect(calcMCRSize(100000, 10, 'Hong Kong')).toBe(5000); // palier HK max = 5000
  });
});
