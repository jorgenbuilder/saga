import { MathUtils as M3 } from 'three';
import { MeshProps } from '@react-three/fiber';
import { useMemo } from 'react';
import * as Card from './primitives';
import { animated } from '@react-spring/three';
import CardTexture from './primitives/texture';

interface Props extends MeshProps {
    plain?: boolean;
}

export default function BlankTarotCardMesh ({plain, ...props}: Props) {

    // Fallback for loading card textures. If plain is true, it renders a color instead of a
    // card back, allowing for progressive fallbacks.

    const shape = useMemo(() => Card.TarotCardShape(), []);
    const geometry = useMemo(() => Card.CardGeometry(shape), [shape]);

    return (
        <animated.mesh
            {...props}
            rotation={props.rotation || [0, M3.degToRad(90), 0]}
            geometry={geometry}
        >
            {plain
                ? <meshPhongMaterial attachArray="material" color='#333' />
                : <CardTexture index={78} />}
            <meshPhongMaterial attachArray="material" color='white' />
            <meshPhongMaterial attachArray="material" color='white' />
        </animated.mesh>
    )
}
