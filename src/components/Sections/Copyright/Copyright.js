import React from 'react';
import Text from '../../UI/Text/Text';
import './Copyright.css';

const Copyright = () => {
    return (
        <div className="w3-padding-16 w3-container copyright-background">
            <Text classStyle={'copyright-text'}
                text={
                    'Copyright © 2021 Direct IT Consulting, LLC. All rights reserved.'
                }
            />
        </div>
    );
};

export default Copyright;
