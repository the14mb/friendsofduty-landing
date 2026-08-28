import { Eyebrow, Reveal } from './primitives'

/**
 * Feature copy tracks the Steam page's "WHAT YOU ACTUALLY GET" list. The keys
 * are the client's own subsystem names, not invented labels.
 */
const FEATURES = [
  {
    key: 'Time of day',
    title: 'The day doesn’t last forever',
    body: 'Any map can run a full time-lapse through an entire day. Matches open in flat golden morning light and end somewhere very different. Night here is actually dark — a real star field, a moon that gives you almost nothing, and everyone else out there somewhere.',
  },
  {
    key: 'Shadows',
    title: 'Your shadow will betray you',
    body: 'Every player casts a real-time shadow, and so does the entire map. The players below can watch your shadow sprint across their ceiling. The alley that was safe at noon is a shooting gallery at dusk. Cover is a property of the map right now.',
  },
  {
    key: 'Ballistics',
    title: 'Simulated, not scripted',
    body: 'Penetration, damage falloff and hit zones. Fire once at night and the muzzle flash is a flare pinned to your chest — the whole map knows exactly where you are. The numbers themselves come from your pack.',
  },
  {
    key: 'Profiles',
    title: 'Classic and Reimagined',
    body: 'Two presentation profiles over one simulation. Classic is the era as it was, muscle memory intact. Reimagined keeps that gameplay exactly and gives it a modern face, without touching a single number underneath.',
  },
  {
    key: 'Lobbies',
    title: 'Steam lobbies, no setup',
    body: 'Create a lobby, invite through the overlay, play. Friends drop into a match already in progress. No IP addresses, no port forwarding, no group chat full of “can you see my server?” Dedicated server binaries are included.',
  },
  {
    key: 'Platforms',
    title: 'Built for the couch',
    body: 'Windows, Linux/SteamOS and macOS clients, full Steam Input with deep control customisation, up to 4K, and it runs on Steam Deck. A LAN shooter from your sofa, with a controller you configured exactly the way you want it.',
  },
]

export function Features() {
  return (
    <section className="section" id="features">
      <div className="shell">
        <Reveal>
          <Eyebrow>Platform capability</Eyebrow>
          <h2 className="h2">What the engine brings</h2>
          <p className="lede">
            The pack brings the content. This is the half that ships with the client, and it is
            the same for every pack you mount.
          </p>
        </Reveal>

        <Reveal>
          <div className="features">
            {FEATURES.map((f) => (
              <article className="feature panel bracket" key={f.key}>
                <p className="feature__key">{f.key}</p>
                <h3 className="h3">{f.title}</h3>
                <p className="feature__body">{f.body}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
