import React from 'react';
import {NavLink} from 'react-router-dom';

const SignedOutLinks = () => {
    return ( 
       <ul className="right">
           <li><NavLink to="/signup" className="blue-text darken-2">Sign Up</NavLink></li>
           <li><NavLink to="/signin" className="blue-text darken-2">Log In</NavLink></li>
       </ul>
     );
}
 
export default SignedOutLinks;