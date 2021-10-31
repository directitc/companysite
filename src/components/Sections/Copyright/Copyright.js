import React from 'react';
import Text from '../../UI/Text/Text';
import './Copyright.css';

const Copyright = () => {
    const copyrightText =
        'Copyright © 2021 Direct IT Consulting, LLC. All rights reserved.';

    return (
        <div className="copyright__background">
            <Text classStyle="copyright__text" text={copyrightText} />
        </div>
    );
};

export default React.memo(Copyright);
