import * as CardsService from './';

it(`generates random numbers to select cards`, () => {
    for (let i = 0; i < 1000; i++) {
        expect(typeof CardsService.randomCardIndex()).toBe('number');
    }
});

it(`doesn't generate numbers below 0`, () => {
    for (let i = 0; i < 1000; i++) {
        expect(CardsService.randomCardIndex()).toBeGreaterThanOrEqual(0);
    }
});

it(`doesn't generate numbers above 77`, () => {
    for (let i = 0; i < 1000; i++) {
        expect(CardsService.randomCardIndex()).toBeLessThanOrEqual(78);
    }
});

it(`generates random card indexes somewhat evenly`, () => {
    let draws = {};
    for (let i = 0; i < 1000; i++) {
        const draw = CardsService.randomCardIndex();
        draws[draw] = draws[draw] === undefined ? 0 : draws[draw] + 1;
    }
    for (let i = 0; i <= 77; i++) {
        expect(draws[i]).toBeGreaterThan(0);
    }
});

it(`has a valid card in store for each possible card index`, () => {
    expect(CardsService.TarotDeckData.length).toBe(78);
    for (const card of CardsService.TarotDeckData) {
        expect(typeof card.index).toBe('number');
        expect(typeof card.name).toBe('string');
        expect(typeof card.number).toBe('number');
        expect(typeof card.arcana).toBe('string');
        expect(typeof card.suit).toBe('string');
        expect(typeof card.keywords[0]).toBe('string');
        expect(typeof card.meanings.light[0]).toBe('string');
        expect(typeof card.meanings.shadow[0]).toBe('string');
        expect(typeof card.element).toBe('string');
        expect(typeof card.questions[0]).toBe('string');
        expect(typeof card.fortunes[0]).toBe('string');
    }
});

it(`has suits ordered as expected in the store`, () => {
    for (const card of CardsService.TarotDeckData) {
        const i = CardsService.TarotDeckData.indexOf(card);
        expect(card.suit).toBe(CardsService.mapIntToSuit(i));
    }
});

it(`has expected name for each card in the store`, () => {
    for (const card of CardsService.TarotDeckData) {
        const i = CardsService.TarotDeckData.indexOf(card);
        expect(card.name).toBe(CardsService.mapIntToCardName(i));
    }
});