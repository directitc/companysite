import React from 'react';
import Button from '../../Button/Button';
import Title from '../../Title/Title';
import Text from '../../Text/Text';
import Image from '../../Image/Image';
import img1 from '../../../assets/images/about-us-image.png';
import './About.css';

const AboutSection = () => {
    const title = 'About Us';
    const text =
        'Direct IT Consulting provides exceptional service to businesses across the United States with 25+ years of industry experience. Team members throughout the country colaborate remotely to ensure timely and high quality results. We tailor our knowledge and expertise to fit the needs of our clients.';
    const name = 'Read More';

    return (
        <div className="w3-padding-64 w3-container">
            <div className="w3-content">
                <Image
                    classStyle={
                        'w3-third w3-center w3-padding-large w3-padding-32'
                    }
                    src={img1}
                />
                <div className="w3-twothird w3-padding-large w3-padding-32">
                    <Title
                        classStyle={'title title-fstart title-dark-gray'}
                        title={title}
                    />
                    <Text classStyle={'about-text'} text={text} />
                    <div className="about-button-wrapper">
                        <Button
                            classStyle={'w3-button w3-large'}
                            name={name}
                            type={'button'}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
