import { useCallback, useEffect, useState } from 'react'
import { screenshots } from '../site.config'
import { Eyebrow, Reveal } from './primitives'

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null)

  const close = useCallback(() => setOpen(null), [])

  const step = useCallback((delta: number) => {
    setOpen((i) => (i === null ? i : (i + delta + screenshots.length) % screenshots.length))
  }, [])

  useEffect(() => {
    if (open === null) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    document.addEventListener('keydown', onKey)
    // Stop the page scrolling behind the lightbox.
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open, close, step])

  return (
    <section className="section" id="gallery">
      <div className="shell">
        <Reveal>
          <Eyebrow>Field footage</Eyebrow>
          <h2 className="h2">Screens</h2>
          <p className="lede">
            Shot in the client, running a pack built from a player’s own install.
          </p>
        </Reveal>

        <Reveal>
          <div className="gallery">
            {screenshots.map((shot, i) => (
              <button
                type="button"
                className="shot bracket"
                key={shot.src}
                onClick={() => setOpen(i)}
                aria-label={`Enlarge screenshot ${i + 1} of ${screenshots.length}`}
              >
                <img src={shot.src} alt={shot.alt} loading="lazy" decoding="async" />
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      {open !== null ? (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Screenshot viewer"
          onClick={close}
        >
          <button type="button" className="btn lightbox__close" onClick={close}>
            Close ✕
          </button>
          <img
            src={screenshots[open].src}
            alt={screenshots[open].alt}
            onClick={(e) => e.stopPropagation()}
          />
          <p className="lightbox__count">
            {String(open + 1).padStart(2, '0')} / {String(screenshots.length).padStart(2, '0')}
            <span aria-hidden="true"> · ← → to move · esc to close</span>
          </p>
        </div>
      ) : null}
    </section>
  )
}
