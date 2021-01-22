import '../../Util/styles.css';
import '../Gallery.css';

import React from 'react';

import SubNav from '../../Components/SubNav/SubNav';

function Traditional() {
    return(
        <div className = "galleryContainer"> 
            <SubNav />
            <div className = "darkText medium mediumSize container">
                Traditional Gallery Coming Soon!
            </div>
        </div>
    )
}

export default Traditional