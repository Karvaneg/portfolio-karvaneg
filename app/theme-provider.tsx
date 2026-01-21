'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';

export function ThemeProviderClient({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
