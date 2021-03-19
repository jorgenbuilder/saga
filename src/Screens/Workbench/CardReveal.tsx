import styled from 'styled-components';
import AnimationPlane from '../../Atoms/AnimationPlane';
import TarotCard from '../../Molecules/TarotCard/HoverTilt';

const CardReveal:React.FC = () => {
    return (
        <Table>
            <TarotCard />
        </Table>
    );
}

export default CardReveal;

const Table = styled(AnimationPlane)`
display: flex;
align-items: center;
justify-content: center;
height: 100%;
`;