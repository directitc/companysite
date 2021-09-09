import React from 'react';
import './RadialBackground.css';

const RadialBackground = (props) => {
    return <div className={props.classStyle}>{props.children}</div>;
};

export default RadialBackground;
