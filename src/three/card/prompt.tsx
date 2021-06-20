import * as THREE from 'three';
import { ReactNode, useMemo } from 'react';
import { createPortal, MeshProps, useFrame } from '@react-three/fiber';
import { Camera, MathUtils as M3 } from 'three';
import { animated } from '@react-spring/three';
import * as Card from './primitives';
import { useRef } from 'react';
import { OrthographicCamera, Text } from '@react-three/drei';

interface Props extends MeshProps {
    prompt: string;
}

export default function PromptCardMesh ({prompt, children, ...props}: Props) {
    const shape = useMemo(() => Card.PromptCardShape(), []);
    const geometry = useMemo(() => Card.CardGeometry(shape), [shape]);
    const cam = useRef<Camera>();

    const [scene, target] = useMemo(() => {
        const scene = new THREE.Scene();
        scene.background = new THREE.Color('white');
        const target = new THREE.WebGLMultisampleRenderTarget(2048, 2048, {
            format: THREE.RGBFormat,
            stencilBuffer: false
        });
        target.samples = 8;
        return [scene, target];
    }, []);

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
                    color="#171717"
                    fontSize={10}
                    maxWidth={80}
                    lineHeight={1}
                    letterSpacing={-0.1}
                    textAlign="center"
                    //@ts-ignore
                    text={prompt}
                    font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
                    anchorX="center"
                    anchorY="middle">
                    {prompt}
                </Text>,
                scene
            )}
            <animated.mesh
                {...props}
                rotation={props.rotation || [0, M3.degToRad(90), 0]}
                geometry={geometry}
            >
                <meshPhongMaterial attachArray="material" color='grey' />
                <meshPhongMaterial attachArray="material" color='white' />
                <meshPhongMaterial attachArray="material" map={target.texture} />
            </animated.mesh>
        </>
    )
}
