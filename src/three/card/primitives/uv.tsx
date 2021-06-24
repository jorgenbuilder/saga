import * as THREE from 'three';

// Probably what I actually want to do is copy:
// https://github.com/mrdoob/three.js/blob/dev/src/geometries/BoxGeometry.js

export const WorldUVGenerator = {
    generateTopUV: function (
        geometry: THREE.ExtrudeGeometry,
        vertices: number[],
        indexA: number,
        indexB: number,
        indexC: number
    ) {
        const a_x = vertices[indexA * 3];
        const a_y = vertices[indexA * 3 + 1];
        const b_x = vertices[indexB * 3];
        const b_y = vertices[indexB * 3 + 1];
        const c_x = vertices[indexC * 3];
        const c_y = vertices[indexC * 3 + 1];

        return [
            new THREE.Vector2(a_x, a_y),
            new THREE.Vector2(b_x, b_y),
            new THREE.Vector2(c_x, c_y)
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
        const a_x = vertices[indexA * 3];
        const a_y = vertices[indexA * 3 + 1];
        const a_z = vertices[indexA * 3 + 2];
        const b_x = vertices[indexB * 3];
        const b_y = vertices[indexB * 3 + 1];
        const b_z = vertices[indexB * 3 + 2];
        const c_x = vertices[indexC * 3];
        const c_y = vertices[indexC * 3 + 1];
        const c_z = vertices[indexC * 3 + 2];
        const d_x = vertices[indexD * 3];
        const d_y = vertices[indexD * 3 + 1];
        const d_z = vertices[indexD * 3 + 2];

        if (Math.abs(a_y - b_y) < 0.01) {
            return [
                new THREE.Vector2(a_x, 1 - a_z),
                new THREE.Vector2(b_x, 1 - b_z),
                new THREE.Vector2(c_x, 1 - c_z),
                new THREE.Vector2(d_x, 1 - d_z)
            ];
        } else {
            return [
                new THREE.Vector2(a_y, 1 - a_z),
                new THREE.Vector2(b_y, 1 - b_z),
                new THREE.Vector2(c_y, 1 - c_z),
                new THREE.Vector2(d_y, 1 - d_z)
            ];
        }
    }
};

export const CoverUVGenerator = {
    generateTopUV: function (
        geometry: THREE.ExtrudeGeometry,
        vertices: number[],
        indexA: number,
        indexB: number,
        indexC: number
    ) {
        const width = 4.75;
        const height = 2.5;
        const bb = {
            min: { x: -width / 2, y: -height / 2 },
            max: { x: width / 2, y: height / 2 }
        };

        const ax = vertices[indexA * 3],
            ay = vertices[indexA * 3 + 1],
            bx = vertices[indexB * 3],
            by = vertices[indexB * 3 + 1],
            cx = vertices[indexC * 3],
            cy = vertices[indexC * 3 + 1],
            bbx = bb.max.x - bb.min.x,
            bby = bb.max.y - bb.min.y;

        return [
            // new THREE.Vector2((ax - bb.min.x) / bbx, 1.0 - (ay - bb.min.y) / bby),
            // new THREE.Vector2((bx - bb.min.x) / bbx, 1.0 - (by - bb.min.y) / bby),
            // new THREE.Vector2((cx - bb.min.x) / bbx, 1.0 - (cy - bb.min.y) / bby),
            new THREE.Vector2(
                (ax - bb.min.x) / width,
                0.25 + (ay - bb.min.y) / width
            ),
            new THREE.Vector2(
                (bx - bb.min.x) / width,
                0.25 + (by - bb.min.y) / width
            ),
            new THREE.Vector2((cx - bb.min.x) / width, 0.25 + (cy - bb.min.y) / width)
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
        geometry.computeBoundingBox();
        const bb = new THREE.Box2(
            new THREE.Vector2(-100, 100),
            new THREE.Vector2(100, -100)
        );
        const ax = vertices[indexA * 3],
            ay = vertices[indexA * 3 + 1],
            az = vertices[indexA * 3 + 2],
            bx = vertices[indexB * 3],
            by = vertices[indexB * 3 + 1],
            bz = vertices[indexB * 3 + 2],
            cx = vertices[indexC * 3],
            cy = vertices[indexC * 3 + 1],
            cz = vertices[indexC * 3 + 2],
            dx = vertices[indexD * 3],
            dy = vertices[indexD * 3 + 1],
            dz = vertices[indexD * 3 + 2];

        const amt = 0.1;
        const bbx = bb.max.x - bb.min.x;
        const bby = bb.max.y - bb.min.y;

        if (Math.abs(ay - by) < 0.01) {
            return [
                new THREE.Vector2(ax / bbx, 1.0 - az / amt),
                new THREE.Vector2(bx / bbx, 1.0 - bz / amt),
                new THREE.Vector2(cx / bbx, 1.0 - cz / amt),
                new THREE.Vector2(dx / bbx, 1.0 - dz / amt)
            ];
        } else {
            return [
                new THREE.Vector2(ay / bby, 1.0 - az / amt),
                new THREE.Vector2(by / bby, 1.0 - bz / amt),
                new THREE.Vector2(cy / bby, 1.0 - cz / amt),
                new THREE.Vector2(dy / bby, 1.0 - dz / amt)
            ];
        }
    }
};
