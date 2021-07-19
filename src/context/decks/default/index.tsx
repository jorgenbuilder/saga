import TarotDeckData from 'src/services/cards/cards';
import { Deck } from '..';

export interface TarotCardSkin {
    cardIndex: number;
    cardName: string;
    filePath: string;
}

export interface TarotDeckSkin {
    cards: TarotCardSkin[];
};

const RiderWaiteTarotSkin: TarotDeckSkin = {
    cards: TarotDeckData.map(card => {
        const suitMap = {
            'Trump': 'm',
            'Cups': 'c',
            'Swords': 's',
            'Wands': 'w',
            'Pentacles': 'p',
        };
        return {
            cardIndex: card.index,
            cardName: card.name,
            filePath: require(`./${suitMap[card.suit]}${`0${card.number}`.slice(-2)}.jpg`).default,
        }
    }).concat([{
        cardIndex: 78,
        cardName: 'CARD BACK',
        filePath: require('./back.jpg').default,
    },
    {
        cardIndex: 79,
        cardName: 'PROMPT CARD BACK',
        filePath: require(`./prompt-back.jpg`).default,
    }]).sort((a, b) => a.cardIndex - b.cardIndex)
};

const DefaultDeck: Deck = {
    name: 'Rider Waite Smith',
    serveCard (index: number) {
        if (index > 79) throw Error(`Index ${index} doesn't exist. There are 78 cards (0-77,) plus two card backs (78, 79.)`);
        return (RiderWaiteTarotSkin.cards.find(x => x.cardIndex === index) as TarotCardSkin).filePath;
    },
};

export default DefaultDeck;