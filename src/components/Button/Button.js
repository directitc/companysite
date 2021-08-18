import React from 'react';
import './Button.css';

const Button = ({classStyle, name}) => {
    return (
        <div className={classStyle}>
            <div className="button">{name}</div>
        </div>
    );
};

export default Button;
