import React from 'react'

import './SocialIcon.css'

export default ({ href, iconClass }) =>
    <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
    >
        <i className={`fab slide ${iconClass}`} />
    </a>
