import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Button.css';

const Button = ({ classStyle, name, type, link }) => {
    return (
        <button className={classStyle} type={type}>
            {type === 'submit' ? (
                name
            ) : (
                <Link to={link} className="link-button">
                    {name}
                </Link>
            )}
        </button>
    );
};

export default Button;
