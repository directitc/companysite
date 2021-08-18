import React from 'react';
import RadialBackground from '../../RadialBackground/RadialBackground';
import Header from '../../Header/Header';
import Logo from '../../Logo/Logo';
import NavBar from '../../NavBar/NavBar';
import Title from '../../Title/Title';
import Subtitle from '../../Subtitle/Subtitle';
import Button from '../../Button/Button';
import './Slider1.css';

const Slider = () => {
    return (
        <div className="slider1-section">
            <RadialBackground>
                <Header>
                    <Logo />
                    <NavBar />
                </Header>
                <div className="slider1-subsection">
                    <Title classStyle={'title'} title={'Data Migration'} />
                    <Subtitle subtitle={'transfer and consolidate'}></Subtitle>
                    <Button classStyle={'button-wrapper'} name={'Learn More'} />
                </div>
            </RadialBackground>
        </div>
    );
};

export default Slider;
