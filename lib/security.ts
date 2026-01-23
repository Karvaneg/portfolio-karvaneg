export const CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://t.contentsquare.net https://script.hotjar.com https://static.hotjar.com https://vars.hotjar.com https://vitals.vercel-insights.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data: https:",
  "connect-src 'self' https://t.contentsquare.net https://script.hotjar.com https://static.hotjar.com https://vars.hotjar.com https://api.hotjar.com https://*.hotjar.com https://vitals.vercel-insights.com",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "form-action 'self'",
].join('; ');
