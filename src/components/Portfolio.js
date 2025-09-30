'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import styles from '../styles/component-css/Portfolio.module.css'

// Individual Project Card Component for proper hook usage
function ProjectCard({ project, index }) {
  const cardRef = useRef(null)
  const cardInView = useInView(cardRef, {
    once: true,
    amount: 0.3,
    margin: "-100px 0px -100px 0px"
  })

  // Dramatic card reveal animation
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9,
      rotateX: 15,
      filter: "blur(10px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  // Individual child element animations
  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 1.1,
      y: 30
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  const logoVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      rotate: -10
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: [0.34, 1.56, 0.64, 1],
        delay: 0.1
      }
    }
  }

  const titleVariants = {
    hidden: {
      opacity: 0,
      x: -30,
      filter: "blur(5px)"
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.2
      }
    }
  }

  const descriptionVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.3
      }
    }
  }

  const techStackVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.4,
        staggerChildren: 0.1
      }
    }
  }

  const techBarVariants = {
    hidden: {
      scaleX: 0,
      opacity: 0
    },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.1
      }
    }
  }

  const techItemVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 10
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  return (
    <motion.div
      ref={cardRef}
      className={styles.projectCard}
      variants={cardVariants}
      initial="hidden"
      animate={cardInView ? "visible" : "hidden"}
      whileHover={{
        y: -10,
        scale: 1.02,
        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px"
      }}
    >
      <motion.div
        className={styles.projectImageWrapper}
        variants={imageVariants}
      >
        <div className={styles.projectImageContainer}>
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={cardInView ? { scale: 1, opacity: 1 } : { scale: 1.1, opacity: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={400}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={styles.projectImage}
              loading={index < 3 ? "eager" : "lazy"}
              fetchPriority={index < 3 ? "high" : "auto"}
              quality={85}
            />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className={styles.projectContent}
        variants={descriptionVariants}
      >
        {project.projectLogo && (
          <motion.div
            className={styles.projectLogo}
            variants={logoVariants}
          >
            <Image
              src={project.projectLogo}
              alt={`${project.title} logo`}
              width={48}
              height={48}
              className={styles.logoImage}
            />
          </motion.div>
        )}

        <motion.h3
          className={styles.projectTitle}
          variants={titleVariants}
        >
          <span>{project.title}</span>
          <motion.div
            className={`${styles.projectStatus} ${project.status === 'Live' ? styles.live : ''}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={cardInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          >
            {project.status}
          </motion.div>
        </motion.h3>

        <motion.p
          className={styles.projectDescription}
          variants={descriptionVariants}
        >
          {project.description}
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.viewProjectButton}
            initial={{ opacity: 0, x: -20 }}
            animate={cardInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
            whileHover={{
              x: 5,
              transition: { duration: 0.2 }
            }}
          >
            View Project  <i className="bi bi-arrow-right"></i>
          </motion.a>
        </motion.p>

        <motion.div
          className={styles.projectTechStack}
          variants={techStackVariants}
        >
          <motion.div
            className={styles.techBar}
            variants={techBarVariants}
            style={{ transformOrigin: "left center" }}
          >
            {project.technologies.map((tech, i) => (
              <motion.div
                key={i}
                className={`${styles.techBarSegment} ${tech.colorClass || ''}`}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={cardInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.7 + (i * 0.1)
                }}
                style={{
                  width: tech.percentage,
                  transformOrigin: "left center"
                }}
              />
            ))}
          </motion.div>
          <motion.ul
            className={styles.techList}
            variants={techStackVariants}
          >
            {project.technologies.map((tech, techIndex) => (
              <motion.li
                key={techIndex}
                className={styles.techItem}
                variants={techItemVariants}
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={cardInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 10 }}
                transition={{
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.8 + (techIndex * 0.1)
                }}
              >
                <span
                  className={`${styles.techColor} ${tech.colorClass || ''}`}
                ></span>
                {tech.name}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default function Portfolio() {
  const [filter, setFilter] = useState('all')
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  const projects = [
  {
    title: 'AI Chatbot & Customer Agents',
    description: 'Problem: Warner & Spencer, an online fashion retailer, struggled with missed leads and long response times across their website, WhatsApp, and Slack. Solution: Bazement built intelligent 24/7 AI chatbots for customer support, order tracking, and internal assistance—reducing response times from hours to seconds and increasing customer engagement by 35%.',
    image: '/images/portfolio-graphics/chat.webp',
    projectLogo: '/images/portfolio-graphics/logos/archimedes-finance.webp',
    link: 'https://example.com/ai-chatbots',
    technologies: [
      { name: 'Next.js', percentage: '30%', colorClass: styles.nextJSColor },
      { name: 'OpenAI', percentage: '30%', colorClass: styles.jsColor },
      { name: 'Node.js', percentage: '20%', colorClass: styles.nodeColor },
      { name: 'Socket.io', percentage: '10%', colorClass: styles.jsColor },
      { name: 'Redis', percentage: '10%', colorClass: styles.postgresColor },
    ],
    status: 'Demo',
    category: 'app'
  },
  {
    title: 'Workflow Automation',
    description: 'Problem: Banover Construction, a sustainable construction firm, faced excessive time spent manually sending invoices and following up on project leads. Solution: Bazement automated these workflows using Zapier, Make.com, and Google Sheets, cutting repetitive tasks from 8 hours weekly to under 15 minutes and improving project turnaround.',
    image: '/images/portfolio-graphics/automation.webp',
    projectLogo: '/images/portfolio-graphics/logos/btcpayserver.webp',
    link: 'https://example.com/workflow-automation',
    technologies: [
      { name: 'Zapier', percentage: '25%', colorClass: styles.vueColor },
      { name: 'n8n', percentage: '25%', colorClass: styles.nodeColor },
      { name: 'Python', percentage: '20%', colorClass: styles.jsColor },
      { name: 'Airtable API', percentage: '15%', colorClass: styles.htmlColor },
      { name: 'PostgreSQL', percentage: '15%', colorClass: styles.postgresColor },
    ],
    status: 'Demo',
    category: 'web'
  },
  {
    title: 'AI Marketing Campaigns',
    description: 'Problem: Darumi Kitchen, a subscription meal service, struggled with slow content creation and poor engagement. Solution: Bazement deployed AI-powered content generators and automated social/email campaigns, boosting email open rates by 20% and reducing delivery times by threefold.',
    image: '/images/portfolio-graphics/marketing.webp',
    projectLogo: '/images/portfolio-graphics/logos/dvote.webp',
    link: 'https://example.com/ai-marketing',
    technologies: [
      { name: 'OpenAI', percentage: '40%', colorClass: styles.jsColor },
      { name: 'Canva API', percentage: '20%', colorClass: styles.htmlColor },
      { name: 'HubSpot API', percentage: '20%', colorClass: styles.postgresColor },
      { name: 'Node.js', percentage: '20%', colorClass: styles.nodeColor },
    ],
    status: 'Demo',
    category: 'web'
  },
  {
    title: 'AI Data & Analytics Dashboards',
    description: 'Problem: XTrading Co, a fintech startup, had to log into multiple platforms to check performance metrics. Solution: Bazement built unified dashboards pulling from Shopify, Stripe, and Google Ads, delivering AI-driven insights that saved hours of manual analysis weekly.',
    image: '/images/portfolio-graphics/dashboard.webp',
    projectLogo: '/images/portfolio-graphics/logos/f18pay.webp',
    link: 'https://example.com/ai-dashboards',
    technologies: [
      { name: 'React', percentage: '30%', colorClass: styles.vueColor },
      { name: 'PostgreSQL', percentage: '20%', colorClass: styles.postgresColor },
      { name: 'TensorFlow', percentage: '20%', colorClass: styles.nodeColor },
      { name: 'D3.js', percentage: '15%', colorClass: styles.jsColor },
      { name: 'Chart.js', percentage: '15%', colorClass: styles.jsColor },
    ],
    status: 'Demo',
    category: 'app'
  },
  {
    title: 'Custom AI Integrations',
    description: 'Problem: Liberia & Co., an e-commerce platform, wanted AI-powered recommendations but lacked integration expertise. Solution: Bazement integrated AI-driven product recommendations, product data summarization, and natural language search directly into their app.',
    image: '/images/portfolio-graphics/recommendation.webp',
    projectLogo: '/images/portfolio-graphics/logos/honeypay.webp',
    link: 'https://example.com/custom-integrations',
    technologies: [
      { name: 'OpenAI', percentage: '25%', colorClass: styles.jsColor },
      { name: 'Anthropic', percentage: '20%', colorClass: styles.nodeColor },
      { name: 'Vertex AI', percentage: '20%', colorClass: styles.vueColor },
      { name: 'Python', percentage: '20%', colorClass: styles.nodeColor },
      { name: 'GraphQL', percentage: '15%', colorClass: styles.jsColor },
    ],
    status: 'Demo',
    category: 'web'
  },
  {
    title: 'Document Processing Automation',
    description: 'Problem: Faucet Finance, a mid-sized finance company, wasted hours extracting data from invoices and contracts. Solution: Bazement deployed AI-powered document parsing, cutting processing time from 2 hours to under 10 minutes while improving accuracy.',
    image: '/images/portfolio-graphics/document.webp',
    projectLogo: '/images/portfolio-graphics/logos/wallet-scrutiny.webp',
    link: 'https://example.com/document-processing',
    technologies: [
      { name: 'Python', percentage: '30%', colorClass: styles.nodeColor },
      { name: 'LangChain', percentage: '30%', colorClass: styles.jsColor },
      { name: 'OCR Tools', percentage: '20%', colorClass: styles.htmlColor },
      { name: 'AWS Textract', percentage: '20%', colorClass: styles.postgresColor },
    ],
    status: 'Demo',
    category: 'app'
  },
  {
    title: 'Customer Insights Reports',
    description: 'Problem: ThynkTech, a retail analytics company, lacked clarity on customer behavior, leading to poor decision-making. Solution: Bazement built AI-powered segmentation tools and predictive churn reports that revealed buying trends and projected lifetime value.',
    image: '/images/portfolio-graphics/insights.webp',
    projectLogo: '/images/portfolio-graphics/logos/zettahash-dao.webp',
    link: 'https://example.com/customer-insights',
    technologies: [
      { name: 'Python', percentage: '20%', colorClass: styles.nodeColor },
      { name: 'Pandas', percentage: '20%', colorClass: styles.jsColor },
      { name: 'Scikit-learn', percentage: '20%', colorClass: styles.postgresColor },
      { name: 'Power BI', percentage: '20%', colorClass: styles.vueColor },
      { name: 'Tableau', percentage: '20%', colorClass: styles.jsColor },
    ],
    status: 'Demo',
    category: 'web'
  },
  {
    title: 'AI Process Optimization',
    description: 'Problem: Graphense, a global service provider, faced delays with response times averaging 24 hours. Solution: Bazement optimized workflows with AI triaging systems, reducing response time to 2 hours and increasing satisfaction scores.',
    image: '/images/portfolio-graphics/process.webp',
    projectLogo: '/images/portfolio-graphics/logos/zettahash.webp',
    link: 'https://example.com/process-optimization',
    technologies: [
      { name: 'Next.js', percentage: '20%', colorClass: styles.nextJSColor },
      { name: 'Zapier', percentage: '20%', colorClass: styles.vueColor },
      { name: 'FastAPI', percentage: '20%', colorClass: styles.nodeColor },
      { name: 'Redis', percentage: '20%', colorClass: styles.postgresColor },
      { name: 'Docker', percentage: '20%', colorClass: styles.jsColor },
    ],
    status: 'Demo',
    category: 'app'
  },
  {
    title: 'Custom AI Model Training',
    description: 'Problem: Bailey Banking, a fintech firm, required industry-specific fraud detection models. Solution: Bazement trained a custom NLP model with client datasets, achieving 92% detection accuracy and significantly reducing financial risk.',
    image: '/images/portfolio-graphics/detection.webp',
    projectLogo: '/images/portfolio-graphics/logos/Webflow_logo_2023.webp',
    link: 'https://example.com/model-training',
    technologies: [
      { name: 'TensorFlow', percentage: '25%', colorClass: styles.nodeColor },
      { name: 'Python', percentage: '25%', colorClass: styles.jsColor },
      { name: 'Kubernetes', percentage: '25%', colorClass: styles.postgresColor },
      { name: 'Docker', percentage: '15%', colorClass: styles.jsColor },
      { name: 'Apache Kafka', percentage: '10%', colorClass: styles.nodeColor },
    ],
    status: 'Demo',
    category: 'app'
  },
];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter)

  // Enhanced Animation variants for dramatic reveal
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  const headingVariants = {
    hidden: {
      opacity: 0,
      y: -20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.2
      }
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const filterButtonVariants = {
    inactive: {
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      color: "var(--text-secondary)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      scale: 1
    },
    active: {
      backgroundColor: "rgba(0, 240, 181, 0.1)",
      color: "var(--primary)",
      border: "1px solid rgba(0, 240, 181, 0.2)",
      scale: 1.05
    }
  }

  return (
    <section className={styles.portfolioSection} id="work" ref={sectionRef}>
      <div className={styles.backgroundElements}>
        <div className={styles.backgroundGradient}></div>
        <div className={styles.backgroundGrid}></div>
      </div>

      <motion.div
        className="container"
        variants={sectionVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div
          className={styles.portfolioHeading}
          variants={headingVariants}
        >
          <span className={styles.sectionLabel}>Portfolio</span>
          <h2 className={styles.portfolioTitle}>Our Work</h2>
          <p className={styles.portfolioSubtitle}>
            Explore our portfolio of successful projects across AI automation and development.
          </p>

          <div className={styles.filterContainer}>
            <motion.button
              className={styles.filterButton}
              onClick={() => setFilter('all')}
              animate={filter === 'all' ? 'active' : 'inactive'}
              variants={filterButtonVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              All Projects
            </motion.button>
            <motion.button
              className={styles.filterButton}
              onClick={() => setFilter('web')}
              animate={filter === 'web' ? 'active' : 'inactive'}
              variants={filterButtonVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Web
            </motion.button>
            <motion.button
              className={styles.filterButton}
              onClick={() => setFilter('app')}
              animate={filter === 'app' ? 'active' : 'inactive'}
              variants={filterButtonVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Apps
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          className={styles.portfolioGrid}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
            />
          ))}
        </motion.div>

        <motion.div
          className={styles.ctaContainer}
          variants={headingVariants}
        >
          <a href="https://413na5.share-na2.hsforms.com/2ZjOEvs8fTpaJN-nqHm4duw" className={styles.ctaButton}>
            <span>Start Your Project</span>
            <i className="bi bi-arrow-right"></i>
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
