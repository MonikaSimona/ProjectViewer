import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import {connect } from 'react-redux';

const Navbar = () => {
    return ( 
        <nav className="nav-wrapper yellow lighten-1 ">
            <div className="container">
            <Link to="/" className="brand-logo blue-text text-darken-2 ">My Pojects</Link>
            <SignedInLinks/>
            <SignedOutLinks/>
            </div>
        </nav>
     );
}

const mapStateToProps = (state) => {
    return {

    }
}
 
export default connect(mapStateToProps)(Navbar);