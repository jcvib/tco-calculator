import { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import Controls from './components/Controls';
import Heatmap from './components/Heatmap';
import CellDetailsFlat from './components/CellDetails/indexFlat';
import ViewSelector from './components/ViewSelector';
import ChallengerView from './components/Challenger/ChallengerView';
import { TCV_BANDS, DURATIONS, getDiscountPercent } from './data/discountGrid';
import { OB_PRICING_PRIVATE, OB_PRICING_PUBLIC, OB_COUNTRIES, OB_PRICING_META } from './data/ob_pricing_jul2026.js';
import { MEGAPORT_PRICING } from './data/megaport_pricing_jul2026.js';
import { EQUINIX_PRICING } from './data/equinix_pricing_jul2026.js';
import { CHALLENGER_BANDWIDTHS } from './data/geoMappings';
import { setDisplayCurrency, sortBandwidths, parseBandwidth } from './utils/formatters';
import { useLanguage } from './i18n/LanguageContext';
import { readUrlState, useSyncUrlState } from './hooks/useUrlState';

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

export default function App() {
  const { t } = useLanguage();

  // Configuration initiale reprise de l'URL (lien partagé par un commercial) — lue une
  // seule fois au montage, sert de valeur par défaut à chaque useState ci-dessous.
  const [urlState] = useState(() => readUrlState());

  const [viewMode, setViewMode] = useState(urlState.viewMode ?? 'heatmap');
  // Contexte initial transmis au Mode Challenger lors du passage depuis la Heatmap
  // (bouton "Comparer aussi vs Megaport/Equinix" dans le détail de cellule)
  const [challengerInitialContext, setChallengerInitialContext] = useState(null);
  const [pricingData, setPricingData] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(urlState.selectedCountry ?? 'France');
  const [selectedCSP, setSelectedCSP] = useState(urlState.selectedCSP ?? 'AWS');
  const [selectedRegion, setSelectedRegion] = useState(
    urlState.selectedRegion ?? (urlState.selectedCSP === 'Azure' ? 'northeurope' : 'eu-west-3')
  );
  const [selectedCell, setSelectedCell] = useState(null);
  const [volumeUnit, setVolumeUnit] = useState(urlState.volumeUnit ?? 'native');
  const [capacityThreshold, setCapacityThreshold] = useState(60);

  // Remise OB : grille TCV × durée (modèle EVP) + discount supplémentaire négocié
  const [obTcvBand, setObTcvBand] = useState(urlState.obTcvBand ?? TCV_BANDS[0].key);
  const [obDuration, setObDuration] = useState(urlState.obDuration ?? 12);
  const [obExtraDiscount, setObExtraDiscount] = useState(urlState.obExtraDiscount ?? 0);  // % libre, dérogation hors grille

  // Mode Cloud Connect : Private (DX/ExpressRoute) ou Public/IPsec (Evolution Platform)
  const [ccMode, setCcMode] = useState(urlState.ccMode ?? 'private');            // 'private' | 'public'
  const [publicArchitecture, setPublicArchitecture] = useState(urlState.publicArchitecture ?? 'High Availability'); // 'Standard' | 'High Availability'

  // Devise d'affichage
  const [displayCurrencyState, setDisplayCurrencyState] = useState(urlState.displayCurrency ?? 'EUR'); // 'EUR' | 'USD'

  // Coûts côté client (NAT GW + boîtier IPsec) — estimation optionnelle
  const [includeClientCost, setIncludeClientCost] = useState(urlState.includeClientCost ?? false);

  // Volumes personnalisés
  const [customVolumes, setCustomVolumes] = useState(urlState.customVolumes ?? []);

  // Calculer obDiscount total = grille TCV/durée + dérogation
  const obDiscount = useMemo(() => {
    return Math.min(100, getDiscountPercent(obTcvBand, obDuration) + obExtraDiscount);
  }, [obTcvBand, obDuration, obExtraDiscount]);

  // Propager le choix de devise vers le module de formatage (lu par formatCurrency partout)
  useEffect(() => {
    setDisplayCurrency(displayCurrencyState);
  }, [displayCurrencyState]);

  // Charger et transformer les données
  useEffect(() => {
    const loadPricingData = () => {
      if (window.CLOUD_PRICING_DATA && window.CLOUD_PRICING_DATA.providers) {
        try {
          const transformed = transformPricingData(window.CLOUD_PRICING_DATA);

          setPricingData({
            ...transformed,
            OB_PRICING_PRIVATE,
            OB_PRICING_PUBLIC,
            OB_COUNTRIES,
            CLOUD_GENERATED_AT: window.CLOUD_PRICING_DATA.metadata?.generated_at ?? null
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

  // Valide le pays/la région repris de l'URL une fois les données chargées (au cas où le
  // lien partagé référence un pays inconnu ou une région qui n'existe pas pour ce CSP).
  useEffect(() => {
    if (!pricingData) return;
    if (!pricingData.OB_COUNTRIES.includes(selectedCountry)) {
      setSelectedCountry('France');
    }
    const regions = selectedCSP === 'AWS' ? pricingData.AWS_EGRESS_REGIONS : pricingData.AZURE_EGRESS_REGIONS;
    if (!regions[selectedRegion]) {
      setSelectedRegion(selectedCSP === 'AWS' ? 'eu-west-3' : 'northeurope');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pricingData, selectedCSP]);

  // Configuration courante → URL, pour permettre le partage d'un lien direct.
  useSyncUrlState({
    viewMode, selectedCountry, selectedCSP, selectedRegion, ccMode, publicArchitecture,
    displayCurrency: displayCurrencyState, obTcvBand, obDuration, obExtraDiscount,
    volumeUnit, includeClientCost, customVolumes,
    selectedCellBandwidth: selectedCell?.bandwidth,
    selectedCellVolumeTiB: selectedCell?.volumeTiB,
  });

  // Bandes passantes disponibles : pilotées par le port CSP (DX/ExpressRoute) en mode Private,
  // ou directement par le catalogue OB Public/IPsec en mode Public (pas de port CSP requis,
  // ce qui permet d'exposer les bandes passantes basses 5-40M pertinentes sur petits volumes).
  // Calculé avant le early-return "chargement" ci-dessous pour respecter les Rules of Hooks.
  const availableBandwidths = useMemo(() => {
    if (!pricingData) return [];
    if (ccMode === 'public') {
      const bws = Object.keys(pricingData.OB_PRICING_PUBLIC?.[selectedCountry]?.[publicArchitecture] || {});
      return sortBandwidths(bws);
    }
    const rawBandwidths = selectedCSP === 'AWS' ? pricingData.BANDWIDTHS_AWS : pricingData.BANDWIDTHS_AZURE;
    return selectedCSP === 'AWS'
      ? rawBandwidths.filter(bw => !['25G', '50G', '100G', '400G'].includes(bw))
      : rawBandwidths;
  }, [ccMode, publicArchitecture, selectedCountry, selectedCSP, pricingData]);

  if (!pricingData) {
    return (
      <div className="min-h-screen bg-graphite-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">⏳</div>
          <div className="text-xl text-graphite-700">{t('app.loadingTitle')}</div>
          <div className="text-sm text-graphite-500 mt-2">{t('app.loadingSubtitle')}</div>
        </div>
      </div>
    );
  }

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

  // Passerelle Heatmap → Mode Challenger : réutilise le pays, la bande passante (arrondie
  // à la plus proche disponible côté Challenger) et le CSP déjà sélectionnés.
  const handleCompareVsDiy = ({ country, bandwidth }) => {
    const bandwidthMbps = CHALLENGER_BANDWIDTHS.find(b => b >= parseBandwidth(bandwidth))
      ?? CHALLENGER_BANDWIDTHS[CHALLENGER_BANDWIDTHS.length - 1];
    setChallengerInitialContext({ country, bandwidthMbps, csp: selectedCSP.toLowerCase() });
    setSelectedCell(null);
    setViewMode('challenger');
  };

  const handleThresholdChange = (threshold) => {
    setCapacityThreshold(threshold);
    setSelectedCell(null);
  };

  return (
    <div className="min-h-screen bg-graphite-50 p-8">
      <div className="max-w-7xl mx-auto">
        <Header
          selectedCSP={selectedCSP}
          viewMode={viewMode}
          freshness={{
            ob: OB_PRICING_META.generatedAt,
            cloud: pricingData?.CLOUD_GENERATED_AT,
            megaport: MEGAPORT_PRICING.metadata?.generated_at,
            equinix: EQUINIX_PRICING.timestamp
          }}
        />

        <ViewSelector viewMode={viewMode} setViewMode={setViewMode} />

        {viewMode === 'challenger' && <ChallengerView initialContext={challengerInitialContext} />}

        {viewMode === 'heatmap' && <>
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
          obTcvBand={obTcvBand}
          setObTcvBand={setObTcvBand}
          obDuration={obDuration}
          setObDuration={setObDuration}
          obExtraDiscount={obExtraDiscount}
          setObExtraDiscount={setObExtraDiscount}
          obDiscount={obDiscount}
          customVolumes={customVolumes}
          setCustomVolumes={setCustomVolumes}
          tcvBands={TCV_BANDS}
          durations={DURATIONS}
          ccMode={ccMode}
          setCcMode={setCcMode}
          publicArchitecture={publicArchitecture}
          setPublicArchitecture={setPublicArchitecture}
          displayCurrency={displayCurrencyState}
          setDisplayCurrency={setDisplayCurrencyState}
          includeClientCost={includeClientCost}
          setIncludeClientCost={setIncludeClientCost}
        />

        <Heatmap
          selectedCountry={selectedCountry}
          selectedCSP={selectedCSP}
          selectedRegion={selectedRegion}
          volumeUnit={volumeUnit}
          capacityThreshold={capacityThreshold}
          setSelectedCell={setSelectedCell}
          availableBandwidths={availableBandwidths}
          obPricingPrivate={pricingData.OB_PRICING_PRIVATE}
          obPricingPublic={pricingData.OB_PRICING_PUBLIC}
          ccMode={ccMode}
          publicArchitecture={publicArchitecture}
          includeClientCost={includeClientCost}
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
          initialCellSelection={urlState.initialCellSelection}
        />

        <CellDetailsFlat
          selectedCell={selectedCell}
          setSelectedCell={setSelectedCell}
          selectedCSP={selectedCSP}
          volumeUnit={volumeUnit}
          capacityThreshold={capacityThreshold}
          ccMode={ccMode}
          onCompareVsDiy={handleCompareVsDiy}
        />

        <div className="mt-8 text-center text-graphite-400 text-sm">
          <p>{t('app.footerCopyright')}</p>
          <p className="mt-1">
            {t('app.footerStats', { countries: pricingData.OB_COUNTRIES.length, bandwidths: availableBandwidths.length })}
            {obDiscount > 0 && <span className="ml-2 text-malachite-600 font-medium">{t('app.footerDiscount', { discount: obDiscount })}</span>}
          </p>
        </div>
        </>}
      </div>
    </div>
  );
}
