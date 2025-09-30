'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import styles from '@/styles/component-css/PageStyles.module.css'

export default function AIMarketingAutomationPage() {
  useEffect(() => {
    document.title = 'Bazement — AI-Powered Marketing Automation'
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } }
  }

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 } }
  }

  return (
    <main>
      <section className={styles.pageWrapper}>
        <Breadcrumbs />
        <div className={styles.backgroundGradient}></div>

        <motion.div
          className={styles.container}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className={styles.pageContent} variants={contentVariants}>
            <h1 className={styles.pageHeading}>AI-Powered Marketing Automation</h1>
            <div className={styles.badge}>Smarter Campaigns, Faster Execution</div>
            <div className={styles.textContent}>
              <p>
                At Bazement, we understand that effective marketing requires precision, creativity, and scalability. Many businesses struggle with slow campaign rollouts, inconsistent brand messaging, and inefficient budget allocation. That’s why we deliver bespoke AI-driven marketing automation solutions that streamline workflows, improve targeting, and maximize ROI.
              </p>

              <h2>Why Choose Bazement for AI Marketing Automation</h2>
              <p>
                Bazement treats marketing automation as both a technology implementation and a strategic business driver. Our solutions integrate seamlessly into your existing marketing stack, enabling you to execute campaigns with unmatched efficiency and precision.
              </p>

              <h2>Our Approach</h2>
              <ol>
                <li><strong>Marketing Needs Assessment:</strong> Analyze workflows, campaign goals, KPIs, and pain points to align automation with your strategy.</li>
                <li><strong>Data Collection & Integration:</strong> Connect your CRM, social platforms, email tools, and analytics systems.</li>
                <li><strong>AI Campaign Engine Development:</strong> Build dynamic content generation, scheduling, and optimization systems.</li>
                <li><strong>Testing & Optimization:</strong> Use A/B testing and predictive analytics for continual improvement.</li>
                <li><strong>Monitoring & Reporting:</strong> Deliver dashboards and insights for real-time decision-making.</li>
              </ol>

              <h2>Technology Stack</h2>
              <ul>
                <li>OpenAI GPT Models for AI-generated content</li>
                <li>Canva API & Adobe Creative Cloud for automated visual content</li>
                <li>HubSpot, Marketo & ActiveCampaign APIs for CRM & email automation</li>
                <li>Google Analytics & Meta Ads API for campaign tracking</li>
                <li>Python & Node.js for backend integration</li>
                <li>Zapier & Make.com for workflow automation</li>
                <li>TensorFlow & PyTorch for predictive modeling</li>
              </ul>

              <h2>Benefits of Choosing Bazement</h2>
              <ul>
                <li>Scalable content creation without overloading teams</li>
                <li>Hyper-personalized campaigns via AI-driven segmentation</li>
                <li>Improved lead conversion through AI-powered scoring</li>
                <li>Faster time-to-market for campaigns</li>
                <li>Higher ROI through optimized spend</li>
                <li>Competitive advantage with real-time trend adaptation</li>
              </ul>

              <h2>Case Example</h2>
              <p><strong>Client:</strong> Mid-size eCommerce Company</p>
              <p><strong>Problem:</strong> Slow campaign rollouts and inconsistent messaging.</p>
              <p><strong>Solution:</strong> AI-driven content generation, automated posting schedules, and predictive segmentation.</p>
              <p><strong>Outcome:</strong> 70% reduction in campaign creation time and 35% higher engagement rates.</p>

              <h2>Next Step</h2>
              <p>
                Contact Bazement to discover how AI-powered marketing automation can revolutionize your campaigns and deliver measurable ROI.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}