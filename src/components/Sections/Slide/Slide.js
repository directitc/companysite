import React from 'react';
import Title from '../../UI/Title/Title';
import Subtitle from '../../UI/Subtitle/Subtitle';
import Button from '../../UI/Button/Button';
import './Slide.css';

const Slide = ({ title, subtitle, button, link, background }) => {
    return (
        <div className="slide">
            <div className={background}>
                <div className="slide__div">
                    <div className="slide__textbox">
                        <div className="slide__section">
                            <Title classStyle="slide__title" title={title} />
                            <Subtitle
                                classStyle="slide__subtitle"
                                subtitle={subtitle}
                            ></Subtitle>
                            <div className="slide__btn-div">
                                <Button
                                    classStyle="slide__btn"
                                    name={button}
                                    type="button"
                                    link={link}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(Slide);
