import { useMemo } from 'react';
import { MeshProps } from '@react-three/fiber';
import * as THREE from 'three';
import { animated } from '@react-spring/three';
import * as Card from './primitives';
import CardTexture from './primitives/texture';
import { Deck } from 'src/context/decks';

interface Props extends MeshProps {
    cardIndex: number;
    forceDeck?: Deck;
};

export default function TarotCardMesh ({cardIndex, forceDeck, ...props}: Props) {
    const shape = useMemo(() => Card.TarotCardShape(), []);
    const geometry = useMemo(() => Card.CardGeometry(shape), [shape]);

    return (
        <animated.mesh
            {...props}
            rotation={props.rotation || [0, THREE.MathUtils.degToRad(90), 0]}
            geometry={geometry}
        >
            <CardTexture forceDeck={forceDeck} index={78} />
            <meshPhongMaterial attachArray="material" color='white' />
            <CardTexture forceDeck={forceDeck} index={cardIndex} />
        </animated.mesh>
    )
}
