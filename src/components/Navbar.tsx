import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const [open, setOpen] = useState(false)

  const Item = ({ to, label }: { to: string; label: string }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-3 py-2 rounded-full text-sm font-medium transition-colors ${
          isActive
            ? 'bg-sky/10 text-neutral border border-sky/30'
            : 'text-neutral hover:text-gold hover:bg-sky/10'
        }`
      }
      onClick={() => setOpen(false)}
    >
      {label}
    </NavLink>
  )

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-gold/30">
      <div className="container h-16 flex items-center justify-between">
        {/* Logo grande, sin texto al lado */}
        <Link to="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="Fundación Bendecidos Con Propósitos"
            className="h-12 w-auto md:h-14 drop-shadow-sm"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          <Item to="/" label={t('nav.home')} />
          <Item to="/drives" label={t('nav.drives')} />
          <Item to="/contact" label={t('nav.contact')} />

          {/* Language Toggle */}
          <div className="ml-3 flex items-center gap-1 rounded-full bg-sky/10 p-1 border border-sky/20">
            <button
              className={`px-3 py-1 rounded-full text-sm transition ${
                i18n.language === 'en'
                  ? 'bg-sky text-white shadow'
                  : 'text-neutral'
              }`}
              onClick={() => i18n.changeLanguage('en')}
            >
              EN
            </button>
            <button
              className={`px-3 py-1 rounded-full text-sm transition ${
                i18n.language === 'es'
                  ? 'bg-sky text-white shadow'
                  : 'text-neutral'
              }`}
              onClick={() => i18n.changeLanguage('es')}
            >
              ES
            </button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-sky/10"
          onClick={() => setOpen(v => !v)}
          aria-label="Menu"
        >
          <span className="relative block w-5 h-0.5 bg-neutral">
            <span
              className={`absolute inset-0 -translate-y-2 bg-neutral h-0.5 transition-transform ${
                open ? 'rotate-45 translate-y-0' : ''
              }`}
            />
            <span
              className={`absolute inset-0 translate-y-2 bg-neutral h-0.5 transition-transform ${
                open ? '-rotate-45 translate-y-0' : ''
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-gold/30 bg-white">
          <div className="container py-3 flex flex-col gap-2">
            <Item to="/" label={t('nav.home')} />
            <Item to="/drives" label={t('nav.drives')} />
            <Item to="/contact" label={t('nav.contact')} />
            <div className="pt-2 flex items-center gap-2">
              <span className="text-sm text-neutral/70">{t('nav.language')}:</span>
              <button
                className={`px-3 py-1 rounded-full text-sm border ${
                  i18n.language === 'en'
                    ? 'bg-neutral text-white'
                    : 'bg-white text-neutral'
                }`}
                onClick={() => i18n.changeLanguage('en')}
              >
                EN
              </button>
              <button
                className={`px-3 py-1 rounded-full text-sm border ${
                  i18n.language === 'es'
                    ? 'bg-neutral text-white'
                    : 'bg-white text-neutral'
                }`}
                onClick={() => i18n.changeLanguage('es')}
              >
                ES
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
