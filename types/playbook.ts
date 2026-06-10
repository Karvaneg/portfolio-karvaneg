export interface PlaybookEntry {
  /** Numéro affiché, ex. '001'. */
  num: string;
  slug: string;
  title: string;
  status: 'live' | 'soon';
}
