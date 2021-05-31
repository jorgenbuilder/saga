import { useEffect, useMemo, useRef, useState } from 'react';
import { MeshProps, useLoader } from '@react-three/fiber';
import { MathUtils as M3 } from 'three';
import { animated } from '@react-spring/three';
import { RiderWaiteCards } from '../../Assets/cards';
import * as THREE from 'three';
import DrawCard from '../../Atoms/draw';


interface Props extends MeshProps {
    randomSeed?: number;
}

const ExtrudeCard: React.FC<Props> = (props) => {
    const mesh = useRef<MeshProps | undefined>(undefined);
    const [[cardSeed, upsidedown], set] = useState<[number, boolean]>([1, false]);

    const extrudeConf = useMemo(() => ({
        bevelEnabled: false,
        depth: .025,
        steps: 1,
    }), []);

    useEffect(() => set(DrawCard()), [props.randomSeed])

    const card = RiderWaiteCards[cardSeed];
    const backTexture = useLoader(THREE.TextureLoader, RiderWaiteCards[0]);
    backTexture.wrapS = backTexture.wrapT = THREE.ClampToEdgeWrapping;
    backTexture.repeat.set(1 / 2.75, 1 / 4.75);
    backTexture.offset.set(.5, .5);
    const faceTexture = useLoader(THREE.TextureLoader, card);
    faceTexture.wrapS = faceTexture.wrapT = THREE.ClampToEdgeWrapping;
    faceTexture.repeat.set(1 / 2.5, 1 / 4.5);
    faceTexture.offset.set(.485, .5);
    faceTexture.rotation = M3.degToRad(upsidedown ? 180 : 0)
    const shape = useMemo(() => {
        const shape = new THREE.Shape();
        shape.lineTo(-1.250, -2.375);
        shape.lineTo(1.250, -2.375);
        shape.bezierCurveTo(1.375, -2.375, 1.375, -2.250, 1.375, -2.250);
        shape.lineTo(1.375, 2.250);
        shape.bezierCurveTo(1.375, 2.375, 1.250, 2.375, 1.250, 2.375);
        shape.lineTo(-1.250, 2.375);
        shape.bezierCurveTo(-1.375, 2.375, -1.375, 2.250, -1.375, 2.250);
        shape.lineTo(-1.375, -2.250);
        shape.bezierCurveTo(-1.375, -2.375, -1.250, -2.375, -1.250, -2.375);
        return shape;
    }, []);

    const geometry = useMemo(() => {
        const geometry = new THREE.ExtrudeGeometry(shape, extrudeConf);
        geometry.clearGroups();
        geometry.scale(2, 2, 2);

        let group_count = [0, 0, 0];
        let group_start: (number | undefined)[] = [undefined, undefined, undefined];
        for (let i = 1; i <= geometry.attributes.normal.count; i++) {
            const index = 2 + ((3 * i) - 3);
            const v_index = i - 1;
            const z = geometry.attributes.normal.array[index];

            switch (z) {
                case 1: group_count[0]++;
                    group_start[0] = group_start[0] == null ? v_index : group_start[0];
                    break; //Front
                case 0: group_count[1]++;
                    group_start[1] = group_start[1] == null ? v_index : group_start[1];
                    break; //Side
                case -1: group_count[2]++;
                    group_start[2] = group_start[2] == null ? v_index : group_start[2];
                    break; //Back

            }
        }

        geometry.addGroup(group_start[0] as number, group_count[0], 2);
        geometry.addGroup(group_start[1] as number, group_count[1], 1);
        geometry.addGroup(group_start[2] as number, group_count[2], 0);
        return geometry;
    }, [shape, extrudeConf]);

    return (
        <animated.mesh
            {...props}
            ref={mesh}
            rotation={props.rotation || [0, M3.degToRad(90), 0]}
            geometry={geometry}
        >
            <meshPhongMaterial attachArray="material" map={backTexture} />
            <meshPhongMaterial attachArray="material" color='white' />
            <meshPhongMaterial attachArray="material" map={faceTexture} />
        </animated.mesh>
    )
}

export default ExtrudeCard;
