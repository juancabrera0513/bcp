import { useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'

type Pic = { src: string; alt: string; tag: 'school' | 'christmas' | 'team' }

const ALL_PICS: Pic[] = [
  { src: '/images/christmas-1.jpg', alt: 'Christmas basket 1', tag: 'christmas' },
  { src: '/images/christmas-2.jpg', alt: 'Christmas basket 2', tag: 'christmas' },
  { src: '/images/school-1.jpg', alt: 'School drive 1', tag: 'school' },
  { src: '/images/school-2.jpg', alt: 'School drive 2', tag: 'school' },
  { src: '/images/school-3.jpg', alt: 'School drive 3', tag: 'school' },
  { src: '/images/team.jpg',       alt: 'Team gathered',       tag: 'team' },
]

type Filter = 'all' | 'school' | 'christmas'

export default function Drives() {
  const { t } = useTranslation()
  const location = useLocation()
  const navigate = useNavigate()

  const initialFilter: Filter =
    location.hash === '#school' ? 'school'
    : location.hash === '#christmas' ? 'christmas'
    : 'all'

  const [filter, setFilter] = useState<Filter>(initialFilter)
  useEffect(() => {
    if (filter === 'all') navigate('/drives', { replace: true })
    else navigate(`/drives#${filter}`, { replace: true })
  }, [filter, navigate])

  const pics = useMemo(
    () => (filter === 'all' ? ALL_PICS : ALL_PICS.filter(p => p.tag === filter)),
    [filter]
  )

  const [open, setOpen] = useState(false)
  const [idx, setIdx] = useState(0)
  const openAt = (i: number) => { setIdx(i); setOpen(true) }
  const next = () => setIdx(i => (i + 1) % pics.length)
  const prev = () => setIdx(i => (i - 1 + pics.length) % pics.length)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!open) return
      if (e.key === 'Escape') setOpen(false)
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, pics.length])

  return (
    <section className="container py-12 space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">{t('drives.title')}</h1>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        <article id="christmas" className="border rounded-3xl p-6 bg-white shadow-soft">
          <h2 className="text-xl font-semibold mb-2">{t('drives.christmas.title')}</h2>
          <p className="text-gray-700">{t('drives.christmas.desc')}</p>
        </article>

        <article id="school" className="border rounded-3xl p-6 bg-white shadow-soft">
          <h2 className="text-xl font-semibold mb-2">{t('drives.school.title')}</h2>
          <p className="text-gray-700">{t('drives.school.desc')}</p>
          <p className="text-sm text-gray-500 mt-2">{t('drives.school.stat')}</p>
          <div className="text-xs text-gray-500 mt-1">{t('drives.school.tag2023')}</div>
        </article>
      </div>

      <div className="flex flex-wrap gap-2">
        <button className={`chip ${filter === 'all' ? 'chip-active' : ''}`} onClick={() => setFilter('all')}>
          {t('galleryFilters.all')}
        </button>
        <button className={`chip ${filter === 'school' ? 'chip-active' : ''}`} onClick={() => setFilter('school')}>
          {t('galleryFilters.school')}
        </button>
        <button className={`chip ${filter === 'christmas' ? 'chip-active' : ''}`} onClick={() => setFilter('christmas')}>
          {t('galleryFilters.christmas')}
        </button>
      </div>

      <ul className="masonry mt-2">
        {pics.map((g, i) => (
          <li key={g.src} className="masonry-item">
            <motion.button
              layoutId={g.src}
              onClick={() => openAt(i)}
              className="block w-full overflow-hidden rounded-2xl border bg-white shadow-soft"
            >
              <img src={g.src} alt={g.alt} className="w-full h-auto object-cover hover:opacity-95 transition" loading="lazy" />
            </motion.button>
          </li>
        ))}
      </ul>

      <AnimatePresence>
        {open && pics[idx] && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
              <motion.img
                layoutId={pics[idx].src}
                src={pics[idx].src}
                alt={pics[idx].alt}
                className="w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
                initial={{ borderRadius: 16 }} animate={{ borderRadius: 16 }}
              />
              <button onClick={() => setOpen(false)} className="absolute -top-10 right-0 text-white/90 hover:text-white text-2xl">✕</button>
              <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 px-4 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xl">‹</button>
              <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 px-4 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xl">›</button>
              <div className="mt-3 text-center text-white/90">{pics[idx].alt}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
