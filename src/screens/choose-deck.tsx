import styled from 'styled-components';
import { LinkButton } from 'src/components/button';
import Routes from 'src/constants/routes';
import { useDecks } from 'src/context/decks';

export default function ChooseDeckScreen () {
    const { availableDecks } = useDecks();
    return (
        <>
            <Container>
                {availableDecks.map(x => <LinkButton
                    to={`/decks/${x.slug}`}
                    key={x.slug}
                >{x.name}</LinkButton>)}
                <br /><br />
                <LinkButton to={Routes.index.path}>
                    Back
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
