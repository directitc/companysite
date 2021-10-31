import React from 'react';

const Link = ({ classStyle, href, link }) => {
    return (
        <a href={href} alt="" className={classStyle}>
            {link}
        </a>
    );
};

export default React.memo(Link);
