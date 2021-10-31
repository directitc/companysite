import React from 'react';

const Image = ({ classStyle, src }) => {
    return <img className={classStyle} src={src} alt="" />;
};

export default React.memo(Image);
