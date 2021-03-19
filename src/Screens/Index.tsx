import styled from 'styled-components';
import AnimationPlane from '../Atoms/AnimationPlane';
import TarotCard from '../Molecules/TarotCard';

const IndexScreen:React.FC = () => {
    return (
        <Table>
            <TarotCard />
        </Table>
    );
};

export default IndexScreen;


const Table = styled(AnimationPlane)`
display: flex;
align-items: center;
justify-content: center;
height: 100%;
`;