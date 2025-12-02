import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'Real results from engineering consulting engagements. See how we have helped companies improve performance, modernize systems, and scale effectively.',
};

const caseStudies = [
  {
    title: 'E-Commerce Platform Performance Overhaul',
    summary:
      'Reduced page load times by 60% and improved Core Web Vitals scores from failing to passing across all metrics.',
    problem:
      'A mid-size e-commerce company was losing conversions due to slow page loads and poor mobile performance.',
    solution:
      'Implemented server-side rendering, optimized images, reduced JavaScript bundle size, and introduced edge caching.',
    impact: [
      '60% reduction in page load time',
      'Core Web Vitals: All metrics passing',
      '15% increase in conversion rate',
      '25% reduction in bounce rate',
    ],
    techStack: ['Next.js', 'Vercel', 'Cloudflare', 'PostgreSQL'],
    engagement: 'Fixed-scope engagement over 8 weeks',
  },
  {
    title: 'Legacy React to Next.js Migration',
    summary:
      'Migrated a 200+ component React SPA to Next.js App Router with zero downtime and improved developer velocity.',
    problem:
      'A SaaS company needed to improve SEO and performance but was stuck on an aging Create React App codebase.',
    solution:
      'Planned and executed an incremental migration strategy, moving to Next.js while maintaining feature development.',
    impact: [
      'Successful migration of 200+ components',
      '40% improvement in Lighthouse scores',
      'Organic traffic increased 3x in 6 months',
      'Build times reduced by 50%',
    ],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma'],
    engagement: 'Ongoing fractional engagement over 4 months',
  },
  {
    title: 'Multi-Tenant Architecture Design',
    summary:
      'Designed and implemented tenant isolation for a B2B platform serving 500+ enterprise customers.',
    problem:
      'A growing B2B SaaS needed to support enterprise customers with strict data isolation and customization requirements.',
    solution:
      'Architected a multi-tenant system with row-level security, tenant-specific customization, and white-label capabilities.',
    impact: [
      'Successfully onboarded 500+ enterprise tenants',
      'Zero cross-tenant data incidents',
      'Reduced tenant provisioning time from days to minutes',
      'Enabled white-label deployments',
    ],
    techStack: ['Node.js', 'PostgreSQL', 'Redis', 'AWS'],
    engagement: 'Technical leadership engagement over 6 months',
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
