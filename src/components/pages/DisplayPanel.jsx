import React from 'react'
import { Link } from 'react-router-dom'

export default function DisplayPanel({title, subTitle, content, button, img, style, linkTo}) {
  return (
    <div className='space-y-2 border border-gray-600 bg-[#0e1219b8] rounded-lg w-[97%] hover:scale-102 transition-all duration-300'>

        <img src={img} alt="" className='w-full h-auto rounded-lg' />

    <div className='p-3'>
            <div>
                <h1 className='font-bold'>{title}</h1>
                <h3 className='text-[16px]'>{subTitle}</h3>
            </div>
            <p className='text-gray-600 text-sm my-1'>{content}</p>

            <div>
                <div>
                    {button}
                </div>

                {linkTo ? (
                  <Link to={linkTo} className={`${style} font-semibold my-1 inline-block`}>Explore →</Link>
                ) : (
                  <button className={`${style} font-semibold my-1`}>Explore →</button>
                )}
            </div>
        </div>
    </div>
  )
}
