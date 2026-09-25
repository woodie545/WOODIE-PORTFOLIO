import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

const SWIPE_THRESHOLD = 40

export default function DesignLightbox({ piece, onClose }) {
  const [index, setIndex] = useState(0)
  const touchStartX = useRef(null)
  const images = piece.images || []
  const hasMultiple = images.length > 1

  const goPrev = useCallback(
    () => setIndex((i) => (i - 1 + images.length) % images.length),
    [images.length],
  )
  const goNext = useCallback(() => setIndex((i) => (i + 1) % images.length), [images.length])

  // Keyboard navigation + Escape to close + scroll lock while open.
  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft' && hasMultiple) goPrev()
      else if (e.key === 'ArrowRight' && hasMultiple) goNext()
    }
    document.addEventListener('keydown', handleKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = prevOverflow
    }
  }, [onClose, hasMultiple, goPrev, goNext])

  function handleTouchStart(e) {
    touchStartX.current = e.touches[0].clientX
  }

  function handleTouchEnd(e) {
    if (touchStartX.current === null) return
    const deltaX = e.changedTouches[0].clientX - touchStartX.current
    touchStartX.current = null
    if (!hasMultiple) return
    if (deltaX > SWIPE_THRESHOLD) goPrev()
    else if (deltaX < -SWIPE_THRESHOLD) goNext()
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={piece.title}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-900/80 border border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800 flex items-center justify-center"
      >
        <X className="w-5 h-5" />
      </button>

      <div
        className="relative max-w-4xl w-full flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={images[index]}
          alt={`${piece.title} — image ${index + 1} of ${images.length}`}
          className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg border border-gray-800"
        />

        <div className="mt-4 text-center max-w-2xl">
          <h3 className="font-bold text-lg">{piece.title}</h3>
          {piece.caption && <p className="text-gray-400 text-sm mt-1">{piece.caption}</p>}
        </div>

        {hasMultiple && (
          <>
            <button
              onClick={goPrev}
              aria-label="Previous image"
              className="absolute left-0 sm:-left-2 top-[40%] -translate-y-1/2 w-10 h-10 rounded-full bg-gray-900/80 border border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800 flex items-center justify-center"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goNext}
              aria-label="Next image"
              className="absolute right-0 sm:-right-2 top-[40%] -translate-y-1/2 w-10 h-10 rounded-full bg-gray-900/80 border border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800 flex items-center justify-center"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="mt-3 flex items-center gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to image ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === index ? 'bg-blue-500' : 'bg-gray-600 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
