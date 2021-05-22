import { MathUtils as M3, Color } from 'three';
import { Canvas, ThreeEvent } from '@react-three/fiber';
import { EventHandler, MouseEvent, Suspense, useContext, useState } from 'react';
import SvgCard from '../../Molecules/ThreeTarotCard'
import { useSpring } from '@react-spring/three';
import { DeviceAccelerometerContext } from '../../Providers/DeviceAccelerometer';

const DrawScreen: React.FC = () => {

    const { acceleration } = useContext(DeviceAccelerometerContext);

    const [flipped, setFlipped] = useState<boolean>(false);
    const [rando, setRando] = useState<number>(0);

    const props = useSpring({
        // flipped ? [M3.degToRad(180), M3.degToRad(90), 0] : [0, M3.degToRad(270), 0],
        rotation: [
            M3.degToRad(-acceleration.alpha * .1 + (flipped ? 0 : 0)),
            M3.degToRad(-acceleration.beta * .1 + (flipped ? 0 : -180)),
            M3.degToRad(-acceleration.gamma * .1 + (flipped ? -180 : 0)),
        ],
        position: [
            M3.degToRad(acceleration.x * 50),
            M3.degToRad(acceleration.y * 50),
            0
        ],
        // mass: 20, tension: 250, friction: 100
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

    return (
        <>
            <Canvas
                camera={{
                    zoom: .62,
                }}
            >
                <spotLight intensity={2} position={[-4, 8, 5]} rotation={[M3.degToRad(180), 0, 0]} color={new Color('hsl(43, 100%, 50%)').convertSRGBToLinear()} />
                <ambientLight intensity={.1} color={new Color('hsl(43, 100%, 50%)').convertSRGBToLinear()} />
                <Suspense fallback={null}>
                    {/* @ts-ignore */}
                    <SvgCard rotation={props.rotation} position={props.position} giraffe={rando} onClick={handleClick} />
                </Suspense>
            </Canvas>
            <button onClick={handleClick}>
                Draw
            </button>
        </>
    );
}

export default DrawScreen;