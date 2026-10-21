import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const root = new URL('../', import.meta.url);
const read = (path) => readFileSync(new URL(path, root), 'utf8');
const siteSource = read('lib/site.ts');
const site = new Function(`${siteSource.replace(/^import[^\n]+\n/, '').replace('export const site: SiteConfig =', 'const site =')}\nreturn site;`)();
const detailPage = read('app/services/[slug]/page.tsx');

const expectedSlugs = [
  'learner-records',
  'course-administration',
  'scheduling-support',
  'family-learner-communication',
  'resource-library-support',
  'reporting-preparation'
];

test('the service model contains exactly the six supported routes', () => {
  assert.deepEqual(site.services.map(({ slug }) => slug), expectedSlugs);
});

for (const service of site.services) {
  test(`${service.slug} has a complete, route-specific operating brief`, () => {
    for (const field of ['audience', 'problem', 'scope', 'inputs', 'workflow', 'deliverables', 'boundaries', 'qualityControls', 'examples', 'faqs', 'relatedServices', 'image']) {
      assert.ok(service[field], `${field} is required`);
    }
    assert.ok(service.audience.length > 55);
    assert.ok(service.problem.length > 120);
    assert.ok(service.scope.length >= 4);
    assert.ok(service.inputs.length >= 4);
    assert.ok(service.workflow.length >= 4);
    assert.ok(service.deliverables.length >= 4);
    assert.ok(service.boundaries.length >= 3);
    assert.ok(service.qualityControls.length >= 4);
    assert.ok(service.examples.length >= 2);
    assert.ok(service.faqs.length >= 3);
    assert.ok(service.relatedServices.length >= 2);
    assert.equal(service.image.width, 1200);
    assert.equal(service.image.height, 630);
    assert.match(service.image.src, /^\/october-12\/.+\.webp$/);
    assert.ok(service.image.alt.length > 45);
    for (const related of service.relatedServices) {
      assert.ok(expectedSlugs.includes(related), `unknown related route ${related}`);
      assert.notEqual(related, service.slug);
    }
  });
}

test('service template renders every depth section and internal path', () => {
  for (const marker of ['service.audience', 'service.problem', 'service.scope.map', 'service.inputs.map', 'service.workflow.map', 'service.deliverables.map', 'service.qualityControls.map', 'service.boundaries.map', 'service.examples.map', 'service.faqs.map', 'service.relatedServices']) {
    assert.ok(detailPage.includes(marker), `missing ${marker}`);
  }
  assert.ok(detailPage.includes('href={`/services/${item.slug}`}'));
  assert.ok(detailPage.includes('href="/services"'));
  assert.ok(detailPage.includes('href="/contact-us"'));
  assert.ok(detailPage.includes('alternates: { canonical: `/services/${service.slug}` }'));
});

test('homepage, services index, and about page meet long-form contracts', () => {
  const home = read('components/Marketing.tsx');
  const services = read('app/services/page.tsx');
  const about = read('app/about/page.tsx');
  for (const marker of ['Where to begin', 'Human decisions stay visible', 'Common questions', 'Roles that fit the work']) assert.ok(home.includes(marker));
  for (const marker of ['Decision support', 'Operating model', 'Boundaries', 'Services FAQ', 'Compare services']) assert.ok(services.includes(marker));
  for (const marker of ['Our point of view', 'What guides the work', 'What remains human', 'What we do not claim']) assert.ok(about.includes(marker));
  assert.ok(home.includes('href="/services"'));
  assert.ok(services.includes('href={`/services/${service.slug}`}'));
  assert.ok(about.includes('href="/services"'));
  assert.ok(about.includes('href="/contact-us"'));
});

test('commercial presentation avoids unsupported selectivity and decorative number labels', () => {
  const commercial = [siteSource, read('components/Marketing.tsx'), read('app/services/page.tsx'), detailPage, read('app/about/page.tsx')].join('\n');
  assert.doesNotMatch(commercial, /top 1 percent/i);
  assert.doesNotMatch(commercial, /service-number|<span>0[123456]<\/span>/);
  assert.doesNotMatch(commercial, /[–—]|--/);
});

test('self canonicals are explicit on primary commercial routes', () => {
  assert.ok(read('app/page.tsx').includes("canonical: '/'"));
  assert.ok(read('app/services/page.tsx').includes("canonical: '/services'"));
  assert.ok(read('app/about/page.tsx').includes("canonical: '/about'"));
});