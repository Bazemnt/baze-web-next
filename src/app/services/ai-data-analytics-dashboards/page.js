'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import styles from '@/styles/component-css/PageStyles.module.css'

export default function AIDataDashboardsPage() {
  useEffect(() => {
    document.title = 'Bazement — AI Data & Analytics Dashboards'
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
            <h1 className={styles.pageHeading}>AI Data & Analytics Dashboards</h1>
            <div className={styles.badge}>From Data Overload to Intelligent Clarity</div>
            <div className={styles.textContent}>
              <p>
                In today’s data-driven economy, companies are overwhelmed with fragmented information spread across tools like Google Ads, Shopify, HubSpot, and Stripe. Bazement helps unify all your critical data into a single, intelligent dashboard—equipped with predictive analytics and AI-generated insights—so your leadership team can make faster, smarter, and more profitable decisions.
              </p>

              <h2>Why Choose Bazement as Your Automation Agency?</h2>
              <p>
                At Bazement, we believe that data without intelligence is noise. Many agencies can build dashboards, but few understand how to harness AI to deliver actionable, real-time insights. We don’t just give you charts—we give you foresight. Our dashboards are built to scale, customizable to your KPIs, and optimized for clarity, speed, and executive-level decision-making.
              </p>

              <h2>Our Approach</h2>
              <ol>
                <li><strong>Discovery & Audit:</strong> Understand your data ecosystem, identify gaps, and map integration needs.</li>
                <li><strong>Data Integration Layer:</strong> Connect APIs from Shopify, HubSpot, Google Ads, Stripe into a unified pipeline.</li>
                <li><strong>AI Modeling:</strong> Apply predictive analytics to forecast sales, churn risk, and customer lifetime value.</li>
                <li><strong>Custom Dashboards:</strong> Design visual dashboards tailored to your KPIs for real-time decision-making.</li>
                <li><strong>Continuous Optimization:</strong> Monitor accuracy, improve models, and refine dashboards over time.</li>
              </ol>

              <h2>Technologies We Use</h2>
              <ul>
                <li>PostgreSQL, BigQuery, Snowflake for data warehousing</li>
                <li>Tableau, Power BI, Superset, React for dashboards</li>
                <li>TensorFlow, scikit-learn, LangChain for AI-driven analytics</li>
                <li>Apache Airflow, Zapier, n8n, REST/GraphQL APIs for data integration</li>
              </ul>

              <h2>Benefits for Your Company</h2>
              <ul>
                <li>Centralized Business Intelligence – unify fragmented data sources.</li>
                <li>Real-Time Decision-Making – dashboards that update instantly.</li>
                <li>Predictive Insights – proactive strategy from AI forecasting.</li>
                <li>Executive Clarity – KPIs clearly visualized for confident decisions.</li>
                <li>Scalability – dashboards that grow with your business.</li>
              </ul>

              <h2>Case Study Example</h2>
              <p><strong>Client:</strong> NovaThreads, an eCommerce brand</p>
              <p><strong>Problem:</strong> Executives wasted hours switching between multiple dashboards, delaying decisions.</p>
              <p><strong>Solution:</strong> Bazement built a unified AI dashboard consolidating sales, ad spend, and customer data with predictive analytics.</p>
              <p><strong>Result:</strong> Decision-making time dropped from days to minutes, and marketing ROI improved by 28% in 3 months.</p>

              <h2>Next Step</h2>
              <p>
                At Bazement, we transform scattered data into actionable intelligence. Contact us today to book your discovery call and let’s give your business clarity, foresight, and control.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}