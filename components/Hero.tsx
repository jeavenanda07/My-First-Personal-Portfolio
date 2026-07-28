'use client'

import React from 'react'
import Header from './Header'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const TAGLINE = 'ASPIRING FRONT-END WEB DEVELOPER'

const Hero = () => {
  return (
    <div className="hero relative flex items-center  h-screen px-10 py-5">
      <div className='relative max-w-[1920px] w-full m-auto h-full flex flex-col justify-center'>
        <Header />

        <div className='flex relative flex-col items-center justify-center h-full text-center  '>
          <div className='absolute bottom-10 w-dvw overflow-hidden pointer-events-none'>
            <div className='marquee-track flex whitespace-nowrap'>
              {/* Two identical copies placed back to back so the loop is seamless */}
              <span className='font-extrabold text-[20vh] text-white pr-16'>
                {TAGLINE}
              </span>
              <span className='font-extrabold text-[20vh] text-white pr-16'>
                {TAGLINE}
              </span>
            </div>
          </div>

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