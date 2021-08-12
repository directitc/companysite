import Slider1 from '../Slider1/Slider1';
import Ellipses from '../Ellipses/Ellipses';
import Menu from '../Menu/Menu';
import Logo from '../Logo/Logo';

import { StyledHomePage, FlexWrapperSix } from './HomePage.styles';

const HomePage = () => {
    return (
        <StyledHomePage>
            <FlexWrapperSix>
                <Slider1 />
                <Ellipses />
                {/* <Arrows
                    alt=""
                    src="https://static.overlay-tech.com/assets/1785f039-479f-4299-a2a8-03897582c1df.svg"
                /> */}
                <Menu />
                <Logo />
            </FlexWrapperSix>
            {/* <StyledAboutSection />
            <StyledServicesSection />
            <StyledFooter />
            <StyledCopyright /> */}
        </StyledHomePage>
    );
};

export default HomePage;
