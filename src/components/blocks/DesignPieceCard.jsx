import { Images } from 'lucide-react'

export default function DesignPieceCard({ piece, onOpen }) {
  return (
    <div
      onClick={() => onOpen(piece)}
      className='space-y-2 border border-gray-600 bg-[#0e1219b8] rounded-lg w-[97%] hover:scale-102 transition-all duration-300 cursor-pointer'
    >
      <div className='relative'>
        <img src={piece.cover} alt={piece.title} className='w-90 h-45 object-cover rounded-lg' />
        {piece.images && piece.images.length > 1 && (
          <span className='absolute top-2 right-2 inline-flex items-center gap-1 text-xs bg-gray-900/80 border border-gray-700 rounded-sm px-2 py-1 text-gray-300'>
            <Images className='w-3.5 h-3.5' /> {piece.images.length}
          </span>
        )}
      </div>

      <div className='p-3'>
        <div>
          <h1 className='font-bold'>{piece.title}</h1>
          <h3 className='text-[16px]'>{piece.category}</h3>
        </div>
        {piece.caption && <p className='text-gray-600 text-sm my-1'>{piece.caption}</p>}

        <div>
          <div>
            <div className='DpBtn flex flex-wrap gap-1'>
              {piece.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>

          <span className='text-gray-400 font-semibold my-1 inline-block text-sm'>View →</span>
        </div>
      </div>
    </div>
  )
}
