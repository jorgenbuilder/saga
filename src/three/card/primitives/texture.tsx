import { useLoader } from '@react-three/fiber';
import { useContext } from 'react';
import { DecksContext } from 'src/context/decks';
import * as THREE from 'three';

export function CardTextureJPEG (pathOrData: string) {
    return useLoader(THREE.TextureLoader, pathOrData ? pathOrData : '');
};

const textures: { [key: number]: string; } = {};
const texturePromises: { [key: number]: Promise<string> } = {};

export default function CardTexture ({ index }: {index: number}) {
    const { deck } = useContext(DecksContext);
    if (!textures[index]) {
        if (!texturePromises[index]) {
            texturePromises[index] = deck.serveCard(index).then((r) => {
                textures[index] = r;
                console.log(r);
                return r;
            });
        }
        throw texturePromises[index];
    }
    return <meshPhongMaterial attachArray="material" map={useLoader(THREE.TextureLoader, textures[index])} />;
};