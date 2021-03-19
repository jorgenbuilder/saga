import styled from 'styled-components';
import { motion } from 'framer-motion';
import TarotCardBack from '../Atoms/TarotCardBack';
import TarotCardCore from '../Atoms/TarotCardCore';
import TarotCardFront from '../Atoms/TarotCardFront';
import { TarotCardFaceStyles } from '../Atoms/TarotCardFace';

const TarotCard:React.FC = () => {
    return (
        <TarotCardDiv
            animate={{ rotateY: 360 }}
            transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'linear',
            }}
        > 
            <TarotCardBack />
            <TarotCardCore />
            <TarotCardFront />
        </TarotCardDiv>
    );
}

export default TarotCard;

const StyleConstants = {
}

const TarotCardDiv = styled(motion.div)`
${TarotCardFaceStyles}
transform-style: preserve-3d;
position: relative;
`;

