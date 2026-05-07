import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Why Choose section matching the exact mockup design
function About() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const cardsRef = useRef([])

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

  const features = [
    {
      icon: '🌱',
      iconBg: 'bg-primary-600',
      title: 'Eco-Friendly',
      description: '100% green cleaning products safe for your family and environment'
    },
    {
      icon: '👥',
      iconBg: 'bg-secondary-500',
      title: 'Experienced Staff',
      description: 'Trained professionals with 10+ years of cleaning expertise'
    },
    {
      icon: '⏰',
      iconBg: 'bg-accent-600',
      title: 'Reliable Service',
      description: 'On-time service guarantee with flexible scheduling options'
    },
    {
      icon: '🛡️',
      iconBg: 'bg-primary-600',
      title: 'Insured & Bonded',
      description: 'Fully licensed and insured for your peace of mind'
    }
  ]

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="h-[500px] bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-20 pt-20">
        <div className="flex flex-col gap-16">
          {/* Section Header */}
          <div className="ml-6 w-[1232px] h-[84px] flex flex-col gap-3">
            <h2 
              ref={titleRef}
              className="ml-[344px] w-[550px] h-[44px] font-montserrat font-bold text-[36px] leading-[40px] text-center text-gray-900"
            >
              Why Choose Aeks Janitorials
            </h2>
            <p className="ml-[423px] w-[391px] h-[28px] font-roboto text-[20px] leading-[28px] text-center text-gray-600">
              Trusted by hundreds of satisfied customers
            </p>
          </div>

          {/* Features Grid */}
          <div className="ml-6 w-[1232px] flex gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                ref={el => cardsRef.current[index] = el}
                className="w-[284px] h-[192px] flex flex-col"
              >
                {/* Icon */}
                <div className="ml-[102px] w-20 h-20 flex">
                  <div className={`w-20 h-20 ${feature.iconBg} rounded-full flex items-center justify-center`}>
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                </div>

                {/* Title */}
                <div className="mt-6">
                  <h3 className="font-montserrat font-bold text-[18px] leading-[28px] text-center text-gray-900">
                    {feature.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="mt-3">
                  <p className="font-roboto text-[16px] leading-[24px] text-center text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
