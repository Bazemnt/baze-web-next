'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import styles from '@/styles/component-css/PageStyles.module.css'

export default function WorkflowAutomationPage() {
  useEffect(() => {
    document.title = 'Bazement — Workflow Automation Services'
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
            <h1 className={styles.pageHeading}>Workflow Automation</h1>
            <div className={styles.badge}>Streamline & Automate Your Operations</div>
            <div className={styles.textContent}>
              <p>
                Unleash operational efficiency by automating repetitive business processes, freeing your team to focus on high-value work.
              </p>

              <h2>What We Deliver</h2>
              <p>
                We build and optimize automation pipelines that connect your apps, systems, and workflows into a seamless ecosystem. Whether it’s finance, sales, marketing, or operations, Bazement ensures your business runs smoother with fewer manual interventions.
              </p>

              <ul>
                <li>Auto-sending invoices upon payment receipt (Stripe, PayPal, bank feeds)</li>
                <li>Syncing leads from LinkedIn → CRM → Automated email campaigns</li>
                <li>Auto-generating weekly/monthly reports from ERP, HRM, Analytics systems</li>
                <li>Automated employee onboarding (offer letters, account creation, permissions)</li>
                <li>Customer feedback loops (post-purchase surveys, NPS syncing)</li>
              </ul>

              <h2>Why Choose Bazement as Your Automation Agency</h2>
              <ul>
                <li>Expert orchestration — robust workflows designed to scale and handle exceptions.</li>
                <li>Custom engineering — API-first connectors and serverless microservices for advanced needs.</li>
                <li>Enterprise reliability — monitoring, retries, logging, and alerts for flawless operation.</li>
                <li>ROI-driven approach — automation built to hit KPIs, not vanity metrics.</li>
                <li>Future-proof design — modular workflows that scale with your business.</li>
              </ul>

              <h2>Our Approach</h2>
              <ol>
                <li><strong>Process Audit & Mapping:</strong> Identify bottlenecks through stakeholder interviews (Week 1).</li>
                <li><strong>Automation Design & Architecture:</strong> Define triggers, actions, conditions, and failovers; select tools (Week 2).</li>
                <li><strong>Prototype & Validation:</strong> Proof-of-concept testing with real inputs (Week 3).</li>
                <li><strong>Full Implementation:</strong> Connect systems, deploy workflows, document automation (Weeks 4–6).</li>
                <li><strong>Monitoring & Optimization:</strong> Continuous improvements, dashboards, SLA alerts.</li>
              </ol>

              <h2>Technology We Use</h2>
              <ul>
                <li>No-code/Low-code: Zapier, Make.com (Integromat), n8n</li>
                <li>Custom Integrations: Python/FastAPI, Node.js, serverless triggers (AWS Lambda, Google Cloud Functions)</li>
                <li>Datastores: PostgreSQL, MongoDB</li>
                <li>APIs: REST, GraphQL, Webhooks, Kafka, Pub/Sub</li>
                <li>Monitoring: Sentry, Prometheus, Grafana</li>
              </ul>

              <h2>Benefits for Your Company</h2>
              <ul>
                <li>Save significant time — hours of manual work eliminated weekly.</li>
                <li>Reduce errors — consistent workflows with zero missed steps.</li>
                <li>Increase operational efficiency — faster cycle times and fewer delays.</li>
                <li>Scalability — automation grows with your business without extra headcount.</li>
                <li>Cross-department synergy — unified workflows across teams and systems.</li>
              </ul>

              <h2>Case Example</h2>
              <p><strong>Client:</strong> AlphaCommerce (E-commerce brand)</p>
              <p><strong>Problem:</strong> Manual order updates and payment reconciliations causing delays and errors.</p>
              <p><strong>Solution:</strong> Make.com + Shopify + Xero integration for automated invoices, shipment sync, and customer updates.</p>
              <p><strong>Outcome:</strong> 30+ hours saved monthly, 90% fewer reconciliation errors, improved customer satisfaction with real-time updates.</p>

              <h2>Next Step</h2>
              <p>
                Stop wasting valuable hours on repetitive tasks. Contact Bazement to book a discovery call and see how much time (and cost) we can save your business.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}