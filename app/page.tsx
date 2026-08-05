import React from 'react'
import Hero from '@/components/Hero'
import ProjectLists from '@/components/ProjectLists'
import Menu from '@/components/Menu'
import AboutMe from '@/components/AboutMe'
import TechSkills from '@/components/TechSkills'

const page = () => {
  return (
    <div>
      <Hero />
      <Menu />
      <AboutMe />
      <ProjectLists />
      <TechSkills />
    </div>
  )
}

export default page
