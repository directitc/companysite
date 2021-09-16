import React from 'react';
import LinearBackground from '../../UI/LinearBackground/LinearBackground';
import Title from '../../UI/Title/Title';
import Subtitle from '../../UI/Subtitle/Subtitle';
import Button from '../../UI/Button/Button';
import './Slider2.css';

const Slider2 = () => {
    const systemIntegrationTitle = 'System Integration';
    const systemIntegrationSubtitle = 'experience a seamless transistion';
    const systemIntegrationButton = 'Learn More';

    return (
        <div className="about-header">
            <LinearBackground classStyle="w3-container linear-background">
                <div className="w3-padding-bottom-64 header-section">
                    <div className="header-subsection fend">
                        <div className="header-text-slider fcenter">
                            <Title
                                classStyle="title"
                                title={systemIntegrationTitle}
                            />
                            <Subtitle
                                classStyle="subtitle"
                                subtitle={systemIntegrationSubtitle}
                            ></Subtitle>
                            <div className="slider1-button-wrapper w3-padding-16">
                                <Button
                                    classStyle="button-center w3-button w3-large"
                                    name={systemIntegrationButton}
                                    type="button"
                                    link="/services#system-integration"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </LinearBackground>
        </div>
    );
};

export default Slider2;
