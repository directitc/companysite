import React from 'react';
import Title from '../../UI/Title/Title';
import Subtitle from '../../UI/Subtitle/Subtitle';
import Image from '../../UI/Image/Image';
import Button from '../../UI/Button/Button';
import DataMigration from '../../../assets/images/services-data-migration.png';
import DataAnalytics from '../../../assets/images/services-data-analytics.png';
import SystemIntegration from '../../../assets/images/services-system-integration.png';
import './Services.css';

const Services = () => {
    const servicesTitle = 'Our Services';
    const servicesButton = 'Learn More';
    const servicesSubtitle1 = 'Data Migration';
    const servicesSubtitle2 = 'Data Analytics';
    const servicesSubtitle3 = 'System Integration';

    return (
        <div className="w3-padding-64 w3-container services-background">
            <Title classStyle="title" title={servicesTitle} />
            <div className="w3-third w3-center w3-padding-16">
                <Image classStyle="w3-image" src={DataMigration} />
                <Subtitle
                    classStyle="services-subtitle"
                    subtitle={servicesSubtitle1}
                />
            </div>
            <div className="w3-third w3-center w3-padding-16">
                <Image classStyle="w3-image" src={DataAnalytics} />
                <Subtitle
                    classStyle="services-subtitle"
                    subtitle={servicesSubtitle2}
                />
            </div>
            <div className="w3-third w3-center w3-padding-16">
                <Image classStyle="w3-image" src={SystemIntegration} />
                <Subtitle
                    classStyle="services-subtitle"
                    subtitle={servicesSubtitle3}
                />
            </div>
            <div className="services-button-wrapper w3-padding-16">
                <Button
                    classStyle="w3-button w3-large"
                    name={servicesButton}
                    type="button"
                    link="/services"
                />
            </div>
        </div>
    );
};

export default Services;
