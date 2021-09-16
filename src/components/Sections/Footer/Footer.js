import React, { Fragment } from 'react';
import Title from '../../UI/Title/Title';
import Subtitle from '../../UI/Subtitle/Subtitle';
import Text from '../../UI/Text/Text';
import Link from '../../UI/Link/Link';
import Icon from '../../UI/Icon/Icon';
import Image from '../../UI/Image/Image';
import ContactForm from '../../Forms/ContactForm/ContactForm';
import Copyright from '../Copyright/Copyright';
import ScrollToTop from '../../../containers/ScrollToTop/ScrollToTop';
import { NavLink } from 'react-router-dom';
import { FaPhone, FaRegEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = ({ classStyle, image }) => {
    const contactTitle = 'Contact Us';
    const contactSubtitle = 'Send us a message';
    const contactSubtitle2 = 'Send your questions here:';
    const sitmapTitle = 'Sitemap';
    const sitemapSubtitle = 'All our pages';
    const questionSubtitle = 'Already with us?';

    return (
        <Fragment>
            <div className={classStyle}>
                <div className="w3-third w3-center w3-padding-16 footer-div">
                    <Title
                        classStyle="title footer-color"
                        title={contactTitle}
                    />
                    <Subtitle
                        classStyle="footer-subtitle"
                        subtitle={contactSubtitle}
                    />
                    <ContactForm classStyle="w3-padding-small footer-message" />
                </div>
                <div className="w3-third w3-center w3-padding-16 footer-div">
                    <Title
                        classStyle="title footer-color"
                        title={sitmapTitle}
                    />
                    <Subtitle
                        classStyle="footer-subtitle"
                        subtitle={sitemapSubtitle}
                    />
                    <ul className="footer-list-wrapper">
                        <ScrollToTop>
                            <NavLink className="navlink" to="/" exact>
                                Home
                            </NavLink>
                            <NavLink className="navlink" to="/about">
                                About
                            </NavLink>
                            <NavLink className="navlink" to="/services">
                                Services
                            </NavLink>
                            <NavLink className="navlink" to="/contact">
                                Contact
                            </NavLink>
                        </ScrollToTop>
                    </ul>
                </div>
                <div className="w3-third w3-center w3-padding-16 footer-div">
                    <div>
                        <Image classStyle="footer-data-image" src={image} />
                    </div>
                    <div className="footer-text-wrapper">
                        <div>
                            <Icon classStyle="icon" icon={<FaPhone />} />
                            <Link
                                classStyle="link"
                                href="tel:801-660-7780"
                                link="(801) 660-7780"
                            />
                        </div>
                        <div>
                            <Icon classStyle="icon" icon={<FaRegEnvelope />} />
                            <Link
                                classStyle="link"
                                href="mailto:admin@directitc.com"
                                link="admin@directitc.com"
                            />
                        </div>
                    </div>
                    <div className="footer-text-wrapper w3-padding-top-32">
                        <Text classStyle="text" text={questionSubtitle} />
                        <Text classStyle="text" text={contactSubtitle2} />
                        <div>
                            <Icon classStyle="icon" icon={<FaRegEnvelope />} />
                            <Link
                                classStyle="link"
                                href="mailto:support@directitc.com"
                                link="support@directitc.com"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Copyright />
        </Fragment>
    );
};

export default Footer;
