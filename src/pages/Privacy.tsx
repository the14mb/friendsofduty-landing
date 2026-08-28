import { site } from '../site.config'
import { Backdrop } from '../components/Backdrop'
import { Masthead } from '../components/Masthead'
import { Footer } from '../components/Footer'

export default function Privacy() {
  return (
    <>
      <Backdrop />
      <Masthead />
      <main className="shell">
        <article className="doc">
          <h1 className="doc__title">Privacy policy</h1>
          <p className="doc__stamp">
            {site.domain} · last updated {site.privacyUpdated}
          </p>

          <p className="doc__claim">
            We do not collect anything about you. Not on this site, not in the game, not in the
            exporter.
          </p>

          <p>
            That is the whole policy in one line. The rest of this page explains, honestly and
            specifically, what that means in each place {site.name} exists — including the few
            places where somebody <em>else</em> sees something, because we would rather tell you
            than let you find out.
          </p>

          <h2>1. This website</h2>
          <p>
            {site.domain} is a static site. It has no back end, no database and no server-side
            code of ours.
          </p>
          <ul>
            <li>
              <strong>No cookies.</strong> The site sets none, of any kind. There is no cookie
              banner because there is nothing to consent to.
            </li>
            <li>
              <strong>No analytics.</strong> No Google Analytics, no Plausible, no pixels, no
              fingerprinting, no session recording.
            </li>
            <li>
              <strong>No third-party requests.</strong> Every font, image, script and stylesheet
              is served from this domain. Fonts are self-hosted rather than loaded from Google
              Fonts, and the trailer is served from here rather than embedded from YouTube,
              specifically so your browser never has to talk to anyone else to render this page.
            </li>
            <li>
              <strong>No accounts and no forms.</strong> There is nothing here to sign up for and
              nowhere to type anything.
            </li>
          </ul>
          <p>
            <strong>The one exception, stated plainly:</strong> this site is hosted on GitHub
            Pages. Like any web host, GitHub receives your IP address and browser user-agent in
            order to serve you the page, and may retain them in server logs for security purposes.
            We have no access to those logs and receive nothing from them. GitHub's handling is
            covered by the{' '}
            <a
              href="https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Privacy Statement
            </a>
            .
          </p>

          <h2>2. Links that leave this site</h2>
          <p>
            Buttons on this page lead to Steam, Google Play, Discord and GitHub. Once you follow
            one of them, you are on their service and their privacy policy applies, not ours. We
            do not pass them any information about you, and we get nothing back from them — no
            referral data, no conversion tracking, no affiliate identifiers.
          </p>

          <h2>3. The game client</h2>
          <ul>
            <li>
              <strong>No telemetry.</strong> The client does not report your hardware, your
              settings, your play sessions, crashes or anything else to us. We do not run a
              collection endpoint, so there is nowhere for it to report to.
            </li>
            <li>
              <strong>No account.</strong> {site.name} has no login, no profile and no user
              database. We never ask for an email address.
            </li>
            <li>
              <strong>Settings stay on your machine.</strong> Configuration, key bindings and
              content packs are local files. Nothing is synced to us.
            </li>
          </ul>
          <p>
            <strong>Multiplayer is the honest exception.</strong> Networked play works by sending
            packets between machines, so when you join a server your IP address is necessarily
            visible to that server and, on a peer-to-peer LAN match, to the other players. That is
            how every networked game since 1993 has worked, it is not something we collect, and
            none of it reaches us. If you host a dedicated server, what its logs record is your
            decision — it is your machine.
          </p>
          <p>
            If you obtained the game through Steam and use Steam features — lobbies, overlay
            invites, the friends list, the server browser — then Valve processes that activity
            under the{' '}
            <a
              href="https://store.steampowered.com/privacy_agreement/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Steam Privacy Policy
            </a>
            . The same applies to Google Play for the Android build. We receive only the anonymous
            aggregate figures those storefronts show every developer, such as total install counts.
          </p>

          <h2>4. The exporter</h2>
          <p>
            The exporter runs entirely on your computer. It reads the game installation you point
            it at, writes a content pack to a folder you choose, and sends nothing anywhere. There
            is no registration, no licence check and no phone-home.
          </p>
          <p>
            It makes exactly <strong>one</strong> outbound connection, on the first run only: it
            downloads a pinned build of Blender from the Blender Foundation's servers and verifies
            it against a compiled-in SHA-256. Every run after that is fully offline. If you would
            rather not have it make that request, the app prints the exact URL and expected hash so
            you can fetch the archive yourself and drop it in.
          </p>
          <p>
            The packs you generate are yours. We never see them, never host them and ask that you
            never distribute them.
          </p>

          <h2>5. Talking to us</h2>
          <p>
            If you email us or post in our Discord, we obviously see what you wrote. Email lives in
            an ordinary mailbox and is kept only as long as it is useful. Discord is a third-party
            service running under{' '}
            <a href="https://discord.com/privacy" target="_blank" rel="noopener noreferrer">
              Discord's privacy policy
            </a>
            ; if that matters to you, email instead. Issues and pull requests on GitHub are public
            by nature.
          </p>

          <h2>6. Children</h2>
          <p>
            This site and this game are not directed at children under 13, and we knowingly collect
            no personal information from anyone, of any age.
          </p>

          <h2>7. Your rights</h2>
          <p>
            Laws such as the GDPR, the UK GDPR and the CCPA give you rights to access, correct,
            export and delete the personal data a company holds about you. We hold none, so there
            is nothing for us to produce or erase. You are welcome to write and ask us to confirm
            that, and we will. For data held by Valve, Google, Discord or GitHub, please exercise
            those rights with them directly.
          </p>
          <p>We have never sold or shared personal information, and we never will.</p>

          <h2>8. Changes</h2>
          <p>
            If this policy changes, the date at the top of this page changes with it, and the
            history is public in the site's repository — you can read exactly what changed and
            when. If a future version ever means we start collecting something, it will say so at
            the top, in plain language, not in a clause.
          </p>

          <h2>9. Contact</h2>
          <p>
            Questions about any of this: <a href={`mailto:${site.contact}`}>{site.contact}</a>, or
            find us in the{' '}
            <a href={site.links.discord} target="_blank" rel="noopener noreferrer">
              Discord
            </a>
            .
          </p>
        </article>
      </main>
      <Footer />
    </>
  )
}
