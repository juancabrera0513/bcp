import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const [open, setOpen] = useState(false)

  const navItem = ({ to, label }: { to: string; label: string }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-3 py-2 rounded-full text-sm font-medium transition-colors ${
          isActive ? 'bg-black/5 text-gray-900' : 'text-gray-700 hover:bg-black/5 hover:text-gray-900'
        }`
      }
      onClick={() => setOpen(false)}
    >
      {label}
    </NavLink>
  )

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
      <div className="container h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-extrabold tracking-tight">BcP</Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-2">
          {navItem({ to: '/', label: t('nav.home') })}
          {navItem({ to: '/drives', label: t('nav.drives') })}
          {navItem({ to: '/contact', label: t('nav.contact') })}

          <div className="ml-3 flex items-center gap-1 rounded-full bg-black/5 p-1">
            <button
              className={`px-3 py-1 rounded-full text-sm ${i18n.language === 'en' ? 'bg-white shadow text-gray-900' : 'text-gray-700'}`}
              onClick={() => i18n.changeLanguage('en')}
            >EN</button>
            <button
              className={`px-3 py-1 rounded-full text-sm ${i18n.language === 'es' ? 'bg-white shadow text-gray-900' : 'text-gray-700'}`}
              onClick={() => i18n.changeLanguage('es')}
            >ES</button>
          </div>
        </nav>

        {/* Mobile */}
        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-black/5"
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span className="relative block w-5 h-0.5 bg-gray-900">
            <span className={`absolute inset-0 -translate-y-2 bg-gray-900 h-0.5 transition-transform ${open ? 'rotate-45 translate-y-0' : ''}`}></span>
            <span className={`absolute inset-0 translate-y-2 bg-gray-900 h-0.5 transition-transform ${open ? '-rotate-45 translate-y-0' : ''}`}></span>
          </span>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="container py-3 flex flex-col gap-2">
            {navItem({ to: '/', label: t('nav.home') })}
            {navItem({ to: '/drives', label: t('nav.drives') })}
            {navItem({ to: '/contact', label: t('nav.contact') })}
            <div className="pt-2 flex items-center gap-2">
              <span className="text-sm text-gray-500">{t('nav.language')}:</span>
              <button
                className={`px-3 py-1 rounded-full text-sm border ${i18n.language === 'en' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
                onClick={() => i18n.changeLanguage('en')}
              >EN</button>
              <button
                className={`px-3 py-1 rounded-full text-sm border ${i18n.language === 'es' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
                onClick={() => i18n.changeLanguage('es')}
              >ES</button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
