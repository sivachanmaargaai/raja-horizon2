import { useState } from 'react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { AI_STEPS, TECH_WORDS } from '../data/content';

export default function Intelligence() {
  const [step, setStep] = useState(0);
  const current = AI_STEPS[step];

  return (
    <section id="intelligence" className="intelligence section">
      <div className="shell">
        <SectionHeading
          marker="04 / THE NEXT FRONTIER"
          text="Intelligence is moving into devices, cameras, machines and systems that operate in the real world."
        >
          When AI leaves<br /><em>the screen.</em>
        </SectionHeading>
        <Reveal className="ai-stage" id="aiStage">
          <div className="ai-visual" aria-hidden="true">
            <div className="ai-core">
              <div className="core-crosshair"></div>
              <div className="pulse-circle p1"></div>
              <div className="pulse-circle p2"></div>
              <span id="aiCoreLabel" style={{ color: current.color }}>{String(step + 1).padStart(2, '0')}</span>
            </div>
            <span className="ai-coordinate">LIVE SYSTEM / CONCEPTUAL MODEL</span>
            <span className="ai-coordinate ai-coordinate-bottom">SENSE • UNDERSTAND • DECIDE • ACT</span>
          </div>
          <div className="ai-narrative">
            <span className="eyebrow-text">THE INTELLIGENCE LOOP</span>
            <h3 id="aiStepTitle">{current.title}<span className="period">.</span></h3>
            <p id="aiStepDesc">{current.desc}</p>
            <div className="ai-step-buttons" role="group" aria-label="Explore the four intelligence steps">
              {AI_STEPS.map((s, i) => (
                <button
                  key={s.title}
                  className={`ai-step${i === step ? ' active' : ''}`}
                  aria-pressed={i === step}
                  onClick={() => setStep(i)}
                >
                  <span>{String(i + 1).padStart(2, '0')}</span>{s.title}
                </button>
              ))}
            </div>
            <span className="tiny-hint">SELECT A STEP TO EXPLORE THE PROCESS</span>
          </div>
        </Reveal>
        <Reveal className="technology-words">
          {TECH_WORDS.map((w) => <span key={w}>{w}</span>)}
        </Reveal>
      </div>
    </section>
  );
}
