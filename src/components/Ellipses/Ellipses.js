import React from 'react';

import { EllipseGroup, Ellipse1, Ellipse2, Ellipse3 } from './Ellipses.styles';

const Ellipses = () => {
    return (
        <EllipseGroup>
            <Ellipse1 />
            <Ellipse2 />
            <Ellipse3 />
        </EllipseGroup>
    );
};

export default Ellipses;
