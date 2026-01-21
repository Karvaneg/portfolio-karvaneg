'use client';

import dynamic from 'next/dynamic';

export const ThemeProvider = dynamic(
  () => import('./theme-provider').then((m) => m.ThemeProviderClient),
  { ssr: false },
);
