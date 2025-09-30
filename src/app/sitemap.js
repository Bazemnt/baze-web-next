export default function sitemap() {
  // Base URL for the site
  const baseUrl = 'https://bazement.xyz';

  // Define all the routes for the sitemap
  const routes = [
    '',
    '/services/ai-chatbots-customer-service-agents',
    '/services/workflow-automation',
    '/services/ai-powered-marketing-automation',
    '/services/ai-data-analytics-dashboards',
    '/services/custom-ai-integrations',
    '/services/intelligent-document-processing',
    '/services/ai-powered-customer-insights',
    '/services/ai-driven-process-optimization',
    '/services/ai-training-custom-model-development',
    '/services',
    '/about',
    '/pricing',
    '/portfolio',
    '/ease-of-communication-standard',
    '/terms',
    '/privacy',
  ];

  // Create the sitemap entries
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changefreq: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}