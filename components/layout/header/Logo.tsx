import Image from "next/image"
import { LogoProps } from "@/types/header"

export function Logo({ scrollToSection }: LogoProps) {
  return (
    <button
        onClick={() => scrollToSection("accueil")}
        className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        aria-label="Retour à l'accueil"
    >
        <Image
        src="/images/logokphotoroomombre.webp"
        alt="Logo KARVANEG"
        width={64}
        height={64}
        className="w-16 h-16"
        priority
        />
        <span
        className="text-3xl font-bold tracking-widest font-cinzel bg-linear-to-r from-purple-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent animate-gradient"
        aria-label="KARVANEG"
        >
        KARVANEG
        </span>
    </button>
  )
}