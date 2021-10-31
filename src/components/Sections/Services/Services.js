import React from 'react';
import Title from '../../UI/Title/Title';
import Subtitle from '../../UI/Subtitle/Subtitle';
import Image from '../../UI/Image/Image';
import Button from '../../UI/Button/Button';
import DataMigrationImg from '../../../assets/images/services-data-migration.png';
import DataAnalyticsImg from '../../../assets/images/services-data-analytics.png';
import SystemIntegrationImg from '../../../assets/images/services-system-integration.png';
import './Services.css';

const Services = () => {
    const servicesTitle = 'Our Services';
    const servicesButton = 'Learn More';

    let services = [];
    const images = [DataMigrationImg, DataAnalyticsImg, SystemIntegrationImg];
    const subtitles = [
        'Data Migration',
        'Data Analytics',
        'System Integration',
    ];

    for (let i = 0; i < images.length; i++) {
        services.push(
            <div className="services-section__img-text">
                <Image classStyle="services-section__img" src={images[i]} />
                <Subtitle
                    classStyle="services-section__subtitle"
                    subtitle={subtitles[i]}
                />
            </div>
        );
    }

    return (
        <div className="services-section">
            <Title classStyle="services-section__title" title={servicesTitle} />
            {services}
            <div className="services-section__btn-div">
                <Button
                    classStyle="services-section__btn"
                    name={servicesButton}
                    type="button"
                    link="/services"
                />
            </div>
        </div>
    );
};

export default React.memo(Services);
