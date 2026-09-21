import React, { useRef } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import { DEFAULT_AVATAR } from '../lib/constants'

function starRatings(rating) {
  const stars = Math.round(rating)
  return stars > 0 ? '⭐'.repeat(stars) : 'No rating'
}

export default function TestimonialSlider({ reviews, loading }) {
  const trackRef = useRef(null)

  function scrollByCard(direction) {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector('[data-card]')
    const cardWidth = card ? card.offsetWidth + 24 : el.clientWidth
    el.scrollBy({ left: direction * cardWidth, behavior: 'smooth' })
  }

  if (loading) {
    return <p className='text-gray-400 text-sm'>Loading reviews…</p>
  }

  if (!reviews || reviews.length === 0) {
    return <p className='text-gray-400 text-sm'>No reviews yet — be the first to share one.</p>
  }

  return (
    <div className='relative'>
      <div
        ref={trackRef}
        className='flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden'
      >
        {reviews.map((r) => (
          <div
            key={r.id}
            data-card
            className='snap-start shrink-0 w-[85%] sm:w-[48%] lg:w-[31%] bg-gray-800/10 border border-gray-600 rounded-lg p-5 space-y-3'
          >
            <p>{starRatings(r.ratings)}</p>
            <p className='text-gray-400 text-sm'>{r.review}</p>

            <div className='flex gap-3 items-center'>
              <img
                src={r.img || DEFAULT_AVATAR}
                alt={`Photo of ${r.name}`}
                className='w-8 h-8 rounded-full object-cover'
              />
              <div>
                <h1 className='font-bold text-sm'>{r.name}</h1>
                <p className='text-gray-400 text-xs'>{r.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {reviews.length > 1 && (
        <div className='flex justify-end gap-3 mt-3'>
          <button
            onClick={() => scrollByCard(-1)}
            aria-label='Previous reviews'
            className='w-9 h-9 rounded-full border border-gray-600 flex items-center justify-center hover:bg-gray-800/40'
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={() => scrollByCard(1)}
            aria-label='Next reviews'
            className='w-9 h-9 rounded-full border border-gray-600 flex items-center justify-center hover:bg-gray-800/40'
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </div>
  )
}
