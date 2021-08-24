import React from 'react';
import Title from '../../Title/Title';
import Subtitle from '../../Subtitle/Subtitle';
import Text from '../../Text/Text';
import Button from '../../Button/Button';
import List from '../../List/List';
import Link from '../../Link/Link';
import Icon from '../../Icon/Icon';
import ContactLogo from '../../../assets/images/contact-logo.png';
import Image from '../../Image/Image';
import ContactForm from '../../Forms/ContactForm/ContactForm';
import { FaEnvelope, FaPhone, FaRegEnvelope } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const contactUs = 'Contact Us';
    const sitemap = 'Sitemap';
    const name = 'Submit';
    const subtitle1 = 'Send us a message';
    const subtitle2 = 'All our pages';
    const subtitle3 = 'Already with us?';
    const styledDiv = 'w3-third w3-center w3-padding-16';
    const styledImage = 'w3-image';
    const styledTitle = 'title contact-color';
    const styledSubtitle = 'contact-subtitle contact-color';
    const styledDivList = 'contact-list-wrapper';
    const styledList = '';
    const sitemapList = ['Home', 'About', 'Services', 'Contact Us'];

    return (
        <div className="w3-padding-64 w3-container contact-background">
            <div className={styledDiv}>
                <Title classStyle={styledTitle} title={contactUs} />
                <Subtitle classStyle={styledSubtitle} subtitle={subtitle1} />
                <ContactForm />
            </div>
            <div className={styledDiv}>
                <Title classStyle={styledTitle} title={sitemap} />
                <Subtitle classStyle={styledSubtitle} subtitle={subtitle2} />
                <div className={styledDivList}>
                    <List classStyle={styledList} list={sitemapList} />
                </div>
            </div>
            <div className={styledDiv}>
                <Image src={ContactLogo} />
                <div className={'contact-text-wrapper'}>
                    <div>
                        <Icon classStyle={'icon'} icon={<FaPhone />} />
                        <Link classStyle={'link'} href={'tel:801-660-7780'} link={'(801) 660-7780'} />
                    </div>
                    <div>
                        <Icon classStyle={'icon'} icon={<FaRegEnvelope />} />
                        <Link
                            classStyle={'link'}
                            href={'mailto:admin@directitc.com'}
                            link={'admin@directitc.com'}
                        />
                    </div>
                </div>
                <div className={'contact-text-wrapper w3-padding-top-32'}>
                    <Text classStyle={'text'} text={'Already with us?'} />
                    <Text
                        classStyle={'text'}
                        text={'Send your questions here:'}
                    />
                    <div>
                        <Icon classStyle={'icon'} icon={<FaRegEnvelope />} />
                        <Link
                            classStyle={'link'}
                            href={'mailto:support@directitc.com'}
                            link={'support@directitc.com'}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
