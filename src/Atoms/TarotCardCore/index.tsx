import { motion } from 'framer-motion';
import styled from 'styled-components';
import { TarotCardFaceStyles } from '../TarotCardFace';

interface TarotCardCoreProps {
    thickness?: number;
}

const TarotCardCore:React.FC<TarotCardCoreProps> = ({thickness = 5}) => {
    return (
        <TarotCardCoreDiv />
    );
}

export default TarotCardCore;

const StyleConstants = {
    colours: {
        stock: 'white',
    },
};

const TarotCardCoreDiv = styled(motion.div)<TarotCardCoreProps>`
${TarotCardFaceStyles}
background-color: ${StyleConstants.colours.stock};

z-index: -2;
`;