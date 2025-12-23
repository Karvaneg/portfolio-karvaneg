import Image from "next/image"
import { LogoProps } from "@/types/header"
import { cn } from "@/lib/utils"

export function Logo({ scrollToSection }: LogoProps) {
  return (
    <button
        onClick={() => scrollToSection("accueil")}
        className={cn("flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer")}
        aria-label="Retour à l'accueil"
    >
        <Image
        src="/images/logokphotoroomombre.webp"
        alt="Logo KARVANEG"
        width={64}
        height={64}
        className={cn("w-16 h-16")}
        priority
        />
        <span
        className={cn("text-3xl font-bold tracking-widest font-display bg-linear-to-r from-purple-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent animate-gradient")}
        aria-label="KARVANEG"
        >
        KARVANEG
        </span>
    </button>
  )
}