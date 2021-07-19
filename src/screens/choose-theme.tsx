import styled from 'styled-components';
import Helmet from 'react-helmet';
import { LinkButton } from 'src/components/button';
import Routes from 'src/constants/routes';
import { useContext } from 'react';
import { DecksContext } from 'src/context/decks';

const ChooseThemeScreen:React.FC = () => {
    const { deck } = useContext(DecksContext);
    return (
        <>
            <Helmet>
                <link rel="preload" as="image" href={deck.serveCard(78)} />
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