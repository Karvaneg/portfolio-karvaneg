export const dsTokens = {
  color: {
    background: "bg-background",
    surface: "bg-surface",
    surfaceMuted: "bg-surface-muted",
    primarySoft: "bg-primary/10",
    bgPrimary: "bg-primary",

    textPrimary: "text-foreground",
    textSecondary: "text-muted-foreground",

    primary: "text-primary",
    onPrimary: "text-primary-foreground",

    border: "border-border",
    borderBg: "bg-border",
  },

  interaction: {
    hoverTextPrimary: "hover:text-primary",
    hoverSurface: "hover:bg-primary/10",
    focusRing: "focus-visible:ring-ring focus-visible:ring-2",
  },

  space: {
    xxs: "p-0",
    xs: "p-1",
    sm: "p-2",
    md: "p-3",
    lg: "p-4",
    xl: "p-6",
  },

  radius: {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    pill: "rounded-full",
  },

  size: {
    iconSm: "w-4 h-4" as const,
    iconMd: "w-5 h-5" as const,
    iconLg: "w-6 h-6" as const,
  },

  motion: {
    base: "transition-all duration-[var(--transition-normal)] ease-[var(--ease-standard)]",
    fast: "duration-[var(--transition-fast)]",
    slow: "duration-[var(--transition-slow)]",
    fadeIn: "animate-fade-in",
    slideUp: "animate-slide-up",
  },
} as const;
export type IconSize = (typeof dsTokens.size)[keyof typeof dsTokens.size];
