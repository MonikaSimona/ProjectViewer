import React, { useState } from 'react'

function SignIn() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleChange = (e) => {
        if (e.target.id === "email"){
            setEmail(e.target.value)
        }else{
            setPassword(e.target.value)

        }

        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email,password)

    }
    return (
        <div className="container">
            <form onSubmit={handleSubmit} >
                <h5 className="blue-text text-darken-3">Sign In</h5>
                <div className="input-field">
                    <label className="blue-text text-darken-3" htmlFor="email">Email:</label>
                    <input type="email" id="email" value={email} onChange={handleChange} />
                </div>
                <div className="input-field">
                    <label className="blue-text text-darken-3" htmlFor="password">Password:</label>
                    <input type="password" id="password" value={password} onChange={handleChange} />
                </div>
                <div className="input-field">
                    <button className="btn yellow lighten-1 blue-text text-darken-2 z-depth">Login</button>
                </div>
            </form>
        </div>
    )
}

export default SignIn