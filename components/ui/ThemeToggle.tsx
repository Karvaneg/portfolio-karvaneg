"use client";

"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { dsTokens } from "@/design-system/tokens";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  if (!resolvedTheme) return null; // SSR-safe

  return (
    <button
      type="button"
      aria-label="Changer le thème"
      aria-pressed={resolvedTheme === "dark"}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className={cn(
        "inline-flex items-center justify-center transition-colors mt-2 ml-8",
        dsTokens.size.iconLg,
        dsTokens.radius.md,
        dsTokens.interaction.hoverTextPrimary,
      )}
    >
      {resolvedTheme === "dark" ? (
        <Sun className={dsTokens.size.iconMd} />
      ) : (
        <Moon className={dsTokens.size.iconMd} />
      )}
    </button>
  );
}

