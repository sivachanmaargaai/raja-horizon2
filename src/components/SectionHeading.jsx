import Reveal from './Reveal';
import SectionMarker from './SectionMarker';

export default function SectionHeading({ marker, children, text }) {
  return (
    <Reveal className="section-heading">
      <div>
        <SectionMarker>{marker}</SectionMarker>
        <h2>{children}</h2>
      </div>
      <p>{text}</p>
    </Reveal>
  );
}
