import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Dillman Engineering is a boutique engineering consultancy focused on helping technology companies build better systems and ship faster.',
};

const values = [
  {
    title: 'Outcome-Focused',
    description:
      'We measure success by the results we deliver, not the hours we bill. Every engagement is oriented toward measurable business impact.',
  },
  {
    title: 'Transparent Communication',
    description:
      'No jargon, no hand-waving. We communicate clearly about progress, challenges, and trade-offs so you can make informed decisions.',
  },
  {
    title: 'Knowledge Transfer',
    description:
      'We aim to leave your team stronger than we found it. Documentation, mentorship, and skill-building are built into every engagement.',
  },
  {
    title: 'Technical Excellence',
    description:
      'We stay current with modern best practices and bring that expertise to every project. No outdated patterns or unnecessary complexity.',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            About Dillman Engineering
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We are a boutique engineering consultancy helping technology
            companies build better systems and ship faster.
          </p>
        </div>

        {/* Mission */}
        <div className="mx-auto mt-16 max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
          <p className="mt-4 text-lg text-gray-600">
            Too many companies struggle with slow systems, technical debt, and
            the challenge of scaling their engineering capabilities. We exist to
            bring senior-level engineering expertise to teams that need it,
            when they need it, without the overhead of full-time hires.
          </p>
          <p className="mt-4 text-lg text-gray-600">
            Whether you need to optimize performance, modernize a legacy
            codebase, or bring in technical leadership during a critical growth
            phase, we provide the focused expertise to get it done right.
          </p>
        </div>

        {/* Values */}
        <div className="mx-auto mt-16 max-w-4xl">
          <h2 className="text-center text-2xl font-bold text-gray-900">
            How We Work
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {values.map((value) => (
              <div key={value.title}>
                <h3 className="font-semibold text-gray-900">{value.title}</h3>
                <p className="mt-2 text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise */}
        <div className="mx-auto mt-16 max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900">Areas of Expertise</h2>
          <div className="mt-6 space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900">Frontend & Performance</h3>
              <p className="mt-1 text-gray-600">
                React, Next.js, TypeScript, Core Web Vitals optimization, modern
                frontend architecture.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Backend & Infrastructure</h3>
              <p className="mt-1 text-gray-600">
                Node.js, PostgreSQL, Redis, AWS, serverless architectures,
                multi-tenant systems.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Technical Leadership</h3>
              <p className="mt-1 text-gray-600">
                Architecture design, team mentorship, engineering process
                improvement, technical strategy.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600">
            Ready to work together?{' '}
            <Link href="/contact" className="font-semibold text-gray-900">
              Get in touch.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
