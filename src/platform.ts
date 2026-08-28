/**
 * Which store this visitor can actually install from.
 *
 * Deliberately Android, not "mobile". The game ships on Windows, macOS,
 * Linux/SteamOS and Android — there is no iOS build, so sending an iPhone to
 * Google Play would be a dead end. Anything that is not Android keeps Steam,
 * which is also the safe answer when detection fails.
 *
 * The app is client-rendered, so this is read during the first render and the
 * correct button is the only one ever painted — no swap, no flash.
 */
export function isAndroid(): boolean {
  if (typeof navigator === 'undefined') return false

  // userAgentData is the modern, non-spoofed signal where it exists.
  const uaData = (navigator as Navigator & { userAgentData?: { platform?: string } })
    .userAgentData
  if (uaData?.platform) return uaData.platform.toLowerCase() === 'android'

  return /android/i.test(navigator.userAgent)
}
