// src/components/Footer.tsx
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-gold/40 bg-sky/10">
      <div className="container py-8 text-sm text-neutral">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>© {year} Fundación Bendecidos Con Propósitos — {t('footer.rights')}</span>

          <div className="flex items-center gap-4 text-neutral/80">
            {/* usa Link para SPA */}
            <Link className="hover:text-gold" to="/contact" aria-label={t('nav.contact')}>
              {t('nav.contact')}
            </Link>

            {/* mailto sigue siendo ancla clásica (está bien así) */}
            <a
              className="hover:text-gold"
              href="mailto:BpB.bendecidos@gmail.com"
              aria-label="Enviar correo"
              rel="noopener noreferrer"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
