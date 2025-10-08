import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import NProgress from 'nprogress'

export default function RouteProgress() {
  const location = useLocation()

  useEffect(() => {
    NProgress.start()
    const t = setTimeout(() => NProgress.done(), 250)
    return () => {
      clearTimeout(t)
      NProgress.done()
    }
  }, [location.pathname, location.hash])

  return null
}
