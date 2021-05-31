import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import TarotCard from '.';
import Float from '../../Atoms/Animation/Float';

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
        const [cx, cy] = [rect.width / 2, rect.height / 2];
        const [x, y] = [mx - rect.left, my - rect.top];
        if (x >= cx) {
            tiltx = (x - cx) / cx;
        } else {
            tiltx = -(cx - x) / cx;
        }
        if (y >= cy) {
            tilty = (y - cy) / cy;
        } else {
            tilty = -(cy - y) / cy;
        }
    }
    
    const enterHandler: React.MouseEventHandler<HTMLDivElement> = () => setMouse([mx, my, true]);
    const exitHandler: React.MouseEventHandler<HTMLDivElement> = () => setMouse([mx, my, false]);
    const moveHandler: React.MouseEventHandler<HTMLDivElement> = (e) => {
        setMouse([e.pageX, e.pageY, true]);
    }
    const handleClick: React.MouseEventHandler<HTMLDivElement> = () => setFlipped(!flipped);

    return (
        <HoverTiltDiv ref={ref}>
            <TarotCard
                style={{
                    transform: `rotateX(${Math.floor(15 * tilty)}deg) rotateY(${rotation - Math.floor(15 * tiltx)}deg)`,
                    backfaceVisibility: 'visible',
                    transition: 'transform .24s ease-out',
                }}
                onClick={handleClick}
                onMouseMove={moveHandler}
                onMouseEnter={enterHandler}
                onMouseLeave={exitHandler}
            />
        </HoverTiltDiv>
    );
}

export default HoverTiltTarotCard;
const HoverTiltDiv = styled.div`
// animation: ${Float} 3.8s ease-out infinite;
// animation-direction: alternate;
`;