import React, { Fragment } from 'react';
import LogoImg from '../../assets/images/full-logo-color.png';
import LogoImgCircle from '../../assets/images/circle-logo-color.png';
import LogoImgText from '../../assets/images/text-logo-color.png';
import './Logo.css';

const Logo = (props) => {
    return (
        <Fragment>
            <img className="logo" alt="" src={LogoImg} />;
            <div className="logo-div">
                <img className="logo-circle" alt="" src={LogoImgCircle} />
                <img className="logo-text" alt="" src={LogoImgText} />
            </div>
        </Fragment>
    );
};

export default Logo;
