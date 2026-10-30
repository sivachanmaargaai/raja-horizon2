import Reveal from './Reveal';
import { LINKEDIN_URL } from '../data/content';

export default function Connect() {
  return (
    <section id="connect" className="connect section">
      <div className="connect-orb" aria-hidden="true"></div>
      <div className="shell connect-shell">
        <Reveal className="section-marker">
          <span className="marker-square"></span> 09 / THE NEXT CHAPTER
        </Reveal>
        <Reveal as="h2">Still curious.<br /><em>Still building.</em></Reveal>
        <Reveal as="p">If you're building an intelligent product, growing a technology business, shaping engineering capability or exploring a strategic partnership—let's exchange ideas.</Reveal>
        <Reveal as="a" className="btn btn-primary connect-btn" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
          Let's Connect on LinkedIn <span aria-hidden="true">↗</span>
        </Reveal>
        <div className="connect-bottom">
          <span>THE FUTURE IS BUILT, NOT WAITED FOR.</span>
          <a href="#top">BACK TO TOP ↑</a>
        </div>
      </div>
    </section>
  );
}
