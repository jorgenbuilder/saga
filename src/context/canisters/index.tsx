import React, { createContext } from 'react';

import { Actor, ActorSubclass, HttpAgent } from '@dfinity/agent';
import * as TarotCanister from 'dfx-generated/tarot';

import { defaultUser, User } from 'src/services/users';
import { useMemo } from 'react';


interface TarotCanisterInterface {
    // TODO: This should come from .dfx/local/canisters/tarot/tarot.d.ts, but doesn't seem to work
    addUser: (user: User) => Promise<undefined>;
    listUsers: () => Promise<User[]>;
    drawCard: () => Promise<[[] | [number], [] | [number]]>,
    getUser : (handle: string) => Promise<[] | [User]>,
}

interface CanistersState {
    agent: HttpAgent;
    tarot: ActorSubclass<TarotCanisterInterface>;
    testUsers: () => void;
};

interface CanistersProviderProps {};

const agent = new HttpAgent({
    // TODO: Handle mainnet and devnet
    host: 'http://localhost:8000',
});
agent.fetchRootKey();
const DefaultState: CanistersState = {
    agent,
    tarot: Actor.createActor<TarotCanisterInterface>(TarotCanister.idlFactory, { agent, canisterId: TarotCanister.canisterId }),
    testUsers: () => {},
};

const CanistersContext = createContext<CanistersState>(DefaultState);

const CanistersProvider:React.FC<CanistersProviderProps> = ({ children }) => {

    const agent = useMemo(() => DefaultState.agent, []);
    const tarot = useMemo(() => DefaultState.tarot, []);

    function testUsers () {
        tarot.addUser(defaultUser)
        .then((r) => {
            console.log(`Response`, r);
            return tarot.listUsers();
        })
        .then((r) => console.log(`Response`, r))
        .catch((r) => console.error(`Error`, r));
    }

    const value = {
        agent,
        tarot,
        testUsers,
    };

    return <CanistersContext.Provider
        value={value}
    >
        {children}
    </CanistersContext.Provider>;
};

export default CanistersProvider;

export {
    CanistersContext,
};
