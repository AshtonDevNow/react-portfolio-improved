import React from 'react'
import ProjectItem from './ProjectItem'
import { ProjectList } from '../assets/helpers/ProjectList'
import '../components/Style/Projects.css'
import Loader from 'react-loaders'

function Projects() {
  return (
    <div className="projects">
      <h1> My Personal Projects</h1>
      <p>
        In addition to the below projects I made, I built this portfolio website
        with ReactJS.
      </p>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem id={idx} name={project.name} image={project.image} />
          )
        })}
        <Loader type="pacman" />
      </div>
    </div>
  )
}

export default Projects
