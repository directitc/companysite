import React, { Fragment } from 'react';
import LogoImg from '../../assets/images/full-logo-color.png';
import LogoImgCircle from '../../assets/images/circle-logo-color.png';
import LogoImgText from '../../assets/images/text-logo-color.png';
import './Logo.css';

const Logo = () => {
    return (
        <Fragment>
            <img className="logo__full" alt="" src={LogoImg} />
            <div className="logo">
                <img className="logo__circle" alt="" src={LogoImgCircle} />
                <img className="logo__text" alt="" src={LogoImgText} />
            </div>
        </Fragment>
    );
};

export default React.memo(Logo);
