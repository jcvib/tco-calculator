/**
 * Azure Pricing Data - ES6 Module Wrapper
 * Les données sont chargées via <script> dans index.html
 */

// Export des données Azure depuis window
export const AZURE_PORT_COSTS = window.CLOUD_PRICING_DATA.providers.azure.connectivity.expressroute.tiers.standard.metered;
export const AZURE_PRIVATE_EGRESS = window.CLOUD_PRICING_DATA.providers.azure.connectivity.expressroute.private_egress;
export const AZURE_REGIONS_TO_ZONES = window.CLOUD_PRICING_DATA.providers.azure.connectivity.expressroute.regions;
export const AZURE_EGRESS_REGIONS = window.CLOUD_PRICING_DATA.providers.azure.egress_internet.regions;
export const AZURE_ERGW_CONFIG = window.CLOUD_PRICING_DATA.providers.azure.connectivity.expressroute.ergw;
export const BANDWIDTHS_AZURE = window.CLOUD_PRICING_DATA.providers.azure.connectivity.expressroute.bandwidths;
