/**
 * Taux de change de référence. Le pricing OB (Jul26) est nativement en EUR,
 * les coûts CSP (AWS/Azure) sont nativement en USD. Tous les calculs internes
 * restent en USD ; la conversion vers l'EUR n'a lieu qu'à l'affichage
 * (voir setDisplayCurrency / formatCurrency dans formatters.js).
 */
export const EUR_TO_USD = 1.08;

export function eurToUsd(amountEur) {
  return amountEur == null ? amountEur : amountEur * EUR_TO_USD;
}

export function usdToEur(amountUsd) {
  return amountUsd == null ? amountUsd : amountUsd / EUR_TO_USD;
}
