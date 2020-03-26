import React from 'react'

import './SocialLink.css'

export default ({ href, iconClass }) =>
    <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
    >
        <i className={`fab slide ${iconClass}`} />
    </a>
