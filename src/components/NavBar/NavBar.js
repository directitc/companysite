import React from 'react';

import { Nav, NavLink, Bars, NavMenu } from './NavBar.styles';

const NavBar = () => {
    return (
        <Nav>
            <Bars />
            <NavMenu>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </NavMenu>
        </Nav>
    );
};

export default NavBar;
