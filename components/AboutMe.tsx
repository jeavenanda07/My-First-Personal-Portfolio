'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 40},
  visible: { opacity: 1, y: 0 },
}

const AboutMe = () => {
  return (
    // Matches the hero's gray palette instead of jumping to black —
    // a soft top-to-bottom gradient keeps it from looking like a flat block
    <section className=' w-full min-h-[70vh] flex items-center'>
      <div className='max-w-[1920px] w-full m-auto px-10 py-20'>

        <motion.p
          className=' text-sm tracking-[0.2em] mb-10'
          initial={{ opacity: 0, y: 0, x: 80}}
          whileInView= {{ opacity: 1, y: 0, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          ABOUT ME
        </motion.p>

        <div className='flex flex-col lg:flex-row gap-16 lg:gap-20 justify-between'>

          <motion.p
            className='w-full lg:w-[42em] text-3xl md:text-4xl font-medium leading-[1.3]'
            initial={{ opacity: 0, y: 0, x: -80 }}
            whileInView={{ opacity: 1, y: 0 , x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          >
            I'm a front-end developer who turns messy requirements into
            interfaces people don't have to think about. I care as much about
            performance and accessibility as I do about pixel-perfect spacing.
          </motion.p>

          <motion.div
            className='w-full lg:w-[22em] flex flex-col gap-8'
            variants={fadeUp}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.25 }}
          >
            <p className='text-base leading-relaxed'>
              Right now I'm deepening my skills in React, TypeScript, and
              motion design. Outside of code, I'm usually deep in a side
              project or a new design tool.
            </p>

          
            <div className='flex gap-10 pt-4 border-t border-slate-400'>
              <div>
                <p className='text-2xl font-semibold'>4+</p>
                <p className=' text-xs tracking-wide'>PROJECTS SHIPPED</p>
              </div>
              <div>
                <p className='text-2xl font-semibold'>3</p>
                <p className=' text-xs tracking-wide'>YEARS CODING</p>
              </div>
            </div>

            {/* Circular arrow link styled to match the hero's "View more" button */}
            <a
              href="#contact"
              aria-label="Get in touch"
              className="group flex items-center gap-3 text-sm font-medium mt-2 w-fit"
            >
              <span className="h-10 w-10 rounded-full border border-slate-400 flex items-center justify-center transition-all group-hover:bg-slate-200 group-hover:scale-105">
                <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
              </span>
              Get in touch
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default AboutMe