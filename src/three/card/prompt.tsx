import * as THREE from 'three';
import { useMemo } from 'react';
import { createPortal, MeshProps, useFrame } from '@react-three/fiber';
import { Camera, MathUtils as M3 } from 'three';
import { animated } from '@react-spring/three';
import * as Card from './primitives';
import { useRef } from 'react';
import { Text } from '@react-three/drei';
import Back from 'assets/cards/rider-waite/prompt-back.jpg';
import Almendra from '@fontsource/almendra/files/almendra-all-700-italic.woff';

interface Props extends MeshProps {
    prompt: string;
}

export default function PromptCardMesh ({prompt, children, ...props}: Props) {
    const cam = useRef<Camera>();
    const shape = useMemo(() => Card.PromptCardShape(), []);
    const geometry = useMemo(() => Card.CardGeometry(shape), [shape]);

    const [scene, target] = useMemo(() => {
        const scene = new THREE.Scene();
        scene.background = new THREE.Color('#fff');
        const target = new THREE.WebGLMultisampleRenderTarget(2048, 2048, {

        });
        target.texture.offset.set(.5, .5);
        target.repeat.set(1 / 4.75, 1 / 2.5);
        return [scene, target];
      }, []);

    const back = useMemo(() => Card.CardTextureJPEG({
        shape,
        filePath: Back,
        padding: [0, .075]
    }), [shape]);

    useFrame(state => {
        if (!cam.current) return;
        state.gl.setRenderTarget(target);
        state.gl.render(scene, cam.current);
        state.gl.setRenderTarget(null);
    });

    return (
        <>
            <camera ref={cam} />
            {createPortal(
                <Text
                    color="#050505"
                    fontSize={.16}
                    maxWidth={1.5}
                    textAlign="left"
                    font={Almendra}
                    // outlineWidth={0}
                    // outlineOffsetX={.015}
                    // outlineOffsetY={.015}
                    // outlineColor='#000'
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
                <meshStandardMaterial attachArray="material" color='#222' />
                <meshStandardMaterial attachArray="material" map={target.texture} precision={'highp'} />
            </animated.mesh>
        </>
    )
}
