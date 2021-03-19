import { motion } from 'framer-motion';
import styled from 'styled-components';

const AnimationPlane:React.FC = (props) => {
    return (
        <AnimationPlaneDiv {...props} />
    );
}

export default AnimationPlane;

const AnimationPlaneDiv = styled(motion.div)`
perspective: 1000px;
`;