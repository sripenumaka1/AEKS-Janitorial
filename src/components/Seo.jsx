import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SITE_URL = 'https://www.aeksjanitorials.com'

const PAGE_META = {
  '/': {
    title: 'AEKS Janitorials | #1 Janitorial Services in Lower Mainland BC',
    description: 'Leading janitorial and cleaning services in the Lower Mainland, British Columbia. Commercial, residential & office cleaning in Vancouver, Surrey, Burnaby & Delta. Eco-friendly, trusted by 100s. Free quote: (604) 317-2616.',
    ogTitle: 'AEKS Janitorials | Top Janitorial Services in Lower Mainland BC',
    ogDescription: 'Trusted janitorial & cleaning services across the Lower Mainland, BC. Homes, offices & commercial. Eco-friendly. Call (604) 317-2616.',
  },
  '/services': {
    title: 'Janitorial Services | Lower Mainland BC | AEKS Janitorials',
    description: 'Professional janitorial services across the Lower Mainland, British Columbia. Office cleaning, residential, commercial. Daily cleanup, floor waxing, sanitization. Serving Vancouver, Surrey, Burnaby, Delta & more.',
    ogTitle: 'Janitorial Services in Lower Mainland BC | AEKS Janitorials',
    ogDescription: 'Office, residential & commercial cleaning in the Lower Mainland, BC. Daily cleanup, floor care, sanitization.',
  },
  '/services/homeowners': {
    title: 'Residential Cleaning | Lower Mainland BC | AEKS Janitorials',
    description: 'Home cleaning services in the Lower Mainland, British Columbia. Move-in/out, ongoing & one-time cleaning. Eco-friendly. Serving Vancouver, Surrey, Burnaby, Delta, Coquitlam & Fraser Valley. Free quote.',
    ogTitle: 'Residential Cleaning in Lower Mainland BC | AEKS Janitorials',
    ogDescription: 'Trusted home cleaning across Lower Mainland, BC. Move-in/out, recurring & one-time. Eco-friendly products.',
  },
  '/services/businesses': {
    title: 'Commercial Janitorial Services | Lower Mainland BC | AEKS Janitorials',
    description: 'Commercial janitorial services in the Lower Mainland, British Columbia. Daily office cleaning, stripping & waxing, sanitization. Vancouver, Surrey, Burnaby, Richmond & Metro Vancouver. Free quote.',
    ogTitle: 'Commercial Janitorial in Lower Mainland BC | AEKS Janitorials',
    ogDescription: 'Professional commercial cleaning across Lower Mainland, BC. Daily cleanup, floor care, sanitization for offices & businesses.',
  },
  '/about': {
    title: 'About AEKS Janitorials | Lower Mainland BC\'s Trusted Janitorial Company',
    description: 'AEKS Janitorials: 12+ years serving the Lower Mainland, British Columbia. Our story, mission & commitment to eco-friendly janitorial services for homes & businesses across Metro Vancouver.',
    ogTitle: 'About AEKS Janitorials | Lower Mainland BC Janitorial Services',
    ogDescription: 'Learn about AEKS Janitorials – trusted janitorial services across the Lower Mainland, BC. Our story, values & eco-friendly approach.',
  },
  '/schedule': {
    title: 'Online Booking | Lower Mainland BC | AEKS Janitorials',
    description: 'Book a free consultation for janitorial services in the Lower Mainland, British Columbia. Pick a time online—no obligation. Questions? Call (604) 317-2616.',
    ogTitle: 'Online Booking | AEKS Janitorials Lower Mainland BC',
    ogDescription: 'Book a free consultation for cleaning services in the Lower Mainland, BC. Online scheduling, flexible times, no obligation.',
  },
  '/contact': {
    title: 'Contact AEKS Janitorials | Lower Mainland BC Janitorial Services',
    description: 'Contact AEKS Janitorials for janitorial services in the Lower Mainland, British Columbia. 11826 86 Ave, BC. Call (604) 317-2616 or email. We respond within 24 hours.',
    ogTitle: 'Contact AEKS Janitorials | Lower Mainland BC',
    ogDescription: 'Get in touch for janitorial & cleaning services in the Lower Mainland, BC. Phone, email, or visit. Quick response.',
  },
}

function getMetaForPath(pathname) {
  return PAGE_META[pathname] || PAGE_META['/']
}

function setMetaTag(nameOrProperty, content, isProperty = false) {
  const attr = isProperty ? 'property' : 'name'
  let el = document.querySelector(`meta[${attr}="${nameOrProperty}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, nameOrProperty)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content || '')
}

function setCanonical(url) {
  let el = document.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', url)
}

function Seo() {
  const { pathname } = useLocation()

  useEffect(() => {
    const meta = getMetaForPath(pathname)
    const canonicalUrl = `${SITE_URL}${pathname === '/' ? '' : pathname}`.replace(/\/$/, '') || SITE_URL

    document.title = meta.title
    setMetaTag('description', meta.description)
    setCanonical(canonicalUrl)
    setMetaTag('og:title', meta.ogTitle, true)
    setMetaTag('og:description', meta.ogDescription, true)
    setMetaTag('og:url', canonicalUrl, true)
    setMetaTag('og:type', 'website', true)
    setMetaTag('og:locale', 'en_CA', true)
  }, [pathname])

  return null
}

export default Seo
