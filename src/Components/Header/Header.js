import './Header.css';

import React from 'react';
import { Link } from 'react-router-dom';
import { animated } from 'react-spring';

import Logo from '../../Assets/Icons/logo.png';
import Bounce from '../Bounce/Bounce';

function Header(){
    const [style, trigger] = Bounce({ scale: 1, y: -10 });

    return(
        <div className = "container">
            <Link to='/'>
                <animated.span style = {style} onMouseEnter={trigger}>
                    <img className = "logo" src = {Logo} alt=""></img>
                </animated.span>
            </Link>
        </div>
    )
}

export default Header