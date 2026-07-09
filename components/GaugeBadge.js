export default function GaugeBadge({ value, unit, percent, dark = false }) {
  return (
    <div className={`gauge ${dark ? 'gauge--dark' : ''}`} style={{ '--pct': `${percent}%` }}>
      <div className="gauge__inner">
        <strong>{value}</strong>
        <span>{unit}</span>
      </div>
    </div>
  );
}