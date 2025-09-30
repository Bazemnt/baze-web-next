'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import Breadcrumbs from '@/components/Breadcrumbs'
import styles from '@/styles/component-css/PageStyles.module.css'

export default function AboutPage() {
  useEffect(() => {
    // Set page title
    document.title = 'Bazement — About us'
  }, [])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        delay: 0.2
      }
    }
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
          <motion.div
            className={styles.pageContent}
            variants={contentVariants}
          >
            <h1 className={styles.pageHeading}>Welcome to Bazement</h1>

            <div className={styles.textContent}>
              <p>
                At Bazement, we specialise in delivering cutting-edge solutions in the ever-evolving realm of AI automation. Our journey began in 2019 in Lagos, Nigeria — where we recognised the transformative potential of AI to automate complex business processes, improve efficiency, and drive innovation. What started as a small team of curious engineers experimenting with automation workflows quickly evolved into a full-fledged company committed to solving real-world business problems with AI-powered tools. With each project, we expanded our expertise and capability, shaping Bazement into the AI automation leader it is today.
              </p>

              <p>
                With a foundation built on innovation, technical excellence, and a deep commitment to delivering value, Bazement LLC officially launched its operations to offer world-class AI automation solutions. Over the years, we’ve worked on impactful projects spanning industries, developing intelligent systems for customer service automation, workflow orchestration, data analytics, and more. Our solutions now empower businesses globally to work smarter, scale faster, and make data-driven decisions.
              </p>

              <h2>A Fearless Approach to Problem Solving</h2>
              <p>
                At Bazement, we believe that innovation thrives when fear is removed from the equation. This philosophy drives our approach to every project, whether we're building AI-driven customer service systems, automating complex workflows, or creating predictive analytics platforms. We embrace challenges head-on, viewing obstacles as opportunities for growth and refinement. Our development process is agile yet meticulous, allowing us to adapt and respond swiftly while maintaining the high standards that ensure long-term reliability and success. This fearless mindset traces back to our beginnings in Lagos — where solving tough problems with limited resources became part of our DNA.
              </p>

              <h2>Client-Centred Collaboration</h2>
              <p>
                Building strong, trusting relationships with our clients is at the heart of Bazement. Our development process is both collaborative and transparent, providing clients with as much or as little involvement as they prefer. Through the use of best-in-class tools, we ensure a seamless workflow where clients can stay informed and engaged at every step. From Lagos to international markets, we pride ourselves on delivering projects that not only meet but exceed expectations, ensuring satisfaction at every critical juncture. Our promise is to continuously refine our work until it reaches a level of perfection our clients expect.
              </p>

              <h2>Sophisticated and Scalable Solutions</h2>
              <p>
                We believe in delivering solutions that are both sophisticated and scalable. Our approach leverages the best of modern AI technologies — from advanced machine learning models to intelligent automation frameworks. We are experts at maximising efficiency, creating high-performance systems that are secure, resilient, and capable of scaling with business growth. Our curated selection of industry-leading platforms ensures that each project is built on a robust and future-proof foundation. Whether designing AI chatbots or complex process automation engines, we maintain quality and ambition as our benchmarks.
              </p>

              <h2>What Sets Bazement Apart</h2>
              <p>
                Bazement is distinguished by our ability to deliver complex, high-value projects with craftsmanship and attention to detail. Our clients trust us to handle every element of their automation needs — from conception to deployment to ongoing optimization. We specialise in working with cutting-edge AI automation technologies, and our goal is to ensure every solution is innovative and built to the highest industry standards. Our journey that started in Lagos in 2019 has shaped us into a partner that clients worldwide can trust, whether they wish to be deeply involved or leave the finer details to us.
              </p>

              <p>
                The future of AI automation is rich with potential, and Bazement is here to help you harness it.
              </p>
              <p>
                Let's create something extraordinary together. ♥️☘️
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>
      <Footer />
    </main>
  )
}