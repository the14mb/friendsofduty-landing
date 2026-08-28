/**
 * The ruined street, sitting behind the whole page.
 *
 * It is a fixed layer rather than `background-attachment: fixed`, which iOS
 * Safari either ignores or repaints badly on every scroll. Because it never
 * moves, the page reads as one continuous place that the content panels are
 * laid on top of, instead of a series of unrelated dark boxes.
 *
 * Everything readable on this site sits above it, so it is scrimmed hard: the
 * plate itself is dimmed and desaturated, and a second layer lays a vertical
 * wash plus a vignette over it. The image is atmosphere, never a picture you
 * are meant to look at.
 */
export function Backdrop() {
  return <div className="backdrop" aria-hidden="true" />
}
