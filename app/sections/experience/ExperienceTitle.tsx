import { SectionSubTitle } from "@/components/ui/SectionSubTitle"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

interface ExperienceTitleProps {
  title: string
  company: string
  link: string | null
}

export function ExperienceTitle({ title, company, link }: ExperienceTitleProps) {
  return (
    <div>
        <SectionSubTitle className="group-hover:text-primary transition-colors">
        {title} · {company}
        {link && (
            <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block ml-2 align-middle"
            >
            <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
        )}
        </SectionSubTitle>
    </div>
  )
}