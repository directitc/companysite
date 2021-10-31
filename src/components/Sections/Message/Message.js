import React from 'react';
import Subtitle from '../../UI/Subtitle/Subtitle';
import Text from '../../UI/Text/Text';
import Link from '../../UI/Link/Link';
import Icon from '../../UI/Icon/Icon';
import Image from '../../UI/Image/Image';
import Logo from '../../../assets/images/full-logo-black.png';
import ContactForm from '../../Forms/ContactForm/ContactForm';
import { FaPhone, FaRegEnvelope } from 'react-icons/fa';
import './Message.css';

const Message = () => {
    const messageTip =
        '*Fill out and submit the form below and we will contact you shortly.*';
    const messageSubtitle = 'Already with us?';
    const messageSubtitle2 = 'Send your questions here:';

    return (
        <div className="message">
            <div className="message__div">
                <Subtitle
                    classStyle="message__subtitle"
                    subtitle={messageTip}
                />
                <ContactForm classStyle="message__contact-form" />
                <div className="message__section">
                    <div className="message__contact-info">
                        <div className="message__img-div">
                            <Image classStyle="message__img" src={Logo} />
                        </div>
                        <div className="message__textbox">
                            <div>
                                <Icon
                                    classStyle="message__icon"
                                    icon={<FaPhone />}
                                />
                                <Link
                                    classStyle="message__link"
                                    href="tel:801-660-7780"
                                    link="(801) 660-7780"
                                />
                            </div>
                            <div>
                                <Icon
                                    classStyle="message__icon"
                                    icon={<FaRegEnvelope />}
                                />
                                <Link
                                    classStyle="message__link"
                                    href="mailto:admin@directitc.com"
                                    link="admin@directitc.com"
                                />
                            </div>
                        </div>
                    </div>
                    <div className={'message__questions'}>
                        <Text
                            classStyle="message__text"
                            text={messageSubtitle}
                        />
                        <Text
                            classStyle="message__text"
                            text={messageSubtitle2}
                        />
                        <div>
                            <Icon
                                classStyle="message__icon"
                                icon={<FaRegEnvelope />}
                            />
                            <Link
                                classStyle="message__link"
                                href="mailto:support@directitc.com"
                                link="support@directitc.com"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(Message);
