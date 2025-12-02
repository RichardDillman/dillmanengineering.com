import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Process',
  description:
    'How we work with clients from initial consultation through delivery. Our engagement process is designed for clarity, efficiency, and measurable results.',
};

const steps = [
  {
    number: '01',
    title: 'Discovery Call',
    description:
      'We start with a free 30-minute consultation to understand your challenges, goals, and timeline. No sales pressure, just a conversation about whether we are a good fit.',
    details: [
      'Discuss your current technical landscape',
      'Identify key challenges and constraints',
      'Explore potential approaches',
      'Determine if there is a mutual fit',
    ],
  },
  {
    number: '02',
    title: 'Proposal & Scope',
    description:
      'Based on our conversation, we prepare a clear proposal outlining the engagement scope, deliverables, timeline, and investment. No surprises, no hidden fees.',
    details: [
      'Detailed scope of work',
      'Clear deliverables and milestones',
      'Fixed or time-based pricing options',
      'Expected timeline and dependencies',
    ],
  },
  {
    number: '03',
    title: 'Kickoff & Planning',
    description:
      'Once we agree on scope, we hit the ground running. We establish communication channels, access requirements, and a detailed execution plan.',
    details: [
      'Set up collaboration tools and access',
      'Create detailed project plan',
      'Establish check-in cadence',
      'Identify risks and mitigation strategies',
    ],
  },
  {
    number: '04',
    title: 'Execution',
    description:
      'We work in focused sprints with regular communication. You will have full visibility into progress through weekly updates and access to work-in-progress.',
    details: [
      'Weekly progress updates',
      'Transparent work tracking',
      'Regular check-ins and demos',
      'Iterative feedback incorporation',
    ],
  },
  {
    number: '05',
    title: 'Delivery & Handoff',
    description:
      'We deliver completed work with documentation and knowledge transfer. Our goal is to leave your team better equipped to maintain and extend what we built.',
    details: [
      'Comprehensive documentation',
      'Code review and knowledge transfer',
      'Team training if needed',
      'Post-delivery support period',
    ],
  },
];

const engagementTypes = [
  {
    title: 'Fixed-Scope Projects',
    description:
      'Best for well-defined initiatives with clear deliverables. We agree on scope and price upfront.',
    examples: 'Performance audits, migrations, specific feature builds',
  },
  {
    title: 'Fractional Engagement',
    description:
      'Ongoing technical leadership on a part-time basis. Typically 2-3 days per week.',
    examples:
      'Interim CTO, architecture oversight, team mentorship',
  },
  {
    title: 'Advisory Retainer',
    description:
      'Lightweight ongoing access for technical guidance and decision support.',
    examples: 'Architecture reviews, vendor evaluation, strategic planning',
  },
];

export default function ProcessPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            How We Work
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our process is designed for clarity and efficiency. We believe in
            transparent communication, measurable outcomes, and leaving teams
            better than we found them.
          </p>
        </div>

        {/* Process Steps */}
        <div className="mx-auto mt-16 max-w-3xl">
          <div className="space-y-12">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-6">
                <div className="flex-shrink-0">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-sm font-bold text-white">
                    {step.number}
                  </span>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    {step.title}
                  </h2>
                  <p className="mt-2 text-gray-600">{step.description}</p>
                  <ul className="mt-4 space-y-1">
                    {step.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start text-sm text-gray-600"
                      >
                        <span className="mr-2 text-gray-400">&bull;</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Engagement Types */}
        <div className="mx-auto mt-24 max-w-4xl">
          <h2 className="text-center text-2xl font-bold text-gray-900">
            Engagement Models
          </h2>
          <p className="mt-4 text-center text-gray-600">
            We offer flexible engagement structures to match your needs.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {engagementTypes.map((type) => (
              <div
                key={type.title}
                className="rounded-lg border border-gray-200 p-6"
              >
                <h3 className="font-semibold text-gray-900">{type.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{type.description}</p>
                <p className="mt-4 text-xs text-gray-500">
                  <span className="font-medium">Examples:</span> {type.examples}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="rounded-md bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800"
          >
            Start the Conversation
          </Link>
        </div>
      </div>
    </div>
  );
}
