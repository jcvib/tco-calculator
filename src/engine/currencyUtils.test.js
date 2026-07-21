import { describe, it, expect, beforeEach } from 'vitest';
import { toDisplay, formatCurrency, setDisplayCurrency, getDisplayCurrency } from './currencyUtils';

// displayCurrency est un état module-level partagé entre tous les appels — on le
// réinitialise avant chaque test pour éviter qu'un test en pollue un autre.
beforeEach(() => {
  setDisplayCurrency('USD');
});

describe('setDisplayCurrency / getDisplayCurrency', () => {
  it('round-trips the selected display currency', () => {
    expect(getDisplayCurrency()).toBe('USD');
    setDisplayCurrency('EUR');
    expect(getDisplayCurrency()).toBe('EUR');
  });
});

describe('toDisplay', () => {
  it('passes USD amounts through unchanged when the display currency is USD', () => {
    expect(toDisplay(100, 'USD')).toBeCloseTo(100, 6);
  });

  it('converts a source currency to USD using FX_RATES_TO_USD', () => {
    // GBP → USD : rate 1.27 (voir data/geoMappings.js)
    expect(toDisplay(100, 'GBP')).toBeCloseTo(127, 6);
  });

  it('converts to EUR when the display currency is EUR', () => {
    setDisplayCurrency('EUR');
    // 100 USD → EUR : 100 / 1.18 (FX_RATES_TO_USD.EUR)
    expect(toDisplay(100, 'USD')).toBeCloseTo(100 / 1.18, 6);
  });

  it('returns null for a null amount instead of producing NaN', () => {
    expect(toDisplay(null, 'USD')).toBeNull();
  });
});

describe('formatCurrency', () => {
  // Valeurs < 1000 pour éviter toute dépendance au séparateur de milliers localisé
  // (toLocaleString() sans locale explicite dépend de l'environnement d'exécution).
  it('formats with a $ prefix and rounds to the nearest unit in USD mode', () => {
    expect(formatCurrency(42.5)).toBe('$43');
  });

  it('formats with a € prefix in EUR mode', () => {
    setDisplayCurrency('EUR');
    expect(formatCurrency(42.5)).toBe('€43');
  });

  it('renders the em dash placeholder for a null amount', () => {
    expect(formatCurrency(null)).toBe('—');
  });
});
