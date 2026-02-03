/**
 * Orange Business Pricing Data - ES6 Module Wrapper
 */

// Import des données depuis le fichier legacy
import './ob_pricing_jan2026.js';

// Export des données OB
export const OB_PRICING = window.OB_PRICING;
export const OB_COUNTRIES = window.OB_COUNTRIES || Object.keys(window.OB_PRICING);
