import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/lib/site';
import { blogPosts } from '@/lib/content';
import { ArrowIcon, CheckIcon, SparkIcon } from './Icons';

const CTA = ({ id, children }: { id: string; children: React.ReactNode }) => <Link id={id} className="button primary" href="/contact-us">{children} <ArrowIcon /></Link>;

function ServiceCards() {
  return <div className="service-grid">{site.services.map((service) => <Link className="service-card reveal" href={`/services/${service.slug}`} key={service.slug}><h3>{service.name}</h3><p>{service.short}</p><span className="text-link">Explore the role <ArrowIcon /></span></Link>)}</div>;
}
function Principles() { return <div className="principles">{site.principles.map((item) => <div key={item}><CheckIcon /><span>{item}</span></div>)}</div>; }
function Latest() { return <div className="article-grid">{blogPosts.slice(0, 3).map((post) => <Link href={`/blog/${post.slug}`} className="article-card" key={post.slug}><span className="pill">{post.category}</span><h3>{post.title}</h3><p>{post.description}</p><span className="text-link">Read the guide <ArrowIcon /></span></Link>)}</div>; }

export function HomePage() {
  return <main id="main-content" tabIndex={-1} className={`home design-${site.design}`}>
    <section className="hero">
      <div className="hero-copy"><p className="eyebrow">{site.eyebrow}</p><h1>{site.hero} <em>{site.heroAccent}</em></h1><p className="hero-body">{site.heroBody}</p><div className="hero-actions"><CTA id="cta-home-hero-bookcall">Book a free consultation</CTA><Link className="quiet-link" href="/services">See specialist roles</Link></div><Principles /></div>
      <div className="hero-visual"><Image src={site.heroImage} alt={site.heroAlt} fill priority sizes="(max-width: 900px) 100vw, 54vw" /><div className="hero-label"><SparkIcon /><span>{site.manifesto}</span></div></div>
    </section>

    <section className="section intro"><p className="eyebrow">Specialist support, shaped around your work</p><div><h2>Build capacity without handing away judgment.</h2><p>{site.manifesto} A useful role is narrower than a general wish list. It has a known queue, reliable source material, a defined output, and someone who owns exceptions.</p><p>That structure helps remote support fit alongside educators and program leaders. It also makes the first workflow easier to teach, inspect, and improve.</p></div></section>

    <section className="section services" aria-labelledby="home-services"><div className="section-heading"><p className="eyebrow">Roles that fit the work</p><h2 id="home-services">Choose the support your team can actually use.</h2><p>Each service page explains the inputs, workflow, deliverables, controls, and decisions that stay with your team.</p></div><ServiceCards /></section>

    <section className="section lf-split"><div><p className="eyebrow">Where to begin</p><h2>Start where delay is visible and judgment is already owned.</h2></div><div className="lf-stack"><article><h3>A queue repeats</h3><p>Requests arrive often enough that a shared intake, status, and completion check would reduce searching and rework.</p></article><article><h3>The source is identifiable</h3><p>The assistant can work from an approved form, calendar, course plan, message guide, library, or export rather than reconstructing intent.</p></article><article><h3>A reviewer is available</h3><p>A named person can resolve exceptions and sample completed work. If nobody owns the outcome, staffing alone will not repair the workflow.</p></article></div></section>

    <section className="section method"><div className="method-art" aria-hidden="true"><span>Input</span><span>Handoff</span><span>Review</span></div><div><p className="eyebrow">A useful working model</p><h2>Define. Delegate. Improve.</h2><p>Start with recurring work that already has an owner, a standard, and a clear escalation path. Then create a small review loop that makes the handoff stronger over time.</p><ol><li><strong>Define the boundary.</strong> Separate preparation and coordination from instructional, licensed, policy, or executive judgment.</li><li><strong>Document the handoff.</strong> Set inputs, output format, review points, access, and exception rules.</li><li><strong>Improve with evidence.</strong> Review a focused sample and update the checklist when patterns emerge.</li></ol><CTA id="cta-home-method-consultation">Plan a free consultation</CTA></div></section>

    <section className="section lf-boundary"><div className="section-heading"><p className="eyebrow">Human decisions stay visible</p><h2>Support prepares the work. Accountable people decide.</h2></div><div className="lf-columns"><div><h3>Suitable for a defined assistant role</h3><ul><li>Organizing approved source material</li><li>Maintaining routine statuses and calendars</li><li>Preparing drafts, checks, and summaries</li><li>Recording evidence and routing exceptions</li></ul></div><div><h3>Retained by your qualified team</h3><ul><li>Curriculum, assessment, and grading choices</li><li>Eligibility, placement, and accommodation decisions</li><li>Safeguarding, clinical, legal, and policy responses</li><li>Approval of sensitive or external reporting</li></ul></div></div><p>Access, privacy, retention, and review requirements come from your organization and the rules that apply to it. A consultation can help shape a role, but it does not replace your legal, compliance, or professional advice.</p></section>

    <section className="section journal"><div className="section-heading"><p className="eyebrow">Field notes</p><h2>Practical guidance for better delegation.</h2></div><Latest /></section>

    <section className="section lf-faq" aria-labelledby="home-faq"><div><p className="eyebrow">Common questions</p><h2 id="home-faq">Before you define the role</h2></div><div>
      <details><summary>Do we need a complete process manual first?</summary><p>No. Begin with one repeatable workflow and the sources your team already trusts. The first role brief can document the intake, output, owner, and exceptions, then improve through review.</p></details>
      <details><summary>Can one assistant cover all six service areas?</summary><p>Possibly, but breadth should follow stability. Start with the work that shares systems and review ownership rather than combining unrelated tasks into a vague role.</p></details>
      <details><summary>How do we decide what not to delegate?</summary><p>Keep work with the qualified owner when it requires instructional judgment, policy interpretation, sensitive discretion, or formal approval. Delegate preparation only when the decision boundary is explicit.</p></details>
      <details><summary>What should we bring to a consultation?</summary><p>Bring one recurring workflow, a few representative inputs, the desired output, and the name of the person who currently resolves exceptions.</p></details>
    </div></section>

    <section className="closing"><p className="eyebrow">Make room for the work only you can do</p><h2>Map your first specialist support role.</h2><p>Use a focused conversation to turn a recurring administrative queue into a bounded, reviewable role brief.</p><CTA id="cta-home-closing-schedulecall">Schedule a free call</CTA></section>
  </main>;
}
