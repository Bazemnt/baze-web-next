'use client'

import { useEffect } from 'react'

export default function HomePageSchema() {
  useEffect(() => {
    if (typeof window === 'undefined' || !document) return

    const homePageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Bazement - AI Automation & Development Agency",
      "description": "Bazement helps businesses scale with AI automation, intelligent chatbots, workflow optimization, and custom AI model development.",
      "url": "https://bazement.xyz",
      "isPartOf": {
        "@type": "WebSite",
        "name": "Bazement",
        "url": "https://bazement.xyz"
      },
      "about": {
        "@type": "Organization",
        "name": "Bazement",
        "url": "https://bazement.xyz",
        "logo": "https://bazement.xyz/images/flat18_256x256.avif"
      },
      "mainEntity": {
        "@type": "ProfessionalService",
        "name": "Bazement",
        "image": "https://bazement.xyz/static/advert-flat-18-f18-og_1-p-2000.webp",
        "description": "Bazement provides AI automation, intelligent customer service agents, workflow automation, and advanced analytics for startups and enterprises.",
        "url": "https://bazement.xyz",
        "telephone": "+44-0000-000000",
        "email": "hello@bazement.xyz",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "Lagos, Nigeria"
        },
        "priceRange": "££",
        "openingHours": "Mo,Tu,We,Th,Fr 09:00-17:00",
        "sameAs": [
          "https://x.com/",
          "https://github.com/"
        ],
        "founder": {
          "@type": "Person",
          "name": "Tek Orakle"
        },
        "foundingDate": "2019-01-01",
        "areaServed": "Worldwide",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "AI Automation & Development Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "AI Chatbots & Customer Service Agents",
                "description": "Intelligent AI-powered chatbots and virtual agents for customer support and engagement."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Workflow Automation",
                "description": "Automating repetitive tasks and streamlining business processes with AI."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "AI-Powered Marketing Automation",
                "description": "Targeted, data-driven campaigns powered by AI insights and automation."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "AI Data & Analytics Dashboards",
                "description": "Real-time dashboards that transform raw data into actionable business insights."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom AI Integrations",
                "description": "Integrating AI into existing platforms, CRMs, ERPs, and third-party tools."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Intelligent Document Processing",
                "description": "Automated data extraction, classification, and processing from documents using AI."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "AI-Powered Customer Insights",
                "description": "Understanding customer behaviour and preferences with predictive AI analytics."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "AI-Driven Process Optimization",
                "description": "Boosting efficiency by identifying bottlenecks and optimizing workflows with AI."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "AI Training & Custom Model Development",
                "description": "Building and training custom AI models tailored to specific business needs."
              }
            }
          ]
        }
      }
    }

    try {
      const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]')
      let schemaExists = false

      existingSchemas.forEach(s => {
        try {
          if (s.text && s.text.includes('"@type":"WebPage"')) {
            schemaExists = true
          }
        } catch (err) {
          console.error('Error checking existing schema:', err)
        }
      })

      if (!schemaExists) {
        const script = document.createElement('script')
        script.type = 'application/ld+json'
        script.text = JSON.stringify(homePageSchema)
        script.id = 'homepage-schema'
        document.head.appendChild(script)
      }
    } catch (error) {
      console.error('Error adding schema to page:', error)
    }

    return () => {
      try {
        const script = document.getElementById('homepage-schema')
        if (script) {
          document.head.removeChild(script)
        } else {
          const scripts = document.querySelectorAll('script[type="application/ld+json"]')
          scripts.forEach(s => {
            try {
              if (s.text && s.text.includes('"@type":"WebPage"')) {
                document.head.removeChild(s)
              }
            } catch (err) {
              console.error('Error removing schema:', err)
            }
          })
        }
      } catch (error) {
        console.error('Error cleaning up schema:', error)
      }
    }
  }, [])

  return null
}