import type { Metadata } from 'next';
import Link from 'next/link';
import { site } from '@/lib/site';
import { ArrowIcon } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Education virtual assistant services',
  description: 'Compare six defined education support roles by workflow, inputs, boundaries, controls, and accountable owner.',
  alternates: { canonical: '/services' }
};

export default function ServicesPage() {
  return <main id="main-content" tabIndex={-1} className="lf-page">
    <header className="page-hero lf-page-hero"><p className="eyebrow">Services</p><h1>Specialist support for education operations.</h1><p>Choose a focused role by the queue you need to improve, not by the longest possible task list. Each service below makes inputs, deliverables, escalation, and human decisions visible.</p><div className="hero-actions"><Link className="button primary" href="/contact-us" id="cta-services-index-hero">Discuss your workflow</Link><a className="quiet-link" href="#compare-services">Compare services</a></div></header>

    <section className="content-wrap lf-index-intro"><div><p className="eyebrow">Decision support</p><h2>Match the service to the source of friction.</h2></div><div><p>Start with learner records when updates are incomplete or hard to trace. Choose course administration when approved content and delivery settings drift apart. Scheduling support fits repeated coordination across calendars and time zones.</p><p>Communication support is useful when routine messages need consistent facts and sensitive questions need reliable routing. Resource library support improves discovery and version status. Reporting preparation gives leaders a traceable review pack without transferring analysis or approval.</p></div></section>

    <section className="content-wrap" id="compare-services" aria-labelledby="services-heading"><div className="section-heading"><p className="eyebrow">Six bounded roles</p><h2 id="services-heading">Inspect the full operating brief.</h2></div><div className="content-grid lf-service-index">{site.services.map((service) => <Link className="content-card" href={`/services/${service.slug}`} key={service.slug}><h3>{service.name}</h3><p>{service.short}</p><p className="lf-card-audience"><strong>Useful for:</strong> {service.audience}</p><span className="text-link">View scope and boundaries <ArrowIcon /></span></Link>)}</div></section>

    <section className="section lf-split"><div><p className="eyebrow">Operating model</p><h2>A role becomes useful when the handoff can be reviewed.</h2></div><div className="lf-stack"><article><h3>Define one queue</h3><p>Name where work enters, which sources are approved, and what complete means. A contained first workflow reveals access and training needs without hiding them inside a broad job description.</p></article><article><h3>Assign decision rights</h3><p>Document what the assistant may prepare, update, send, or publish. Name the person who handles ambiguous, sensitive, and policy dependent work.</p></article><article><h3>Review and expand</h3><p>Sample outputs against a short acceptance checklist. Expand scope only after sources, controls, and escalation work in practice.</p></article></div></section>

    <section className="section lf-boundary"><div className="section-heading"><p className="eyebrow">Boundaries</p><h2>Administrative capacity does not replace professional accountability.</h2></div><div className="lf-columns"><div><h3>Support can prepare</h3><ul><li>Approved updates and course setup</li><li>Routine scheduling and messages</li><li>Resource indexes and source registers</li><li>Exception queues and review packs</li></ul></div><div><h3>Your team retains</h3><ul><li>Teaching, grading, and curriculum decisions</li><li>Eligibility, accommodations, and discipline</li><li>Safeguarding and sensitive support responses</li><li>Interpretation, certification, and external approval</li></ul></div></div><p>Your organization remains responsible for tool access, privacy, retention, professional obligations, and final decisions.</p></section>

    <section className="section lf-faq"><div><p className="eyebrow">Services FAQ</p><h2>Choose a controlled starting point.</h2></div><div><details><summary>Which service should we start with?</summary><p>Choose the recurring queue with the clearest source, output, owner, and exception path. The best first workflow is usually important enough to matter but bounded enough to review.</p></details><details><summary>Can services be combined?</summary><p>Yes, when they share compatible systems and review ownership. Stabilize each workflow before broadening the role.</p></details><details><summary>Do these services include educational decisions?</summary><p>No. Educators and other qualified owners retain instructional, policy, sensitive, and approval decisions.</p></details><details><summary>What determines the tools used?</summary><p>Your current system of record, access controls, source quality, and team conventions shape the tool set. A tool is selected to support the workflow, not define it.</p></details></div></section>

    <section className="closing"><p className="eyebrow">Bring one recurring workflow</p><h2>Turn it into a role your team can manage.</h2><p>We can discuss the queue, source material, desired output, owner, and exceptions in a free consultation.</p><Link className="button primary" href="/contact-us" id="cta-services-index-closing">Plan a consultation <ArrowIcon /></Link></section>
  </main>;
}
