export default function ViewSelector({ viewMode, setViewMode }) {
  return (
    <div className="flex items-center gap-2 mb-6">
      <button
        onClick={() => setViewMode('tco')}
        className={`px-5 py-2.5 rounded-lg font-semibold text-sm transition-all ${
          viewMode === 'tco'
            ? 'bg-orange-500 text-white shadow-md'
            : 'text-gray-400 border border-gray-600 hover:border-orange-400 hover:text-orange-400'
        }`}
        style={viewMode !== 'tco' ? { background: 'transparent' } : {}}
      >
        TCO vs CSP
      </button>
      <button
        onClick={() => setViewMode('megaport')}
        className={`px-5 py-2.5 rounded-lg font-semibold text-sm transition-all ${
          viewMode === 'megaport'
            ? 'bg-orange-500 text-white shadow-md'
            : 'text-gray-400 border border-gray-600 hover:border-orange-400 hover:text-orange-400'
        }`}
        style={viewMode !== 'megaport' ? { background: 'transparent' } : {}}
      >
        OB vs Megaport
      </button>
    </div>
  );
}
