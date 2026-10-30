import { useEffect, useRef } from 'react';

/** Runs `handler` on scroll/resize (rAF-throttled) and once on mount. */
export default function useRafScroll(handler) {
  const handlerRef = useRef(handler);
  handlerRef.current = handler;

  useEffect(() => {
    let scheduled = false;
    const run = () => {
      scheduled = false;
      handlerRef.current();
    };
    const onEvent = () => {
      if (!scheduled) {
        scheduled = true;
        requestAnimationFrame(run);
      }
    };
    window.addEventListener('scroll', onEvent, { passive: true });
    window.addEventListener('resize', onEvent, { passive: true });
    run();
    return () => {
      window.removeEventListener('scroll', onEvent);
      window.removeEventListener('resize', onEvent);
    };
  }, []);
}
