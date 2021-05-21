import { MathUtils as M3, Color } from 'three';
import { Canvas } from '@react-three/fiber';
import { EventHandler, MouseEvent, Suspense, useState } from 'react';
import SvgCard from '../../Molecules/ThreeTarotCard'
import { useSpring } from '@react-spring/three';

const DrawScreen: React.FC = () => {

    const [flipped, setFlipped] = useState<boolean>(false);

    const props = useSpring({
        rotation: flipped ? [M3.degToRad(180), M3.degToRad(90), 0] : [0, M3.degToRad(270), 0],
        config: { mass: 20, tension: 25 },
    })

    const handleClick:EventHandler<MouseEvent> = (e) => {
        e.preventDefault();
        setFlipped(!flipped);
    }

    return (
        <>
            <Canvas
                camera={{
                    position: [10, 0, 0],
                }}
            >
                {/* <pointLight intensity={2} position={[.5, 8, 4]} color={new Color('hsl(43, 100%, 40%)').convertSRGBToLinear()} /> */}
                <spotLight intensity={2} position={[.5, 8, 3]} rotation={[M3.degToRad(180), 0, 0]} color={new Color('hsl(43, 100%, 50%)').convertSRGBToLinear()} />
                <ambientLight intensity={.033} color={new Color('hsl(43, 100%, 50%)').convertSRGBToLinear()} />
                {/* <spotLight intensity={.5} position={[.5, -8, -3]} color={new Color('hsl(351, 83%, 50%)').convertSRGBToLinear()} /> */}
                <Suspense fallback={null}>
                    {/* @ts-ignore */}
                    <SvgCard rotation={props.rotation} />
                </Suspense>
                {/* <gridHelper args={[100, 100, `#888`, `#AAA`]} /> */}
                {/* <axesHelper /> */}
            </Canvas>
            <button onClick={handleClick}>
                Draw
            </button>
        </>
    );
}

export default DrawScreen;