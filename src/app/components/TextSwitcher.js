'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

/**
 * TextSwitcher
 * - Rotates through provided React nodes without changing layout height
 * - Measures tallest item and locks container height to avoid jumps
 */
export default function TextSwitcher({
  items = [],
  intervalMs = 3000,
  transitionMs = 400,
  className = '',
  initialIndex = 0,
}) {
  const [index, setIndex] = useState(initialIndex);
  const [maxHeight, setMaxHeight] = useState(0);
  const measureRef = useRef(null);

  // Measure tallest item once on mount (and when items change)
  useEffect(() => {
    const doMeasure = () => {
      if (!measureRef.current) return;
      const container = measureRef.current;
      const heights = Array.from(container.children).map((child) => child.getBoundingClientRect().height || 0);
      const tallest = Math.ceil(Math.max(0, ...heights));
      setMaxHeight(tallest);
    };

    // initial measure
    doMeasure();

    // re-measure on window resize and orientation change
    const onResize = () => doMeasure();
    window.addEventListener('resize', onResize);
    window.addEventListener('orientationchange', onResize);

    // re-measure when fonts finish loading (affects text height)
    if (document && 'fonts' in document) {
      // ready resolves when fonts are loaded
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      document.fonts?.ready?.then(doMeasure).catch(() => {});
    }

    // Observe the measuring layer for changes (in case content changes dynamically)
    let ro;
    if ('ResizeObserver' in window && measureRef.current) {
      ro = new ResizeObserver(() => doMeasure());
      ro.observe(measureRef.current);
    }

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('orientationchange', onResize);
      if (ro) ro.disconnect();
    };
  }, [items]);

  // Auto-advance
  useEffect(() => {
    if (!items.length) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [items.length, intervalMs]);

  const style = useMemo(() => ({ height: maxHeight || undefined }), [maxHeight]);

  return (
    <div className={`relative w-full ${className}`} style={style} aria-live="polite">
      {/* Visible layer: stacked items with crossfade */}
    {items.map((node, i) => (
        <div
          key={i}
      className={`absolute inset-0 transition-opacity will-change-transform ${
            i === index ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ transitionDuration: `${transitionMs}ms` }}
        >
          <div className="h-full flex items-start">{node}</div>
        </div>
      ))}

      {/* Measuring layer: offscreen, used to compute tallest height */}
      <div ref={measureRef} className="invisible absolute -z-10 pointer-events-none">
        {items.map((node, i) => (
          <div key={`measure-${i}`} className="py-0 my-0">{node}</div>
        ))}
      </div>
    </div>
  );
}
