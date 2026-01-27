/**
 * Orange Business Pricing Data - ES6 Module Wrapper
 * Les données sont chargées via <script> dans index.html
 */

// Export des données OB depuis window
export const OB_PRICING = window.OB_PRICING;
export const OB_COUNTRIES = window.OB_COUNTRIES || Object.keys(window.OB_PRICING);
