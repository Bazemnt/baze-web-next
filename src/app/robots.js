export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/static/downloads/',
          '/bootstrap-icons/',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/static/downloads/',
          '/bootstrap-icons/',
        ],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/static/downloads/',
          '/bootstrap-icons/',
        ],
      },
    ],
    sitemap: 'https://bazement.xyz/sitemap.xml',
    host: 'https://bazement.xyz',
  }
}