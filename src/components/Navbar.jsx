import React from 'react';
import logo from 'airbnb/src/assets/travel and swim.webp'
import './Navbar.css';


const Navbar = () => {
    return (
        <nav>
          <img src={logo} alt=" Logo" className="nav--logo"/>
        </nav>
    );
};

export default Navbar;
