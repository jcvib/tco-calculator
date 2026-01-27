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
  availableRegions
}) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        {/* Pays OB */}
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

        {/* CSP */}
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

        {/* Région */}
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

        {/* Unité */}
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

      {/* Seuil de capacité */}
      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          ⚡ Seuil de charge acceptable
        </label>
        <div className="flex items-center space-x-4">
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
          ℹ️ Les cellules avec une charge ≥ {capacityThreshold}% sont masquées (dépassement de capacité)
        </p>
      </div>
    </div>
  );
}
