import { useMemo } from 'react';
import { MeshProps } from '@react-three/fiber';
import { MathUtils as M3 } from 'three';
import { animated } from '@react-spring/three';
import * as Card from './primitives';
import { RiderWaiteTarotSkin, TarotDeckSkin } from '../../assets/cards';
import { CardDraw } from '../../services/cards/draws';

interface Props extends MeshProps {
    draw: CardDraw;
    skin?: TarotDeckSkin;
}

export default function TarotCardMesh ({draw, skin = RiderWaiteTarotSkin, ...props}: Props) {

    const shape = useMemo(() => Card.TarotCardShape(), []);
    const geometry = useMemo(() => Card.CardGeometry(shape), [shape]);
    const back = useMemo(() => Card.CardTextureJPEG({
        shape,
        filePath: skin.cards[78].filePath,
        offset: skin?.config?.offsetBack,
        padding: skin?.config?.paddingBack,
    }), [shape, skin]);
    const face = useMemo(() => Card.CardTextureJPEG({
        shape,
        filePath: skin.cards[draw.card].filePath,
        offset: skin?.config?.offsetFace,
        padding: skin?.config?.paddingFace,
    }), [shape, skin, draw]);

    return (
        <animated.mesh
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
