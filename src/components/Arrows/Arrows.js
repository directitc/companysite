import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ArrowGroup, ArrowLeft, ArrowRight } from './Arrows.styles';

const Arrows = () => {
    return (
        <ArrowGroup>
            <FontAwesomeIcon icon={['fas', 'chevron-right']} />
            <FontAwesomeIcon icon={['fas', 'coffee']} />
        </ArrowGroup>
    );
};

export default Arrows;
