import React from 'react';
import './Text.css';

const Text = ({ classStyle, text }) => {
    return (
        // <div>
            <span className={classStyle}>{text}</span>
        // </div>
    );
};

export default Text;
