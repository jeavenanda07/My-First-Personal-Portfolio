import React from 'react'
import Hero from '@/components/Hero'
import ProjectLists from '@/components/ProjectLists'
import Menu from '@/components/Menu'
import AboutMe from '@/components/AboutMe'

const page = () => {
  return (
    <div>
      <Hero />
      <Menu />
      <AboutMe />
      <ProjectLists />
    </div>
  )
}

export default page
