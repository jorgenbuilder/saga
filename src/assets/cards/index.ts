import TarotDeckData from 'src/services/cards/cards';

export interface TarotCardSkin {
    cardIndex: number;
    cardName: string;
    filePath: string;
}

export interface TarotDeckSkin {
    cards: TarotCardSkin[];
    config?: {
        offsetBack?: [number, number],
        paddingBack?: [number, number],
        offsetFace?: [number, number],
        paddingFace?: [number, number],
    }
};

const RiderWaiteTarotSkin: TarotDeckSkin = {
    config: {
        offsetFace: [.485, .5],
        paddingFace: [.25, .25],
    },
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
            filePath: require(`./rider-waite/${suitMap[card.suit]}${`0${card.number}`.slice(-2)}.jpg`).default,
        }
    }).concat([{
        cardIndex: 78,
        cardName: 'CARD BACK',
        filePath: require('./rider-waite/back.jpg').default,
    },
    {
        cardIndex: 79,
        cardName: 'PROMPT CARD BACK',
        filePath: require(`./rider-waite/prompt-back.jpg`).default,
    }]).sort((a, b) => a.cardIndex - b.cardIndex)
};

export {
    RiderWaiteTarotSkin,
};
