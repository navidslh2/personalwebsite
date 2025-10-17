import Title from '@/ui/Title'
import React from 'react'
import ProjectsCards from './ProjectsCards'

const Projects = () => {
  return (
    <div className='w-screen h-screen flex flex-col gap-20 items-center justify-center'>
      <Title>پروژه ها</Title>
      <ProjectsCards />
    </div>
  )
}

export default Projects
