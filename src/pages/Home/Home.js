import Slider1 from '../../components/Sections/Slider1/Slider1';
import Services from '../../components/Sections/Services/Services';
import About from '../../components/Sections/About/About';
import Contact from '../../components/Sections/Contact/Contact';
import Copyright from '../../components/Sections/Copyright/Copyright';
import ContactLogo from '../../assets/images/full-logo-black.png';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <Slider1 />
            <About />
            <Services />
            <Contact
                classStyle="w3-padding-64 w3-container home-contact-background"
                image={ContactLogo}
            />
            <Copyright />
        </div>
    );
};

export default Home;
