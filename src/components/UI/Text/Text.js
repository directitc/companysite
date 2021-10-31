import React from 'react';

const Text = ({ classStyle, text }) => {
    return <span className={classStyle}>{text}</span>;
};

export default React.memo(Text);
