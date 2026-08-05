'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const EMAIL = 'jeavenanda07@gmail.com'
const PHONE = '0948-530-4760'
const NAME = 'Jeaven Paras'

const SOCIALS = [
  { icon: '/icons/github.webp', href: 'https://github.com/jeavenanda07' },
  { icon: '/icons/linked.png', href: 'https://www.linkedin.com/in/jeaven-anda-426b6b312/' },
  { icon: '/icons/facebook.png', href: 'https://www.facebook.com/jeaven.anda.9/' },
  { icon: '/icons/instagram.png', href: 'https://www.instagram.com/jeavenanda/' },
]

const Footer = () => {
  return (
    <footer className="w-full">

      <div className="bg-white px-10 py-16">
        <div className="max-w-[1920px] w-full m-auto">
          <p className="text-xs tracking-wide text-black/50 mb-3">
            THAT&apos;S ALL FOR NOW.
          </p>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
            <h2 className="text-4xl md:text-5xl font-medium leading-tight text-black">
              Open to opportunities.
              <br />
              Let&apos;s talk.
            </h2>

            <Link
              href={`mailto:${EMAIL}`}
              aria-label="Get in touch"
              className="h-32 w-32 md:h-40 md:w-40 shrink-0 rounded-full bg-[#4a5fd4] text-white
                         flex items-center justify-center text-sm font-medium
                         transition-transform hover:scale-105"
            >
              Get in touch
            </Link>
          </div>

          <div className="border-t border-black/10 mt-10 pt-6 flex flex-col md:flex-row md:justify-between gap-6">
            <div>
              <p className="text-xs text-black/40 mb-1">Email</p>
              <Link href={`mailto:${EMAIL}`} className="text-sm text-black hover:underline">
                {EMAIL}
              </Link>
            </div>
            <div>
              <p className="text-xs text-black/40 mb-1">Phone</p>
              <Link href={`tel:${PHONE}`} className="text-sm text-black hover:underline">
                {PHONE}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black px-10 py-12 overflow-hidden">
        <div className="max-w-[1920px] w-full m-auto">

          <div className="flex items-center justify-between mb-6">
            <p className="text-white/70 text-lg">
              Aspiring front-end developer, ready to contribute.
            </p>
            <Link
              href="#top"
              aria-label="Back to top"
              className="h-14 w-14 rounded-full bg-white flex items-center justify-center overflow-hidden
                         transition-transform hover:scale-105"
            >
              <Image
                src="/icons/arrowUpRight.png"
                alt=""
                width={20}
                height={20}
                className="object-contain"
              />
            </Link>
          </div>

          <div className="marquee-track flex whitespace-nowrap mb-10">
            <span className="font-extrabold text-[14vh] text-white pr-16">{NAME}</span>
            <span className="font-extrabold text-[14vh] text-white pr-16">{NAME}</span>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-white/40 text-xs">
              &copy; {new Date().getFullYear()} {NAME}. All rights reserved.
            </p>
            <div className="flex gap-4">
              {SOCIALS.map(({ icon, href }, i) => (
                <Link
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 rounded-full border 
                             flex items-center justify-center overflow-hidden
                             transition-colors hover:bg-white/10 cursor-pointer"
                >
                  <Image
                    src={icon}
                    alt=""
                    width={32}
                    height={32}
                    className="object-contain "
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer