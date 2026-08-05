'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
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
      <motion.div
        className='absolute top-6 left-0 flex items-center gap-2 text-xs text-white/80'
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
      >
        <span className='h-2 w-2 rounded-full bg-green-400 animate-pulse' />
        Available for opportunities
      </motion.div>

      <motion.p
        className='absolute top-6 right-0 max-w-[26em] text-right text-sm text-white/70 leading-relaxed'
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
      >
        Passionate creative designer and developer, dedicated to crafting
        innovative solutions and exceptional digital experiences through
        modern technologies.
      </motion.p>
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
            <motion.div
              className='marquee-track w-full flex whitespace-nowrap'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
            >
              <span className='font-extrabold text-[20vh] text-white pr-16'>
                {TAGLINE}
              </span>
              <span className='font-extrabold text-[20vh] text-white pr-16'>
                {TAGLINE}
              </span>
            </motion.div>
          </div>
        </div>

        <motion.div
          className='absolute bottom-6 left-0 z-20'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
        >
          <Logo />
        </motion.div>

        <motion.div
          className='absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
        >
          {SOCIALS.map(({ icon, href, label }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: 0.6 + i * 0.08 }}
            >
              <Link
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
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className='absolute bottom-6 right-0 z-20 flex flex-col items-center gap-1 text-white/50 text-[10px] tracking-widest'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.7 }}
        >
          SCROLL
          <ArrowBigDown className='w-4 h-4 animate-bounce' />
        </motion.div>
      </div>

      <style jsx>{`
        .marquee-track {
          animation: marquee 30s linear infinite;
        }
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  )
}

export default Hero