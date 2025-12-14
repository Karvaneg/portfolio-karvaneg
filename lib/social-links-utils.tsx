import * as icons from "lucide-react";
import { dsTokens } from "@/design-system/tokens";
import { socialData } from "@/app/lib/data/social-links";
import { SocialLink } from "@/types/ui";

const iconNameMap: Record<string, string> = {
  email: 'Mail',
};

export function getSocialLinks(iconClassName = dsTokens.size.iconMd): SocialLink[] {
  return Object.entries(socialData).map(
    ([id, href]) => {
      const iconName = iconNameMap[id] || id.charAt(0).toUpperCase() + id.slice(1);
      const Icon = (icons[iconName as keyof typeof icons] || icons.ExternalLink) as React.ComponentType<{ className?: string; 'aria-hidden'?: boolean }>;

      return {
        id,
        href: id === "email" ? `mailto:${href}` : href,
        label: id === "email"
          ? "M'envoyer un email"
          : "Voir mon profil " + id.charAt(0).toUpperCase() + id.slice(1),
        icon: <Icon className={iconClassName} aria-hidden={true} />,
      };
    }
  );
}