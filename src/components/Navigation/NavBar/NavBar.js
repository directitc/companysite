import React, { Fragment } from 'react';
import { FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import ScrollToTop from '../../../containers/ScrollToTop/ScrollToTop';
import './NavBar.css';

const NavBar = (props) => {
    return (
        <Fragment>
            <FaBars className="navbar__hamburger" onClick={props.drawerToggleClicked} />
            <nav className="navbar">
                <ScrollToTop>
                    <NavLink className="navbar__link" to="/" exact>
                        Home
                    </NavLink>
                    <NavLink className="navbar__link" to="/about">
                        About
                    </NavLink>
                    <NavLink className="navbar__link" to="/services">
                        Services
                    </NavLink>
                    <NavLink className="navbar__link" to="/contact">
                        Contact
                    </NavLink>
                </ScrollToTop>
            </nav>
        </Fragment>
    );
};

export default React.memo(NavBar);
