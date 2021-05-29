import { MathUtils as M3, Color } from 'three';
import { Canvas, ThreeEvent } from '@react-three/fiber';
import React, { EventHandler, MouseEvent, Suspense, useContext, useEffect, useState } from 'react';
import Card from '../../Molecules/ThreeTarotCard';
import { useSpring } from '@react-spring/three';
import { AccelerometerContext } from '../../Providers/DeviceAccelerometer';

const DrawScreen: React.FC<{CardComponent?: React.FC, lighting?: React.ReactNode}> = ({ CardComponent = Card, lighting }) => {

    const { acceleration, popPermissionToast, permission } = useContext(AccelerometerContext);

    const [flipped, setFlipped] = useState<boolean>(false);
    const [rando, setRando] = useState<number>(0);

    const props = useSpring({
        rotation: [
            M3.degToRad(-acceleration.alpha * .1 + (flipped ? 0 : 0)),
            M3.degToRad(-acceleration.beta * .1 + (flipped ? 0 : -180)),
            M3.degToRad(-acceleration.gamma * .1 + (flipped ? 0 : 180)),
        ],
        position: [
            M3.degToRad(acceleration.x * 50),
            M3.degToRad(acceleration.y * 50),
            0
        ],
        config: {
            mass: 20,
            tension: 250,
            friction: 100,
        }
    });

    const handleClick:EventHandler<MouseEvent>|ThreeEvent<MouseEvent> = (e) => {
        e.stopPropagation();
        setFlipped(!flipped);
        if (!flipped) {
            setRando(Math.random());
        }
    }

    useEffect(() => {
        if (permission === 'pending') {
            popPermissionToast();
        }
    }, [permission, popPermissionToast]);

    const lightingElements = lighting ? lighting : <>
        <spotLight intensity={2} position={[-4, 8, 5]} rotation={[M3.degToRad(180), 0, 0]} color={new Color('hsl(43, 100%, 50%)').convertSRGBToLinear()} />
        <ambientLight intensity={.1} color={new Color('hsl(43, 100%, 50%)').convertSRGBToLinear()} />
    </>;

    return (
        <>
            <Canvas
                camera={{
                    zoom: .62,
                }}
            >
                {lightingElements}
                <Suspense fallback={null}>
                    {/* @ts-ignore */}
                    <CardComponent rotation={props.rotation} position={props.position} randomSeed={rando} onClick={handleClick} />
                </Suspense>
            </Canvas>
        </>
    );
}

export default DrawScreen;