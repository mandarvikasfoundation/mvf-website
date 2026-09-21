import type { MetadataRoute } from 'next';

// Note: the old MVF website is still live on this domain right now;
// this one takes over once it's finished and deployed.
const BASE_URL = 'https://mandarvikasfoundation.com';

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
