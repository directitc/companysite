import React from 'react';
import Title from '../../Title/Title';
import Image from '../../Image/Image';
import Button from '../../Button/Button';
import DataMigration from '../../../assets/images/services-data-migration.png';
import DataAnalytics from '../../../assets/images/services-data-analytics.png';
import SystemIntegration from '../../../assets/images/services-system-integration.png';
import './Services.css';
import Subtitle from '../../Subtitle/Subtitle';

const Services = () => {
    const title = 'Our Services';
    const name = 'Learn More';
    const subtitle1 = 'Data Migration';
    const subtitle2 = 'Data Analytics';
    const subtitle3 = 'System Integration';
    const styledDiv = 'w3-third w3-center w3-padding-16';
    const styledImage = 'w3-image';
    const styledTitle = 'title';
    const styledSubtitle = 'services-subtitle';

    return (
        <div className="w3-padding-64 w3-container services-background">
            <Title classStyle={styledTitle} title={title} />
            <div className={styledDiv}>
                <Image classStyle={styledImage} src={DataMigration} />
                <Subtitle classStyle={styledSubtitle} subtitle={subtitle1} />
            </div>
            <div className={styledDiv}>
                <Image classStyle={styledImage} src={DataAnalytics} />
                <Subtitle classStyle={styledSubtitle} subtitle={subtitle2} />
            </div>
            <div className={styledDiv}>
                <Image classStyle={styledImage} src={SystemIntegration} />
                <Subtitle classStyle={styledSubtitle} subtitle={subtitle3} />
            </div>
            <div className="services-button-wrapper w3-padding-16">
                <Button
                    classStyle={'w3-button w3-large'}
                    name={name}
                    type={'button'}
                />
            </div>
        </div>
    );
};

export default Services;
