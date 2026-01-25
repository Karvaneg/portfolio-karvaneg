// Domaines autorisés pour les scripts externes
const TRUSTED_SCRIPT_DOMAINS = [
  'https://t.contentsquare.net',
  'https://script.hotjar.com',
  'https://static.hotjar.com',
  'https://vars.hotjar.com',
  'https://vitals.vercel-insights.com',
  'https://va.vercel-scripts.com',
];

const TRUSTED_CONNECT_DOMAINS = [
  'https://t.contentsquare.net',
  'https://c.ba.contentsquare.net',
  'https://tcvsapi.contentsquare.com',
  'https://k.ba.contentsquare.net',
  'https://script.hotjar.com',
  'https://static.hotjar.com',
  'https://vars.hotjar.com',
  'https://api.hotjar.com',
  'https://*.hotjar.com',
  'https://vitals.vercel-insights.com',
  'https://va.vercel-scripts.com',
];

export const CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline' 'unsafe-eval' ${TRUSTED_SCRIPT_DOMAINS.join(' ')}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data: https:",
  `connect-src 'self' ${TRUSTED_CONNECT_DOMAINS.join(' ')}`,
  "worker-src 'self' blob:",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "form-action 'self'",
].join('; ');
