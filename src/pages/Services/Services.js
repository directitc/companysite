import React from 'react';
import Header from '../../components/Sections/Header/Header';
import Contact from '../../components/Sections/Contact/Contact';
import Copyright from '../../components/Sections/Copyright/Copyright';
import ContactLogo from '../../assets/images/full-logo-black.png';
import './Services.css'
import DataMigration from '../../components/Sections/DataMigration/DataMigration';

const Services = () => {
    const title = 'Our Services';
    const subtitle = 'Consult with IT experts';
    const styledHeader = 'w3-padding-32 w3-container services-header';
    const styledContact = 'w3-padding-64 w3-container services-contact';
    return (
        <div className="services">
            <Header
                classStyle={styledHeader}
                title={title}
                subtitle={subtitle}
            />
            <DataMigration />
            <Contact classStyle={styledContact} image={ContactLogo} />
            <Copyright />
        </div>
    );
};

export default Services;
