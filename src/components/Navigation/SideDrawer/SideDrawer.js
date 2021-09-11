import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import Backdrop from '../../UI/Backdrop/Backdrop';
import ScrollToTop from '../../../containers/ScrollToTop/ScrollToTop';
import './SideDrawer.css';

const SideDrawer = (props) => {
    let attachedClasses = ['side-drawer', 'side-drawer-close'];
    if (props.open) {
        attachedClasses = ['side-drawer', 'side-drawer-open'];
    }

    return (
        <Fragment>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')} onClick={props.closed}>
                <nav className="sidedrawer-nav-item">
                    <ScrollToTop>
                        <NavLink to="/" exact>Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/services">Services</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                    </ScrollToTop>
                </nav>
            </div>
        </Fragment>
    );
};

export default SideDrawer;
