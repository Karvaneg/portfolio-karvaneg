export interface PlaybookEntry {
  /** Numéro affiché, ex. '001'. */
  num: string;
  slug: string;
  /** Titre canonique = H1 de l'entrée MDX (atrium + index + pager affichent le même). */
  title: string;
  status: 'live' | 'soon';
  /** Catégorie éditoriale, ex. 'Setup'. */
  category: string;
  /** Temps de lecture estimé, ex. '~8 min de lecture'. */
  readingTime: string;
  /** Résumé 1–2 lignes (index /playbook + meta description). */
  summary: string;
  /** Mots-clés affichés dans l'en-tête de l'article (le 1er est mis en accent). */
  tags: string[];
}
