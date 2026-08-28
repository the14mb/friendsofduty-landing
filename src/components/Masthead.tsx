import { site } from '../site.config'
import { isAndroid } from '../platform'
import { Action } from './primitives'
import { SteamMark, PlayMark } from './icons'

const NAV = [
  { href: '/#the-brief', label: 'The brief' },
  { href: '/#no-bullshit', label: 'What it isn’t' },
  { href: '/#gallery', label: 'Screens' },
  { href: '/#exporter', label: 'Get content' },
]

export function Masthead({ home = false }: { home?: boolean }) {
  // On Android the header's one call to action should be the store the
  // visitor can actually install from. Everywhere else, Steam.
  const toPlayStore = isAndroid() && Boolean(site.links.googlePlay)

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
          href={toPlayStore ? site.links.googlePlay : site.links.steam}
          variant="primary"
          icon={toPlayStore ? <PlayMark /> : <SteamMark />}
          className={`masthead__cta ${home ? '' : 'masthead__cta--solo'}`}
        >
          Get it free
        </Action>
      </div>
    </header>
  )
}
