import * as THREE from 'three';
import { useMemo } from 'react';
import { createPortal, MeshProps, useFrame } from '@react-three/fiber';
import { Camera, MathUtils as M3 } from 'three';
import { animated } from '@react-spring/three';
import * as Card from './primitives';
import { useRef } from 'react';
import { OrthographicCamera, Text } from '@react-three/drei';
import Back from 'assets/prompt-card-back.png';
import Almendra from '@fontsource/almendra/files/almendra-all-400-normal.woff';

interface Props extends MeshProps {
    prompt: string;
}

export default function PromptCardMesh ({prompt, children, ...props}: Props) {
    const cam = useRef<Camera>();
    const shape = useMemo(() => Card.PromptCardShape(), []);
    const geometry = useMemo(() => Card.CardGeometry(shape), [shape]);

    const [scene, target] = useMemo(() => {
        const scene = new THREE.Scene();
        scene.background = new THREE.Color('white');
        const target = new THREE.WebGLMultisampleRenderTarget(2048, 2048);
        return [scene, target];
      }, []);

    const back = useMemo(() => Card.CardTextureJPEG({
        shape,
        filePath: Back,
        padding: [0, .075]
    }), [shape]);

    useFrame(state => {
        state.gl.setRenderTarget(target);
        //@ts-ignore
        state.gl.render(scene, cam.current);
        state.gl.setRenderTarget(null);
    });

    return (
        <>
            <OrthographicCamera ref={cam} position={[0, 0, 1]} zoom={10} />
            {createPortal(
                <Text
                    color="#ffffff"
                    fontSize={4}
                    maxWidth={50}
                    textAlign="center"
                    font={Almendra}
                    anchorX="center"
                    anchorY="middle"
                    outlineWidth={0}
                    outlineOffsetX={.5}
                    outlineOffsetY={.5}
                    outlineColor={'black'}
                >
                    {prompt}
                </Text>,
                scene
            )}
            <animated.mesh
                {...props}
                rotation={props.rotation || [0, M3.degToRad(90), 0]}
                geometry={geometry}
            >
                <meshStandardMaterial attachArray="material" map={back} />
                <meshStandardMaterial attachArray="material" color='white' />
                <meshStandardMaterial attachArray="material" map={target.texture} precision={'highp'} />
            </animated.mesh>
        </>
    )
}
