import React from 'react';
import Title from '../../Title/Title';
import Icon from '../../Icon/Icon';
import Text from '../../Text/Text';
import Image from '../../Image/Image';
import DataAnalyticsImage from '../../../assets/images/services-data-analytics.png';
import { FaDotCircle } from 'react-icons/fa';
import './DataAnalytics.css';

const bulletedList = [
    'Familiar with data structure on the backend and clinical workflows on the front end.',
    'Mine backend data on the EDW reporting platform utilizing BI tools.',
    'Create visualizations for the data extracted and managed big data.',
    'Design BI dashboards and manage BI Server.',
    'Prepare data for use by BI and established connections to data sources.',
    'Perform Data Modeling in BI Desktop and develop workbooks and hyper extracts on BI Desktop.',
];

const DataAnalytics = () => {
    const title = 'Data Analytics';
    let bullets = [];

    for (let i = 0; i < bulletedList.length; i++) {
        bullets.push(
            <div className="data-analytics-list">
                <Icon
                    classStyle={'data-analytics-icon'}
                    icon={<FaDotCircle />}
                />
                <Text
                    classStyle={'data-analytics-text'}
                    text={bulletedList[i]}
                />
            </div>
        );
    }

    return (
        <div className="w3-padding-64 w3-container data-analytics">
            <div className="w3-content data-analytics-section">
                <div className="w3-third w3-center w3-padding-small w3-padding-32">
                    <Image
                        classStyle={'data-analytics-image'}
                        src={DataAnalyticsImage}
                    />
                </div>
                <div className="w3-twothird w3-padding-large w3-padding-32">
                    <Title
                        classStyle={'title title-fstart title-dark-gray'}
                        title={title}
                    />
                    {bullets}
                </div>
            </div>
        </div>
    );
};

export default DataAnalytics;
