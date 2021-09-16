import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Slider1 from '../../components/Sections/Slider1/Slider1';
import Slider2 from '../../components/Sections/Slider2/Slider2';
import Slider from '../../components/UI/Slider/Slider';
import Services from '../../components/Sections/Services/Services';
import About from '../../components/Sections/About/About';
import Footer from '../../components/Sections/Footer/Footer';
import FooterLogo from '../../assets/images/full-logo-black.png';
import './Home.css';

const Home = () => {
    const slides = [<Slider1 />, <Slider2 />];

    return (
        <div className="">
            <div className="about about-header blue-background">
                <div className="about-navigation">
                    <Navigation />
                </div>
                <div className="about-content">
                    <Slider slides={slides} autoPlay={5} />
                </div>
            </div>
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
