import { describe, it, expect } from 'vitest';
import { winnerMagnitude, getWinner, getCellColor, getTextColor, ORANGE_STOPS, GRAY_STOPS } from './colors';

describe('winnerMagnitude', () => {
  it('returns savingsPercent unchanged when OB wins (already bounded 0-100)', () => {
    expect(winnerMagnitude(42, 1000, 580)).toBe(42);
    expect(winnerMagnitude(0, 1000, 1000)).toBe(0);
  });

  it('stays bounded 0-100 when CSP wins by a large margin (regression for the -11642% bug)', () => {
    // Cas réel observé : OB perd très largement, egressCost minuscule devant privateCost
    const egressCost = 3.81;
    const privateCost = 450;
    const savingsPercent = ((egressCost - privateCost) / egressCost) * 100; // explose (~-11710%)
    const magnitude = winnerMagnitude(savingsPercent, egressCost, privateCost);

    expect(savingsPercent).toBeLessThan(-1000); // confirme que le brut explose bien
    expect(magnitude).toBeGreaterThanOrEqual(0);
    expect(magnitude).toBeLessThanOrEqual(100);
    // magnitude attendu : (privateCost - egressCost) / privateCost * 100
    expect(magnitude).toBeCloseTo(((privateCost - egressCost) / privateCost) * 100, 5);
  });

  it('returns 0 when privateCost is falsy (guards against division by zero)', () => {
    expect(winnerMagnitude(-50, 100, 0)).toBe(0);
  });
});

describe('getWinner', () => {
  it('is OB for non-negative savingsPercent, CSP otherwise', () => {
    expect(getWinner(0)).toBe('OB');
    expect(getWinner(35)).toBe('OB');
    expect(getWinner(-0.01)).toBe('CSP');
  });
});

describe('getCellColor / getTextColor', () => {
  it('picks the lightest stop near zero magnitude and the darkest at high magnitude', () => {
    expect(getCellColor(0, 'OB')).toBe(ORANGE_STOPS[0]);
    expect(getCellColor(0, 'CSP')).toBe(GRAY_STOPS[0]);
    expect(getCellColor(99, 'OB')).toBe(ORANGE_STOPS[4]);
    expect(getCellColor(99, 'CSP')).toBe(GRAY_STOPS[4]);
  });

  it('switches text color to white only on the two darkest buckets (idx >= 3)', () => {
    expect(getTextColor(10)).toBe('#212328'); // idx 1
    expect(getTextColor(35)).toBe('#ffffff'); // idx 3
    expect(getTextColor(60)).toBe('#ffffff'); // idx 4
  });
});
