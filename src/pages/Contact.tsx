import { useTranslation } from 'react-i18next'

export default function Contact() {
  const { t } = useTranslation()
  return (
    <section className="container py-12 space-y-6">
      <h1 className="text-3xl font-bold">{t('contact.title')}</h1>
      <p className="text-gray-700 max-w-3xl">{t('contact.lead')}</p>
      <div className="p-6 border rounded-2xl bg-gray-50 inline-block">
        <a className="text-lg font-medium underline" href="mailto:BpB.bendecidos@gmail.com">
          {t('contact.email')}
        </a>
        <p className="text-gray-600 mt-2">{t('contact.thanks')}</p>
      </div>
    </section>
  )
}
