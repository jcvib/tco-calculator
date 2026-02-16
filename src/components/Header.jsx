export default function Header({ selectedCSP }) {
  return (
    <div className="flex items-center justify-between mb-6">
      <h1 className="text-lg font-bold" style={{ color: '#E4E6F1', fontFamily: 'monospace', letterSpacing: '0.02em' }}>
        Cloud Connectivity TCO Calculator <span style={{ color: '#7B809A', fontWeight: 400 }}>v6.2</span>
      </h1>
      <span className="text-xs" style={{ color: '#7B809A' }}>
        Orange Business vs {selectedCSP}
      </span>
    </div>
  );
}
