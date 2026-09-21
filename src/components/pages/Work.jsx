import React, { useState } from 'react'
import { filter, work } from '../mapings'

export default function Work() {
  const [active, setActive] = useState('All')

  return (
    <div className='px-7'>
      {/* Hero */}
     <div className="relative rounded-xl overflow-hidden bg-[#0B0E13] aspect-[4/3] flex items-center justify-center h-[450px] w-full">

            <div>
              <img src="/tech idea board.png" alt="" className="" />
              <div className="absolute inset-0 bg-linear-to-b from-[#0b0e13c3] to-[#0b0e13e8]" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center max-w-xl text-center mx-auto px-6 py-16">
              
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-5">
                <span className='text-blue-600'>IDEAS</span> WE'VE TURNED INTO <span className="text-green-500">REALITY</span>.
              </h1>
              <p className="text-slate-400 leading-relaxed mb-8 max-w-md">
                We help businesses, creators and organizations turn their ideas
                into powerful digital experiences. From design to development,
                AI to automation — we build solutions that make an impact.
              </p>
              <div className="flex flex-wrap gap-6">
                {/* <div className="flex items-center gap-2 text-sm text-slate-300">
                  <Zap className="w-4 h-4 text-blue-500" />
                  Creative Expertise
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <RadioTower className="w-4 h-4 text-blue-500" />
                  Modern Technology
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <Users className="w-4 h-4 text-blue-500" />
                  Client-Focused
                </div> */}
              </div>
            </div>
            </div>
              {/* <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-xl bg-slate-800 flex items-center justify-center mb-4">
                  <span className="text-blue-500 font-black text-2xl">W</span>
                </div>
                <p className="text-white font-bold tracking-wide">WOODIE CONCEPTS</p>
                <p className="text-slate-400 text-sm mt-1">Imagine. Create. Build.</p>
              </div> */}
            </div>
      
      {/* filter */}
      <div className='filter flex'>
        {
          filter.map((cat, index) => (
            
              <button
              key={index}
              onClick={() => setActive(cat)}
              className={active === cat
                ? "bg-blue-600 hover:bg-blue-500"
                : "hover:bg-gray-900"
              }>
                {cat}
              </button>
            
          ))
        }
      </div>

    <div>
        {/* WEB */}
        <div className={`${active === "Web" || active === "All" ? "block" : "hidden" } py-6 border-b border-gray-800`}>
          <h1 className='text-xl font-bold mb-5'>WEB</h1>
          <div className='grid grid-cols-4 gap-2'>
          {
            work.filter(p => p.cat === "Web").map((p,index) => (
            <div key={index} className='space-y-2 border border-gray-600 bg-[#0e1219b8] rounded-lg w-[97%] hover:scale-102 transition-all duration-300'>

               <img src={p.img} alt="" className='w-full h-auto rounded-lg' />

                  <div className='p-3'>
                    <div>
                        <h1 className='font-bold'>{p.title}</h1>
                        <h3 className='text-[16px]'>{p.subTitle}</h3>
                    </div>
                    <p className='text-gray-600 text-sm my-1'>{p.content}</p>

                    <div>
                        <div>
                            {p.button}
                        </div>

                        <button className={`${p.style} font-semibold my-1`}>Explore →</button>
                    </div>
                </div>
             </div>))}
             </div>
        </div>

        {/* Automation */}
        <div className={`${active === "Automation" || active === "All" ? "block" : "hidden" } py-6 border-b border-gray-800`}>
         <h1 className='text-xl font-bold mb-5'>AUTOMATION</h1>
          <div className='grid grid-cols-4 gap-2'>
          {
            work.filter(p => p.cat === "Automation").map((p,index) => (
            <div key={index} className='space-y-2 border border-gray-600 bg-[#0e1219b8] rounded-lg w-[97%] hover:scale-102 transition-all duration-300'>

               <img src={p.img} alt="" className='w-full h-auto rounded-lg' />

                  <div className='p-3'>
                    <div>
                        <h1 className='font-bold'>{p.title}</h1>
                        <h3 className='text-[16px]'>{p.subTitle}</h3>
                    </div>
                    <p className='text-gray-600 text-sm my-1'>{p.content}</p>

                    <div>
                        <div>
                            {p.button}
                        </div>

                        <button className={`${p.style} font-semibold my-1`}>Explore →</button>
                    </div>
                </div>
             </div>))}
             </div>
        </div>

        {/* UI/UX */}
        <div className={`${active === "UI/UX" || active === "All" ? "block" : "hidden" } py-6 border-b border-gray-800`}>
          <h1 className='text-xl font-bold mb-5'>UI/UX</h1>
          <div className='grid grid-cols-4 gap-2'>
          {
            work.filter(p => p.cat === "UI/UX").map((p,index) => (
            <div key={index} className='space-y-2 border border-gray-600 bg-[#0e1219b8] rounded-lg w-[97%] hover:scale-102 transition-all duration-300'>

               <img src={p.img} alt="" className='w-full h-auto rounded-lg' />

                  <div className='p-3'>
                    <div>
                        <h1 className='font-bold'>{p.title}</h1>
                        <h3 className='text-[16px]'>{p.subTitle}</h3>
                    </div>
                    <p className='text-gray-600 text-sm my-1'>{p.content}</p>

                    <div>
                        <div>
                            {p.button}
                        </div>

                        <button className={`${p.style} font-semibold my-1`}>Explore →</button>
                    </div>
                </div>
             </div>))}
             </div>
        </div>
      
      {/* Graphics */}
      <div className={`${active === "Graphics" || active === "All" ? "block" : "hidden" } py-6 border-b border-gray-800`}>
          <h1 className='text-xl font-bold mb-5'>GRAPHICS</h1>
          <div className='grid grid-cols-4 gap-2'>
          {
            work.filter(p => p.cat === "Graphics").map((p,index) => (
            <div key={index} className='space-y-2 border border-gray-600 bg-[#0e1219b8] rounded-lg w-[97%] hover:scale-102 transition-all duration-300'>

               <img src={p.img} alt="" className='w-full h-auto rounded-lg' />

                  <div className='p-3'>
                    <div>
                        <h1 className='font-bold'>{p.title}</h1>
                        <h3 className='text-[16px]'>{p.subTitle}</h3>
                    </div>
                    <p className='text-gray-600 text-sm my-1'>{p.content}</p>

                    <div>
                        <div>
                            {p.button}
                        </div>

                        <button className={`${p.style} font-semibold my-1`}>Explore →</button>
                    </div>
                </div>
             </div>))}
             </div>
        </div>

        {/* Animation */}
        <div className={`${active === "Animation" || active === "All" ? "block" : "hidden" } py-6 border-b border-gray-800`}>
           <h1 className='text-xl font-bold mb-5'>ANIMATION</h1>
          <div className='grid grid-cols-4 gap-2'>
          {
            work.filter(p => p.cat === "Animation").map((p,index) => (
            <div key={index} className='space-y-2 border border-gray-600 bg-[#0e1219b8] rounded-lg w-[97%] hover:scale-102 transition-all duration-300'>

               <img src={p.img} alt="" className='w-full h-auto rounded-lg' />

                  <div className='p-3'>
                    <div>
                        <h1 className='font-bold'>{p.title}</h1>
                        <h3 className='text-[16px]'>{p.subTitle}</h3>
                    </div>
                    <p className='text-gray-600 text-sm my-1'>{p.content}</p>

                    <div>
                        <div>
                            {p.button}
                        </div>

                        <button className={`${p.style} font-semibold my-1`}>Explore →</button>
                    </div>
                </div>
             </div>))}
             </div>
        </div>

        {/* Branding */}
        <div className={`${active === "Branding" || active === "All" ? "block" : "hidden" } py-6 border-b border-gray-800`}>
          <h1 className='text-xl font-bold mb-5'>BRANDING</h1>
          <div className='grid grid-cols-4 gap-2'>
          {
            work.filter(p => p.cat === "Branding").map((p,index) => (
            <div key={index} className='space-y-2 border border-gray-600 bg-[#0e1219b8] rounded-lg w-[97%] hover:scale-102 transition-all duration-300'>

               <img src={p.img} alt="" className='w-full h-auto rounded-lg' />

                  <div className='p-3'>
                    <div>
                        <h1 className='font-bold'>{p.title}</h1>
                        <h3 className='text-[16px]'>{p.subTitle}</h3>
                    </div>
                    <p className='text-gray-600 text-sm my-1'>{p.content}</p>

                    <div>
                        <div>
                            {p.button}
                        </div>

                        <button className={`${p.style} font-semibold my-1`}>Explore →</button>
                    </div>
                </div>
             </div>))}
             </div>
        </div>
      
      

    </div>
      
    </div>
  )
}
