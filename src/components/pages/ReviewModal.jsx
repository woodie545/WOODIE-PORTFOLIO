import React, { useState, useEffect } from 'react'
import { FaStar, FaRegStar, FaXmark } from 'react-icons/fa6'

export default function ReviewModal({ isOpen, onClose, onSubmit }) {
  const [name, setName] = useState('')
  const [position, setPosition] = useState('')
  const [review, setReview] = useState('')
  const [stars, setStars] = useState(0)
  const [hoverStar, setHoverStar] = useState(0)
  const [imageFile, setImageFile] = useState(null)
  const [imgPreview, setImgPreview] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape' && !submitting) onClose()
    }
    if (isOpen) document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose, submitting])

  if (!isOpen) return null

  function handleImage(e) {
    const file = e.target.files?.[0]
    if (!file) return
    setImageFile(file)
    const reader = new FileReader()
    reader.onload = () => setImgPreview(reader.result)
    reader.readAsDataURL(file)
  }

  function resetForm() {
    setName('')
    setPosition('')
    setReview('')
    setStars(0)
    setImageFile(null)
    setImgPreview('')
    setError('')
  }

  function handleClose() {
    if (submitting) return
    resetForm()
    onClose()
  }

  async function handleSubmit(e) {
    e.preventDefault()

    if (!name.trim() || !review.trim() || stars === 0) {
      setError('Add a rating, your name, and a short review before submitting.')
      return
    }

    setError('')
    setSubmitting(true)

    try {
      await onSubmit({
        name: name.trim(),
        position: position.trim() || 'Client',
        review: review.trim(),
        ratings: stars,
        imageFile,
      })
      resetForm()
      onClose()
    } catch (err) {
      setError('Something went wrong submitting your review. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4'
      onClick={handleClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className='w-full max-w-md bg-[#0B0E13] border border-gray-700 rounded-xl p-6 space-y-4 max-h-[90vh] overflow-y-auto'
      >
        <div className='flex justify-between items-center'>
          <h2 className='text-lg font-bold'>Share your experience</h2>
          <button
            onClick={handleClose}
            aria-label='Close dialog'
            className='text-gray-400 hover:text-white disabled:opacity-40'
            disabled={submitting}
          >
            <FaXmark size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label className='text-sm text-gray-400 block mb-1'>Rating</label>
            <div className='flex gap-1 text-xl'>
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  type='button'
                  key={n}
                  onClick={() => setStars(n)}
                  onMouseEnter={() => setHoverStar(n)}
                  onMouseLeave={() => setHoverStar(0)}
                  aria-label={`${n} star${n > 1 ? 's' : ''}`}
                  className='text-yellow-400'
                  disabled={submitting}
                >
                  {(hoverStar || stars) >= n ? <FaStar /> : <FaRegStar />}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className='text-sm text-gray-400 block mb-1' htmlFor='review'>
              Your review
            </label>
            <textarea
              id='review'
              value={review}
              onChange={(e) => setReview(e.target.value)}
              rows={4}
              disabled={submitting}
              className='w-full bg-gray-900/50 border border-gray-700 rounded-lg p-3 text-sm outline-none focus:border-blue-600 resize-none disabled:opacity-60'
              placeholder='Tell us about working with Woodie Concepts'
            />
          </div>

          <div className='flex flex-col sm:flex-row gap-4'>
            <div className='flex-1'>
              <label className='text-sm text-gray-400 block mb-1' htmlFor='name'>
                Name
              </label>
              <input
                id='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={submitting}
                className='w-full bg-gray-900/50 border border-gray-700 rounded-lg p-2 text-sm outline-none focus:border-blue-600 disabled:opacity-60'
                placeholder='Jane Doe'
              />
            </div>
            <div className='flex-1'>
              <label className='text-sm text-gray-400 block mb-1' htmlFor='position'>
                Role
              </label>
              <input
                id='position'
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                disabled={submitting}
                className='w-full bg-gray-900/50 border border-gray-700 rounded-lg p-2 text-sm outline-none focus:border-blue-600 disabled:opacity-60'
                placeholder='Founder, Acme Co.'
              />
            </div>
          </div>

          <div>
            <label className='text-sm text-gray-400 block mb-1' htmlFor='photo'>
              Your photo (optional)
            </label>
            <div className='flex items-center gap-3'>
              {imgPreview && (
                <img
                  src={imgPreview}
                  alt='Preview of uploaded photo'
                  className='w-10 h-10 rounded-full object-cover border border-gray-700'
                />
              )}
              <input
                id='photo'
                type='file'
                accept='image/*'
                onChange={handleImage}
                disabled={submitting}
                className='text-sm text-gray-400 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:bg-gray-800 file:text-gray-300 file:text-sm hover:file:bg-gray-700 disabled:opacity-60'
              />
            </div>
          </div>

          {error && <p className='text-sm text-red-400'>{error}</p>}

          <button
            type='submit'
            disabled={submitting}
            className='w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 disabled:cursor-not-allowed rounded-lg py-2 text-sm font-semibold'
          >
            {submitting ? 'Submitting…' : 'Submit review'}
          </button>
        </form>
      </div>
    </div>
  )
}
