import styled from 'styled-components';
import { TarotCardFaceStyles } from '../TarotCardFace';
import AssetCardFace from '../../Assets/card-face.png';

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
background-image: url(${AssetCardFace});
background-size: contain;

z-index: 1;
`;