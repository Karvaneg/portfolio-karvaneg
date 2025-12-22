import { menuItems } from "@/app/lib/data/navigation"
import { MenuItemButton } from "./menu-item-button"
import { MenuItemsListProps } from "@/types/header"

export function MenuItemsList({ activeSection, onMenuClick, itemClassName, role }: MenuItemsListProps) {
  return (
    <>
      {menuItems.map((item) => (
        <MenuItemButton
          key={item.id}
          item={item}
          activeSection={activeSection}
          onClick={() => onMenuClick(item.id)}
          className={itemClassName}
          role={role}
          ariaCurrent
        />
      ))}
    </>
  )
}