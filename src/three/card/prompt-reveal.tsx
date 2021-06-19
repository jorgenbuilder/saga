import { useContext, useEffect, Suspense } from 'react';
import { Euler, MathUtils as M3, Vector3 } from 'three';
import { useSpring as useSpring3 } from '@react-spring/three';
import { Canvas, MeshProps } from '@react-three/fiber';
import { AccelerometerContext } from 'context/device-accelerometer';
import DefaultLighting from 'three/lighting';
import PromptCardMesh from 'three/card/prompt';

interface Props extends MeshProps {
    prompt: string;
    revealed: boolean;
}

export default function PromptCardReveal ({
    prompt,
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
        revealed ? 180 : 0,
        revealed ? 0 : 0,
        revealed ? 0 : 0,
    ];

    const posReveal = [
        revealed ? 0 : 0,
        revealed ? 20 : -10,
        revealed ? 0 : 0,
    ]

    const spring1 = useSpring3({
        rotation: [
            M3.degToRad(rotDeviceTilt[0] + rotReveal[0]),
            M3.degToRad(rotDeviceTilt[1] + rotReveal[1]),
            M3.degToRad(rotDeviceTilt[2] + rotReveal[2]),
        ],
        position: [
            M3.degToRad(posDeviceTilt[0] + posReveal[0]),
            M3.degToRad(posDeviceTilt[1] + posReveal[1]),
            M3.degToRad(posDeviceTilt[2] + posReveal[2]),
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
        <Canvas camera={{ zoom: 2 }}>
            {/* TODO: This fallback sucks, obviously */}
            <Suspense fallback={null}>
                <PromptCardMesh
                    prompt={prompt}
                    position={spring1.position as unknown as Vector3}
                    rotation={spring1.rotation as unknown as Euler}
                    scale={spring1.scale as unknown as Vector3}
                    {...props}
                />
            </Suspense>
            <DefaultLighting />
        </Canvas>
    );
}