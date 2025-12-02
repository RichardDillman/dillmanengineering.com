import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Engineering consulting services including web performance optimization, Next.js migrations, multi-tenant SaaS architecture, and fractional engineering leadership.',
};

const services = [
  {
    title: 'Web Performance Optimization',
    description:
      'Slow sites lose users and revenue. We diagnose performance bottlenecks and implement targeted optimizations that measurably improve Core Web Vitals scores.',
    details: [
      'Core Web Vitals audits and optimization',
      'Bundle size reduction and code splitting',
      'Image optimization and lazy loading strategies',
      'Server-side rendering and caching improvements',
      'Third-party script management',
    ],
  },
  {
    title: 'Next.js Migrations & Architecture',
    description:
      'Modernize your frontend with Next.js App Router, React Server Components, and patterns that scale. We handle migrations from legacy React, Vue, or other frameworks.',
    details: [
      'Migration planning and risk assessment',
      'Incremental adoption strategies',
      'Server Components architecture',
      'Data fetching and caching patterns',
      'Deployment and infrastructure setup',
    ],
  },
  {
    title: 'Multi-Tenant SaaS Systems',
    description:
      'Build platforms that serve multiple customers securely and efficiently. We design tenant isolation, customization layers, and operational tooling.',
    details: [
      'Data isolation architecture',
      'Tenant provisioning and onboarding',
      'Customization and white-labeling',
      'Usage metering and billing integration',
      'Operational dashboards and tooling',
    ],
  },
  {
    title: 'SEO Architecture & Structured Data',
    description:
      'Technical SEO done right. We implement the foundations that help search engines understand and rank your content effectively.',
    details: [
      'Site structure and URL architecture',
      'LD-JSON structured data implementation',
      'Meta tags and Open Graph optimization',
      'Sitemap and robots.txt configuration',
      'Core Web Vitals for SEO',
    ],
  },
  {
    title: 'Fractional Engineering Leadership',
    description:
      'Senior technical leadership without the full-time commitment. We provide architectural guidance, team mentorship, and strategic direction.',
    details: [
      'Technical strategy and roadmap development',
      'Architecture reviews and decisions',
      'Engineering team mentorship',
      'Hiring and interview process design',
      'Vendor and technology evaluation',
    ],
  },
  {
    title: 'Technical Audits & Assessments',
    description:
      'Comprehensive reviews of your codebase, architecture, and processes. We deliver actionable recommendations with clear priorities.',
    details: [
      'Code quality and maintainability assessment',
      'Security vulnerability review',
      'Performance and scalability analysis',
      'DevOps and deployment pipeline review',
      'Technical debt quantification',
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Services
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We provide specialized engineering services for companies that need
            senior-level expertise without the overhead of full-time hires.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="space-y-16">
            {services.map((service) => (
              <div
                key={service.title}
                className="border-b border-gray-200 pb-16 last:border-0"
              >
                <h2 className="text-2xl font-bold text-gray-900">
                  {service.title}
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-2">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-start">
                      <span className="mr-2 text-gray-400">&bull;</span>
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="rounded-md bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800"
          >
            Discuss Your Project
          </Link>
        </div>
      </div>
    </div>
  );
}
