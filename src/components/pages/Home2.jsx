import React, { useEffect, useState } from 'react'
import GlitchCarousel from './GlitchCarousel'
import { panel, whyWork } from '../mapings'
import MixCarousel from './MixCarousel'
import BlurPanel from './BlurPanel'
import { FaComment, FaTag, FaRobot, FaCode, FaPenNib } from 'react-icons/fa6'
import DisplayPanel from './DisplayPanel'
import { RiRobot2Line } from 'react-icons/ri'
import ReviewModal from './ReviewModal'
import TestimonialSlider from './TestimonialSlider'
import { supabase } from '../lib/supabaseClient'
import { DEFAULT_AVATAR } from '../lib/constants'
import { NavLink, Router } from 'react-router-dom'
import { projects } from '../../data/projects'

export default function Home() {
  const [reviews, setReviews] = useState([])
  const [loadingReviews, setLoadingReviews] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    fetchReviews()
  }, [])

  async function fetchReviews() {
    setLoadingReviews(true)
    const { data, error } = await supabase
      .from('reviews')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error loading reviews:', error.message)
    } else {
      setReviews(data)
    }
    setLoadingReviews(false)
  }

  async function uploadPhoto(file) {
    if (!file) return null

    const fileExt = file.name.split('.').pop()
    const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${fileExt}`

    const { error: uploadError } = await supabase.storage.from('avatars').upload(fileName, file)
    if (uploadError) throw uploadError

    const { data } = supabase.storage.from('avatars').getPublicUrl(fileName)
    return data.publicUrl
  }

  async function handleAddReview({ name, position, review, ratings, imageFile }) {
    const imgUrl = await uploadPhoto(imageFile)

    const { error } = await supabase.from('reviews').insert({
      name,
      position,
      review,
      ratings,
      img: imgUrl,
    })

    if (error) throw error

    await fetchReviews()
  }

  const maxRatings = reviews.length * 5
  const totalRatings = reviews.reduce((total, item) => total + item.ratings, 0)
  const mainRatings = maxRatings > 0 ? (100 / maxRatings) * totalRatings : 0

  function overallStars() {
    if (mainRatings >= 81) return '⭐⭐⭐⭐⭐'
    if (mainRatings >= 61) return '⭐⭐⭐⭐'
    if (mainRatings >= 41) return '⭐⭐⭐'
    if (mainRatings >= 21) return '⭐⭐'
    if (mainRatings >= 11) return '⭐'
    return 'No ratings yet'
  }

  const actualRatings = overallStars()

  return (
    <div className='px-5 sm:px-8 lg:px-10'>
      {/* Hero Section */}
      <section className='flex flex-col lg:flex-row justify-between gap-10 lg:gap-6 py-5 lg:min-h-screen'>
        <div className='py-6 lg:py-10 flex flex-col flex-1'>
          {/* HERO TXT */}
          <p className='bg-gray-700/15 flex px-3 py-1 text-xs border border-gray-400/30 rounded-2xl w-fit'>
            <span className='text-green-500 px-1'>◉</span> Creative Technology & AI Studio
          </p>
          <h1 className='my-6 text-4xl sm:text-5xl lg:text-6xl font-bold'>
            We Design.
            <br /> We Build.
            <br /> We Automate.
          </h1>
          <h3 className='w-full max-w-lg text-base sm:text-lg text-gray-400'>
            Woodie Concepts is a creative technology studio helping businesses and creators turn ideas into powerful
            digital experiences with AI, design, and code.
          </h3>

          <div className='flex flex-wrap gap-4 my-9'>
            <NavLink 
            to={'/work'}
            className='bg-blue-600 hover:bg-blue-500 px-5 py-2 rounded-lg text-sm'>
              View My Work <span className='pl-3 text-lg'>↗</span>
            </NavLink>
            <NavLink
            to={'/start-project'}
            className='hover:bg-gray-900 px-5 py-2 border border-gray-400 rounded-lg text-sm'>
              Hire Me <span className='text-lg text-green-500 pl-3'>↗</span>
            </NavLink>
          </div>

          {/* REVIEWS */}
          <div>
            <p className='text-sm text-gray-400'>Trusted by creators and businesses</p>
            <div className='flex flex-wrap gap-4 sm:gap-10 items-center'>
              <div className='flex mt-3'>
                {reviews.slice(0, 5).map((r) => (
                  <img
                    key={r.id}
                    src={r.img || DEFAULT_AVATAR}
                    alt={`Photo of ${r.name || 'a client'}`}
                    className='w-8 h-8 rounded-full border-2 border-gray-800 -ml-2 first:ml-0 object-cover'
                  />
                ))}
                <button
                  onClick={() => setIsModalOpen(true)}
                  aria-label='Add your review'
                  className='bg-gray-900 text-gray-600 hover:text-gray-300 rounded-full w-8 h-8 -ml-2 flex items-center justify-center text-2xl pb-1 border-2 border-gray-700 font-semibold transition-colors'
                >
                  +
                </button>
              </div>

              <div className='flex gap-2 mt-2'>
                <p>{actualRatings}</p>
                <p>{`(${reviews.length} Reviews)`}</p>
              </div>
            </div>
          </div>
        </div>

        {/* IMAGE SLIDE SECTION — desktop only decorative layout */}
        <div className='hidden lg:flex flex-1 p-10 relative'>
          <div className='absolute -top-10 right-10 z-5'>
            <MixCarousel />
          </div>

          <img
            src='/glow.png'
            alt=''
            className='absolute w-[1470px] right-10 -top-15 [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)]'
          />

          <div className='absolute -left-27 top-0 z-5'>
            <BlurPanel
              bg={'bg-green-800/30'}
              bg2={'text-green-400'}
              icon={<FaRobot />}
              title={'Ai Automation'}
              content={'Smart solutions that save time and scale businesses.'}
            />
          </div>

          <div className='absolute -left-15 bottom-25 z-5'>
            <BlurPanel
              bg={'bg-blue-800/30'}
              bg2={'text-blue-400'}
              icon={<FaCode />}
              title={'Web Development'}
              content={'Fast, responsive and modern websites that perform.'}
            />
          </div>

          <div className='absolute -right-3 bottom-59 z-5'>
            <BlurPanel
              bg={'bg-purple-800/30'}
              bg2={'text-purple-400'}
              icon={<RiRobot2Line />}
              title={'Ai Animation'}
              content={'Smart solutions that save time and scale businesses.'}
            />
          </div>

          <div className='absolute right-5 bottom-0 z-5'>
            <BlurPanel
              bg={'bg-orange-800/30'}
              bg2={'text-orange-400'}
              icon={<FaPenNib />}
              title={'Ui/Ux & Graphics'}
              content={'Smart solutions that save time and scale businesses.'}
            />
          </div>
        </div>

        {/* Mobile / tablet fallback — same panels, stacked instead of absolute */}
        <div className='grid grid-cols-2 gap-4 lg:hidden'>
          <BlurPanel
            bg={'bg-green-800/30'}
            bg2={'text-green-400'}
            icon={<FaRobot />}
            title={'Ai Automation'}
            content={'Smart solutions that save time and scale businesses.'}
          />
          <BlurPanel
            bg={'bg-blue-800/30'}
            bg2={'text-blue-400'}
            icon={<FaCode />}
            title={'Web Development'}
            content={'Fast, responsive and modern websites that perform.'}
          />
          <BlurPanel
            bg={'bg-purple-800/30'}
            bg2={'text-purple-400'}
            icon={<RiRobot2Line />}
            title={'Ai Animation'}
            content={'Smart solutions that save time and scale businesses.'}
          />
          <BlurPanel
            bg={'bg-orange-800/30'}
            bg2={'text-orange-400'}
            icon={<FaPenNib />}
            title={'Ui/Ux & Graphics'}
            content={'Smart solutions that save time and scale businesses.'}
          />
        </div>
      </section>

      {/* feature section */}
      <section className='py-8'>
        <div className='flex flex-col sm:flex-row sm:justify-between gap-3'>
          <p className='font-bold'>
            <span className='text-green-500 text-xl pr-2'>●</span>Featured Projects
          </p>
          <NavLink to={'/work'} className='text-blue-700 text-left sm:text-right'>View all Projects →</NavLink>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-4 gap-4'>
          {/* Featured only — Works-only projects set `featured: false` in their data file */}
          {projects.filter((project) => project.featured !== false).map((project) => (
            <DisplayPanel
              key={project.slug}
              img={project.cover}
              title={project.title}
              style={project.accent}
              subTitle={project.tagline}
              content={project.description}
              linkTo={`/work/${project.slug}`}
              button={
                <div className='DpBtn flex flex-wrap gap-2'>
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              }
            />
          ))}

        </div>
      </section>

      {/* what i do section */}
      <section className='space-y-3 border-b border-gray-800 pb-5'>
        <h1 className='text-xl font-bold'>
          <span className='pr-2 text-green-600'>●</span> What I Do
        </h1>
        <p className='text-gray-400 text-md'>End to end creative & tech solutions for brands and creators</p>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 py-5'>
          {panel.map((p, index) => (
            <div
              key={index}
              className=' border border-gray-600 rounded-lg p-5 space-y-2 hover:scale-102 transition-all duration-300'
            >
              <div className={`w-12 h-12 rounded-lg text-2xl ${p.style} flex items-center justify-center`}>
                <p.icon />
              </div>
              <h3 className='font-bold text-2xl'>{p.header}</h3>
              <p className='text-gray-400'>{p.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* why work with woodie section */}
      <section>
        <h1 className='text-center my-5 text-2xl sm:text-3xl lg:text-4xl font-bold'>
          <span className='text-green-600 pr-1'>●</span>Why Work With Woodie Concepts.
        </h1>

        <div className='flex flex-wrap justify-center gap-5 my-5'>
          {whyWork.map((w, index) => (
            <div key={index} className='text-center border border-gray-800 rounded-lg p-6 w-40 sm:w-48'>
              <h1 className='font-bold text-3xl sm:text-4xl text-blue-700'>{w.num}</h1>
              <p>{w.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* about me  */}
      <section className='my-10'>
        <h1 className='font-semibold text-2xl'>
          <span className='text-green-600 pr-1'>●</span>
          About Me
        </h1>

        <div className='flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-15 my-5'>
          <div className='w-full max-w-md relative'>
            <img src='/aboutImg.png' alt='' className='w-full' />

            <div
              className='pointer-events-none absolute inset-x-0 bottom-0 h-1/2 z-5'
              style={{
                background: 'linear-gradient(to top, rgba(11, 14, 19, 1) 0%, rgba(11,14,19,0) 100%)',
              }}
            />
          </div>

          <div className='flex flex-col w-full max-w-xl justify-center px-2 sm:px-10 space-y-7'>
            <h1 className='font-semibold text-3xl sm:text-4xl leading-10'>
              I'm Cornelius Samuel, <br />
              the creative mind behind <br />
              <span className='text-blue-600'>Woodie Concepts.</span>
            </h1>

            <p className='text-gray-400 leading-7'>
              A creative technologist and problem solver with a passion for building digital products that make an
              impact, I combine design, code and AI to help businesses and creators grow, automate and stand out.
            </p>

            <NavLink 
            to={'/about'}
            className='bg-blue-600 hover:bg-blue-500 px-5 py-2 rounded-lg text-lg w-fit'>
              More About Me ↗
            </NavLink>
          </div>
        </div>
      </section>

      {/* what client say */}
      <section className='space-y-7 my-20'>
        <h1 className='font-semibold text-2xl'>
          <span className='text-green-600 pr-1'>●</span>
          What Clients Say
        </h1>

        <TestimonialSlider reviews={reviews} loading={loadingReviews} />
      </section>

      {/* do you have a project in mind  */}
      <section className='flex flex-col sm:flex-row bg-linear-to-r from-blue-400 via-blue-500 to-blue-800 rounded-xl p-8 gap-8 sm:gap-10 items-center justify-between'>
        <div className='space-y-3'>
          <h1 className='font-bold text-2xl sm:text-3xl'>Have a project in mind?</h1>
          <p className='text-md w-full max-w-xl'>
            Let's work together to bring your ideas to life. Whether you need a website, an app, or a custom software
            solution, I can help you achieve your goals.
          </p>
        </div>
        <div className='flex items-center gap-8 sm:gap-15'>
          <NavLink to={'/start-project'} className='bg-white hover:bg-gray-50 text-blue-800 font-semibold rounded-sm w-40 sm:w-50 py-2 px-5 text-center'>
            Let's Talk
          </NavLink>
          <img src='/arrow.png' alt='' className='hidden sm:block w-28 lg:w-40 invert' />
        </div>
      </section>

      <ReviewModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleAddReview} />
    </div>
  )
}
