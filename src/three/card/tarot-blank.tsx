import { MathUtils as M3 } from 'three';
import { MeshProps } from '@react-three/fiber';
import { useMemo } from 'react';
import * as Card from './primitives';
import { animated } from '@react-spring/three';
import { useContext } from 'react';
import { DecksContext } from 'src/context/decks';

interface Props extends MeshProps {
    plain?: boolean;
}

export default function BlankTarotCardMesh ({plain, ...props}: Props) {

    // This is an attempt to make the loading experience of cards less shit
    // It relies upon the card back image being preloaded.

    const { deck } = useContext(DecksContext);
    const shape = useMemo(() => Card.TarotCardShape(), []);
    const geometry = useMemo(() => Card.CardGeometry(shape), [shape]);

    const back = useMemo(() => {
        return Card.CardTextureJPEG(deck.serveCard(78))
    }, [deck]);

    return (
        <animated.mesh
            {...props}
            rotation={props.rotation || [0, M3.degToRad(90), 0]}
            geometry={geometry}
        >
            {plain
                ? <meshPhongMaterial attachArray="material" color='#AFC8C3' />
                : <meshPhongMaterial attachArray="material" map={back} />}
            <meshPhongMaterial attachArray="material" color='white' />
            <meshPhongMaterial attachArray="material" color='white' />
        </animated.mesh>
    )
}
