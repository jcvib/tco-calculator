import { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import Controls from './components/Controls';
import Heatmap from './components/Heatmap';
import CellDetailsFlat from './components/CellDetails/indexFlat';

// Fonction pour transformer les données au format attendu
function transformPricingData(cloudData) {
  const aws = cloudData.providers.aws;
  const azure = cloudData.providers.azure;
  
  const awsPortCosts = {};
  const awsPortCostsJapan = {};
  
  aws.connectivity.direct_connect.port_costs.pricing.forEach(item => {
    awsPortCosts[item.bandwidth] = item.cost_per_hour_default;
    if (item.regional_variations && item.regional_variations['ap-northeast-1']) {
      awsPortCostsJapan[item.bandwidth] = item.regional_variations['ap-northeast-1'];
    } else {
      awsPortCostsJapan[item.bandwidth] = item.cost_per_hour_default;
    }
  });
  
  const awsPrivateEgress = aws.connectivity.direct_connect.private_egress.by_region;
  
  const azurePortCosts = {};
  azure.connectivity.expressroute.port_costs.tiers.standard.metered.forEach(item => {
    azurePortCosts[item.bandwidth] = item.costs_by_zone;
  });
  
  const azurePrivateEgress = azure.connectivity.expressroute.private_egress.by_zone;
  
  const azureRegionsToZones = {};
  const azureEgressRegions = azure.egress_internet.peering_modes.internet.regions;
  
  Object.keys(azureEgressRegions).forEach(regionCode => {
    const region = azureEgressRegions[regionCode];
    azureRegionsToZones[regionCode] = { 
      zone: region.zone,
      region_name: region.region_name 
    };
  });
  
  const awsEgressRegions = aws.egress_internet.regions;
  
  return {
    AWS_PORT_COSTS: awsPortCosts,
    AWS_PORT_COSTS_JAPAN: awsPortCostsJapan,
    AWS_PRIVATE_EGRESS: awsPrivateEgress,
    AWS_EGRESS_REGIONS: awsEgressRegions,
    BANDWIDTHS_AWS: aws.connectivity.direct_connect.available_bandwidths,
    
    AZURE_PORT_COSTS: azurePortCosts,
    AZURE_PRIVATE_EGRESS: azurePrivateEgress,
    AZURE_REGIONS_TO_ZONES: azureRegionsToZones,
    AZURE_EGRESS_REGIONS: azureEgressRegions,
    AZURE_ERGW_CONFIG: azure.connectivity.expressroute.gateway,
    BANDWIDTHS_AZURE: azure.connectivity.expressroute.available_bandwidths
  };
}

// Engagement OB → % de remise
const ENGAGEMENT_OPTIONS = [
  { value: '', label: 'Aucun engagement', discount: 0 },
  { value: '12', label: '12 mois', discount: 10 },
  { value: '24', label: '24 mois', discount: 15 },
  { value: '36', label: '36 mois', discount: 20 },
];

export default function App() {
  const [pricingData, setPricingData] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState('France');
  const [selectedCSP, setSelectedCSP] = useState('AWS');
  const [selectedRegion, setSelectedRegion] = useState('eu-west-3');
  const [selectedCell, setSelectedCell] = useState(null);
  const [volumeUnit, setVolumeUnit] = useState('native');
  const [capacityThreshold, setCapacityThreshold] = useState(60);
  
  // Remise OB : engagement + discount supplémentaire
  const [obEngagement, setObEngagement] = useState('');       // '', '12', '24', '36'
  const [obExtraDiscount, setObExtraDiscount] = useState(0);  // % libre

  // Volumes personnalisés
  const [customVolumes, setCustomVolumes] = useState([]);

  // Calculer obDiscount total = engagement + extra
  const obDiscount = useMemo(() => {
    const engagementDiscount = ENGAGEMENT_OPTIONS.find(o => o.value === obEngagement)?.discount || 0;
    return Math.min(100, engagementDiscount + obExtraDiscount);
  }, [obEngagement, obExtraDiscount]);

  // Charger et transformer les données
  useEffect(() => {
    const loadPricingData = () => {
      if (window.CLOUD_PRICING_DATA && window.CLOUD_PRICING_DATA.providers && window.OB_PRICING) {
        try {
          const transformed = transformPricingData(window.CLOUD_PRICING_DATA);
          
          setPricingData({
            ...transformed,
            OB_PRICING: window.OB_PRICING,
            OB_COUNTRIES: window.OB_COUNTRIES || Object.keys(window.OB_PRICING)
          });
          
          console.log('✅ Données chargées et transformées avec succès');
        } catch (error) {
          console.error('❌ Erreur lors de la transformation des données:', error);
          setTimeout(loadPricingData, 100);
        }
      } else {
        setTimeout(loadPricingData, 100);
      }
    };

    loadPricingData();
  }, []);

  if (!pricingData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">⏳</div>
          <div className="text-xl text-gray-700">Chargement des données de pricing...</div>
          <div className="text-sm text-gray-500 mt-2">Transformation en cours...</div>
        </div>
      </div>
    );
  }

  // Filtrer bandes passantes AWS (max 10G chez OB)
  const rawBandwidths = selectedCSP === 'AWS' ? pricingData.BANDWIDTHS_AWS : pricingData.BANDWIDTHS_AZURE;
  const availableBandwidths = selectedCSP === 'AWS' 
    ? rawBandwidths.filter(bw => !['25G', '50G', '100G', '400G'].includes(bw))
    : rawBandwidths;
  
  const availableRegions = selectedCSP === 'AWS' ? pricingData.AWS_EGRESS_REGIONS : pricingData.AZURE_EGRESS_REGIONS;

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    setSelectedCell(null);
  };

  const handleCSPChange = (csp) => {
    setSelectedCSP(csp);
    setSelectedRegion(csp === 'AWS' ? 'eu-west-3' : 'northeurope');
    setSelectedCell(null);
  };

  const handleRegionChange = (region) => {
    setSelectedRegion(region);
    setSelectedCell(null);
  };

  const handleThresholdChange = (threshold) => {
    setCapacityThreshold(threshold);
    setSelectedCell(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <Header selectedCSP={selectedCSP} />

        <Controls
          selectedCountry={selectedCountry}
          setSelectedCountry={handleCountryChange}
          selectedCSP={selectedCSP}
          setSelectedCSP={handleCSPChange}
          selectedRegion={selectedRegion}
          setSelectedRegion={handleRegionChange}
          volumeUnit={volumeUnit}
          setVolumeUnit={setVolumeUnit}
          capacityThreshold={capacityThreshold}
          setCapacityThreshold={handleThresholdChange}
          obCountries={pricingData.OB_COUNTRIES}
          availableRegions={availableRegions}
          obEngagement={obEngagement}
          setObEngagement={setObEngagement}
          obExtraDiscount={obExtraDiscount}
          setObExtraDiscount={setObExtraDiscount}
          obDiscount={obDiscount}
          customVolumes={customVolumes}
          setCustomVolumes={setCustomVolumes}
          engagementOptions={ENGAGEMENT_OPTIONS}
        />

        <Heatmap
          selectedCountry={selectedCountry}
          selectedCSP={selectedCSP}
          selectedRegion={selectedRegion}
          volumeUnit={volumeUnit}
          capacityThreshold={capacityThreshold}
          setSelectedCell={setSelectedCell}
          availableBandwidths={availableBandwidths}
          obPricing={pricingData.OB_PRICING}
          awsPortCosts={pricingData.AWS_PORT_COSTS}
          awsPortCostsJapan={pricingData.AWS_PORT_COSTS_JAPAN}
          awsPrivateEgress={pricingData.AWS_PRIVATE_EGRESS}
          awsEgressRegions={pricingData.AWS_EGRESS_REGIONS}
          azurePortCosts={pricingData.AZURE_PORT_COSTS}
          azurePrivateEgress={pricingData.AZURE_PRIVATE_EGRESS}
          azureRegionsToZones={pricingData.AZURE_REGIONS_TO_ZONES}
          azureEgressRegions={pricingData.AZURE_EGRESS_REGIONS}
          azureErGwConfig={pricingData.AZURE_ERGW_CONFIG}
          obDiscount={obDiscount}
          customVolumes={customVolumes}
          setCustomVolumes={setCustomVolumes}
        />

        <CellDetailsFlat
          selectedCell={selectedCell}
          setSelectedCell={setSelectedCell}
          selectedCSP={selectedCSP}
          volumeUnit={volumeUnit}
          capacityThreshold={capacityThreshold}
        />

        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>© 2026 Orange Business - v6.1</p>
          <p className="mt-1">
            {pricingData.OB_COUNTRIES.length} pays | {availableBandwidths.length} bandes passantes
            {obDiscount > 0 && <span className="ml-2 text-green-600 font-medium">| Remise OB {obDiscount}%</span>}
          </p>
        </div>
      </div>
    </div>
  );
}
