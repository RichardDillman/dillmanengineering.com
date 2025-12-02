import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Dillman Engineering to discuss your technical challenges and explore how we can help.',
};

export default function ContactPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Ready to discuss your project? Schedule a free 30-minute
            consultation or send us a message.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-xl">
          {/* Contact Form */}
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-900"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                required
                className="mt-2 block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                className="mt-2 block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
                placeholder="you@company.com"
              />
            </div>

            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-900"
              >
                Company
              </label>
              <input
                type="text"
                name="company"
                id="company"
                autoComplete="organization"
                className="mt-2 block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
                placeholder="Your company (optional)"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-900"
              >
                How can we help?
              </label>
              <textarea
                name="message"
                id="message"
                rows={5}
                required
                className="mt-2 block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
                placeholder="Tell us about your project or challenge..."
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full rounded-md bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
              >
                Send Message
              </button>
            </div>
          </form>

          <div className="mt-12 border-t border-gray-200 pt-12">
            <h2 className="text-center text-lg font-semibold text-gray-900">
              Prefer to schedule directly?
            </h2>
            <p className="mt-2 text-center text-gray-600">
              Book a free 30-minute consultation to discuss your needs.
            </p>
            <div className="mt-6 text-center">
              <a
                href="#"
                className="inline-block rounded-md border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
              >
                Schedule a Call
              </a>
            </div>
          </div>

          <div className="mt-12 text-center text-sm text-gray-500">
            <p>
              You can also reach us directly at{' '}
              <a
                href="mailto:hello@dillmanengineering.com"
                className="text-gray-900"
              >
                hello@dillmanengineering.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
