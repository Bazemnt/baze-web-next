'use client'

import Link from 'next/link'
import styles from '../styles/component-css/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer} aria-labelledby="footer-heading">
      <div className={styles.footerGradient}></div>
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="container">
        <div className={styles.footerWrapper}>
          <div className={styles.footerBrandContainer}>
            <Link href="/" className={styles.footerBrand} aria-label="Bazement Home">
              {<div className={styles.footerLogo}>B.</div>}
            </Link>
            <p className={styles.footerTagline}>Bazement, helps other businesses (especially small and growing ones) use AI-powered tools, custom software, and automation systems to save time, cut costs, and scale faster.</p>
          </div>

          <div className={styles.footerContent}>
            <div className={styles.footerBlock}>
              <h3 className={styles.footerBlockTitle}>Contact</h3>
              <ul className={styles.footerLinksList}>
                <li>
                  <a href="https://413na5.share-na2.hsforms.com/2ZjOEvs8fTpaJN-nqHm4duw" className={styles.footerLink}>
                    <span>Chat Us</span>
                  </a>
                </li>
                <li>
                  <a href="https://t.me/" className={styles.footerLink} target="_blank" rel="noopener noreferrer">
                    <span>Telegram</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@bazement.xyz" className={styles.footerLink}>
                    <span>Email Us</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles.footerBlock}>
              <h3 className={styles.footerBlockTitle}>Quick Links</h3>
              <ul className={styles.footerLinksList}>
                <li>
                  <Link href="/services" className={styles.footerLink}>
                    <span>Our Services</span>
                  </Link>
                </li>
                <li>
                  <Link href="/#work" className={styles.footerLink}>
                    <span>Our Work</span>
                  </Link>
                </li>
                <li>
                  <Link href="/#pricing" className={styles.footerLink}>
                    <span>Our Pricing</span>
                  </Link>
                </li>
                <li>
                  <Link href="/#how-it-works" className={styles.footerLink}>
                    <span>How It Works</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className={styles.footerBlock}>
              <h3 className={styles.footerBlockTitle}>Company</h3>
              <ul className={styles.footerLinksList}>
                <li>
                  <Link href="/about" className={styles.footerLink}>
                    <span>About Us</span>
                  </Link>
                </li>
                <li>
                  <Link href="/ease-of-communication-standard" className={styles.footerLink}>
                    <span>Communication Standard</span>
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className={styles.footerLink}>
                    <span>Privacy Policy</span>
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className={styles.footerLink}>
                    <span>Terms of Service</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.footerCopyright}>© {new Date().getFullYear()} Bazement. All rights reserved.</div>
          <div className={styles.footerSocial}>
            <a href="https://x.com/" className={styles.footerSocialLink} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="bi bi-twitter" aria-hidden="true"></i>
            </a>
            <a href="https://github.com/" className={styles.footerSocialLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="bi bi-github" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
