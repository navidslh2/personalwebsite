import { projects } from '@/lib/data'
import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectsCards = () => {
  return (
    <div className='flex gap-3'>
      {projects && projects.map(item =>
        <div key={item.id}>
          <ProjectCard data={item} />
        </div>
      )}
    </div>
  )
}

export default ProjectsCards
