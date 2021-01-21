import './Header.css';

import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../Assets/Icons/logo.png';

function Header(){
    return(
        <div className = "container">
            <Link to='/'><img className = "logo" src = {Logo} alt=""></img></Link>
        </div>
    )
}

export default Header