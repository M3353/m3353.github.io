import './Home.css';

import React from 'react';
import TextLoop from 'react-text-loop';

import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Links from './Links/Links';

function Home(){
    return(
        <div className = "contentWrap">
            <Header />
            <div className = "sectionWrap">
                <div className = "header">
                    I'm
                {" "}<TextLoop 
                            children = {["a Student.", "a Developer.", "an Artist.", "a Problem Solver."]}
                        >
                    </TextLoop>
                </div>
                <div className = "description">
                    My name is Jack Li. I'm an aspiring developer with a passion for the visual arts
                    studying computing and the arts at Yale University.
                </div>
                <Links />
                <hr></hr>
            </div>
            <Footer />
        </div>
    )
}

export default Home