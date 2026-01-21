export const uiMessages = {
  success: {
    copy: 'Contenu copié avec succès ✓',
    'copy-email': 'Email copié avec succès ✓. Vous pouvez maintenant me contacter 😊',
    'copy-link': 'Lien copié dans le presse-papier.',
  },

  error: {
    copy: 'Impossible de copier le contenu.',
    'copy-email': 'Impossible de copier l’email.',
    'copy-link': 'Impossible de copier le lien.',
  },

  info: {
    copy: 'ℹ️ Le contenu est déjà dans le presse-papier.',
    'copy-email': 'L’email est déjà dans le presse-papier.',
    'copy-link': 'Le lien est déjà dans le presse-papier.',
  },

  meta: {
    successDuration: 2500,
    errorDuration: 4000,
    infoDuration: 3000,
  },
} as const;

// -----------------------------------
// Typage strict basé sur l'objet lui-même
// -----------------------------------

export type UiMessageCategory = keyof typeof uiMessages;
// "success" | "error" | "info" | "meta"

export type UiMessageKey = keyof typeof uiMessages.success;
// "copy" | "copy-email" | "copy-link"

// Fonction utilitaire sécurisée
export function getUiMessage(
  category: Exclude<UiMessageCategory, 'meta'>, // exclut meta qui n’est pas un message affichable
  key: UiMessageKey,
) {
  return uiMessages[category][key];
}
