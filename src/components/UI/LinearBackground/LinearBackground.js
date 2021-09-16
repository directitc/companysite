import React from 'react';
import './LinearBackground.css';

const LinearBackground = (props) => {
    return <div className={props.classStyle}>{props.children}</div>;
};

export default LinearBackground;
