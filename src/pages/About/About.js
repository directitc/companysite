import React from 'react';
import Header from '../../components/Sections/Header/Header';
import Contact from '../../components/Sections/Contact/Contact';
import Copyright from '../../components/Sections/Copyright/Copyright';
import ContactLogo from '../../assets/images/full-logo-white.png';
import './About.css';

const About = () => {
    const title = 'About Us';
    const subtitle = 'Meet the team';
    const styledHeader = 'about-header';
    const styledContact = 'w3-padding-64 w3-container about-contact';

    return (
        <div className="about">
            <Header
                classStyle={styledHeader}
                title={title}
                subtitle={subtitle}
            />
            <Contact classStyle={styledContact} image={ContactLogo} />
            <Copyright />
        </div>
    );
};

export default About;
