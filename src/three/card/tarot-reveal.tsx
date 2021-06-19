import { useContext, useEffect, Suspense } from 'react';
import { Color, Euler, MathUtils as M3, Vector3 } from 'three';
import { useSpring as useSpring3 } from '@react-spring/three';
import { Canvas, MeshProps } from '@react-three/fiber';
import { AccelerometerContext } from '../../context/device-accelerometer';
import { CardDraw } from '../../services/cards/draws';
import { RiderWaiteTarotSkin, TarotDeckSkin } from '../../assets/cards';
import TarotCardMesh from './tarot';

interface Props extends MeshProps {
    draw: CardDraw;
    skin?: TarotDeckSkin;
    revealed: boolean;
}

export default function TarotCardReveal ({
    draw,
    skin = RiderWaiteTarotSkin,
    revealed,
    ...props
}: Props) {

    const { acceleration, popPermissionToast } = useContext(AccelerometerContext);
    useEffect(popPermissionToast, [popPermissionToast]);

    const rotDeviceTilt = [
        -acceleration.alpha * .1,
        -acceleration.beta * .1,
        -acceleration.gamma * .1,
    ];

    const posDeviceTilt = [
        0,  // acceleration.x * 50,
        0,  // acceleration.y * 50,
        0
    ];

    const scaDeviceTilt = [
        0,
        0,
        0,
    ]

    const rotReveal = [
        (revealed ? 1 : 0),
        (revealed ? 0 : -180),
        (revealed ? 0 : 0),
    ];

    const rotOrientation = [0, 0, draw?.upsidedown ? -180 : 0,];

    const spring1 = useSpring3({
        rotation: [
            M3.degToRad(rotDeviceTilt[0] + rotReveal[0] + rotOrientation[0]),
            M3.degToRad(rotDeviceTilt[1] + rotReveal[1] + rotOrientation[1]),
            M3.degToRad(rotDeviceTilt[2] + rotReveal[2] + rotOrientation[2]),
        ],
        position: [
            M3.degToRad(posDeviceTilt[0]),
            M3.degToRad(posDeviceTilt[1]),
            M3.degToRad(posDeviceTilt[2]),
        ],
        scale: [
            1 + scaDeviceTilt[0],
            1 + scaDeviceTilt[1],
            1 + scaDeviceTilt[2],
        ],
        config: {
            mass: 20,
            tension: 250,
            friction: 100,
        },
    });

    return (
        <Canvas camera={{ zoom: 1.2 }}>
            {/* TODO: This fallback sucks, obviously */}
            <Suspense fallback={null}>
                <TarotCardMesh
                    position={spring1.position as unknown as Vector3}
                    rotation={spring1.rotation as unknown as Euler}
                    scale={spring1.scale as unknown as Vector3}
                    skin={skin}
                    draw={draw}
                    {...props}
                />
            </Suspense>
            {/* TODO: Lighting elements could be nicer to look at */}
            <spotLight intensity={2} position={[-4, 8, 5]} rotation={[M3.degToRad(180), 0, 0]} color={new Color('hsl(43, 100%, 100%)').convertSRGBToLinear()} />
            <ambientLight intensity={.1} color={new Color('hsl(43, 100%, 100%)').convertSRGBToLinear()} />
        </Canvas>
    );
}