import Slider1 from '../../components/Slider1/Slider1';
import Ellipses from '../../components/Ellipses/Ellipses';
import NavBar from '../../components/NavBar/NavBar';
import Logo from '../../components/Logo/Logo';
import Arrows from '../../components/Arrows/Arrows';

import { StyledHomePage, FlexWrapperSix } from './Home.styles';

const HomePage = () => {
    return (
        <StyledHomePage>
            <FlexWrapperSix>
                <Slider1 />
                <Ellipses />
                {/* <Arrows /> */}
                <NavBar />
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
