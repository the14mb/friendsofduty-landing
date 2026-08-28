import { site } from '../site.config'
import { Action } from './primitives'
import { SteamMark } from './icons'

const NAV = [
  { href: '/#the-brief', label: 'The brief' },
  { href: '/#no-bullshit', label: 'What it isn’t' },
  { href: '/#gallery', label: 'Screens' },
  { href: '/#exporter', label: 'Get content' },
]

export function Masthead({ home = false }: { home?: boolean }) {
  return (
    <header className="masthead">
      <div className="shell masthead__inner">
        {/* The metal lockup is three stacked lines — illegible at bar height.
            It owns the hero; the masthead sets the name in the display face. */}
        <a className="masthead__brand" href="/" aria-label={`${site.name} — home`}>
          Friends <span>of</span> Duty
        </a>

        {home ? (
          <nav className="masthead__nav" aria-label="Sections">
            {NAV.map((item) => (
              <a key={item.href} className="masthead__link" href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        ) : null}

        <Action
          href={site.links.steam}
          variant="primary"
          icon={<SteamMark />}
          className={`masthead__cta ${home ? '' : 'masthead__cta--solo'}`}
        >
          Get it free
        </Action>
      </div>
    </header>
  )
}
