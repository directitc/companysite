import React from 'react'
import Navigation from '../../Navigation/Navigation';
import Logo from '../../Logo/Logo';
import NavBar from '../../NavBar/NavBar';
import Title from '../../Title/Title';
import Subtitle from '../../Subtitle/Subtitle';
import './Header.css'

const Header = ({classStyle, title, subtitle}) => {
    return (
        <div className={classStyle}>
            <Navigation>
                <Logo />
                <NavBar />
            </Navigation>
            <div className="w3-container slider1-header">
                <div className="header-subsection">
                    <Title classStyle={'title'} title={title} />
                    <Subtitle
                        classStyle={'subtitle w3-xlarge'}
                        subtitle={subtitle}
                    ></Subtitle>
                </div>
            </div>
        </div>
    )
}

export default Header
