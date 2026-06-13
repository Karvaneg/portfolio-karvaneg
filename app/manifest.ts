import type { MetadataRoute } from 'next';

/** Manifeste PWA — astérisque rouge sur pastille near-black (#15120d). */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Karvaneg — Marie Le Carvennec',
    short_name: 'Karvaneg',
    icons: [
      { src: '/images/favicon/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/images/favicon/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    theme_color: '#15120d',
    background_color: '#15120d',
    display: 'standalone',
  };
}
