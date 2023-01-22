import React from 'react'
import { useParams } from 'react-router-dom'
import { ProjectList } from '../assets/helpers/ProjectList'
import '../components/Style/ProjectDisplay.css'

function ProjectDisplay() {
  const { id } = useParams()
  const project = ProjectList[id]
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} alt={project.alt} />
      <h2>
        <b>Skills:</b> {project.skills}
      </h2>
      <p>
        <b>Description:</b> {project.description}
      </p>
      <p>
        <b>Website Link:</b> {project.website}
      </p>
      <p>
        <b>GitHub link:</b> {project.github}
      </p>
    </div>
  )
}

export default ProjectDisplay
