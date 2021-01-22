import './App.css';
import './Util/styles.css';

import React from 'react';
import { animated, useSpring } from 'react-spring';

import Navigation from './Components/Navigation/Navigation';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate(${x / 10}px,${y / 10}px)`;

function App() {
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))

    return (
      <div onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })} >
        <animated.div
          className = "background backgroundColor" 
          style = {{ transform: props.xy.interpolate(trans1) }}/>
        <Navigation/>
      </div>
    )
}

export default App;
