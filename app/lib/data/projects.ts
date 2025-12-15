import { Project } from "@/types/data"

export const projects: readonly Project[] = [
  {
    title: "Crazee Burger - Application React Avancée",
    description:
      "Application React développée dans un cadre d'apprentissage orienté entreprise avec mise en situation professionnelle. Architecture avancée, gestion d'état avec Context API, composants réutilisables, hooks avancés et intégration Firebase pour l'authentification et la base de données temps réel.",
    image: "/images/screen-crazee-burger-karvaneg.png",
    hint: "Cliquez sur l'icône ci-dessus pour suivre l'évolution de ce projet",
    technologies: ["React", "Firebase", "Context API", "React Router", "Styled Components"],
    github: "https://github.com/Karvaneg/crazee-burger",
    live: "https://crazee-burger-karvaneg-karvanegs-projects.vercel.app/",
  },
  {
    title: "CBNSA - Site Institutionnel",
    description:
      "Refonte complète du site institutionnel du Conservatoire Botanique National Sud-Atlantique. Développement avec Symfony, intégration d'interfaces responsives, optimisation du référencement SEO, respect des standards WCAG pour l'accessibilité, et gestion de bases de données PostgreSQL/PostGIS.",
    image:
      "/images/screen-cbnsa.png",
    hint: null,
    technologies: ["Symfony", "PHP", "Twig", "PostgreSQL", "PostGIS", "Docker", "Sass"],
    github: null,
    live: "https://cbnsa.fr/",
  },
  {
    title: "Portail Thématique Végétal Sauvage",
    description:
      "Développement d'un portail thématique dédié au végétal sauvage d'origine locale en Nouvelle-Aquitaine. Conception et intégration d'interfaces ergonomiques, mise en œuvre de fonctionnalités avancées de recherche et consultation de données botaniques, optimisation des performances et accessibilité.",
    image: "/images/screen-vsol.png",
    hint: null,
    technologies: ["Symfony", "PHP", "Twig", "PostgreSQL", "JavaScript", "Sass"],
    github: null,
    live: "https://preprod.vsol-na.fr/",
  },
  {
    title: "Groupomania - Réseau Social d'Entreprise",
    description:
      "Réseau social interne développé avec React et Node.js. Authentification JWT, opérations CRUD complètes, gestion des rôles utilisateurs, design responsive et respect des normes d'accessibilité WCAG. Architecture moderne avec MongoDB pour la base de données.",
    image: "/images/screen-groupomania.png",
    hint: null,
    technologies: ["React", "Node.js", "MongoDB", "JWT", "Express"],
    github: "https://github.com/Karvaneg/OC_P7",
    live: null,
  },
  {
    title: "Piiquante - API REST Sécurisée",
    description:
      "API REST sécurisée pour une application d'avis gastronomiques. Authentification JWT, hashage des mots de passe avec bcrypt, contrôle d'accès basé sur les rôles (RBAC), protection avec Helmet, limitation du taux de requêtes et validations Mongoose pour garantir la sécurité des données.",
    image: "/images/screen-piiquante.png",
    hint: null,
    technologies: ["Node.js", "Express", "MongoDB", "TypeScript", "JWT", "Bcrypt"],
    github: "https://github.com/Karvaneg/OC_P6",
    live: null,
  },
  {
    title: "Kanap - Site E-Commerce JavaScript",
    description:
      "Site e-commerce développé en JavaScript vanilla avec gestion du panier, validation de formulaires et intégration d'API REST. Projet démontrant la maîtrise des fondamentaux JavaScript sans framework, avec manipulation du DOM et gestion d'état côté client.",
    image: "/images/screen-kanap.jpg",
    hint: null,
    technologies: ["JavaScript", "HTML5", "CSS3", "API REST"],
    github: "https://github.com/Karvaneg/OC_P5",
    live: null,
  },
] as const
