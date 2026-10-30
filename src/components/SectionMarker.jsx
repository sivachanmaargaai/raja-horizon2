export default function SectionMarker({ children, className = '' }) {
  return (
    <div className={`section-marker ${className}`.trim()}>
      <span className="marker-square"></span> {children}
    </div>
  );
}
