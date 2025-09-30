'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Footer from '@/components/Footer'
import Pricing from '@/components/Pricing'
import Contact from '@/components/Contact'
import Breadcrumbs from '@/components/Breadcrumbs'
import styles from '@/styles/component-css/PricingPage.module.css'

export default function PricingPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null)

  const faqs = [
    {
      question: "How does your subscription model work?",
      answer: "Our subscription model provides you with dedicated development time each month. You pay a fixed monthly or quarterly fee, and we allocate resources to your project. This ensures consistent progress and allows us to plan effectively, resulting in better rates for longer commitments."
    },
    {
      question: "What if I need more development hours?",
      answer: "If you need additional development hours beyond your subscription, we can accommodate that. We'll discuss your needs and either temporarily increase your subscription level or add extra hours at our standard rate. We're flexible and can adapt to your project's changing requirements."
    },
    {
      question: "Can I pause my subscription?",
      answer: "Yes, you can pause your subscription with advance notice. We understand that project needs can fluctuate. Please note that pausing may affect your place in our development queue when you resume, but we'll do our best to minimize any disruption to your project timeline."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept payments in multiple currencies including GBP, USD, EUR, and cryptocurrencies like Bitcoin and Ethereum. Our payment system automatically converts between currencies to provide you with flexible payment options that suit your needs."
    },
    {
      question: "Is there a minimum commitment period?",
      answer: "While we don't enforce a strict minimum commitment, our pricing structure is designed to reward longer commitments with better rates. Quarterly billing offers significant savings compared to monthly billing. Most projects typically require at least 3-6 months to complete, depending on complexity."
    }
  ]

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
  }

  useEffect(() => {
    // Set page title
    document.title = 'Bazement — Pricing'

    // Initialize any necessary scripts or analytics
    if (window.location.protocol !== 'https:' && window.location.hostname !== 'localhost') {
      if (location.href.indexOf("300") < 0) {
        location.href = location.href.replace("http://", "https://")
      }
    }

    // Fetch metrics data if needed
    const q = localStorage && localStorage.getItem("webM") ? `&webM=${localStorage.getItem("webM")}` : ""
    fetch('https://api.flat18.co.uk/metrics/webm/index.php?geo=1' + q)
      .then(response => response.json())
      .then(data => {
        window.webM = data.webM
        window.geoCityCountry = data.geo
        let persist = localStorage && localStorage.getItem("webM") ? localStorage.getItem("webM") : data.webM
        localStorage.setItem("webM", persist)
      })
      .catch(error => console.log('Metrics fetch error:', error))
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

  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  }

  return (
    <main>
      <section className={styles.pricingPageWrapper}>
        <Breadcrumbs />
        <div className={styles.backgroundGradient}></div>

        <motion.div
          className={styles.container}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={contentVariants}>
            <h1 className={styles.pageHeading}>Our Pricing</h1>
            <div className={styles.pricingIntro}>
              <p className={styles.pricingIntroText}>
                At Bazement, we believe in transparent, value-based pricing that aligns with your business goals.
                Our subscription model ensures you receive consistent, high-quality support for your digital presence.
              </p>
            </div>
          </motion.div>

          <Pricing />

         <div id="more-info" className={styles.pricingDetailsSection}>
  <h2 className={styles.sectionHeading}>What We Do</h2>

  <motion.div
    className={styles.detailsGrid}
    variants={staggerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
  >
    {/* 1. AI Chatbots & Customer Service Agents */}
    <motion.div className={styles.detailCard} variants={itemVariants}>
      <div className={styles.detailIcon}>
        <i className="bi bi-robot"></i>
      </div>
      <h3 className={styles.detailTitle}>AI Chatbots & Customer Service Agents</h3>
      <p className={styles.detailText}>
        We design and deploy intelligent AI chat agents that operate 24/7 across
        websites, WhatsApp, Facebook Messenger, and Slack. These agents handle FAQs,
        bookings, lead qualification, and order tracking to enhance customer experiences
        while reducing support costs.
      </p>
    </motion.div>

    {/* 2. AI Workflow Automation */}
    <motion.div className={styles.detailCard} variants={itemVariants}>
      <div className={styles.detailIcon}>
        <i className="bi bi-diagram-3"></i>
      </div>
      <h3 className={styles.detailTitle}>AI Workflow Automation</h3>
      <p className={styles.detailText}>
        We streamline repetitive tasks using tools like Zapier, Make.com, and custom
        integrations. From auto-sending invoices to generating reports, our automation
        solutions eliminate manual errors and free your team to focus on growth.
      </p>
    </motion.div>

    {/* 3. AI-Powered Marketing Automation */}
    <motion.div className={styles.detailCard} variants={itemVariants}>
      <div className={styles.detailIcon}>
        <i className="bi bi-megaphone"></i>
      </div>
      <h3 className={styles.detailTitle}>AI-Powered Marketing Automation</h3>
      <p className={styles.detailText}>
        We help businesses scale marketing with AI-driven content creation, scheduling,
        and optimization. From A/B testing to lead scoring, our solutions ensure the
        right message reaches the right audience at the right time.
      </p>
    </motion.div>

    {/* 4. AI Data & Analytics Dashboards */}
    <motion.div className={styles.detailCard} variants={itemVariants}>
      <div className={styles.detailIcon}>
        <i className="bi bi-bar-chart-line"></i>
      </div>
      <h3 className={styles.detailTitle}>AI Data & Analytics Dashboards</h3>
      <p className={styles.detailText}>
        We build dashboards that centralize data from Google Ads, Shopify, HubSpot,
        Stripe, and more. Get real-time analytics and predictive insights without
        juggling multiple platforms.
      </p>
    </motion.div>

    {/* 5. Custom AI Integrations */}
    <motion.div className={styles.detailCard} variants={itemVariants}>
      <div className={styles.detailIcon}>
        <i className="bi bi-puzzle"></i>
      </div>
      <h3 className={styles.detailTitle}>Custom AI Integrations</h3>
      <p className={styles.detailText}>
        We integrate AI features into your apps and websites—recommendation engines,
        document automation, property summarizers, and more—tailored to your workflows
        and built to scale.
      </p>
    </motion.div>

    {/* 6. Intelligent Document Processing */}
    <motion.div className={styles.detailCard} variants={itemVariants}>
      <div className={styles.detailIcon}>
        <i className="bi bi-file-earmark-text"></i>
      </div>
      <h3 className={styles.detailTitle}>Intelligent Document Processing</h3>
      <p className={styles.detailText}>
        Automate the processing and extraction of data from invoices, contracts, and
        forms. Our AI reduces manual entry, cuts errors, and accelerates document-heavy
        workflows.
      </p>
    </motion.div>

    {/* 7. AI-Powered Customer Insights */}
    <motion.div className={styles.detailCard} variants={itemVariants}>
      <div className={styles.detailIcon}>
        <i className="bi bi-people"></i>
      </div>
      <h3 className={styles.detailTitle}>AI-Powered Customer Insights</h3>
      <p className={styles.detailText}>
        We analyze customer interactions, feedback, and behavior with AI. From sentiment
        analysis to personalized recommendations, our solutions help improve retention
        and uncover growth opportunities.
      </p>
    </motion.div>

    {/* 8. AI-Driven Process Optimization */}
    <motion.div className={styles.detailCard} variants={itemVariants}>
      <div className={styles.detailIcon}>
        <i className="bi bi-gear"></i>
      </div>
      <h3 className={styles.detailTitle}>AI-Driven Process Optimization</h3>
      <p className={styles.detailText}>
        We optimize workflows, scheduling, and supply chains using AI. Our solutions cut
        costs, improve productivity, and keep your business running at peak performance.
      </p>
    </motion.div>

    {/* 9. AI Training & Custom Model Development */}
    <motion.div className={styles.detailCard} variants={itemVariants}>
      <div className={styles.detailIcon}>
        <i className="bi bi-cpu"></i>
      </div>
      <h3 className={styles.detailTitle}>AI Training & Custom Model Development</h3>
      <p className={styles.detailText}>
        We build and train custom AI models based on your business data. From dataset
        preparation and fine-tuning to deployment, we deliver business-specific AI that
        drives real results.
      </p>
    </motion.div>
  </motion.div>
</div>

        </motion.div>

        {/* <div className={styles.container}>
  <Contact />
</div> */}
      </section>
      <Footer />
    </main>
  )
}
