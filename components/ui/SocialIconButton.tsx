import { dsTokens } from "@/design-system/tokens";
import { SocialIconButtonProps } from "@/types/ui";

export function SocialIconButton({ href, label, icon }: SocialIconButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={[
        dsTokens.space.sm,
        dsTokens.radius.md,
        dsTokens.color.surface,
        dsTokens.color.onSurface,
        dsTokens.color.surfaceHover,
        dsTokens.color.primaryHover,
        "transition-colors",
        "flex items-center justify-center"
      ].join(" ")}
    >
      <span className={dsTokens.size.iconMd} aria-hidden="true">
        {icon}
      </span>
    </a>
  );
}
