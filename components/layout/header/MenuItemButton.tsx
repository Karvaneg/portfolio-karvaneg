import { MenuItemButtonProps } from "@/types/header"
import { dsTokens } from "@/design-system/tokens"

export function MenuItemButton({
  item,
  activeSection,
  onClick,
  className = "",
  role,
  ariaCurrent,
}: MenuItemButtonProps) {
  const baseClass = "transition-colors hover:text-primary"
  const activeClass = activeSection === item.id ? dsTokens.color.primary : dsTokens.color.onSurface

  return (
    <button
      key={item.id}
      onClick={onClick}
      className={`${baseClass} ${activeClass} ${className}`}
      role={role}
      aria-current={ariaCurrent ? "page" : undefined}
    >
      {item.label}
    </button>
  )
}