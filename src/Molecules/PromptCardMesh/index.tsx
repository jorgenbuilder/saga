import { useMemo } from 'react';
import { MeshProps } from '@react-three/fiber';
import { MathUtils as M3 } from 'three';
import { animated } from '@react-spring/three';
import * as Card from '../../Atoms/TarotCard';

interface Props extends MeshProps {
    prompt: string;
}

export default function PromptCardMesh ({prompt, ...props}: Props) {

    const shape = useMemo(() => Card.PromptCardShape(), []);
    const geometry = useMemo(() => Card.CardGeometry(shape), [shape]);

    return (
        <animated.mesh
            {...props}
            rotation={props.rotation || [0, M3.degToRad(90), 0]}
            geometry={geometry}
        >
            <meshPhongMaterial attachArray="material" color='darkgrey' />
            <meshPhongMaterial attachArray="material" color='white' />
            <meshPhongMaterial attachArray="material" color='grey' />
        </animated.mesh>
    )
}
