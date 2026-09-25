export default function GalleryBlock({
  eyebrow = 'Gallery',
  heading,
  subheading,
  images = [],
  columns = 3,
}) {
  const gridClass =
    columns === 2
      ? 'sm:grid-cols-2'
      : columns === 4
        ? 'sm:grid-cols-2 lg:grid-cols-4'
        : 'sm:grid-cols-2 lg:grid-cols-3'

  return (
    <section className="py-10 border-t border-gray-800">
      <h2 className="text-xl sm:text-2xl font-bold">
        <span className="pr-2 text-green-600">●</span>
        {heading || eyebrow}
      </h2>
      {subheading && <p className="text-gray-400 mt-2 max-w-2xl">{subheading}</p>}
      <div className={`grid grid-cols-1 ${gridClass} gap-4 mt-6`}>
        {images.map((img, i) => {
          const src = typeof img === 'string' ? img : img.src
          const caption = typeof img === 'string' ? null : img.caption
          const label = typeof img === 'string' ? null : img.label
          return (
            <figure
              key={i}
              className="border border-gray-800 bg-[#0e1219b8] rounded-lg overflow-hidden"
            >
              {src ? (
                <img src={src} alt={caption || label || `Gallery image ${i + 1}`} className="w-full h-auto" />
              ) : (
                <div className="relative aspect-video bg-gray-800/40 border-b border-dashed border-gray-700 flex items-center justify-center">
                  <span className="absolute top-3 left-3 text-xs font-semibold uppercase tracking-wider bg-gray-900/80 border border-gray-700 rounded-sm px-2 py-1 text-gray-300">
                    {label || `Frame ${String(i + 1).padStart(2, '0')}`}
                  </span>
                  <span className="text-gray-600 text-sm">Still frame coming soon</span>
                </div>
              )}
              {(label || caption) && (
                <figcaption className="p-3 text-sm text-gray-400">
                  {label && src && <span className="block text-gray-200 font-medium">{label}</span>}
                  {caption}
                </figcaption>
              )}
            </figure>
          )
        })}
      </div>
    </section>
  )
}
