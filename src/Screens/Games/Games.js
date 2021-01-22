import '../../Util/styles.css';
import '../Gallery.css';

import React from 'react';

import SubNav from '../../Components/SubNav/SubNav';

function Games () {
    return(
        <div className = "galleryContainer"> 
            <SubNav />
            <div className = "darkText bold container">
                Games Gallery Coming Soon!
            </div>
        </div>
    )
}

export default Games