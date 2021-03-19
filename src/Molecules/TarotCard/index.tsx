import styled from 'styled-components';
import { motion, MotionProps } from 'framer-motion';
import TarotCardBack from '../../Atoms/TarotCardBack';
import TarotCardCore from '../../Atoms/TarotCardCore';
import TarotCardFront from '../../Atoms/TarotCardFront';
import { TarotCardFaceStyles } from '../../Atoms/TarotCardFace';
import React from 'react';

const TarotCard:React.FC<MotionProps & React.DOMAttributes<HTMLDivElement>> = (props) => {
    return (
        <TarotCardDiv
            {...props}
        > 
            <TarotCardBack />
            <TarotCardCore />
            <TarotCardFront />
        </TarotCardDiv>
    );
}

export default TarotCard;

const TarotCardDiv = styled(motion.div)`
${TarotCardFaceStyles}
transform-style: preserve-3d;
position: relative;
`;

