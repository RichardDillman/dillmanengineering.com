import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'Real results from engineering engagements. See how we have helped companies improve performance, modernize systems, and scale effectively.',
};

const caseStudies = [
  {
    title: 'Legacy Platform Migration to Next.js/TypeScript',
    summary:
      'Reduced build times from 45+ minutes to 75 seconds while completing a full migration from Python/Tornado/CoffeeScript to modern stack.',
    problem:
      'Legacy Python/Tornado/CoffeeScript platform with 45+ minute build times was blocking rapid iteration, making deployments risky, and limiting engineering velocity. Technical debt had accumulated over years, creating maintenance burden and slowing feature development.',
    solution:
      'Led complete migration to Next.js/TypeScript/SCSS stack. Incrementally decomposed monolithic services into microservices, established modern CI/CD pipelines, implemented comprehensive testing, and standardized development practices across teams.',
    impact: [
      'Build times: 45+ min to 75 sec',
      'Multiple daily deployments enabled',
      'Reduced production incidents',
      'Accelerated feature delivery',
    ],
    techStack: ['Next.js', 'TypeScript', 'React', 'Node.js', 'AWS', 'Docker', 'CircleCI'],
    engagement: 'Technical leadership over 2+ years',
  },
  {
    title: 'Multi-Tenant White-Label Job Search Platform',
    summary:
      'Architected B2B SaaS platform enabling partners to launch branded job search sites, projecting $153K-$230K annual revenue per tenant.',
    problem:
      'Company wanted to expand revenue beyond consumer platform by enabling partners to leverage job search technology. Required building scalable multi-tenant architecture that could handle custom branding, domains, and configuration while maintaining single codebase.',
    solution:
      'Architected white-label platform with tenant isolation, dynamic configuration, custom domain mapping, and brand theming. Built admin tooling for tenant provisioning and management. Designed data isolation strategy ensuring security and performance across tenants.',
    impact: [
      '$153K-$230K projected annual revenue per tenant',
      'Partner launch time: months to days',
      'Zero cross-tenant data incidents',
      'Unlimited tenants with minimal overhead',
    ],
    techStack: ['Next.js', 'TypeScript', 'React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
    engagement: 'Architecture and leadership engagement',
  },
  {
    title: 'SEO Architecture Overhaul - 10x Traffic Increase',
    summary:
      'Implemented JSON-LD structured data and replaced infinite scroll with pagination, driving 10x organic traffic growth and +74K monthly SEO visits.',
    problem:
      'Infinite scroll prevented Google from discovering and indexing deep job listings. Job listings and articles not appearing in Google rich results. Search engines struggled to understand content structure, limiting visibility in competitive market.',
    solution:
      'Implemented comprehensive JSON-LD structured data across all content types (JobPosting, Article, Organization). Redesigned search UX from infinite scroll to paginated results with proper SEO implementation (canonical URLs, rel=prev/next, XML sitemaps).',
    impact: [
      '10x increase in organic SEO traffic',
      '+74K monthly SEO visits',
      'Job listings in Google rich results',
      'Reduced dependency on paid acquisition',
    ],
    techStack: ['Next.js', 'JSON-LD', 'Schema.org', 'Server-Side Rendering'],
    engagement: 'Fixed-scope SEO architecture engagement',
  },
  {
    title: 'Core Web Vitals & Performance Optimization',
    summary:
      'Achieved all-green Lighthouse scores (Performance 91, Accessibility 100, SEO 96) through comprehensive performance refactoring.',
    problem:
      'Core Web Vitals scores in red/orange range hurt SEO rankings and conversion rates. LCP, FID, and CLS metrics failed Google thresholds, directly impacting search visibility and user experience.',
    solution:
      'Implemented comprehensive Web Vitals optimization: image optimization with next/image, font loading optimization, code splitting, lazy loading, server-side rendering improvements, and third-party script optimization. Established monitoring and performance budgets.',
    impact: [
      'Performance: 62 to 91 (+29)',
      'Accessibility: 96 to 100',
      'SEO: 89 to 96',
      '90%+ green Core Web Vitals sitewide',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Lighthouse', 'Web Vitals'],
    engagement: 'Performance optimization engagement',
  },
  {
    title: 'Global Ad Platform for 30+ Premium Publications',
    summary:
      'Increased ad viewability from 45% to 85% across Vogue, The New Yorker, Wired, GQ, and 25+ other brands serving 229M+ monthly users.',
    problem:
      'Legacy ad platform across premium publications had poor viewability (45%), slow render times, and inconsistent implementation. Every millisecond of latency impacted global revenue across 229M+ monthly users and 1B+ monthly video views.',
    solution:
      'Architected and implemented unified ad platform serving all brands. Removed jQuery dependencies, optimized bundle size, implemented lazy loading and viewability tracking. Created shared UI tooling and plugin architecture. Standardized testing achieving 80%+ coverage.',
    impact: [
      'Ad viewability: 45% to 85%',
      '229M+ monthly users served',
      '1B+ monthly video views',
      '80%+ test coverage achieved',
    ],
    techStack: ['JavaScript', 'React', 'Node.js', 'Google Ad Manager', 'Prebid', 'AWS'],
    engagement: 'Senior engineering role over 3+ years',
  },
  {
    title: 'Two-Paned Job Search UX Redesign',
    summary:
      'Increased job applications 50% by redesigning search experience to two-pane layout enabling inline browsing without page navigation.',
    problem:
      'Job seekers had to click into separate pages to view job details, then use back button to return to search results. This multi-tab workflow created friction, interrupted browsing flow, and reduced application conversion.',
    solution:
      'Revamped job search UX to two-pane layout allowing jobseekers to browse listings and view details in same tab. Implemented inline navigation that updates URL for SEO while maintaining smooth UX. Created new indexable URLs for each job view state.',
    impact: [
      '+50% job applications per user',
      'New indexable job detail URLs',
      'Maintained search context while browsing',
      'Improved user satisfaction',
    ],
    techStack: ['React.js', 'Next.js', 'TypeScript', 'SEO'],
    engagement: 'Product engineering leadership',
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Case Studies
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Real results from real engagements. See how we have helped companies
            solve complex engineering challenges.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="space-y-16">
            {caseStudies.map((study) => (
              <article
                key={study.title}
                className="rounded-lg border border-gray-200 p-8"
              >
                <h2 className="text-2xl font-bold text-gray-900">
                  {study.title}
                </h2>
                <p className="mt-2 text-lg text-gray-600">{study.summary}</p>

                <div className="mt-8 grid gap-8 md:grid-cols-2">
                  <div>
                    <h3 className="font-semibold text-gray-900">Problem</h3>
                    <p className="mt-2 text-sm text-gray-600">{study.problem}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Solution</h3>
                    <p className="mt-2 text-sm text-gray-600">
                      {study.solution}
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="font-semibold text-gray-900">Impact</h3>
                  <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                    {study.impact.map((item) => (
                      <li
                        key={item}
                        className="flex items-start text-sm text-gray-600"
                      >
                        <span className="mr-2 text-green-600">&#10003;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-wrap gap-8 border-t border-gray-100 pt-6">
                  <div>
                    <h3 className="text-xs font-semibold uppercase text-gray-500">
                      Tech Stack
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {study.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase text-gray-500">
                      Engagement
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">
                      {study.engagement}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600">
            Have a similar challenge?{' '}
            <Link href="/contact" className="font-semibold text-gray-900">
              Let&apos;s talk about it.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
