import { Eyebrow, Reveal } from './primitives'

const CARRIES = [
  'Weapons, with their own ballistics, optics and handling',
  'Player models and full animation sets',
  'Maps, props and world geometry',
  'Audio, from footsteps to ambience',
  'Modes, scoring and the rules profile the match runs under',
]

export function Sandbox() {
  return (
    <section className="section" id="sandbox">
      <div className="shell">
        <Reveal>
          <Eyebrow>Pack runtime</Eyebrow>
          <h2 className="h2">A sandbox, not a product</h2>
          <p className="lede">
            Everything the game knows arrives in a content pack. Mount a pack and the game becomes
            it. Mount a different one and it becomes something else.
          </p>
        </Reveal>

        <Reveal>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'clamp(2rem, 4vw, 3.5rem)',
              alignItems: 'start',
            }}
          >
            <table className="spec spec--ordinal">
              <caption>What a pack carries</caption>
              <tbody>
                {CARRIES.map((c, i) => (
                  <tr key={c}>
                    <th scope="row">{String(i + 1).padStart(2, '0')}</th>
                    <td>{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="prose">
              <p>
                Author your own from scratch, or generate one from a PC game you already own using
                the exporter. The format does not care what era your pack is from.
              </p>
              <p>
                Most people will build the 2003 LAN shooter first.{' '}
                <em>Nothing stops the second one being anything else.</em>
              </p>
              <p>
                Mod-ready is not a feature bolted on at the end here. It is the only way the game
                runs at all.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
