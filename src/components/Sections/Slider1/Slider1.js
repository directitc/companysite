import React, { useState } from 'react';
import RadialBackground from '../../UI/RadialBackground/RadialBackground';
import Navigation from '../../Navigation/Navigation';
import Logo from '../../Logo/Logo';
import NavBar from '../../Navigation/NavBar/NavBar';
import SideDrawer from '../../Navigation/SideDrawer/SideDrawer';
import Title from '../../UI/Title/Title';
import Subtitle from '../../UI/Subtitle/Subtitle';
import Button from '../../UI/Button/Button';
import './Slider1.css';

const Slider = () => {
    const dataMigrationTitle = 'Data Migration';
    const dataMigrationSubtitle = 'transfer and consolidate';
    const dataMigrationButton = 'Learn More';

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
        <div className="about-header">
            <RadialBackground classStyle="w3-padding-bottom-32 w3-container radial-background">
                <Navigation>
                    <Logo />
                    <NavBar drawerToggleClicked={sideDrawerToggleHandler} />
                    <SideDrawer
                        open={state.showSideDrawer}
                        closed={sideDrawerClosedHandler}
                    />
                </Navigation>
                <div className="w3-padding-bottom-32 header-section">
                    <div className="header-subsection">
                        <Title classStyle="title" title={dataMigrationTitle} />
                        <Subtitle
                            classStyle="subtitle"
                            subtitle={dataMigrationSubtitle}
                        ></Subtitle>
                        <div className="slider1-button-wrapper w3-padding-16">
                            <Button
                                classStyle="button-center w3-button w3-large"
                                name={dataMigrationButton}
                                type="button"
                            />
                        </div>
                    </div>
                </div>
            </RadialBackground>
        </div>
    );
};

export default Slider;
