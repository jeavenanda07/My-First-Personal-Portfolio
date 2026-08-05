'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const SKILL_CATEGORIES = [
  {
    title: 'Front-End Development',
    description:
      'Building engaging and user-friendly web interfaces using modern frameworks and technologies with expertise.',
    type: 'icons',
    items: [
      '/icons/HTML.png',
      '/icons/Javascript.png',
      '/icons/Typescript.png',
      '/icons/NextJS.png',
      '/icons/ReactJS.png',
      '/icons/framer-motion.png',
    ],
  },
  {
    title: 'Styling & Design',
    description:
      'Crafting visually appealing and responsive designs with advanced styling tools and frameworks.',
    type: 'icons',
    items: [
      '/icons/css.png',
      '/icons/tailwind.png',
      '/icons/Bootstrap.png',
    ],
  },
  {
    title: 'Programming Languages',
    description:
      'Proficient in problem-solving and applying programming languages to implement efficient data structures and algorithms.',
    type: 'icons',
    items: [
      '/icons/Javascript.png',
      '/icons/java.png',
      '/icons/python.png',
    ],
  },
  {
    title: 'Version Control & Collaboration',
    description:
      'Effectively managing code and collaborating on projects to ensure seamless teamwork.',
    type: 'icons',
    items: ['/icons/github.webp', '/icons/git.png'],
  },
  {
    title: 'UI/UX Design',
    description:
      'Designing user-centric interfaces that are intuitive, visually appealing, and easy to navigate.',
    type: 'icons',
    items: ['/icons/figma.png', '/icons/ps.png'],
  },
  {
    title: 'Database Management',
    description:
      'Designing and managing databases to ensure secure and efficient data storage and retrieval.',
    type: 'icons',
    items: [
      '/icons/mysql.png',
      '/icons/psql.png',
      '/icons/mongodb.png',
    ],
  },
]

const CORE_CS_TAGS = [
  'Operating Systems',
  'Object-Oriented Programming',
  'DSA',
  'System Design',
]

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const TechnicalSkills = () => {
  return (
    <section className="w-full px-10 py-24">
      <div className="max-w-[1920px] w-full m-auto">

        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-5xl font-bold text-black tracking-tight">
            TECHNICAL SKILLS
          </h2>
          <p className="max-w-[25em] w-full text-right text-xs tracking-wide text-black/50">
            HERE&apos;S A SELECTION OF PROJECTS THAT SHOWCASE MY PASSION FOR
            DESIGN AND DEVELOPMENT, REFLECTING CREATIVITY AND INNOVATION.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:w-[80%] m-auto">
          {SKILL_CATEGORIES.map((category, i) => (
            <motion.div
              key={category.title}
              className="bg-[#1E1E1E] rounded-2xl p-6 flex flex-col"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: (i % 3) * 0.1 }}
            >
              {category.type === 'icons' ? (
                <div className="flex flex-wrap gap-3 mb-6">
                  {category.items.map((src, idx) => (
                    <span
                      key={idx}
                      className="h-11 w-11 rounded-full bg-[#141414] border  flex items-center justify-center overflow-hidden"
                    >
                      <Image
                        src={src}
                        alt=""
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                    </span>
                  ))}
                </div>
              ) : (
                <div className="flex flex-wrap gap-2 mb-6">
                  {category.items.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-white/10 text-white px-3 py-1.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <h3 className="text-white text-lg font-semibold mb-2 mt-auto">
                {category.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {category.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-[#171717] rounded-2xl p-8 mt-6 md:w-[80%] m-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
        >
          <div className="flex flex-wrap gap-2 mb-6">
            {CORE_CS_TAGS.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-white/10 text-white px-3 py-1.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-white text-lg font-semibold mb-2">
            Core Computer Science Concepts
          </h3>
          <p className="text-white/50 text-sm leading-relaxed max-w-3xl">
            Demonstrating a strong foundation in core computer science
            principles, including problem-solving, system design, and
            efficient computing techniques.
          </p>
        </motion.div>

      </div>
    </section>
  )
}

export default TechnicalSkills