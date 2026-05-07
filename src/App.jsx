import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Seo from './components/Seo'
import Preloader from './components/Preloader'
import NavigationLoader from './components/NavigationLoader'
import PageTransition from './components/PageTransition'
import RouteScrollToTop from './components/RouteScrollToTop'
import BackToTopButton from './components/BackToTopButton'

// Route-level code splitting: load page JS only when visiting that route
const Home = lazy(() => import('./pages/Home'))
const ServicesHomeowners = lazy(() => import('./pages/ServicesHomeowners'))
const ServicesBusinesses = lazy(() => import('./pages/ServicesBusinesses'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const Schedule = lazy(() => import('./pages/Schedule'))

// Main app component for AEKS Janitorials website
function App() {
  return (
    <Router>
      <Seo />
      <NavigationLoader />
      <div className="App">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Header />
        <main id="main-content" tabIndex={-1}>
          <Suspense fallback={<Preloader />}>
            <Routes>
              <Route element={<PageTransition />}>
                <Route path="/" element={<Home />} />
                <Route path="/services/homeowners" element={<ServicesHomeowners />} />
                <Route path="/services/businesses" element={<ServicesBusinesses />} />
                <Route path="/services" element={<Navigate to="/services/businesses" replace />} />
                <Route path="/about" element={<About />} />
                <Route path="/schedule" element={<Schedule />} />
                <Route path="/contact" element={<Contact />} />
              </Route>
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <BackToTopButton />
      </div>
    </Router>
  )
}

export default App
