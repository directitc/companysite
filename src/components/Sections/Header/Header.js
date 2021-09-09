import React, { useState } from 'react';
import Navigation from '../../Navigation/Navigation';
import Logo from '../../Logo/Logo';
import NavBar from '../../Navigation/NavBar/NavBar';
import SideDrawer from '../../Navigation/SideDrawer/SideDrawer';
import Title from '../../UI/Title/Title';
import Subtitle from '../../UI/Subtitle/Subtitle';
import './Header.css';

const Header = ({ classStyle, title, subtitle }) => {
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
        <div className={classStyle}>
            <Navigation>
                <Logo />
                <NavBar drawerToggleClicked={sideDrawerToggleHandler} />
                <SideDrawer
                    open={state.showSideDrawer}
                    closed={sideDrawerClosedHandler}
                />
            </Navigation>
            <div className="w3-padding-top-16 w3-padding-bottom-64 header-section">
                <div className="header-subsection">
                    <Title classStyle={'title title-fstart'} title={title} />
                    <Subtitle
                        classStyle={'subtitle subtitle-fstart'}
                        subtitle={subtitle}
                    ></Subtitle>
                </div>
            </div>
        </div>
    );
};

export default Header;
