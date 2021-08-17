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
                <SliderImage src="https://static.overlay-tech.com/assets/1fdfbe92-b98f-41b5-bb87-029bd1b19e5d.png"/>
                    <RadialBackground />
                    <SliderTitle>Data Migration</SliderTitle>
                    <SliderSubtitle>transfer and consolidate</SliderSubtitle>
                    <ButtonDiv>
                        <SliderButton />
                        <SliderButtonText>Learn More</SliderButtonText>
                    </ButtonDiv>
            </Slider1>
        </div>
    );
};

export default Slider;
