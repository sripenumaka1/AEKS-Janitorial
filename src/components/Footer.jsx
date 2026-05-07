import { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Footer.css'
import logo1 from '../assets/logo1.svg'

gsap.registerPlugin(ScrollTrigger)

function Footer() {
  const currentYear = new Date().getFullYear()
  const footerRef = useRef(null)
  const location = useLocation()

  // Re-run when the route changes so ScrollTrigger recalculates after page height changes
  // (e.g. Schedule page + calendar iframe). Avoid opacity:0 — footer stays visible if GSAP misses.
  useEffect(() => {
    const footer = footerRef.current
    if (!footer) return undefined

    const ctx = gsap.context(() => {
      gsap.fromTo(
        footer,
        { y: 28 },
        {
          y: 0,
          duration: 0.65,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: footer,
            start: 'top bottom',
            toggleActions: 'play none none none',
          },
        }
      )
    }, footer)

    return () => ctx.revert()
  }, [location.pathname])

  useEffect(() => {
    ScrollTrigger.refresh()
    const t = window.setTimeout(() => ScrollTrigger.refresh(), 450)
    return () => window.clearTimeout(t)
  }, [location.pathname])

  return (
    <footer ref={footerRef} className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-sections">
            {/* Company Info */}
            <div className="footer-section">
              <div className="footer-logo">
                <img src={logo1} alt="AEKS Janitorials" className="footer-logo-img" />
              </div>
              <p className="footer-description">
                Leading janitorial services in the Lower Mainland, British Columbia. Professional cleaning for homes and businesses across Vancouver, Surrey, Burnaby & Metro Vancouver.
              </p>
              <div className="social-icons">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                  aria-label="Visit our Facebook page"
                >
                  f
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                  aria-label="Visit our Twitter page"
                >
                  t
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                  aria-label="Visit our Instagram page"
                >
                  i
                </a>
              </div>
            </div>

            {/* Services */}
            <nav className="footer-section" aria-label="Footer services links">
              <h4>Services</h4>
              <div className="footer-links">
                <Link to="/services/businesses" className="footer-link">For Businesses</Link>
                <Link to="/services/homeowners" className="footer-link">For Homeowners</Link>
              </div>
            </nav>

            {/* Company */}
            <nav className="footer-section" aria-label="Footer company links">
              <h4>Company</h4>
              <div className="footer-links">
                <Link to="/about" className="footer-link">About Us</Link>
                <Link to="/about" className="footer-link">Our Team</Link>
                <Link to="/about" className="footer-link">Careers</Link>
                <Link to="/schedule" className="footer-link">Schedule</Link>
                <Link to="/contact" className="footer-link">Contact</Link>
              </div>
            </nav>

            {/* Contact Info */}
            <div className="footer-section">
              <h4>Contact Info</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="contact-text">(604) 317-2616</span>
                </div>
                <div className="contact-item">
                  <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="contact-text">aedom@aeksjanitorial.com</span>
                </div>
                <div className="contact-item">
                  <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="contact-text">11826 86 Ave, BC, Canada</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p>© {currentYear} AEKS Janitorials. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer