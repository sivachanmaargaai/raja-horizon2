import { useRef } from 'react';
import useRafScroll from '../hooks/useRafScroll';

export default function ScrollProgress() {
  const ref = useRef(null);
  useRafScroll(() => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const pos = Math.max(0, window.scrollY);
    if (ref.current) ref.current.style.width = (max > 0 ? Math.min(100, (pos / max) * 100) : 0) + '%';
  });
  return <div className="scroll-progress" ref={ref} aria-hidden="true" />;
}
