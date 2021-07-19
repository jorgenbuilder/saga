import { TarotDeckData } from './';
import Readings from '../readings/data';
import { tarot } from 'src/context/canisters';

export function pushCardsBasic () {
    const data = TarotDeckData.map(x => ({ index: x.index, name: x.name, number: x.number, suit: x.suit as string }));
    tarot.importTarotCards(data).then((r) => console.log('Import complete!', r)).catch(console.log);
}

export function pushCardsData1 () {
    const data = TarotDeckData.map(x => ({
        index: x.index,
        arcana: x.arcana,
        keywords: x.keywords,
        element: x.element,
        questions: x.questions,
        fortunes: x.fortunes,
        meanings: x.meanings,
        affirmation: x.affirmation || "",
        archetype: x.archetype || "",
        hebrew: x.hebrew || "",
        numerology: x.numerology || "",
        astrology: x.astrology || "",
        mythology: x.mythology || "",
    }));
    //@ts-ignore
    tarot.importTarotCardData1(data).then((r) => console.log('Import complete!', r)).catch(console.log);
};

export function pushCardsData2 () {
    const data = Readings.map(x => ({ index: x.index, description: x.description,keywordsGeneralUpright: x.keywordsGeneralUpright,keywordsGeneralReversed: x.keywordsGeneralReversed,keywordsLoveUpright: x.keywordsLoveUpright,keywordsLoveReversed: x.keywordsLoveReversed,keywordsCareerUpright: x.keywordsCareerUpright,keywordsCareerReversed: x.keywordsCareerReversed,meaningUpright: x.meaningUpright,meaningReversed: x.meaningReversed,meaningLoveUpright: x.meaningLoveUpright,meaningLoveReversed: x.meaningLoveReversed,meaningCareerUpright: x.meaningCareerUpright,meaningCareerReversed: x.meaningCareerReversed, }));
    //@ts-ignore
    tarot.importTarotCardData2(data).then((r) => console.log('Import complete!', r)).catch(console.log);
};