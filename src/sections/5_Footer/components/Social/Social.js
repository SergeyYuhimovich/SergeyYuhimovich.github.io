import React from 'react';
import './Social.css';

const Social = ( {title, icon, url} ) => {
    return (
        <a className="social" href={url}>
            <span>{title}</span>
        </a>
    )
};

export default Social;
