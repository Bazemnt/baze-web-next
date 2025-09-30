'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import styles from '@/styles/component-css/PageStyles.module.css'

export default function AITrainingCustomModelPage() {
  useEffect(() => {
    document.title = 'Bazement — AI Training & Custom Model Development'
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
            <h1 className={styles.pageHeading}>AI Training & Custom Model Development</h1>
            <div className={styles.badge}>Custom AI Models Designed for Your Business</div>
            <div className={styles.textContent}>
              <p>
                At Bazement, we recognize that no two businesses are alike, and neither should their AI solutions be. Our expertise lies in developing custom AI models tailored to your unique needs. By leveraging cutting-edge machine learning practices and deep learning architectures, we ensure your AI systems deliver industry-specific performance that generic models cannot match.
              </p>

              <h2>Why Choose Bazement for AI Model Development?</h2>
              <p>
                We build AI solutions that are not just functional but strategically aligned with your business. From data strategy to deployment, Bazement offers end-to-end custom model development so you gain capabilities no competitor can replicate.
              </p>

              <h2>Our Approach</h2>
              <ol>
                <li><strong>Business Needs Analysis:</strong> Engage with your team to understand core processes, pain points, and opportunities where AI delivers value.</li>
                <li><strong>Data Strategy & Preparation:</strong> Curate, clean, and label datasets to ensure high-quality inputs for model training.</li>
                <li><strong>Model Development:</strong> Create AI models with advanced machine learning frameworks designed for your objectives.</li>
                <li><strong>Fine-Tuning & Optimization:</strong> Refine the model iteratively to maximize performance and adaptability.</li>
                <li><strong>Deployment & Monitoring:</strong> Deploy models into production environments with ongoing monitoring and updates.</li>
              </ol>

              <h2>Technology Stack</h2>
              <ul>
                <li>TensorFlow & PyTorch for deep learning model creation</li>
                <li>LangChain & Hugging Face Transformers for NLP and semantic understanding</li>
                <li>Docker & Kubernetes for scalable model deployment</li>
                <li>Python & FastAPI for backend integration and API development</li>
                <li>MLflow for model versioning and lifecycle management</li>
              </ul>

              <h2>Benefits of Choosing Bazement’s AI Model Development</h2>
              <ul>
                <li>Tailored Precision — Models built for your unique datasets and objectives</li>
                <li>Competitive Edge — Gain AI capabilities that set you apart</li>
                <li>Scalability — Models that grow with your business</li>
                <li>End-to-End Support — Complete lifecycle management from concept to deployment</li>
                <li>Proven Expertise — Successful AI solutions across finance, healthcare, retail, and logistics</li>
              </ul>

              <h2>Next Step</h2>
              <p>
                Choosing Bazement for AI Training and Custom Model Development means investing in a strategic AI partner committed to transforming your processes and driving innovation. Contact us to start your custom AI journey.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}