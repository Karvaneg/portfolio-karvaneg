import { dsTokens } from "@/design-system/tokens";
import { cn } from "@/lib/utils";

export type SocialIconVariant = "hero" | "footer";

export const getSocialIconVariantConfig = (
  variant: SocialIconVariant
) => {
  switch (variant) {
    case "hero":
      return {
        wrapper: cn(
          dsTokens.color.onSurface,
          "hover:text-foreground",
        ),
        icon: dsTokens.size.iconLg,
      };

    case "footer":
      return {
        wrapper: cn(
            dsTokens.space.sm,
            dsTokens.radius.md,
            dsTokens.color.surface,
            dsTokens.color.onSurface,
            dsTokens.color.surfaceHover,
            dsTokens.color.primaryHover,
            "transition-colors",
            "flex items-center justify-center"
        ),
        icon: dsTokens.size.iconMd,
      };
  }
};
