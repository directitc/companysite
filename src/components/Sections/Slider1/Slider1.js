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
        <div className="slider1-section">
            <RadialBackground />
            <Navigation>
                <Logo />
                <NavBar />
            </Navigation>
            <div className="w3-container slider1-header">
                <div className="slider1-subsection">
                    <Title classStyle={'title'} title={title} />
                    <Subtitle
                        classStyle={'subtitle w3-xlarge'}
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
        </div>
    );
};

export default Slider;
