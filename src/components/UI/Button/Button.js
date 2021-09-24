import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Button.css';

const Button = ({ classStyle, name, type, link }) => {
    let btnType;

    if (type === 'submit') {
        btnType = (
            <button className={classStyle} type={type}>
                {name}
            </button>
        );
    } else {
        btnType = (
            <Link className={classStyle} to={link}>
                {name}
            </Link>
        );
    }

    return btnType;
};

export default Button;
