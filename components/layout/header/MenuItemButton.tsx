import { MenuItemButtonProps } from "@/types/header"

export function MenuItemButton({
  item,
  activeSection,
  onClick,
  className = "",
  role,
  ariaCurrent,
}: MenuItemButtonProps) {
  const baseClass = "transition-colors hover:text-primary"
  const activeClass = activeSection === item.id ? "text-primary" : "text-muted-foreground"

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