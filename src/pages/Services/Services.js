import React from 'react';
import Header from '../../components/Sections/Header/Header';
import DataMigration from '../../components/Sections/DataMigration/DataMigration';
import DataAnalytics from '../../components/Sections/DataAnalytics/DataAnalytics';
import SystemIntegration from '../../components/Sections/SystemIntegration/SystemIntegration';
import Contact from '../../components/Sections/Contact/Contact';
import ContactLogo from '../../assets/images/full-logo-black.png';
import Copyright from '../../components/Sections/Copyright/Copyright';
import './Services.css'

const Services = () => {
    const title = 'Our Services';
    const subtitle = 'Consult with IT experts';
    const styledHeader = 'w3-padding-bottom-32 w3-container services-header';
    const styledContact = 'w3-padding-64 w3-container services-contact';
    return (
        <div className="services">
            <Header
                classStyle={styledHeader}
                title={title}
                subtitle={subtitle}
            />
            <DataMigration />
            <DataAnalytics />
            <SystemIntegration />
            <Contact classStyle={styledContact} image={ContactLogo} />
            <Copyright />
        </div>
    );
};

export default Services;
