export default function LinkAnalysis({ linkLoad, bandwidth, volumeGiB, capacityThreshold, getDisplayedVolume }) {
  return (
    <div className="mt-6 p-6 bg-gradient-to-br from-purple-50 to-white rounded-lg border border-purple-200">
      <h3 className="font-bold text-lg mb-4 text-gray-800">📡 Analyse de charge du lien</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
        <div className="p-3 bg-white rounded border border-gray-200">
          <span className="text-gray-600 block">Bande passante</span>
          <span className="font-semibold text-lg">{bandwidth}</span>
        </div>
        <div className="p-3 bg-white rounded border border-gray-200">
          <span className="text-gray-600 block">Capacité mensuelle</span>
          <span className="font-semibold text-lg">{linkLoad.capacityTiB.toFixed(2)} TiB</span>
        </div>
        <div className="p-3 bg-white rounded border border-gray-200">
          <span className="text-gray-600 block">Volume demandé</span>
          <span className="font-semibold text-lg">
            {getDisplayedVolume(volumeGiB).value} {getDisplayedVolume(volumeGiB).unit}
          </span>
        </div>
        <div className="p-3 bg-white rounded border border-gray-200">
          <span className="text-gray-600 block">Charge théorique</span>
          <span className={`font-semibold text-lg ${linkLoad.loadPercent > capacityThreshold ? 'text-red-600' : 'text-green-600'}`}>
            {linkLoad.loadPercent.toFixed(1)}%
          </span>
        </div>
      </div>
      
      {/* Barre de progression */}
      <div>
        <div className="w-full bg-gray-200 rounded-full h-6 relative">
          <div
            className={`h-6 rounded-full transition-all ${linkLoad.loadPercent > capacityThreshold ? 'bg-red-500' : 'bg-green-500'}`}
            style={{ width: `${Math.min(linkLoad.loadPercent, 100)}%` }}
          >
            <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-white">
              {linkLoad.loadPercent.toFixed(1)}%
            </span>
          </div>
        </div>
        <div className="mt-2 flex justify-between text-xs text-gray-600">
          <span>0%</span>
          <span className="font-semibold text-purple-600">Seuil: {capacityThreshold}%</span>
          <span>100%</span>
        </div>
      </div>

      {/* Warning si seuil dépassé */}
      {linkLoad.isOverThreshold && (
        <div className="mt-4 p-4 bg-yellow-100 border border-yellow-400 rounded-lg">
          <p className="text-sm text-yellow-800 flex items-start">
            <span className="text-xl mr-2">⚠️</span>
            <span>
              <strong>Attention :</strong> La charge théorique dépasse le seuil acceptable ({capacityThreshold}%).
              Une bande passante supérieure est recommandée pour assurer des performances optimales.
            </span>
          </p>
        </div>
      )}
    </div>
  );
}
