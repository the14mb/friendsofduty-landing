import { useEffect, useRef, useState, type ReactNode } from 'react'

/** Section label. Names what the block below is, in the client's own voice. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>
}

/**
 * Reveals its children once, when they first scroll into view. Falls straight
 * through to visible when IntersectionObserver is unavailable or the reader
 * has asked for reduced motion.
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

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced || !('IntersectionObserver' in window)) {
      setShown(true)
      return
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.06 },
    )
    io.observe(node)
    return () => io.disconnect()
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
