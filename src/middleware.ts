import { defineMiddleware } from 'astro:middleware';

// Basic browser security headers on every page the site renders.
const SECURITY_HEADERS: Record<string, string> = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'SAMEORIGIN',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
};

export const onRequest = defineMiddleware(async (_context, next) => {
  const response = await next();
  for (const [name, value] of Object.entries(SECURITY_HEADERS)) {
    try {
      response.headers.set(name, value);
    } catch {
      // Some responses (e.g. redirects) have read-only headers; skip those.
    }
  }
  return response;
});
