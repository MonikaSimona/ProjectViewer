import React from 'react'

function ProjectDetails(props) {
    const id  = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card-z-depth-0">
                <div className="card-content">
                    <span className="card-title">Title</span>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, molestias!</p>
                </div>
                <div className="card-action  deep-purple lighten-4 brown-text">
                    <div>Posted by monika</div>
                    <div>on date 7th june</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
