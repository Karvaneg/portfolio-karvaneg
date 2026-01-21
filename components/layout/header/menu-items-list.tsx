import { menuItems } from '@/app/lib/data/navigation';
import { MenuItemButton } from './menu-item-button';
import type { MenuItemsListProps } from '@/types/header';
import { cn } from '@/lib/utils';

export function MenuItemsList({
  activeSection,
  onMenuClick,
  itemClassName,
  role,
}: MenuItemsListProps) {
  return (
    <>
      {menuItems.map((item) => (
        <MenuItemButton
          key={item.id}
          item={item}
          activeSection={activeSection}
          onClick={() => onMenuClick(item.id)}
          className={cn('cursor-pointer', itemClassName)}
          role={role}
          ariaCurrent
        />
      ))}
    </>
  );
}
