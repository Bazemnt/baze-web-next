'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from '@/styles/component-css/Features.module.css'

export default function Features() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  const features = [
    {
      icon: 'bi-globe',
      title: 'AI Chatbots & Customer Service Agents',
      description: 'We design and deploy intelligent AI chat agents that operate 24/7 across websites, WhatsApp, Facebook Messenger, and Slack. These agents can handle FAQs, bookings, lead qualification, and order tracking, giving your business a reliable digital assistant that improves customer experiences while reducing support costs.',
      color: 'primary',
      learnMore: '/services/ai-chatbots-customer-service-agents'
    },
    {
      icon: 'bi-phone',
      title: 'AI Workflow Automation',
      description: 'We streamline repetitive and time-consuming tasks with automation tools like Zapier, Make.com, and custom-built integrations. From auto-sending invoices and syncing leads to generating reports and managing workflows, our solutions free up your team’s time and eliminate manual errors so you can focus on growth.',
      color: 'secondary',
      learnMore: '/services/workflow-automation'
    },
    {
      icon: 'bi-palette',
      title: 'AI-Powered Marketing Automation',
      description: 'We help businesses scale their marketing with AI-driven content creation, scheduling, and optimization. Our solutions automate posting, run A/B testing, and score leads to improve campaign effectiveness. With AI handling the heavy lifting, you can consistently deliver the right message to the right audience at the right time.',
      color: 'accent-purple',
      learnMore: '/services/ai-powered-marketing-automation'
    },
    {
      icon: 'bi-lightbulb',
      title: 'AI Data & Analytics Dashboards',
      description: 'We build powerful dashboards that bring all your key data into one place. By pulling from Google Ads, Shopify, HubSpot, Stripe, and more, our AI dashboards provide real-time analytics and predictive insights. Business owners get clear, actionable intelligence without juggling multiple platforms.',
      color: 'secondary',
      learnMore: '/services/ai-data-analytics-dashboards'
    },
    {
      icon: 'bi-cpu',
      title: 'Custom AI Integrations',
      description: 'We integrate advanced AI capabilities directly into your applications, websites, and tools. Whether it’s adding a property summarizer for real estate, building an AI-driven recommendation engine, or automating document generation, our integrations are tailored to your workflows and designed to scale with your business.',
      color: 'accent-teal',
      learnMore: '/services/custom-ai-integrations'
    },
    {
      icon: 'bi-brush',
      title: 'Intelligent Document Processing',
      description: 'We use AI to automate the processing, organization, and extraction of data from documents, invoices, contracts, and forms. This eliminates manual data entry, reduces errors, and accelerates document-heavy workflows, giving your business speed, accuracy, and compliance at scale.',
      color: 'accent-purple',
      learnMore: '/services/intelligent-document-processing'
    },
    {
      icon: 'bi-shield-lock',
      title: 'AI-Powered Customer Insights',
      description: 'We create AI tools that analyze customer interactions, feedback, and behavior across channels. From sentiment analysis to personalized recommendations, our solutions help you understand your customers better, improve satisfaction, and increase retention while uncovering opportunities for upselling and growth.',
      color: 'accent-teal',
      learnMore: '/services/ai-powered-customer-insights'
    },
    {
      icon: 'bi-code-slash',
      title: 'AI-Driven Process Optimization',
      description: 'We use AI to review and enhance business operations, workflows, and resource management. From predictive maintenance and supply chain efficiency to scheduling and planning, our solutions cut costs, improve productivity, and ensure your processes are running at peak performance.',
      color: 'accent-pink',
      learnMore: '/services/ai-driven-process-optimization'
    },
    {
      icon: 'bi-gear',
      title: 'AI Training & Custom Model Development',
      description: 'We build and train custom AI models based on your business data and objectives. From dataset preparation and fine-tuning to deployment and maintenance, we provide end-to-end AI development services, giving you unique models that deliver accurate, business-specific results.',
      color: 'accent-yellow',
      learnMore: '/services/ai-training-custom-model-development'
    }
  ]

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  const headingVariants = {
    hidden: {
      opacity: 0,
      y: -20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.2
      }
    }
  }

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4
      }
    }
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  return (
    <section
      className={styles.featuresSection}
      id="features"
      ref={sectionRef}
    >
      <div className={styles.backgroundElements}>
        <div className={styles.backgroundGradient}></div>
        <div className={styles.backgroundGrid}></div>
        <div className={styles.backgroundDots}></div>
      </div>

      <motion.div
        className="container"
        variants={sectionVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div
          className={styles.sectionHeading}
          variants={headingVariants}
        >
          <span className={styles.sectionLabel}>What We Do</span>
          <h2 className={styles.gradientText}>Our Services</h2>
          <p className={styles.subtitle}>
            Empowering businesses with intelligent automation, AI agents, and custom integrations to save time, boost efficiency, and scale smarter.
          </p>
        </motion.div>

        <motion.div
          className={styles.featuresGrid}
          variants={gridVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`${styles.featureCard} ${styles[feature.color]}`}
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <div className={styles.cardContent}>
                <div className={styles.iconWrapper}>
                  <i className={`bi ${feature.icon} ${styles.featureIcon}`}></i>
                </div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
                {feature.learnMore && (
                  <div className={styles.cardFooter}>
                    <a className={styles.learnMore} href={feature.learnMore}>
                      Learn more <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                )}
              </div>
              <div className={styles.cardGlow}></div>
              <div className={styles.cardBorder}></div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className={styles.ctaContainer}
          variants={headingVariants}
        >
          <a href="https://413na5.share-na2.hsforms.com/2ZjOEvs8fTpaJN-nqHm4duw" className={styles.ctaButton}>
            <span>Discuss Your Project</span>
            <i className="bi bi-arrow-right"></i>
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}