import { Canvas, MeshProps } from '@react-three/fiber';
import React, { useState, useRef, Suspense } from 'react';
import { BackSide, FrontSide, MathUtils as M3 } from 'three';
import CameraController from '../../Atoms/ThreeCameraController';
import Svg from '../../Atoms/ThreeSvg';
import cardBack from '../../Assets/cards/card-back.svg';
import cardFace from '../../Assets/cards/card-face.svg';
import { useSpring } from '@react-spring/three';
import { animated } from '@react-spring/three';

const ThreeOnClickWorkbench:React.FC = () => {
    const boxMesh = useRef<MeshProps | undefined>(undefined);
    const cardMesh = useRef<MeshProps | undefined>(undefined);
    
    const [active, setActive] = useState<boolean>(false);

    const props = useSpring({
        rotation: active ? [0, 0, M3.degToRad(180)] : [0, M3.degToRad(180), 0],
        config: { mass: 20, tension: 250, friction: 100 },
    })

    return (
        <Canvas
            camera={{
                zoom: .5
            }}
        >
            <ambientLight />
            <animated.mesh
                ref={boxMesh}
                position={[-4, 0, 0]}
                onClick={(e) => setActive(!active)}
            >
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial attach="material" color={active ? 'salmon' : 'wheat'} />
            </animated.mesh>
            {/* Elements with a child <group> can't seem to use onClick. */}
            <Suspense fallback={<></>}>
                <group onClick={(e) => {
                    setActive(!active)
                    e.stopPropagation()
                }}>
                <animated.mesh
                    ref={cardMesh}
                    // @ts-ignore
                    rotation={props.rotation}
                    scale={[.5, .5, .5]}
                >
                    <boxGeometry args={[6, 10, .025]} />
                    <meshPhongMaterial attach="material" color='white' />
                    <Svg side={FrontSide} url={cardFace} position={[3, -5, .0126,]} />
                    <Svg side={BackSide} url={cardBack} position={[3, -5, -.0126,]} />
                </animated.mesh>
                </group>
            </Suspense>
            <gridHelper args={[100, 100, `#888`, `#AAA`]} />
            <CameraController />
        </Canvas>
    );
}

export default ThreeOnClickWorkbench;