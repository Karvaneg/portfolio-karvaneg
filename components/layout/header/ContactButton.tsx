import { Button } from "@/components/ui/button"
import { ContactButtonProps } from "@/types/header"

export function ContactButton({ onClick, className = "" }: ContactButtonProps) {
  return (
    <Button size="sm" onClick={onClick} className={className}>
      Me contacter
    </Button>
  )
}