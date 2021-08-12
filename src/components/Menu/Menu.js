import React from 'react';

import {
    MenuDiv,
    NavHighlight,
    NavHome,
    NavAbout,
    NavServices,
    NavContact,
    MenuGroup,
} from './Menu.styles';

const Menu = () => {
    return (
        <MenuDiv>
            <MenuGroup>
                <NavHighlight>
                    <NavHome>Home</NavHome>
                </NavHighlight>
                <NavAbout>About</NavAbout>
                <NavServices>Services</NavServices>
                <NavContact>Contact Us</NavContact>
            </MenuGroup>
        </MenuDiv>
    );
};

export default Menu;
