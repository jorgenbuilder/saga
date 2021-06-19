import * as THREE from 'three';

export default function CardGeometry (shape: THREE.Shape) {
    const geometry = new THREE.ExtrudeGeometry(shape, {
        bevelEnabled: false,
        depth: .025,
        steps: 1,
    });

    // Break the geometry into front, back and side groups for texturing.
    geometry.clearGroups();
    let groupCount = [0, 0, 0];
    let groupStart: (number | undefined)[] = [undefined, undefined, undefined];
    for (let i = 1; i <= geometry.attributes.normal.count; i++) {
        const index = 2 + ((3 * i) - 3);
        const vIndex = i - 1;
        const z = geometry.attributes.normal.array[index];

        switch (z) {
            case 1: groupCount[0]++;
                groupStart[0] = groupStart[0] == null ? vIndex : groupStart[0];
                break;  // Front
            case 0: groupCount[1]++;
                groupStart[1] = groupStart[1] == null ? vIndex : groupStart[1];
                break;  // Side
            case -1: groupCount[2]++;
                groupStart[2] = groupStart[2] == null ? vIndex : groupStart[2];
                break;  // Back

        }
    }
    geometry.addGroup(groupStart[0] as number, groupCount[0], 2);
    geometry.addGroup(groupStart[1] as number, groupCount[1], 1);
    geometry.addGroup(groupStart[2] as number, groupCount[2], 0);

    return geometry;
}