import Link from 'next/link';

const services = [
  {
    title: 'Web Performance Optimization',
    description:
      'Improve Core Web Vitals, reduce bundle sizes, and deliver faster user experiences that drive engagement and conversions.',
  },
  {
    title: 'Next.js Migrations',
    description:
      'Modernize legacy React applications with Next.js App Router, server components, and cutting-edge frontend architecture.',
  },
  {
    title: 'Multi-Tenant SaaS Systems',
    description:
      'Design and build scalable multi-tenant architectures with proper data isolation, customization layers, and operational efficiency.',
  },
  {
    title: 'SEO Architecture',
    description:
      'Implement technical SEO foundations including structured data, metadata strategies, and crawlable site architectures.',
  },
  {
    title: 'Fractional Engineering Leadership',
    description:
      'Provide technical direction, team mentorship, and architectural guidance without the overhead of a full-time executive.',
  },
  {
    title: 'Technical Audits',
    description:
      'Comprehensive assessments of codebases, infrastructure, and processes with actionable modernization roadmaps.',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Engineering Excellence, Delivered
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We help technology companies ship faster, scale smarter, and build
              systems that last. From performance optimization to fractional
              leadership, we bring senior engineering expertise to your most
              critical challenges.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800"
              >
                Book a Consultation
              </Link>
              <Link
                href="/case-studies"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                View Case Studies <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What We Do
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Specialized engineering services for companies that need to move
              fast without breaking things.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-lg bg-white p-8 shadow-sm ring-1 ring-gray-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm text-gray-600">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="text-sm font-semibold text-gray-900"
            >
              Learn more about our services <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to accelerate your engineering?
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Schedule a free consultation to discuss your technical challenges
              and explore how we can help.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100"
              >
                Schedule a Call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
