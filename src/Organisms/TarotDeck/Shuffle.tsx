import TarotCard from '../../Molecules/TarotCard'
import {
    ShuffleLeft,
    ShuffleRight,
} from '../../Atoms/Animation/Shuffle';
import styled from 'styled-components';

const ShuffleDeck:React.FC = () => {
    return (
        <>
            <ShuffleLeftCard
                style={{animationDelay: '0'}}
            />
            <ShuffleRightCard
                style={{animationDelay: '.5s'}}
            />
            <ShuffleLeftCard
                style={{animationDelay: '1s'}}
            />
            <ShuffleRightCard
                style={{animationDelay: '1.5s'}}
            />
        </>
    );
}

export default ShuffleDeck;

const ShuffleLeftCard = styled(TarotCard)`
position: absolute;
transform: translateX(0) translateZ(0) rotateY(180deg);
z-index: 5;
backface-visibility: visible;
animation: ${ShuffleLeft} 1.5s ease-in-out infinite;
`;

const ShuffleRightCard = styled(TarotCard)`
position: absolute;
transform: translateX(0) translateZ(0) rotateY(180deg);
z-index: 5;
backface-visibility: visible;
animation: ${ShuffleRight} 1.5s ease-in-out infinite;
`;
