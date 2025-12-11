import { SocialIconButton } from "./SocialIconButton";
import { socialLinks } from "@/app/lib/data/social-links";

export function SocialLinksGroup() {
  return (
    <nav className="flex items-center gap-4" aria-label="Liens réseaux sociaux">
      {socialLinks.map(link => (
        <SocialIconButton 
          key={link.id}
          href={link.href}
          label={link.label}
          icon={link.icon}
        />
      ))}
    </nav>
  );
}
