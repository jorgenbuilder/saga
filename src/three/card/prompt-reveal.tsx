import * as THREE from 'three';
import { useEffect, Suspense, useState } from 'react';
import { Euler, MathUtils as M3, Vector3 } from 'three';
import { useSpring as useSpring3 } from '@react-spring/three';
import { Canvas, MeshProps, ThreeEvent } from '@react-three/fiber';
import { useAccelerometer } from 'src/context/device-accelerometer';
import DefaultLighting from 'src/three/lighting';
import PromptCardMesh from 'src/three/card/prompt';
import { DecksContext, useDecks } from 'src/context/decks';

interface Props extends MeshProps {
    prompt: string;
    revealed: boolean;
}

export default function PromptCardReveal ({
    prompt,
    revealed,
    ...props
}: Props) {

    const { acceleration, popPermissionToast } = useAccelerometer();
    const [mx, setMx] = useState<number>(0);
    const [my, setMy] = useState<number>(0);
    const [hover, setHover] = useState<boolean>(false);
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

    const scaHover = [hover ? .05 : 0, hover ? .05 : 0, 0];

    const rotReveal = [
        revealed ? 0 : -180,
        revealed ? 0 : 0,
        revealed ? 0 : 0,
    ];

    const posReveal = [
        revealed ? 0 : 0,
        revealed ? 0 : 0,
        revealed ? 0 : 0,
    ]

    const spring1 = useSpring3({
        rotation: [
            M3.degToRad(rotDeviceTilt[0] + rotReveal[0] + my * 5),
            M3.degToRad(rotDeviceTilt[1] + rotReveal[1] - mx * 5),
            M3.degToRad(rotDeviceTilt[2] + rotReveal[2]),
        ],
        position: [
            M3.degToRad(posDeviceTilt[0] + posReveal[0]),
            M3.degToRad(posDeviceTilt[1] + posReveal[1]),
            M3.degToRad(posDeviceTilt[2] + posReveal[2]),
        ],
        scale: [
            1 + scaHover[0],
            1 + scaHover[1],
            1 + scaHover[2],
        ],
        config: {
            mass: 20,
            tension: 250,
            friction: 100,
        },
    });

    function hoverTilt (e: ThreeEvent<PointerEvent>) {
        var bbox = new THREE.Box3().setFromObject(e.eventObject);
        setMx(e.point.x >= 0 ? e.point.x / bbox.max.x : - e.point.x / bbox.min.x);
        setMy(e.point.y >= 0 ? e.point.y / bbox.max.y : - e.point.y / bbox.min.y);
    };

    const decks = useDecks();

    return (
        // @ts-ignore
        <Canvas colorManagement pixelRatio={window.devicePixelRatio} camera={{ position: [0, 0, 4] }}>
            <DecksContext.Provider value={decks}>
                {/* TODO: This fallback sucks, obviously. No one really sees it, though. */}
                <Suspense fallback={null}>
                    <PromptCardMesh
                        onPointerMove={hoverTilt}
                        onPointerEnter={() => setHover(true)}
                        onPointerLeave={() => { setHover(false); setMx(0); setMy(0); }}
                        prompt={prompt}
                        position={spring1.position as unknown as Vector3}
                        rotation={spring1.rotation as unknown as Euler}
                        scale={spring1.scale as unknown as Vector3}
                        {...props}
                    />
                </Suspense>
                <DefaultLighting />
            </DecksContext.Provider>
        </Canvas>
    );
}