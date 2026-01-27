/**
 * AWS Pricing Data - ES6 Module Wrapper
 * Les données sont chargées via <script> dans index.html
 */

// Export des données AWS depuis window
export const AWS_PORT_COSTS = window.CLOUD_PRICING_DATA.providers.aws.connectivity.direct_connect.port_costs.default;
export const AWS_PORT_COSTS_JAPAN = window.CLOUD_PRICING_DATA.providers.aws.connectivity.direct_connect.port_costs.variations['ap-northeast-1'];
export const AWS_PRIVATE_EGRESS = window.CLOUD_PRICING_DATA.providers.aws.connectivity.direct_connect.private_egress;
export const AWS_EGRESS_REGIONS = window.CLOUD_PRICING_DATA.providers.aws.egress_internet.regions;
export const BANDWIDTHS_AWS = window.CLOUD_PRICING_DATA.providers.aws.connectivity.direct_connect.bandwidths;
