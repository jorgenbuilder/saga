import { createContext, Dispatch, ReactNode, SetStateAction, useCallback, useContext, useEffect, useState } from 'react';
import { useInternetIdentity } from '../internet-identity';
import AlphaDeck, { deck as alphadeck } from './alphadeck';
import ChaosDecks, { Chaos1Deck, Chaos2Deck, Chaos3Deck, Chaos4Deck, Chaos5Deck, Chaos6Deck, Chaos7Deck, Chaos8Deck } from './hackaton';
import DefaultDeck from './default';
import { NFT } from 'src/screens/hackathon-decks';
import { Principal } from '@dfinity/principal';

interface DecksState {
    deck: Deck;
    viewDeck?: Deck;
    availableDecks: Deck[];
    setDeck: Dispatch<SetStateAction<Deck>>;
    setAvailableDecks: Dispatch<SetStateAction<Deck[]>>;
    knownDecks: Deck[];
    discoverDecks: (principal?: Principal) => void;
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
    setDeck: () => { },
    setAvailableDecks: () => { },
    knownDecks: [DefaultDeck],
    discoverDecks: (principal?: Principal) => { },
};

export const DecksContext = createContext<DecksState>(DefaultState);
export const useDecks = () => useContext(DecksContext);

const DeckCanisters = [
    // {can: alphadeck, deck: AlphaDeck},
    { can: ChaosDecks.chaos1, deck: Chaos1Deck },
    { can: ChaosDecks.chaos2, deck: Chaos2Deck },
    { can: ChaosDecks.chaos3, deck: Chaos3Deck },
    { can: ChaosDecks.chaos4, deck: Chaos4Deck },
    { can: ChaosDecks.chaos5, deck: Chaos5Deck },
    { can: ChaosDecks.chaos6, deck: Chaos6Deck },
    { can: ChaosDecks.chaos7, deck: Chaos7Deck },
    { can: ChaosDecks.chaos8, deck: Chaos8Deck },
];

export default function DecksProvider({ children }: DecksProviderProps) {

    const { principal } = useInternetIdentity();

    const [deck, setDeck] = useState<Deck>(DefaultState.deck);
    const [availableDecks, setAvailableDecks] = useState<Deck[]>(DefaultState.availableDecks);

    function discoverDecks(prince?: Principal) {
        let p = prince || principal;
        if (p) {
            const canQueries: Promise<Deck>[] = [];
            for (const { can, deck } of DeckCanisters) {
                const query = can.getPrincipalNFT(p).then((r: NFT[]) => {
                    if (r.length) {
                        return deck;
                    }
                }).catch(console.error);
                canQueries.push(query);
            };
            Promise.all(canQueries).then(decks => {
                const discoveredDecks = decks.flat().filter(x => x !== undefined);
                discoveredDecks.push(DefaultDeck)
                console.log('Discovered these decks:', discoveredDecks);
                setAvailableDecks(discoveredDecks);
            });
            console.log('...querying canisters:', canQueries);
        } else {
            console.log('No identity, no-op.');
            return;
        }
    };

    useEffect(() => { console.log(principal?.toText()) }, [principal]);

    useEffect(() => {
        console.log('Identity changed. Discovering decks...');
        discoverDecks();
    }, [principal]);

    const value = useCallback(() => ({
        deck,
        setDeck,
        availableDecks,
        setAvailableDecks,
        knownDecks: [DefaultDeck].concat(DeckCanisters.map(x => x.deck)),
        discoverDecks,
    }), [deck, setDeck, availableDecks, setAvailableDecks]);

    return <DecksContext.Provider
        value={value()}
    >
        {children}
    </DecksContext.Provider>;
};
