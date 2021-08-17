import Slider1 from '../../components/Slider1/Slider1';
import Ellipses from '../../components/Ellipses/Ellipses';
import NavBar from '../../components/NavBar/NavBar';
import Logo from '../../components/Logo/Logo';
import Arrows from '../../components/Arrows/Arrows';

import { StyledHomePage, StyledHeader } from './Home.styles';

const HomePage = () => {
    return (
        <StyledHomePage>
            <StyledHeader>
                <Logo />
                <NavBar />
            </StyledHeader>

            {/* <Slider1 />
            <Ellipses /> */}
            {/* <Arrows /> */}
            {/* <StyledAboutSection />
            <StyledServicesSection />
            <StyledFooter />
            <StyledCopyright /> */}
        </StyledHomePage>
    );
};

export default HomePage;
