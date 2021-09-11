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
    const contactUs = 'Contact Us';
    const sitemap = 'Sitemap';
    const subtitle1 = 'Send us a message';
    const subtitle2 = 'All our pages';
    const subtitle3 = 'Already with us?';
    const styledDiv = 'w3-third w3-center w3-padding-16 footer-div';
    const styledTitle = 'title footer-color';
    const styledSubtitle = 'footer-subtitle';
    const styledDivList = 'footer-list-wrapper';
    const styledList = 'navlink';

    return (
        <Fragment>
            <div className={classStyle}>
                <div className={styledDiv}>
                    <Title classStyle={styledTitle} title={contactUs} />
                    <Subtitle
                        classStyle={styledSubtitle}
                        subtitle={subtitle1}
                    />
                    <ContactForm classStyle="contact-form w3-padding-small footer-message" />
                </div>
                <div className={styledDiv}>
                    <Title classStyle={styledTitle} title={sitemap} />
                    <Subtitle
                        classStyle={styledSubtitle}
                        subtitle={subtitle2}
                    />
                    <ul className={styledDivList}>
                        <ScrollToTop>
                            <NavLink className={styledList} to="/" exact>
                                Home
                            </NavLink>
                            <NavLink className={styledList} to="/about">
                                About
                            </NavLink>
                            <NavLink className={styledList} to="/services">
                                Services
                            </NavLink>
                            <NavLink className={styledList} to="/contact">
                                Contact
                            </NavLink>
                        </ScrollToTop>
                    </ul>
                </div>
                <div className={styledDiv}>
                    <div>
                        <Image classStyle={'footer-data-image'} src={image} />
                    </div>
                    <div className={'footer-text-wrapper'}>
                        <div>
                            <Icon classStyle={'icon'} icon={<FaPhone />} />
                            <Link
                                classStyle={'link'}
                                href={'tel:801-660-7780'}
                                link={'(801) 660-7780'}
                            />
                        </div>
                        <div>
                            <Icon
                                classStyle={'icon'}
                                icon={<FaRegEnvelope />}
                            />
                            <Link
                                classStyle={'link'}
                                href={'mailto:admin@directitc.com'}
                                link={'admin@directitc.com'}
                            />
                        </div>
                    </div>
                    <div className={'footer-text-wrapper w3-padding-top-32'}>
                        <Text classStyle={'text'} text={subtitle3} />
                        <Text
                            classStyle={'text'}
                            text={'Send your questions here:'}
                        />
                        <div>
                            <Icon
                                classStyle={'icon'}
                                icon={<FaRegEnvelope />}
                            />
                            <Link
                                classStyle={'link'}
                                href={'mailto:support@directitc.com'}
                                link={'support@directitc.com'}
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
