import * as THREE from 'three';

export function TarotCardShape () {
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
}

export function PromptCardShape () {
    const shape = new THREE.Shape();
    shape.lineTo(-1.250, -0.500);
    shape.lineTo(1.250, -0.500);
    shape.lineTo(1.250, 1.000);
    shape.lineTo(-1.250, 1.000);
    shape.lineTo(-1.250, -0.500);
    return shape;
}

export function fromSVG () {
    const shape = new THREE.Shape();
    // TODO
    return shape;
}

export function fromDimensions () {
    const shape = new THREE.Shape();
    // TODO
    return shape;
}

export function getDimensions (shape: THREE.Shape) {
    return shape.curves.reduce((range, curve) => [
        [
            Math.min(range[0][0], curve.getPoint(0).x, curve.getPoint(0).x),
            Math.max(range[0][1], curve.getPoint(0).x, curve.getPoint(0).x)
        ],
        [
            Math.min(range[1][0], curve.getPoint(0).y, curve.getPoint(0).y),
            Math.max(range[1][1], curve.getPoint(0).y, curve.getPoint(0).y)
        ],
    ], [[0, 0], [0, 0]]).map((x) => Math.abs(x[0]) + Math.abs(x[1]));
}