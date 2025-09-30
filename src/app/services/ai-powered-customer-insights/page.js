'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import styles from '@/styles/component-css/PageStyles.module.css'

export default function AIPoweredCustomerInsightsPage() {
  useEffect(() => {
    document.title = 'Bazement — AI-Powered Customer Insights'
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
            <h1 className={styles.pageHeading}>AI-Powered Customer Insights</h1>
            <div className={styles.badge}>Turn Customer Data into Strategic Advantage</div>
            <div className={styles.textContent}>
              <p>
                Every interaction your customers have with your business—support tickets, purchase history, product feedback, or social engagement—carries hidden value. Yet most companies lack the tools to translate this raw data into actionable insights. At Bazement, we design AI-powered customer intelligence systems that analyze behavior, sentiment, and trends to help you make smarter decisions, personalize experiences, and ultimately drive retention and revenue growth.
              </p>

              <h2>Why Choose Bazement as Your Automation Agency?</h2>
              <p>
                While many agencies offer analytics dashboards, few can transform scattered customer data into predictive intelligence. At Bazement, we don’t just show you what happened—we forecast what’s next. Our expertise combines machine learning, NLP, and behavioral analytics to reveal patterns that human teams would miss. We build systems that are explainable, transparent, and integrated directly into your existing workflows.  
                By working with us, you get more than metrics—you get a strategic advantage fueled by customer-centric AI.
              </p>

              <h2>Our Approach</h2>
              <ol>
                <li><strong>Data Discovery & Consolidation:</strong> Unify customer data from CRMs, chat logs, support tickets, social media, and transaction systems.</li>
                <li><strong>Sentiment & Behavior Analysis:</strong> Use NLP and AI models to analyze tone, sentiment, and recurring patterns in customer interactions.</li>
                <li><strong>Predictive Modeling:</strong> Forecast churn risk, buying probability, and customer lifetime value.</li>
                <li><strong>Personalization Engine:</strong> Use insights to tailor recommendations, marketing campaigns, and customer experiences.</li>
                <li><strong>Continuous Feedback Loop:</strong> Adapt models as customer behavior evolves for sustained accuracy.</li>
              </ol>

              <h2>Technologies We Use</h2>
              <ul>
                <li>Python (pandas, scikit-learn), TensorFlow, PyTorch</li>
                <li>Hugging Face Transformers, spaCy, OpenAI APIs</li>
                <li>Segment, HubSpot, Salesforce integrations</li>
                <li>Power BI, Tableau, custom React dashboards</li>
                <li>Zapier, Make.com, n8n, REST/GraphQL APIs</li>
              </ul>

              <h2>Benefits for Your Company</h2>
              <ul>
                <li>Better Understanding of Customer Needs – Real-time insights from actual customer behavior.</li>
                <li>Increased Satisfaction & Loyalty – Anticipate pain points and address them proactively.</li>
                <li>Retention & Upsell Opportunities – Target high-value customers with tailored offers.</li>
                <li>Data-Driven Decision Making – Replace guesswork with actionable strategies.</li>
                <li>Revenue Growth – Turn insights into sales, loyalty, and stronger relationships.</li>
              </ul>

              <h2>Case Study Example</h2>
              <p><strong>Client:</strong> LuminaTech, a SaaS platform</p>
              <p><strong>Problem:</strong> High churn without insight into underlying causes.</p>
              <p><strong>Solution:</strong> Bazement deployed AI-powered customer insight tools analyzing support tickets, feature usage, and feedback.</p>
              <p><strong>Result:</strong> 35% churn reduction in six months and a 22% increase in upsell revenue.</p>

              <h2>Next Step</h2>
              <p>
                At Bazement, we turn every click, message, and transaction into a story about your customers. With AI-powered insights, you gain the clarity to serve smarter, sell better, and grow faster. Contact us to discuss your customer insight solution.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}