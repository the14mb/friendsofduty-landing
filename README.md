# friendsofduty.com

Landing page for **Friends of Duty**. React + TypeScript, built with Vite,
**compiled locally** and served by GitHub Pages from the committed `docs/`
folder. There is no CI step and no build server — what is in `docs/` is what
is live.

## Run it

```bash
npm install
npm run dev       # local dev server with HMR
npm run build     # type-check, then compile into docs/
npm run preview   # serve the compiled docs/ exactly as Pages will
```

**Deploying is `npm run build`, then commit `docs/`.** Do not add `docs/` to
`.gitignore`; it is the artifact.

### One-time GitHub Pages setup

1. Push this repo to GitHub.
2. Settings → Pages → Source: **Deploy from a branch**, branch `main`, folder
   **`/docs`**.
3. Settings → Pages → Custom domain: `friendsofduty.com`, and tick **Enforce
   HTTPS** once the certificate is issued.
4. At the DNS registrar, point the apex at GitHub Pages:

   | Type | Name | Value |
   |---|---|---|
   | A | `@` | `185.199.108.153` |
   | A | `@` | `185.199.109.153` |
   | A | `@` | `185.199.110.153` |
   | A | `@` | `185.199.111.153` |
   | CNAME | `www` | `<user>.github.io` |

`public/CNAME` already carries the domain, so it survives every build.
`public/.nojekyll` stops Pages running Jekyll over the output.

## Pages

| URL | Source |
|---|---|
| `/` | `index.html` → `src/main.tsx` → `src/App.tsx` |
| `/privacy/` | `privacy/index.html` → `src/privacy.tsx` → `src/pages/Privacy.tsx` |

Two HTML entries rather than a client-side router, so `/privacy/` is a real
static path that needs no `404.html` fallback. `/privacy` redirects to it.

## Editing content

**`src/site.config.ts` is the only file with URLs,version numbers or download
metadata in it.** Everything else reads from there.

A link left as an empty string renders its button in a **LINK PENDING** state
— visible and labelled, but not clickable — rather than shipping a dead
`href`. Fill the string in, rebuild, and the button activates.

Currently pending:

- `links.googlePlay` — the Play Store listing.

To replace the trailer: drop a new file at `public/media/trailer.mp4`, refresh
`trailer-poster.jpg`, rebuild. Setting `trailer.available: false` hides the
lead video and leaves just the loop grid.

## Design

The palette is lifted verbatim from the game's own
`Assets/Scripts/Presentation/MenuSkin.cs` so the site and the client read as
one artifact:

| Token | Hex | Role |
|---|---|---|
| `--coal` | `#080B0D` | page ground |
| `--iron` | `#12181C` | panels |
| `--iron-raised` | `#1B2328` | raised panels, buttons |
| `--fog` | `#D8DDDC` | primary text |
| `--muted` | `#849095` | secondary text |
| `--signal` | `#E7A83E` | **state and action only** |
| `--danger` | `#A94A3E` | warnings, the DENIED stamps |

The discipline matters more than the values: **amber is reserved for state and
action**, exactly as the comment in `MenuSkin.cs` says. It marks something you
can press, something focused, or a live figure. It is never decoration.

The signature interaction is the game's **acquisition bracket** — the four
amber corner marks that snap around a focused element on a controller. On the
web the same treatment serves hover *and* keyboard focus, so the site is
navigable by either and looks deliberate doing it (`.bracket` in
`src/styles/app.css`).

Type: Saira Condensed (display) / Barlow (body) / IBM Plex Mono (labels, specs,
hashes). All three are SIL OFL and **self-hosted** via `@fontsource`.

Panels are deliberately *translucent* (`color-mix(... , transparent)`) rather
than solid, so the backdrop reads through and the page holds together as one
place instead of a stack of unrelated dark boxes. If you raise the plate's
brightness, re-check body-copy contrast before shipping — `--muted` on the
brightest part of the plate is the tightest pair on the site.

## No third-party requests

The page loads nothing from any other origin — no font CDN, no analytics, no
embedded video player, no icon library. Fonts are bundled, icons are inline
SVG, the footage is self-hosted MP4. This is what makes the privacy policy's
central claim true, so **keep it that way**: if a change would add an external
request, it needs a matching edit to `src/pages/Privacy.tsx`.

## Media

| Path | Notes |
|---|---|
| `public/media/keyart.jpg` | 1920×620 Steam library hero. Deliberately the one with no wordmark baked in — the crisp logo above it is the only wordmark on the page. |
| `public/media/page-bg.jpg` | The ruined-street plate, fixed behind the whole document. Deliberately soft and heavily scrimmed — it is atmosphere, never a picture you look at. Measured composite tops out near `#1a1c1a`, keeping `--muted` body copy at roughly 5:1. |
| `public/media/wordmark.png` | Alpha-trimmed and quantised from the 1280×720 master, 1.19 MB → 150 KB. |
| `public/media/shots/shot-N.jpg` | Store screenshots. Numbered so they can be swapped without touching code; add or remove by editing the array in `site.config.ts`. |
| `public/media/clips/*.mp4` | The Steam capsule loops, transcoded from HEVC to H.264 because Firefox cannot play HEVC and Chrome only sometimes can. Silent, 10–12 s. |
| `public/media/trailer.mp4` | The store trailer, pulled from Steam's DASH manifest for App 4480880 and transcoded from AV1/1080p60 to H.264 + AAC (19 MB, 0:52). `preload="none"` with faststart, so it costs nothing until someone presses play. |

### Why the trailer is self-hosted rather than streamed from Steam

Steam's DASH endpoint *would* work — it serves `access-control-allow-origin: *`
on both the manifest and the segments, and a ~10 year `cache-control`. It was
still the wrong call:

- it hands every visitor's IP to Akamai and Valve, which is exactly what the
  privacy policy promises does not happen;
- the URL embeds a build id and content hash, so re-uploading the trailer on
  Steam silently breaks the page with nothing to warn you;
- DASH needs a JS player (Safari has no native support), which is ~370 KB to
  avoid a file that only downloads on demand.

If repo weight ever becomes the problem, add a 720p variant — do not reach for
the CDN.

Clips autoplay only while on screen and pause when scrolled away, so four
videos cost one decoder rather than four. Under `prefers-reduced-motion` they
do not autoplay at all and get native controls instead.

## Content rules

The hero and description follow the Steam copy of record
(`FriendsOfDutyUnity/Docs/STEAM_STORE_PAGE.md`, App 4480880) and name no
source game — that page's hard rule. The **exporter section is the deliberate
exception**: it names Call of Duty (2003) and United Offensive because that is
what the tool extracts from, matching the public
[COD2003-FODPAK-GEN](https://github.com/the14mb/COD2003-FODPAK-GEN) repo and
its releases. Keep that split.
