/**
 * Modèle de contenu unifié des projets — SOURCE DE VÉRITÉ UNIQUE.
 * Réunit le narratif (carnet d'esquisses) et le format ticket / étude de cas
 * (carnet technique). Chaque édition pioche les champs dont elle a besoin.
 * Voir docs/refonte-plan.md §1 et le handoff §5.
 */

export type ProjectStatus = 'shipped' | 'in-progress' | 'certified' | 'growing';

export interface ProjectLabel {
  text: string;
  /** Mis en avant avec la couleur d'accent. */
  accent?: boolean;
}

/** Capture d'écran : image + légende + texte alternatif (a11y). */
export interface ProjectShot {
  src: string;
  caption: string;
  alt: string;
}

export interface ProjectFact {
  label: string;
  value: string;
}

export interface ProjectMetric {
  value: string;
  label: string;
  sub?: string;
}

export interface ProjectMetrics {
  label: string;
  note?: string;
  items: ProjectMetric[];
}

export interface CaseStudySection {
  title: string;
  body: string[];
}

/** Étude de cas détaillée (carnet technique · modal CaseStudy). */
export interface ProjectCaseStudy {
  tagline: string;
  facts: ProjectFact[];
  metrics?: ProjectMetrics;
  sections: CaseStudySection[];
}

/** Indices visuels propres au carnet d'esquisses (cartes pivotées, etc.). */
export interface EsquissesVisual {
  /** Rotation de la carte/aperçu, ex. '-3deg'. */
  rotation: string;
  background: string;
  accent: string;
  /** Cadre clair (image sur fond foncé). */
  lightFrame?: boolean;
  caption?: string;
  cardImage: string;
  heroImage: string;
  gallery: string[];
}

export interface Project {
  id: string;
  /** Identifiant ticket affiché côté technique, ex. 'KARV-002'. */
  ticketId: string;
  /** Ordre d'affichage (1 = plus récent), commun aux deux éditions. */
  order: number;
  /** Nom court / canonique (esquisses). */
  title: string;
  /** Titre long (carnet technique). */
  headline: string;
  tagline: string;
  status: ProjectStatus;
  statusLabel: string;
  /** Nuance optionnelle, ex. 'V1 livrée en 20 j · V2 en cours'. */
  statusNote?: string;
  period: string;
  role: string;
  duration?: string;
  website?: string;
  /** Stack affichée côté technique. */
  stack: string[];
  /** Override carnet, uniquement si différent de `stack`. */
  stackEsquisses?: string[];
  labels: ProjectLabel[];
  /** Résumé court (technique). */
  summary: string;
  /** Narratif (esquisses). */
  description: string[];
  /** Impact mesuré (technique). */
  impact: string;
  /** Impact reformulé côté carnet, si différent. */
  impactEsquisses?: string;
  /** Libellé de la ligne méta (technique), ex. 'Focus' ; défaut 'AI Tooling'. */
  metaLabel?: string;
  /** Rôle de l'IA / focus du projet (texte). */
  aiTooling?: string;
  shots: ProjectShot[];
  caseStudy: ProjectCaseStudy;
  esquisses: EsquissesVisual;
}
