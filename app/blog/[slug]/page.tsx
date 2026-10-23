import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArticleToc } from '@/components/ArticleToc';
import { MobileToc } from '@/components/MobileToc';
import { blogPosts, blogBySlug } from '@/lib/content';
import { editorialImage, formatEditorialDate, headingId } from '@/lib/editorial';
import { site } from '@/lib/site';

export function generateStaticParams() {
  return blogPosts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogBySlug(slug);
  if (!post) return {};
  const canonical = `/blog/${post.slug}`;
  const image = editorialImage(post);
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical },
    openGraph: {
      type: 'article',
      url: canonical,
      title: post.title,
      description: post.description,
      publishedTime: post.publishedAt,
      images: [{ url: image, alt: `Editorial illustration for ${post.title}` }]
    }
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogBySlug(slug);
  if (!post) notFound();

  const related = blogPosts
    .filter((item) => item.slug !== post.slug && item.category === post.category)
    .concat(blogPosts.filter((item) => item.slug !== post.slug && item.category !== post.category))
    .slice(0, 3);
  const sectionItems = post.sections.map((section, index) => {
    const label = index === 0 && section.heading.startsWith('Published ') ? 'Workflow overview' : section.heading;
    return { id: headingId(label), label, section, index };
  });
  const tocItems = [
    ...sectionItems.map(({ id, label }) => ({ id, label })),
    { id: 'common-questions', label: 'Common questions' },
    { id: 'source-note', label: 'Source note' },
    { id: 'get-support', label: 'Get support' }
  ];

  return (
    <main id="main-content" tabIndex={-1} className="editorial-page">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <ol><li><Link href="/">Home</Link></li><li><Link href="/blog">Blog</Link></li><li aria-current="page">{post.title}</li></ol>
      </nav>
      <header className="article-hero">
        <div className="article-hero-copy">
          <p className="eyebrow">{post.category}</p>
          <h1>{post.title}</h1>
          <p className="article-deck">{post.description}</p>
          <dl className="article-meta">
            <div><dt>Published</dt><dd><time dateTime={post.publishedAt}>{`Published ${formatEditorialDate(post.publishedAt)}`}</time></dd></div>
            <div><dt>Reading time</dt><dd>{post.readTime}</dd></div>
            <div><dt>By</dt><dd>{site.name} Editorial Team</dd></div>
          </dl>
        </div>
        <figure className="article-hero-media">
          <img src={editorialImage(post)} alt={`Education operations illustration for ${post.title}`} width="1200" height="630" fetchPriority="high" />
        </figure>
      </header>

      <div className="editorial-shell">
        <MobileToc items={tocItems} />
        <article className="editorial-prose">
          {sectionItems.map(({ id, label, section, index }) => (
            <section id={id} key={id}>
              <h2>{label}</h2>
              {section.paragraphs.map((paragraph, paragraphIndex) => <p key={paragraphIndex}>{paragraph}</p>)}
              {index === 1 && <p className="inline-route">See how the <Link href={post.internalService}>related specialist service</Link> can support this operating lane while your team retains accountable decisions.</p>}
              {index === 3 && <p className="inline-route">Continue with <Link href={post.internalSibling}>this related education workflow guide</Link>.</p>}
            </section>
          ))}
          <section id="common-questions">
            <h2>Common questions</h2>
            {post.faq.map((item) => <div className="answer" key={item.q}><h3>{item.q}</h3><p>{item.a}</p></div>)}
          </section>
          <section id="source-note" className="source-module">
            <h2>Source note</h2>
            <p>This guide uses public guidance as context for workflow design. It is not legal, regulatory, or instructional advice.</p>
            <p><a href={post.source.url} rel="noopener noreferrer">Review {post.source.label}</a>.</p>
          </section>
          <section id="get-support" className="support-module">
            <p className="eyebrow">Practical next step</p>
            <h2>Shape one controlled support workflow</h2>
            <p>Bring the recurring task that consumes the most attention. We can help define its inputs, decision boundary, handoff, and review points.</p>
            <Link id="cta-blog-final-bookcall" className="button primary" href="/contact-us">Book a free consultation</Link>
          </section>
        </article>

        <aside className="editorial-sidebar" aria-label="Article tools and related reading">
          <ArticleToc items={tocItems} />
          <section className="sidebar-module">
            <p className="eyebrow">About this guide</p>
            <dl><div><dt>Topic</dt><dd>{post.category}</dd></div><div><dt>Updated</dt><dd><time dateTime={post.publishedAt}>{formatEditorialDate(post.publishedAt)}</time></dd></div><div><dt>Source</dt><dd><a href={post.source.url} rel="noopener noreferrer">{post.source.label}</a></dd></div></dl>
          </section>
          <section className="sidebar-module">
            <h2>Related guides</h2>
            <ul>{related.map((item) => <li key={item.slug}><Link href={`/blog/${item.slug}`}>{item.title}</Link></li>)}</ul>
          </section>
          <Link className="sidebar-action" href={post.internalService}>Explore the related service</Link>
        </aside>
      </div>
    </main>
  );
}
