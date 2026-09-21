import React from 'react'
import { links } from '../mapings'
import { NavLink } from 'react-router-dom'
import { FaBurger } from 'react-icons/fa6'
import { RxHamburgerMenu } from 'react-icons/rx'


export default function Header() {
  return (
    <div className='flex justify-between px-8 py-3 items-center bg-[#0B0E13]/70 backdrop-blur-md sticky top-0 z-10'>
        <div className='flex items-center gap-2'>
        <img src="\woodieLogo.png" alt="woodie logo" className=' w-13'/>

        <div className='leading-4 text-center'>
            <p className='font-bold text-[18px]'>WOODIE</p>
            <p className='text-[12px]'>CONCEPTS</p>
        </div>
        </div>

        <nav className='space-x-8 md:block hidden'>
            {links.map((n) => 
               <NavLink
               key={n.title}
               to={n.path}
               id='navLink'
               className={({isActive}) =>
                 `relative  before:absolute before:w-full before:h-[2px] before:bg-blue-600 before:-bottom-[5px] before:left-0 before:scale-x-0 before:transition-transform before:ease-in-out before:origin-right before:duration-500 ${
                  isActive 
               ? "border-b-2 border-blue-600 before:content-none hover:none py-1" 
               : "before:content-['']"} `}>
                {n.title}
               </NavLink> 
            )}
        </nav>

        <NavLink to='/start-project' className='mx-4 bg-blue-600 hover:bg-blue-500 py-1 px-4 rounded-sm text-[15px] md:block hidden'>Start a Project</NavLink>

        <button className='md:hidden sm:block' onClick={() => (
          <p>help me pls </p>
        )}><RxHamburgerMenu/></button>
    </div>
  )
}
