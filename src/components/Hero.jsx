import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Hero section matching the exact mockup design
function Hero() {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const buttonsRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()
    
    // Animate elements in sequence
    tl.fromTo(titleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    )
    .fromTo(descriptionRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
      "-=0.4"
    )
    .fromTo(buttonsRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
      "-=0.3"
    )
    .fromTo(imageRef.current,
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
      "-=0.4"
    )
  }, [])

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="h-[700px] mt-20 shadow-lg bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-20 pt-[147px]">
        <div className="flex gap-[71px]">
          {/* Left Content */}
          <div className="w-[584px] ml-6 flex flex-col gap-8">
            <h1 
              ref={titleRef}
              className="w-[899px] h-[180px] font-montserrat font-bold text-[48px] leading-[60px] text-gray-900"
            >
              <span className="text-gray-900">Professional Cleaning</span>
              <span className="text-primary-600"> Solutions</span>
              <span className="text-gray-900"> You Can Trust</span>
            </h1>

            <p 
              ref={descriptionRef}
              className="w-[549px] h-[98px] font-roboto text-[20px] leading-[33px] text-gray-600"
            >
              Experience spotless results with our eco-friendly cleaning services. We deliver exceptional quality
              and reliability for your home and business.
            </p>

            <div 
              ref={buttonsRef}
              className="w-[584px] flex gap-4"
            >
              <button className="w-[185px] h-[60px] bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="font-roboto font-semibold text-[18px] text-white">Get Free Quote</span>
              </button>
              <button className="w-[171px] h-[64px] border-2 border-gray-300 rounded-lg flex items-center justify-center">
                <span className="font-roboto font-semibold text-[18px] text-gray-700">Our Services</span>
              </button>
            </div>
          </div>

          {/* Right Image Placeholder */}
          <div 
            ref={imageRef}
            className="w-[584px] h-[384px] mt-[76px] bg-gray-200 rounded-lg flex items-center justify-center"
          >
            <span className="text-gray-500 font-roboto text-lg">Hero Image Placeholder</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
