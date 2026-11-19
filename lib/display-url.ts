/** URL lisible pour un lien affiché : sans protocole ni slash final. */
export const displayUrl = (url: string): string =>
  url.replace(/^https?:\/\//, '').replace(/\/$/, '');
