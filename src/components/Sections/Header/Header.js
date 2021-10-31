import React from 'react';
import Title from '../../UI/Title/Title';
import Subtitle from '../../UI/Subtitle/Subtitle';
import './Header.css';

const Header = ({ classStyle, title, subtitle }) => {
    return (
        <div className={classStyle}>
            <div className="header__div">
                <div className="header__textbox">
                    <Title classStyle="header__title" title={title} />
                    <Subtitle
                        classStyle="header__subtitle"
                        subtitle={subtitle}
                    ></Subtitle>
                </div>
            </div>
        </div>
    );
};

export default React.memo(Header);
