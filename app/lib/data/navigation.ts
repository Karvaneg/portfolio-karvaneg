import type { MenuItem } from "@/types/header";

export const menuItems: readonly MenuItem[] = [
  { id: "accueil", label: "Accueil" },
  { id: "a-propos", label: "À propos" },
  { id: "competences", label: "Compétences" },
  { id: "experience", label: "Expérience" },
  { id: "projets", label: "Réalisations" },
  { id: "contact", label: "Contact" },
] as const;
