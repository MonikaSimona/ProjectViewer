import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

function ProjectDetails(props) {
    const { project } = props;
    if (project) {
        return (
        <div className="container section project-details ">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">{project.title}</span>
                    <p>{project.content}</p>
                </div>
                <div className="card-action white  ">
                    <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
                    <div>on date 7th june</div>
                </div>
            </div>
        </div>
        )
    }else {
    return (
      <div className="container center">
          <p className="blue-text text-darken-3">Loading project...</p>
      </div>
    )
}
}

const mapStateToProps = (state, ownProps) => {
    console.log("state", state);
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null;
    return {

        project: project

    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect(() => ['projects'])
)(ProjectDetails)
