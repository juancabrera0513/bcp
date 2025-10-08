import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function Home() {
  const { t } = useTranslation()

  return (
    <div className="bg-gradient-to-br from-brand-50 via-white to-accent-50">
      <section className="container py-16 text-center space-y-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900">
          {t('brand.welcomeTitle')}
        </h1>
        <p className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed">
          {t('brand.heroLead')}
        </p>
        <p className="text-2xl font-bold text-accent-700">{t('brand.cta')}</p>
      </section>

      <section className="container pb-20">
        <div className="grid md:grid-cols-2 gap-8">
          <article className="card card-hover from-brand-50 to-white">
            <div className="card-content space-y-3">
              <h2 className="text-2xl font-bold text-brand-800">
                {t('drives.school.title')}
              </h2>
              <p className="text-gray-700">{t('drives.school.desc')}</p>
              <p className="text-sm text-gray-500">{t('drives.school.stat')}</p>
              <div className="pt-4">
                <Link to="/drives#school" className="btn-primary">
                  {t('buttons.explore')} <span className="arrow">→</span>
                </Link>
              </div>
            </div>
          </article>

          <article className="card card-hover from-accent-50 to-white">
            <div className="card-content space-y-3">
              <h2 className="text-2xl font-bold text-accent-700">
                {t('drives.christmas.title')}
              </h2>
              <p className="text-gray-700">{t('drives.christmas.desc')}</p>
              <div className="pt-4">
                <Link to="/drives#christmas" className="btn-accent">
                  {t('buttons.explore')} <span className="arrow">→</span>
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}
