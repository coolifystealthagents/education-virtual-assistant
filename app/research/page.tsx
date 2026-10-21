import type { Metadata } from 'next';
import Link from 'next/link';
import { researchPosts } from '@/lib/content';
import { editorialImage, formatEditorialDate, researchDisplayTitle, researchReadTime } from '@/lib/editorial';

export const metadata: Metadata = {
  title: 'Education operations research library',
  description: 'Source-led protocols and operational briefs for leaders designing specialist support roles.',
  alternates: { canonical: '/research' },
  openGraph: { url: '/research', title: 'Education operations research library', description: 'Source-led protocols and truthful operational briefs.' }
};

export default function ResearchPage() {
  const clusters = [...new Set(researchPosts.map((post) => post.cluster))];
  return (
    <main className="editorial-page editorial-index">
      <header className="index-hero research-index-hero">
        <p className="eyebrow">Research library</p>
        <h1>Evidence boundaries made visible.</h1>
        <p>Review protocols and source-led operational briefs that distinguish proposed controls from measured findings.</p>
      </header>
      <section className="listing-section" aria-labelledby="research-publications">
        <div className="listing-heading"><div><p className="eyebrow">Browse the library</p><h2 id="research-publications">Research publications</h2></div><p>{researchPosts.length} publications across {clusters.length} operational topics</p></div>
        <ul className="topic-list" aria-label="Available research topics">{clusters.map((cluster) => <li key={cluster}>{cluster} <span>{researchPosts.filter((post) => post.cluster === cluster).length}</span></li>)}</ul>
        <div className="editorial-grid">
          {researchPosts.map((post) => {
            const title = researchDisplayTitle(post);
            const format = post.methodology?.length ? 'Review protocol' : 'Operational brief';
            return (
              <article className="editorial-card" key={post.slug}>
                <Link className="card-image" href={`/research/${post.slug}`} tabIndex={-1} aria-hidden="true"><img src={editorialImage(post)} alt="" width="1200" height="630" loading="lazy" decoding="async" /></Link>
                <div className="card-copy">
                  <p className="eyebrow">{format} · {post.cluster}</p>
                  <p className="meta"><time dateTime={post.publishedAt}>{formatEditorialDate(post.publishedAt)}</time> · {researchReadTime(post)}</p>
                  <h3><Link href={`/research/${post.slug}`}>{title}</Link></h3>
                  <p>{post.summary}</p>
                  <Link className="text-link" href={`/research/${post.slug}`} aria-label={`Review ${title}`}>Review publication</Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
