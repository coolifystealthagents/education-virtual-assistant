'use client';

import { useEffect, useState } from 'react';

export type TocItem = { id: string; label: string };

export function ArticleToc({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? '');

  useEffect(() => {
    const headings = items
      .map(({ id }) => document.getElementById(id))
      .filter((heading): heading is HTMLElement => Boolean(heading));
    if (!headings.length) return;

    const update = () => {
      const marker = Math.max(120, window.innerHeight * 0.22);
      let current = headings[0].id;
      for (const heading of headings) {
        if (heading.getBoundingClientRect().top <= marker) current = heading.id;
        else break;
      }
      setActiveId(current);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [items]);

  return (
    <details className="article-toc" open>
      <summary>On this page</summary>
      <nav aria-label="On this page">
        <ol>
          {items.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} aria-current={activeId === item.id ? 'location' : undefined}>
                {item.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </details>
  );
}
