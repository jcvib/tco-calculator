import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

export default function Charts({ privateCost, egressCost, savings, savingsPercent, selectedCSP }) {
  const comparisonData = [
    { name: 'Egress Internet', value: egressCost, fill: '#60a5fa' },
    { name: 'Connectivité Privée', value: privateCost.total, fill: '#fb923c' }
  ];

  const compositionData = [{
    name: 'Private',
    'OB ODCC': privateCost.obCost,
    [`${selectedCSP} Port`]: privateCost.cspPortCost,
    'Private Egress': privateCost.privateEgressCost,
    'ErGw Gateway': selectedCSP === 'Azure' ? privateCost.erGwCost : 0
  }];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      {/* Graphique comparatif Egress vs Private */}
      <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-6 border border-blue-200">
        <h3 className="font-bold text-lg mb-4 text-gray-800">
          📊 Comparaison des coûts
        </h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={comparisonData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" angle={-15} textAnchor="end" height={80} />
            <YAxis label={{ value: 'Coût mensuel ($)', angle: -90, position: 'insideLeft' }} />
            <Tooltip formatter={(value) => `$${value.toFixed(2)}`} />
            <Bar dataKey="value">
              {comparisonData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <div className="mt-4 p-3 bg-gray-50 rounded text-center">
          <span className={`text-lg font-bold ${savings > 0 ? 'text-green-600' : 'text-red-600'}`}>
            {savings > 0 ? '💰 Économies' : '⚠️ Surcoût'} : 
            {savings > 0 ? '+' : ''}${savings.toFixed(2)}
            ({savingsPercent > 0 ? '+' : ''}{savingsPercent.toFixed(1)}%)
          </span>
        </div>
      </div>

      {/* Graphique composition Private (barres empilées) */}
      <div className="bg-gradient-to-br from-orange-50 to-white rounded-lg p-6 border border-orange-200">
        <h3 className="font-bold text-lg mb-4 text-gray-800">
          🔒 Composition Connectivité Privée
        </h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart 
            data={compositionData}
            layout="vertical"
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" label={{ value: 'Coût ($)', position: 'bottom' }} />
            <YAxis type="category" dataKey="name" />
            <Tooltip formatter={(value) => `$${value.toFixed(2)}`} />
            <Legend />
            <Bar dataKey="OB ODCC" stackId="a" fill="#fb923c" />
            <Bar dataKey={`${selectedCSP} Port`} stackId="a" fill="#60a5fa" />
            {selectedCSP === 'Azure' && <Bar dataKey="ErGw Gateway" stackId="a" fill="#a78bfa" />}
            <Bar dataKey="Private Egress" stackId="a" fill="#34d399" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
