import type { BlogPost, ResearchPost } from './types';

export function headingId(value: string) {
  return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export function formatEditorialDate(value: string) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC'
  }).format(new Date(`${value}T00:00:00Z`));
}

export function editorialImage(post: BlogPost | ResearchPost) {
  return post.image ?? `/editorial/${post.slug}.svg`;
}

export function researchDisplayTitle(post: ResearchPost) {
  if (post.methodology?.length) return post.title;
  const topic = post.title.split(':')[0];
  return `${topic}: operational brief`;
}

export function researchReadTime(post: ResearchPost) {
  const text = [post.summary, post.finding, ...(post.methodology ?? []), ...(post.findings ?? [])].join(' ');
  return `${Math.max(4, Math.ceil(text.split(/\s+/).length / 220))} min read`;
}

export function researchService(post: ResearchPost) {
  const text = `${post.cluster} ${post.title}`.toLowerCase();
  if (text.includes('record') || text.includes('enrollment')) return '/services/learner-records';
  if (text.includes('calendar') || text.includes('schedul')) return '/services/scheduling-support';
  if (text.includes('communication') || text.includes('referral')) return '/services/family-learner-communication';
  if (text.includes('resource') || text.includes('material') || text.includes('content')) return '/services/resource-library-support';
  if (text.includes('report') || text.includes('export')) return '/services/reporting-preparation';
  return '/services/course-administration';
}
