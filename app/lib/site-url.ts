/**
 * URL publique du site, normalisée (sans slash final). Source unique pour les
 * metadata, le sitemap et robots.
 *
 * Priorité : `NEXT_PUBLIC_SITE_URL` (prod / Vercel) → `NEXT_LOCAL_SITE_URL` (dev)
 * → URL de prod par défaut. Le défaut garantit qu'aucune route ne plante quand
 * aucune variable n'est définie (ex. build CI sans env).
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.NEXT_LOCAL_SITE_URL ??
  'https://portfolio-karvaneg.vercel.app'
).replace(/\/+$/, '');
