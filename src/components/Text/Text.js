import React from 'react';
import './Text.css';

const Text = ({ classStyle, text }) => {
    return (
        <div>
            <p className={classStyle}>{text}</p>
        </div>
    );
};

export default Text;
