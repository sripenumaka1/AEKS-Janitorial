import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './Services.css'
import './ServicesBusinesses.css'

const businessServices = [
  {
    title: 'Daily Cleanup',
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

const industries = [
  'Corporate Offices',
  'Healthcare',
  'Retail Stores',
  'Manufacturing',
  'Education',
  'Hospitality',
  'Financial Services',
  'Technology',
  'Warehousing',
  'Government',
  'Fitness Centers',
  'Religious Facilities'
]

const businessTestimonial = {
  quote: 'AEKS Janitorials transformed our office space. Their attention to detail and consistency are unmatched. Our employees and clients notice the difference every day.',
  name: 'Jennifer M.',
  role: 'Office Manager, Healthcare Facility'
}

const businessProcess = [
  { step: '01', title: 'Contact Us', desc: 'Tell us about your facility, size, and cleaning needs.' },
  { step: '02', title: 'Free Assessment', desc: 'We visit your space and provide a custom proposal.' },
  { step: '03', title: 'Schedule Service', desc: 'Choose a plan and schedule that works for your business.' },
  { step: '04', title: 'Enjoy Results', desc: 'Consistent, professional cleaning—every time.' }
]

const businessFaq = [
  { q: 'What hours do you clean?', a: 'We work around your schedule. Most commercial cleaning happens after hours, but we can accommodate early morning or evening slots based on your needs.' },
  { q: 'Do you use eco-friendly products?', a: 'Yes. We use EPA-approved, eco-friendly cleaning products that are safe for your employees and the environment while delivering professional results.' },
  { q: 'How quickly can you start?', a: 'Typically within 1–2 weeks after your free assessment. We’ll confirm availability when you reach out.' },
  { q: 'Do you provide emergency or one-time cleaning?', a: 'Yes. We offer one-time deep cleans, post-construction cleanup, and can accommodate urgent requests when possible.' }
]

function ServicesBusinesses() {
  const businessServiceCardsRef = useRef([])
  const [expandedService, setExpandedService] = useState(null)
  const [expandedFaq, setExpandedFaq] = useState(null)

  useEffect(() => {
    if (expandedService === null) return
    const el = businessServiceCardsRef.current[expandedService]
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [expandedService])

  return (
    <div className="services-page business-services-page">
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
      <div className="page-grid-pattern" aria-hidden="true" />

      <div className="container">
        {/* Breadcrumbs */}
        <nav className="services-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className="breadcrumb-sep">/</span>
          <Link to="/services/homeowners">For Homeowners</Link>
          <span className="breadcrumb-sep">/</span>
          <span className="breadcrumb-current">For Businesses</span>
        </nav>

        {/* Header: hero + stats */}
        <header className="business-header">
          <div className="business-header-content">
            <div className="business-header-text">
              <h1>The Services We Provide to Businesses</h1>
              <p>Professional cleaning solutions tailored to your commercial needs. Trusted by businesses across multiple industries to maintain a consistently clean, healthy, and professional environment.</p>
            </div>
            <div className="business-header-stats">
              <div className="business-stat-box">
                <div className="business-stat-number">12+</div>
                <div className="business-stat-label">Years in Business</div>
              </div>
              <div className="business-stat-box">
                <div className="business-stat-number">100+</div>
                <div className="business-stat-label">Businesses Served</div>
              </div>
              <div className="business-stat-box">
                <div className="business-stat-number">24/7</div>
                <div className="business-stat-label">Availability</div>
              </div>
            </div>
          </div>
        </header>

        {/* Services header */}
        <section className="business-services-header-block">
          <h2>Our Core Services</h2>
          <p>Daily cleanup, floor care, and sanitization—we handle every part of your commercial space so you can focus on growing your business.</p>
          <a
            href="/Services.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary services-pdf-button"
          >
            View full services list (PDF)
          </a>
        </section>

        {/* Services grid: 3 expandable cards */}
        <section className="business-services">
          <div className="business-services-grid" role="list">
            {businessServices.map((service, index) => (
              <div
                key={index}
                ref={el => (businessServiceCardsRef.current[index] = el)}
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
                  <h3>{service.title}</h3>
                  <span className="expand-icon" aria-hidden="true">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={expandedService === index ? 'rotated' : ''}>
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
        </section>

        {/* Testimonial */}
        <section className="services-testimonial-section">
          <blockquote className="services-testimonial">
            <p>"{businessTestimonial.quote}"</p>
            <footer>
              <strong>{businessTestimonial.name}</strong>
              <span>{businessTestimonial.role}</span>
            </footer>
          </blockquote>
        </section>

        {/* How it works */}
        <section className="services-process-section">
          <h2>How It Works</h2>
          <div className="services-process-grid">
            {businessProcess.map((item, index) => (
              <div key={index} className="services-process-step">
                <span className="services-process-number">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Industries section */}
        <section className="business-industries-section">
          <h2>Industries We Serve</h2>
          <div className="business-industries-grid">
            {industries.map((industry, index) => (
              <div key={index} className="business-industry-tag">{industry}</div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="services-faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="services-faq-list">
            {businessFaq.map((item, index) => (
              <div
                key={index}
                className={`services-faq-item ${expandedFaq === index ? 'expanded' : ''}`}
                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), setExpandedFaq(expandedFaq === index ? null : index))}
                role="button"
                tabIndex={0}
              >
                <h4>{item.q}</h4>
                <div className="services-faq-answer"><p>{item.a}</p></div>
                <span className="services-faq-icon" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Cross-link */}
        <p className="services-cross-link">
          Need cleaning for your home? <Link to="/services/homeowners">See our services for homeowners →</Link>
        </p>

        {/* CTA section */}
        <section className="business-cta-section">
          <h2>Partner With Us Today</h2>
          <p>Request a comprehensive facility assessment and custom cleaning proposal—no obligation.</p>
          <Link to="/schedule" className="btn-primary business-services-btn">
            Schedule Today
          </Link>
        </section>
      </div>
    </div>
  )
}

export default ServicesBusinesses
