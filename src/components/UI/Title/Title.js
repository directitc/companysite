import React from 'react';
import './Title.css';

const Title = ({ classStyle, title }) => {
    return <h1 className={classStyle}>{title}</h1>;
};

export default Title;
