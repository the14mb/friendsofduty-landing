import { Eyebrow, Reveal } from './primitives'

/**
 * The manifesto. Copy is the Steam page's "THE 2003 LAN PARTY, REBUILT"
 * section, which is the approved copy of record for App 4480880.
 */
export function Brief() {
  return (
    <section className="section" id="the-brief">
      <div className="shell">
        <Reveal>
          <Eyebrow>Design brief · filed 2003</Eyebrow>
          <h2 className="h2">
            The engine is modern.
            <br />
            The design brief is twenty-three years old.
          </h2>

          <div className="prose">
            <p>
              There was a moment around 2003 that shooters have never quite got back to. A dozen
              people, one room, one switch. Everything readable at a glance. Movement you learned
              in ten minutes and spent the next ten years mastering. Nothing to unlock, nothing to
              grind, no season to fall behind on. You joined, you played, and you argued about it
              afterwards.
            </p>
            <p>
              That is the game <strong>Friends of Duty</strong> is built to run. Instant to join,
              honest about what killed you, and better with people whose names you actually know.
            </p>
            <p>
              This is a project made for the people who were there. It is free, it is open about
              how it works, and it has nothing to sell you once you have it.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
