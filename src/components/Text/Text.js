import React from 'react';
import './Text.css';

const Text = ({ text }) => {
    return (
        <div className="text-box">
            <p className="text">{text}</p>
        </div>
    );
};

export default Text;
