/**
 * Every external link, download and headline number the site renders lives
 * here. Nothing else in src/ hardcodes a URL.
 *
 * A link left as an empty string renders its button in a "LINK PENDING"
 * state — visible, labelled, not clickable — instead of shipping a dead href.
 * Fill the string in and the button activates on the next build.
 */

export const site = {
  name: 'Friends of Duty',
  domain: 'friendsofduty.com',
  url: 'https://friendsofduty.com',
  studio: '14MB',

  /** Steam short description — copy of record, App 4480880. */
  tagline:
    'An FPS sandbox built on the 2003 LAN-party era. We ship the platform — modern engine, a full day-to-night cycle, real-time shadows that give you away, native Steam lobbies. You bring the data. Every weapon, map and soldier arrives as a mod pack. Nothing is built in.',

  links: {
    steam: 'https://store.steampowered.com/app/4480880/Friends_of_Duty/',
    discord: 'https://discord.gg/hBm9kggMaR',
    /** TODO: Play Store listing. Empty renders the button as LINK PENDING. */
    googlePlay: '',
  },

  /**
   * The store trailer, pulled from Steam's DASH manifest for App 4480880 and
   * transcoded from AV1 to H.264 so it plays without a JS player. Self-hosted
   * rather than streamed from Steam's CDN: an embed would hand every visitor's
   * IP to Akamai, which the privacy policy promises does not happen.
   */
  trailer: {
    src: '/media/trailer.mp4',
    poster: '/media/trailer-poster.jpg',
    duration: '0:52',
    available: true,
  },

  exporter: {
    name: 'Friends of Duty Exporter',
    repo: 'https://github.com/the14mb/COD2003-FODPAK-GEN',
    releases: 'https://github.com/the14mb/COD2003-FODPAK-GEN/releases',
    version: 'v1.0.0',
    released: '13 August 2026',
    platform: 'Windows 10 / 11, 64-bit',
    download:
      'https://github.com/the14mb/COD2003-FODPAK-GEN/releases/download/v1.0.0/FriendsOfDutyExporter-windows-x64.zip',
    filename: 'FriendsOfDutyExporter-windows-x64.zip',
    size: '32.6 MB',
    sha256: '1689d1047af004e53f4993262e70a9b1e6776c712a250d3d019c2e9f5ac0331d',
    runtime: 'About 22 minutes on an 8-thread desktop',
    cli: '.\\FriendsOfDutyExporter.exe --cli --game-dir "C:\\Program Files (x86)\\Call of Duty Game of the Year Edition" --output .\\out --zip .\\out\\cod2003.fodpak',
  },

  contact: 'contact@friendsofduty.com',
  privacyUpdated: '28 August 2026',
} as const

/**
 * Short silent loops, transcoded from the Steam capsule videos to H.264 so
 * they play in every browser. Each caption says what the clip is evidence of.
 */
export const clips = [
  { id: 'deck', caption: 'On the Deck, on the couch', detail: 'Running handheld, no streaming, no compromise.' },
  { id: 'scope', caption: 'Down the optic', detail: 'Simulated ballistics behind every shot.' },
  { id: 'spectate-village', caption: 'Spectating a live match', detail: 'Free-fly, or follow any player.' },
  { id: 'spectate-snow', caption: 'The whole map, from above', detail: 'Real-time shadows on world geometry.' },
] as const

export const screenshots = [1, 2, 3, 4, 5, 6, 7].map((n) => ({
  src: `/media/shots/shot-${n}.jpg`,
  alt: `Friends of Duty gameplay screenshot ${n}`,
}))
