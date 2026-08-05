'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowBigDown } from 'lucide-react'


const Logo = ({ className = '' }) => {
  return (
    <div
      className={`h-10 w-10 rounded-full bg-black flex items-center justify-center shrink-0 ${className}`}
    >
      <span className="text-white text-sm font-medium tracking-tight">JP</span>
    </div>
  )
}


const Header = () => {
  return (
    <div className='w-full flex justify-between items-center text-white font-extralight text-sm'>
      <div className='absolute top-6 left-0 flex items-center gap-2 text-xs text-white/80'>
          <span className='h-2 w-2 rounded-full bg-green-400 animate-pulse' />
          Available for opportunities
      </div> 
      
      <p className='absolute top-6 right-0 max-w-[26em] text-right text-sm text-white/70 leading-relaxed'>
          Passionate creative designer and developer, dedicated to crafting
          innovative solutions and exceptional digital experiences through
          modern technologies.
        </p>
    
    </div>
  )
}

const TAGLINE = 'ASPIRING FRONT-END WEB DEVELOPER'

const SOCIALS = [
  { icon: '/icons/gmail.png', href: 'mailto:jeavenanda07@gmail.com', label: 'Email' },
  { icon: '/icons/github.webp', href: 'https://github.com/jeavenanda07', label: 'GitHub' },
  { icon: '/icons/linked.png', href: 'https://www.linkedin.com/in/jeaven-anda-426b6b312/', label: 'LinkedIn' },
  { icon: '/icons/instagram.png', href: 'https://www.instagram.com/jeavenanda/', label: 'Instagram' },
]

const Hero = () => {
  return (
    <div id="top" className="hero relative flex items-center h-screen px-10 py-5">
      <div className='relative max-w-[1920px] w-full m-auto h-full flex flex-col justify-center'>
        <Header />

        <div className='flex relative flex-col items-center justify-center h-full text-center'>

          <div className='absolute bottom-10 w-dvw overflow-hidden pointer-events-none'>
            <div className='marquee-track w-full flex whitespace-nowrap'>
              <span className='font-extrabold text-[20vh] text-white pr-16'>
                {TAGLINE}
              </span>
              <span className='font-extrabold text-[20vh] text-white pr-16'>
                {TAGLINE}
              </span>
            </div>
          </div>
        </div>


        <div className='absolute bottom-6 left-0 z-20'>
          <Logo />
        </div>

        <div className='absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3'>
          {SOCIALS.map(({ icon, href, label }, i) => (
            <Link
              key={i}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={label}
              className='h-10 w-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center overflow-hidden hover:bg-white/20 transition-colors'
            >
              <Image
                src={icon}
                alt=""
                width={24}
                height={24}
                className='object-contain'
              />
            </Link>
          ))}
        </div>

        <div className='absolute bottom-6 right-0 z-20 flex flex-col items-center gap-1 text-white/50 text-[10px] tracking-widest'>
          SCROLL
         <ArrowBigDown className='w-4 h-4 animate-bounce' />
        </div>
      </div>

    </div>
  )
}

export default Hero