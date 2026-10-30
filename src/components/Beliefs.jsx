import Reveal from './Reveal';
import SectionMarker from './SectionMarker';
import { PRINCIPLES } from '../data/content';

export default function Beliefs() {
  return (
    <section id="beliefs" className="beliefs section">
      <div className="shell beliefs-grid">
        <Reveal>
          <SectionMarker>08 / WHAT I BELIEVE</SectionMarker>
          <h2>Principles over<br /><em>buzzwords.</em></h2>
        </Reveal>
        <div className="principles">
          {PRINCIPLES.map((p) => (
            <Reveal className="principle" key={p.num}>
              <span>{p.num}</span>
              <h3>{p.title}<small>{p.text}</small></h3>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
