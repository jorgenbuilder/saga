import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';

export function CardTextureJPEG (pathOrData: string) {
    const t = useLoader(THREE.TextureLoader, pathOrData);
    return t;
}