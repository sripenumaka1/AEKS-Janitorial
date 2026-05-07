import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { GOOGLE_CALENDAR_BOOKING_URL } from '../config/scheduling'
import './Schedule.css'

gsap.registerPlugin(ScrollTrigger)

function Schedule() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    })
    tl.fromTo(titleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    )
    .fromTo(contentRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
      "-=0.4"
    )
  }, [])

  return (
    <div className="schedule-page">
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
        <div className="schedule-content" ref={sectionRef}>
          <div className="section-header" ref={titleRef}>
            <h1>Online Booking</h1>
            <p>
              Choose a time that fits your day. We’ll go over your space and cleaning needs, and provide a free,
              no-obligation quote.
            </p>
          </div>

          <div className="schedule-booking" ref={contentRef}>
            {GOOGLE_CALENDAR_BOOKING_URL ? (
              <div className="schedule-google-wrap">
                <div className="schedule-google-actions">
                  <a
                    href={GOOGLE_CALENDAR_BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary schedule-google-primary"
                  >
                    Book a time with Google Calendar
                  </a>
                  <p className="schedule-google-hint">
                    Opens your appointment page in a new tab. If the calendar below does not load in your browser, use this button.
                  </p>
                </div>
                <div className="schedule-calendar-embed">
                  <iframe
                    title="Book a time — Google Calendar"
                    src={GOOGLE_CALENDAR_BOOKING_URL}
                    loading="lazy"
                  />
                </div>
              </div>
            ) : (
              <div className="schedule-placeholder">
                <p className="schedule-placeholder-text">
                  To enable Google Calendar booking on this page, create an{' '}
                  <strong>Appointment schedule</strong> in Google Calendar, copy the booking link, and set{' '}
                  <code className="schedule-env-code">VITE_GOOGLE_CALENDAR_BOOKING_URL</code> in your{' '}
                  <code className="schedule-env-code">.env</code> file (and in your hosting provider’s environment variables for production).
                </p>
                <p className="schedule-placeholder-text schedule-placeholder-sub">
                  Until then, reach out by phone or email and we’ll find a time together.
                </p>
                <div className="schedule-ctas">
                  <Link to="/contact" className="btn-primary">Contact Us</Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Schedule
