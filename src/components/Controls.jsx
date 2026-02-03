import { useState } from 'react';

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
  obEngagement,
  setObEngagement,
  obExtraDiscount,
  setObExtraDiscount,
  obDiscount,
  customVolumes,
  setCustomVolumes,
  engagementOptions
}) {
  const [newVolume, setNewVolume] = useState('');

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

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      {/* Contrôles principaux */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            🌍 Pays Orange Business
          </label>
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          >
            {obCountries.map(country => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            ☁️ Cloud Provider
          </label>
          <select
            value={selectedCSP}
            onChange={(e) => setSelectedCSP(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="AWS">AWS</option>
            <option value="Azure">Azure</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            📍 Région {selectedCSP}
          </label>
          <select
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {Object.keys(availableRegions).map(region => (
              <option key={region} value={region}>{region}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            📏 Unité d'affichage
          </label>
          <select
            value={volumeUnit}
            onChange={(e) => setVolumeUnit(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
          >
            <option value="native">Native (TiB AWS / TB Azure)</option>
            <option value="tib">TiB (binaire)</option>
            <option value="tb">TB (décimal)</option>
          </select>
        </div>
      </div>

      {/* Row 2 : Seuil + Remise OB + Volumes */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">

        {/* Seuil de capacité */}
        <div className="p-4 bg-gray-50 rounded-lg">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            ⚡ Seuil de charge
          </label>
          <div className="flex items-center space-x-3">
            <span className="text-xs text-gray-500">40%</span>
            <input
              type="range"
              min="40"
              max="80"
              value={capacityThreshold}
              onChange={(e) => setCapacityThreshold(parseInt(e.target.value))}
              className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #ff6600 0%, #ff6600 ${(capacityThreshold-40)*2.5}%, #e5e7eb ${(capacityThreshold-40)*2.5}%, #e5e7eb 100%)`
              }}
            />
            <span className="text-xs text-gray-500">80%</span>
          </div>
          <p className="mt-2 text-xs text-gray-500">
            Cellules masquées si charge ≥ {capacityThreshold}%
          </p>
        </div>

        {/* Remise OB : Engagement + Discount supplémentaire */}
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
          <label className="block text-sm font-semibold text-green-800 mb-3">
            💰 Remise Orange Business
          </label>

          {/* Engagement */}
          <div className="mb-2">
            <label className="block text-xs text-gray-600 mb-1">Engagement</label>
            <select
              value={obEngagement}
              onChange={(e) => setObEngagement(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
            >
              {engagementOptions.map(opt => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}{opt.discount > 0 ? ` → ${opt.discount}%` : ''}
                </option>
              ))}
            </select>
          </div>

          {/* Discount supplémentaire */}
          <div className="mb-2">
            <label className="block text-xs text-gray-600 mb-1">Discount supplémentaire (%)</label>
            <input
              type="number"
              min="0"
              max="100"
              step="0.5"
              value={obExtraDiscount}
              onChange={(e) => setObExtraDiscount(Math.min(100, Math.max(0, parseFloat(e.target.value) || 0)))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
              placeholder="0"
            />
          </div>

          {/* Résumé remise totale */}
          {obDiscount > 0 && (
            <div className="mt-2 pt-2 border-t border-green-200 text-center">
              <span className="text-sm font-bold text-green-700">
                Remise totale : {obDiscount.toFixed(1)}%
              </span>
            </div>
          )}
        </div>

        {/* Volumes personnalisés */}
        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <label className="block text-sm font-semibold text-blue-800 mb-3">
            📊 Volumes personnalisés
          </label>

          <div className="flex items-end gap-2 mb-3">
            <div className="flex-1">
              <label className="block text-xs text-gray-600 mb-1">Volume (TiB)</label>
              <input
                type="number"
                min="0.1"
                max="1000"
                step="0.1"
                value={newVolume}
                onChange={(e) => setNewVolume(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAddVolume()}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Ex: 15.5"
              />
            </div>
            <button
              onClick={handleAddVolume}
              className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              ➕
            </button>
          </div>

          {customVolumes.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {customVolumes.map(vol => (
                <div
                  key={vol}
                  className="flex items-center gap-1 px-2 py-0.5 bg-blue-100 text-blue-800 rounded-full text-xs"
                >
                  <span className="font-medium">{vol} TiB</span>
                  <button
                    onClick={() => handleRemoveVolume(vol)}
                    className="text-blue-500 hover:text-blue-700 font-bold ml-1"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}

          <p className="mt-2 text-xs text-gray-500">
            Ajoute des colonnes dans la heatmap
          </p>
        </div>
      </div>
    </div>
  );
}
