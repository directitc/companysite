import React from 'react';
import './Image.css';

const Image = ({ classStyle, src }) => {
    return <img className={classStyle} src={src} alt="" />;
};

export default Image;
