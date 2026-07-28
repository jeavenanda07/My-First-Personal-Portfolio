import React from 'react'
import Hero from '@/components/Hero'
import ProjectLists from '@/components/ProjectLists'
import Menu from '@/components/Menu'

const page = () => {
  return (
    <div>
      <Hero />
      <Menu />
      <ProjectLists />
    </div>
  )
}

export default page
