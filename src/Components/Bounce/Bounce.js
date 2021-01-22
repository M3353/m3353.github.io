import React from 'react';
import { useSpring } from 'react-spring';

function Bounce({ 
        x = 0, 
        y = 0,
        timing = 300,
        scale = 1.1,
        rotate = 0,
        springConfig = {
            tension: 300,
            friction: 15,
          },
    }) {
    const [isToggled, setIsToggled] = React.useState(false);

    const style = useSpring({
        display: `inline-block`,
        backfaceVisibility: 'hidden',
        transform: isToggled
            ? `translate(${x}px, ${y}px)
               scale(${scale})
               rotate(${rotate}deg)`
            : `translate(0px, 0px)
               scale(1)
               rotate(0deg)`,
        config: springConfig,
    });

    React.useEffect(() => {
        if (!isToggled){
            return;
        }

        const timeoutId = window.setTimeout(() => {
            setIsToggled(false);
        }, timing);

        return () => {
            window.clearTimeout(timeoutId);
        };
    }, [isToggled, timing]);

    const trigger = React.useCallback(() => {
        setIsToggled(true);
    }, []);

    return [style, trigger];
}

export default Bounce