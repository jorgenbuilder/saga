import styled from 'styled-components';
import Button, { LinkButton } from 'src/components/button';
import Routes from 'src/constants/routes';
import { useDecks } from 'src/context/decks';

export default function ChooseDeckScreen () {
    const { deck, setDeck, availableDecks } = useDecks();
    return (
        <>
            <Container>
                {availableDecks.map(x => <Button
                    children={x.name}
                    active={deck === x}
                    onClick={() => setDeck(x)}
                    key={x.name}
                />)}
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
