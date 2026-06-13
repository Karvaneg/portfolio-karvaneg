import type { NextConfig } from 'next';
import createMDX from '@next/mdx';
import { CONTENT_SECURITY_POLICY } from './lib/security';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // `mdx` reste hors `pageExtensions` : le contenu du Playbook est *importé*
  // (content/playbook/*.mdx via un registre), pas routé par fichier.
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

/** Compile les imports `.mdx` au build (loader natif, aucun impact runtime/CSP). */
const withMDX = createMDX({});

export default withMDX(nextConfig);
