import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Leaf, Users, Calendar, HeadphonesIcon, Target, Heart, Shield } from 'lucide-react'
import './About.css'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { number: '12+', label: 'Years in Business' },
  { number: '100+', label: 'Businesses Served' },
  { number: '1000+', label: 'Homes Cleaned' }
]

const values = [
  { icon: Leaf, title: 'Sustainability', desc: 'We use eco-friendly products and practices to protect your environment and ours.' },
  { icon: Heart, title: 'Care', desc: 'Every space we clean is treated with the same dedication and attention we\'d give our own.' },
  { icon: Shield, title: 'Integrity', desc: 'Honest pricing, reliable service, and transparent communication—always.' },
  { icon: Target, title: 'Excellence', desc: 'We don\'t settle for good enough. Our standards are set high, every single visit.' }
]

function About() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const cardsRef = useRef([])
  const heroRef = useRef(null)
  const storyRef = useRef(null)
  const missionRef = useRef(null)
  const statsRef = useRef([])
  const valuesRef = useRef([])

  // Animate Why Choose Us section
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
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power2.out" },
      "-=0.4"
    )
  }, [])

  // Animate stats and values
  useEffect(() => {
    if (!statsRef.current.length) return
    gsap.fromTo(statsRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: { trigger: statsRef.current[0]?.parentElement, start: 'top 85%', toggleActions: 'play none none reverse' }
      }
    )
  }, [])

  useEffect(() => {
    if (!valuesRef.current.length) return
    gsap.fromTo(valuesRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: { trigger: valuesRef.current[0]?.parentElement, start: 'top 85%', toggleActions: 'play none none reverse' }
      }
    )
  }, [])

  const features = [
    {
      icon: Leaf,
      iconBg: 'primary',
      title: 'Eco-Friendly Cleaning',
      description: '100% green cleaning products that are safe for your family and the environment.'
    },
    {
      icon: Users,
      iconBg: 'secondary',
      title: 'Trained & Bonded Staff',
      description: 'Certified professionals with extensive background checks and ongoing training.'
    },
    {
      icon: Calendar,
      iconBg: 'accent',
      title: 'Flexible Scheduling',
      description: 'We work around your schedule with daily, weekly, or monthly options.'
    },
    {
      icon: HeadphonesIcon,
      iconBg: 'primary',
      title: '24/7 Support',
      description: 'Round-the-clock customer service for all your cleaning needs.'
    }
  ]

  return (
    <div className="about-page">
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
      {/* Hero - 1600px × 900px (16:9), starts just below header */}
      <section className="about-hero" ref={heroRef} aria-labelledby="about-hero-heading">
        <div className="about-hero-image">
          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1600&h=900&fit=crop&q=80&auto=format"
            alt="AEKS Janitorials cleaning team at work"
            loading="eager"
            decoding="async"
          />
          <div className="about-hero-overlay" aria-hidden="true" />
        </div>
        <div className="about-hero-content">
          <h1 id="about-hero-heading">About AEKS Janitorials</h1>
          <p className="about-hero-lead">
            For over 12 years, we have been the trusted choice for professional cleaning—delivering spotless results for homes and businesses alike. Our commitment to quality, eco-friendly practices, and exceptional customer service has made us a leader in the janitorial industry.
          </p>
        </div>
      </section>

      <div className="container">
        {/* Stats */}
        <section className="about-stats" aria-label="Company statistics">
          <div className="about-stats-grid">
            {stats.map((item, index) => (
              <div key={index} ref={el => (statsRef.current[index] = el)} className="about-stat-item">
                <span className="about-stat-number">{item.number}</span>
                <span className="about-stat-label">{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Our Story */}
        <section className="about-story" ref={storyRef} aria-labelledby="about-story-heading">
          <h2 id="about-story-heading">Our Story</h2>
          <div className="about-story-content">
            <p>
              AEKS Janitorials was founded on a simple belief: every space deserves to be clean, healthy, and welcoming. What started as a small team serving local offices has grown into a full-service janitorial company trusted by hundreds of businesses and families across the region.
            </p>
            <p>
              We've stayed true to our roots—attention to detail, honest communication, and a genuine care for the people and places we serve. Our team undergoes rigorous training and background checks, and we use only eco-friendly, EPA-approved cleaning products that are safe for your family, your employees, and the environment.
            </p>
            <p>
              Today, we offer a full range of services: daily commercial cleaning, floor stripping and waxing, deep sanitization, residential house cleaning, move-in/out services, and more. Whether you need a one-time deep clean or ongoing maintenance, we're here to deliver results you can count on.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="about-mission" ref={missionRef} aria-labelledby="about-mission-heading">
          <h2 id="about-mission-heading">Our Mission & Vision</h2>
          <div className="about-mission-grid">
            <div className="about-mission-card">
              <h3>Our Mission</h3>
              <p>To deliver exceptional cleaning services that enhance the health, comfort, and productivity of every space we touch—while caring for the planet and the people in it.</p>
            </div>
            <div className="about-mission-card">
              <h3>Our Vision</h3>
              <p>To be the most trusted and respected janitorial company in our region—known for reliability, quality, and a commitment to sustainable practices.</p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="about-values" aria-labelledby="about-values-heading">
          <h2 id="about-values-heading">What We Stand For</h2>
          <div className="about-values-grid">
            {values.map((item, index) => {
              const IconComp = item.icon
              return (
                <div key={index} ref={el => (valuesRef.current[index] = el)} className="about-value-card">
                  <div className="about-value-icon">
                    <IconComp size={28} strokeWidth={2} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="about-content" ref={sectionRef} aria-labelledby="about-heading">
          <div className="section-header" ref={titleRef}>
            <h2 id="about-heading">Why Choose AEKS Janitorials</h2>
            <p>Four reasons our clients keep coming back—year after year</p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div 
                  key={index}
                  ref={el => cardsRef.current[index] = el}
                  className="feature-card"
                >
                  <div className={`feature-icon ${feature.iconBg}`}>
                    <IconComponent size={32} strokeWidth={2} />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Our Commitment */}
        <section className="about-commitment" aria-labelledby="about-commitment-heading">
          <h2 id="about-commitment-heading">Our Commitment to You</h2>
          <div className="about-commitment-content">
            <div className="about-commitment-item">
              <div className="about-commitment-icon"><Shield size={32} strokeWidth={2} /></div>
              <h3>100% Satisfaction Guarantee</h3>
              <p>If you're not completely satisfied with our work, we'll make it right—no questions asked. Your happiness is our priority.</p>
            </div>
            <div className="about-commitment-item">
              <div className="about-commitment-icon"><Leaf size={32} strokeWidth={2} /></div>
              <h3>Eco-Friendly Every Visit</h3>
              <p>We use green-certified products and sustainable methods to keep your space clean without harming the environment.</p>
            </div>
            <div className="about-commitment-item">
              <div className="about-commitment-icon"><Users size={32} strokeWidth={2} /></div>
              <h3>Trained, Vetted Staff</h3>
              <p>Every team member is background-checked, trained, and held to the highest standards of professionalism and care.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
