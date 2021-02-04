import React, { useState } from 'react'
import {connect} from 'react-redux'
import {createProject} from '../../store/actions/projectActions'





function CreateProject(props) {

    const [title, setTitle] = useState("");
    const [content,setContent] = useState("");

    const handleChange = (e) => {
        if (e.target.id === "title"){
            setTitle(e.target.value)
        }else{
            setContent(e.target.value)

        }

        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.createProject({title,content})
        setTitle("");
        setContent("");

    }
    return (
        <div className="container">
            <form onSubmit={handleSubmit} >
                <h5 className="blue-text text-darken-3">Create New Project</h5>
                <div className="input-field">
                    <label className="blue-text text-darken-3" htmlFor="title">Project Title:</label>
                    <input type="text" id="title" value={title} onChange={handleChange} />
                </div>
                <div className="input-field">
                    <label className="blue-text text-darken-3" htmlFor="content">Project Content:</label>
                    <textarea  id="content"  className="materialize-textarea" value={content} onChange={handleChange}></textarea>
                </div>
                <div className="input-field">
                    <button className="btn yellow lighten-1 blue-text text-darken-2 z-depth">Create</button>
                </div>
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(null, mapDispatchToProps)(CreateProject)
