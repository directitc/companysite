import React from 'react';
import './Icon.css';

const Icon = ({ classStyle, icon }) => {
    return <span className={classStyle}>{icon}</span>;
};

export default Icon;
