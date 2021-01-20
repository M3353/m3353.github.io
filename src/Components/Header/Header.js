import './Header.css';

import React from 'react';

import Logo from '../../Util/Icons/logo.png';

function Header(){
    return(
        <div className = "container">
            <img className = "logo" src = {Logo} alt=""></img>
        </div>
    )
}

export default Header