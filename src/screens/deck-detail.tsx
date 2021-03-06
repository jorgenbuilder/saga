import { useParams } from 'react-router';
import Button from 'src/components/button';
import DeckStrip from 'src/components/deck-strip';
import { useDecks } from 'src/context/decks';
import styled from 'styled-components';

export default function DeckDetail () {
    const { slug } = useParams<{ slug: string }>();
    const { deck, knownDecks, setDeck } = useDecks();
    const viewDeck = knownDecks.find(x => x.slug === slug);
    if (!viewDeck) throw Error('Deck not found');

    return (
        <>
            <DeckStrip deck={viewDeck} />

            <Container>
                <Actions>
                    <Button active={deck === viewDeck} onClick={() => setDeck(viewDeck)}>Use This Deck</Button>
                    <br/>
                    <Button onClick={() => window.history.back()}>Back</Button>
                </Actions>
            </Container>
        </>
    );
};

const Container = styled.div`
position: fixed;
bottom: 2em;
display: flex;
width: 100%;
align-items: center;
justify-content: center;
`;

const Actions = styled.div`
max-width: 24em;
`;