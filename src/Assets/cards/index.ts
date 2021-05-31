import TarotDeckData from '../../Services/Cards/Cards';

export interface TarotCardSkin {
    cardIndex: number;
    cardName: string;
    filePath: string;
}

export type TarotDeckSkin = TarotCardSkin[];

const svgCards: TarotDeckSkin = TarotDeckData.map(card => {
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
}]);

const RiderWaiteCards: TarotDeckSkin = TarotDeckData.map(card => {
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
}]).sort((a, b) => a.cardIndex - b.cardIndex);

export {
    svgCards,
    RiderWaiteCards,
};
