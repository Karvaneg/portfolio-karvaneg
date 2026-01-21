'use client';

import { toast } from 'sonner';
import { uiMessages, type UiMessageKey, getUiMessage } from '@/app/lib/constants/ui-messages';

interface CopyOptions {
  action?: UiMessageKey;
}

export function useCopyToClipboard() {
  const copy = async (value: string, options?: CopyOptions): Promise<boolean> => {
    const action: UiMessageKey = options?.action ?? 'copy';

    try {
      await navigator.clipboard.writeText(value);

      toast.success(getUiMessage('success', action), { duration: uiMessages.meta.successDuration });

      return true;
    } catch {
      toast.error(getUiMessage('error', action), { duration: uiMessages.meta.errorDuration });

      return false;
    }
  };

  return { copy };
}
