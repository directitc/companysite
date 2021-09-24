import React from 'react';
import RadialBackground from '../../UI/RadialBackground/RadialBackground';
import Title from '../../UI/Title/Title';
import Subtitle from '../../UI/Subtitle/Subtitle';
import Button from '../../UI/Button/Button';
import './Slider1.css';

const Slider = () => {
    const dataMigrationTitle = 'Data Migration';
    const dataMigrationSubtitle = 'transfer and consolidate';
    const dataMigrationButton = 'Learn More';

    return (
        <div className="about-header">
            <RadialBackground classStyle="w3-container radial-background">
                <div className="w3-padding-bottom-64 header-section">
                    <div className="header-subsection fend">
                        <div className="header-text-slider fcenter">
                            <Title
                                classStyle="title"
                                title={dataMigrationTitle}
                            />
                            <Subtitle
                                classStyle="subtitle"
                                subtitle={dataMigrationSubtitle}
                            ></Subtitle>
                            <div className="slider1-btn-wrapper w3-padding-16">
                                <Button
                                    classStyle="btn-center btn w3-large"
                                    name={dataMigrationButton}
                                    type="button"
                                    link="/services#data-migration"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </RadialBackground>
        </div>
    );
};

export default Slider;
