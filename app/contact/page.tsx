'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          company: formData.get('company'),
          message: formData.get('message'),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again or email us directly.');
    }
  }

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
          {status === 'success' ? (
            <div className="rounded-lg bg-green-50 p-8 text-center">
              <h2 className="text-xl font-semibold text-green-800">
                Message Sent
              </h2>
              <p className="mt-2 text-green-700">
                Thanks for reaching out. We will get back to you within 1-2 business days.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-6 text-sm font-medium text-green-800 underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  disabled={status === 'loading'}
                  className="mt-2 block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 disabled:bg-gray-100"
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
                  disabled={status === 'loading'}
                  className="mt-2 block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 disabled:bg-gray-100"
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
                  disabled={status === 'loading'}
                  className="mt-2 block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 disabled:bg-gray-100"
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
                  disabled={status === 'loading'}
                  className="mt-2 block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 disabled:bg-gray-100"
                  placeholder="Tell us about your project or challenge..."
                />
              </div>

              {status === 'error' && (
                <div className="rounded-md bg-red-50 p-4 text-sm text-red-700">
                  {errorMessage}
                </div>
              )}

              <div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full rounded-md bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 disabled:bg-gray-400"
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          )}

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
                href="mailto:rdillman@gmail.com"
                className="text-gray-900"
              >
                rdillman@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
