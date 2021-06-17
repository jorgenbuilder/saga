import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory as tarotIdl, canisterId as tarotId } from 'ic:canisters/tarot/tarot';

export interface User {
    handle: string;
    tokenBalance: number;
    isAdmin: boolean;
}

export const defaultUser: User = {
    handle: '@default',
    tokenBalance: 100,
    isAdmin: true,
};

const agent = new HttpAgent();
const tarot = Actor.createActor(tarotIdl, { agent, canisterId: tarotId });
tarot.getUser(defaultUser.handle).then(console.log).catch(console.error);
tarot.addUser(defaultUser).then(console.log).catch(console.error);
tarot.getUser(defaultUser.handle).then(console.log).catch(console.error);
