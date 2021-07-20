import { createContext, Dispatch, ReactNode, SetStateAction, useCallback, useContext, useState } from 'react';
import AlphaDeck from './alphadeck';
import DefaultDeck from './default';

interface DecksState {
    deck: Deck;
    availableDecks: Deck[];
    setDeck: Dispatch<SetStateAction<Deck>>;
    setAvailableDecks: Dispatch<SetStateAction<Deck[]>>;
};

export interface Deck {
    name: string;
    serveCard: (index: number) => Promise<string>;  // return an image path or data
};

interface DecksProviderProps {
    children?: ReactNode;
};

const DefaultState: DecksState = {
    deck: DefaultDeck,
    availableDecks: [DefaultDeck, AlphaDeck],
    setDeck: () => {},
    setAvailableDecks: () => {},
};

export const DecksContext = createContext<DecksState>(DefaultState);
export const useDecks = () => useContext(DecksContext);

export default function DecksProvider({ children }: DecksProviderProps) {

    const [deck, setDeck] = useState<Deck>(DefaultState.deck);
    const [availableDecks, setAvailableDecks] = useState<Deck[]>(DefaultState.availableDecks);

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
