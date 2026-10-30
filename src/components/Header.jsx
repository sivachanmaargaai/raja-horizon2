import { useEffect, useState } from 'react';
import useRafScroll from '../hooks/useRafScroll';
import useActiveSection from '../hooks/useActiveSection';
import { NAV_LINKS } from '../data/content';

const SECTION_IDS = NAV_LINKS.map((l) => l.href.slice(1));

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  useRafScroll(() => setScrolled(window.scrollY > 28));

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    const onResize = () => window.innerWidth > 1050 && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize, { passive: true });
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <>
      <header className={`site-header${scrolled ? ' scrolled' : ''}`} id="siteHeader">
        <a href="#top" className="brand" aria-label="Raja Narayanasamy, back to top">
          <span className="brand-symbol">R<span>N</span></span>
          <span className="brand-name">RAJA NARAYANASAMY</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className={active === l.href.slice(1) ? 'active' : undefined}>
              {l.label}
            </a>
          ))}
        </nav>
        <a className="header-contact" href="#connect">
          Let's Connect <span aria-hidden="true">↗</span>
        </a>
        <button
          className={`menu-toggle${menuOpen ? ' open' : ''}`}
          id="menuToggle"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-controls="mobileMenu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span></span><span></span>
        </button>
      </header>
      <nav id="mobileMenu" className="mobile-nav" aria-label="Mobile navigation" hidden={!menuOpen}>
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={close}>{l.label}</a>
        ))}
        <a href="#connect" onClick={close}>Let's Connect</a>
      </nav>
    </>
  );
}
