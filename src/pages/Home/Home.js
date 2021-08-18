import Slider1 from '../../components/Sections/Slider1/Slider1';
import About from '../../components/Sections/About/About';
import Section from '../../components/Sections/Section/Section';
import Arrows from '../../components/Arrows/Arrows';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <Section>
                <Slider1 />
            </Section>
            <Section>
                <About />
            </Section>

            {/* <StyledServicesSection />
            <StyledFooter />
            <StyledCopyright /> */}
        </div>
    );
};

export default Home;
