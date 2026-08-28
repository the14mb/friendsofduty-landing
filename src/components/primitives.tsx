import { useEffect, useRef, useState, type ReactNode } from 'react'

/** Section label. Names what the block below is, in the client's own voice. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>
}

/**
 * Reveals its children once, when they first scroll into view.
 *
 * This **fails open**. The content starts transparent, so anything that stops
 * the observer from delivering — reduced motion, no IntersectionObserver, a
 * restored scroll position, an anchor jump, bfcache, or the observer simply
 * not firing for the geometry it was given — would otherwise leave a section
 * permanently invisible. A missing animation costs nothing; an invisible page
 * costs everything. So there are three independent ways to become visible and
 * only one of them is the observer:
 *
 *   1. already on screen at mount  -> show immediately, no animation owed
 *   2. the observer fires          -> show, animated (the normal path)
 *   3. a backstop timer elapses    -> show regardless
 */
export function Reveal({
  children,
  className = '',
  as: Tag = 'div',
}: {
  children: ReactNode
  className?: string
  as?: 'div' | 'section' | 'article'
}) {
  const ref = useRef<HTMLElement | null>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    let done = false
    const show = () => {
      if (done) return
      done = true
      setShown(true)
    }

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced || !('IntersectionObserver' in window)) {
      show()
      return
    }

    // Already within the viewport when we mounted: nothing to animate into.
    const rect = node.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      show()
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          show()
          io.disconnect()
        }
      },
      { rootMargin: '0px 0px -10% 0px' },
    )
    io.observe(node)

    // Backstop. If the observer has not spoken by now, show the content
    // anyway rather than trust it to.
    const timer = window.setTimeout(show, 3000)

    return () => {
      io.disconnect()
      window.clearTimeout(timer)
    }
  }, [])

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${shown ? 'is-in' : ''} ${className}`.trim()}
    >
      {children}
    </Tag>
  )
}

type ActionProps = {
  href: string
  children: ReactNode
  icon?: ReactNode
  variant?: 'primary' | 'default'
  size?: 'lg' | 'md'
  /** Shown when href is empty — the button renders inert rather than dead. */
  pendingTag?: string
  className?: string
}

/**
 * The one link-shaped control on the site. An empty href is a first-class
 * state: the button still says what it is, and says it is not ready yet.
 */
export function Action({
  href,
  children,
  icon,
  variant = 'default',
  size = 'md',
  pendingTag = 'Soon',
  className = '',
}: ActionProps) {
  const classes = [
    'btn',
    'bracket',
    variant === 'primary' ? 'btn--primary' : '',
    size === 'lg' ? 'btn--lg' : '',
    className,
  ]

  if (!href) {
    return (
      <span className={[...classes, 'btn--pending'].filter(Boolean).join(' ')} aria-disabled="true">
        {icon ? <span className="btn__icon">{icon}</span> : null}
        {children}
        <span className="btn__tag">{pendingTag}</span>
      </span>
    )
  }

  const external = href.startsWith('http')
  return (
    <a
      className={classes.filter(Boolean).join(' ')}
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {icon ? <span className="btn__icon">{icon}</span> : null}
      {children}
    </a>
  )
}
