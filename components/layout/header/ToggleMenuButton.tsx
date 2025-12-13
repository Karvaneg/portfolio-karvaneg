import { ToggleMenuButtonProps } from "@/types/header"
import { Menu, X } from "lucide-react"

export function ToggleMenuButton({ isOpen, toggleMenu }: ToggleMenuButtonProps) {
  return (
    <button
      onClick={toggleMenu}
      className="md:hidden p-2 text-foreground"
      aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
      aria-expanded={isOpen}
    >
      {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
    </button>
  )
}