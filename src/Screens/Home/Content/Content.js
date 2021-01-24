import '../../../Util/styles.css';
import './Content.css';

import React from 'react';
import TextLoop from 'react-text-loop';

import Links from '../Links/Links';

function Content () {
    return (
        <div className = "sectionWrap">
            <div className = "header extraBold darkText largeSize">
                I'm {" "}
                <TextLoop 
                        children = {["a Student.", "a Developer.", "an Artist.", "a Problem Solver."]}>
                </TextLoop>
            </div>
            <section className = "description medium lightText mediumSize">
                My name is Jack Li. I'm an aspiring developer with a passion for the visual arts
                studying computing and the arts at Yale University.
            </section>
            <Links />
            <hr className = "lightBackground"/>
        </div>
    )
}

export default Content