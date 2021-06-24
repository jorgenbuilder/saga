import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';

interface CardTextureJPEGProps {
    filePath: string;
}

export function CardTextureJPEG ({
    filePath,
}: CardTextureJPEGProps) {
    const t = useLoader(THREE.TextureLoader, filePath);
    return t;
}