import './Links.css';

import React from 'react';
import { animated } from 'react-spring';

import Bounce from '../../../Components/Bounce/Bounce';
import Resume from '../../../Util/Pdfs/Resume.pdf';

function Links() {
    const [style1, trigger] = Bounce({ scale: 1.2 });
    const [style2, trigger2] = Bounce({});
    const [style3, trigger3] = Bounce({});
    const [style4, trigger4] = Bounce({});

    return (
        <div className = 'linksContainer'>
            <div className = 'resume'>
                <animated.span style = {style1} onMouseEnter={trigger}>
                    <a href={Resume} target="_blank" rel="noopener noreferrer">resume</a>
                </animated.span>
            </div>
            
            <div className = 'link'>
                <animated.span style = {style2} onMouseEnter={trigger2}>
                    <a href="mailto:li.jack98@gmail.com" target = "_blank" rel="noopener noreferrer">contact</a>
                </animated.span>
            </div>

            <div className = 'divider'>|</div>
            
            <div className = 'link'>
                <animated.span style = {style3} onMouseEnter={trigger3}>
                    <a href="https://github.com/M3353" target = "_blank" rel="noopener noreferrer">github</a>
                </animated.span>
            </div>

            <div className = 'divider'>|</div>
            
            <div className = 'link'>
                <animated.span style = {style4} onMouseEnter={trigger4}>
                    <a href="/">artwork</a>
                </animated.span>
            </div>
        </div>
    )
}

export default Links