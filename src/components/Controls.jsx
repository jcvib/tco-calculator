import { useState } from 'react';
import { NAT_GW_HOURLY_USD, NAT_GW_PER_GB_USD, NAT_GW_MONTHLY_HOURS, IPSEC_CPE_MONTHLY_USD } from '../utils/calculations';
import { useLanguage } from '../i18n/LanguageContext';

export default function Controls({
  selectedCountry,
  setSelectedCountry,
  selectedCSP,
  setSelectedCSP,
  selectedRegion,
  setSelectedRegion,
  volumeUnit,
  setVolumeUnit,
  capacityThreshold,
  setCapacityThreshold,
  obCountries,
  availableRegions,
  obTcvBand,
  setObTcvBand,
  obDuration,
  setObDuration,
  obExtraDiscount,
  setObExtraDiscount,
  obDiscount,
  customVolumes,
  setCustomVolumes,
  tcvBands,
  durations,
  ccMode,
  setCcMode,
  publicArchitecture,
  setPublicArchitecture,
  displayCurrency,
  setDisplayCurrency,
  includeClientCost,
  setIncludeClientCost
}) {
  const { t } = useLanguage();
  const [newVolume, setNewVolume] = useState('');

  const [showClientCostAssumptions, setShowClientCostAssumptions] = useState(false);

  const handleAddVolume = () => {
    const vol = parseFloat(newVolume);
    if (vol && vol > 0 && vol <= 1000) {
      if (!customVolumes.includes(vol)) {
        setCustomVolumes([...customVolumes, vol].sort((a, b) => a - b));
      }
      setNewVolume('');
    }
  };

  const handleRemoveVolume = (vol) => {
    setCustomVolumes(customVolumes.filter(v => v !== vol));
  };

  const selectClass = "w-full px-4 py-2 border border-graphite-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500";
  const selectClassSm = "w-full px-3 py-2 border border-graphite-200 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500";

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-semibold text-graphite-900 mb-4">
        {t('controls.heading')}
      </h2>

      {/* Contrôles principaux */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-graphite-700 mb-2">
            {t('controls.country')}
          </label>
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className={selectClass}
          >
            {obCountries.map(country => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-graphite-700 mb-2">
            {t('controls.cloudProvider')}
          </label>
          <select
            value={selectedCSP}
            onChange={(e) => setSelectedCSP(e.target.value)}
            className={selectClass}
          >
            <option value="AWS">AWS</option>
            <option value="Azure">Azure</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-graphite-700 mb-2">
            {t('controls.region', { csp: selectedCSP })}
          </label>
          <select
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className={selectClass}
          >
            {Object.keys(availableRegions).map(region => (
              <option key={region} value={region}>{region}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-graphite-700 mb-2">
            {t('controls.displayUnit')}
          </label>
          <select
            value={volumeUnit}
            onChange={(e) => setVolumeUnit(e.target.value)}
            className={selectClass}
          >
            <option value="native">{t('controls.unitNative')}</option>
            <option value="tib">{t('controls.unitTib')}</option>
            <option value="tb">{t('controls.unitTb')}</option>
          </select>
        </div>
      </div>

      {/* Row 2 : Seuil + Remise OB + Volumes */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">

        {/* Seuil de capacité */}
        <div className="p-4 bg-graphite-50 border border-graphite-100 rounded-lg">
          <label className="block text-sm font-medium text-graphite-700 mb-2">
            {t('controls.capacityThreshold')}
          </label>
          <div className="flex items-center space-x-3">
            <span className="text-xs text-graphite-400">40%</span>
            <input
              type="range"
              min="40"
              max="80"
              value={capacityThreshold}
              onChange={(e) => setCapacityThreshold(parseInt(e.target.value))}
              className="flex-1 h-2 bg-graphite-200 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #FF7900 0%, #FF7900 ${(capacityThreshold-40)*2.5}%, #DBDDE2 ${(capacityThreshold-40)*2.5}%, #DBDDE2 100%)`
              }}
            />
            <span className="text-xs text-graphite-400">80%</span>
          </div>
          <p className="mt-2 text-xs text-graphite-400">
            {t('controls.capacityThresholdCaption', { threshold: capacityThreshold })}
          </p>
        </div>

        {/* Remise OB : grille TCV × durée (modèle EVP) */}
        <div className="p-4 bg-white border border-graphite-200 rounded-lg">
          <label className="block text-sm font-medium text-graphite-800 mb-3">
            {t('controls.discount')}
          </label>

          {/* TCV */}
          <div className="mb-2">
            <label className="block text-xs text-graphite-500 mb-1">{t('controls.tcvLabel')}</label>
            <select
              value={obTcvBand}
              onChange={(e) => setObTcvBand(e.target.value)}
              className={selectClassSm}
            >
              {tcvBands.map(band => (
                <option key={band.key} value={band.key}>{t(`controls.tcvBands.${band.key}`)}</option>
              ))}
            </select>
          </div>

          {/* Durée */}
          <div className="mb-2">
            <label className="block text-xs text-graphite-500 mb-1">{t('controls.durationLabel')}</label>
            <select
              value={obDuration}
              onChange={(e) => setObDuration(parseInt(e.target.value))}
              className={selectClassSm}
            >
              {durations.map(d => (
                <option key={d} value={d}>{t('controls.durationOption', { n: d })}</option>
              ))}
            </select>
          </div>

          {/* Discount supplémentaire (dérogation) */}
          <div className="mb-2">
            <label className="block text-xs text-graphite-500 mb-1">{t('controls.extraDiscountLabel')}</label>
            <input
              type="number"
              min="0"
              max="100"
              step="0.5"
              value={obExtraDiscount}
              onChange={(e) => setObExtraDiscount(Math.min(100, Math.max(0, parseFloat(e.target.value) || 0)))}
              className={selectClassSm}
              placeholder="0"
            />
          </div>

          {/* Résumé remise totale */}
          {obDiscount > 0 && (
            <div className="mt-2 pt-2 border-t border-graphite-100 text-center">
              <span className="text-sm font-bold text-malachite-600">
                {t('controls.totalDiscount', { value: obDiscount.toFixed(1) })}
              </span>
            </div>
          )}
        </div>

        {/* Volumes personnalisés */}
        <div className="p-4 bg-white border border-graphite-200 rounded-lg">
          <label className="block text-sm font-medium text-graphite-800 mb-3">
            {t('controls.customVolumes')}
          </label>

          <div className="flex items-end gap-2 mb-3">
            <div className="flex-1">
              <label className="block text-xs text-graphite-500 mb-1">{t('controls.volumeLabel')}</label>
              <input
                type="number"
                min="0.1"
                max="1000"
                step="0.1"
                value={newVolume}
                onChange={(e) => setNewVolume(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAddVolume()}
                className={selectClassSm}
                placeholder="Ex: 15.5"
              />
            </div>
            <button
              onClick={handleAddVolume}
              className="px-3 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium"
            >
              +
            </button>
          </div>

          {customVolumes.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {customVolumes.map(vol => (
                <div
                  key={vol}
                  className="flex items-center gap-1 px-2 py-0.5 bg-orange-50 text-orange-700 rounded-full text-xs"
                >
                  <span className="font-medium">{vol} TiB</span>
                  <button
                    onClick={() => handleRemoveVolume(vol)}
                    className="text-orange-400 hover:text-orange-700 font-bold ml-1"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}

          <p className="mt-2 text-xs text-graphite-400">
            {t('controls.volumeCaption')}
          </p>
        </div>
      </div>

      {/* Row 3 : Mode Cloud Connect + Devise + Coûts côté client */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">

        {/* Mode Cloud Connect */}
        <div className="p-4 bg-white border border-graphite-200 border-l-4 border-l-orange-500 rounded-lg">
          <label className="block text-sm font-medium text-graphite-800 mb-3">
            {t('controls.ccMode')}
          </label>
          <div className="flex rounded-lg overflow-hidden border border-graphite-200 mb-2">
            <button
              onClick={() => setCcMode('private')}
              className={`flex-1 px-3 py-2 text-sm font-medium transition-colors ${
                ccMode === 'private' ? 'bg-orange-500 text-white' : 'bg-white text-graphite-600 hover:bg-graphite-50'
              }`}
            >
              {t('controls.ccModePrivate')}
            </button>
            <button
              onClick={() => setCcMode('public')}
              className={`flex-1 px-3 py-2 text-sm font-medium transition-colors ${
                ccMode === 'public' ? 'bg-orange-500 text-white' : 'bg-white text-graphite-600 hover:bg-graphite-50'
              }`}
            >
              {t('controls.ccModePublic')}
            </button>
          </div>

          {ccMode === 'public' && (
            <div>
              <label className="block text-xs text-graphite-500 mb-1">{t('controls.architectureLabel')}</label>
              <select
                value={publicArchitecture}
                onChange={(e) => setPublicArchitecture(e.target.value)}
                className={selectClassSm}
              >
                <option value="Standard">{t('controls.architectureStandard')}</option>
                <option value="High Availability">{t('controls.architectureHa')}</option>
              </select>
            </div>
          )}

          <p className="mt-2 text-xs text-graphite-400">
            {ccMode === 'public' ? t('controls.ccModeCaptionPublic') : t('controls.ccModeCaptionPrivate')}
          </p>
        </div>

        {/* Devise */}
        <div className="p-4 bg-graphite-50 border border-graphite-100 rounded-lg">
          <label className="block text-sm font-medium text-graphite-700 mb-3">
            {t('controls.currency')}
          </label>
          <div className="flex rounded-lg overflow-hidden border border-graphite-300">
            <button
              onClick={() => setDisplayCurrency('EUR')}
              className={`flex-1 px-3 py-2 text-sm font-medium transition-colors ${
                displayCurrency === 'EUR' ? 'bg-graphite-800 text-white' : 'bg-white text-graphite-600 hover:bg-graphite-100'
              }`}
            >
              € EUR
            </button>
            <button
              onClick={() => setDisplayCurrency('USD')}
              className={`flex-1 px-3 py-2 text-sm font-medium transition-colors ${
                displayCurrency === 'USD' ? 'bg-graphite-800 text-white' : 'bg-white text-graphite-600 hover:bg-graphite-100'
              }`}
            >
              $ USD
            </button>
          </div>
          <p className="mt-2 text-xs text-graphite-400">
            {t('controls.currencyCaption')}
          </p>
        </div>

        {/* Coûts côté client */}
        <div className="p-4 bg-graphite-50 border border-graphite-100 rounded-lg">
          <div className="flex items-start justify-between gap-2">
            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={includeClientCost}
                onChange={(e) => setIncludeClientCost(e.target.checked)}
                className="mt-1 accent-orange-500"
              />
              <span>
                <span className="block text-sm font-medium text-graphite-700">{t('controls.clientCost')}</span>
                <span className="block text-xs text-graphite-400 mt-1">
                  {t('controls.clientCostCaption')}
                </span>
              </span>
            </label>
            <button
              type="button"
              onClick={() => setShowClientCostAssumptions(v => !v)}
              className="text-graphite-400 hover:text-graphite-600 text-sm shrink-0"
              title={t('controls.clientCostAssumptionsTitle')}
            >
              ℹ️
            </button>
          </div>

          {showClientCostAssumptions && (
            <div className="mt-3 pt-3 border-t border-graphite-200 text-xs text-graphite-500 space-y-1.5">
              <div>
                <span className="font-medium text-graphite-700">{t('controls.natGwAssumption')}</span> {t('controls.natGwAssumptionContext')}
                {' '}{t('controls.natGwAssumptionFormula', { hourly: NAT_GW_HOURLY_USD, hours: NAT_GW_MONTHLY_HOURS, perGb: NAT_GW_PER_GB_USD })}
                <span className="block text-graphite-400">{t('controls.natGwAssumptionNote')}</span>
              </div>
              <div>
                <span className="font-medium text-graphite-700">{t('controls.ipsecCpeAssumption')}</span> {t('controls.ipsecCpeAssumptionContext')}
                {' '}{t('controls.ipsecCpeAssumptionFormula', { monthly: IPSEC_CPE_MONTHLY_USD })}
                <span className="block text-graphite-400">{t('controls.ipsecCpeAssumptionNote')}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
