import React from 'react'
import { NavLink } from 'react-router-dom'
import { links } from '../mapings'
import { FaFacebookF, FaInstagram, FaBluesky, FaLinkedinIn } from 'react-icons/fa6'
import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from 'react-icons/hi'

const services = [
  'Ai Animation',
  'Web Development',
  'Ui/Ux Design',
  'Ai Automation',
  'Chatbot Development',
]

const socials = [
  { icon: <FaFacebookF />, label: 'Facebook', href: '#' },
  { icon: <FaInstagram />, label: 'Instagram', href: '#' },
  { icon: <FaBluesky />, label: 'Bluesky', href: '#' },
  { icon: <FaLinkedinIn />, label: 'LinkedIn', href: '#' },
]

export default function Footer() {
  return (
    <footer className='px-5 sm:px-8 lg:px-10 pt-14 pb-6 border-t border-gray-800 mt-10'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8'>
        {/* Brand column */}
        <div className='space-y-4'>
          <div className='flex items-center gap-2'>
            <img src='/woodieLogo.png' alt='Woodie logo' className='w-10' />
            <div className='leading-4'>
              <p className='font-bold text-[16px]'>WOODIE</p>
              <p className='text-[11px]'>CONCEPTS</p>
            </div>
          </div>

          <p className='text-gray-400 text-sm max-w-56'>
            Creative Technology & AI Studio building digital products that inspire and solve real problems.
          </p>

          <div className='flex gap-3'>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className='w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center text-gray-300 hover:text-blue-500 hover:border-blue-500 transition-colors'
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div className='space-y-3'>
          <h3 className='font-semibold text-white'>Quick Links</h3>
          <ul className='space-y-2 text-sm text-gray-400'>
            {links.map((l) => (
              <li key={l.title}>
                <NavLink to={l.path} className='hover:text-blue-500 transition-colors'>
                  {l.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className='space-y-3'>
          <h3 className='font-semibold text-white'>Services</h3>
          <ul className='space-y-2 text-sm text-gray-400'>
            {services.map((s) => (
              <li key={s} className='hover:text-blue-500 transition-colors w-fit'>
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className='space-y-3'>
          <h3 className='font-semibold text-white'>Let's Connect</h3>
          <ul className='space-y-3 text-sm text-gray-400'>
            <li className='flex items-start gap-2'>
              <HiOutlineLocationMarker className='mt-0.5 shrink-0 text-blue-500' />
              <span>Abia State, Nigeria</span>
            </li>
            <li className='flex items-start gap-2'>
              <HiOutlineMail className='mt-0.5 shrink-0 text-blue-500' />
              <a href='mailto:hello@woodieconcepts.com' className='hover:text-blue-500 transition-colors break-all'>
                hello@woodieconcepts.com
              </a>
            </li>
            <li className='flex items-start gap-2'>
              <HiOutlinePhone className='mt-0.5 shrink-0 text-blue-500' />
              <a href='tel:+2348091234567' className='hover:text-blue-500 transition-colors'>
                +234 809 123 4567
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className='border-t border-gray-800 mt-10 pt-5 text-center text-xs text-gray-500'>
        © {new Date().getFullYear()} Woodie Concepts. All rights reserved.
      </div>
    </footer>
  )
}