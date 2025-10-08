import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import RouteProgress from '../components/RouteProgress'
import ScrollToHash from '../components/ScrollToHash'

export default function AppLayout() {
  const location = useLocation()
  const reduce = useReducedMotion()

  // Solo fade; sin translateY para evitar re-muestreo/blur en imágenes
  const variants = reduce
    ? { initial: { opacity: 1 }, animate: { opacity: 1 }, exit: { opacity: 1 } }
    : { initial: { opacity: 0 }, animate: { opacity: 1, transition: { duration: 0.18 } }, exit: { opacity: 0, transition: { duration: 0.12 } } }

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral">
      <RouteProgress />
      <Navbar />
      <main className="flex-1">
        <ScrollToHash />
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname + location.hash}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}
