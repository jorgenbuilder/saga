import { useEffect, useState } from 'react';
import styled from 'styled-components';
import drawCard, { CardDraw } from 'src/services/cards/draws';
import TarotCardReveal from 'src/three/card/tarot-reveal';
import Reading from 'src/components/reading-body';
import { useInternetIdentity } from 'src/context/internet-identity';

export default function RevealScreen () {
    
    const { identity } = useInternetIdentity();

    const [draw, setDraw] = useState<CardDraw>()
    const [revealed, setRevealed] = useState<boolean>(false);

    useEffect(() => {
        if (!identity) return;
        drawCard(identity?.getPrincipal().toHex()).then(setDraw)
    }, [identity]);

    return (
        <Container revealed={revealed}>
            <Header>
                <TarotCardReveal
                    onClick={() => setRevealed(true)}
                    revealed={revealed}
                    draw={draw}
                />
            </Header>
            <Body isOn={revealed}>
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

const Body = styled.div<{isOn: boolean}>`
display: flex;
flex-direction: column;
padding: 20px 10px;
box-sizing: border-box;
opacity: ${props => props.isOn ? 1 : 0};
transform: ${props => props.isOn ? 'translateY(-9%)' : ''};
transition: all 620ms ease-out;

color: hsl(var(--color-gold));
`;
