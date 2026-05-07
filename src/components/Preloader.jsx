import logo1 from '../assets/logo1.svg'
import './Preloader.css'

function Preloader() {
  return (
    <div className="preloader" aria-label="Loading page">
      <div className="preloader-inner">
        {/* Circulating line - SVG circle with animated stroke */}
        <svg className="preloader-ring" viewBox="0 0 120 120" aria-hidden="true">
          <circle
            className="preloader-ring-track"
            cx="60"
            cy="60"
            r="54"
            fill="none"
            strokeWidth="3"
          />
          <circle
            className="preloader-ring-line"
            cx="60"
            cy="60"
            r="54"
            fill="none"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
        {/* AEKS Logo centered inside the ring */}
        <img
          src={logo1}
          alt=""
          className="preloader-logo"
          width={80}
          height={74}
          aria-hidden="true"
        />
      </div>
    </div>
  )
}

export default Preloader
