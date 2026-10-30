import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import speakingPhoto from '../assets/raja-speaking.jpg';
import { LINKEDIN_URL } from '../data/content';

// PHOTO REVIEW: confirm event details and usage permission before launch.
export default function Speaking() {
  return (
    <section id="speaking" className="speaking section">
      <div className="shell">
        <SectionHeading
          marker="06 / BEYOND THE WORK"
          text="Conversations with engineers, leaders, founders and students help turn experience into new ways of thinking."
        >
          Ideas become stronger<br /><em>when shared.</em>
        </SectionHeading>
        <Reveal className="speaking-feature">
          <img src={speakingPhoto} alt="Raja Narayanasamy speaking at a KS Institute of Technology event" loading="lazy" />
          <div className="speaking-overlay">
            <span>ENGINEERING · ENTREPRENEURSHIP · INTELLIGENT PRODUCTS</span>
            <h3>Sharing what I've learned.<br />Learning what's next.</h3>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-link">Connect on LinkedIn <span aria-hidden="true">↗</span></a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
