import { MathUtils as M3 } from 'three';
import { MeshProps } from '@react-three/fiber';
import { RiderWaiteTarotSkin, TarotDeckSkin } from 'src/assets/cards';
import { useMemo } from 'react';
import * as Card from './primitives';
import { animated } from '@react-spring/three';

interface Props extends MeshProps {
    skin?: TarotDeckSkin | null;
}

export default function BlankTarotCardMesh ({skin = RiderWaiteTarotSkin, ...props}: Props) {

    // This is an attempt to make the loading experience of cards less shit
    // It relies upon the card back image being preloaded.

    const shape = useMemo(() => Card.TarotCardShape(), []);
    const geometry = useMemo(() => Card.CardGeometry(shape), [shape]);

    const back = useMemo(() => {
        if (skin) {
            return Card.CardTextureJPEG({
                filePath: skin.cards[78].filePath,
            })
        }
    }, [skin]);

    return (
        <animated.mesh
            {...props}
            rotation={props.rotation || [0, M3.degToRad(90), 0]}
            geometry={geometry}
        >
            {skin
                ? <meshPhongMaterial attachArray="material" map={back} />
                : <meshPhongMaterial attachArray="material" color='#AFC8C3' />}
            <meshPhongMaterial attachArray="material" color='white' />
            <meshPhongMaterial attachArray="material" color='white' />
        </animated.mesh>
    )
}
