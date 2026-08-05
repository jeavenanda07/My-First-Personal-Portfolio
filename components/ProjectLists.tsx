'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

// Swap `image` for your real screenshots/logos — using placeholders/gradients for now
const PROJECTS = [
  {
    title: 'Learnlogicify Landing Page',
    image: '/projects/E-Shoes.gif',
    accent: 'bg-gradient-to-br from-purple-200 via-pink-100 to-orange-100',
    link: 'https://learnlogicify.com/',
  },
  {
    title: 'Winzee Web Chat Application',
    image: '/projects/winzee.png',
    accent: 'bg-gradient-to-br from-sky-300 via-purple-300 to-pink-200',
    link: 'https://winzee.vercel.app/',
  },
  {
    title: 'ChatGPT Clone',
    image: '/projects/chatgpt-clone.png',
    accent: 'bg-black',
    link: 'https://chatgpt-clone-psi.vercel.app/',
  },
  {
    title: 'Gemini Clone',
    image: '/projects/gemini-clone.png',
    accent: 'bg-black',
    link: 'https://gemini-clone.vercel.app/',
  },
]

const ProjectLists = () => {
  return (
    // White background to match the rest of the site — gray-300 was the odd one out
    <section className="w-full bg-white px-10 py-24">
      <div className="max-w-[1920px] w-full m-auto">

        {/* Header row — title left, description right, like the rest of your sections */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-5xl font-bold text-black">Impressive Works</h2>
          <p className="max-w-[25em] w-full text-right text-xs tracking-wide text-black/50">
            HERE&apos;S A SELECTION OF PROJECTS THAT SHOWCASE MY PASSION FOR
            DESIGN AND DEVELOPMENT, REFLECTING CREATIVITY AND INNOVATION.
          </p>
        </motion.div>

        {/* Project grid */}
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.li
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.1 }}
            >
              <a href="#" className="group block">
                <div
                  className={`relative w-full aspect-[4/3] rounded-2xl overflow-hidden ${project.accent} transition-transform duration-300 group-hover:scale-[0.98]`}
                >
                  {/* Uncomment once real screenshots are in /public/projects */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="flex items-center gap-3 mt-4">
                  <span className="h-8 w-8 rounded-full border border-black/30 flex items-center justify-center transition-all group-hover:bg-black group-hover:text-white group-hover:border-black">
                    <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
                  </span>
                  <span className="text-base text-black">{project.title}</span>
                </div>
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Explore more pill */}
        <motion.div
          className="flex justify-center mt-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
        >
          <a
            href="#"
            className="flex items-center gap-2 text-sm border border-black/20 rounded-full px-5 py-2 hover:bg-black hover:text-white transition-colors"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            Explore more
          </a>
        </motion.div>

      </div>
    </section>
  )
}

export default ProjectLists