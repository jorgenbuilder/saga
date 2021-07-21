import { useLoader } from '@react-three/fiber';
import { useDecks } from 'src/context/decks';
import * as THREE from 'three';

export function CardTextureJPEG (pathOrData: string) {
    return useLoader(THREE.TextureLoader, pathOrData ? pathOrData : '');
};

const textures: { [key: string]: string; } = {};
const texturePromises: { [key: string]: Promise<string> } = {};

export default function CardTexture ({ index }: {index: number}) {
    const { viewDeck, deck } = useDecks();
    const useDeck = viewDeck || deck;
    if (!textures[`${useDeck.name}${index}`]) {
        if (!texturePromises[`${useDeck.name}${index}`]) {
            texturePromises[`${useDeck.name}${index}`] = useDeck.serveCard(index).then((r) => {
                textures[`${useDeck.name}${index}`] = r;
                return r;
            });
        }
        throw texturePromises[`${useDeck.name}${index}`];
    }
    return <meshPhongMaterial attachArray="material" map={useLoader(THREE.TextureLoader, textures[`${useDeck.name}${index}`])} />;
};