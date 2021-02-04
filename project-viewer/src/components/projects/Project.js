import React from 'react'

function Project({project}) {
    return (
        <div className="card z-depth-0 project-summary">
        <div className="card-content blue-text text-darken-3">
            <div className="card-title">{project.title}</div>
            <p>{project.content}</p>
            <p className="brown-text">
                3rd september
            </p>
        </div>
    </div>
    )
}

export default Project
