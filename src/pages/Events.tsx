import { useTranslation } from 'react-i18next'

export default function Events() {
  const { t } = useTranslation()
  const events: Array<{ date?: string; title: string; desc?: string }> = []

  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold mb-2">{t('events.title')}</h1>
      <p className="mb-6 text-gray-600">{t('events.subtitle')}</p>
      {events.length === 0 ? (
        <p className="text-gray-500">{t('events.empty')}</p>
      ) : (
        <ul className="grid gap-4">
          {events.map((e, i) => (
            <li key={i} className="p-4 border rounded-xl">
              <div className="text-sm text-gray-500">{e.date}</div>
              <div className="font-semibold">{e.title}</div>
              {e.desc && <p className="text-gray-700">{e.desc}</p>}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
