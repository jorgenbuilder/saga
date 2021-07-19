import { useMemo } from 'react';
import { MeshProps } from '@react-three/fiber';
import { MathUtils as M3 } from 'three';
import { animated } from '@react-spring/three';
import * as Card from './primitives';
import { CardDraw } from 'src/services/cards/draws';
import { useContext } from 'react';
import { DecksContext } from 'src/context/decks';

interface Props extends MeshProps {
    draw?: CardDraw;
    x?: any;
}

export default function TarotCardMesh ({draw, ...props}: Props) {
    const { deck } = useContext(DecksContext);
    const shape = useMemo(() => Card.TarotCardShape(), []);
    const geometry = useMemo(() => Card.CardGeometry(shape), [shape]);
    const back = useMemo(() => Card.CardTextureJPEG(deck.serveCard(78)), [deck]);
    const face = useMemo(() => {
        if (draw) {
            return Card.CardTextureJPEG(deck.serveCard(draw.card));
        } else {
            return;
        }
    }, [draw, deck])
        

    return (
        <animated.mesh
            ref={props.x}
            {...props}
            rotation={props.rotation || [0, M3.degToRad(90), 0]}
            geometry={geometry}
        >
            <meshPhongMaterial attachArray="material" map={back} />
            <meshPhongMaterial attachArray="material" color='white' />
            <meshPhongMaterial attachArray="material" map={face} />
        </animated.mesh>
    )
}
