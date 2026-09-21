import React, { useState } from 'react'
import { links } from '../mapings'
import { NavLink } from 'react-router-dom'
import { RxHamburgerMenu } from 'react-icons/rx'
import { FaXmark } from 'react-icons/fa6'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <div className='sticky top-0 z-20 bg-[#0B0E13]/70 backdrop-blur-md'>
      <div className='flex justify-between px-5 sm:px-8 py-3 items-center'>
        <div className='flex items-center gap-2'>
          <img src="/woodieLogo.png" alt="woodie logo" className='w-10 sm:w-13' />

          <div className='leading-4 text-center'>
            <p className='font-bold text-[16px] sm:text-[18px]'>WOODIE</p>
            <p className='text-[11px] sm:text-[12px]'>CONCEPTS</p>
          </div>
        </div>

        <nav className='space-x-8 md:flex hidden'>
          {links.map((n) => (
            <NavLink
              key={n.title}
              to={n.path}
              id='navLink'
              className={({ isActive }) =>
                `relative before:absolute before:w-full before:h-[2px] before:bg-blue-600 before:-bottom-[1px] before:left-0 before:scale-x-0 before:transition-transform before:ease-in-out before:origin-right before:duration-500 ${
                  isActive
                    ? "border-b-2 border-blue-600 before:content-none hover:none pb-1"
                    : "before:content-['']"
                }`
              }
            >
              {n.title}
            </NavLink>
          ))}
        </nav>

        <NavLink to='/start-project' className='mx-4 bg-blue-600 hover:bg-blue-500 py-1 px-4 rounded-sm text-[15px] md:block hidden'>
          Start a Project
        </NavLink>

        <button
          className='md:hidden text-2xl'
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FaXmark /> : <RxHamburgerMenu />}
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-gray-800 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 border-t-0'
        }`}
      >
        <nav className='flex flex-col px-5 sm:px-8 py-4 gap-4'>
          {links.map((n) => (
            <NavLink
              key={n.title}
              to={n.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                `text-base py-1 ${isActive ? 'text-blue-500 font-semibold' : 'text-gray-200'}`
              }
            >
              {n.title}
            </NavLink>
          ))}

          <NavLink
            to='/start-project'
            onClick={closeMenu}
            className='mt-2 w-full bg-blue-600 hover:bg-blue-500 py-2 px-4 rounded-sm text-[15px] text-center'
          >
            Start a Project
          </NavLink>
        </nav>
      </div>
    </div>
  )
}
