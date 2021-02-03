import React, { useState } from 'react'

function SignUp() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");

    const handleChange = (e) => {
        if (e.target.id === "email"){
            setEmail(e.target.value);
        }else if ((e.target.id === "password")){
            setPassword(e.target.value);

        }else if ((e.target.id === "name")){
            setName(e.target.value);

        }else{
            setSurname(e.target.value);
        }

        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email,password)
        setEmail("")

    }
    return (
        <div className="container">
            <form onSubmit={handleSubmit} >
                <h5 className="blue-text text-darken-3">Sign Up</h5>
                <div className="input-field">
                    <label className="blue-text text-darken-3" htmlFor="email">Email:</label>
                    <input type="email" id="email" value={email} onChange={handleChange} />
                </div>
                <div className="input-field">
                    <label className="blue-text text-darken-3" htmlFor="password">Password:</label>
                    <input type="password" id="password" value={password} onChange={handleChange} />
                </div>
                <div className="input-field">
                    <label className="blue-text text-darken-3" htmlFor="name">First Name</label>
                    <input type="text" id="name" value={name} onChange={handleChange} />
                </div>
                <div className="input-field">
                    <label className="blue-text text-darken-3" htmlFor="surname">Last Name</label>
                    <input type="text" id="surname" value={surname} onChange={handleChange} />
                </div>
                <div className="input-field">
                    <button className="btn yellow lighten-1 blue-text text-darken-2 z-depth">SIGN UP</button>
                </div>
            </form>
        </div>
    )
}

export default SignUp
