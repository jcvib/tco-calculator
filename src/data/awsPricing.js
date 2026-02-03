/**
 * AWS Pricing Data - ES6 Module Wrapper
 */

// Import des données depuis le fichier legacy
import './pricing_data_jan2026.js';

// Export des données AWS
export const AWS_PORT_COSTS = window.CLOUD_PRICING_DATA.providers.aws.connectivity.direct_connect.port_costs.default;
export const AWS_PORT_COSTS_JAPAN = window.CLOUD_PRICING_DATA.providers.aws.connectivity.direct_connect.port_costs.variations['ap-northeast-1'];
export const AWS_PRIVATE_EGRESS = window.CLOUD_PRICING_DATA.providers.aws.connectivity.direct_connect.private_egress;
export const AWS_EGRESS_REGIONS = window.CLOUD_PRICING_DATA.providers.aws.egress_internet.regions;
export const BANDWIDTHS_AWS = window.CLOUD_PRICING_DATA.providers.aws.connectivity.direct_connect.bandwidths;
