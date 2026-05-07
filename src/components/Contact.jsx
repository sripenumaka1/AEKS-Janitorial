import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Contact form section matching the exact mockup design
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const formRef = useRef(null)

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
    .fromTo(formRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.4"
    )
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your inquiry! We will contact you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    })
  }

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="h-[813px] bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-[272px] pt-20">
        <div className="flex flex-col gap-12">
          {/* Section Header */}
          <div className="ml-6 w-[848px] h-[84px] flex flex-col gap-3">
            <h2 
              ref={titleRef}
              className="ml-[233px] w-[388px] h-[44px] font-montserrat font-bold text-[36px] leading-[40px] text-center text-gray-900"
            >
              Get Your Free Quote
            </h2>
            <p className="ml-[110px] w-[634px] h-[28px] font-roboto text-[20px] leading-[28px] text-center text-gray-600">
              Tell us about your cleaning needs and we'll provide a customized quote
            </p>
          </div>

          {/* Contact Form */}
          <div 
            ref={formRef}
            className="ml-6 w-[848px] h-[521px] flex flex-col gap-6 bg-white rounded-2xl shadow-lg"
          >
            {/* Form Fields Row 1 */}
            <div className="ml-8 w-[784px] mt-8 flex gap-6">
              <div className="w-[380px] h-[82px] flex flex-col gap-2">
                <label className="font-roboto font-medium text-[16px] text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-[380px] h-[50px] bg-white border border-gray-300 rounded-lg px-4 font-roboto text-[16px] text-gray-400 focus:outline-none focus:border-primary-600"
                />
              </div>
              <div className="w-[380px] h-[82px] flex flex-col gap-2">
                <label className="font-roboto font-medium text-[16px] text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-[380px] h-[50px] bg-white border border-gray-300 rounded-lg px-4 font-roboto text-[16px] text-gray-400 focus:outline-none focus:border-primary-600"
                />
              </div>
            </div>

            {/* Form Fields Row 2 */}
            <div className="ml-8 w-[784px] flex gap-6">
              <div className="w-[380px] h-[82px] flex flex-col gap-2">
                <label className="font-roboto font-medium text-[16px] text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone"
                  className="w-[380px] h-[50px] bg-white border border-gray-300 rounded-lg px-4 font-roboto text-[16px] text-gray-400 focus:outline-none focus:border-primary-600"
                />
              </div>
              <div className="w-[380px] h-[82px] flex flex-col gap-2">
                <label className="font-roboto font-medium text-[16px] text-gray-700">
                  Service Type
                </label>
                <div className="w-[380px] h-[50px] bg-white border border-gray-300 rounded-lg flex items-center justify-between px-4">
                  <span className="font-roboto text-[16px] text-gray-700">Select service type</span>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Message Field */}
            <div className="ml-8 w-[784px] h-[161px] flex flex-col gap-2">
              <label className="font-roboto font-medium text-[16px] text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your cleaning requirements"
                rows={5}
                className="w-[784px] h-[130px] bg-white border border-gray-300 rounded-lg px-4 py-3 font-roboto text-[16px] text-gray-400 focus:outline-none focus:border-primary-600 resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="ml-8 w-[784px] flex justify-center">
              <button
                type="submit"
                onClick={handleSubmit}
                className="w-[185px] h-[60px] bg-primary-600 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors duration-300"
              >
                <span className="font-roboto font-semibold text-[18px] text-white">Get Free Quote</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
