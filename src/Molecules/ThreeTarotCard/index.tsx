import { useMemo, useRef } from 'react';
import { MeshProps } from '@react-three/fiber';
import { BackSide, FrontSide, MathUtils as M3 } from 'three';
import Svg from '../../Atoms/ThreeSvg';
import cardFace from '../../Assets/cards/svg-basic/card-face.svg';
import { animated } from '@react-spring/three';
import { svgCards } from '../../Assets/cards';

interface Props extends MeshProps {
    randomSeed?: number;
}

const SvgCard: React.FC<Props> = (props) => {
    // This reference will give us direct access to the mesh
    const mesh = useRef<MeshProps | undefined>(undefined);

    const card = useMemo(() => svgCards[Math.ceil((props.randomSeed || Math.random()) * 78)], [props.randomSeed]);
    
    return (
        <animated.mesh
            {...props}
            ref={mesh}
            rotation={props.rotation || [0, M3.degToRad(90), 0]}
        >
            <boxGeometry args={[6, 10, .025]} />
            <meshPhongMaterial attach="material" color='white' />
            <Svg side={FrontSide} url={card || cardFace} position={[3, -5, .013,]} />
            <Svg side={BackSide} url={svgCards[0]} position={[3, -5, -.013,]} />
        </animated.mesh>
    )
}

export default SvgCard;
