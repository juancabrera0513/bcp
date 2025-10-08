import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import RouteProgress from '../components/RouteProgress'
import ScrollToHash from '../components/ScrollToHash'

const variants = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.22 } },
  exit:    { opacity: 0, y: -8, transition: { duration: 0.18 } },
}

export default function AppLayout() {
  const location = useLocation()
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <RouteProgress />
      <Navbar />
      <main className="flex-1">
        <ScrollToHash />
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname + location.hash}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}
