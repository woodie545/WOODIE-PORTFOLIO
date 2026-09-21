import React from 'react'

export default function BlurPanel({icon, title, content, bg, bg2}) {
  return (
    <div className='w-45 h-38 rounded-2xl bg-gray-500/10 border border-gray-600 backdrop-blur-sm z-5 p-5 space-y-2'>
        <div className={`${bg} w-8 h-8 rounded-sm ${bg2} flex items-center justify-center`}>
            {icon}
        </div>

        <h1 className='font-bold text-sm'>
           {title} 
        </h1>

        <p className='text-xs text-gray-400'>
            {content}
        </p>
    </div>
  )
}
