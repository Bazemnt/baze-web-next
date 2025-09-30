'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import styles from '@/styles/component-css/PageStyles.module.css'

export default function IntelligentDocumentProcessingPage() {
  useEffect(() => {
    document.title = 'Bazement — Intelligent Document Processing'
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
            <h1 className={styles.pageHeading}>Intelligent Document Processing</h1>
            <div className={styles.badge}>Turn Documents into Actionable Intelligence</div>
            <div className={styles.textContent}>
              <p>
                Paperwork and digital document overload slow down operations, increase costs, and introduce unnecessary risk. From invoices and contracts to forms and compliance documents, businesses spend thousands of hours every year on manual document handling. Bazement solves this by deploying Intelligent Document Processing (IDP) powered by AI, transforming unstructured files into usable, structured data—quickly, accurately, and at scale.
              </p>

              <h2>Why Choose Bazement as Your Automation Agency?</h2>
              <p>
                Most automation providers stop at basic OCR (Optical Character Recognition). At Bazement, we go beyond mere text recognition. We use advanced natural language processing (NLP), computer vision, and machine learning to truly understand and contextualize documents. That means smarter classification, higher accuracy in data extraction, and the ability to automatically summarize insights. We don’t just digitize—we unlock the intelligence hidden in your paperwork.  
                When you work with Bazement, you get a partner who understands compliance, data sensitivity, and enterprise-scale automation.
              </p>

              <h2>Our Approach</h2>
              <ol>
                <li><strong>Assessment & Use Case Mapping:</strong> Analyze document types and identify automation opportunities.</li>
                <li><strong>Custom AI Modeling:</strong> Train ML models for accurate extraction and classification.</li>
                <li><strong>Intelligent Data Pipelines:</strong> Automate ingestion, processing, and routing into your ERP, CRM, or systems.</li>
                <li><strong>Validation & Human-in-the-Loop:</strong> Maintain 99%+ accuracy for high-stakes data with a review loop.</li>
                <li><strong>Continuous Improvement:</strong> Models learn and evolve as your business grows.</li>
              </ol>

              <h2>Technologies We Use</h2>
              <ul>
                <li>Google Document AI, AWS Textract, Tesseract OCR</li>
                <li>spaCy, Hugging Face Transformers, LangChain</li>
                <li>PyTorch, TensorFlow, scikit-learn</li>
                <li>n8n, Zapier, Make.com, REST/GraphQL APIs</li>
                <li>Data encryption, GDPR-ready workflows, SOC 2 compliance</li>
              </ul>

              <h2>Benefits for Your Company</h2>
              <ul>
                <li>Eliminate Manual Document Handling – Free your team from tedious data entry.</li>
                <li>Improve Accuracy – Reduce costly human errors with AI-powered precision.</li>
                <li>Accelerate Workflows – Process thousands of documents in minutes instead of days.</li>
                <li>Ensure Compliance – Maintain audit trails and regulatory standards automatically.</li>
                <li>Scalable Efficiency – Handle growing document volumes without growing headcount.</li>
              </ul>

              <h2>Case Study Example</h2>
              <p><strong>Client:</strong> Apex Finance Solutions</p>
              <p><strong>Problem:</strong> Thousands of invoices and contracts were processed manually each month, causing delays and errors.</p>
              <p><strong>Solution:</strong> Bazement implemented an AI-powered IDP pipeline to classify, extract, and validate documents, integrating seamlessly with their ERP system.</p>
              <p><strong>Result:</strong> Processing time per document dropped by 85%, error rates decreased by 92%, and staff focused on higher-value tasks.</p>

              <h2>Next Step</h2>
              <p>
                Bazement transforms document overload into structured intelligence. Whether contracts, invoices, or compliance records, our Intelligent Document Processing ensures accuracy, speed, and scalability. Contact us today to discuss your IDP solution.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}