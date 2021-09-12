import React from 'react';
import Subtitle from '../../UI/Subtitle/Subtitle';
import Text from '../../UI/Text/Text';
import Link from '../../UI/Link/Link';
import Icon from '../../UI/Icon/Icon';
import Image from '../../UI/Image/Image';
import ContactForm from '../../Forms/ContactForm/ContactForm';
import { FaPhone, FaRegEnvelope } from 'react-icons/fa';
import './Message.css';

const Message = ({ classStyle, image }) => {
    const messageTip =
        '*Fill out and submit the form below and we will contact you shortly.*';
    const messageSubtitle = 'Already with us?';
    const messageSubtitle2 = 'Send your questions here:';

    return (
        <div className={classStyle}>
            <div className="message-section">
                <div className="w3-third w3-center w3-padding-large message-form">
                    <Subtitle
                        classStyle="message-subtitle"
                        subtitle={messageTip}
                    />
                    <ContactForm classStyle="w3-padding-32 message-contact-form" />
                </div>
                <div className="w3-padding-bottom-32 message-subsection">
                    <div className="w3-padding-bottom-64 message-logo-contact">
                        <div className="message-logo">
                            <Image classStyle="footer-data-image" src={image} />
                        </div>
                        <div className="footer-text-wrapper message-contact">
                            <div>
                                <Icon classStyle="icon" icon={<FaPhone />} />
                                <Link
                                    classStyle="link message-text"
                                    href="tel:801-660-7780"
                                    link="(801) 660-7780"
                                />
                            </div>
                            <div>
                                <Icon
                                    classStyle="icon"
                                    icon={<FaRegEnvelope />}
                                />
                                <Link
                                    classStyle="link message-text"
                                    href="mailto:admin@directitc.com"
                                    link="admin@directitc.com"
                                />
                            </div>
                        </div>
                    </div>
                    <div
                        className={
                            'w3-padding-top-32 w3-padding-bottom-64 message-questions'
                        }
                    >
                        <Text
                            classStyle="text text-spacing message-text"
                            text={messageSubtitle}
                        />
                        <Text
                            classStyle="text message-text"
                            text={messageSubtitle2}
                        />
                        <div>
                            <Icon classStyle="icon" icon={<FaRegEnvelope />} />
                            <Link
                                classStyle="link message-text"
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

export default Message;
