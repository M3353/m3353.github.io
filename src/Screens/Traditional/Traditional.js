import '../../Util/styles.css';
import '../Gallery.css';

import React from 'react';

import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import SubNav from '../../Components/SubNav/SubNav';

function Traditional() {
    return(
        <div className="contentWrap unInteractableBackground backgroundColor">
            <Header/>
            <div className = "galleryContainer"> 
                <SubNav />
                <div className = "darkText medium mediumSize container" style = {{ height: 2000 }}>
                    Gallery Coming Soon!
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Traditional