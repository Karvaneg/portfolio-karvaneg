export interface Experience {
  period: string
  title: string
  company: string
  description: string
  technologies: readonly string[]
  link: string | null
}

export const experiences: readonly Experience[] = [
  {
    period: "Août 2023 — Août 2025",
    title: "Développeuse Fullstack",
    company: "Conservatoire Botanique National Sud-Atlantique",
    description:
      "Développement de portails thématiques et refonte du site institutionnel. Conception et intégration d'interfaces web responsives, mise en œuvre des standards WCAG, optimisation SEO et performances. Conception et optimisation de bases de données PostgreSQL/PostGIS, développement PHP front et back, intégration d'API tierces. Rédaction de cahiers des charges techniques, tests fonctionnels et unitaires, documentation technique.",
    technologies: ["Symfony", "Twig", "PostgreSQL", "PostGIS", "Docker", "Sass", "PHP", "API REST"],
    link: "https://cbnsa.fr/",
  },
  {
    period: "Mars 2022 — Novembre 2022",
    title: "Développeuse Web en Formation",
    company: "OpenClassrooms",
    description:
      "Formation intensive en développement web avec réalisation de 6 projets professionnalisants couvrant l'ensemble du stack : HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, et API REST. Validation de la certification professionnelle Développeur Intégrateur Web (Niveau 5) avec tous les projets validés au premier passage.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "JavaScript", "HTML5", "CSS3"],
    link: "https://github.com/Karvaneg",
  },
  {
    period: "Mai 2018 — Janvier 2021",
    title: "Responsable Production",
    company: "Beephone",
    description:
      "Responsable d'une équipe de 3 personnes dans le reconditionnement d'iPhone. Réalisation de diagnostics, réparations et tests, gestion des stocks en pièces détachées, respect des procédures qualité, service après-vente technique et gestion RH (absences, congés, fiches horaires).",
    technologies: ["Gestion d'équipe", "Qualité", "SAV"],
    link: null,
  },
] as const
