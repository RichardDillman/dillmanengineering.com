import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: [
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica Neue',
    'Arial',
    'sans-serif',
  ],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  title: {
    default: 'Dillman Engineering | Technical Consulting',
    template: '%s | Dillman Engineering',
  },
  description:
    'Boutique engineering consultancy specializing in web performance, Next.js migrations, multi-tenant SaaS, and fractional engineering leadership.',
  metadataBase: new URL('https://dillmanengineering.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Dillman Engineering',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        {/* DNS prefetch for potential external resources */}
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        {/* Preconnect to Resend for contact form */}
        <link rel="dns-prefetch" href="//api.resend.com" />
      </head>
      <body className="flex min-h-screen flex-col bg-white text-gray-900 antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
