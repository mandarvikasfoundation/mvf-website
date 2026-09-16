import type { MetadataRoute } from 'next';

// TODO: once the site has a real domain (after Vercel deploy), replace
// this placeholder with the actual domain, and update the matching
// Sitemap: line in public/robots.txt to match.
const BASE_URL = 'https://your-real-domain.org';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/mandars-pride',
    '/our-work',
    '/get-involved',
    '/news',
    '/news/independence-day-2026',
    '/gallery',
    '/contact',
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/news' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7,
  }));
}
