import React, { useState, useEffect, useRef } from 'react';
import SliderContent from './SliderContent';
import Arrow from '../Arrow/Arrow';
import Dots from '../Dots/Dots';
import './Slider.css';

const getWidth = () => window.innerWidth;

const Slider = (props) => {
    const { slides } = props;
    const firstSlide = slides[0];
    const secondSlide = slides[1];
    const lastSlide = slides[slides.length - 1];

    const [state, setState] = useState({
        activeSlide: 0,
        translate: getWidth(),
        transition: 0.45,
        _slides: [lastSlide, firstSlide, secondSlide],
    });

    const { activeSlide, translate, transition, _slides } = state;

    const transitionRef = useRef();
    const resizeRef = useRef();

    useEffect(() => {
        transitionRef.current = smoothTransition;
        resizeRef.current = handleResize;
    });

    useEffect(() => {
        const smooth = (e) => {
            if (e.target.className.includes('css')) {
                transitionRef.current();
            }
        };

        const resize = () => {
            resizeRef.current();
        };

        const transitionEnd = window.addEventListener('transitionend', smooth);
        const onResize = window.addEventListener('resize', resize);

        return () => {
            window.removeEventListener('transitionend', transitionEnd);
            window.removeEventListener('resize', onResize);
        };
    }, []);

    useEffect(() => {
        if (transition === 0) setState({ ...state, transition: 0.45 });
    }, [state, transition]);

    const nextSlide = () => {
        clearInterval();
        setState({
            ...state,
            translate: translate + getWidth(),
            activeSlide:
                activeSlide === slides.length - 1 ? 0 : activeSlide + 1,
        });
    };

    const prevSlide = () => {
        setState({
            ...state,
            translate: 0,
            activeSlide:
                activeSlide === 0 ? slides.length - 1 : activeSlide - 1,
        });
    };

    const smoothTransition = () => {
        let _slides = [];

        if (activeSlide === slides.length - 1)
            _slides = [slides[slides.length - 2], lastSlide, firstSlide];
        else if (activeSlide === 0)
            _slides = [lastSlide, firstSlide, secondSlide];
        else _slides = slides.slice(activeSlide - 1, activeSlide + 2);

        setState({
            ...state,
            _slides,
            transition: 0,
            translate: getWidth(),
        });
    };

    const handleResize = () => {
        setState({ ...state, translate: getWidth(), transition: 0 });
    };

    return (
        <div className="slider-div">
            <SliderContent
                translate={translate}
                transition={transition}
                width={getWidth() * _slides.length}
            >
                {_slides.map((_slide) => _slide)}
            </SliderContent>

            <Arrow direction="left" handleClick={prevSlide} />
            <Arrow direction="right" handleClick={nextSlide} />

            <Dots slides={slides} activeSlide={activeSlide} />
        </div>
    );
};

Slider.defaultProps = {
    slides: [],
};

export default Slider;
