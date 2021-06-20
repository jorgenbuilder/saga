import * as THREE from 'three';

export function TarotCardShape () {
    return roundedRectFromDimensions(2.5, 4.75, .125);
}

export function PromptCardShape () {
    return roundedRectFromDimensions(2.5, 1.5, .125);
}

export function fromSVG () {
    const shape = new THREE.Shape();
    // TODO
    return shape;
}

export function rectFromDimensions (width: number, height: number) {
    const shape = new THREE.Shape();
    const w = width / 2;
    const h = height / 2;
    shape.lineTo(-w, +h); // top left
    shape.lineTo(+w, +h); // top right
    shape.lineTo(+w, -h); // bottom right
    shape.lineTo(-w, -h); // bottom left
    shape.lineTo(-w, +h); // close
    return shape;
}

export function roundedRectFromDimensions (width: number, height: number, corners: number) {
    // This seems like a really garbage way to do this (I'm terrible at math)
    const shape = new THREE.Shape();
    const w = width / 2;
    const h = height / 2;
    const c = corners;
    shape.lineTo(-w  , +h-c); // top left 1
    shape.bezierCurveTo(
        -w  , +h  ,  // Control point should hit the real corner
        -w+c, +h  ,  // Last two pairs are what lineTo would have been
        -w+c, +h  ,
    ); // top left 2
    shape.lineTo(+w-c, +h  ); // top right 1
    shape.bezierCurveTo(
        +w  , +h  ,
        +w  , +h-c,
        +w  , +h-c,
    ); // top right 2
    shape.lineTo(+w  , -h+c); // bottom right 1
    shape.bezierCurveTo(
        +w  , -h  ,
        +w-c, -h  ,
        +w-c, -h  ,
    ); // bottom right 2
    shape.lineTo(-w+c, -h  ); // bottom left 1
    shape.bezierCurveTo(
        -w  , -h  ,
        -w  , -h+c,
        -w  , -h+c,
    ); // bottom left 2
    shape.lineTo(-w  , +h-c); // close
    shape.autoClose = true;
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
    ], [[0, 0], [0, 0]]).map((x) => Math.abs(x[0]) + Math.abs(x[1])) as [number, number];
}