import { useEffect, useRef, useState } from 'react'
import { site, clips } from '../site.config'
import { Eyebrow, Reveal } from './primitives'

/**
 * A short, silent loop that plays only while it is on screen. Off-screen
 * clips are paused so a page full of video costs one decoder, not four, and
 * a reader who has asked for reduced motion gets the poster frame and a
 * control instead of anything moving on its own.
 */
function Clip({ id, caption, detail }: { id: string; caption: string; detail: string }) {
  const ref = useRef<HTMLVideoElement>(null)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const video = ref.current
    if (!video) return

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) {
      setReduced(true)
      return
    }

    if (!('IntersectionObserver' in window)) return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Autoplay can still be refused (data saver, low power mode);
          // the poster stays up and nothing breaks.
          void video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.35 },
    )
    io.observe(video)
    return () => io.disconnect()
  }, [])

  return (
    <figure className="clip bracket">
      <video
        ref={ref}
        className="clip__video"
        src={`/media/clips/${id}.mp4`}
        poster={`/media/clips/${id}.jpg`}
        muted
        loop
        playsInline
        preload="none"
        controls={reduced}
        aria-label={caption}
      />
      <figcaption className="clip__cap">
        <span className="clip__title">{caption}</span>
        <span className="clip__detail">{detail}</span>
      </figcaption>
    </figure>
  )
}

export function Footage() {
  return (
    <section className="section" id="trailer">
      <div className="shell">
        <Reveal>
          <Eyebrow>Footage</Eyebrow>
          <h2 className="h2">See it move</h2>
          <p className="lede">
            Recorded in the client, running a pack built from a player’s own install. No audio —
            these are loops, not a trailer.
          </p>
        </Reveal>

        {site.trailer.available ? (
          <Reveal>
            <div className="trailer" style={{ marginBottom: '1.5rem' }}>
              <div className="trailer__bar trailer__bar--top" />
              <div className="trailer__bar trailer__bar--bottom" />
              <video
                className="trailer__video"
                src={site.trailer.src}
                poster={site.trailer.poster}
                controls
                preload="none"
                playsInline
              />
            </div>
          </Reveal>
        ) : null}

        <Reveal>
          <div className="clips">
            {clips.map((c) => (
              <Clip key={c.id} id={c.id} caption={c.caption} detail={c.detail} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
