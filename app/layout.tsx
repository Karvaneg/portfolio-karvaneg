import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "./providers";

import { inter, jetbrainsMono, cinzel } from "@/app/lib/fonts"
import { metadata } from "@/app/lib/metadata"
import { viewport } from "@/app/lib/viewport"

export { metadata, viewport };

/* ---------------- Layout ---------------- */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={[
        inter.variable,
        jetbrainsMono.variable,
        cinzel.variable,
      ].join(" ")}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <ThemeProvider>
          {children}
          <Toaster richColors position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}
