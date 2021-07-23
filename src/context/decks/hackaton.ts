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

export const HackathonCanisterIds = {
    "alphadeck": {
        "ic": "c5u3f-qqaaa-aaaah-qafkq-cai"
    },
    "chaos1": {
        "ic": "ctwwn-laaaa-aaaah-qaflq-cai"
    },
    "chaos2": {
        "ic": "d6ysd-eiaaa-aaaah-qafma-cai"
    },
    "chaos3": {
        "ic": "dzzux-jqaaa-aaaah-qafmq-cai"
    },
    "chaos4": {
        "ic": "dq27l-7yaaa-aaaah-qafna-cai"
    },
    "chaos5": {
        "ic": "dx3z7-saaaa-aaaah-qafnq-cai"
    },
    "chaos6": {
        "ic": "dc4is-tiaaa-aaaah-qafoa-cai"
    },
    "chaos7": {
        "ic": "dm6f2-iyaaa-aaaah-qafpa-cai"
    },
    "chaos8": {
        "ic": "dl7do-faaaa-aaaah-qafpq-cai"
    },
    "tarot": {
        "ic": "5eiu6-pyaaa-aaaah-qaa6q-cai"
    },
    "tarot_assets": {
        "ic": "l2jyf-nqaaa-aaaah-qadha-cai"
    }
};

const DEVMODE = window.location.host.includes('localhost');
// const DEVMODE = false;

const ChaosDecks: { [key: string]: ActorSubclass<any> } = {
    chaos1: Actor.createActor<any>(idlFactory1, { agent: agent(), canisterId: DEVMODE ? canisterId1 : HackathonCanisterIds['chaos1']['ic'] }),
    chaos2: Actor.createActor<any>(idlFactory2, { agent: agent(), canisterId: DEVMODE ? canisterId2 : HackathonCanisterIds['chaos2']['ic'] }),
    chaos3: Actor.createActor<any>(idlFactory3, { agent: agent(), canisterId: DEVMODE ? canisterId3 : HackathonCanisterIds['chaos3']['ic'] }),
    chaos4: Actor.createActor<any>(idlFactory4, { agent: agent(), canisterId: DEVMODE ? canisterId4 : HackathonCanisterIds['chaos4']['ic'] }),
    chaos5: Actor.createActor<any>(idlFactory5, { agent: agent(), canisterId: DEVMODE ? canisterId5 : HackathonCanisterIds['chaos5']['ic'] }),
    chaos6: Actor.createActor<any>(idlFactory6, { agent: agent(), canisterId: DEVMODE ? canisterId6 : HackathonCanisterIds['chaos6']['ic'] }),
    chaos7: Actor.createActor<any>(idlFactory7, { agent: agent(), canisterId: DEVMODE ? canisterId7 : HackathonCanisterIds['chaos7']['ic'] }),
    chaos8: Actor.createActor<any>(idlFactory8, { agent: agent(), canisterId: DEVMODE ? canisterId8 : HackathonCanisterIds['chaos8']['ic'] }),
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