import React, { createContext, ReactNode } from 'react';

import { Actor, ActorSubclass, HttpAgent } from '@dfinity/agent';
import * as TarotCanister from 'dfx-generated/tarot';

import { useMemo } from 'react';
import { useContext } from 'react';


interface TarotCanisterInterface {
    // TODO: This should come from .dfx/local/canisters/tarot/tarot.d.ts, but doesn't seem to work
    drawCard: () => Promise<[[] | [number], [] | [number]]>,
}

interface CanistersState {
    agent: HttpAgent;
    tarot: ActorSubclass<TarotCanisterInterface>;
};

interface CanistersProviderProps {
    children?: ReactNode;
};

const agent = new HttpAgent({
    // TODO: Handle mainnet and devnet
    host: 'http://localhost:8000',
});
agent.fetchRootKey().catch(console.error);
const DefaultState: CanistersState = {
    agent,
    tarot: Actor.createActor<TarotCanisterInterface>(TarotCanister.idlFactory, { agent, canisterId: TarotCanister.canisterId }),
};

export const CanistersContext = createContext<CanistersState>(DefaultState);
export const useCanister = () => useContext(CanistersContext);

export default function CanistersProvider ({ children }: CanistersProviderProps) {

    const agent = useMemo(() => DefaultState.agent, []);
    const tarot = useMemo(() => DefaultState.tarot, []);

    const value = {
        agent,
        tarot,
    };

    return <CanistersContext.Provider
        value={value}
    >
        {children}
    </CanistersContext.Provider>;
};
