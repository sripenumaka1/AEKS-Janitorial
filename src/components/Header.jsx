import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Header.css'
import logo1 from '../assets/logo1.svg'

gsap.registerPlugin(ScrollTrigger)

// Header component with logo and navigation
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const lastScrollYRef = useRef(0)
  const headerRef = useRef(null)
  const logoRef = useRef(null)
  const navRef = useRef(null)
  const servicesMenuRef = useRef(null)
  const servicesSubNavRef = useRef(null)
  const location = useLocation()

  // Close services sub-nav when clicking outside (but NOT when clicking a link inside the sub-nav)
  useEffect(() => {
    const handleClickOutside = (e) => {
      const insideMenu = servicesMenuRef.current?.contains(e.target)
      const insideSubNav = servicesSubNavRef.current?.contains(e.target)
      if (!insideMenu && !insideSubNav) {
        setIsServicesOpen(false)
      }
    }
    if (isServicesOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isServicesOpen])

  useEffect(() => {
    setIsServicesOpen(false)
  }, [location.pathname])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Scroll styling + close services sub-nav when scrolling down (header stays visible)
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50 || location.pathname !== '/')
      if (scrollTop > 100 && scrollTop > lastScrollYRef.current) {
        setIsServicesOpen(false)
      }
      lastScrollYRef.current = scrollTop
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [location.pathname])

  // GSAP animations on mount
  useEffect(() => {
    const tl = gsap.timeline()
    
    tl.fromTo(logoRef.current, 
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    )
    .fromTo(navRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.4"
    )
  }, [])

  return (
    <>
      <header 
        ref={headerRef}
        className={`header ${isScrolled || location.pathname !== '/' ? 'header-scrolled' : ''}`}
      >
        <div className="container">
          <nav className="nav-wrapper">
            <Link to="/" ref={logoRef} className="logo">
              <img src={logo1} alt="AEKS Janitorials" className="logo-img" fetchPriority="high" width={60} height={60} />
            </Link>

            <nav ref={navRef} className="nav-links" aria-label="Main navigation">
              <div className="menu-links" ref={servicesMenuRef}>
                <Link to="/" className="nav-link">Home</Link>
                <button
                  type="button"
                  className="nav-link nav-services-trigger"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  aria-expanded={isServicesOpen}
                  aria-controls="services-sub-nav"
                  id="services-button"
                >
                  Services
                  <span className="nav-services-chevron" aria-hidden="true">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </button>
                <Link to="/about" className="nav-link">About</Link>
                <Link to="/contact" className="nav-link">Contact</Link>
              </div>
              <Link to="/schedule" className="btn-primary">Schedule</Link>
            </nav>

            <button
              type="button"
              className="menu-toggle"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
            >
              <span className={`menu-line ${isMenuOpen ? 'rotate-top' : ''}`}></span>
              <span className={`menu-line ${isMenuOpen ? 'hidden' : ''}`}></span>
              <span className={`menu-line ${isMenuOpen ? 'rotate-bottom' : ''}`}></span>
            </button>
          </nav>

          <div id="mobile-nav" className={`mobile-nav ${isMenuOpen ? 'mobile-nav-open' : ''}`} aria-hidden={!isMenuOpen}>
            <nav className="mobile-nav-links" aria-label="Mobile navigation">
              <Link to="/" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <div className="mobile-nav-group">
                <span className="mobile-nav-label">Services</span>
                <Link to="/services/businesses" className="mobile-nav-link mobile-nav-sublink" onClick={() => setIsMenuOpen(false)}>For Businesses</Link>
                <Link to="/services/homeowners" className="mobile-nav-link mobile-nav-sublink" onClick={() => setIsMenuOpen(false)}>For Homeowners</Link>
              </div>
              <Link to="/about" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link to="/contact" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              <Link to="/schedule" className="btn-primary mobile-cta" onClick={() => setIsMenuOpen(false)}>Schedule</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Services sub-nav bar: appears below the header (below the green line) */}
      <nav
        ref={servicesSubNavRef}
        id="services-sub-nav"
        className={`services-sub-nav ${isServicesOpen ? 'services-sub-nav-open' : ''}`}
        aria-hidden={!isServicesOpen}
        aria-label="Services"
      >
        <div className="container services-sub-nav-inner">
          <Link to="/services/businesses" className="services-sub-nav-link" onClick={() => setIsServicesOpen(false)}>
            For Businesses
          </Link>
          <Link to="/services/homeowners" className="services-sub-nav-link" onClick={() => setIsServicesOpen(false)}>
            For Homeowners
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Header