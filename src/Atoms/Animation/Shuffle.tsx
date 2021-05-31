import { keyframes } from 'styled-components';

const ShuffleLeft = keyframes`
0% {
    transform: translateX(0) translateZ(0) rotateY(180deg);
    z-index: 10;
}

50% {
    transform: translateX(3in) translateZ(100px) rotateY(150deg);
    z-index: 10;
}
51% {
    z-index: 5;
}

80% {
    transform: translateX(0) translateZ(-50px) rotateY(180deg);
    z-index: 1;
}
100% {
    transform: translateX(0) translateZ(0) rotateY(180deg);
    z-index: 10;
}
`;

const ShuffleRight = keyframes`
0% {
    transform: translateX(0) translateZ(0) rotateY(180deg);
    z-index: 10;
}

50% {
    transform: translateX(-3in) translateZ(100px) rotateY(210deg);
    z-index: 10;
}
51% {
    z-index: 5;
}

80% {
    transform: translateX(0) translateZ(-50px) rotateY(180deg);
    z-index: 1;
}
100% {
    transform: translateX(0) translateZ(0) rotateY(180deg);
    z-index: 10;
}
`;

export {
    ShuffleLeft,
    ShuffleRight,
}