import { useRef } from 'react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import useRafScroll from '../hooks/useRafScroll';
import { TIMELINE } from '../data/content';

export default function Journey() {
  const timelineRef = useRef(null);
  const fillRef = useRef(null);

  useRafScroll(() => {
    const tl = timelineRef.current;
    const fill = fillRef.current;
    if (!tl || !fill) return;
    const rect = tl.getBoundingClientRect();
    const start = window.innerHeight * 0.77;
    const pct = Math.max(0, Math.min(1, (start - rect.top) / Math.max(1, rect.height - 40)));
    fill.style.height = pct * 100 + '%';
  });

  return (
    <section id="journey" className="journey section">
      <div className="shell">
        <SectionHeading
          marker="02 / THE JOURNEY"
          text="Four chapters that shaped how I think about engineering, leadership and opportunity."
        >
          Built on experience.<br /><em>Driven by curiosity.</em>
        </SectionHeading>
        <div className="timeline" id="timeline" ref={timelineRef}>
          <div className="timeline-track"><div className="timeline-fill" ref={fillRef}></div></div>
          {TIMELINE.map((item) => (
            <Reveal as="article" className="timeline-item" key={item.num}>
              <div className="timeline-dot"></div>
              <div className="timeline-num">{item.num} <span>{item.label}</span></div>
              <div className="timeline-body">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span className="chapter-aside">{item.aside}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
