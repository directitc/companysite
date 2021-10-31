import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Header from '../../components/Sections/Header/Header';
import Message from '../../components/Sections/Message/Message';
import Sitemap from '../../components/Sections/Sitemap/Sitemap';
import './Contact.css';

const Contact = () => {
    const contactTitle = 'Contact Us';
    const contactSubtitle = 'Send us a message';

    return (
        <div className="contact">
            <Navigation />
            <div className="contact__content">
                <Header
                    classStyle="contact__header"
                    title={contactTitle}
                    subtitle={contactSubtitle}
                />
                <Message />
                <Sitemap classStyle="contact__footer" />
            </div>
        </div>
    );
};

export default React.memo(Contact);
