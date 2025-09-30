import '../styles/globals.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Sora, Inter, Playfair_Display } from 'next/font/google'
import { JetBrains_Mono } from 'next/font/google'
import ChatwootWidget from '@/components/ChatwootWidget'
import ServiceWorkerRegistration from '@/components/ServiceWorkerRegistration'
import Script from 'next/script'
import AnalyticsScripts from '@/components/AnalyticsScripts'
import ClientLayout from '@/components/ClientLayout'

// Optimize font loading with better performance settings
const sora = Sora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sora',
  preload: true,
  fallback: ['system-ui', 'Arial', 'sans-serif'],
  adjustFontFallback: true,
  weight: ['400', '500', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
  fallback: ['system-ui', 'Arial', 'sans-serif'],
  adjustFontFallback: true,
  weight: ['400', '500', '600', '700'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
  preload: true,
  fallback: ['monospace'],
  adjustFontFallback: true,
  weight: ['400', '500'],
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair-display',
  preload: true,
  fallback: ['Georgia', 'Times New Roman', 'serif'],
  adjustFontFallback: true,
  weight: ['400', '500', '600', '700'],
})

export const metadata = {
  title: 'Bazement - AI Automation & Development Agency',
  description:
    'Bazement is an AI automation and development agency specializing in building intelligent chatbots, workflow automation, AI-powered dashboards, process optimization, and custom AI model development for startups and enterprises.',
  metadataBase: new URL('https://bazement.xyz'),
  keywords:
    'AI automation, AI development, AI chatbots, AI workflow automation, AI dashboards, AI process optimization, AI-powered customer insights, AI model development, intelligent automation, business automation, automation agency, custom AI integrations',
  alternates: {
    canonical: 'https://bazement.xyz',
  },
  authors: [{ name: 'Bazement', url: 'https://bazement.xyz' }],
  category: 'AI Development',
  openGraph: {
    title: 'Bazement — AI Automation & Development Agency',
    description:
      'We design and deploy intelligent AI chatbots, automate workflows, build custom AI integrations, and deliver advanced AI-powered solutions that help businesses scale efficiently.',
    images: [
      {
        url: '/static/advert-flat-18-f18-og_1-p-2000.webp',
        width: 1200,
        height: 630,
        alt: 'Bazement - AI Automation & Development Agency',
      },
    ],
    locale: 'en_GB',
    type: 'website',
    site_name: 'Bazement',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bazement — AI Automation & Development Agency',
    description:
      'We design and deploy intelligent AI chatbots, automate workflows, build custom AI integrations, and deliver advanced AI-powered solutions that help businesses scale efficiently.',
    images: ['/static/advert-flat-18-f18-og_1-p-2000.webp'],
    creator: '@tekorakle',
    site: '@tekorakle',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} ${jetbrainsMono.variable} ${playfairDisplay.variable}`}
    >
      <head>
        {/* Favicon */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />

        {/* JSON-LD structured data for organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Bazement',
              url: 'https://bazement.xyz',
              logo: 'https://bazement.xyz/images/flat18_256x256.avif',
              sameAs: ['https://x.com/', 'https://github.com/'],
              description:
                'Bazement is an AI automation and development agency specializing in AI chatbots, workflow automation, AI-powered dashboards, process optimization, and custom AI solutions for businesses worldwide.',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'United Kingdom',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer service',
                url: 'https://bazement.xyz/#chat',
              },
            }),
          }}
        />

        {/* JSON-LD structured data for website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              url: 'https://bazement.xyz',
              name: 'Bazement - AI Automation & Development Agency',
              description:
                'AI automation and development agency specializing in chatbots, intelligent automation, custom AI integrations, and business process optimization.',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://bazement.xyz/search?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
        <ChatwootWidget />
        <ServiceWorkerRegistration />
        <AnalyticsScripts />
      </body>
    </html>
  )
}
