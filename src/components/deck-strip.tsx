import { Suspense, useEffect, useState } from 'react';
import * as THREE from 'three';
import styled from 'styled-components';
import { Canvas, ThreeEvent } from '@react-three/fiber';
import { useSpring } from '@react-spring/three';

import { Deck, DecksContext, useDecks } from 'src/context/decks';
import TarotCardMesh from 'src/three/card/tarot';
import BlankTarotCardMesh from 'src/three/card/tarot-blank';

import { useAccelerometer } from 'src/context/device-accelerometer';

const StyledCanvas = styled(Canvas)`
position: absolute;
top: 0;
left: 0;
width: 275 * 80;
height: 475;
`;

export default function DeckStrip({ deck }: { deck?: Deck }) {
    const decks = useDecks();
    decks.viewDeck = deck;
    const width = 2.75;
    const [scroll, setScroll] = useState<number>(0);
    const cards = [78];
    for (let i = 0; i < 78; i++) { cards.push(i) }

    return (
        <>
            <StyledCanvas camera={{position: [0, 0, 5]}}>
                <DecksContext.Provider value={decks}>
                    {cards.map((card, i) => {
                        const pos = (i) * (width * 1.5);
                        return <Slide key={`slide-${i}`} cardIndex={card} pos={pos} scroll={scroll} onClick={() => setScroll(-i * (width * 1.5))} />
                    })}
                    <ambientLight
                        intensity={.1}
                        color={new THREE.Color('hsl(43, 100%, 100%)').convertSRGBToLinear()}
                    />
                    <spotLight
                        intensity={1}
                        position={[0, -5, 10]}
                        rotation={[THREE.MathUtils.degToRad(180), 0, 0]}
                        color={new THREE.Color('hsl(43, 100%, 100%)').convertSRGBToLinear()}
                    />
                </DecksContext.Provider>
            </StyledCanvas>
        </>
    );
};

const config = {
    mass: 10,
    tension: 300,
    friction: 85,
}

function Slide ({ pos, scroll, cardIndex, onClick }: { onClick?: () => void, pos: number, scroll: number, cardIndex: number }) {
    const { acceleration, popPermissionToast, } = useAccelerometer();
    const [mx, setMx] = useState<number>(0);
    const [my, setMy] = useState<number>(0);
    const [hover, setHover] = useState<boolean>(false);

    useEffect(popPermissionToast, [popPermissionToast]);

    const rotDeviceTilt = [
        -acceleration.alpha * .1,
        -acceleration.beta * .1,
        -acceleration.gamma * .1,
    ];

    const scaHover = [hover ? .05 : 0, hover ? .05 : 0, 0];

    function hoverTilt (e: ThreeEvent<PointerEvent>) {
        var bbox = new THREE.Box3().setFromObject(e.eventObject);
        setMx(e.point.x >= 0 ? e.point.x / bbox.max.x : - e.point.x / bbox.min.x);
        setMy(e.point.y >= 0 ? e.point.y / bbox.max.y : - e.point.y / bbox.min.y);
    }

    const springProps = useSpring({
        position: [pos + scroll, 0, 0] as unknown as THREE.Vector3,
        rotation: [
            THREE.MathUtils.degToRad(rotDeviceTilt[0] + my * 5),
            THREE.MathUtils.degToRad(rotDeviceTilt[1] - mx * 5),
            THREE.MathUtils.degToRad(rotDeviceTilt[2]),
        ] as unknown as THREE.Vector3,
        scale: [
            1 + scaHover[0],
            1 + scaHover[1],
            1 + scaHover[2],
        ] as unknown as THREE.Vector3,
        config
    });
    const props = {
        ...springProps,
        onPointerMove: hoverTilt,
        onPointerEnter: () => setHover(true),
        onPointerLeave: () => { setHover(false); setMx(0); setMy(0); },
    };
    return <>
        <Suspense fallback={<BlankTarotCardMesh {...props} plain={true} />}>
            <Suspense fallback={<BlankTarotCardMesh {...props} plain={false} />}>
                <TarotCardMesh {...props} cardIndex={cardIndex} onClick={onClick} />
            </Suspense>
        </Suspense>
    </>
};