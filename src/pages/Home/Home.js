import Slider1 from '../../components/Sections/Slider1/Slider1';
// import Slider from '../../components/UI/Slider/Slider';
import Services from '../../components/Sections/Services/Services';
import About from '../../components/Sections/About/About';
import Footer from '../../components/Sections/Footer/Footer';
import FooterLogo from '../../assets/images/full-logo-black.png';
import './Home.css';

const Home = () => {
    // const images = [
    //     'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
    //     'https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80',
    //     'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80',
    //     'https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80',
    // ];

    // const test = [<Slider1 />, <Slider1 />]

    return (
        <div className="home">
            {/* <Slider slides={images} autoPlay={3} /> */}
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
