import { createContext, ReactNode, useMemo, useContext } from 'react';
import { ActorSubclass, HttpAgent } from '@dfinity/agent';
import { tarot } from 'dfx-generated/tarot';
import { _SERVICE } from '.dfx/local/canisters/tarot/tarot.did';

interface CanistersState {
    agent: HttpAgent;
    tarot: ActorSubclass<_SERVICE>;
};

interface CanistersProviderProps {
    children?: ReactNode;
};

const agent = new HttpAgent({
    // TODO: Handle mainnet and devnet
    host: 'http://localhost:8000',
});
// dfx 0.7.7 is doing this for us now (but it's breaking)
// agent.fetchRootKey().catch(console.error);
const DefaultState: CanistersState = {
    agent,
    tarot,
};

export const CanistersContext = createContext<CanistersState>(DefaultState);
export const useCanister = () => useContext(CanistersContext);

export default function CanistersProvider({ children }: CanistersProviderProps) {

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
