import cardData from './data.json';

export type TarotDeck = TarotCard[];

export interface TarotSuit {
    name: 'Trump' | 'Cups' | 'Swords' | 'Wands' | 'Pentacles';
    index: 0 | 1 | 2 | 3 | 4;
    cardCount: 14 | 22;
}

export interface TarotCard {
    index: number;
    name: string;
    number: number;
    arcana: string;
    suit: TarotSuit['name'];
    keywords: string[];
    meanings: {
        light: string[];
        shadow: string[];
    };
    element: string;
    questions: string[];
    fortunes: string[];
    affirmation?: string;
    archetype?: string;
    hebrew?: string;
    numerology?: string;
    astrology?: string;
    mythology?: string;
}

export const TarotDeckData = cardData.cards as TarotDeck;

export const TarotSuitData: TarotSuit[] = [{
    name: 'Trump',
    index: 0,
    cardCount: 22,
}, {
    name: 'Cups',
    index: 1,
    cardCount: 14,
}, {
    name: 'Swords',
    index: 2,
    cardCount: 14,
}, {
    name: 'Wands',
    index: 3,
    cardCount: 14,
}, {
    name: 'Pentacles',
    index: 4,
    cardCount: 14,
},];

export const TarotMajorArcanaData = [
    'The Fool',
    'The Magician',
    'The High Priestess',
    'The Empress',
    'The Emperor',
    'The Hierophant',
    'The Lovers',
    'The Chariot',
    'Strength',
    'The Hermit',
    'Wheel of Fortune',
    'Justice',
    'The Hanged Man',
    'Death',
    'Temperance',
    'The Devil',
    'The Tower',
    'The Star',
    'The Moon',
    'The Sun',
    'Judgement',
    'The World',
];

export function mapIntToCard (int: number) {
    TarotDeckData.sort((a, b) => a.index - b.index);
    try {
        return TarotDeckData[int];
    } catch (e) {
        throw new Error(`No card exists for integer ${int}.`)
    }
}

export function mapIntToSuit (int: number) {
    const sortedSuitData = TarotSuitData.sort((a, b) => a.index - b.index);
    let previousSuitSum = 0;
    for (const suit of sortedSuitData) {
        if (int < suit.cardCount + previousSuitSum) {
            return suit.name;
        }
        previousSuitSum += suit.cardCount;
    }
    throw new Error(`No suit exists for integer ${int}.`)
}

export function mapIntToCardName (int: number) {
    const numberAsString = [undefined, 'Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Page', 'Knight', 'Queen', 'King'];
    const {number, suit} = mapIntToCard(int);
    if (suit === 'Trump') {
        return TarotMajorArcanaData[number];
    } else {
        return `${numberAsString[number]} of ${suit}`;
    }
}

export function getCardData (index: number) {
    return TarotDeckData.find(x => x.index === index) as TarotCard
}

export default TarotDeckData;
