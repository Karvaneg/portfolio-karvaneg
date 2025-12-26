import "./globals.css";
import { ThemeProvider } from "./providers";
import { inter, jetbrainsMono, cinzel } from "@/app/lib/fonts"
import { metadata } from "@/app/lib/metadata"
import { viewport } from "@/app/lib/viewport"
import { Toaster } from "sonner";
import { SpeedInsights } from "@vercel/speed-insights/next"

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
          <Toaster />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
