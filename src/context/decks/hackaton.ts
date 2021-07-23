import agent from 'src/constants/agent';
import { idlFactory as idlFactory1, canisterId as canisterId1 } from 'dfx-generated/chaos1';
import { idlFactory as idlFactory2, canisterId as canisterId2 } from 'dfx-generated/chaos2';
import { idlFactory as idlFactory3, canisterId as canisterId3 } from 'dfx-generated/chaos3';
import { idlFactory as idlFactory4, canisterId as canisterId4 } from 'dfx-generated/chaos4';
import { idlFactory as idlFactory5, canisterId as canisterId5 } from 'dfx-generated/chaos5';
import { idlFactory as idlFactory6, canisterId as canisterId6 } from 'dfx-generated/chaos6';
import { idlFactory as idlFactory7, canisterId as canisterId7 } from 'dfx-generated/chaos7';
import { idlFactory as idlFactory8, canisterId as canisterId8 } from 'dfx-generated/chaos8';
import { Actor, ActorSubclass } from '@dfinity/agent';
import { Deck } from '.';

const ChaosDecks: { [key: string]: ActorSubclass<any> } = {
    chaos1: Actor.createActor<any>(idlFactory1, { agent: agent(), canisterId: canisterId1 }),
    chaos2: Actor.createActor<any>(idlFactory2, { agent: agent(), canisterId: canisterId2 }),
    chaos3: Actor.createActor<any>(idlFactory3, { agent: agent(), canisterId: canisterId3 }),
    chaos4: Actor.createActor<any>(idlFactory4, { agent: agent(), canisterId: canisterId4 }),
    chaos5: Actor.createActor<any>(idlFactory5, { agent: agent(), canisterId: canisterId5 }),
    chaos6: Actor.createActor<any>(idlFactory6, { agent: agent(), canisterId: canisterId6 }),
    chaos7: Actor.createActor<any>(idlFactory7, { agent: agent(), canisterId: canisterId7 }),
    chaos8: Actor.createActor<any>(idlFactory8, { agent: agent(), canisterId: canisterId8 }),
};

const Chaos1Deck: Deck = {
    name: 'Chaos #1',
    slug: 'chaos-1',
    serveCard(index: number) {
        return ChaosDecks.chaos1.serveCard(BigInt(index)).then((r: any) => r[0] as string);
    },
};

const Chaos2Deck: Deck = {
    name: 'Chaos #2',
    slug: 'chaos-2',
    serveCard(index: number) {
        return ChaosDecks.chaos2.serveCard(BigInt(index)).then((r: any) => r[0] as string);
    },
};

const Chaos3Deck: Deck = {
    name: 'Chaos #3',
    slug: 'chaos-3',
    serveCard(index: number) {
        return ChaosDecks.chaos3.serveCard(BigInt(index)).then((r: any) => r[0] as string);
    },
};

const Chaos4Deck: Deck = {
    name: 'Chaos #4',
    slug: 'chaos-4',
    serveCard(index: number) {
        return ChaosDecks.chaos4.serveCard(BigInt(index)).then((r: any) => r[0] as string);
    },
};

const Chaos5Deck: Deck = {
    name: 'Chaos #5',
    slug: 'chaos-5',
    serveCard(index: number) {
        return ChaosDecks.chaos5.serveCard(BigInt(index)).then((r: any) => r[0] as string);
    },
};

const Chaos6Deck: Deck = {
    name: 'Chaos #6',
    slug: 'chaos-6',
    serveCard(index: number) {
        return ChaosDecks.chaos6.serveCard(BigInt(index)).then((r: any) => r[0] as string);
    },
};

const Chaos7Deck: Deck = {
    name: 'Chaos #7',
    slug: 'chaos-7',
    serveCard(index: number) {
        return ChaosDecks.chaos7.serveCard(BigInt(index)).then((r: any) => r[0] as string);
    },
};

const Chaos8Deck: Deck = {
    name: 'Chaos #8',
    slug: 'chaos-8',
    serveCard(index: number) {
        return ChaosDecks.chaos8.serveCard(BigInt(index)).then((r: any) => r[0] as string);
    },
};

export default ChaosDecks;

export {
    Chaos1Deck,
    Chaos2Deck,
    Chaos3Deck,
    Chaos4Deck,
    Chaos5Deck,
    Chaos6Deck,
    Chaos7Deck,
    Chaos8Deck,
};