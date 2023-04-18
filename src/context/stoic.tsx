import React from 'react';
import { StoicIdentity } from 'ic-stoic-identity';
import { Principal } from '@dfinity/principal';
import { ActorSubclass, HttpAgent, Identity } from '@dfinity/agent';
// import { createActor, MetascoreQuery } from '@metascore/query';
import { useEnv } from './env';


interface StoicState {
    connect: () => Promise<void>;
    disconnect: () => Promise<void>;
    isConnected: boolean;
    principal?: Principal;
    // actor?: ActorSubclass<MetascoreQuery>;
};

interface ContextProviderProps {
    children?: React.ReactNode;
};

const defaultState: StoicState = {
    connect: async () => { },
    disconnect: async () => { },
    isConnected: false,
};

export const stoicContext = React.createContext<StoicState>(defaultState);
export const useStoic = () => React.useContext(stoicContext);

export default function StoicProvider({ children }: ContextProviderProps) {

    async function connect() {
        StoicIdentity.load().then(async (identity: any) => {
            if (identity === false) {
                identity = await StoicIdentity.connect();
            };
            initActor(identity);
        });
    };

    async function disconnect() {
        StoicIdentity.disconnect();
        setIsConnected(false);
        setPrincipal(undefined);
        window.sessionStorage.removeItem('stoicIsConnected');
    };

    const { principal : sagaPrincipal, host, isLocal } = useEnv();

    const [isConnected, setIsConnected] = React.useState<boolean>(defaultState.isConnected);
    const [principal, setPrincipal] = React.useState<Principal>();
    // const [actor, setActor] = React.useState<ActorSubclass<MetascoreQuery>>();

    React.useEffect(() => {
        const sessionIsConnected = window.sessionStorage.getItem('stoicIsConnected') === 'true';
        if (sessionIsConnected) {
            StoicIdentity.load().then(async (identity: any) => {
                identity && initActor(identity);
            });
        }
    }, []);

    async function initActor(identity: Identity) {
        const agent = new HttpAgent({
            identity,
            host: host,
        });
        if (isLocal) agent.fetchRootKey();
        // const actor = createActor(agent, sagaPrincipal);
        setIsConnected(true);
        setPrincipal(identity.getPrincipal());
        // setActor(actor);
        window.sessionStorage.setItem('stoicIsConnected', 'true');
        window.sessionStorage.setItem('stoicPrincipal', identity.getPrincipal().toText());
    };

    return <stoicContext.Provider
        value={{
            connect,
            disconnect,
            isConnected,
            principal,
            // actor
        }}
        children={children} 
    />
};