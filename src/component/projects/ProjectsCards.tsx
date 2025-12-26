import { projects } from '@/lib/data'
import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectsCards = () => {
  return (
    <div className='flex flex-col md:flex-row gap-10'>
      {projects && projects.map(item =>
        <div key={item.id}>
          <ProjectCard data={item} />
        </div>
      )}
    </div>
  )
}

export default ProjectsCards
