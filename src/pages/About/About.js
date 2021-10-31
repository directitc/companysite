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
            <Navigation />
            <div className="about__content">
                <Header
                    classStyle="about__header"
                    title={aboutTitle}
                    subtitle={aboutSubtitle}
                />
                <Team />
                <Footer classStyle="about__footer" image={FooterLogo} />
            </div>
        </div>
    );
};

export default React.memo(About);
