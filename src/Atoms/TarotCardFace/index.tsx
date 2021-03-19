import { TarotCardStyleConstants } from '../../System/Constants/Style';

const TarotCardFaceStyles = `
width: ${TarotCardStyleConstants.width};
height: ${TarotCardStyleConstants.height};

border-radius: ${TarotCardStyleConstants.corners};

position: absolute;
backface-visibility: hidden;
`;

export {
    TarotCardFaceStyles,
}