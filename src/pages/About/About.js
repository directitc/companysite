import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Header from '../../components/Sections/Header/Header';
import Team from '../../components/Sections/Team/Team';
import Footer from '../../components/Sections/Footer/Footer';
import FooterLogo from '../../assets/images/full-logo-white.png';
import './About.css';

const About = () => {
    const aboutTitle = 'About Us';
    const aboutSubtitle = 'Meet the team';

    return (
        <div className="about">
            <div className="about-navigation">
                <Navigation />
            </div>
            <div className="about-content">
                <Header
                    classStyle="about-header blue-background"
                    title={aboutTitle}
                    subtitle={aboutSubtitle}
                />
                <Team classStyle="w3-padding-64 w3-container" />
                <Footer
                    classStyle="w3-padding-64 w3-container about-footer"
                    image={FooterLogo}
                />
            </div>
        </div>
    );
};

export default About;
