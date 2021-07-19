import { useMemo } from 'react';
import { MeshProps } from '@react-three/fiber';
import * as THREE from 'three';
import { animated } from '@react-spring/three';
import * as Card from './primitives';
import { CardDraw } from 'src/services/cards/draws';
import CardTexture from './primitives/texture';

interface Props extends MeshProps {
    draw: CardDraw;
};

export default function TarotCardMesh ({draw, ...props}: Props) {
    const shape = useMemo(() => Card.TarotCardShape(), []);
    const geometry = useMemo(() => Card.CardGeometry(shape), [shape]);

    return (
        <animated.mesh
            {...props}
            rotation={props.rotation || [0, THREE.MathUtils.degToRad(90), 0]}
            geometry={geometry}
        >
            <CardTexture index={78} />
            <meshPhongMaterial attachArray="material" color='white' />
            <CardTexture index={draw.card} />
        </animated.mesh>
    )
}
