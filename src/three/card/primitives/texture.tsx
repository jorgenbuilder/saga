import { useLoader } from '@react-three/fiber';
import { useContext } from 'react';
import { DecksContext } from 'src/context/decks';
import * as THREE from 'three';

export function CardTextureJPEG (pathOrData: string) {
    return useLoader(THREE.TextureLoader, pathOrData ? pathOrData : '');
};

const textures: { [key: string]: string; } = {};
const texturePromises: { [key: string]: Promise<string> } = {};

export default function CardTexture ({ index }: {index: number}) {
    const { deck } = useContext(DecksContext);
    if (!textures[`${deck.name}${index}`]) {
        if (!texturePromises[`${deck.name}${index}`]) {
            texturePromises[`${deck.name}${index}`] = deck.serveCard(index).then((r) => {
                textures[`${deck.name}${index}`] = r;
                console.info('Retrieved asset', r);
                return r;
            });
        }
        throw texturePromises[`${deck.name}${index}`];
    }
    return <meshPhongMaterial attachArray="material" map={useLoader(THREE.TextureLoader, textures[`${deck.name}${index}`])} />;
};