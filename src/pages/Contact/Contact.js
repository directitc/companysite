import React from 'react';
import Header from '../../components/Sections/Header/Header';
import Message from '../../components/Sections/Message/Message';
import Logo from '../../assets/images/full-logo-black.png';
import './Contact.css';
import Sitemap from '../../components/Sections/Sitemap/Sitemap';

const Contact = () => {
    const title = 'Contact Us';
    const subtitle = 'Send us a message';
    const styledHeader = 'w3-padding-bottom-32 w3-container contact-header';
    const styledMessage = 'w3-padding-top-32 contact-message';
    const styledFooter = 'w3-padding-32 contact-footer';
    return (
        <div className="contact-us">
            <Header
                classStyle={styledHeader}
                title={title}
                subtitle={subtitle}
            />
            <Message classStyle={styledMessage} image={Logo} />
            <Sitemap classStyle={styledFooter} />
        </div>
    );
};

export default Contact;
