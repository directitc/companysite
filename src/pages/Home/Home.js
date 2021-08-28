import Slider1 from '../../components/Sections/Slider1/Slider1';
import Services from '../../components/Sections/Services/Services';
import About from '../../components/Sections/About/About';
import Footer from '../../components/Sections/Footer/Footer';
import FooterLogo from '../../assets/images/full-logo-black.png';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <Slider1 />
            <About />
            <Services />
            <Footer
                classStyle="w3-padding-64 w3-container home-footer"
                image={FooterLogo}
            />
        </div>
    );
};

export default Home;
