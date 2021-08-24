import React from 'react';
import './Image.css';

const Image = ({ classStyle, src }) => {
    return (
        <div className={classStyle}>
            <img className="w3-image" src={src} alt="" />
        </div>
    );
};

export default Image;
