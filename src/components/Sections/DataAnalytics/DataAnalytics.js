import React from 'react';
import Title from '../../UI/Title/Title';
import Icon from '../../UI/Icon/Icon';
import Text from '../../UI/Text/Text';
import Image from '../../UI/Image/Image';
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
    const dataAnalyticsTitle = 'Data Analytics';
    let bullets = [];

    for (let i = 0; i < bulletedList.length; i++) {
        bullets.push(
            <div className="data-analytics__list">
                <Icon classStyle="data-analytics__icon" icon={<FaDotCircle />} />
                <Text classStyle="data-analytics__text" text={bulletedList[i]} />
            </div>
        );
    }

    return (
        <div id="data-analytics" className="data-analytics">
            {/* <div className="data-analytics__div"> */}
                <div className="data-analytics__img-div">
                    <Image
                        classStyle="data-analytics__img"
                        src={DataAnalyticsImage}
                    />
                </div>
                <div className="data-analytics__textbox">
                    <Title
                        classStyle="data-analytics__title"
                        title={dataAnalyticsTitle}
                    />
                    {bullets}
                </div>
            {/* </div> */}
        </div>
    );
};

export default React.memo(DataAnalytics);
