import styled from 'styled-components';
import { TarotCardFaceStyles } from '../TarotCardFace';

const TarotCardBack:React.FC = () => {
    return (
        <TarotCardBackDiv></TarotCardBackDiv>
    );
}

export default TarotCardBack;

const StyleConstants = {
    colours: {
        stock: 'hsl(240, 25%, 18%)'
    },
};

const TarotCardBackDiv = styled.div`
${TarotCardFaceStyles}
background-color: ${StyleConstants.colours.stock};

z-index: -1;
transform: rotateY(180deg);
`;