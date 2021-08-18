import React from 'react';
import Button from '../../Button/Button';
import Title from '../../Title/Title';
import Text from '../../Text/Text';
import './About.css';

const AboutSection = () => {
    const title = 'About Us';
    const text =
        'Direct IT Consulting provides exceptional service to businesses across the United States with 25+ years of industry experience. Team members throughout the country colaborate remotely to ensure timely and high quality results. We tailor our knowledge and expertise to fit the needs of our clients.';
    const name = 'Read More';

    return (
        <div className="about-section">
            <Title classStyle={"title fstart dark-gray"} title={title} />
            <Text text={text} />
            <Button classStyle={"button-wrapper fstart"} name={name} />
        </div>
    );
};

export default AboutSection;
