import styled from 'styled-components';
import AnimationPlane from '../../Atoms/AnimationPlane';
import StaticRotateY from '../../Atoms/Animations/StaticRotateY';
import TarotCard from '../../Molecules/TarotCard';

const WorkbenchStaticRotation:React.FC = () => {
    return (
        <Table>
            <TarotCard {...StaticRotateY} />
        </Table>
    );
}

export default WorkbenchStaticRotation;

const Table = styled(AnimationPlane)`
display: flex;
align-items: center;
justify-content: center;
height: 100%;
`;