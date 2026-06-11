/** Contenu narratif « À propos » du carnet d'esquisses (section About + hero-meta). */

/** Bloc de méta du hero (001 — Discipline, etc.). */
export interface HeroMeta {
  /** Numéro + libellé, ex. '001 — Discipline'. */
  label: string;
  /** Phrase ; les segments `emphasis` sont rendus en accent manuscrit. */
  parts: { text: string; emphasis?: boolean }[];
}

/** Citation de recommandation. */
export interface AboutQuote {
  text: string;
  author: string;
  role: string;
}

export interface AboutContent {
  /** Paragraphes « À propos » ; segments `accent` mis en avant. */
  paragraphs: { text: string; accent?: boolean }[][];
  quote: AboutQuote;
  heroMeta: HeroMeta[];
}
