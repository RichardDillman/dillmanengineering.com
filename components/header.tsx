import Link from 'next/link';

const navigation = [
  { name: 'Services', href: '/services' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Process', href: '/process' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Global">
        <div className="flex h-16 items-center justify-between">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="text-xl font-semibold text-gray-900">
                Dillman Engineering
              </span>
            </Link>
          </div>

          {/* Mobile menu using details/summary (no JS needed) */}
          <details className="lg:hidden group">
            <summary className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon - shown when closed */}
              <svg
                className="h-6 w-6 group-open:hidden"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              {/* X icon - shown when open */}
              <svg
                className="h-6 w-6 hidden group-open:block"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </summary>
            <div className="absolute left-0 right-0 top-16 bg-white border-b border-gray-200 z-50">
              <div className="space-y-1 px-6 pb-3 pt-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block py-2 text-base font-medium text-gray-700 hover:text-gray-900"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="mt-4 block rounded-md bg-gray-900 px-4 py-2 text-center text-sm font-medium text-white hover:bg-gray-800"
                >
                  Book a Call
                </Link>
              </div>
            </div>
          </details>

          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              href="/contact"
              className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
