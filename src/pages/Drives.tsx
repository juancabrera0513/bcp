import { useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

type Tag = 'school' | 'christmas'
type Pic = {
  id: string
  src: string
  alt: string
  tag: Tag
}

const ALL_PICS: Pic[] = [
  { id: 'christmas1', src: '/images/christmas-1.jpg', alt: 'Christmas basket 1', tag: 'christmas' },
  { id: 'christmas2', src: '/images/christmas-2.jpg', alt: 'Christmas basket 2', tag: 'christmas' },
  { id: 'school1',    src: '/images/school-1.jpg',    alt: 'School drive 1',    tag: 'school'    },
  { id: 'school2',    src: '/images/school-2.jpg',    alt: 'School drive 2',    tag: 'school'    },
  { id: 'school3',    src: '/images/school-3.jpg',    alt: 'School drive 3',    tag: 'school'    },
  { id: 'team',       src: '/images/team.jpg',        alt: 'Team gathered',     tag: 'school'    },
]

type Filter = 'all' | Tag

export default function Drives() {
  const { t } = useTranslation()
  const location = useLocation()
  const navigate = useNavigate()
  const reduce = useReducedMotion()

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

  // Lightbox
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
      <header className="text-center max-w-3xl mx-auto space-y-4">
  <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gold">
    {t('drives.title')}
  </h1>
  {t('drives.intro') && (
    <p className="text-neutral/70 text-lg sm:text-xl leading-relaxed font-light">
      {t('drives.intro')}
    </p>
  )}
  <div className="w-24 h-1 bg-gold/60 mx-auto rounded-full mt-2"></div>
</header>


      {/* Filtros */}
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

      {/* GALERÍA GRID con aspecto uniforme */}
      <ul className="gallery-grid">
        {pics.map((g, i) => (
          <li key={g.src} className="figure-card">
            <figure>
              <button onClick={() => openAt(i)} className="block w-full">
                <div className="media-frame">
                  <img
                    src={g.src}
                    alt={g.alt}
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </button>

              {/* Caption por imagen desde i18n (img.<id>.*) */}
              {t(`img.${g.id}.title`, { defaultValue: '' }) && (
                <figcaption className="px-4 sm:px-5 pb-5 text-center">
                  <h3 className="mt-4 text-lg sm:text-xl font-semibold text-neutral">
                    {t(`img.${g.id}.title`)}
                  </h3>
                  {t(`img.${g.id}.p1`, { defaultValue: '' }) && (
                    <p className="mt-3 text-neutral/90 leading-relaxed">
                      {t(`img.${g.id}.p1`)}
                    </p>
                  )}
                  {t(`img.${g.id}.p2`, { defaultValue: '' }) && (
                    <p className="mt-2 text-neutral/90 leading-relaxed">
                      {t(`img.${g.id}.p2`)}
                    </p>
                  )}
                </figcaption>
              )}
            </figure>
          </li>
        ))}
      </ul>

      {/* Lightbox (fade+scale, sin distorsión) */}
      <AnimatePresence>
        {open && pics[idx] && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.15 } }}
            exit={{ opacity: 0, transition: { duration: 0.12 } }}
            onClick={() => setOpen(false)}
          >
            <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
              <motion.img
                src={pics[idx].src}
                alt={pics[idx].alt}
                className="w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
                initial={reduce ? { opacity: 1, scale: 1 } : { opacity: 0.98, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1, transition: { duration: 0.18, ease: 'easeOut' } }}
                exit={{ opacity: 0.98, scale: 0.98, transition: { duration: 0.12, ease: 'easeIn' } }}
              />
              <button onClick={() => setOpen(false)} className="absolute -top-10 right-0 text-white/90 hover:text-white text-2xl" aria-label="Close">✕</button>
              <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 px-4 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xl" aria-label="Previous">‹</button>
              <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 px-4 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xl" aria-label="Next">›</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
