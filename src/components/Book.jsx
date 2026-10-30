import Reveal from './Reveal';
import SectionMarker from './SectionMarker';
import bookCover from '../assets/engineering-intelligent-products.jpg';
import { BOOK_URL } from '../data/content';

export default function Book() {
  return (
    <section id="book" className="book-section section">
      <div className="shell book-layout">
        <Reveal className="book-copy">
          <SectionMarker>05 / THE BOOK</SectionMarker>
          <div className="book-mini-label">WORDS MEET EXPERIENCE</div>
          <h2>Engineering<br /><em>Intelligent</em><br />Products.</h2>
          <p className="book-subtitle">Designing, Building, and Scaling Edge AI and Real-Time Data Architectures</p>
          <p>When engineering, data and AI work as a complete system, intelligent products become more than an idea. This book explores the architecture and practical decisions behind that journey.</p>
          <div className="book-actions">
            <a className="btn btn-primary" href={BOOK_URL} target="_blank" rel="noopener noreferrer">Find the Book <span aria-hidden="true">↗</span></a>
            <a className="btn btn-text" href="#insights">Explore My Insights <span aria-hidden="true">↗</span></a>
          </div>
        </Reveal>
        <Reveal className="book-visual" aria-label="Engineering Intelligent Products book cover">
          <div className="book-glow"></div>
          <div className="book-3d">
            <div className="book-spine"></div>
            <img src={bookCover} alt="Book cover: Engineering Intelligent Products by Raja Narayanasamy, featuring an octopus" loading="lazy" />
          </div>
          <div className="book-orbit book-orbit-1"></div>
          <div className="book-orbit book-orbit-2"></div>
          <span className="book-side-label">ENGINEERING / INTELLIGENCE / IMPACT</span>
        </Reveal>
      </div>
    </section>
  );
}
