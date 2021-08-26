import React from 'react';
import RadialBackground from '../../RadialBackground/RadialBackground';
import Navigation from '../../Navigation/Navigation';
import Logo from '../../Logo/Logo';
import NavBar from '../../NavBar/NavBar';
import Title from '../../Title/Title';
import Subtitle from '../../Subtitle/Subtitle';
import Button from '../../Button/Button';
import './Slider1.css';

const Slider = () => {
    const title = 'Data Migration';
    const subtitle = 'transfer and consolidate';
    const name = 'Learn More';

    return (
        <div className="about-header">
            <RadialBackground classStyle={'w3-padding-bottom-32 w3-container radial-background'}>
                <Navigation>
                    <Logo />
                    <NavBar />
                </Navigation>
                <div className="w3-padding-bottom-32 header-section">
                    <div className="header-subsection">
                        <Title classStyle={'title'} title={title} />
                        <Subtitle
                            classStyle={'subtitle'}
                            subtitle={subtitle}
                        ></Subtitle>
                        <div className="slider1-button-wrapper w3-padding-16">
                            <Button
                                classStyle={'button-center w3-button w3-large'}
                                name={name}
                                type={'button'}
                            />
                        </div>
                    </div>
                </div>
            </RadialBackground>
        </div>
    );
};

export default Slider;
