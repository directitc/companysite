import React from 'react';
import './Navigation.css';

const Navigation = (props) => {
    return <div className="navigation">{props.children}</div>;
};

export default Navigation;
