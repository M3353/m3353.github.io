import '../../../Util/styles.css';
import './Links.css';

import React from 'react';
import { Link } from 'react-router-dom';
import { animated } from 'react-spring';

import Resume from '../../../Assets/Pdfs/Resume.pdf';
import Bounce from '../../../Components/Bounce/Bounce';

function Links() {
    const [style1, trigger] = Bounce({ scale: 1.2 });
    const [style2, trigger2] = Bounce({});
    const [style3, trigger3] = Bounce({});
    const [style4, trigger4] = Bounce({});

    return (
        <ul className = 'linksContainer'>
            <li className = 'resume'>
                <animated.span style = {style1} onMouseEnter={trigger}>
                    <a href={Resume} className=" orangeText bold" target="_blank" rel="noopener noreferrer">resume</a>
                </animated.span>
            </li>
            
            <li className = 'link'>
                <animated.span style = {style2} onMouseEnter={trigger2}>
                    <a href="mailto:li.jack98@gmail.com" className=" orangeText bold" target = "_blank" rel="noopener noreferrer">contact</a>
                </animated.span>
            </li>

            <li className = 'divider bold orangeText'>|</li>
            
            <li className = 'link'>
                <animated.span style = {style3} onMouseEnter={trigger3}>
                    <a href="https://github.com/M3353" className=" orangeText bold" target = "_blank" rel="noopener noreferrer">github</a>
                </animated.span>
            </li>

            <li className = 'divider bold orangeText'>|</li>
            
            <li className = 'link'>
                <animated.span style = {style4} onMouseEnter={trigger4}>
                    <Link to="/traditional"> <span className=" orangeText bold">artwork</span> </Link>
                </animated.span>
            </li>
        </ul>
    )
}

export default Links