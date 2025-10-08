import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-gold/40 bg-sky/10">
      <div className="container py-8 text-sm text-neutral">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>© {year} Fundación Bendecidos Con Propósitos — {t('footer.rights')}</span>
          <div className="flex items-center gap-3 text-neutral/70">
            <a className="hover:text-gold" href="mailto:BpB.bendecidos@gmail.com">Email</a>
            <a className="hover:text-gold" href="/contact">{t('nav.contact')}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
