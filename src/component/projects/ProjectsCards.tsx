"use client"
import type { Project } from '@/lib/type'
import ProjectCard from './ProjectCard'

interface Props {
  projects: Project[]
}


const ProjectsCards =  ({projects}: Props) => {


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
