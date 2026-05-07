import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import suruVideo1 from '../assets/suruvideo1.mp4'
import suruVideo2 from '../assets/suruvideo2.mp4'
import suruImage from '../assets/suruimage1.jpg'
import './CleaningProcessMedia.css'

gsap.registerPlugin(ScrollTrigger)

/** Real cleaning clips + photo from `src/assets` (see `assets/MEDIA_README.md`). */
function CleaningProcessMedia() {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 82%',
        toggleActions: 'play none none reverse',
      },
    })

    tl.fromTo(
      headerRef.current,
      { opacity: 0, y: 28 },
      { opacity: 1, y: 0, duration: 0.75, ease: 'power2.out' }
    ).fromTo(
      cardsRef.current,
      { opacity: 0, y: 36 },
      { opacity: 1, y: 0, duration: 0.65, stagger: 0.12, ease: 'power2.out' },
      '-=0.35'
    )
  }, [])

  return (
    <section
      className="cleaning-process-media"
      ref={sectionRef}
      aria-labelledby="cleaning-process-heading"
    >
      <div className="container">
        <div className="section-header cleaning-process-media__header" ref={headerRef}>
          <h2 id="cleaning-process-heading">Cleaning in action</h2>
          <p>Real moments from our team on the job—thorough, professional, and consistent.</p>
        </div>

        <div className="cleaning-process-media__grid" role="list">
          <figure
            className="cleaning-process-media__card cleaning-process-media__card--image"
            ref={(el) => (cardsRef.current[0] = el)}
            role="listitem"
          >
            <div className="cleaning-process-media__frame">
              <img
                src={suruImage}
                alt="AEKS Janitorials team during a cleaning visit"
                loading="lazy"
                decoding="async"
              />
            </div>
          </figure>

          <div
            className="cleaning-process-media__card cleaning-process-media__card--video"
            ref={(el) => (cardsRef.current[1] = el)}
            role="listitem"
          >
            <div className="cleaning-process-media__frame cleaning-process-media__frame--video">
              <video
                controls
                playsInline
                preload="metadata"
                className="cleaning-process-media__video"
                aria-label="Cleaning team at work — video 1"
              >
                <source src={suruVideo1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <div
            className="cleaning-process-media__card cleaning-process-media__card--video"
            ref={(el) => (cardsRef.current[2] = el)}
            role="listitem"
          >
            <div className="cleaning-process-media__frame cleaning-process-media__frame--video">
              <video
                controls
                playsInline
                preload="metadata"
                className="cleaning-process-media__video"
                aria-label="Cleaning team at work — video 2"
              >
                <source src={suruVideo2} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CleaningProcessMedia
