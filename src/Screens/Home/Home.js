import '../../Util/styles.css';
import './Home.css';

import React from 'react';
import { animated, useSpring } from 'react-spring';

import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Content from './Content/Content';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate(${x / 10}px,${y / 10}px)`;

function Home(){
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
    
    return(
        <div onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
            <animated.div
                className = "background backgroundColor" 
                style = {{ transform: props.xy.interpolate(trans1) }}/>

            <div className = "contentWrap">
                <Header />
                <Content/>             
                <Footer />
            </div>
        </div>
    )
}

export default Home