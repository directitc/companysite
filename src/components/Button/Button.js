import React from 'react';
import './Button.css';

const Button = ({ classStyle, name, type }) => {
    return (
        <button className={classStyle} type={type}>
            {name}
        </button>
    );
};

export default Button;
