import React from 'react';
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
            <Header
                classStyle="w3-padding-bottom-32 w3-container about-header"
                title={aboutTitle}
                subtitle={aboutSubtitle}
            />
            <Team classStyle="w3-padding-64 w3-container" />
            <Footer
                classStyle="w3-padding-64 w3-container about-footer"
                image={FooterLogo}
            />
        </div>
    );
};

export default About;
