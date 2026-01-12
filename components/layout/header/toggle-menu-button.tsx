import type { ToggleMenuButtonProps } from "@/types/header"
import { Menu, X } from "lucide-react"
import { dsTokens } from "@/design-system/tokens"
import { cn } from "@/lib/utils"

export function ToggleMenuButton({ isOpen, toggleMenu }: ToggleMenuButtonProps) {
  return (
    <button
      onClick={toggleMenu}
      className={cn("md:hidden text-foreground cursor-pointer", dsTokens.space.sm)}
      aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
      aria-expanded={isOpen}
    >
      {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
    </button>
  )
}