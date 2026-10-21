import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/lib/content';
import { editorialImage, formatEditorialDate } from '@/lib/editorial';

export const metadata: Metadata = {
  title: 'Education operations blog',
  description: 'Practical guides for designing, delegating, and reviewing specialist remote support.',
  alternates: { canonical: '/blog' },
  openGraph: { url: '/blog', title: 'Education operations blog', description: 'Practical guides for clear education support workflows.' }
};

export default function BlogPage() {
  const categories = [...new Set(blogPosts.map((post) => post.category))];
  return (
    <main className="editorial-page editorial-index">
      <header className="index-hero">
        <p className="eyebrow">Practical field notes</p>
        <h1>Clearer roles. Better handoffs.</h1>
        <p>Guides for owners and managers who want to delegate recurring education operations without losing visibility or control.</p>
      </header>
      <section className="listing-section" aria-labelledby="latest-guides">
        <div className="listing-heading"><div><p className="eyebrow">Browse the library</p><h2 id="latest-guides">Latest guides</h2></div><p>{blogPosts.length} guides across {categories.length} workflow topics</p></div>
        <ul className="topic-list" aria-label="Available topics">{categories.map((category) => <li key={category}>{category} <span>{blogPosts.filter((post) => post.category === category).length}</span></li>)}</ul>
        <div className="editorial-grid">
          {blogPosts.map((post) => (
            <article className="editorial-card" key={post.slug}>
              <Link className="card-image" href={`/blog/${post.slug}`} tabIndex={-1} aria-hidden="true"><img src={editorialImage(post)} alt="" width="1200" height="630" loading="lazy" decoding="async" /></Link>
              <div className="card-copy">
                <p className="eyebrow">{post.category}</p>
                <p className="meta"><time dateTime={post.publishedAt}>{formatEditorialDate(post.publishedAt)}</time> · {post.readTime}</p>
                <h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3>
                <p>{post.description}</p>
                <Link className="text-link" href={`/blog/${post.slug}`} aria-label={`Read ${post.title}`}>Read guide</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
