export default function Header({ selectedCSP }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        🌐 Cloud Connectivity TCO Calculator v6.0
      </h1>
      <p className="text-gray-600">
        Analyse comparative : Orange Business ODCC vs {selectedCSP}
      </p>
      <div className="mt-4 p-3 bg-blue-50 rounded border border-blue-200">
        <p className="text-sm text-blue-800">
          📊 <strong>Méthodologie</strong> : Comparaison des coûts mensuels entre la connectivité privée 
          (Orange Business ODCC + {selectedCSP}) et l'egress Internet standard.
        </p>
      </div>
    </div>
  );
}
