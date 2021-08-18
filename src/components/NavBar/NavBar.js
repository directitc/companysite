import React from 'react';
import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <FaBars className="bars" />
            <div className="navbar-menu">
                <Link className="navbar-link" to="/">Home</Link>
                <Link className="navbar-link" to="/about">About</Link>
                <Link className="navbar-link" to="/services">Services</Link>
                <Link className="navbar-link" to="/contact">Contact</Link>
            </div>
        </nav>
    );
};

export default NavBar;
