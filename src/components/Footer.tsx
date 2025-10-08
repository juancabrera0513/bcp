import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t bg-white">
      <div className="container py-8 text-sm text-gray-600">
        © {year} Bendecidos Con Propósitos — {t('footer.rights')}
      </div>
    </footer>
  )
}
