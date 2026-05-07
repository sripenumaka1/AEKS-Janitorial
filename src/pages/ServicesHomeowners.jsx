import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './Services.css'
import './ServicesHomeowners.css'

const residentialServices = [
  {
    title: 'Move In / Out Cleanup',
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

const perfectFor = [
  'Apartments',
  'Single-Family Homes',
  'Condos',
  'Townhouses',
  'Move-In/Out',
  'Spring Cleaning',
  'Post-Renovation',
  'Busy Families',
  'Empty Nesters',
  'Pet Owners',
  'First-Time Buyers',
  'Vacation Rentals'
]

const homeownerTestimonial = {
  quote: 'Reliable, thorough, and eco-friendly. AEKS has been cleaning our home for two years. My kids and pets are safe, and the house always looks amazing.',
  name: 'Sarah T.',
  role: 'Homeowner'
}

const homeownerProcess = [
  { step: '01', title: 'Contact Us', desc: 'Tell us about your home and the type of cleaning you need.' },
  { step: '02', title: 'Free Quote', desc: 'We provide a custom quote with no obligation.' },
  { step: '03', title: 'Choose Schedule', desc: 'Pick weekly, bi-weekly, monthly, or one-time.' },
  { step: '04', title: 'Enjoy Your Clean Home', desc: 'We show up on time and leave it spotless.' }
]

const homeownerFaq = [
  { q: 'Do you bring your own supplies?', a: 'Yes. We bring eco-friendly cleaning products and equipment. If you prefer specific products, we can use yours.' },
  { q: 'What if I have pets?', a: 'We’re pet-friendly. Our products are safe for pets, and we’re careful around animals. Let us know about any special considerations.' },
  { q: 'Can I skip or reschedule a visit?', a: 'Absolutely. Give us 24 hours notice and we’ll reschedule at no charge. We work around your life.' },
  { q: 'How do I give you access to my home?', a: 'You can be home, leave a key, use a lockbox, or grant building access. We’ll work with whatever is easiest for you.' }
]

function ServicesHomeowners() {
  const residentialServiceCardsRef = useRef([])
  const [expandedResidential, setExpandedResidential] = useState(null)
  const [expandedFaq, setExpandedFaq] = useState(null)

  useEffect(() => {
    if (expandedResidential === null) return
    const el = residentialServiceCardsRef.current[expandedResidential]
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [expandedResidential])

  return (
    <div className="services-page homeowners-services-page">
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
          <Link to="/services/businesses">For Businesses</Link>
          <span className="breadcrumb-sep">/</span>
          <span className="breadcrumb-current">For Homeowners</span>
        </nav>

        {/* Header: hero + stats */}
        <header className="homeowners-header">
          <div className="homeowners-header-content">
            <div className="homeowners-header-text">
              <h1>The Services We Provide to Home Owners</h1>
              <p>Keeping your home spotless and comfortable. Eco-friendly cleaning tailored to your schedule—whether you need a one-time deep clean, ongoing maintenance, or move-in/out help.</p>
            </div>
            <div className="homeowners-header-stats">
              <div className="homeowners-stat-box">
                <div className="homeowners-stat-number">1000+</div>
                <div className="homeowners-stat-label">Homes Served</div>
              </div>
              <div className="homeowners-stat-box">
                <div className="homeowners-stat-number">100%</div>
                <div className="homeowners-stat-label">Eco-Safe Products</div>
              </div>
              <div className="homeowners-stat-box">
                <div className="homeowners-stat-number">12+</div>
                <div className="homeowners-stat-label">Years in Business</div>
              </div>
            </div>
          </div>
        </header>

        {/* Services header */}
        <section className="homeowners-services-header-block">
          <h2>Our Core Services</h2>
          <p>Move-in/out, ongoing maintenance, or a one-time refresh—we deliver top-to-bottom cleaning so you can focus on what matters most.</p>
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
        <section className="residential-services">
          <div className="business-services-grid residential-services-grid" role="list">
            {residentialServices.map((service, index) => (
              <div
                key={index}
                ref={el => (residentialServiceCardsRef.current[index] = el)}
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
                  <h3>{service.title}</h3>
                  <span className="expand-icon" aria-hidden="true">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={expandedResidential === index ? 'rotated' : ''}>
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

        {/* Perfect For section */}
        <section className="homeowners-perfect-for-section">
          <h2>Perfect For</h2>
          <div className="homeowners-perfect-for-grid">
            {perfectFor.map((item, index) => (
              <div key={index} className="homeowners-perfect-for-tag">{item}</div>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        <section className="services-testimonial-section">
          <blockquote className="services-testimonial">
            <p>"{homeownerTestimonial.quote}"</p>
            <footer>
              <strong>{homeownerTestimonial.name}</strong>
              <span>{homeownerTestimonial.role}</span>
            </footer>
          </blockquote>
        </section>

        {/* How it works */}
        <section className="services-process-section">
          <h2>How It Works</h2>
          <div className="services-process-grid">
            {homeownerProcess.map((item, index) => (
              <div key={index} className="services-process-step">
                <span className="services-process-number">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="services-faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="services-faq-list">
            {homeownerFaq.map((item, index) => (
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
          Need commercial cleaning? <Link to="/services/businesses">See our services for businesses →</Link>
        </p>

        {/* CTA section */}
        <section className="homeowners-cta-section">
          <h2>Partner With Us Today</h2>
          <p>Get a custom cleaning plan tailored to your home—no obligation.</p>
          <Link to="/schedule" className="btn-primary business-services-btn">
            Schedule Today
          </Link>
        </section>
      </div>
    </div>
  )
}

export default ServicesHomeowners
