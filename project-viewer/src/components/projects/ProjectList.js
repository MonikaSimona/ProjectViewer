import React from 'react'
import Project from './Project'
import {Link} from 'react-router-dom'

function ProjectList({projects}) {
    return (
        <div className="project-list section">
        {projects && projects.map(project => (
            <Link to={`/project/${project.id}`} key={project.id}>
            <Project  project={project}/>
            </Link>
        ))}
          
        </div>
    )
}

export default ProjectList
