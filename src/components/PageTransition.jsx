import { Outlet, useLocation } from 'react-router-dom'

function PageTransition() {
  const location = useLocation()
  return (
    <div key={location.pathname} className="page-transition">
      <Outlet />
    </div>
  )
}

export default PageTransition
