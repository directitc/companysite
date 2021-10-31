import React, { memo } from 'react';
import { css } from '@emotion/css';
import './Dots.css';

const Dot = ({ active }) => (
    <span
        className={css`
            padding: 8px;
            margin-right: 5px;
            border-radius: 50%;
            background: ${active ? 'gray' : 'lightgray'};
        `}
    />
);

const MemoDot = memo(Dot);

const Dots = ({ slides, activeSlide }) => (
    <div className="dots">
        {slides.map((slide, i) => (
            <MemoDot key={slide} active={activeSlide === i} />
        ))}
    </div>
);

export default React.memo(Dots);
