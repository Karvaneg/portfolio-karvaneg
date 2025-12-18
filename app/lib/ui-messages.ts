export type UiAction =
  | "copy"
  | "copy-email"
  | "copy-link"

export const uiMessages = {
  success: {
    copy: "Contenu copié avec succès ✓",
    "copy-email": "Email copié avec succès ✓. Vous pouvez maintenant me contacter 😊",
    "copy-link": "Lien copié dans le presse-papier.",
  },

  error: {
    copy: "Impossible de copier le contenu.",
    "copy-email": "Impossible de copier l’email.",
    "copy-link": "Impossible de copier le lien.",
  },

  info: {
    copy: "ℹ️ Le contenu est déjà dans le presse-papier.",
    "copy-email": "L’email est déjà dans le presse-papier.",
    "copy-link": "Le lien est déjà dans le presse-papier.",
  },

  meta: {
    successDuration: 2500,
    errorDuration: 4000,
    infoDuration: 3000,
  },
} as const