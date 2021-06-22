import * as THREE from 'three';
import { useContext, useEffect, Suspense } from 'react';
import { useSpring as useSpring3 } from '@react-spring/three';
import { Canvas, MeshProps, ThreeEvent } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import { AccelerometerContext } from 'context/device-accelerometer';
import { CardDraw } from 'services/cards/draws';
import { RiderWaiteTarotSkin, TarotDeckSkin } from 'assets/cards';
import TarotCardMesh from 'three/card/tarot';
import DefaultLighting from 'three/lighting';
import BlankTarotCardMesh from './tarot-blank';
import { useState } from 'react';

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

    const { acceleration, popPermissionToast, } = useContext(AccelerometerContext);
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

    const rotReveal = [
        (revealed ? 1 : 0),
        (revealed ? 0 : -180),
        (revealed ? 0 : 0),
    ];

    const rotOrientation = [0, 0, draw?.upsidedown ? -180 : 0,];

    const scaHover = [hover ? .05 : 0, hover ? .05 : 0, 0];

    function hoverTilt (e: ThreeEvent<PointerEvent>) {
        var bbox = new THREE.Box3().setFromObject(e.eventObject);
        setMx(e.point.x >= 0 ? e.point.x / bbox.max.x : - e.point.x / bbox.min.x);
        setMy(e.point.y >= 0 ? e.point.y / bbox.max.y : - e.point.y / bbox.min.y);
    }

    const spring1 = useSpring3({
        rotation: [
            THREE.MathUtils.degToRad(rotDeviceTilt[0] + rotReveal[0] + rotOrientation[0] + my * 5),
            THREE.MathUtils.degToRad(rotDeviceTilt[1] + rotReveal[1] + rotOrientation[1] - mx * 5),
            THREE.MathUtils.degToRad(rotDeviceTilt[2] + rotReveal[2] + rotOrientation[2]),
        ],
        position: [
            // Lol why did I degToRad this?
            THREE.MathUtils.degToRad(posDeviceTilt[0]),
            THREE.MathUtils.degToRad(posDeviceTilt[1]),
            THREE.MathUtils.degToRad(posDeviceTilt[2]),
        ],
        scale: [
            1 + scaHover[0],
            1 + scaHover[1],
            1 + scaHover[2],
        ],
        config: {
            mass: 10,
            tension: 300,
            friction: 85,
        },
    });

    // Dunno why this isn't doing anything
    const spring2 = useSpring3({
        position: [
            revealed ? 0 : 0,
            revealed ? 0 : 0,
            10
        ],
        config: {
            mass: 10,
            tension: 300,
            friction: 85,
        },
    })

    return (
        <Canvas camera={{ zoom: 1.2 }}>
            <Suspense fallback={<BlankTarotCardMesh
                position={spring1.position as unknown as THREE.Vector3}
                rotation={spring1.rotation as unknown as THREE.Euler}
                skin={skin}
                {...props}
            />}>
                <Preload all />{/* Dunno if this actually does anything */}
                <TarotCardMesh
                    onPointerMove={hoverTilt}
                    onPointerEnter={() => setHover(true)}
                    onPointerLeave={() => { setHover(false); setMx(0); setMy(0); }}
                    position={spring1.position as unknown as THREE.Vector3}
                    rotation={spring1.rotation as unknown as THREE.Euler}
                    scale={spring1.scale as unknown as THREE.Vector3}
                    skin={skin}
                    draw={draw}
                    {...props}
                />
            </Suspense>
            <DefaultLighting />
            <pointLight
                position={spring2.position as unknown as THREE.Vector3}
                intensity={100}
                color={'white'}
            />
        </Canvas>
    );
}