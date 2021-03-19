import styled from 'styled-components';
import { TarotCardFaceStyles } from '../TarotCardFace';

const TarotCardFront:React.FC = () => {
    return (
        <TarotCardFrontDiv></TarotCardFrontDiv>
    );
};

export default TarotCardFront;

const StyleConstants = {
    colours: {
        stock: 'hsl(38, 100%, 95%)',
    },
};

const TarotCardFrontDiv = styled.div`
${TarotCardFaceStyles}
background-color: ${StyleConstants.colours.stock};

z-index: 1;
`;