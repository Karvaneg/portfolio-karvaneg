import "./globals.css";
import { ThemeProvider } from "./providers";
import { inter, jetbrainsMono, cinzel } from "@/app/lib/fonts"
import type { metadata } from "@/app/lib/metadata"
import type { viewport } from "@/app/lib/viewport"
import ClientUtilities from "./client-utilities";

export { metadata, viewport };

/* ---------------- Layout ---------------- */

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="fr"
      className={[
        inter.variable,
        jetbrainsMono.variable,
        cinzel.variable,
      ].join(" ")}
    >
      <body className="font-sans antialiased">
        <ThemeProvider>
          {children}
          <ClientUtilities />
        </ThemeProvider>
      </body>
    </html>
  );
}
