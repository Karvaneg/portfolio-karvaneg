import type { MenuItemButtonProps } from '@/types/header';
import { dsTokens } from '@/design-system/tokens';
import { cn } from '@/lib/utils';

export function MenuItemButton({
  item,
  activeSection,
  onClick,
  className = '',
  role,
  ariaCurrent,
}: MenuItemButtonProps) {
  const baseClass = 'transition-colors hover:text-primary';
  const activeClass =
    activeSection === item.id ? dsTokens.color.primary : dsTokens.color.textSecondary;

  return (
    <button
      type="button"
      key={item.id}
      onClick={onClick}
      className={cn(baseClass, activeClass, className)}
      role={role}
      aria-current={ariaCurrent ? 'page' : undefined}
    >
      {item.label}
    </button>
  );
}
