import {
  VIDEO_SECTION_ID,
  isDriveUrl,
  isYouTubeUrl,
  toDrivePreviewUrl,
  toYouTubeEmbedUrl,
} from './videoUtils'

export default function VideoBlock({
  eyebrow = 'In Motion',
  heading,
  subheading,
  description,
  src,
  videoUrl,
  poster,
  caption,
  autoplay = true,
  large = false,
}) {
  const resolvedSrc = videoUrl || src
  const isDrive = isDriveUrl(resolvedSrc)
  const isYouTube = isYouTubeUrl(resolvedSrc)
  const embedSrc = isDrive
    ? toDrivePreviewUrl(resolvedSrc)
    : isYouTube
      ? toYouTubeEmbedUrl(resolvedSrc)
      : resolvedSrc

  return (
    <section id={VIDEO_SECTION_ID} className="py-10 border-t border-gray-800 scroll-mt-20">
      <h2 className="text-xl sm:text-2xl font-bold">
        <span className="pr-2 text-green-600">●</span>
        {heading || eyebrow}
      </h2>
      {subheading && <p className="text-gray-400 mt-2 max-w-2xl">{subheading}</p>}
      {description && <p className="text-gray-400 mt-2 max-w-3xl leading-relaxed">{description}</p>}
      <div
        className={`mt-6 border border-gray-800 bg-[#0e1219b8] rounded-xl overflow-hidden ${
          large ? '' : 'max-w-4xl'
        }`}
      >
        {embedSrc ? (
          isYouTube ? (
            <iframe
              src={embedSrc}
              title={heading || 'Project video'}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full aspect-video"
            />
          ) : isDrive ? (
            <iframe
              src={embedSrc}
              title={heading || 'Project video'}
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
              allowFullScreen
              className="w-full aspect-video"
            />
          ) : (
            <video
              src={embedSrc}
              poster={poster}
              controls={!autoplay}
              autoPlay={autoplay}
              muted={autoplay}
              loop
              playsInline
              className="w-full h-auto"
            />
          )
        ) : (
          <div className="aspect-video flex items-center justify-center text-gray-500 text-sm">
            Video preview coming soon
          </div>
        )}
        {caption && <p className="p-3 text-sm text-gray-400">{caption}</p>}
      </div>
    </section>
  )
}
