import { useEffect, useState } from 'react';
import styled from 'styled-components';
import drawCard, { CardDraw } from 'src/services/cards/draws';
import { defaultUser } from 'src/services/users';
import TarotCardReveal from 'src/three/card/tarot-reveal';
import Reading from 'src/components/reading-body';

export default function RevealScreen () {

    const [draw, setDraw] = useState<CardDraw>()
    const [revealed, setRevealed] = useState<boolean>(false);

    useEffect(() => {
        drawCard(defaultUser).then(setDraw)
    }, [])

    return (
        <Container revealed={revealed}>
            <Header>
                <TarotCardReveal
                    onClick={() => setRevealed(true)}
                    revealed={revealed}
                    draw={draw}
                />
            </Header>
            <Body on={revealed}>
                <Reading draw={draw} />
            </Body>
        </Container>
    );
}

const Container = styled.div<{revealed: boolean}>`
height: ${({revealed}) => revealed ? 'auto' : '100%'};
overflow-y: ${({revealed}) => revealed ? 'auto' : 'hidden'};
`;

const Header = styled.div`
width: 100vw;
height: 100%;
flex-shrink: 0;

position: relative;
`;

const Body = styled.div<{on: boolean}>`
display: flex;
flex-direction: column;
padding: 20px 10px;
box-sizing: border-box;
opacity: ${props => props.on ? 1 : 0};
transform: ${props => props.on ? 'translateY(-9%)' : ''};
transition: all 620ms ease-out;

color: hsl(var(--color-gold));
`;
