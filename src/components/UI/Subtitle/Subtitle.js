import React from 'react';
import './Subtitle.css';

const Subtitle = ({ classStyle, subtitle }) => {
    return <span className={classStyle}>{subtitle}</span>;
};

export default Subtitle;
