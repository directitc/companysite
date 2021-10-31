import React, { Fragment } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Slide from '../../components/Sections/Slide/Slide';
import Slider from '../../components/UI/Slider/Slider';
import Services from '../../components/Sections/Services/Services';
import About from '../../components/Sections/About/About';
import Footer from '../../components/Sections/Footer/Footer';
import FooterLogo from '../../assets/images/full-logo-black.png';
import './Home.css';

const Home = () => {
    const dataMigrationTitle = 'Data Migration';
    const dataMigrationSubtitle = 'transfer and consolidate';
    const systemIntegrationTitle = 'System Integration';
    const systemIntegrationSubtitle = 'experience a seamless transistion';

    const slides = [
        <Slide
            title={dataMigrationTitle}
            subtitle={dataMigrationSubtitle}
            button={'Learn More'}
            link={'/services#data-migration'}
            background={'slide--radial-bg'}
        />,
        <Slide
            title={systemIntegrationTitle}
            subtitle={systemIntegrationSubtitle}
            button={'Learn More'}
            link={'/services#system-integration'}
            background={'slide--linear-bg'}
        />,
    ];

    return (
        <Fragment>
            <div className="home">
                <Navigation />
                <Slider slides={slides} />
            </div>
            <About />
            <Services />
            <Footer classStyle="home__footer" image={FooterLogo} />
        </Fragment>
    );
};

export default React.memo(Home);
