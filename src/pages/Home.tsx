import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function Home() {
  const { t } = useTranslation()

  return (
    <div className="bg-gradient-to-br from-white via-sky/10 to-white">
      {/* HERO */}
      <section className="container py-16 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gold">
          Fundación Bendecidos Con Propósitos
        </h1>
        <p className="max-w-3xl mx-auto text-neutral/90 text-lg leading-relaxed">
          {t('brand.heroLead')}
        </p>
        <p className="text-2xl font-bold text-neutral">{t('brand.cta')}</p>
      </section>

      {/* CTAs */}
      <section className="container pb-20">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Escolar */}
          <article className="card card-hover from-white to-sky/10 border-gold/20">
            <div className="card-content space-y-3">
              <h2 className="text-2xl font-bold text-gold">{t('drives.school.title')}</h2>
              <p className="text-neutral/90">{t('drives.school.desc')}</p>
              <p className="text-sm text-neutral/70">{t('drives.school.stat')}</p>
              <div className="pt-4">
                <Link to="/drives#school" className="btn-primary">
                  {t('buttons.explore')} <span className="arrow">→</span>
                </Link>
              </div>
            </div>
          </article>

          {/* Navidad */}
          <article className="card card-hover from-white to-sky/10 border-gold/20">
            <div className="card-content space-y-3">
              <h2 className="text-2xl font-bold text-gold">{t('drives.christmas.title')}</h2>
              <p className="text-neutral/90">{t('drives.christmas.desc')}</p>
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
