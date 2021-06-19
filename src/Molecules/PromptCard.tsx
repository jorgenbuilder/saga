import { useMemo, useRef } from 'react';
import { MeshProps } from '@react-three/fiber';
import { MathUtils as M3 } from 'three';
import { animated } from '@react-spring/three';
import * as THREE from 'three';


interface Props extends MeshProps {
    randomSeed?: number;
    card?: [number, boolean];
}

const PromptCard: React.FC<Props> = (props) => {
    const mesh = useRef<MeshProps | undefined>(undefined);

    const extrudeConf = useMemo(() => ({
        bevelEnabled: false,
        depth: .025,
        steps: 1,
    }), []);

    const shape = useMemo(() => {
        const shape = new THREE.Shape();
        shape.lineTo(-1.250, -0.500);
        shape.lineTo(1.250, -0.500);
        shape.lineTo(1.250, 1.000);
        shape.lineTo(-1.250, 1.000);
        shape.lineTo(-1.250, -0.500);
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
            <meshPhongMaterial attachArray="material" color='grey' />
            <meshPhongMaterial attachArray="material" color='white' />
            <meshPhongMaterial attachArray="material" color='grey' />
        </animated.mesh>
    )
}

export default PromptCard;
