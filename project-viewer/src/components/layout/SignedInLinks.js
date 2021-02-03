import React from 'react';
import {NavLink} from 'react-router-dom';

const SignedInLinks = () => {
    return ( 
       <ul className="right">
           <li><NavLink to="/create" className="blue-text darken-2">New Project</NavLink></li>
           <li><NavLink to="/" className="blue-text darken-2">Log Out</NavLink></li>
           <li><NavLink to="/" className="btn btn-floating blue darken-2  yellow-text text-lighten-1 ">SS</NavLink></li>
       </ul>
     );
}
 
export default SignedInLinks;