import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Compress responses
  compress: true,

  // Optimize production builds
  compiler: {
    // Remove console.log in production (keep errors/warnings)
    removeConsole: process.env.NODE_ENV === 'production'
      ? { exclude: ['error', 'warn'] }
      : false,
  },

  // Enable experimental features for performance
  experimental: {
    // Optimize CSS loading
    optimizeCss: true,
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
