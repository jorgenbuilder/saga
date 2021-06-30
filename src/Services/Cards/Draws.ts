import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory as tarotIdl, canisterId as tarotId } from 'ic:canisters/tarot/tarot';
import { User } from '../users';
import { mapIntToCardName } from './cards';

const agent = new HttpAgent();
agent.fetchRootKey();  // This is some local development carp
const tarot = Actor.createActor(tarotIdl, { agent, canisterId: tarotId });

async function test () {
    await tarot.drawCard().then(console.log)
    test();
}

export interface CardDraw {
    user: User;
    timestamp: number;
    card: number;
    cardName: string;
    upsidedown: boolean;
    message: string;
}

export default async function drawCard (user: User): Promise<CardDraw> {
    if (user.tokenBalance < 1) {
        throw new Error(`User doesn't have any draw tokens.`);
    }
    const timestamp = new Date().getTime();
    const [F_CARD, F_UPSIDEDOWN] = allowAdminForcedDraw();
    const card = F_CARD === undefined ? randomCardIndex() : F_CARD;
    const cardName = mapIntToCardName(card);
    const upsidedown = F_UPSIDEDOWN === undefined ? Math.random() >= .66 : F_UPSIDEDOWN;
    const message = `Drew ${cardName} ${upsidedown ? 'up-side-down' : 'right-side-up'} (${card})`;
    console.info(message);
    return { user, timestamp, card, cardName, upsidedown, message }
}

export function randomCardIndex () {
    return getRandomInt(0, 77);
}


interface window {
    FORCE_NEXT_DRAW?: [number|undefined, boolean|undefined]
}

function allowAdminForcedDraw (): [number|undefined, boolean|undefined] {
    const global = window as window;
    const [F_CARD, F_UPSIDEDOWN] = global?.FORCE_NEXT_DRAW || [undefined, undefined];
    global.FORCE_NEXT_DRAW = undefined;
    return [F_CARD, F_UPSIDEDOWN];
}

function getRandomInt (min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
