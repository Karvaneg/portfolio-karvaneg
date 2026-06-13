import type { Metadata } from 'next';
import { profile } from '@/content/profile';
import { siteUrl } from '@/app/lib/site-url';

const siteName = `${profile.name} · ${profile.brand}`;
const defaultTitle = `${profile.name} — ${profile.roleLong}`;
const defaultDescription =
  "Portfolio éditorial de Marie Le Carvennec, développeuse fullstack & AI-augmented engineer. Deux éditions — carnet d'esquisses et carnet technique — et un playbook d'ingénierie augmentée par l'IA.";

/** Métadonnées racine (défauts + assets globaux). Les surfaces utilisent `buildMetadata`. */
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: defaultTitle,
  description: defaultDescription,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName,
    title: defaultTitle,
    description: defaultDescription,
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
  },
  // Favicons gérés par les fichiers app/icon.svg, app/apple-icon.png et
  // app/manifest.ts (conventions Next.js) — pas de balises manuelles.
  robots: { index: true, follow: true },
};

interface BuildMetadataOptions {
  /** Titre complet et auto-suffisant de la page. */
  title: string;
  description: string;
  /** Chemin canonique relatif, ex. '/esquisses'. */
  path: string;
}

/**
 * Métadonnées d'une surface : titre, description, canonical et OpenGraph/Twitter
 * cohérents. L'image OG est injectée automatiquement par les fichiers
 * `opengraph-image.tsx` de chaque route (next/og).
 */
export function buildMetadata({ title, description, path }: BuildMetadataOptions): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: 'fr_FR',
      siteName,
      url: path,
      title,
      description,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}
