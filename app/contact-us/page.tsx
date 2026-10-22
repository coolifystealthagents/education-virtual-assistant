import type { Metadata } from 'next';
import Image from 'next/image';
import { LeadForm } from '@/components/LeadForm';
import { ReviewMarquee } from '@/components/ReviewMarquee';
import { site } from '@/lib/site';
import './contact.css';

export const metadata: Metadata = {
  title: 'Contact Us | Education Virtual Assistant Consultation',
  description: 'Talk with Education Virtual Assistant about learner records, course administration, scheduling, family communication, resource libraries, and reporting preparation.',
  alternates: { canonical: '/contact-us' }
};

const scope = [
  'Learner records',
  'Course administration',
  'Scheduling support',
  'Family communication',
  'Resource libraries',
  'Reporting preparation'
];

export default function ContactPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: `Contact ${site.name}`,
    url: `https://${site.domain}/contact-us`,
    description: 'Education virtual assistant consultation.'
  };

  return (
    <main id="main-content" tabIndex={-1} className="contact-page">
      <section className="contact-first-fold" aria-labelledby="contact-title">
        <div className="contact-intro">
          <p className="eyebrow">Contact Us</p>
          <h1 id="contact-title">Build more room for teaching.</h1>
          <p className="contact-lede">Tell us which recurring education workflows need a clear owner. We will help define practical support while your team keeps instructional judgment and learner responsibility.</p>
          <ul className="scope-labels" aria-label="Education support scope">
            {scope.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <div className="review-heading">
            <p className="eyebrow">Approved StealthAgents reviews</p>
            <p>Hover or focus a review to pause.</p>
          </div>
          <ReviewMarquee />
        </div>

        <div className="contact-form-card">
          <p className="eyebrow">Free consultation</p>
          <h2>Tell us about your support needs.</h2>
          <p>Do not include credentials or sensitive learner information.</p>
          <LeadForm source="contact-page-consultation" />
        </div>
      </section>

      <section className="official-team" aria-labelledby="official-team-title">
        <div className="official-team-photo">
          <Image src="/images/site/stealth-agents-team-bacolod.jpg" alt="StealthAgents team members in the Bacolod office" fill sizes="(max-width: 800px) 100vw, 55vw" />
          <span>Official team, Bacolod</span>
        </div>
        <div className="official-team-copy">
          <Image className="official-logo" src="/images/site/stealth-agents-logo-black.png" alt="StealthAgents official logo" width={420} height={100} />
          <p className="eyebrow">Powered by StealthAgents</p>
          <h2 id="official-team-title">A real team behind your remote support.</h2>
          <p>Education Virtual Assistant is a subsidiary of StealthAgents. The official team in Bacolod supports careful matching, onboarding, management, and ongoing quality review so your organization can add capacity around documented workflows and clear accountability.</p>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </main>
  );
}
