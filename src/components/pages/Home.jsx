import React from 'react'
import { NavLink } from 'react-router-dom'
import GlitchCarousel from './GlitchCarousel'
import { RATINGS,panel,whyWork } from '../mapings'
import MixCarousel from './MixCarousel'
import BlurPanel from './BlurPanel';
import { AiFillMacCommand } from 'react-icons/ai';
import { FaComment, FaTag, FaRobot, FaCode, FaPenNib } from 'react-icons/fa6';
import DisplayPanel from './DisplayPanel';
import { RiRobot2Line } from 'react-icons/ri';




export default function Home() {


  const maxRatings = RATINGS.reduce((total, items) => total + items.maxRate,0);
  console.log(maxRatings)

  const totalRatings = RATINGS.reduce((total, items) => total + items.ratings,0);
  console.log(totalRatings)

  const mainRatings = 100/maxRatings * totalRatings;
  console.log(mainRatings)

  const {ratings: Ratings} = RATINGS;
  console.log(Ratings)
  console.log('RATINGS object:', RATINGS);
  console.log('Keys inside RATINGS:', Object.keys(RATINGS));

  function ratings(){
    if (mainRatings >= 81){
      return "⭐⭐⭐⭐⭐"
    } else if (mainRatings >= 61){
      return "⭐⭐⭐⭐"
    } else if (mainRatings >= 41){
      return "⭐⭐⭐"
    } else if (mainRatings >= 21){
      return "⭐⭐"
    } else if (mainRatings >= 11){
      return "⭐"
    } else {
      return "Your a failure man"
    }
  }

 function starRatings(rating) {
  if (rating >= 5) {
    return "⭐⭐⭐⭐⭐";
  } else if (rating >= 4) {
    return "⭐⭐⭐⭐";
  } else if (rating >= 3) {
    return "⭐⭐⭐";
  } else if (rating >= 2) {
    return "⭐⭐";
  } else if (rating >= 1) {
    return "⭐";
  } else {
    return "No rating";
  }
}

  const actualRatings = ratings();
  console.log(actualRatings)

  return (
    <div className='px-10'>
      {/* Hero Section */}
      <section className='flex justify-between  h-screen  py-5  '>
        <div className='py-10 flex flex-col flex-1'>
          
          {/* HERO TXT */}
          <p className='bg-gray-700/15 flex px-3 py-1 text-xs border border-gray-400/30 rounded-2xl w-55 '><span className='text-green-500 px-1'>◉</span> Creative Technology & AI Studio</p>
          <h1 className='my-6 text-6xl font-bold'>We Design.<br/> We Build.<br/> We Automate.</h1>
          <h3 className='w-110 text-lg text-gray-400'>Woodie Concepts is a creative technology studio helping businesses and creators turn ideas into powerful digital experiences with Al, design, and code.</h3>

          <div className='space-x-5 my-9'>
            <button className='bg-blue-600 hover:bg-blue-500 px-5 py-2 rounded-lg text-sm '>View My Work <span className='pl-3 text-lg'>↗</span></button>
            <NavLink to='/start-project' className='hover:bg-gray-900 px-5 py-2 border border-gray-400  rounded-lg text-sm'>Hire Me <span className='text-lg text-green-500 pl-3 font'>↗</span></NavLink>
          </div>

          {/* REVIEWS */}
          <div>
            <p className='text-sm text-gray-400'>Trusted by creators and businesses</p>
            <div className='flex gap-10 items-center'>
              <div className='flex mt-3 '>
              {RATINGS.map(r => (
                  <img key={r.id} src={r.img} alt="" className='w-8 rounded-full border-2 border-gray-800' />
                ))}
                <button className='bg-gray-900 text-gray-600 rounded-full w-8 h-8 flex items-center justify-center text-2xl pb-1 border-2 border-gray-700 font-semibold'>+</button>
                </div>

                <div className='flex gap-2 mt-2'>
                  <p>{actualRatings}</p>

                  <p>{`(${RATINGS.length} Reviews)`}</p>
                </div>

            </div>
          </div>
                
        </div>

        {/* IMAGE SLIED SECTION */}
        <div className='flex flex-1 p-10 relative '>
          
          <div className='absolute -top-10 right-10 z-5'>
          <MixCarousel/>
          </div>

          {/* <video src="/star overlay.mp4" disableRemotePlayback autoPlay width={990}></video> */}

          <img src="/glow.png" alt="" className=' absolute w-[1470px] right-10 -top-15 [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)] '/>



          {/* BLUR PANELS  */}

          <div className='absolute -left-27 top-0 z-5'>
              <BlurPanel 
              bg={"bg-green-800/30"}
              bg2={"text-green-400"}
              icon={<FaRobot/>}
              title={'Ai Automation'}
              content={'Smart solutlons that save time and scale businesses.'}
              />
          </div>

          <div className='absolute -left-15 bottom-25 z-5'>
              <BlurPanel 
              bg={"bg-blue-800/30"}
              bg2={"text-blue-400"}
              icon={<FaCode/>}
              title={'Web Development'}
              content={'Fast, responsive and morden websites that performs.'}
              />
          </div>

          <div className='absolute -right-3 bottom-59 z-5'>
              <BlurPanel 
              bg={"bg-purple-800/30"}
              bg2={"text-purple-400"}
              icon={<RiRobot2Line/>}
              title={'Ai Animation'}
              content={'Smart solutlons that save time and scale businesses.'}
              />
          </div>

          <div className='absolute right-5 bottom-0 z-5'>
              <BlurPanel 
              bg={"bg-orange-800/30"}
              bg2={"text-orange-400"}
              icon={<FaPenNib/>}
              title={'Ui/Ux & Graphics'}
              content={'Smart solutlons that save time and scale businesses.'}
              />
          </div>
        </div>
        
      </section>

      {/* feature section */}
      <section className='py-8'>
        <div className='flex justify-between'>
          <p className='font-bold'><span className='text-green-500 text-xl pr-2'>●</span>Featured Projects</p>
          <button className='text-blue-700 '>View all Projects →</button>
        </div>

        <div className='grid grid-cols-3 py-4 gap-2'>
            <div>
              <DisplayPanel
              img={"/cleanAbia.png"}
              title={"CleanAbia"}
              style={'text-green-600 hover:text-green-700'}
              subTitle={"Civic Tech/Enviromental Platform"}
              content={"A platform that empowers residents to report waste, track sanitation efforts and earn rewards for a cleaner Aba."}
              button={<div className='DpBtn'> <span>React</span><span>TailwindCss</span><span>Maps Api</span> <span>NodeJs</span> </div>}/>
            </div>

            <div>
              <DisplayPanel
              img={"/databot.png"}
              title={"Woodie Databot"}
              style={'text-blue-600 hover:text-blue-700'}
              subTitle={"WhatsApp Commerce Bot"}
              content={"An intelligent WhatsApp bot for airtime & data sales with Al automation, referrals, and seamless payment integration."}
              button={<div className='DpBtn'> <span>Node.js</span><span>MongoDB</span><span>Gemini AI</span> <span>Railway</span> </div>}/>
            </div>

            <div>
              <DisplayPanel
              img={"/MAde for the MOVE-Cover.jpg"}
              title={"Made for the Move"}
              style={'text-amber-600 hover:text-amber-700'}
              subTitle={"Cinematic AI Product Advertisement"}
              content={"A cinematic sneaker advertisement that follows one runner through constantly changing worlds— while the sneaker remains built for every move."}
              button={<div className='DpBtn'> <span>AI</span><span>Capcut</span><span>3D</span> <span>VideoEditing</span> </div>}/>
            </div>
        </div>
      </section>


      {/* what i do section */}
      <section className='space-y-3 border-b border-gray-800 pb-5'>
      <h1 className='text-xl font-bold'>
        <span className='pr-2 text-green-600'>
          ●
        </span> 
        What I Do
      </h1> 
      <p className='text-gray-400 text-md'>End to end creative & tech solutions for brands and creators</p>

      <div className='grid grid-cols-3 gap-5 py-5'>
        {panel.map((p, index) => (
          <div key={index} className='bg-gray-800/10 border border-gray-600 rounded-lg p-5 space-y-2 hover:scale-102 transition-all duration-300 w-90'>
            <div className={`w-12 h-12 rounded-lg text-2xl ${p.style} flex items-center justify-center`}>
              <p.icon/>
            </div>
              <h3 className='font-bold text-2xl'>{p.header}</h3>
              <p className='text-gray-400'>{p.content}</p>
          </div>
        ))}
      </div>
                
      </section>

      {/* why work with woodie section */}
      <section>
        <h1 className='text-center my-5 text-4xl font-bold'><span className='text-green-600 pr-1'>●</span>Why Work With Woodie Concepts.</h1>

        <div className='flex justify-evenly my-5'>
          {
            whyWork.map((w,index) => (
              <div key={index} className='text-center border border-gray-800 rounded-lg p-6'>
                  <h1 className='font-bold text-4xl text-blue-700'>{w.num}</h1>
                  <p>{w.content}</p>
              </div>
            ))
          }
        </div>
      </section>

      {/* about me  */}
      <section className='my-10 '>
        <h1 className='font-semibold text-2xl'>
          <span className='text-green-600 pr-1'>●</span>
          About Me
        </h1>

        <div className='flex justify-center items-center gap-15 my-5 '>
          <div className='w-110 relative'>

            <img src="/aboutImg.png" alt=""  />

            <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 z-5 "
            style={{
              background:
                "linear-gradient(to top, rgba(11, 14, 19, 1) 0%, rgba(11,14,19,0) 100%)",
            }}
          />
          </div>

          <div className='flex flex-col w-150 justify-center px-10 space-y-7'>
            <h1 className='font-semibold text-4xl leading-10'>I'm Cornelius Samuel, <br/>the creative mind behind <br />  <span className='text-blue-600'>Woodie Concepts.</span></h1> 

            <p className='text-gray-400 leading-7'>
              A creative technologist and problem solver with a passion for bulding dgltal products that make an impact, I combine design, code and Al to help businesses and creators grow, automate and stand out.
            </p>

            <button className='bg-blue-600 hover:bg-blue-500 px-5 py-2 rounded-lg text-lg w-55 '>More About Me ↗</button>
          </div>
        </div>
      </section>

      {/* what client say */}
      <section className='space-y-7 my-20'>
        <h1 className='font-semibold text-2xl'>
          <span className='text-green-600 pr-1'>●</span>
          What Clients Say
        </h1>
        <div className='flex justify-between gap-8'>
            {RATINGS.map((r) => (
              <div key={r.id} className='bg-gray-800/10 border border-gray-600 rounded-lg p-5 space-y-3  hover:scale-102 transition-all duration-300 w-90'>
                <p>{starRatings(r.ratings)}</p>
                <p className='text-gray-400 text-sm'>{r.review}</p>

                <div className='flex gap-3 items-center'>
                  <img src={r.img} alt={`Review ${r.id}`} className='w-8 h-8 rounded-full'/>
                  <div>
                    <h1 className='font-bold text-sm'>{r.name}</h1>
                    <p className='text-gray-400 text-xs'>{r.position}</p>
                  </div>
                </div>
              </div>
            ))}
      </div>
      </section>
      
      {/* do you have a project in mind  */}
      <section className='flex bg-linear-to-r from-blue-400 via-blue-500 to-blue-800 rounded-xl p-8 gap-10 mb-28 items-center justify-between'>
        <div className='space-y-3'>
          <h1 className='font-bold text-3xl'>Have a project in mind?</h1>
          <p className='text-md  w-120'>
            Let's work together to bring your ideas to life. Whether you need a website, an app, or a custom software solution, I can help you achieve your goals.
          </p>
        </div>
        <div className='flex justify-between items-center gap-15'>
          <NavLink to='/start-project' className='bg-white text-blue-800 font-semibold rounded-sm w-50 py-2 px-5 text-center'>Let's Talk </NavLink>
          <img src="/arrow.png" alt="" className='w-40 invert' />
        </div>
      </section>

    </div>
  )
}
