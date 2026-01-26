'use client';

import dynamic from 'next/dynamic';

const Toaster = dynamic(() => import('sonner').then((m) => m.Toaster), { ssr: false });
const SpeedInsights = dynamic(
  () => import('@vercel/speed-insights/next').then((m) => m.SpeedInsights),
  { ssr: false },
);
const HotjarLoader = dynamic(() => import('./hotjar-loader'), { ssr: false });

export default function ClientUtilities() {
  
  const isVercelProd = process.env.NEXT_PUBLIC_VERCEL_ENV === 'production';

  return (
    <>
      <Toaster />
      {isVercelProd && <SpeedInsights />}
      <HotjarLoader />
    </>
  );
}
