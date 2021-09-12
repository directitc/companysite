import React from 'react';
import './Text.css';

const Text = ({ classStyle, text }) => {
    return <span className={classStyle}>{text}</span>;
};

export default Text;
