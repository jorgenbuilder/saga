import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory as tarotIdl, canisterId as tarotId } from 'ic:canisters/tarot/tarot';

export interface User {
    handle: string;
    tokenBalance: number;
}

export const defaultUser: User = {
    handle: '@default',
    tokenBalance: 100,
};

const agent = new HttpAgent();
agent.fetchRootKey();  // This is some local development carp
const tarot = Actor.createActor(tarotIdl, { agent, canisterId: tarotId });

tarot.addUser(defaultUser)
.then((r) => {
    console.log(`Response`, r);
    return tarot.listUsers();
})
.then((r) => console.log(`Response`, r))
.catch((r) => console.error(`Error`, r));
