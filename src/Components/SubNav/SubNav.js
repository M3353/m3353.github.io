import '../../Util/styles.css';
import './SubNav.css';

import React from 'react';
import { Link } from 'react-router-dom';
import { animated } from 'react-spring';

import Bounce from '../Bounce/Bounce';

function SubNav () {
    const [style1, trigger1] = Bounce({});
    const [style2, trigger2] = Bounce({});
    const [style3, trigger3] = Bounce({});

    return(
        <div>
            <div className = "heading bold darkText exLargeSize">artwork.</div>
            <ul className = "subNav container smallSize bold highlightText">
                <li className = "link">
                    <Link to="/traditional">
                        <animated.span style={style1} onMouseEnter={trigger1}> traditional </animated.span>
                    </Link>
                </li>
                
                <li className = "divider">|</li>

                <li className = "link">
                    <Link to="/digital">
                        <animated.span style={style2} onMouseEnter={trigger2}> digital </animated.span>
                    </Link>
                </li>

                <li className = "divider">|</li>

                <li className = "link">
                    <Link to="/games">
                        <animated.span style={style3} onMouseEnter={trigger3}> games</animated.span>
                    </Link>
                </li>
            </ul>
            <hr className="lightBackground"></hr>
        </div>
    )
}

export default SubNav