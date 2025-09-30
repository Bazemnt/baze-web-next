import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import styles from '../styles/component-css/FAQ.module.css'

export default function FAQ() {
  useEffect(() => {
    // Add FAQ structured data
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Are you available for new projects?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We are always open to taking on new projects. Our team works with a diverse range of clients, and we ensure every project gets full attention regardless of timeline."
          }
        },
        {
          "@type": "Question",
          "name": "How much does it cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our pricing starts at $50.00 per hour. For a typical project with about 80 development hours per month, this comes to around $4,000.00 per month. We offer discounts for long-term partnerships."
          }
        },
        {
          "@type": "Question",
          "name": "What technologies do you use?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We specialize in a wide range of cutting-edge technologies for AI automation and development, including modern web frameworks like Next.js, React, Vue.js, and Node.js; AI and machine learning frameworks such as TensorFlow, PyTorch, LangChain, and OpenAI API integrations; robotic process automation tools like UiPath and Automation Anywhere; workflow orchestration platforms such as n8n and Apache Airflow; and headless CMS solutions like Strapi and Contentful. Our deployment stack includes Vercel, Netlify, AWS, Google Cloud Platform, and Azure, with containerization and orchestration via Docker and Kubernetes."
          }
        },
        {
          "@type": "Question",
          "name": "How long will my project take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Project timelines vary, but on average take 1 to 6 weeks. For example, building and deploying a custom AI chatbot can take approximately 2–4 weeks, depending on complexity, integrations, and training requirements. We provide clear timelines after scoping each project."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer AI automation consulting?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We help clients identify automation opportunities, design AI workflows, and integrate intelligent systems to improve efficiency and reduce costs."
          }
        },
        {
          "@type": "Question",
          "name": "How do you ensure quality?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Quality is ensured through thorough code reviews, automated testing, and performance audits. Our focus is always on scalable and maintainable solutions."
          }
        }
      ]
    }

    // Add the schema to the page
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(faqSchema)
    document.head.appendChild(script)

    return () => {
      const scripts = document.querySelectorAll('script[type="application/ld+json"]')
      scripts.forEach(s => {
        if (s.text.includes('"@type":"FAQPage"')) {
          document.head.removeChild(s)
        }
      })
    }
  }, [])

  const faqs = [
    {
      question: "Are you available for new projects?",
      answer: "Yes! We are always open to taking on new projects. Our team works with a diverse range of clients, and we ensure every project gets full attention regardless of timeline."
    },
    {
      question: "How much does it cost?",
      answer: "Our pricing starts at $50.40 per hour. For a typical project with about 80 development hours per month, this comes to around $4,032.00 per month. We offer discounts for long-term partnerships."
    },
    {
      question: "What technologies do you use?",
      answer: "We specialize in a wide range of cutting-edge technologies for AI automation and development, including modern web frameworks like Next.js, React, Vue.js, and Node.js; AI and machine learning frameworks such as TensorFlow, PyTorch, LangChain, and OpenAI API integrations; robotic process automation tools like UiPath and Automation Anywhere; workflow orchestration platforms such as n8n and Apache Airflow; and headless CMS solutions like Strapi and Contentful. Our deployment stack includes Vercel, Netlify, AWS, Google Cloud Platform, and Azure, with containerization and orchestration via Docker and Kubernetes."
    },
    {
      question: "How long will my project take?",
      answer: "Project timelines vary, but on average take 1 to 6 weeks. For example, building and deploying a custom AI chatbot can take approximately 2–4 weeks, depending on complexity, integrations, and training requirements. We provide clear timelines after scoping each project."
    },
    {
      question: "Do you offer AI automation consulting?",
      answer: "Yes. We help clients identify automation opportunities, design AI workflows, and integrate intelligent systems to improve efficiency and reduce costs."
    },
    {
      question: "How do you ensure quality?",
      answer: "Quality is ensured through thorough code reviews, automated testing, and performance audits. Our focus is always on scalable and maintainable solutions."
    }
  ]

  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  const listVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  }

  return (
    <section className={styles.faqWrapper} id="faq">
      <div className={styles.backgroundGradient}></div>

      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className={styles.textOrg}>
          <h2 className={styles.gradientText}>Commonly Asked Questions</h2>
          <p className={styles.subtitle}>Find answers to common questions about our services</p>
        </div>

        <div className={styles.contentGrid}>
          <motion.div
            className={styles.visualElement}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className={styles.visualElementInner}></div>
            <div className={styles.visualElementGrid}></div>
            <div className={styles.visualElementContent}>
              <i className="bi bi-question-circle" style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--accent-yellow)' }}></i>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Still Have Questions?</h3>
              <p style={{ opacity: 0.8, maxWidth: '80%', margin: '0 auto 1.5rem' }}>
                We're here to help with any additional questions about your specific project needs.
              </p>
              <a href="https://413na5.share-na2.hsforms.com/2ZjOEvs8fTpaJN-nqHm4duw" style={{
                display: 'inline-block',
                padding: '0.75rem 1.5rem',
                background: 'linear-gradient(to right, var(--accent-orange), var(--accent-yellow))',
                color: 'var(--bg-dark)',
                borderRadius: '0.5rem',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(255, 203, 69, 0.3)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              >
                <i className="bi bi-chat-text" style={{ marginRight: '0.5rem' }}></i>
                Chat With Us
              </a>
            </div>
          </motion.div>

          <div>
            <motion.div
              className={styles.faqList}
              variants={listVariants}
            >
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className={`${styles.faqItem} ${openIndex === index ? styles.open : ''}`}
                  onClick={() => toggleFAQ(index)}
                  variants={itemVariants}
                >
                  <div className={styles.faqQuestion}>
                    <h3 className={styles.questionText}>{faq.question}</h3>
                    <div className={styles.faqIcon}>
                      <i className={`bi ${openIndex === index ? 'bi-dash' : 'bi-plus'}`}></i>
                    </div>
                  </div>
                  <div className={styles.faqAnswer}>
                    <p className={styles.answerText}>{faq.answer}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}