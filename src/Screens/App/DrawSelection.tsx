import styled from 'styled-components';
import { LinkButton } from '../../Atoms/Button';
import Routes from '../../System/Constants/Routes'

const DrawSelectionScreen:React.FC = (props) => {
    return (
        <Container>
            <LinkButton to={Routes.drawGeneral.path}>
                General
            </LinkButton>
            <LinkButton to={Routes.drawLove.path}>
                Love
            </LinkButton>
            <LinkButton to={Routes.drawCareer.path}>
                Career
            </LinkButton>
        </Container>
    );
}

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
min-height: 100vh;
max-width: 420px;
width: 100%;
margin: 0 auto;
padding: 0 10px;
box-sizing: border-box;
> * { margin: 10px 0; }
`;

export default DrawSelectionScreen;