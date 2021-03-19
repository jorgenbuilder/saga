import styled from 'styled-components';
import AnimationPlane from '../../Atoms/AnimationPlane';
import ShuffleDeck from '../../Organisms/TarotDeck/Shuffle';

const WorkbenchShuffleDeck:React.FC = () => {
    return (
        <Table>
            <ShuffleDeck />
        </Table>
    );
}

export default WorkbenchShuffleDeck;

const Table = styled(AnimationPlane)`
display: flex;
align-items: center;
justify-content: center;
height: 100%;
`;