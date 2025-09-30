'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/component-css/Navbar.module.css'

export default function Navbar({ isScrolled }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const testimonials = [
  {
    quote: "Working with Bazement felt less like hiring a service and more like gaining a dedicated partner who truly understands our vision. They were proactive, responsive, and nailed our design on the first try — it felt like magic.",
    author: "Co-founder",
    role: "Fintech startup",
    rating: 5,
    color: "primary"
  },
  {
    quote: "Bazement rebuilt our web app chatbot from scratch, and the results blew us away. Page loads are instantaneous, UX feels intuitive, and our whole team now moves faster. This was a game-changer for our business.",
    author: "Founder",
    role: "Payments processor platform",
    rating: 5,
    color: "secondary"
  },
  {
    quote: "Our site was outdated and lacking personality. Bazement not only gave it a fresh, modern design, but they preserved what made our brand special. Now our users are happier, and the metrics prove it.",
    author: "Solopreneur",
    role: "Education website",
    rating: 5,
    color: "accent-purple"
  },
  {
    quote: "Stepping into the AI automation space was daunting, but Bazement made it feel effortless. Their team guided us with clarity, building a dashboard that’s powerful yet simple. The integration with our systems feels seamless.",
    author: "CEO",
    role: "AI SaaS company",
    rating: 5,
    color: "accent-teal"
  },
  {
    quote: "We’ve worked with big agencies that overpromised and underdelivered. Bazement was different — they were fast, focused, and genuinely cared about our success. They felt like part of our team from day one.",
    author: "Founder",
    role: "AI Dashboard",
    rating: 5,
    color: "accent-pink"
  },
  {
    quote: "Bazement didn’t just deliver a solution; they understood our pain points and crafted something beyond our expectations. Their attention to detail and commitment made this project a joy from start to finish.",
    author: "Product Manager",
    role: "E-commerce platform",
    rating: 5,
    color: "accent-green"
  },
  {
    quote: "What stood out with Bazement is their human touch. They listen, they care, and they deliver solutions that truly make life easier. Our productivity has skyrocketed since we started working with them.",
    author: "Head of Operations",
    role: "Logistics startup",
    rating: 5,
    color: "accent-orange"
  },
  {
    quote: "From the first call to the final delivery, Bazement was professional, empathetic, and inspiring. Their AI automation has transformed how we operate — giving us hours back every day.",
    author: "CTO",
    role: "Healthtech platform",
    rating: 5,
    color: "accent-blue"
  },
  {
    quote: "Bazement took our scattered processes and turned them into a streamlined, automated workflow that actually feels effortless. It’s not just technology — it’s peace of mind.",
    author: "Operations Lead",
    role: "Fintech company",
    rating: 5,
    color: "accent-red"
  },
  {
    quote: "Choosing Bazement was one of the best business decisions we’ve ever made. They combine technical mastery with empathy, ensuring their solutions don’t just work but truly enhance our business and our customers’ experience.",
    author: "CEO",
    role: "Enterprise SaaS",
    rating: 5,
    color: "accent-gray"
  }
]

  return (
    <header className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.container}`}>
        <Link href="/" className={styles.brand}>
          <div className={styles.logo}>
            <Image
              src="/images/flat18_256x256.avif"
              alt="Bazement Logo"
              width={42}
              height={42}
            />
          </div>
          <div className={styles.brandName}>Bazement</div>
        </Link>

        <button
          className={styles.menuToggle}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className={`${styles.hamburger} ${isMobileMenuOpen ? styles.hamburgerOpen : ''}`}></span>
        </button>

        <nav
          className={`${styles.menuWrapper} ${isMobileMenuOpen ? styles.menuWrapperOpen : ''}`}
          aria-label="Main navigation"
        >
          <ul className={styles.menu}>
            <li>
              <Link href="/services" className={styles.link} onClick={() => setIsMobileMenuOpen(false)}>
                <span>Services</span>
              </Link>
            </li> 
            <li>
              <Link href="/#work" className={styles.link} onClick={() => setIsMobileMenuOpen(false)}>
                <span>Work</span>
              </Link>
            </li>
            <li>
              <Link href="/#pricing" className={styles.link} onClick={() => setIsMobileMenuOpen(false)}>
                <span>Pricing</span>
              </Link>
            </li>
            <li>
              <Link href="/about" className={styles.link} onClick={() => setIsMobileMenuOpen(false)}>
                <span>About</span>
              </Link>
            </li>
            {/*
            <li>
              <a
                href="https://413na5.share-na2.hsforms.com/2ZjOEvs8fTpaJN-nqHm4duw"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>Client Portal</span>
              </a>
            </li>
            */}
            <li className={styles.cta}>
              <a href="https://413na5.share-na2.hsforms.com/2ZjOEvs8fTpaJN-nqHm4duw" className="btn btn-primary btn-lg" onClick={() => setIsMobileMenuOpen(false)}>
                <span className="btn-text">Start a Project</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
