import { useState } from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import Routes from 'src/constants/routes';
import { CardDraw } from 'src/services/cards/draws';
import { getCardData } from 'src/services/cards/cards';
import { getLabrynthosKeywords, getLabrynthosMeaning, getReadingTheme } from 'src/services/readings';
import { LinkButton } from './button';
import Certification from './reading-cert';
import UprightIndicator from './upright-indicator';
import PromptCardReveal from 'src/three/card/prompt-reveal';
import AirCoin from 'src/assets/coins/air.svg';
import EarthCoin from 'src/assets/coins/earth.svg';
import WaterCoin from 'src/assets/coins/water.svg';
import FireCoin from 'src/assets/coins/fire.svg';
import { useMemo } from 'react';

interface Props {
    draw?: CardDraw;
};

export default function Reading ({ draw }: Props) {
    const { pathname } = useLocation();
    const theme = getReadingTheme(pathname);
    const cardData = draw ? getCardData(draw.card) : getCardData(0);
    const keywords = draw ? getLabrynthosKeywords(draw, theme) : [];
    const meaning = draw ? getLabrynthosMeaning(draw, theme) : '';
    const timestamp = draw ? new Date(draw.timestamp) : new Date();
    const coinMap = {
        air: AirCoin,
        earth: EarthCoin,
        water: WaterCoin,
        fire: FireCoin,
    };
    const coin = Object.keys(coinMap).includes(cardData.element.toLowerCase()) ? coinMap[cardData.element.toLowerCase() as 'fire' | 'air' | 'earth' | 'water'] : undefined;
    const prompt = useMemo(() => cardData.questions[Math.floor(cardData.questions.length * Math.random())], [cardData]);

    const [promptRevealed, setPromptRevealed] = useState<boolean>(false);

    return (
        <>
            <ReadingHead>
                <ReadingCardName>
                    <H1 length={cardData.name.length}>{cardData.name}</H1>
                    <UprightIndicator reversed={draw?.upsidedown || false} />
                </ReadingCardName>
                <Keywords>
                    {keywords.map((x, i) => <>
                        {i < 4 && <Keyword length={x.length} key={`${i}--keyword`}>{x}</Keyword>}
                        {i < 3 && i < keywords.length - 1 && <HeaderBullet key={`${i}--bullet`}>•</HeaderBullet>}
                    </>)}
                </Keywords>
            </ReadingHead>
            <ReadingBody>
                <Rag>
                    {meaning.split('\n').map((x, i) => <div key={`p-${i}`}>
                        {i === 0
                            ? <>
                                <P>
                                    <DropCap>{x[0]}</DropCap> {x.slice(1, x.length)}
                                </P>
                                {coin && <ElementalCoin
                                    clear={meaning.split('\n').length === 1}
                                    height="100"
                                    width="100"
                                    src={coin}
                                />}
                            </>
                            : <P>{x}</P>
                        }
                    </div>)}
                    <div style={{position: 'relative', zIndex: 100}}>
                        <H2>Ask Yourself</H2>
                    </div>
                </Rag>
                <ReadingPrompt>
                    <PromptCardReveal
                        onClick={() => setPromptRevealed(!promptRevealed)}
                        revealed={promptRevealed}
                        prompt={prompt}
                    />
                </ReadingPrompt>
                <div style={{position: 'relative', zIndex: 100}}>
                    <Certification
                        type={theme}
                        timestamp={timestamp}
                        handle="@anonymous"
                    />
                    <Rag style={{marginTop: '100px'}}>
                        <LinkButton to={Routes.drawSelection.path}>Okay</LinkButton>
                    </Rag>
                </div>
            </ReadingBody>
        </>
    );
}

const ReadingPrompt = styled.div`
height: 480px;
margin: -120px 0;
`;

const H2 = styled.h2`
margin: 75px 0 25px;
font-family: Almendra;
font-size: 32px;
text-align: center;
`;

const H1 = styled.h1<{length: number}>`
margin: 0;
width: 100%;
font-family: 'Astloch';
font-size: ${p => p.length > 12 ? `50px` : `56px`};
font-weight: 100;
`;

const P = styled.p`
margin: 0 0 25px;
font-family: Cardo;
font-size: 20px;
line-height: 1.75;
`;

const Rag = styled.div`
max-width: 680px;
margin: 0 auto;
`;

const ReadingBody = styled.div`
text-align: left;
overflow-x: hidden;
`;

const ReadingHead = styled.div`
padding:  10px 0 30px 0;
margin: 0 0 25px 0;
text-align: center;
text-shadow: 0 1px 10px var(--color-back);
background: linear-gradient(
    0deg,
    hsla(var(--color-back), 1) 50%,
    hsla(var(--color-back), 0) 100%
);
`;

const ReadingCardName = styled.div`
display: flex;
max-width: 680px;
margin: 0 auto;
`;

const HeaderBullet = styled.span`
display: inline-block;
margin: 0 .5em;
`;

const Keywords = styled.div`
font-family: Almendra;
font-size: 20px;
text-transform: capitalize;
`;

const Keyword = styled.span<{length: number}>`
${({length}) => length > 12 && 'font-size: 18px;'}
`;

const DropCap = styled.span`
display: flex;
align-items: center;
justify-content: center;
width: 86px;
height: 86px;
margin: 10px 10px 0 0;
float: left;
background-color: hsl(var(--color-copper));
border: 1px solid hsl(var(--color-gold));
color: hsl(var(--color-gold));
font-family: 'Uncial Antiqua';
font-size: 62px;
`;

const ElementalCoin = styled.img<{clear: boolean}>`
display: block;
${(({clear}) => clear
    ? `
    margin: 0 auto 50px;
    `
    :`
    margin: 20px 30px 30px 75px;
    float: right;
    ` 
)}

shape-outside: circle(50%);
`;