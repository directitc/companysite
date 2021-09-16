import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Header from '../../components/Sections/Header/Header';
import Message from '../../components/Sections/Message/Message';
import SubLogo from '../../assets/images/full-logo-black.png';
import Sitemap from '../../components/Sections/Sitemap/Sitemap';
import './Contact.css';

const Contact = () => {
    const contactTitle = 'Contact Us';
    const contactSubtitle = 'Send us a message';

    return (
        <div className="about">
            <div className="about-navigation">
                <Navigation />
            </div>
            <div className="about-content">
                <Header
                    classStyle="w3-container about-header"
                    title={contactTitle}
                    subtitle={contactSubtitle}
                />
                <Message
                    classStyle="w3-padding-top-32 contact-message"
                    image={SubLogo}
                />
                <Sitemap classStyle="w3-padding-32 contact-footer" />
            </div>
        </div>
    );
};

export default Contact;
