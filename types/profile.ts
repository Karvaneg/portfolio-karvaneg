export interface SocialLink {
  label: string;
  handle: string;
  url: string;
}

/** Libellés de disponibilité, déclinés par surface. */
export interface Availability {
  available: boolean;
  atrium: string;
  esquisses: string;
  technique: string;
}

export interface Profile {
  name: string;
  brand: string;
  roleShort: string;
  roleLong: string;
  location: string;
  /** Localisation précise (colophon). */
  geo: string;
  editionLabel: string;
  availability: Availability;
  email: string;
  phoneDisplay: string;
  phoneHref: string;
  socials: {
    github: SocialLink;
    linkedin: SocialLink;
    /** Placeholder — URL à fournir. */
    malt?: SocialLink;
  };
  /** Repo open-source mis en avant (carnet technique). */
  openSourceRepo: string;
}
