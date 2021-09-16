import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import NavBar from '../Navigation/NavBar/NavBar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import './Navigation.css';

const Navigation = () => {
    const [state, setState] = useState({
        showSideDrawer: false,
    });

    const sideDrawerClosedHandler = () => {
        setState({ showSideDrawer: false });
    };

    const sideDrawerToggleHandler = () => {
        setState((prevState) => {
            return {
                showSideDrawer: !prevState.showSideDrawer,
            };
        });
    };

    return (
        <div className="navigation">
            <Logo />
            <NavBar drawerToggleClicked={sideDrawerToggleHandler} />
            <SideDrawer
                open={state.showSideDrawer}
                closed={sideDrawerClosedHandler}
            />
        </div>
    );
};

export default Navigation;
