import React, { createContext, ReactNode } from 'react';

import { Actor, ActorSubclass, HttpAgent } from '@dfinity/agent';
import * as TarotCanister from 'dfx-generated/tarot';

import { useMemo } from 'react';
import { useContext } from 'react';


export interface CardDraw {
    'theme': string,
    'principal': string,
    'card': number,
    'reversed': boolean,
    'timestamp': Timestamp,
};
export type Err = { 'permissionDenied': null } |
{ 'invalidId': null };
export type Id = number;
export interface NextAvailableDraw {
    'now': Timestamp,
    'theme': string,
    'principal': string,
    'interval': Timestamp,
    'lastDraw': [] | [Timestamp],
    'nextDraw': Timestamp,
};
export type Res = Result;
export type Result = { 'ok': CardDraw } |
{ 'err': Err };
export interface TarotCard {
    'name': string,
    'suit': TarotCardSuits,
    'number': number,
    'index': number,
};
export type TarotCardSuits = string;
export type Timestamp = number;

export interface TarotCanisterInterface {
    // TODO: This should come from .dfx/local/canisters/tarot/tarot.d.ts, but doesn't seem to work
    'countDraws': () => Promise<number>,
    'createDailyDraw': (arg_0: string, arg_1: string) => Promise<CardDraw>,
    'getCardDraw': (arg_0: number) => Promise<Res>,
    'getExistingDraw': (arg_0: string, arg_1: string) => Promise<
        [] | [[Id, CardDraw]]
    >,
    'importTarotCards': (arg_0: Array<TarotCard>) => Promise<undefined>,
    'listPrincipleDailyDraws': (arg_0: string) => Promise<Array<CardDraw>>,
    'listTarotCards': () => Promise<Array<TarotCard>>,
    'nextDrawTime': (arg_0: string, arg_1: string) => Promise<NextAvailableDraw>,
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
