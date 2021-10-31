import React from 'react';

const Title = ({ classStyle, title }) => {
    return <h1 className={classStyle}>{title}</h1>;
};

export default React.memo(Title);
