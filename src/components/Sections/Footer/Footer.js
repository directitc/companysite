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
                <div className="footer__div">
                    <Title
                        classStyle="footer__title"
                        title={contactTitle}
                    />
                    <Subtitle
                        classStyle="footer__subtitle"
                        subtitle={contactSubtitle}
                    />
                    <ContactForm classStyle="footer__contact-form" />
                </div>
                <div className="footer__div">
                    <Title
                        classStyle="footer__title"
                        title={sitmapTitle}
                    />
                    <Subtitle
                        classStyle="footer__subtitle"
                        subtitle={sitemapSubtitle}
                    />
                    <ul className="footer__list">
                        <ScrollToTop>
                            <NavLink className="footer__navlink" to="/" exact>
                                Home
                            </NavLink>
                            <NavLink className="footer__navlink" to="/about">
                                About
                            </NavLink>
                            <NavLink className="footer__navlink" to="/services">
                                Services
                            </NavLink>
                            <NavLink className="footer__navlink" to="/contact">
                                Contact
                            </NavLink>
                        </ScrollToTop>
                    </ul>
                </div>
                <div className="footer__div">
                    <div>
                        <Image classStyle="footer__img" src={image} />
                    </div>
                    <div className="footer__textbox">
                        <div>
                            <Icon classStyle="footer__icon" icon={<FaPhone />} />
                            <Link
                                classStyle="footer__link"
                                href="tel:801-660-7780"
                                link="(801) 660-7780"
                            />
                        </div>
                        <div>
                            <Icon classStyle="footer__icon" icon={<FaRegEnvelope />} />
                            <Link
                                classStyle="footer__link"
                                href="mailto:admin@directitc.com"
                                link="admin@directitc.com"
                            />
                        </div>
                    </div>
                    <div className="footer__textbox">
                        <Text classStyle="footer__text" text={questionSubtitle} />
                        <Text classStyle="footer__text" text={contactSubtitle2} />
                        <div>
                            <Icon classStyle="footer__icon" icon={<FaRegEnvelope />} />
                            <Link
                                classStyle="footer__link"
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

export default React.memo(Footer);
