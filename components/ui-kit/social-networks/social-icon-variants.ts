import { dsTokens } from '@/design-system/tokens';
import { cn } from '@/lib/utils';

export type SocialIconVariant = 'hero' | 'footer';

export const getSocialIconVariantConfig = (variant: SocialIconVariant) => {
  switch (variant) {
    case 'hero':
      return {
        wrapper: cn(dsTokens.color.textSecondary, 'hover:text-foreground'),
        icon: dsTokens.size.iconLg,
      };

    case 'footer':
      return {
        wrapper: cn(
          dsTokens.space.sm,
          dsTokens.radius.md,
          dsTokens.color.surface,
          dsTokens.color.textSecondary,
          dsTokens.interaction.hoverSurface,
          dsTokens.interaction.hoverTextPrimary,
          'transition-colors',
          'flex items-center justify-center',
        ),
        icon: dsTokens.size.iconMd,
      };
  }
};
