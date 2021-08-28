import React from 'react';
import Header from '../../components/Sections/Header/Header';
import Team from '../../components/Sections/Team/Team';
import Footer from '../../components/Sections/Footer/Footer';
import FooterLogo from '../../assets/images/full-logo-white.png';
import './About.css';

const About = () => {
    const title = 'About Us';
    const subtitle = 'Meet the team';
    const styledHeader = 'w3-padding-bottom-32 w3-container about-header';
    const styledTeam = 'w3-padding-64 w3-container';
    const styledFooter = 'w3-padding-64 w3-container about-footer';

    return (
        <div className="about">
            <Header
                classStyle={styledHeader}
                title={title}
                subtitle={subtitle}
            />
            <Team classStyle={styledTeam} />
            <Footer classStyle={styledFooter} image={FooterLogo} />
        </div>
    );
};

export default About;
