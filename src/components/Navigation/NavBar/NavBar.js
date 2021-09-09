import React from 'react';
import { FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import ScrollToTop from '../../../containers/ScrollToTop/ScrollToTop';
import './NavBar.css';

const NavBar = (props) => {
    return (
        <nav className="navbar">
            <FaBars className="bars" onClick={props.drawerToggleClicked} />
            <div className="navbar-menu">
                <ScrollToTop>
                    <NavLink className="navbar-link" to="/" exact>
                        Home
                    </NavLink>
                    <NavLink className="navbar-link" to="/about">
                        About
                    </NavLink>
                    <NavLink className="navbar-link" to="/services">
                        Services
                    </NavLink>
                    <NavLink className="navbar-link" to="/contact">
                        Contact
                    </NavLink>
                </ScrollToTop>
            </div>
        </nav>
    );
};

export default NavBar;
