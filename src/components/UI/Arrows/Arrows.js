import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { FaChevronLeft } from 'react-icons/fa';
import './Arrows.css';

const Arrows = () => {
    return (
        <div className="arrows">
            <FaChevronLeft className="arrow-left" />
            <FaChevronRight className="arrow-right" />
        </div>
    );
};

export default Arrows;
