import type { NextConfig } from 'next';
import { CONTENT_SECURITY_POLICY } from './lib/security';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
  poweredByHeader: false,
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        { key: 'Content-Security-Policy', value: CONTENT_SECURITY_POLICY },
      ],
    },
  ],
};

export default nextConfig;
