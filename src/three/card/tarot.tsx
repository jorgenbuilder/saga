import { useMemo } from 'react';
import { MeshProps } from '@react-three/fiber';
import { MathUtils as M3 } from 'three';
import { animated } from '@react-spring/three';
import * as Card from './primitives';
import { RiderWaiteTarotSkin, TarotDeckSkin } from 'src/assets/cards';
import { CardDraw } from 'src/services/cards/draws';

interface Props extends MeshProps {
    draw?: CardDraw;
    skin?: TarotDeckSkin;
    x?: any;
}

export default function TarotCardMesh ({draw, skin = RiderWaiteTarotSkin, ...props}: Props) {

    const shape = useMemo(() => Card.TarotCardShape(), []);
    const geometry = useMemo(() => Card.CardGeometry(shape), [shape]);
    const back = useMemo(() => Card.CardTextureJPEG({
        filePath: skin.cards[78].filePath,
    }), [skin]);
    const face = useMemo(() => {
        if (draw) {
            return Card.CardTextureJPEG({
                filePath: skin.cards[draw.card].filePath,
            });
        } else {
            return;
        }
    }, [skin, draw])
        

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
