import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArticleToc } from '@/components/ArticleToc';
import { MobileToc } from '@/components/MobileToc';
import { researchPosts, researchBySlug } from '@/lib/content';
import { editorialImage, formatEditorialDate, researchDisplayTitle, researchReadTime, researchService } from '@/lib/editorial';
import { site } from '@/lib/site';

export function generateStaticParams() {
  return researchPosts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = researchBySlug(slug);
  if (!post) return {};
  const title = researchDisplayTitle(post);
  const canonical = `/research/${post.slug}`;
  const image = editorialImage(post);
  return {
    title,
    description: post.summary,
    alternates: { canonical },
    openGraph: {
      type: 'article',
      url: canonical,
      title,
      description: post.summary,
      publishedTime: post.publishedAt,
      images: [{ url: image, alt: `Operational research illustration for ${title}` }]
    }
  };
}

export default async function ResearchPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = researchBySlug(slug);
  if (!post) notFound();

  const isProtocol = Boolean(post.methodology?.length);
  const title = researchDisplayTitle(post);
  const readTime = researchReadTime(post);
  const related = researchPosts
    .filter((item) => item.slug !== post.slug && item.cluster === post.cluster)
    .concat(researchPosts.filter((item) => item.slug !== post.slug && item.cluster !== post.cluster))
    .slice(0, 3);
  const protocolSteps = post.methodology?.map((item) => item.split(':')[0]) ?? [];
  const protocolScope = post.methodology?.[0]?.split(':').slice(1).join(':').trim();
  const tocItems = isProtocol
    ? [
        { id: 'protocol-status', label: 'Protocol status' },
        { id: 'review-protocol', label: 'Review protocol' },
        { id: 'operational-implications', label: 'Operational implications' },
        { id: 'limitations', label: 'Limitations' },
        { id: 'sources', label: 'Sources' },
        { id: 'get-support', label: 'Get support' }
      ]
    : [
        { id: 'brief-scope', label: 'Brief scope' },
        { id: 'control-to-inspect', label: 'Control to inspect' },
        { id: 'owner-review-questions', label: 'Owner review questions' },
        { id: 'limitations', label: 'Limitations' },
        { id: 'sources', label: 'Sources' },
        { id: 'get-support', label: 'Get support' }
      ];

  return (
    <main id="main-content" tabIndex={-1} className="editorial-page research-article">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <ol><li><Link href="/">Home</Link></li><li><Link href="/research">Research</Link></li><li aria-current="page">{title}</li></ol>
      </nav>
      <header className="article-hero">
        <div className="article-hero-copy">
          <p className="eyebrow">{isProtocol ? 'Source bounded review protocol' : 'Operational brief'} · {post.cluster}</p>
          <h1>{title}</h1>
          <p className="article-deck">{post.summary}</p>
          <dl className="article-meta">
            <div><dt>Published</dt><dd><time dateTime={post.publishedAt}>{`Published ${formatEditorialDate(post.publishedAt)}`}</time></dd></div>
            <div><dt>Reading time</dt><dd>{readTime}</dd></div>
            <div><dt>By</dt><dd>{site.name} Editorial Team</dd></div>
          </dl>
        </div>
        <figure className="article-hero-media">
          <img src={editorialImage(post)} alt={`Education operations diagram for ${title}`} width="1200" height="630" fetchPriority="high" />
        </figure>
      </header>

      <div className="editorial-shell">
        <MobileToc items={tocItems} />
        <article className="editorial-prose">
          {isProtocol ? (
            <>
              <section id="protocol-status">
                <h2>Protocol status</h2>
                <p className="research-finding">{post.finding}</p>
                <p>This page describes a review design and its proposed controls. It does not report an executed sample, measured outcomes, or evidence that the controls improved performance.</p>
              </section>
              <section id="review-protocol">
                <h2>Review protocol</h2>
                {protocolScope && <p>{protocolScope}</p>}
                <h3>Planned review sequence</h3>
                <ol>{protocolSteps.map((step) => <li key={step}>{step}</li>)}</ol>
              </section>
              <section id="operational-implications">
                <h2>Operational implications</h2>
                {(post.findings ?? []).map((item, index) => <p key={index}>{item}</p>)}
              </section>
            </>
          ) : (
            <>
              <section id="brief-scope">
                <h2>Brief scope</h2>
                <p>This operational brief connects public guidance with questions leaders can use when defining a remote support workflow. It contains no original sample, experiment, measured result, or claim of observed performance.</p>
              </section>
              <section id="control-to-inspect">
                <h2>Control to inspect</h2>
                <p>{post.finding}</p>
                <p>Treat this as a proposed design principle to test against your own policy, records, systems, and accountable owners.</p>
              </section>
              <section id="owner-review-questions">
                <h2>Owner review questions</h2>
                <ul><li>Which source record authorizes routine preparation?</li><li>Which decision must remain with the accountable owner?</li><li>What evidence shows a handoff was received and reviewed?</li><li>Which exception should stop the workflow and trigger escalation?</li></ul>
              </section>
            </>
          )}
          <section id="limitations" className="source-module">
            <h2>Limitations</h2>
            <p>{isProtocol ? 'The protocol has not been presented here as a completed empirical study. Its steps and implications require local validation before use.' : 'This brief interprets public sources for operational planning. It does not evaluate a specific organization and cannot establish effectiveness, compliance, or causation.'}</p>
          </section>
          <section id="sources" className="source-module">
            <h2>Sources</h2>
            <ol>{post.sources.map((source) => <li key={source.url}><a href={source.url} rel="noopener noreferrer">{source.label}</a>{source.publisher && <span>, {source.publisher}</span>}{source.checkedAt && <span>. Access checked <time dateTime={source.checkedAt}>{formatEditorialDate(source.checkedAt)}</time></span>}</li>)}</ol>
          </section>
          <section id="get-support" className="support-module">
            <p className="eyebrow">Apply the brief carefully</p>
            <h2>Map the control to a real workflow</h2>
            <p>We can help define the preparation lane, accountable owner, evidence requirements, and escalation point without treating a brief as proof.</p>
            <Link id="cta-research-final-bookcall" className="button primary" href="/contact-us">Discuss your workflow</Link>
          </section>
        </article>

        <aside className="editorial-sidebar" aria-label="Research tools and related reading">
          <ArticleToc items={tocItems} />
          <section className="sidebar-module">
            <p className="eyebrow">About this publication</p>
            <dl><div><dt>Format</dt><dd>{isProtocol ? 'Review protocol' : 'Operational brief'}</dd></div><div><dt>Topic</dt><dd>{post.cluster}</dd></div><div><dt>Evidence</dt><dd>{post.sources.length} public sources</dd></div><div><dt>Updated</dt><dd><time dateTime={post.publishedAt}>{formatEditorialDate(post.publishedAt)}</time></dd></div></dl>
          </section>
          <section className="sidebar-module">
            <h2>Related publications</h2>
            <ul>{related.map((item) => <li key={item.slug}><Link href={`/research/${item.slug}`}>{researchDisplayTitle(item)}</Link></li>)}</ul>
          </section>
          <Link className="sidebar-action" href={researchService(post)}>Explore the related service</Link>
        </aside>
      </div>
    </main>
  );
}
