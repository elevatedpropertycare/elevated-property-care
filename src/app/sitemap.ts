import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://elevatedpropertycare.com';
  const lastModified = new Date();

  const routes = [
    '',
    '/about',
    '/faq',
    '/contact',
    '/annual-estimate',
    '/privacy-policy',
    '/services/property-reviews',
    '/services/preventative-maintenance',
    '/services/landscaping-care',
    '/services/pool-and-spa-care',
    '/services/handyman-and-repairs',
    '/services/concierge',
    '/locations/rehoboth-beach',
    '/locations/bethany-beach',
    '/locations/lewes',
    '/locations/fenwick-island',
    '/resources',
    '/resources/why-weekly-property-checks-are-non-negotiable',
    '/resources/winterizing-delaware-beach-homes',
    '/resources/protecting-coastal-hvac-systems',
  ];

  return routes.map((route) => ({
    url: baseUrl + route,
    lastModified,
    changeFrequency: route.includes('/resources') ? 'monthly' : 'weekly',
    priority: route === '' ? 1.0 : route.includes('/locations') || route.includes('/services') ? 0.8 : 0.6,
  }));
}
