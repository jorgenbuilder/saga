import { CardDraw } from 'src/services/cards/draws';
import data, { LabrynthosCardData } from './data';

export type ReadingTheme = 'General' | 'Love' | 'Career';

export function getReadingTheme (path: string) {
    const types: ['General', 'Love', 'Career'] = ['General', 'Love', 'Career'];
    for (let type of types) {
        if (path.includes(type.toLowerCase())) return type;
    }
    throw new Error('Unrecognized draw type');
}

export function getLabrynthosKeywords (draw: CardDraw, theme: ReadingTheme) {
    const cardData = data.find(x => x.index === draw.card) as LabrynthosCardData;
    switch (theme) {
        case 'General':
            return draw.upsidedown
                ? cardData.keywordsGeneralReversed
                : cardData.keywordsGeneralUpright;
        case 'Love':
            return draw.upsidedown
                ? cardData.keywordsLoveReversed
                : cardData.keywordsLoveUpright;
        case 'Career':
            return draw.upsidedown
                ? cardData.keywordsCareerReversed
                : cardData.keywordsCareerUpright;
    }
}

export function getLabrynthosMeaning (draw: CardDraw, theme: ReadingTheme) {
    const cardData = data.find(x => x.index === draw.card) as LabrynthosCardData;
    let meaning;
    switch (theme) {
        case 'General':
            meaning = draw.upsidedown
                ? cardData.meaningReversed
                : cardData.meaningUpright;
            break;
        case 'Love':
            meaning = draw.upsidedown
                ? cardData.meaningLoveReversed
                : cardData.meaningLoveUpright;
            break;
        case 'Career':
            meaning = draw.upsidedown
                ? cardData.meaningCareerReversed
                : cardData.meaningCareerUpright;
            break;
    }

    // Labrynthos meanings are often large single paragraphs.
    // This messes up my typesetting, so let's just break them up. 
    if (meaning.split('\n').length === 1) {
        const br = meaning.split('. ').length / 2;
        meaning = meaning.split('. ').map((x, i) => i === Math.floor(br) ? `\n${x}` : x).join('. ');
    }
    return meaning;
}
