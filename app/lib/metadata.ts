import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  title: {
    default: "Karvaneg – Développeuse Full Stack",
    template: "%s – Karvaneg",
  },
  description:
    "Portfolio professionnel de Karvaneg, développeuse Full Stack spécialisée en React, Next.js, TypeScript et Symfony.",
  metadataBase: 
    siteUrl ? new URL(siteUrl) : undefined,
  openGraph: {
    title: "Karvaneg – Développeuse Full Stack",
    description:
      "Portfolio – React, Next.js, TypeScript, Symfony.",
    url: siteUrl,
    siteName: "Portfolio Karvaneg",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Portfolio de Karvaneg",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Karvaneg – Développeuse Full Stack",
    description:
      "Portfolio – React, Next.js, TypeScript, Symfony.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/images/favicon.ico",
    shortcut: "/images/favicon-16x16.png",
    apple: "/images/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
  },
}