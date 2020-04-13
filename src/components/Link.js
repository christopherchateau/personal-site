import React from 'react'
// import images/playlist-1.png

import './Link.css'

export default ({
    href,
    iconClass = null,
    // bgImg = null,
}) =>
    <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        // style={{ backgroundImage: `url(${bgImg})` }}
    >
        {/* {console.log(bgImg)} */}
        {iconClass && <i className={iconClass} />}
    </a>

