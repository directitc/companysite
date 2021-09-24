import React from 'react';
import Button from '../../UI/Button/Button';
import Title from '../../UI/Title/Title';
import Text from '../../UI/Text/Text';
import Image from '../../UI/Image/Image';
import AboutUsImage from '../../../assets/images/about-us-image.png';
import './About.css';

const AboutSection = () => {
    const aboutTitle = 'About Us';
    const aboutText =
        'Direct IT Consulting provides exceptional service to businesses across the United States with 25+ years of industry experience. Team members throughout the country colaborate remotely to ensure timely and high quality results. We tailor our knowledge and expertise to fit the needs of our clients.';
    const aboutButton = 'Read More';

    return (
        <div className="w3-padding-64 w3-container">
            <div className="w3-content about-section">
                <div className="w3-third w3-center w3-padding-small w3-padding-32">
                    <Image classStyle="about-image" src={AboutUsImage} />
                </div>
                <div className="w3-twothird w3-padding-large w3-padding-32">
                    <Title
                        classStyle="title title-fstart title-dark-gray"
                        title={aboutTitle}
                    />
                    <Text
                        classStyle="about-text w3-padding-16"
                        text={aboutText}
                    />
                    <div className="about-btn-wrapper">
                        <Button
                            classStyle="btn w3-large"
                            name={aboutButton}
                            type="button"
                            link="/about"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
