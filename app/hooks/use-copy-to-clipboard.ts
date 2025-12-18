'use client'

import { toast } from "sonner"
import { uiMessages, type UiAction } from "@/app/lib/ui-messages"

interface CopyOptions {
  action?: UiAction
}

export function useCopyToClipboard() {
  const copy = async (
    value: string,
    options?: CopyOptions
  ): Promise<boolean> => {
    const action: UiAction = options?.action ?? "copy"

    try {
      await navigator.clipboard.writeText(value)

      toast.success(
        uiMessages.success[action],
        { duration: uiMessages.meta.successDuration }
      )

      return true
    } catch {
      toast.error(
        uiMessages.error[action],
        { duration: uiMessages.meta.errorDuration }
      )

      return false
    }
  }

  return { copy }
}
