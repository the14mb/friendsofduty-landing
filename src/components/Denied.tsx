import { Eyebrow, Reveal } from './primitives'

/**
 * Everything the game deliberately does not do. These are absences, so they
 * are typeset as absences — struck through, and stamped. The strike is the
 * content.
 */
const ABSENT = [
  { term: 'Ads', note: 'Nothing on any screen is selling you anything.' },
  { term: 'Lootboxes', note: 'No crates, no keys, no odds disclosure, because there are no odds.' },
  { term: 'Battle pass', note: 'No season, no tiers, nothing to fall behind on.' },
  { term: 'Pay-to-win', note: 'There is nothing to buy that touches a single number in the sim.' },
  { term: 'Casino mechanics', note: 'No spinners, no currencies, no manufactured near-misses.' },
  { term: 'Always-online', note: 'A LAN with no internet at all still plays. That is the point.' },
  { term: 'Accounts', note: 'No sign-up, no email, no profile to abandon.' },
  { term: 'Telemetry', note: 'The client reports nothing about you to anyone, including us.' },
]

export function Denied() {
  return (
    <section className="section" id="no-bullshit">
      <div className="shell">
        <Reveal>
          <Eyebrow>Removed from scope</Eyebrow>
          <h2 className="h2">What it isn’t</h2>
          <p className="lede">
            Half of what makes a modern shooter exhausting is bolted on after the game is
            finished. None of it got bolted on here.
          </p>
        </Reveal>

        <Reveal>
          <div className="denied">
            {ABSENT.map((item) => (
              <div className="denied__cell" key={item.term}>
                <p className="denied__term">{item.term}</p>
                <p className="denied__note">{item.note}</p>
                <p className="denied__stamp">Denied</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
