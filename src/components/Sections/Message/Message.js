import React from 'react';
import Subtitle from '../../Subtitle/Subtitle';
import Text from '../../Text/Text';
import Link from '../../Link/Link';
import Icon from '../../Icon/Icon';
import Image from '../../Image/Image';
import ContactForm from '../../Forms/ContactForm/ContactForm';
import { FaPhone, FaRegEnvelope } from 'react-icons/fa';
import './Message.css';

const Message = ({ classStyle, image }) => {
    const subtitle1 =
        '*Fill out and submit the form below and we will contact you shortly.*';
    const subtitle3 = 'Already with us?';
    const styledContactForm =
        'w3-third w3-center w3-padding-large message-form';
    const styledDiv = 'w3-padding-bottom-32 message-subsection';
    const styledSubtitle = 'message-subtitle';

    return (
        <div className={classStyle}>
            <div className="message-section">
                <div className={styledContactForm}>
                    <Subtitle
                        classStyle={styledSubtitle}
                        subtitle={subtitle1}
                    />
                    <ContactForm classStyle="w3-padding-32 message-contact-form" />
                </div>
                <div className={styledDiv}>
                    <div className="w3-padding-bottom-64 message-logo-contact">
                        <div className="message-logo">
                            <Image
                                classStyle={'footer-data-image'}
                                src={image}
                            />
                        </div>
                        <div className={'footer-text-wrapper message-contact'}>
                            <div>
                                <Icon classStyle={'icon'} icon={<FaPhone />} />
                                <Link
                                    classStyle={'link message-text'}
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
                                    classStyle={'link message-text'}
                                    href={'mailto:admin@directitc.com'}
                                    link={'admin@directitc.com'}
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
                            classStyle={'text text-spacing message-text'}
                            text={subtitle3}
                        />
                        <Text
                            classStyle={'text message-text'}
                            text={'Send your questions here:'}
                        />
                        <div>
                            <Icon
                                classStyle={'icon'}
                                icon={<FaRegEnvelope />}
                            />
                            <Link
                                classStyle={'link message-text'}
                                href={'mailto:support@directitc.com'}
                                link={'support@directitc.com'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Message;
