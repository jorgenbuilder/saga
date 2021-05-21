import { useRef } from 'react';
import { MeshProps } from '@react-three/fiber';
import { BackSide, FrontSide, MathUtils as M3 } from 'three';
import Svg from '../../Atoms/ThreeSvg';
import cardBack from '../../Assets/cards/card-back.svg';
import cardFace from '../../Assets/cards/card-face.svg';
import { animated } from '@react-spring/three';
import Cards from '../../Assets/cards';

const SvgCard: React.FC<MeshProps> = (props) => {
    // This reference will give us direct access to the mesh
    const mesh = useRef<MeshProps | undefined>(undefined);

    const card = Cards[Math.ceil(Math.random() * 78)];
    
    return (
        <animated.mesh
            {...props}
            ref={mesh}
            rotation={props.rotation || [0, M3.degToRad(90), 0]}
        >
            <boxGeometry args={[6, 10, .025]} />
            <meshPhongMaterial attachArray="material" color="white" />
            <meshPhongMaterial attachArray="material" color="white" />
            <meshPhongMaterial attachArray="material" color="white" />
            <meshPhongMaterial attachArray="material" color="white" />
            <group attachArray="material"><Svg side={BackSide} url={cardBack} args={[0, 0, 0]} /></group>
            <group attachArray="material"><Svg side={FrontSide} url={card || cardFace} args={[0, 0, 0]} /></group>
        </animated.mesh>
    )
}

export default SvgCard;
