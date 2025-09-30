'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import styles from '@/styles/component-css/PageStyles.module.css'

export default function AIChatbotsPage() {
  useEffect(() => {
    document.title = 'Bazement — AI Chatbots & Customer Service Agents'
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
            <h1 className={styles.pageHeading}>AI Chatbots & Customer Service Agents</h1>
            <div className={styles.badge}>24/7 Intelligent Customer Engagement</div>
            <div className={styles.textContent}>
              <p>
                Deliver 24/7 intelligent customer engagement across web, WhatsApp, Messenger and Slack — so your business never misses a lead and support runs like clockwork.
              </p>

              <h2>What We Deliver</h2>
              <p>
                We design, build, and operate production-grade AI chat agents that handle real customer workflows end-to-end.
              </p>

              <ul>
                <li>Instant answers to FAQs with contextual understanding and memory</li>
                <li>Bookings & reservations (slots, confirmations, calendar sync)</li>
                <li>Lead qualification (score, enrich, route to sales)</li>
                <li>Order tracking & automated shipping/refund workflows</li>
                <li>Human escalation & agent handoff when needed</li>
                <li>Multichannel sync (web widget ↔ WhatsApp ↔ Messenger ↔ Slack)</li>
              </ul>

              <h2>Why Choose Bazement as Your Automation Agency</h2>
              <ul>
                <li>Practical enterprise experience — production-grade chat systems with SLAs, monitoring, and secure integrations.</li>
                <li>Business-first design — flows optimized for fewer tickets, faster closures, and more qualified leads.</li>
                <li>End-to-end ownership — from requirements to model tuning and logging.</li>
                <li>Responsible AI & human-in-the-loop — fallback policies, guardrails, and supervised escalation.</li>
                <li>Fast time-to-value — iterative sprints for rapid ROI.</li>
              </ul>

              <h2>Our Approach</h2>
              <ol>
                <li><strong>Discovery & KPI Definition:</strong> Stakeholder interviews, support ticket analysis, SLA/KPI target setting (1–2 weeks).</li>
                <li><strong>Conversational Design & NLU Modeling:</strong> Intent creation, dialogue flows, style guides (1–3 weeks).</li>
                <li><strong>Prototype & User Testing:</strong> Web/chat demo and sandbox testing (1 week).</li>
                <li><strong>Data Engineering & Integrations:</strong> CRM, e-commerce, ticketing systems, calendar APIs, and knowledge base integration (2–4 weeks).</li>
                <li><strong>Model Ops & Quality Control:</strong> LLM strategy, automated tests, conversational regression checks (ongoing).</li>
                <li><strong>Deployment & Scaling:</strong> Containerized microservices, autoscaling endpoints, websocket/live streaming support.</li>
                <li><strong>Monitoring & Continuous Improvement:</strong> Telemetry dashboards, CSAT tracking, model updates.</li>
              </ol>

              <h2>Technology We Typically Use</h2>
              <ul>
                <li><strong>LLMs & NLP:</strong> OpenAI, Anthropic, Vertex AI</li>
                <li>Embeddings + Vector DBs: Pinecone, Weaviate, Milvus</li>
                <li>LangChain / LlamaIndex for orchestration</li>
                <li><strong>Backend:</strong> Node.js, FastAPI, Python</li>
                <li><strong>Web Framework:</strong> Next.js</li>
                <li><strong>Messaging APIs:</strong> Twilio, Meta Messenger API, Slack API, Intercom</li>
                <li><strong>Datastores:</strong> PostgreSQL, Redis, S3</li>
                <li><strong>Infrastructure:</strong> Docker, Kubernetes</li>
              </ul>

              <h2>Benefits for Your Company</h2>
              <ul>
                <li>Cut support costs — 30–60% reduction in support volume.</li>
                <li>Faster response times — replies in seconds instead of hours.</li>
                <li>Higher lead conversion — up to 35% increase.</li>
                <li>24/7 availability — capture revenue and service requests outside business hours.</li>
                <li>Consistent brand experience — uniform conversational style across channels.</li>
                <li>Actionable intelligence — analytics for product issues and upsell opportunities.</li>
              </ul>

              <h2>Case Example</h2>
              <p><strong>Client:</strong> StellarRetail (e-commerce)</p>
              <p><strong>Problem:</strong> Missed leads and high support tickets (40% “where’s my order”).</p>
              <p><strong>Solution:</strong> WhatsApp + web widget bot integrated with Shopify and lead qualification flows.</p>
              <p><strong>Outcome:</strong> 55% ticket deflection, first reply 30s, 18% increase in upsell conversions.</p>

              <h2>Next Step</h2>
              <p>
                Book a demo or contact us — let Bazement turn your support and sales channels into revenue-generating automation.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}