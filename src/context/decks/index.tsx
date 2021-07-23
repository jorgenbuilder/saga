import { createContext, Dispatch, ReactNode, SetStateAction, useCallback, useContext, useEffect, useState } from 'react';
import { useInternetIdentity } from '../internet-identity';
import AlphaDeck, { deck as alphadeck} from './alphadeck';
import ChaosDecks, { Chaos1Deck, Chaos2Deck, Chaos3Deck, Chaos4Deck, Chaos5Deck, Chaos6Deck, Chaos7Deck, Chaos8Deck } from './hackaton';
import DefaultDeck from './default';

interface DecksState {
    deck: Deck;
    viewDeck?: Deck;
    availableDecks: Deck[];
    setDeck: Dispatch<SetStateAction<Deck>>;
    setAvailableDecks: Dispatch<SetStateAction<Deck[]>>;
    knownDecks: Deck[];
};

export interface Deck {
    name: string;
    slug: string;
    serveCard: (index: number) => Promise<string>;  // return an image path or data
};

interface DecksProviderProps {
    children?: ReactNode;
};

const DefaultState: DecksState = {
    deck: DefaultDeck,
    availableDecks: [DefaultDeck],
    setDeck: () => {},
    setAvailableDecks: () => {},
    knownDecks: [DefaultDeck],
};

export const DecksContext = createContext<DecksState>(DefaultState);
export const useDecks = () => useContext(DecksContext);

const DeckCanisters = [
    {can: alphadeck, deck: AlphaDeck},
    {can: ChaosDecks.chaos1, deck: Chaos1Deck},
    {can: ChaosDecks.chaos2, deck: Chaos2Deck},
    {can: ChaosDecks.chaos3, deck: Chaos3Deck},
    {can: ChaosDecks.chaos4, deck: Chaos4Deck},
    {can: ChaosDecks.chaos5, deck: Chaos5Deck},
    {can: ChaosDecks.chaos6, deck: Chaos6Deck},
    {can: ChaosDecks.chaos7, deck: Chaos7Deck},
    {can: ChaosDecks.chaos8, deck: Chaos8Deck},
];

export default function DecksProvider({ children }: DecksProviderProps) {

    const [deck, setDeck] = useState<Deck>(DefaultState.deck);
    const [availableDecks, setAvailableDecks] = useState<Deck[]>(DefaultState.availableDecks);

    const { identity, isAuthed } = useInternetIdentity();

    async function discoverDecks () {
        let discoveredDecks: Deck[] = [DefaultDeck];
        const queries: Promise<Deck[]>[] = [];
        for (const key in DeckCanisters) {
            const {can, deck} = DeckCanisters[key];
            queries.push(can.getPrincipalNFT(identity?.getPrincipal()).catch(console.error).then((resp: any) => {
                console.log(resp)
                if (!resp) return;
                if (resp.length) {
                    discoveredDecks.push(deck);
                }
            }));
        }
        await Promise.all(queries);
        console.log('Discovered decks', discoveredDecks);
        setAvailableDecks(discoveredDecks);
    };

    useEffect(() => { discoverDecks() }, [isAuthed]);

    const value = useCallback(() => ({
        deck,
        setDeck,
        availableDecks,
        setAvailableDecks,
        knownDecks: [DefaultDeck].concat(DeckCanisters.map(x => x.deck)),
    }), [deck, setDeck, availableDecks, setAvailableDecks]);

    return <DecksContext.Provider
        value={value()}
    >
        {children}
    </DecksContext.Provider>;
};
