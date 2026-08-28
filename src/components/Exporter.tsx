import { site } from '../site.config'
import { Eyebrow, Reveal, Action } from './primitives'
import { DownloadMark, GithubMark } from './icons'

const REQUIREMENTS = [
  { key: 'OS', value: 'Windows 10 or 11, 64-bit. This build is Windows-only.' },
  { key: 'CPU', value: 'Any x86-64 processor.' },
  {
    key: 'RAM',
    value: '4 GB. A full export peaks at about 1.3 GB across the generator and Blender together.',
  },
  {
    key: 'Disk',
    value: '4 GB free — Blender cache, the download it comes from, the finished package and staging.',
  },
  {
    key: 'Internet',
    value: 'First run only, for a one-time 381 MB Blender download. Every later run is fully offline.',
  },
  {
    key: 'Game',
    value:
      'Call of Duty (2003) and United Offensive, patched and installed together: all 14 retail Main\\*.pk3 and all 8 uo\\*.pk3. A disc install without patch 1.5 / 1.51 is missing some of these and is rejected by name rather than silently producing a broken package.',
  },
  { key: 'Time', value: `${site.exporter.runtime}, plus the one-time download on the first run.` },
]

export function Exporter() {
  const e = site.exporter

  return (
    <section className="section exporter" id="exporter">
      <div className="shell">
        <Reveal>
          <Eyebrow>Content pipeline</Eyebrow>
          <h2 className="h2">
            The game is empty.
            <br />
            Here is how you fill it.
          </h2>
        </Reveal>

        <Reveal>
          <div className="notice" style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
            <span className="notice__mark" aria-hidden="true">
              ⚠
            </span>
            <div>
              <h3 className="notice__title">Read this before you install</h3>
              <p className="notice__body">
                <strong>Friends of Duty is a shell. On its own it does not play.</strong> It ships
                no weapons, no maps, no soldiers and no sound — not as a limitation, but as the
                entire design. To play, you mount a content pack, and the honest way to get your
                first one is to generate it from a game you already own, on your own machine.
              </p>
              <p className="notice__body">
                The exporter below does that for Call of Duty (2003) and United Offensive.{' '}
                <strong>You must own both.</strong> The tool contains no Call of Duty assets and
                never will — it is extraction code. Every model, texture, sound, animation and map
                it produces comes off the installation on your machine, at the moment you run it.
                The package it writes is for your personal use with your own copy.
              </p>
              <p className="notice__body">
                There is no freeware fallback. Activision has never released Call of Duty data for
                free redistribution, so owning the games is the only path. This is the same
                arrangement used by Ship of Harkinian, OpenRA, OpenMW and devilutionX: the tool is
                free and open, the assets stay yours.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <h3 className="h3" style={{ marginBottom: '1.5rem' }}>
            Three steps, then you are playing
          </h3>
          <div className="steps" style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
            <div className="step">
              <p className="step__body">
                Download the exporter below and unzip it anywhere. <strong>There is nothing
                else to install</strong> — no Python, no Blender, no build tools. The app carries
                its own interpreter and fetches its own pinned Blender the first time it runs.
              </p>
            </div>
            <div className="step">
              <p className="step__body">
                Run <code>FriendsOfDutyExporter.exe</code>, point it at your Call of Duty folder
                and press Export. It verifies what you point it at against known-good retail
                archive hashes and refuses input it does not recognise, rather than quietly
                producing a broken package.
              </p>
            </div>
            <div className="step">
              <p className="step__body">
                About {e.runtime.replace('About ', '').replace(' on an 8-thread desktop', '')} later
                you have a <code>.fodpak</code>. Drop it in the game’s <code>mods/</code> folder,
                mount it, and Friends of Duty becomes the 2003 LAN shooter.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="download bracket" style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
            <div>
              <p className="download__file">{e.filename}</p>
              <ul className="download__meta">
                <li>{e.version}</li>
                <li>{e.size}</li>
                <li>{e.platform}</li>
                <li>Released {e.released}</li>
              </ul>
              <p className="download__hash">
                <b>SHA-256</b> {e.sha256}
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <Action href={e.download} variant="primary" size="lg" icon={<DownloadMark />}>
                Download the exporter
              </Action>
              <Action href={e.releases} icon={<GithubMark />}>
                All releases
              </Action>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'clamp(2rem, 4vw, 3.5rem)',
            }}
          >
            <div>
              <table className="spec">
                <caption>Minimum requirements</caption>
                <tbody>
                  {REQUIREMENTS.map((r) => (
                    <tr key={r.key}>
                      <th scope="row">{r.key}</th>
                      <td>{r.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div>
              <h3 className="h3">Headless, if you prefer</h3>
              <pre className="cli" style={{ marginBottom: '2rem' }}>
                <code>
                  <span className="cli__prompt">PS&gt; </span>
                  {e.cli}
                </code>
              </pre>

              <h3 className="h3">Build once, play everywhere</h3>
              <p className="prose" style={{ marginBottom: '2rem' }}>
                <span style={{ display: 'block' }}>
                  A <code style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9em' }}>.fodpak</code>{' '}
                  carries nothing platform-specific, so a package built on any Windows machine works
                  everywhere Friends of Duty runs — macOS and Steam Deck included, neither of which
                  has an exporter of its own.
                </span>
              </p>

              <h3 className="h3">About the missing signature</h3>
              <p className="prose">
                This build is <strong>not code-signed</strong>. SmartScreen may warn on first
                launch, and some antivirus products are suspicious of any unsigned program that
                downloads a large archive and extracts it — which is, by design, exactly what this
                does. The checksum above is there so you can verify you have precisely what was
                built. The source is public: read it before you run it.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div
            style={{
              marginTop: 'clamp(2.5rem, 5vw, 4rem)',
              paddingTop: '2rem',
              borderTop: '1px solid var(--hairline)',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.875rem',
            }}
          >
            <Action href={e.repo} icon={<GithubMark />}>
              Read the source
            </Action>
            <Action href={site.links.discord}>Ask in the Discord</Action>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
