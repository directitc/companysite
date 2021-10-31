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
        <div className="about-section">
            <div className="about-section__img-div">
                <Image classStyle="about-section__img" src={AboutUsImage} />
            </div>
            <div className="about-section__textbox">
                <Title classStyle="about-section__title" title={aboutTitle} />
                <Text classStyle="about-section__text" text={aboutText} />
                <div className="about-section__btn-div">
                    <Button
                        classStyle="about-section__btn"
                        name={aboutButton}
                        type="button"
                        link="/about"
                    />
                </div>
            </div>
        </div>
    );
};

export default React.memo(AboutSection);
