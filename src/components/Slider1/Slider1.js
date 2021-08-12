import React from 'react';
import {
    Slider1,
    RadialBackground,
    SliderImage,
    SliderTitle,
    SliderSubtitle,
    ButtonDiv,
    SliderButtonText,
    SliderButton,
} from './Slider1.styles';

const Slider = () => {
    return (
        <div>
            <Slider1>
                <RadialBackground>
                    <SliderImage />
                    <SliderTitle>Data Migration</SliderTitle>
                    <SliderSubtitle>transfer and consolidate</SliderSubtitle>
                    <ButtonDiv>
                        <SliderButton/>
                            <SliderButtonText>Learn More</SliderButtonText>
                    </ButtonDiv>
                </RadialBackground>
            </Slider1>
        </div>
    );
};

export default Slider;
