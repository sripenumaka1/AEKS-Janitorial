import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Star } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/pagination'
import './Home.css'
import heroImage from '../assets/finalheroimage.png'
import CleaningProcessMedia from '../components/CleaningProcessMedia'

gsap.registerPlugin(ScrollTrigger)

function Home() {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const buttonsRef = useRef(null)
  const whyChooseRef = useRef(null)
  const whyChooseTitleRef = useRef(null)
  const whyChooseCardsRef = useRef([])
  const processRef = useRef(null)
  const processTitleRef = useRef(null)
  const processStepsRef = useRef([])
  const testimonialsRef = useRef(null)
  const testimonialsTitleRef = useRef(null)
  const [displayedText, setDisplayedText] = useState('')
  const fullText = 'Cleaning You Trust'
  const services = ['Waxing', 'Stripping', 'Carpet Cleaning', 'Glass Cleaning', 'Daily Cleanup']

  // Typewriter effect
  useEffect(() => {
    let currentIndex = 0
    const typeInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typeInterval)
      }
    }, 80) // Speed of typing

    return () => clearInterval(typeInterval)
  }, [])

  useEffect(() => {
    // Hero animations - fade in description and buttons after typing completes
    const tl = gsap.timeline({ delay: 1.8 }) // Delay until typing is done
    
    tl.fromTo(descriptionRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    )
    .fromTo(buttonsRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
      "-=0.4"
    )

    // Why Choose section animations
    const whyTl = gsap.timeline({
      scrollTrigger: {
        trigger: whyChooseRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    })
    
    whyTl.fromTo(whyChooseTitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    )
    .fromTo(whyChooseCardsRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power2.out" },
      "-=0.4"
    )

    // Process section animations
    const processTl = gsap.timeline({
      scrollTrigger: {
        trigger: processRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    })
    
    processTl.fromTo(processTitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    )
    .fromTo(processStepsRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.7, stagger: 0.2, ease: "power2.out" },
      "-=0.4"
    )

    // Testimonials section animations
    const testTl = gsap.timeline({
      scrollTrigger: {
        trigger: testimonialsRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    })
    
    testTl.fromTo(testimonialsTitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    )
  }, [])

  const whyChooseReasons = [
    {
      icon: '🌱',
      iconBg: 'primary',
      title: 'Eco-Friendly',
      description: '100% green cleaning products safe for your family and environment'
    },
    {
      icon: '👥',
      iconBg: 'secondary',
      title: 'Experienced Staff',
      description: 'Trained professionals with 10+ years of cleaning expertise'
    },
    {
      icon: '⏰',
      iconBg: 'accent',
      title: 'Reliable Service',
      description: 'On-time service guarantee with flexible scheduling options'
    },
    {
      icon: '🛡️',
      iconBg: 'primary',
      title: 'Insured & Bonded',
      description: 'Fully licensed and insured for your peace of mind'
    }
  ]

  // Process steps
  const processSteps = [
    {
      number: '01',
      title: 'Request a Quote',
      description: 'Fill out our quick form or give us a call. We will assess your cleaning needs and provide a free, no-obligation quote.',
      icon: '📝'
    },
    {
      number: '02',
      title: 'Schedule Service',
      description: 'Choose a convenient time that works for you. We offer flexible scheduling, including evenings and weekends.',
      icon: '📅'
    },
    {
      number: '03',
      title: 'We Clean',
      description: 'Our professional team arrives on time with all equipment and eco-friendly supplies to deliver exceptional results.',
      icon: '🧹'
    },
    {
      number: '04',
      title: 'Enjoy the Results',
      description: 'Relax in your spotless, fresh space. We guarantee your satisfaction and are here for ongoing maintenance whenever you need us.',
      icon: '✨'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Homeowner',
      photo: 'https://i.pravatar.cc/150?img=1',
      rating: 5,
      quote: 'AEKS Janitorials transformed our office space. Their attention to detail is unmatched. I highly recommend their services.',
      bgClass: 'white'
    },
    {
      name: 'Michael Chen',
      role: 'Business Owner',
      photo: 'https://i.pravatar.cc/150?img=12',
      rating: 5,
      quote: 'Professional, reliable, and eco-friendly. They have been cleaning our restaurant for over a year now. We could not be happier.',
      bgClass: 'gray'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Property Manager',
      photo: 'https://i.pravatar.cc/150?img=5',
      rating: 5,
      quote: 'The team is always on time and thorough. Their flexible scheduling makes managing multiple properties so much easier.',
      bgClass: 'white'
    },
    {
      name: 'David Thompson',
      role: 'Office Manager',
      photo: 'https://i.pravatar.cc/150?img=13',
      rating: 5,
      quote: 'Exceptional service from start to finish. The staff is courteous and the results speak for themselves. Five stars!',
      bgClass: 'gray'
    }
  ]

  return (
    <div className="home-page">
      <div className="page-grid-pattern" aria-hidden="true" />
      {/* Floating Particles Background */}
      <div className="particles-background">
        {[...Array(60)].map((_, i) => {
          const delay = 0.5 + Math.random() * 5;
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
          );
        })}
      </div>

      {/* Hero Section */}
      <section className="hero" ref={heroRef}>
        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 ref={titleRef} className="typewriter-text">
                {displayedText}
                {displayedText === fullText && (
                  <span className="bouncing-arrow" aria-hidden="true">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                )}
              </h1>
              <p ref={descriptionRef}>
                Leading janitorial services in the Lower Mainland, British Columbia.
                Eco-friendly cleaning for homes and businesses across Vancouver, Surrey, Burnaby & Metro Vancouver.
              </p>
              <div className="hero-buttons" ref={buttonsRef}>
                <Link to="/schedule" className="btn-primary">Schedule</Link>
                <Link to="/services" className="btn-secondary">View Our Services</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <img src={heroImage} alt="AEKS Janitorials - janitorial and cleaning services in the Lower Mainland, British Columbia" className="hero-image" />
        </div>
        
        {/* Rotating Services Bar */}
        <div className="rotating-services">
          <div className="rotating-services-content">
            {/* Duplicate the services array for seamless loop */}
            {[...services, ...services].map((service, index) => (
              <span key={index} className="service-word">
                {service}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose" ref={whyChooseRef} aria-labelledby="why-choose-heading">
        <div className="container">
          <div className="why-choose-layout">
            {/* Left Cards */}
            <div className="why-choose-cards-stack">
              {whyChooseReasons.map((reason, index) => (
                <div 
                  key={index}
                  ref={el => whyChooseCardsRef.current[index] = el}
                  className="why-choose-card"
                >
                  <div className={`why-icon ${reason.iconBg}`}>
                    <span>{reason.icon}</span>
                  </div>
                  <div className="why-card-text">
                    <h3>{reason.title}</h3>
                    <p>{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Content */}
            <div className="why-choose-content" ref={whyChooseTitleRef}>
              <h2 id="why-choose-heading">Why Choose AEKS Janitorials</h2>
              <p className="why-choose-description">
                Trusted by hundreds of satisfied customers across the Lower Mainland, British Columbia, AEKS Janitorials has built
                a reputation for excellence in janitorial and cleaning services. Our commitment
                to quality, reliability, and eco-friendly practices sets us apart. With over a decade of
                experience serving Vancouver, Surrey, Burnaby, Delta and Metro Vancouver, we understand that every space is unique and deserves personalized attention.
                Our professional team uses state-of-the-art equipment and green cleaning solutions to ensure
                your environment is not just clean, but healthy and safe for everyone.
              </p>
              <Link to="/about" className="btn-primary why-choose-cta">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CleaningProcessMedia />

      {/* Process Section */}
      <section className="process" ref={processRef} aria-labelledby="how-it-works-heading">
        <div className="container">
          <div className="section-header" ref={processTitleRef}>
            <h2 id="how-it-works-heading">How It Works</h2>
            <p>Four simple steps to a spotless space</p>
          </div>
          <div className="process-steps">
            {processSteps.map((step, index) => (
              <div 
                key={index}
                ref={el => processStepsRef.current[index] = el}
                className="process-step"
              >
                <div className="step-number">{step.number}</div>
                <div className="step-icon">{step.icon}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="process-cta">
            <p className="process-cta-text">Ready to get started?</p>
            <Link to="/schedule" className="btn-primary">Schedule</Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials" ref={testimonialsRef} aria-labelledby="testimonials-heading">
        <div className="container">
          <div className="section-header" ref={testimonialsTitleRef}>
            <h2 id="testimonials-heading">What Our Clients Say</h2>
            <p>Hear from businesses and families who trust us with their spaces</p>
          </div>

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            className="testimonials-carousel"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className={`testimonial-card ${testimonial.bgClass}`}>
                  <div className="testimonial-header">
                    <img
                      src={testimonial.photo}
                      alt={`${testimonial.name}, ${testimonial.role}`}
                      className="client-photo"
                      loading="lazy"
                      width={80}
                      height={80}
                      decoding="async"
                    />
                    <div className="client-info">
                      <h4>{testimonial.name}</h4>
                      <p className="client-role">{testimonial.role}</p>
                      <div className="star-rating">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} size={18} fill="#fbbf24" color="#fbbf24" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="testimonial-quote">"{testimonial.quote}"</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  )
}

export default Home