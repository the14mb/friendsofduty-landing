import { site } from '../site.config'
import { Action } from './primitives'
import { SteamMark, PlayMark, DiscordMark } from './icons'

/**
 * The promises, set as the client's own boot readout. Every entry is a
 * guarantee, and the last one is the catch — stated up top, in red, rather
 * than buried below the fold.
 */
const STATUS = [
  { label: 'Free', warn: false },
  { label: 'No ads', warn: false },
  { label: 'No lootboxes', warn: false },
  { label: 'No accounts', warn: false },
  { label: 'Mod-ready', warn: false },
  { label: 'LAN-ready', warn: false },
  { label: 'Cross-platform', warn: false },
  { label: 'Content: bring your own', warn: true },
]

const MANIFEST = [
  { label: 'Weapons', value: '0' },
  { label: 'Maps', value: '0' },
  { label: 'Soldiers', value: '0' },
  { label: 'Audio', value: '0' },
  { label: 'Packs mounted', value: '0' },
]

export function Hero() {
  return (
    <section className="hero">
      <div className="shell hero__body">
        <div className="hero__type">
        <img
          className="hero__wordmark"
          src="/media/wordmark.png"
          alt={site.name}
          width={820}
          height={506}
          fetchPriority="high"
        />

        <h1 className="hero__claim">
          <span>We ship the engine.</span>
          <em>You bring the data.</em>
        </h1>

        <p className="hero__tagline">{site.tagline}</p>

        <div className="hero__actions">
          <Action href={site.links.steam} variant="primary" icon={<SteamMark />}>
            Play on Steam
          </Action>
          <Action href={site.links.googlePlay} icon={<PlayMark />} pendingTag="Soon">
            Google Play
          </Action>
          <Action href={site.links.discord} icon={<DiscordMark />}>
            Join the Discord
          </Action>
        </div>

        </div>

        {/* The thesis, made literal. These are the real shipped-content
            figures, and they are the reason the exporter section exists. */}
        <aside className="manifest panel" aria-label="Content shipped with the game">
          <p className="manifest__head">Content manifest — as shipped</p>
          <dl className="manifest__list">
            {MANIFEST.map((row) => (
              <div className="manifest__row" key={row.label}>
                <dt>{row.label}</dt>
                <dd>{row.value}</dd>
              </div>
            ))}
          </dl>
          <p className="manifest__note">
            Nothing is missing. This is the design — an engine, a network layer and a format.
            You mount a pack and it becomes a game.
          </p>
        </aside>

        <ul className="rail" aria-label="What you get">
          {STATUS.map((s) => (
            <li key={s.label} className={`rail__item ${s.warn ? 'rail__item--warn' : ''}`}>
              <span className="rail__dot" aria-hidden="true" />
              {s.label}
            </li>
          ))}
        </ul>
      </div>

      {/* Full-bleed cinematic band. The art is cropped below its own baked-in
          wordmark so the crisp logo above is the only one on the page. */}
      <div className="hero__band">
        <img src="/media/keyart.jpg" alt="" decoding="async" />
        <div className="scanlines" />
      </div>
    </section>
  )
}
