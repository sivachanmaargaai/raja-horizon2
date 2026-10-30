import Reveal from './Reveal';

export default function Story() {
  return (
    <section id="story" className="story-intro section">
      <div className="shell intro-grid">
        <Reveal className="section-marker">
          <span className="marker-square"></span> 01 / THE STORY
        </Reveal>
        <Reveal className="intro-main">
          <p className="large-editorial">
            It began with a question: <em>how can technology make the real world work better?</em>
          </p>
          <div className="intro-lower">
            <span className="small-index">ENGINEER → BUILDER → ENTREPRENEUR → VISIONARY</span>
            <p>Engineering taught me to ask better questions. Over time, the answers led me from systems and software to people, products, organizations and business.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
