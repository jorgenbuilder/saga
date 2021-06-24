import * as THREE from 'three';
import { Shape } from 'three';
import { getDimensions } from './shapes';

export function CardUVGenerator (shape: Shape) {
    const [w, h] = getDimensions(shape);
    const b = [[-w / 2, -h / 2], [+w / 2, +h / 2]];
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
                new THREE.Vector2((ax - b[0][0]) / w, (ay - b[0][1]) / h),
                new THREE.Vector2((bx - b[0][0]) / w, (by - b[0][1]) / h),
                new THREE.Vector2((cx - b[0][0]) / w, (cy - b[0][1]) / h),
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
