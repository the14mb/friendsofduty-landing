import { site } from '../site.config'

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer__grid">
          <img className="footer__mark" src="/media/wordmark.png" alt={site.name} width={820} height={506} />

          <div className="footer__col">
            <p className="footer__heading">Play</p>
            <a className="footer__link" href={site.links.steam} target="_blank" rel="noopener noreferrer">
              Steam
            </a>
            {site.links.googlePlay ? (
              <a className="footer__link" href={site.links.googlePlay} target="_blank" rel="noopener noreferrer">
                Google Play
              </a>
            ) : (
              <span className="footer__link" style={{ opacity: 0.5 }}>
                Google Play — soon
              </span>
            )}
          </div>

          <div className="footer__col">
            <p className="footer__heading">Content</p>
            <a className="footer__link" href="/#exporter">
              The exporter
            </a>
            <a className="footer__link" href={site.exporter.repo} target="_blank" rel="noopener noreferrer">
              Source on GitHub
            </a>
            <a className="footer__link" href={site.exporter.releases} target="_blank" rel="noopener noreferrer">
              Releases
            </a>
          </div>

          <div className="footer__col">
            <p className="footer__heading">Talk</p>
            <a className="footer__link" href={site.links.discord} target="_blank" rel="noopener noreferrer">
              Discord
            </a>
            <a className="footer__link" href={`mailto:${site.contact}`}>
              {site.contact}
            </a>
          </div>

          <div className="footer__col">
            <p className="footer__heading">Legal</p>
            <a className="footer__link" href="/privacy/">
              Privacy policy
            </a>
          </div>
        </div>

        <div className="footer__legal">
          <p>
            <strong>{site.name} does not condone or enable piracy.</strong> Generate packs only
            from software you legally own, on your own machine, for your own use. Do not
            distribute a pack you have generated — not to a friend, not onto a server, not
            anywhere. Everyone brings their own data. That is not fine print. It is the
            condition this project exists under.
          </p>
          <p>
            {site.name} ships no third-party content and is not affiliated with, endorsed by or
            associated with Activision Publishing, Inc. or any other rights holder. All
            trademarks are the property of their respective owners.
          </p>
          <p>
            © {new Date().getFullYear()} {site.studio}. This site loads no trackers, sets no
            cookies and makes no third-party requests.
          </p>
        </div>
      </div>
    </footer>
  )
}
