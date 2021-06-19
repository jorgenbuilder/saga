import styled from 'styled-components';
import Helmet from 'react-helmet';
import { LinkButton } from 'components/button';
import Routes from 'constant/routes';
import CardBack from 'assets/cards/rider-waite/back.jpg';

const ChooseThemeScreen:React.FC = () => {
    return (
        <>
            <Helmet>
                <link rel="preload" as="image" href={CardBack} />
            </Helmet>
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
        </>
    );
}

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
height: 100%;
max-width: 420px;
width: 100%;
margin: 0 auto;
padding: 0 10px;
box-sizing: border-box;
> * { margin: 10px 0; }
`;

export default ChooseThemeScreen;