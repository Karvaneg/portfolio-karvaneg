import { MenuItem } from "@/types/data"

export const menuItems: readonly MenuItem[] = [
  { id: "accueil", label: "Accueil" },
  { id: "a-propos", label: "À propos" },
  { id: "experience", label: "Expérience" },
  { id: "projets", label: "Projets" },
  { id: "contact", label: "Contact" },
] as const
