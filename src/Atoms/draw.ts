import { cardLabels } from '../Assets/cards';

const DrawCard: () => [number, boolean] = () => {
    const randomSeed = getRandomInt(1, 78);
    const randomBool = Math.random() >= .66;
    const label = cardLabels[randomSeed - 1];
    console.info(`Drew ${label} ${randomBool ? 'up-side-down' : 'right-side-up'} (${randomSeed})`);
    return [randomSeed, randomBool];
};

const getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default DrawCard;
