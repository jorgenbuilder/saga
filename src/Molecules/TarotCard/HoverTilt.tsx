import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
import TarotCard from '.';

const HoverTiltTarotCard:React.FC = () => {
    const [mouse, setMouse] = useState<[number, number, boolean]>([0, 0, false]);
    const [flipped, setFlipped] = useState(false);
    const [mx, my, isActive] = mouse;
    const rotation = flipped ? 0 : 180;

    // I wish I could just add the ref onto the card, but Typescript yells at me
    const ref = useRef<HTMLDivElement>(null);

    let tiltx = 0;
    let tilty = 0;
    if (ref.current && isActive) {
        const rect = ref.current.getBoundingClientRect();
        const center = [rect.width / 2, rect.height / 2];
        if (mx >= center[0]) {
            tiltx = (mx - center[0]) / center[0];
        } else {
            tiltx = -(center[0] - mx) / center[0];
        }
        if (my >= center[0]) {
            tilty = (my - center[1]) / center[1];
        } else {
            tilty = -(center[1] - my) / center[1];
        }
    }
    
    const enterHandler: React.MouseEventHandler<HTMLDivElement> = () => setMouse([mx, my, true]);
    const exitHandler: React.MouseEventHandler<HTMLDivElement> = () => setMouse([mx, my, false]);
    const moveHandler: React.MouseEventHandler<HTMLDivElement> = (e) => {
        const { offsetTop, offsetLeft } = e.currentTarget;
        setMouse([e.pageX - offsetLeft, e.pageY - offsetTop, true]);
    }
    const handleClick: React.MouseEventHandler<HTMLDivElement> = () => setFlipped(!flipped);

    return (
        <motion.div
            ref={ref}
            
        >
            <TarotCard
                style={{
                    transform: `rotateX(${Math.floor(10 * tilty)}deg) rotateY(${rotation - Math.floor(10 * tiltx)}deg)`,
                    backfaceVisibility: 'visible',
                    transition: 'transform .24s ease-out',
                }}
                onClick={handleClick}
                onMouseMove={moveHandler}
                onMouseEnter={enterHandler}
                onMouseLeave={exitHandler}
                // whileHover={{
                //     transform: `rotateX(${Math.floor(10 * tilty)}deg) rotateY(${rotation - Math.floor(10 * tiltx)}deg)`,
                //     transition: {
                //         duration: .24,
                //         ease: 'linear',
                //     }
                // }}
            />
        </motion.div>
    );
}

export default HoverTiltTarotCard;