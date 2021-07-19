import { createContext, ReactNode, useContext, useState } from 'react';
import DefaultDeck from './default';

interface DecksState {
    deck: Deck;
    availableDecks: Deck[];
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
    availableDecks: [DefaultDeck],
};

export const DecksContext = createContext<DecksState>(DefaultState);
export const useCanister = () => useContext(DecksContext);

export default function DecksProvider({ children }: DecksProviderProps) {

    const [deck, setDeck] = useState<Deck>(DefaultState.deck);
    const [availableDecks, setAvailableDecks] = useState<Deck[]>(DefaultState.availableDecks);

    const value = {
        deck,
        availableDecks,
    };

    return <DecksContext.Provider
        value={value}
    >
        {children}
    </DecksContext.Provider>;
};
