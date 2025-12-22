"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { dsTokens } from "@/design-system/tokens";
import { ariaLabels } from "@/design-system/a11y";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={ariaLabels.toggleTheme(isDark)}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "inline-flex items-center justify-center transition-colors mt-2 ml-8 cursor-pointer",
        dsTokens.size.iconLg,
        dsTokens.radius.md,
        dsTokens.interaction.hoverTextPrimary,
      )}
    >
      {isDark ? (
        <Sun className={dsTokens.size.iconMd} aria-hidden="true" />
      ) : (
        <Moon className={dsTokens.size.iconMd} aria-hidden="true" />
      )}
    </button>
  );
}

