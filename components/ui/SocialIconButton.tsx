import { dsTokens } from "@/design-system/tokens";
import { SocialIconButtonProps } from "@/types/ui";
import Link from "next/link";

export function SocialIconButton({ href, label, icon, className }: SocialIconButtonProps) {
  const defaultClasses = [
    dsTokens.space.sm,
    dsTokens.radius.md,
    dsTokens.color.surface,
    dsTokens.color.onSurface,
    dsTokens.color.surfaceHover,
    dsTokens.color.primaryHover,
    "transition-colors",
    "flex items-center justify-center"
  ].join(" ");

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={className || defaultClasses}
    >
      <span className={dsTokens.size.iconMd} aria-hidden="true">
        {icon}
      </span>
    </Link>
  );
}
