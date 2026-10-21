import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { site } from '@/lib/site';
import { serviceBySlug } from '@/lib/content';
import { ArrowIcon } from '@/components/Icons';

export function generateStaticParams() { return site.services.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  return service ? {
    title: service.name,
    description: service.short,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: { title: service.name, description: service.short, images: [{ url: service.image.src, width: service.image.width, height: service.image.height, alt: service.image.alt }] }
  } : {};
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();
  const related = service.relatedServices.map((relatedSlug) => serviceBySlug(relatedSlug)).filter((item) => item !== undefined);

  return <main className="lf-page service-detail">
    <header className="lf-service-hero"><div><p className="eyebrow">Specialist education support</p><h1>{service.name}</h1><p className="hero-body">{service.short}</p><p><strong>Designed for:</strong> {service.audience}</p><div className="hero-actions"><Link id={`cta-services-${service.slug}-bookcall`} className="button primary" href="/contact-us">Discuss this role <ArrowIcon /></Link><a className="quiet-link" href="#scope">Review the scope</a></div></div><Image src={service.image.src} alt={service.image.alt} width={service.image.width} height={service.image.height} priority sizes="(max-width: 900px) 100vw, 48vw" /></header>

    <section className="section lf-problem"><div><p className="eyebrow">The operating problem</p><h2>Why this work needs a defined handoff.</h2></div><p>{service.problem}</p></section>

    <section className="section lf-two-list" id="scope"><div><p className="eyebrow">Scope</p><h2>Work the role can support</h2><ul>{service.scope.map((item) => <li key={item}>{item}</li>)}</ul></div><div><p className="eyebrow">Inputs</p><h2>What your team provides</h2><ul>{service.inputs.map((item) => <li key={item}>{item}</li>)}</ul></div></section>

    <section className="section lf-workflow" aria-labelledby="workflow-heading"><div className="section-heading"><p className="eyebrow">Workflow</p><h2 id="workflow-heading">A reviewable path from request to handoff.</h2></div><ol>{service.workflow.map((step) => <li key={step.title}><h3>{step.title}</h3><p>{step.detail}</p></li>)}</ol></section>

    <section className="section lf-two-list"><div><p className="eyebrow">Deliverables</p><h2>Outputs you can inspect</h2><ul>{service.deliverables.map((item) => <li key={item}>{item}</li>)}</ul></div><div><p className="eyebrow">Quality controls</p><h2>Checks that support review</h2><ul>{service.qualityControls.map((item) => <li key={item}>{item}</li>)}</ul></div></section>

    <section className="section lf-boundary"><div className="section-heading"><p className="eyebrow">Boundaries and human decisions</p><h2>Capability includes knowing when to stop.</h2></div><div className="lf-boundary-list">{service.boundaries.map((item) => <p key={item}>{item}</p>)}</div></section>

    <section className="section lf-examples"><div className="section-heading"><p className="eyebrow">Examples</p><h2>What this can look like in practice.</h2></div><div className="lf-example-grid">{service.examples.map((example) => <article key={example.title}><h3>{example.title}</h3><p>{example.detail}</p></article>)}</div></section>

    <section className="section lf-faq"><div><p className="eyebrow">Frequently asked questions</p><h2>Clarify the role before work begins.</h2></div><div>{service.faqs.map((faq) => <details key={faq.q}><summary>{faq.q}</summary><p>{faq.a}</p></details>)}</div></section>

    <section className="section lf-related"><div className="section-heading"><p className="eyebrow">Related services</p><h2>Connect adjacent workflows carefully.</h2></div><div className="lf-example-grid">{related.map((item) => <Link className="content-card" href={`/services/${item.slug}`} key={item.slug}><h3>{item.name}</h3><p>{item.short}</p><span className="text-link">View service <ArrowIcon /></span></Link>)}</div><Link className="quiet-link" href="/services">Compare all services</Link></section>

    <section className="closing"><p className="eyebrow">Bring one real workflow</p><h2>Define the first handoff before adding more scope.</h2><p>Use a free consultation to discuss the source, output, review owner, access needs, and exception path for this role.</p><Link id={`cta-services-${service.slug}-consultation`} className="button primary" href="/contact-us">Plan a free consultation <ArrowIcon /></Link></section>
  </main>;
}
