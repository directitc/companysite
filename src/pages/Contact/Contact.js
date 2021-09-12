import React from 'react';
import Header from '../../components/Sections/Header/Header';
import Message from '../../components/Sections/Message/Message';
import Logo from '../../assets/images/full-logo-black.png';
import './Contact.css';
import Sitemap from '../../components/Sections/Sitemap/Sitemap';

const Contact = () => {
    const contactTitle = 'Contact Us';
    const contactSubtitle = 'Send us a message';
    
    return (
        <div className="contact-us">
            <Header
                classStyle="w3-padding-bottom-32 w3-container contact-header"
                title={contactTitle}
                subtitle={contactSubtitle}
            />
            <Message
                classStyle="w3-padding-top-32 contact-message"
                image={Logo}
            />
            <Sitemap classStyle="w3-padding-32 contact-footer" />
        </div>
    );
};

export default Contact;
