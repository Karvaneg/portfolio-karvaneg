
import type { ReactElement } from "react";
import { cloneElement } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { SocialIconVariant } from "./social-icon-variants";
import { getSocialIconVariantConfig } from "./social-icon-variants";

export interface SocialIconButtonProps {
  href: string;
  label: string;
  icon: ReactElement<{ className?: string }>
  variant?: SocialIconVariant;
  className?: string;
}

export function SocialIconButton({
  href,
  label,
  icon,
  variant = "hero",
  className,
}: SocialIconButtonProps) {
  const { wrapper, icon: iconSize } =
    getSocialIconVariantConfig(variant);

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(wrapper, className)}
    >
      <span aria-hidden="true">
        {cloneElement(icon, {
          className: cn(icon.props.className, iconSize),
        })}
      </span>
    </Link>
  );
}

