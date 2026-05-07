import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Preloader from './Preloader'
import './NavigationLoader.css'

const MIN_DISPLAY_MS = 550
const FADE_OUT_MS = 350

function NavigationLoader() {
  const [isNavigating, setIsNavigating] = useState(false)
  const [isExiting, setIsExiting] = useState(false)
  const location = useLocation()

  // Hide preloader when we've arrived: wait min display, then fade out, then unmount
  useEffect(() => {
    if (!isNavigating) return

    let exitTimer
    const minTimer = setTimeout(() => {
      setIsExiting(true)
      exitTimer = setTimeout(() => {
        setIsNavigating(false)
        setIsExiting(false)
      }, FADE_OUT_MS)
    }, MIN_DISPLAY_MS)
    return () => {
      clearTimeout(minTimer)
      clearTimeout(exitTimer)
    }
  }, [location.pathname, isNavigating])

  // Listen for clicks on internal navigation links
  useEffect(() => {
    const handleClick = (e) => {
      const link = e.target.closest('a[href^="/"]')
      if (!link) return

      const href = link.getAttribute('href') || ''
      // Skip hash-only links (e.g. skip to content)
      if (href === '#' || href.startsWith('#')) return

      // Skip if navigating to same path
      const path = href.split('#')[0] || '/'
      const currentPath = location.pathname || '/'
      if (path === currentPath) return

      setIsNavigating(true)
    }

    document.addEventListener('click', handleClick, true)
    return () => document.removeEventListener('click', handleClick, true)
  }, [location.pathname])

  // Handle browser back/forward
  useEffect(() => {
    const handlePopState = () => {
      setIsNavigating(true)
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  if (!isNavigating && !isExiting) return null

  return (
    <div
      className={`navigation-loader-overlay ${isExiting ? 'navigation-loader-overlay--exiting' : ''}`}
      aria-live="polite"
      aria-busy={!isExiting}
    >
      <Preloader />
    </div>
  )
}

export default NavigationLoader
