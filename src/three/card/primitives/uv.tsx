import * as THREE from 'three';
import { Shape } from 'three';
import { getDimensions } from './shapes';

export function CardUVGenerator (shape: Shape, offset = [0, 0, 0, 0]) {
    const [w, h] = getDimensions(shape);
    const b = [
        [-w / 2 + offset[0], -h / 2 + offset[0]],
        [+w / 2, +h / 2],
    ];
    return {
        generateTopUV: function (
            geometry: THREE.ExtrudeGeometry,
            vertices: number[],
            indexA: number,
            indexB: number,
            indexC: number
        ) {

            const ax = vertices[indexA * 3];
            const ay = vertices[indexA * 3 + 1];
            const bx = vertices[indexB * 3];
            const by = vertices[indexB * 3 + 1];
            const cx = vertices[indexC * 3];
            const cy = vertices[indexC * 3 + 1];

            return [
                new THREE.Vector2((ax - b[0][0]) / (w - (offset[0] + offset[2])), (ay - b[0][1]) / (h - (offset[1] + offset[2]))),
                new THREE.Vector2((bx - b[0][0]) / (w - (offset[0] + offset[2])), (by - b[0][1]) / (h - (offset[1] + offset[2]))),
                new THREE.Vector2((cx - b[0][0]) / (w - (offset[0] + offset[2])), (cy - b[0][1]) / (h - (offset[1] + offset[2]))),
            ];
        },

        generateSideWallUV: function (
            geometry: THREE.ExtrudeGeometry,
            vertices: number[],
            indexA: number,
            indexB: number,
            indexC: number,
            indexD: number
        ) {
            // We don't give a hoot about card edges
            return [
                new THREE.Vector2(0, 0),
                new THREE.Vector2(0, 0),
                new THREE.Vector2(0, 0),
                new THREE.Vector2(0, 0),
            ];
        }
    }
};
