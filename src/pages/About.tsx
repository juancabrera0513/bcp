import { useTranslation } from 'react-i18next'

export default function About() {
  const { t } = useTranslation()
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold mb-4">{t('about.title')}</h1>
      <h2 className="text-xl font-semibold mb-2">{t('about.missionTitle')}</h2>
      <p className="leading-7 max-w-3xl">{t('about.mission')}</p>
    </section>
  )
}
