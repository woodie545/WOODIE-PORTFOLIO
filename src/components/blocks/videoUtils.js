// Shared video-URL helpers for VideoBlock (iframe rendering) and HeroBlock
// ("Watch Video →" link). Supports YouTube, Google Drive and direct files.

// Anchor id of the VideoBlock section on a case-study page.
export const VIDEO_SECTION_ID = 'case-study-video'

export function isDriveUrl(url) {
  return typeof url === 'string' && url.includes('drive.google.com')
}

export function isYouTubeUrl(url) {
  return (
    typeof url === 'string' && (url.includes('youtube.com/embed') || url.includes('youtu.be'))
  )
}

// Normalizes common Drive share formats to the embeddable /preview form:
//   .../file/d/<id>/view...  -> .../file/d/<id>/preview
//   .../file/d/<id>/edit...  -> .../file/d/<id>/preview
//   .../open?id=<id>          -> .../file/d/<id>/preview
export function toDrivePreviewUrl(url) {
  if (!isDriveUrl(url)) return url
  if (url.includes('/preview')) return url
  const fileIdMatch = url.match(/\/file\/d\/([^/?#]+)/)
  if (fileIdMatch) return `https://drive.google.com/file/d/${fileIdMatch[1]}/preview`
  const openIdMatch = url.match(/[?&]id=([^&#]+)/)
  if (openIdMatch) return `https://drive.google.com/file/d/${openIdMatch[1]}/preview`
  return url
}

// Normalizes pasted YouTube share/watch URLs to the embeddable form so the
// iframe never receives a non-embeddable page URL:
//   https://youtu.be/<id>[?t=..]            -> https://www.youtube.com/embed/<id>
//   https://www.youtube.com/watch?v=<id>... -> https://www.youtube.com/embed/<id>
export function toYouTubeEmbedUrl(url) {
  if (typeof url !== 'string') return url
  if (url.includes('youtube.com/embed')) return url
  const shortMatch = url.match(/youtu\.be\/([^?&#/]+)/)
  if (shortMatch) return `https://www.youtube.com/embed/${shortMatch[1]}`
  const watchMatch = url.match(/[?&]v=([^&#]+)/)
  if (watchMatch && url.includes('youtube.com')) {
    return `https://www.youtube.com/embed/${watchMatch[1]}`
  }
  return url
}

// Converts an embeddable video URL to its best "open in a new tab" form:
// YouTube embeds become short share links, everything else passes through.
export function toWatchUrl(url) {
  if (typeof url !== 'string') return url
  const embedMatch = url.match(/youtube\.com\/embed\/([^?&#/]+)/)
  if (embedMatch) return `https://youtu.be/${embedMatch[1]}`
  return url
}
