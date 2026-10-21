'use client';

import { useEffect, useRef, useState } from 'react';
import provenance from '@/app/data/review-provenance.json';

export function ReviewMarquee() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduced.matches) return;

    let frame = 0;
    let previous = performance.now();
    const move = (now: number) => {
      const elapsed = Math.min(now - previous, 40);
      previous = now;
      if (!paused) {
        viewport.scrollLeft += elapsed * 0.035;
        const first = viewport.firstElementChild as HTMLElement | null;
        if (first) {
          const gap = Number.parseFloat(getComputedStyle(viewport).columnGap) || 0;
          const distance = first.getBoundingClientRect().width + gap;
          if (viewport.scrollLeft >= distance) {
            viewport.appendChild(first);
            viewport.scrollLeft -= distance;
          }
        }
      }
      frame = requestAnimationFrame(move);
    };
    frame = requestAnimationFrame(move);
    return () => cancelAnimationFrame(frame);
  }, [paused]);

  return (
    <div
      className="review-marquee"
      ref={viewportRef}
      aria-label="Verified StealthAgents client reviews"
      aria-live="off"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setPaused(false);
      }}
    >
      {provenance.records.map((review) => (
        <article className="review-card" key={review.name} tabIndex={0}>
          <div className="review-stars" aria-label={`${review.rating} stars`}>
            <span aria-hidden="true">★★★★★</span>
          </div>
          <h2>{review.headline}</h2>
          <p>“{review.body}”</p>
          <div className="review-author">
            <strong>{review.name}</strong>
            <span>{review.detail}</span>
          </div>
        </article>
      ))}
    </div>
  );
}
