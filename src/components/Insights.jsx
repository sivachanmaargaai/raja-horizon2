import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { INSIGHTS, LINKEDIN_URL } from '../data/content';

export default function Insights() {
  return (
    <section id="insights" className="insights section">
      <div className="shell">
        <SectionHeading
          marker="07 / PERSPECTIVES"
          text="A few topics I keep returning to—from product architecture and engineering culture to the future of technology businesses."
        >
          Thinking<br /><em>out loud.</em>
        </SectionHeading>
        <div className="insight-grid">
          {INSIGHTS.map((item) => (
            <Reveal as="article" className="insight-card" key={item.idx}>
              <span className="topic-index">FIELD NOTES / {item.idx}</span>
              <div className={`insight-art insight-art-${Number(item.idx)}`} aria-hidden="true">
                <div className={item.art}></div>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="insights-footer">
          <span>Ideas on technology, products and business.</span>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-link">Explore thoughts on LinkedIn <span aria-hidden="true">↗</span></a>
        </Reveal>
      </div>
    </section>
  );
}
