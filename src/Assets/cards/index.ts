const svgCards: string[] = [
    require('./svg-basic/card-back.svg').default,
    require('./svg-basic/card-lesser-cups-1.svg').default,
    require('./svg-basic/card-lesser-cups-2.svg').default,
    require('./svg-basic/card-lesser-cups-3.svg').default,
    require('./svg-basic/card-lesser-cups-4.svg').default,
    require('./svg-basic/card-lesser-cups-5.svg').default,
    require('./svg-basic/card-lesser-cups-6.svg').default,
    require('./svg-basic/card-lesser-cups-7.svg').default,
    require('./svg-basic/card-lesser-cups-8.svg').default,
    require('./svg-basic/card-lesser-cups-9.svg').default,
    require('./svg-basic/card-lesser-cups-10.svg').default,
    require('./svg-basic/card-lesser-cups-11.svg').default,
    require('./svg-basic/card-lesser-cups-12.svg').default,
    require('./svg-basic/card-lesser-cups-13.svg').default,
    require('./svg-basic/card-lesser-cups-14.svg').default,
    require('./svg-basic/card-lesser-wands-1.svg').default,
    require('./svg-basic/card-lesser-wands-2.svg').default,
    require('./svg-basic/card-lesser-wands-3.svg').default,
    require('./svg-basic/card-lesser-wands-4.svg').default,
    require('./svg-basic/card-lesser-wands-5.svg').default,
    require('./svg-basic/card-lesser-wands-6.svg').default,
    require('./svg-basic/card-lesser-wands-7.svg').default,
    require('./svg-basic/card-lesser-wands-8.svg').default,
    require('./svg-basic/card-lesser-wands-9.svg').default,
    require('./svg-basic/card-lesser-wands-10.svg').default,
    require('./svg-basic/card-lesser-wands-12.svg').default,
    require('./svg-basic/card-lesser-wands-12.svg').default,
    require('./svg-basic/card-lesser-wands-13.svg').default,
    require('./svg-basic/card-lesser-wands-14.svg').default,
    require('./svg-basic/card-lesser-pentacles-1.svg').default,
    require('./svg-basic/card-lesser-pentacles-2.svg').default,
    require('./svg-basic/card-lesser-pentacles-3.svg').default,
    require('./svg-basic/card-lesser-pentacles-4.svg').default,
    require('./svg-basic/card-lesser-pentacles-5.svg').default,
    require('./svg-basic/card-lesser-pentacles-6.svg').default,
    require('./svg-basic/card-lesser-pentacles-7.svg').default,
    require('./svg-basic/card-lesser-pentacles-8.svg').default,
    require('./svg-basic/card-lesser-pentacles-9.svg').default,
    require('./svg-basic/card-lesser-pentacles-10.svg').default,
    require('./svg-basic/card-lesser-pentacles-12.svg').default,
    require('./svg-basic/card-lesser-pentacles-12.svg').default,
    require('./svg-basic/card-lesser-pentacles-13.svg').default,
    require('./svg-basic/card-lesser-pentacles-14.svg').default,
    require('./svg-basic/card-lesser-swords-1.svg').default,
    require('./svg-basic/card-lesser-swords-2.svg').default,
    require('./svg-basic/card-lesser-swords-3.svg').default,
    require('./svg-basic/card-lesser-swords-4.svg').default,
    require('./svg-basic/card-lesser-swords-5.svg').default,
    require('./svg-basic/card-lesser-swords-6.svg').default,
    require('./svg-basic/card-lesser-swords-7.svg').default,
    require('./svg-basic/card-lesser-swords-8.svg').default,
    require('./svg-basic/card-lesser-swords-9.svg').default,
    require('./svg-basic/card-lesser-swords-10.svg').default,
    require('./svg-basic/card-lesser-swords-12.svg').default,
    require('./svg-basic/card-lesser-swords-12.svg').default,
    require('./svg-basic/card-lesser-swords-13.svg').default,
    require('./svg-basic/card-lesser-swords-14.svg').default,
    require('./svg-basic/card-greater-1.svg').default,
    require('./svg-basic/card-greater-2.svg').default,
    require('./svg-basic/card-greater-3.svg').default,
    require('./svg-basic/card-greater-4.svg').default,
    require('./svg-basic/card-greater-5.svg').default,
    require('./svg-basic/card-greater-6.svg').default,
    require('./svg-basic/card-greater-7.svg').default,
    require('./svg-basic/card-greater-8.svg').default,
    require('./svg-basic/card-greater-9.svg').default,
    require('./svg-basic/card-greater-10.svg').default,
    require('./svg-basic/card-greater-11.svg').default,
    require('./svg-basic/card-greater-12.svg').default,
    require('./svg-basic/card-greater-13.svg').default,
    require('./svg-basic/card-greater-14.svg').default,
    require('./svg-basic/card-greater-15.svg').default,
    require('./svg-basic/card-greater-16.svg').default,
    require('./svg-basic/card-greater-17.svg').default,
    require('./svg-basic/card-greater-18.svg').default,
    require('./svg-basic/card-greater-19.svg').default,
    require('./svg-basic/card-greater-20.svg').default,
    require('./svg-basic/card-greater-21.svg').default,
    require('./svg-basic/card-greater-22.svg').default,
];

//@ts-ignore
const range = (count: number) => [...Array(count).keys()];

const cups = range(14).map(x => require(`./rider-waite/c${`0${x + 1}`.slice(-2)}.jpg`).default);
const wands = range(14).map(x => require(`./rider-waite/w${`0${x + 1}`.slice(-2)}.jpg`).default);
const pentacles = range(14).map(x => require(`./rider-waite/p${`0${x + 1}`.slice(-2)}.jpg`).default);
const swords = range(14).map(x => require(`./rider-waite/s${`0${x + 1}`.slice(-2)}.jpg`).default);
const major = range(22).map(x => require(`./rider-waite/m${`0${x}`.slice(-2)}.jpg`).default);
const RiderWaiteCards: string[] = [
    require('./rider-waite/back.jpg').default,
].concat(cups).concat(wands).concat(pentacles).concat(swords).concat(major);

const mapIntToCard: (int: number, suits?: string[]) => [number, string] = (int, suits) => {
    suits = suits || ['Cups', 'Wands', 'Pentacles', 'Swords', 'Major'];
    let suit = '';
    let card = int;
    if (int === 0) {
        return [0, 'Card Back'];
    } else if (int <= 14) {
        suit = suits[0];
    } else if (int <= 28) {
        suit = suits[1];
        card -= 14;
    } else if (int <= 42) {
        suit = suits[2];
        card -= 28;
    } else if (int <= 56) {
        suit = suits[3];
        card -= 42;
    } else {
        suit = suits[4];
        card -= 56;
    }
    return [card, suit];
};

const majorArcana = [
    'The Fool',
    'The Magician',
    'The High Priestess',
    'The Empress',
    'The Emperor',
    'The Heirophant',
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

const cardLabels = range(78).map(x => {
    const [card, suit] = mapIntToCard(x);
    if (suit === 'Major') {
        return majorArcana[card];
    } else if (card >= 10) {
        const faceCards = ['Page', 'Knight', 'Queen', 'King'];
        return `${faceCards[card - 10]} of ${suit}`;
    } else {
        return `${card + 1} of ${suit}`;
    }
});

console.log(cardLabels);

export {
    svgCards,
    RiderWaiteCards,
    cardLabels,
};
