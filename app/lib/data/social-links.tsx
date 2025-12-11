import { Github, Mail, Linkedin } from "lucide-react";
import { footerData } from "@/app/lib/data/footer";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
} as const;

export const socialLinks = Object.entries(footerData.social).map(
  ([id, href]) => {
    const Icon = iconMap[id as keyof typeof iconMap];

    return {
      id,
      href: id === "email" ? `mailto:${href}` : href,
      label: id === "email"
        ? "Email"
        : id.charAt(0).toUpperCase() + id.slice(1),
      icon: <Icon className="w-5 h-5" aria-hidden="true" />,
    };
  }
);