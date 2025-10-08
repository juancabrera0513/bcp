import { Routes, Route } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'

// Import directo (sin lazy)
import Home from './pages/Home'
import Drives from './pages/Drives'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Routes>
      {/* El * permite rutas hijas bajo el layout */}
      <Route path="*" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="drives" element={<Drives />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}
