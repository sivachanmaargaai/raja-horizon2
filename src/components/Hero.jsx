import WatchVideo from './WatchVideo';
import portrait from '../assets/raja-portrait.jpg';
import '../hero-portrait.css';

export default function Hero() {
  return (
    <section className="hero section" id="top" aria-labelledby="heroTitle">
      <div className="hero-mesh" aria-hidden="true"></div>
      <div className="hero-orb hero-orb-one" aria-hidden="true"></div>
      <div className="hero-orb hero-orb-two" aria-hidden="true"></div>
      <div className="shell hero-shell">
        <div className="hero-content">
          <div className="eyebrow entrance">
            <span className="live-dot"></span> ENGINEER <span className="eyebrow-divider">/</span> ENTREPRENEUR <span className="eyebrow-divider">/</span> AUTHOR
          </div>
          <h1 id="heroTitle" className="hero-title entrance">
            <span className="line-mask"><span>From engineering</span></span>
            <span className="line-mask"><span>foundations.</span></span>
            <span className="line-mask grad-line"><span>To intelligent</span></span>
            <span className="line-mask grad-line"><span>futures<span className="period">.</span></span></span>
          </h1>
          <p className="hero-role entrance">
            Technology Entrepreneur <i>·</i> Product Engineering Leader <i>·</i> Author <i>·</i> Strategic Advisor
          </p>
          <p className="hero-summary entrance">
            Nearly three decades of bringing engineering, people and business together. Now exploring a new frontier—intelligent products where AI meets the physical world.
          </p>
          <div className="hero-actions entrance">
            <a href="#story" className="btn btn-primary">Explore My Journey <span aria-hidden="true">↗</span></a>
            <a href="#book" className="btn btn-text">Discover the Book <span aria-hidden="true">↗</span></a>
            <WatchVideo />
          </div>
        </div>
        <div className="hero-portrait">
          <div className="portrait-glow" aria-hidden="true"></div>
          <div className="portrait-float">
            <div className="portrait-ring" aria-hidden="true"></div>
            <div className="portrait-frame">
              <img src={portrait} alt="Raja Narayanasamy" />
              <div className="portrait-caption">
                <strong>RAJA NARAYANASAMY</strong>
                <span>Technology Entrepreneur · Author</span>
              </div>
            </div>
            <div className="portrait-chip"><span className="tiny-dot"></span> ENGINEERING × BUSINESS × AI</div>
          </div>
        </div>
        <div className="hero-bottom">
          <span>01 / A STORY OF BUILDING</span>
          <a href="#story">SCROLL TO EXPLORE <span className="down-arrow">↓</span></a>
        </div>
      </div>
    </section>
  );
}
