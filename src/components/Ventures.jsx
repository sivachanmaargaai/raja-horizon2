import { useState } from 'react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { VENTURES } from '../data/content';

export default function Ventures() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="ventures" className="ventures section">
      <div className="shell">
        <SectionHeading
          marker="03 / WHAT I BUILD"
          text="Technology expertise becomes meaningful when it connects to a real market, a real need and a real outcome."
        >
          Different ventures.<br /><em>One builder's mindset.</em>
        </SectionHeading>
        <div className="venture-list" id="ventureList">
          {VENTURES.map((v, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal as="article" className={`venture${isOpen ? ' open' : ''}`} key={v.name}>
                <button
                  className="venture-head"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                >
                  <span className="venture-no">{String(i + 1).padStart(2, '0')} /</span>
                  <span className="venture-name">{v.name} <small>{v.sub}</small></span>
                  <span className="venture-expand" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                </button>
                <div className="venture-detail">
                  <p>{v.text}</p>
                  <div className="tags">{v.tags.map((t) => <span key={t}>{t}</span>)}</div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
