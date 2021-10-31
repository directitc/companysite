import React from 'react';

const Icon = ({ classStyle, icon }) => {
    return <span className={classStyle}>{icon}</span>;
};

export default React.memo(Icon);
