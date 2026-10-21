import type { Metadata } from 'next';
import { HomePage } from '@/components/Marketing';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: `${site.name} | Specialist remote staff`,
  description: site.heroBody,
  alternates: { canonical: '/' }
};

export default function Page() { return <HomePage />; }
