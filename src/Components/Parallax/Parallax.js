import { useEffect, useState } from 'react';
import React from 'react';
import { useSpring } from 'react-spring';

function Parallax (
    xy = [0, 0],
    springConfig = {
        mass: 10,
        tension: 550,
        friction: 140,
      },
){
    const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
    
    xy = calc(x, y);

    const style = useSpring({
        transform: `translate(${x / 10}px, ${y / 10}px)`,
        config: springConfig
    })

    return [style];
}

export default Parallax