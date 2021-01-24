import './cursor.css';

import React, { useEffect, useRef } from 'react';


function Cursor() {
    const cursorRef = useRef(null);

    useEffect(() => {
        document.addEventListener('mousemove', (event) => {
            const {clientX, clientY} = event;
            const mouseX = clientX - cursorRef.current.clientWidth / 2;
            const mouseY = clientY - cursorRef.current.clientHeight / 2;

            cursorRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`
        });
    }, [])

    return <div className="cursor" ref = {cursorRef}/>
}

export default Cursor