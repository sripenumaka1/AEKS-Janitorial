import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Services.css'

gsap.registerPlugin(ScrollTrigger)

function Services() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const cardsRef = useRef([])
  const businessServicesRef = useRef(null)
  const businessServicesTitleRef = useRef(null)
  const businessServiceCardsRef = useRef([])
  const residentialServiceCardsRef = useRef([])
  const [expandedService, setExpandedService] = useState(null)
  const [expandedResidential, setExpandedResidential] = useState(null)

  // Scroll expanded card into view so user doesn't have to scroll the page
  useEffect(() => {
    if (expandedService === null) return
    const el = businessServiceCardsRef.current[expandedService]
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [expandedService])

  useEffect(() => {
    if (expandedResidential === null) return
    const el = residentialServiceCardsRef.current[expandedResidential]
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [expandedResidential])

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    })
    
    tl.fromTo(titleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    )
    .fromTo(cardsRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: "power2.out" },
      "-=0.4"
    )

    const businessTl = gsap.timeline({
      scrollTrigger: {
        trigger: businessServicesRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    })
    businessTl.fromTo(businessServicesTitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    )
    .fromTo(businessServiceCardsRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power2.out" },
      "-=0.4"
    )
  }, [])

  const services = [
    {
      icon: '🏢',
      iconBg: 'primary',
      title: 'Office Cleaning',
      description: 'Complete office sanitization and maintenance to keep your workplace spotless and professional.',
      features: ['Daily cleaning', 'Deep sanitization', 'Carpet cleaning']
    },
    {
      icon: '🏠',
      iconBg: 'secondary',
      title: 'Residential Cleaning',
      description: 'Thorough home cleaning services to maintain a healthy and comfortable living environment.',
      features: ['Weekly/Monthly plans', 'Move-in/out cleaning', 'Kitchen & bathrooms']
    },
    {
      icon: '🏪',
      iconBg: 'accent',
      title: 'Commercial Cleaning',
      description: 'Specialized cleaning for retail spaces, restaurants, and commercial facilities.',
      features: ['Floor maintenance', 'Window cleaning', 'Waste management']
    }
  ]

  const DailyCleanupIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 3H7L5 5H9L7 7H11L9 9H13L11 11H15L13 13H17L15 15H19L17 17H21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 21H21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M12 2V6M12 2H8M12 2H16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )

  const StrippingWaxingIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2.5" fill="none"/>
      <path d="M3 9H21M3 15H21M9 3V21M15 3V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.8"/>
      <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
    </svg>
  )

  const SanitizationIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L4 7V12C4 16.55 7.16 20.74 12 22C16.84 20.74 20 16.55 20 12V7L12 2Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
    </svg>
  )

  const businessServices = [
    {
      title: 'Daily Cleanup',
      icon: <DailyCleanupIcon />,
      description: 'Maintain a consistently clean and professional environment with our daily cleaning services.',
      details: [
        'Thorough vacuuming and mopping of all floor surfaces',
        'Dusting and wiping down all surfaces, desks, and furniture',
        'Restroom cleaning and sanitization',
        'Trash removal and recycling management',
        'Window and glass surface cleaning',
        'Kitchen/break room maintenance',
        'High-touch surface disinfection',
        'Customized cleaning schedules to fit your business hours'
      ]
    },
    {
      title: 'Stripping and Waxing',
      icon: <StrippingWaxingIcon />,
      description: 'Restore and protect your floors with professional stripping and waxing services that extend the life of your flooring.',
      details: [
        'Complete floor stripping to remove old wax and buildup',
        'Deep cleaning and preparation of floor surfaces',
        'Professional wax application for lasting protection',
        'Buffing and polishing for a high-gloss finish',
        'Edge and corner detail work',
        'Regular maintenance waxing schedules',
        'Works with all types of commercial flooring (VCT, tile, etc.)',
        'Eco-friendly products that are safe for your workplace'
      ]
    },
    {
      title: 'Sanitization',
      icon: <SanitizationIcon />,
      description: 'Comprehensive sanitization services to ensure a healthy, germ-free environment for your employees and customers.',
      details: [
        'Deep sanitization of all high-touch surfaces',
        'Fogging and misting treatments for comprehensive coverage',
        'HVAC system cleaning and air quality improvement',
        'Restroom deep cleaning and sanitization',
        'Kitchen and food preparation area sanitization',
        'Use of EPA-approved disinfectants',
        'COVID-19 and flu season enhanced protocols',
        'Regular sanitization schedules to maintain health standards'
      ]
    }
  ]

  const MoveInOutIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 9L12 2L21 9V20C21 20.53 20.79 21.04 20.41 21.41C20.04 21.79 19.53 22 19 22H5C4.47 22 3.96 21.79 3.59 21.41C3.21 21.04 3 20.53 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )

  const OngoingIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
      <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )

  const OneTimeIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )

  const residentialServices = [
    {
      title: 'Move In / Out Cleanup',
      icon: <MoveInOutIcon />,
      description: 'Make your transition smooth with a thorough deep clean before you move in or after you move out. We handle every corner so you can focus on what matters.',
      details: [
        'Full interior cleaning of empty or occupied spaces',
        'Cabinet interiors, closets, and storage areas',
        'Appliance cleaning (inside and out)',
        'Bathroom and kitchen deep sanitization',
        'Floor cleaning, vacuuming, and mopping',
        'Window sills and baseboards',
        'Wall spot-cleaning and dust removal',
        'Customized to your move timeline'
      ]
    },
    {
      title: 'On-going Cleanup',
      icon: <OngoingIcon />,
      description: 'Keep your home consistently clean with weekly or bi-weekly visits. We work around your schedule and customize the checklist to your priorities.',
      details: [
        'Regular vacuuming and mopping of all floors',
        'Dusting of surfaces, furniture, and fixtures',
        'Kitchen cleanup: counters, sink, and appliance exteriors',
        'Bathroom cleaning and sanitization',
        'Bed making and linen tidying',
        'Trash removal and recycling',
        'Eco-friendly products safe for kids and pets',
        'Flexible frequency: weekly, bi-weekly, or monthly'
      ]
    },
    {
      title: 'One Time Cleanup',
      icon: <OneTimeIcon />,
      description: 'Need a single deep clean for a special occasion, spring cleaning, or just to reset? We deliver a top-to-bottom refresh in one visit.',
      details: [
        'Complete top-to-bottom cleaning of your home',
        'Deep cleaning of kitchen and all bathrooms',
        'Inside windows, window sills, and tracks',
        'Baseboards, light fixtures, and ceiling fans',
        'Under and behind movable furniture',
        'Eco-friendly products included',
        'Ideal for post-renovation or before events',
        'Satisfaction guaranteed'
      ]
    }
  ]

  return (
    <div className="services-page">
      <div className="page-grid-pattern" aria-hidden="true" />
      <div className="particles-background">
        {[...Array(60)].map((_, i) => {
          const delay = 0.5 + Math.random() * 5
          return (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${delay}s, ${delay}s`,
                animationDuration: `1s, ${15 + Math.random() * 10}s`
              }}
            />
          )
        })}
      </div>
      <div className="container">
        <div className="services-content" ref={sectionRef}>
          <div className="section-header" ref={titleRef}>
            <h1>Our Services</h1>
            <p>Comprehensive cleaning solutions tailored to your specific needs—residential, commercial, and beyond.</p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div 
                key={index}
                ref={el => cardsRef.current[index] = el}
                className="service-card"
              >
                <div className={`service-icon ${service.iconBg}`}>
                  <span>{service.icon}</span>
                </div>
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <div className="feature-check">✓</div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* The Services We Provide to Businesses */}
          <section className="business-services" ref={businessServicesRef}>
            <div className="section-header business-services-header" ref={businessServicesTitleRef}>
              <h2>The Services We Provide to Businesses</h2>
              <p>Professional cleaning solutions tailored to your commercial needs</p>
            </div>
            <div className="business-services-grid" role="list">
              {businessServices.map((service, index) => (
                <div
                  key={index}
                  ref={el => businessServiceCardsRef.current[index] = el}
                  role="button"
                  tabIndex={0}
                  aria-expanded={expandedService === index}
                  aria-label={`${service.title}. ${expandedService === index ? 'Expanded.' : 'Click to expand details.'}`}
                  className={`business-service-card ${expandedService === index ? 'expanded' : ''}`}
                  onClick={() => setExpandedService(expandedService === index ? null : index)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setExpandedService(expandedService === index ? null : index)
                    }
                  }}
                >
                  <div className="service-card-header">
                    <div className="business-service-icon" aria-hidden="true">{service.icon}</div>
                    <h3>{service.title}</h3>
                    <span className="expand-icon" aria-hidden="true">
                      <svg 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        className={expandedService === index ? 'rotated' : ''}
                      >
                        <path 
                          d="M6 9L12 15L18 9" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <p className="business-service-description">{service.description}</p>
                  <div className="service-details">
                    <ul>
                      {service.details.map((detail, detailIndex) => (
                        <li key={detailIndex}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <div className="business-services-cta">
              <Link to="/schedule" className="btn-primary business-services-btn">
                Schedule Today
              </Link>
            </div>
          </section>

          {/* The Services We Provide to Home Owners */}
          <section className="residential-services">
            <div className="section-header residential-services-header">
              <h2>The Services We Provide to Home Owners</h2>
              <p>Keeping your home spotless and comfortable</p>
            </div>
            <div className="business-services-grid residential-services-grid" role="list">
              {residentialServices.map((service, index) => (
                <div
                  key={index}
                  ref={el => residentialServiceCardsRef.current[index] = el}
                  role="button"
                  tabIndex={0}
                  aria-expanded={expandedResidential === index}
                  aria-label={`${service.title}. ${expandedResidential === index ? 'Expanded.' : 'Click to expand details.'}`}
                  className={`business-service-card ${expandedResidential === index ? 'expanded' : ''}`}
                  onClick={() => setExpandedResidential(expandedResidential === index ? null : index)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setExpandedResidential(expandedResidential === index ? null : index)
                    }
                  }}
                >
                  <div className="service-card-header">
                    <div className="business-service-icon" aria-hidden="true">{service.icon}</div>
                    <h3>{service.title}</h3>
                    <span className="expand-icon" aria-hidden="true">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={expandedResidential === index ? 'rotated' : ''}
                      >
                        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </div>
                  <p className="business-service-description">{service.description}</p>
                  <div className="service-details">
                    <ul>
                      {service.details.map((detail, detailIndex) => (
                        <li key={detailIndex}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <div className="residential-services-cta business-services-cta">
              <Link to="/schedule" className="btn-primary business-services-btn">Schedule</Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Services
