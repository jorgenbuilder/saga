import { createContext, Dispatch, ReactNode, SetStateAction, useCallback, useContext, useEffect, useState } from 'react';
import { useInternetIdentity } from '../internet-identity';
import AlphaDeck, { deck as alphadeck} from './alphadeck';
import DefaultDeck from './default';

interface DecksState {
    deck: Deck;
    viewDeck?: Deck;
    availableDecks: Deck[];
    setDeck: Dispatch<SetStateAction<Deck>>;
    setAvailableDecks: Dispatch<SetStateAction<Deck[]>>;
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
};

export const DecksContext = createContext<DecksState>(DefaultState);
export const useDecks = () => useContext(DecksContext);

export default function DecksProvider({ children }: DecksProviderProps) {

    const [deck, setDeck] = useState<Deck>(DefaultState.deck);
    const [availableDecks, setAvailableDecks] = useState<Deck[]>(DefaultState.availableDecks);

    const { identity } = useInternetIdentity();

    useEffect(() => {
        if (identity) {
            alphadeck.getPrincipalNFT(identity?.getPrincipal()).catch(console.error).then((resp: any) => {
                if (!resp) return;
                if (resp.length) {
                    setAvailableDecks([DefaultDeck, AlphaDeck]);
                } else {
                    setAvailableDecks([DefaultDeck]);
                }
            });
        }
    }, [identity]);

    const value = useCallback(() => ({
        deck,
        setDeck,
        availableDecks,
        setAvailableDecks,
    }), [deck, setDeck, availableDecks, setAvailableDecks,]);

    return <DecksContext.Provider
        value={value()}
    >
        {children}
    </DecksContext.Provider>;
};
