import React from 'react';
import Title from '../../UI/Title/Title';
import Subtitle from '../../UI/Subtitle/Subtitle';
import './Header.css';

const Header = ({ classStyle, title, subtitle }) => {
    return (
        <div className={classStyle}>
            <div className="w3-padding-bottom-64 header-section">
                <div className="w3-padding-bottom-64 header-subsection">
                    <div className="header-text">
                        <Title classStyle="title title-fstart" title={title} />
                        <Subtitle
                            classStyle="subtitle subtitle-fstart"
                            subtitle={subtitle}
                        ></Subtitle>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
