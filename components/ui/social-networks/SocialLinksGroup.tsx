import { SocialIconButton } from "./SocialIconButton";
import { getSocialLinks } from "@/lib/social-links-utils";

export type SocialLinksGroupVariant = "hero" | "footer";

interface SocialLinksGroupProps {
  className?: string
  iconClassName?: string
  variant?: SocialLinksGroupVariant;
}

export function SocialLinksGroup({ className, iconClassName, variant = "hero" }: SocialLinksGroupProps = {}) {
  const socialLinks = getSocialLinks(iconClassName);

  return (
    <nav className="flex items-center gap-4" aria-label="Liens réseaux sociaux">
      {socialLinks.map(link => (
        <SocialIconButton
          key={link.id}
          href={link.href}
          label={link.label}
          icon={link.icon}
          className={className}
          variant={variant}
        />
      ))}
    </nav>
  );
}
