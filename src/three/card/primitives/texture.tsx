import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { getDimensions } from '.';

interface CardTextureJPEGProps {
    shape: THREE.Shape;
    filePath: string;
    padding?: [number, number];
    offset?: [number, number];
}

export function CardTextureJPEG ({
    shape,
    filePath,
    padding = [0, 0],
    offset = [.5, .5],
}: CardTextureJPEGProps) {
    const d = getDimensions(shape);
    const t = useLoader(THREE.TextureLoader, filePath);
    t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping;
    t.repeat.set(1 / (d[0] - padding[0]), 1 / (d[1] - padding[1]));
    t.offset.set(...offset);
    return t;
}