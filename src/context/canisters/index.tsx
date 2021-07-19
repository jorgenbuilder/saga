import { createContext, ReactNode, useMemo, useContext } from 'react';
import { Actor, ActorSubclass } from '@dfinity/agent';
import { idlFactory, canisterId } from 'dfx-generated/tarot';
import agent from 'src/constants/agent';

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
    tarot: ActorSubclass<TarotCanisterInterface>;
};

interface CanistersProviderProps {
    children?: ReactNode;
};
export const tarot = Actor.createActor<TarotCanisterInterface>(idlFactory, { agent: agent(), canisterId: canisterId });
const DefaultState: CanistersState = {
    tarot,
};

export const CanistersContext = createContext<CanistersState>(DefaultState);
export const useCanister = () => useContext(CanistersContext);

export default function CanistersProvider({ children }: CanistersProviderProps) {

    const tarot = useMemo(() => DefaultState.tarot, []);

    const value = {
        tarot,
    };

    return <CanistersContext.Provider
        value={value}
    >
        {children}
    </CanistersContext.Provider>;
};
