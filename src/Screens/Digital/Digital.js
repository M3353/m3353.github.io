import '../../Util/styles.css';
import '../Gallery.css';

import React from 'react';

import SubNav from '../../Components/SubNav/SubNav';

function Digital () {
    return(
        <div className = "galleryContainer"> 
            <SubNav />
            <div className = "darkText bold container">
                Digital Gallery Coming Soon!
            </div>
        </div>
    )
}

export default Digital