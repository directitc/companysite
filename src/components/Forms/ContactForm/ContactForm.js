import React from 'react';
import emailjs from 'emailjs-com';
import Button from '../../UI/Button/Button';
import creds from '../../../config';
import './ContactForm.css';

const ContactForm = ({ classStyle }) => {
    const handleSubmit = async (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                creds.SERVICE_ID,
                creds.TEMPLATE_ID,
                e.target,
                creds.USER_ID
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert('Message Sent');
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
    };

    return (
        <form className={classStyle} onSubmit={handleSubmit}>
            <div className="contact-form-input">
                <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    name="name"
                    required
                />
            </div>
            <div className="contact-form-input">
                <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    name="email"
                    required
                />
            </div>
            <div className="contact-form-input">
                <textarea
                    type="text"
                    id="message"
                    placeholder="Type message here..."
                    name="message"
                    required
                />
            </div>
            <div className="btn-fstart w3-padding-32">
                <Button
                    classStyle="btn w3-large btn-submit"
                    name="Submit"
                    type="submit"
                />
            </div>
        </form>
    );
};

export default ContactForm;
