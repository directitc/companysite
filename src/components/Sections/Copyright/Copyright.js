import React from 'react';
import Text from '../../UI/Text/Text';
import './Copyright.css';

const Copyright = () => {
    const copyrightText =
        'Copyright © 2021 Direct IT Consulting, LLC. All rights reserved.';

    return (
        <div className="w3-padding-16 w3-container copyright-background">
            <Text classStyle="copyright-text" text={copyrightText} />
        </div>
    );
};

export default Copyright;
