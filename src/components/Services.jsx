import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Services section matching the exact mockup design
function Services() {
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
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: "power2.out" },
      "-=0.4"
    )
  }, [])

  const services = [
    {
      icon: '🏢',
      iconBg: 'bg-primary-600',
      title: 'Office Cleaning',
      description: 'Complete office sanitization and maintenance to keep your workplace spotless and professional.',
      features: ['Daily cleaning', 'Deep sanitization', 'Carpet cleaning']
    },
    {
      icon: '🏠',
      iconBg: 'bg-secondary-500',
      title: 'Residential Cleaning',
      description: 'Thorough home cleaning services to maintain a healthy and comfortable living environment.',
      features: ['Weekly/Monthly plans', 'Move-in/out cleaning', 'Kitchen & bathrooms']
    },
    {
      icon: '🏪',
      iconBg: 'bg-accent-600',
      title: 'Commercial Cleaning',
      description: 'Specialized cleaning for retail spaces, restaurants, and commercial facilities.',
      features: ['Floor maintenance', 'Window cleaning', 'Waste management']
    }
  ]

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="h-[688px] bg-white"
    >
      <div className="max-w-7xl mx-auto px-20 pt-20">
        <div className="flex flex-col gap-16">
          {/* Section Header */}
          <div className="ml-6 w-[1232px] h-[84px] flex flex-col gap-3">
            <h2 
              ref={titleRef}
              className="ml-[497px] w-[243px] h-[44px] font-montserrat font-bold text-[36px] leading-[40px] text-center text-gray-900"
            >
              Our Services
            </h2>
            <p className="ml-[303px] w-[632px] h-[28px] font-roboto text-[20px] leading-[28px] text-center text-gray-600">
              Comprehensive cleaning solutions tailored to meet your specific needs
            </p>
          </div>

          {/* Services Grid */}
          <div className="ml-6 w-[1232px] flex gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                ref={el => cardsRef.current[index] = el}
                className="w-[389px] h-[380px] flex flex-col bg-gray-50 rounded-2xl"
              >
                {/* Icon */}
                <div className="ml-8 w-16 h-16 mt-8 flex">
                  <div className={`w-16 h-16 ${service.iconBg} rounded-xl flex items-center justify-center`}>
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                </div>

                {/* Title */}
                <div className="w-[325px] ml-8 mt-6">
                  <h3 className="font-montserrat font-bold text-[20px] text-gray-900">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="w-[325px] h-[72px] ml-8 mt-4 flex flex-col">
                  <p className="font-roboto text-[16px] text-gray-600 leading-6">
                    {service.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="ml-8 w-[325px] h-[88px] mt-6 flex flex-col gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="w-[325px] flex gap-2">
                      <div className="w-[14px] h-6 flex items-center justify-center">
                        <div className="w-[14px] h-4 flex items-center justify-center">
                          <svg className="w-[14px] h-4" viewBox="0 0 14 16" fill="none">
                            <path d="M12 2L5 8L2 5" stroke="#078930" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                      <span className="font-roboto text-[16px] text-gray-600">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
