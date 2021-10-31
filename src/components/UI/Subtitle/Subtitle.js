import React from 'react';

const Subtitle = ({ classStyle, subtitle }) => {
    return <span className={classStyle}>{subtitle}</span>;
};

export default React.memo(Subtitle);
