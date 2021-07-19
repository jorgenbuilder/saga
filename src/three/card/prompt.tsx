import * as THREE from 'three';
import { Suspense, useMemo } from 'react';
import { createPortal, MeshProps, useFrame } from '@react-three/fiber';
import { Camera, MathUtils as M3 } from 'three';
import { animated } from '@react-spring/three';
import * as Card from './primitives';
import { useRef } from 'react';
import { Text, OrthographicCamera } from '@react-three/drei';
import Almendra from '@fontsource/almendra/files/almendra-all-400-italic.woff';
import CardTexture from './primitives/texture';

interface Props extends MeshProps {
    prompt: string;
}

function PromptCardFace({ text }: { text: string }) {
    return (
        <>
            <mesh>
                <Text
                    color="#050505"
                    fontSize={4}
                    maxWidth={38}
                    textAlign="left"
                    font={Almendra}
                    // @ts-ignore
                    sdfGlyphSize={256}
                    // outlineWidth={0}
                    // outlineOffsetX={.015}
                    // outlineOffsetY={.015}
                    // outlineColor='#000'
                >
                    {text}
                </Text>
            </mesh>
        </>
    );
}

export default function PromptCardMesh({ prompt, children, ...props }: Props) {
    const cam = useRef<Camera>();
    const shape = useMemo(() => Card.PromptCardShape(), []);
    const geometry = useMemo(() => Card.CardGeometry(shape), [shape]);

    const [scene, target] = useMemo(() => {
        const scene = new THREE.Scene();
        scene.background = new THREE.Color('#fff');
        const target = new THREE.WebGLMultisampleRenderTarget(2048, 2048);
        target.samples = 8;
        return [scene, target];
    }, []);

    useFrame(state => {
        if (!cam.current) return;
        state.gl.setRenderTarget(target);
        state.gl.render(scene, cam.current);
        state.gl.setRenderTarget(null);
    });

    return (
        <>
            <OrthographicCamera ref={cam} position={[0, 0, 10]} zoom={10} />
            {createPortal(<PromptCardFace text={prompt} />, scene)}
            <animated.mesh
                {...props}
                rotation={props.rotation || [0, M3.degToRad(90), 0]}
                geometry={geometry}
            >
                <Suspense fallback={<meshStandardMaterial attachArray="material" color='#222' />}>
                    <CardTexture index={79} />
                </Suspense>
                <meshStandardMaterial attachArray="material" color='#222' />
                <meshStandardMaterial attachArray="material" map={target.texture} precision={'highp'} />
            </animated.mesh>
        </>
    )
}
