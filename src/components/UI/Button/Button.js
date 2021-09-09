import React from 'react';
import { useHistory } from 'react-router-dom';
import './Button.css';

const Button = ({ classStyle, name, type, link }) => {
    const history = useHistory();

    return (
        <button
            className={classStyle}
            type={type}
            onClick={() => history.push(link)}
        >
            {name}
        </button>
    );
};

export default Button;
