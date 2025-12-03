import type { Metadata } from 'next';
import { ContactForm } from '@/components/contact-form';

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
          <ContactForm />

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
              <a href="mailto:rdillman@gmail.com" className="text-gray-900">
                rdillman@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
