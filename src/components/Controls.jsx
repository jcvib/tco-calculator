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

  const selectStyle = {
    background: '#1A1D27',
    border: '1px solid #2D3148',
    color: '#E4E6F1',
    borderRadius: '0.5rem',
    padding: '0.5rem 1rem',
    width: '100%',
    fontSize: '0.875rem'
  };

  const inputStyle = {
    ...selectStyle,
    appearance: 'textfield'
  };

  return (
    <div className="rounded-lg p-6 mb-6" style={{ background: '#222533', border: '1px solid #2D3148' }}>
      {/* Controles principaux */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <div>
          <label className="block text-xs uppercase tracking-wider mb-1.5" style={{ color: '#7B809A' }}>
            Pays Orange Business
          </label>
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            style={selectStyle}
          >
            {obCountries.map(country => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider mb-1.5" style={{ color: '#7B809A' }}>
            Cloud Provider
          </label>
          <select
            value={selectedCSP}
            onChange={(e) => setSelectedCSP(e.target.value)}
            style={selectStyle}
          >
            <option value="AWS">AWS</option>
            <option value="Azure">Azure</option>
          </select>
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider mb-1.5" style={{ color: '#7B809A' }}>
            Region {selectedCSP}
          </label>
          <select
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            style={selectStyle}
          >
            {Object.keys(availableRegions).map(region => (
              <option key={region} value={region}>{region}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider mb-1.5" style={{ color: '#7B809A' }}>
            Unite d'affichage
          </label>
          <select
            value={volumeUnit}
            onChange={(e) => setVolumeUnit(e.target.value)}
            style={selectStyle}
          >
            <option value="native">Native (TiB AWS / TB Azure)</option>
            <option value="tib">TiB (binaire)</option>
            <option value="tb">TB (decimal)</option>
          </select>
        </div>
      </div>

      {/* Row 2 : Seuil + Remise OB + Volumes */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">

        {/* Seuil de capacite */}
        <div className="p-4 rounded-lg" style={{ background: '#1A1D27', border: '1px solid #2D3148' }}>
          <label className="block text-xs uppercase tracking-wider mb-2" style={{ color: '#7B809A' }}>
            Seuil de charge
          </label>
          <div className="flex items-center space-x-3">
            <span className="text-xs" style={{ color: '#7B809A' }}>40%</span>
            <input
              type="range"
              min="40"
              max="80"
              value={capacityThreshold}
              onChange={(e) => setCapacityThreshold(parseInt(e.target.value))}
              className="flex-1 h-2 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #ff6600 0%, #ff6600 ${(capacityThreshold-40)*2.5}%, #2D3148 ${(capacityThreshold-40)*2.5}%, #2D3148 100%)`
              }}
            />
            <span className="text-xs" style={{ color: '#7B809A' }}>80%</span>
          </div>
          <p className="mt-2 text-xs" style={{ color: '#7B809A' }}>
            Cellules masquees si charge &ge; {capacityThreshold}%
          </p>
        </div>

        {/* Remise OB : Engagement + Discount supplementaire */}
        <div className="p-4 rounded-lg" style={{ background: 'rgba(21,128,61,0.15)', border: '1px solid rgba(34,197,94,0.3)' }}>
          <label className="block text-xs uppercase tracking-wider mb-3" style={{ color: '#4ade80' }}>
            Remise Orange Business
          </label>

          {/* Engagement */}
          <div className="mb-2">
            <label className="block text-xs mb-1" style={{ color: '#7B809A' }}>Engagement</label>
            <select
              value={obEngagement}
              onChange={(e) => setObEngagement(e.target.value)}
              style={selectStyle}
            >
              {engagementOptions.map(opt => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}{opt.discount > 0 ? ` \u2192 ${opt.discount}%` : ''}
                </option>
              ))}
            </select>
          </div>

          {/* Discount supplementaire */}
          <div className="mb-2">
            <label className="block text-xs mb-1" style={{ color: '#7B809A' }}>Discount supplementaire (%)</label>
            <input
              type="number"
              min="0"
              max="100"
              step="0.5"
              value={obExtraDiscount}
              onChange={(e) => setObExtraDiscount(Math.min(100, Math.max(0, parseFloat(e.target.value) || 0)))}
              style={inputStyle}
              placeholder="0"
            />
          </div>

          {/* Resume remise totale */}
          {obDiscount > 0 && (
            <div className="mt-2 pt-2 text-center" style={{ borderTop: '1px solid rgba(34,197,94,0.3)' }}>
              <span className="text-sm font-bold" style={{ color: '#4ade80' }}>
                Remise totale : {obDiscount.toFixed(1)}%
              </span>
            </div>
          )}
        </div>

        {/* Volumes personnalises */}
        <div className="p-4 rounded-lg" style={{ background: 'rgba(59,130,246,0.12)', border: '1px solid rgba(96,165,250,0.3)' }}>
          <label className="block text-xs uppercase tracking-wider mb-3" style={{ color: '#60a5fa' }}>
            Volumes personnalises
          </label>

          <div className="flex items-end gap-2 mb-3">
            <div className="flex-1">
              <label className="block text-xs mb-1" style={{ color: '#7B809A' }}>Volume (TiB)</label>
              <input
                type="number"
                min="0.1"
                max="1000"
                step="0.1"
                value={newVolume}
                onChange={(e) => setNewVolume(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAddVolume()}
                style={inputStyle}
                placeholder="Ex: 15.5"
              />
            </div>
            <button
              onClick={handleAddVolume}
              className="px-3 py-2 rounded-lg transition-colors text-sm font-medium"
              style={{ background: '#3b82f6', color: 'white' }}
            >
              +
            </button>
          </div>

          {customVolumes.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {customVolumes.map(vol => (
                <div
                  key={vol}
                  className="flex items-center gap-1 px-2 py-0.5 rounded-full text-xs"
                  style={{ background: 'rgba(59,130,246,0.25)', color: '#93c5fd' }}
                >
                  <span className="font-medium">{vol} TiB</span>
                  <button
                    onClick={() => handleRemoveVolume(vol)}
                    className="font-bold ml-1 hover:text-white transition-colors"
                    style={{ color: '#60a5fa' }}
                  >
                    x
                  </button>
                </div>
              ))}
            </div>
          )}

          <p className="mt-2 text-xs" style={{ color: '#7B809A' }}>
            Ajoute des colonnes dans la heatmap
          </p>
        </div>
      </div>
    </div>
  );
}
