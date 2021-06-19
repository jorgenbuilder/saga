import TarotDeckData from '../../services/cards/cards';

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
}

const SvgTarotSkin: TarotDeckSkin = {
    cards: TarotDeckData.map(card => {
        const suitMap = {
            'Trump': 'greater',
            'Cups': 'lesser-cups',
            'Swords': 'lesser-swords',
            'Wands': 'lesser-wands',
            'Pentacles': 'lesser-pentacles',
        };
        const cardNumber = card.suit === 'Trump' ? card.number + 1 : card.number
        return {
            cardIndex: card.index,
            cardName: card.name,
            filePath: require(`./svg-basic/card-${suitMap[card.suit]}-${cardNumber}.svg`).default,
        }
    }).concat([{
        cardIndex: 78,
        cardName: 'CARD BACK',
        filePath: require(`./svg-basic/card-back.svg`).default,
    }])
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
    }]).sort((a, b) => a.cardIndex - b.cardIndex)
};

export {
    SvgTarotSkin,
    RiderWaiteTarotSkin,
};
