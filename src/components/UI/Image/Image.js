import React from 'react';
import './Image.css';

const Image = ({ classStyle, src }) => {
    return (
        // <div className={classStyle}>
            <img className={classStyle} src={src} alt="" />
        // </div>
    );
};

export default Image;
