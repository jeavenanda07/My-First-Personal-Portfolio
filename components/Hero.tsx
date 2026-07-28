import React from 'react'
import Header from './Header'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const Hero = () => {
  return (
    <div className="hero relative flex items-center  h-screen px-10 py-5">
      <div className='relative max-w-[1920px] w-full m-auto h-full flex flex-col justify-center'>
        <Header />
        
        <div className='flex relative flex-col w-full items-center justify-center h-full text-center'>
          <p className='font-extrabold absolute bottom-10 text-[20vh] text-nowrap text-white pointer-events-none'>
            ASPIRING FRONT-END WEB DEVELOPER
          </p>

          <button
            aria-label="View more"
            className="absolute right-[20em] top-[40%] -translate-x-1/2 -translate-y-1/2 z-20
                       h-[5em] w-[5em] rounded-full border border-white/50 text-white
                       flex items-center justify-center
                       hover:bg-white/10 hover:scale-105 transition-all"
          >
            <ArrowUpRight className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero