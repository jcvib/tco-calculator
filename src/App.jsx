import { useState } from 'react';
import Header from './components/Header';
import Controls from './components/Controls';
import Heatmap from './components/Heatmap';
import CellDetails from './components/CellDetails';

// Import des données
import { AWS_PORT_COSTS, AWS_PORT_COSTS_JAPAN, AWS_PRIVATE_EGRESS, AWS_EGRESS_REGIONS, BANDWIDTHS_AWS } from './data/awsPricing';
import { AZURE_PORT_COSTS, AZURE_PRIVATE_EGRESS, AZURE_REGIONS_TO_ZONES, AZURE_EGRESS_REGIONS, AZURE_ERGW_CONFIG, BANDWIDTHS_AZURE } from './data/azurePricing';
import { OB_PRICING, OB_COUNTRIES } from './data/obPricing';

export default function App() {
  const [selectedCountry, setSelectedCountry] = useState('France');
  const [selectedCSP, setSelectedCSP] = useState('AWS');
  const [selectedRegion, setSelectedRegion] = useState('eu-west-3');
  const [selectedCell, setSelectedCell] = useState(null);
  const [volumeUnit, setVolumeUnit] = useState('native');
  const [capacityThreshold, setCapacityThreshold] = useState(60);

  const availableBandwidths = selectedCSP === 'AWS' ? BANDWIDTHS_AWS : BANDWIDTHS_AZURE;
  const availableRegions = selectedCSP === 'AWS' ? AWS_EGRESS_REGIONS : AZURE_EGRESS_REGIONS;

  // Reset selectedCell when changing parameters
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
          obCountries={OB_COUNTRIES}
          availableRegions={availableRegions}
        />

        <Heatmap
          selectedCountry={selectedCountry}
          selectedCSP={selectedCSP}
          selectedRegion={selectedRegion}
          volumeUnit={volumeUnit}
          capacityThreshold={capacityThreshold}
          setSelectedCell={setSelectedCell}
          availableBandwidths={availableBandwidths}
          obPricing={OB_PRICING}
          awsPortCosts={AWS_PORT_COSTS}
          awsPortCostsJapan={AWS_PORT_COSTS_JAPAN}
          awsPrivateEgress={AWS_PRIVATE_EGRESS}
          awsEgressRegions={AWS_EGRESS_REGIONS}
          azurePortCosts={AZURE_PORT_COSTS}
          azurePrivateEgress={AZURE_PRIVATE_EGRESS}
          azureRegionsToZones={AZURE_REGIONS_TO_ZONES}
          azureEgressRegions={AZURE_EGRESS_REGIONS}
          azureErGwConfig={AZURE_ERGW_CONFIG}
        />

        <CellDetails
          selectedCell={selectedCell}
          setSelectedCell={setSelectedCell}
          selectedCSP={selectedCSP}
          volumeUnit={volumeUnit}
          capacityThreshold={capacityThreshold}
        />

        {/* Footer */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>© 2026 Orange Business - v6.0</p>
          <p className="mt-1">
            {OB_COUNTRIES.length} pays | {availableBandwidths.length} bandes passantes
          </p>
        </div>
      </div>
    </div>
  );
}
