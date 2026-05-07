import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

// Testimonials section matching the exact mockup design
function Testimonials() {
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

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Office Manager',
      avatar: '👩‍💼',
      rating: 5,
      text: '"AEKS Janitorials transformed our office space. Their attention to detail and professional service is outstanding. Highly recommended!"'
    },
    {
      name: 'Michael Chen',
      role: 'Homeowner',
      avatar: '👨‍💻',
      rating: 5,
      text: '"Reliable, thorough, and eco-friendly. They\'ve been cleaning our home for 2 years and we couldn\'t be happier with their service."'
    },
    {
      name: 'Emma Davis',
      role: 'Restaurant Owner',
      avatar: '👩‍🍳',
      rating: 5,
      text: '"Their commercial cleaning service keeps our restaurant spotless. Professional team that understands food service requirements."'
    }
  ]

  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="h-[580px] bg-white"
    >
      <div className="max-w-7xl mx-auto px-20 pt-20">
        <div className="flex flex-col gap-16">
          {/* Section Header */}
          <div className="ml-6 w-[1232px] h-[84px] flex flex-col gap-3">
            <h2 
              ref={titleRef}
              className="ml-[415px] w-[408px] h-[44px] font-montserrat font-bold text-[36px] leading-[40px] text-center text-gray-900"
            >
              What Our Clients Say
            </h2>
            <p className="ml-[439px] w-[359px] h-[28px] font-roboto text-[20px] leading-[28px] text-center text-gray-600">
              Real feedback from satisfied customers
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="ml-6 w-[1232px] flex gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                ref={el => cardsRef.current[index] = el}
                className="w-[389px] h-[272px] bg-gray-50 rounded-2xl flex flex-col"
              >
                {/* Header with Avatar and Info */}
                <div className="ml-8 w-[325px] mt-8 flex gap-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-xl">{testimonial.avatar}</span>
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-roboto font-semibold text-[16px] leading-[24px] text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="font-roboto text-[14px] leading-[20px] text-gray-600">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="ml-8 w-[325px] h-6 mt-6 flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Text */}
                <div className="ml-8 w-[325px] h-[96px] mt-4 flex flex-col">
                  <p className="font-roboto text-[16px] leading-6 text-gray-700">
                    {testimonial.text}
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

export default Testimonials
