import React from 'react';
import './Link.css';

const Link = ({ classStyle, href, link }) => {
    return (
        <a href={href} alt="" className={classStyle}>
            {link}
        </a>
    );
};

export default Link;
