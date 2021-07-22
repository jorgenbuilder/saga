//                                                    )                    
//    (         )                (                 ( /(                    
//    )\     ( /(     )          )\ )              )\())               (   
// ((((_)(   )\()) ( /(   (     (()/(  (    (     ((_)\   (   `  )    ))\  
//  )\ _ )\ ((_)\  )(_))  )\ )   ((_)) )\   )\ )   _((_)  )\  /(/(   /((_) 
//  (_)_\(_)| |(_)((_)_  _(_/(   _| | ((_) _(_/(  | || | ((_)((_)_\ (_))   
//   / _ \  | '_ \/ _` || ' \))/ _` |/ _ \| ' \)) | __ |/ _ \| '_ \)/ -_)  
//  /_/ \_\ |_.__/\__,_||_||_| \__,_|\___/|_||_|  |_||_|\___/| .__/ \___|  
//                                                           |_|                                                           |_|          
// This is hackathon code.

import * as THREE from 'three';
import styled, { keyframes } from 'styled-components';
import { ReactComponent as BigLoader } from 'src/assets/loader-big.svg';
import { Suspense, useRef, useState } from 'react';
import { useEffect } from 'react';
import Button, { LinkButton } from 'src/components/button';
import { DropCap } from 'src/components/reading-body';
import DefaultLighting from 'src/three/lighting';
import { Canvas, ThreeEvent, useFrame } from '@react-three/fiber';
import BlankTarotCardMesh from 'src/three/card/tarot-blank';
import TarotCardMesh from 'src/three/card/tarot';
import { useSpring } from '@react-spring/three';
import dfinity from 'src/assets/dfinity.png';
import Chaos1 from 'src/assets/hackathon/chaos-1.png';
import Chaos2 from 'src/assets/hackathon/chaos-2.png';
import Chaos3 from 'src/assets/hackathon/chaos-3.png';
import Chaos4 from 'src/assets/hackathon/chaos-4.png';
import Chaos5 from 'src/assets/hackathon/chaos-5.png';
import Chaos6 from 'src/assets/hackathon/chaos-6.png';
import Chaos7 from 'src/assets/hackathon/chaos-7.png';
import Chaos8 from 'src/assets/hackathon/chaos-8.png';
import { useInternetIdentity } from 'src/context/internet-identity';

const deadDrop = new Date('August 1 2021').getTime();

export default function HackathonDecks() {
    function count() { return Math.floor((deadDrop - new Date().getTime()) / 1000); };
    const [countdown, setCountdown] = useState<number>(count());
    useEffect(() => {
        const i = setInterval(() => setCountdown(Math.max(count(), 0)), 1000);
        return () => clearInterval(i);
    }, []);

    function toTimer(countdown: number) {
        function pad(n: number) { return n < 10 ? `0${n}` : `${n}` }
        const d = Math.floor(countdown / (60 * 60 * 24));
        const h = pad(Math.floor(countdown % (60 * 60 * 24) / (60 * 60)));
        const m = pad(Math.floor(countdown % (60 * 60) / 60));
        const s = pad(Math.floor(countdown % (60 * 60) % 60));
        return `${d}:${h}:${m}:${s}`;
    }

    const chooseSection = useRef<HTMLDivElement>(null);

    const [hasDeck, setHasDeck] = useState<boolean>(false);

    return (
        <Root>
            <Head>
                <Logo>
                    <StyledSpinner />
                    <H1>Saga</H1>
                </Logo>
                <H2><span>D</span><span>S</span><span>C</span><span>V</span><span>R</span> Hackathon<br />Special Release</H2>
                <Timer>
                    <p>Claim A Deck While You Can!</p>
                    <Countdown>{toTimer(countdown)}</Countdown>
                </Timer>
                <div style={{ width: '24em' }}>
                    <Button onClick={() => chooseSection?.current?.scrollIntoView()}>Claim Your Deck</Button>
                </div>
            </Head>
            <TwoBy>
                <CardDemo>
                    <Canvas>
                        <DemoCanvas />
                    </Canvas>
                </CardDemo>
                <TypeSet>
                    <p>
                        <DropCap>F</DropCap> or a limited time, during the first ever DSCVR hackathon, claim your own digital deck of once ever tarot cards. When the clock stops these decks will never be minted again. The decks that are minted—and the Internet Identities that minted them—will live on. Mint yours and say "I was here!!"
                    </p>
                    <p style={{ textAlign: 'center' }}><span style={{ display: 'inline-block', transform: 'rotate(90deg)' }}>§</span></p>
                    <p>Many cultures have held the belief that we imprint our fortunes on the physical world around us. When we roll the bones, drink the draught, or draw the card, that the material side effects are not arbitrary but threaded of our fates—encoded with our data.</p>
                    <p>Why not so in computer systems? What happens when neural networks that we trained to see our world recurse? Saga invites you to reflect with this unique deck art that blends the traditional Rider Waite Smith (RWS) deck with Google DeepDream.</p>
                </TypeSet>
            </TwoBy>
            <ChooseSection ref={chooseSection}>
                {hasDeck
                    ? <YourChoice />
                    : countdown === 0
                        ? <DeadDrop />
                        : <ChooseCanvas claim={() => { setHasDeck(true); chooseSection?.current?.scrollIntoView(); }} />}
            </ChooseSection>
            <Thanks>These decks are a proof-of-concept for Saga Tarot, and your participation is very much appreciated. This is an <a href="https://www.github.com/jorgenbuilder/saga">open source</a> distributed application on Internet Computer. These decks can be used in Saga Tarot canisters, and they are simple enough to be integrated into any software. Anyone can mint decks like these. If you are interested in letting people use these decks in your software, or in minting decks with your art, reach out to <a href="https://twitter.com/SagaCards">@SagaCards</a> on Twitter for help.</Thanks>
            <H3>Ledger</H3>
            <Ledger />
        </Root>
    );
};

export function DemoCanvas() {
    const [rot, setRot] = useState<number>(0);
    const [active, setActive] = useState<number>(0);
    const cards = [0, 1, 2, 3, 4];
    useFrame(() => setRot(rot + .5));
    return (
        <>
            {cards.map((i) => <DemoCard rot={rot} i={i} active={active} cards={cards} setActive={setActive} setRot={setRot} />)}
            <DefaultLighting />
        </>
    );
};

function DemoCard({ rot, i, active, cards, setActive, setRot }: { rot: number, i: number, active: number, cards: number[], setActive: (i: number) => void, setRot: (i: number) => void }) {
    const [hover, setHover] = useState<boolean>(false);
    const scaHover = hover ? .01 : 0;
    const posHover = hover ? -.15 : 0;
    const props = function () {
        const inactives = cards.filter(x => x !== active);
        switch (i === active) {
            case true: return {
                rotation: [0, THREE.MathUtils.degToRad(rot), 0] as unknown as THREE.Euler,
                position: [0, -1.125, 0] as unknown as THREE.Vector3,
                scale: .8 as unknown as THREE.Vector3,
            };
            default: switch (inactives.indexOf(i)) {
                case 0: return {
                    rotation: [0, 0, THREE.MathUtils.degToRad(12)] as unknown as THREE.Euler,
                    position: [-1, 2.65 + posHover, -.25] as unknown as THREE.Vector3,
                    scale: .4 + scaHover as unknown as THREE.Vector3,
                };
                case 1: return {
                    rotation: [0, 0, THREE.MathUtils.degToRad(4)] as unknown as THREE.Euler,
                    position: [-.375, 2.75 + posHover, -.5] as unknown as THREE.Vector3,
                    scale: .4 + scaHover as unknown as THREE.Vector3,
                };
                case 2: return {
                    rotation: [0, 0, THREE.MathUtils.degToRad(-4)] as unknown as THREE.Euler,
                    position: [.375, 2.75 + posHover, -.75] as unknown as THREE.Vector3,
                    scale: .4 + scaHover as unknown as THREE.Vector3,
                };
                case 3: return {
                    rotation: [0, 0, THREE.MathUtils.degToRad(-12)] as unknown as THREE.Euler,
                    position: [1, 2.65 + posHover, -1] as unknown as THREE.Vector3,
                    scale: .4 + scaHover as unknown as THREE.Vector3,
                };
            };
        };
    }();
    const cardProps = {
        ...useSpring({
            ...props,
            config: {
                mass: 10,
                tension: 300,
                friction: 85,
            },
        }),
        onPointerEnter: (e: ThreeEvent<PointerEvent>) => { setHover(true); e.stopPropagation(); },
        onPointerLeave: (e: ThreeEvent<PointerEvent>) => { setHover(false); e.stopPropagation(); },
    };
    return <Suspense key={`democard-${i}`} {...cardProps} fallback={<BlankTarotCardMesh plain={true} />}>
        <Suspense {...cardProps} fallback={<BlankTarotCardMesh plain={false} />}>
            <TarotCardMesh {...cardProps} cardIndex={i} onClick={(e: ThreeEvent<MouseEvent>) => { setActive(i); setRot(0); e.stopPropagation(); }} />
        </Suspense>
    </Suspense>
};

function ChooseCanvas(props: {claim: () => void}) {
    const { isAuthed, authenticate } = useInternetIdentity();
    const decks = [
        ['Chaos #1', Chaos1, 'Gentle lattice hallucination.'],
        ['Chaos #2', Chaos2, 'CMYK obsessed painter.'],
        ['Chaos #3', Chaos3, 'Lattice hallucination, a stronger hit.'],
        ['Chaos #4', Chaos4, 'Color channel vortices and beady eyes.'],
        ['Chaos #5', Chaos5, 'I cant see you; you hacked my eyes.'],
        ['Chaos #6', Chaos6, '“Your hair is made of snakes.”'],
        ['Chaos #7', Chaos7, 'You\'re not in Kansas anymore.'],
        ['Chaos #8', Chaos8, 'R.W.S but not at all, with fur and scales.'],
    ];
    const [active, setActive] = useState<number>(Math.floor(Math.random() * decks.length));
    const [cards, setCards] = useState<number[]>([15, 16, 17, 18, 19]);
    return (
        <>
            <ChooseHeader>
                <H3>You May Choose One Deck</H3>
            </ChooseHeader>
            <ChooseContainer>
                {decks.map(([title, image, description], i) => <ChooseDeck onClick={() => setActive(i)} active={active === i} image={image} cards={cards} title={title} description={description} key={`choosedeck-${i}`} />)}
                <div style={{ width: '38em' }}>
                    {isAuthed
                        ? <Button size={'large'} onClick={props.claim}>Claim Your Deck 🃏🎉</Button>
                        : <Button size={'large'} onClick={authenticate}>
                            Authenticate to Claim
                            <img alt="with Internet Identity" src={dfinity} height={50} style={{ margin: '0 0 0 1em' }} />
                        </Button>}
                </div>
            </ChooseContainer>
        </>
    );
};

function ChooseDeck(props: { title: string; image: string; description: string; cards: number[]; active: boolean; onClick: () => void; }) {
    return (
        <DeckContainer>
            <Deck>
                <DeckPreview onClick={props.onClick} src={props.image} width="220" />
                <div>
                    <H4>{props.title}</H4>
                    <p>{props.description}</p>
                </div>
                <div style={{ width: '220px' }}><LinkButton to='/decks/rider-waite-smith/' size={'small'}>Browse</LinkButton></div>
                <div style={{ width: '220px' }}><Button onClick={props.onClick} active={props.active} size={'small'}>Select</Button></div>
            </Deck>
        </DeckContainer>
    );
};

function Ledger() {
    return (
        <Table>
            <Row>
                <ColHead>Identity</ColHead>
                <ColHead>Timestamp</ColHead>
                <ColHead>Deck</ColHead>
            </Row>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(i => <Row>
                <Col>1101042</Col>
                <Col>2021-07-25 12:04 PM</Col>
                <Col><a href="#">Chaos #1</a></Col>
            </Row>)}
        </Table>
    );
}

function YourChoice () {
    return (
        <YouChose>
            <H3>You Were Here</H3>
            <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center', gap: '100px' }}>
                <div>
                    <DeckPreview src={Chaos1} width="220" />
                    <div>
                        <H4>You Chose &ldquo;Chaos #1&rdquo;</H4>
                        <p>Gentle lattice hallucination.</p>
                    </div>
                </div>
                <Table style={{maxWidth: '14em'}}>
                    <Row>
                        <ColHead>Deck</ColHead>
                        <ColHead>%</ColHead>
                    </Row>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(i => <Row>
                        <Col>Chaos #{i}</Col>
                        <Col>0%</Col>
                    </Row>)}
                    <H4>Community Choice</H4>
                </Table>
            </div>
            <div style={{width: '24em'}}><LinkButton to='/'>Use My Deck in Saga</LinkButton></div>
        </YouChose>
    )
};

function DeadDrop () {
    const { authenticate, isAuthed } = useInternetIdentity();
    return (
        <YouChose>
            <H3>How The Community Chose</H3>
                <Table style={{maxWidth: '14em'}}>
                    <Row>
                        <ColHead>Deck</ColHead>
                        <ColHead>%</ColHead>
                    </Row>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(i => <Row>
                        <Col>Chaos #{i}</Col>
                        <Col>0%</Col>
                    </Row>)}
                </Table>
                {!isAuthed
                    ?   <div>
                            <p style={{fontSize: '24px', fontFamily: 'cardo'}}>Authenticate to see your deck if you claimed one.</p>
                            <Button size={'large'} onClick={authenticate}>
                                Authenticate
                                <img alt="with Internet Identity" src={dfinity} height={50} style={{ margin: '0 0 0 1em' }} />
                            </Button>
                        </div>
                    : <></>}
        </YouChose>
    )
};

const Root = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 162px;
padding: 162px 0;
color: hsl(var(--color-gold));
`;

const Head = styled.header`
display: flex;
flex-direction: column;
align-items: center;
gap: 62px;
`;

const Logo = styled.div`
width: 280px; height: 260px;
position: relative;
display: flex;
align-items: center;
justify-content: center;
`;

const H1 = styled.h1`
position: relative;
z-index: 1;
font-family: Astloch;
font-size: 100px;
font-weight: 100;
`;

const SpinSlowly = keyframes`
from {
    transform: rotate(0deg);
}
to {
    transform: rotate(360deg);
}
`;

const PopIn = keyframes`
from {
    transform: scale(0) rotate(0deg);
    opacity: 0;
}
to {
    transform: scale(1) rotate(360deg);
    opacity: 1;
}
`;

const StyledSpinner = styled(BigLoader)`
position: absolute;
top: 0; left: 0;
width: 280px; height: 310px;
animation:
    ${SpinSlowly} 62s linear infinite;
transform-origin: ${280 * .497}px ${310 * .418}px;

#big-loader-tristar {
    fill: hsl(var(--color-back));
    stroke: #2F2F2F;
    stroke-width: .5;
    transform-origin: 87.08px 66.945px;
    animation:
        ${PopIn} 1.5s ease-out;
}

#big-loader-star1 {
    fill: hsl(var(--color-back));
    stroke: #CFCFCF;
    stroke-width: .5;
    transform: scale(0);
    transform-origin: 142.53px 30.94px;
    animation:
        ${SpinSlowly} 38s linear infinite 1.25s,
        ${PopIn} 1s ease-out .25s;
}
#big-loader-star2 {
    fill: hsl(var(--color-back));
    stroke: #CFCFCF;
    stroke-width: .5;
    transform: scale(0);
    transform-origin: 87.08px 129.475px;
    animation:
        ${SpinSlowly} 38s linear infinite 1.5s,
        ${PopIn} 1s ease-out .5s;
}
#big-loader-star3 {
    fill: hsl(var(--color-back));
    stroke: #CFCFCF;
    stroke-width: .5;
    transform: scale(0);
    transform-origin: 30.36px 30.94px;
    animation:
        ${SpinSlowly} 38s linear infinite 1.75s,
        ${PopIn} 1s ease-out .75s;
}
`;

const H2 = styled.h2`
color: hsl(var(--color-back));
font-family: 'press start 2p';
font-size: 38px;
line-height: 125%;
text-align: center;
-webkit-text-stroke-width: .5px;
-webkit-text-stroke-color: white;

 > span:nth-of-type(1) { -webkit-text-stroke-color: #5B6AFA;}
 > span:nth-of-type(2) { -webkit-text-stroke-color: #8952D2;}
 > span:nth-of-type(3) { -webkit-text-stroke-color: #D41A69;}
 > span:nth-of-type(4) { -webkit-text-stroke-color: #F16B52;}
 > span:nth-of-type(5) { -webkit-text-stroke-color: #FFCC07;}
`;

const Timer = styled.div`
font-family: 'press start 2p';
text-align: center;

p {
    font-size: 12px;
}
`;

const Countdown = styled.div`
font-size: 100px;
color: hsl(var(--color-back));
line-height: 125%;
-webkit-text-stroke-width: 4px;
-webkit-text-stroke-color: white;
`;

const TwoBy = styled.div`
display: flex;
align-items: center;
width: 100%;
`;

const CardDemo = styled.div`
width: 100%; height: 100%;
flex-shrink: 1;
max-width: 1680px;
`;

const TypeSet = styled.div`
width: 22em;
flex-shrink: 0;
margin-right: 2em;
gap: 38px;
font-family: cardo;
font-size: 24px;
line-height: 150%;
`;

const ChooseSection = styled.div`
position: relative;
width: 100%;
`;

const H3 = styled.h3`
margin: 0;
text-align: center;
font-family: 'press start 2p';
font-size: 38px;
color: hsla(var(--color-back), 0);
line-height: 125%;
-webkit-text-stroke-width: 1px;
-webkit-text-stroke-color: white;
text-shadow: 0 0 20px black, 0 0 10px black;
`;

const ChooseHeader = styled.div`
top: 3em;
z-index: 10;
display: flex;
flex-direction: column;
gap: 32px;
justify-content: center;
align-items: center;

> div {
    border-radius: 20px;
    box-shadow: 0 0 20px black, 0 0 10px black;
}
`;

const ChooseContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;
row-gap: 100px;
padding-top: 100px;
`;

const DeckContainer = styled.div`
flex-basis: 25%;
flex-grow: 0;
display: flex;
align-items: center;
justify-content: center;
`;

const Deck = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 14px;
flex-grow: 0;

font-family: Almendra;
text-align: center;

p {
    font-size: 14px;
    font-style: italic;
}
`;

const DeckPreview = styled.img`
cursor: pointer;
transition: .38s ease-out all;

&:hover {
    transform: scale(1.05);
}
`;

const H4 = styled.h4`
    font-size: 18px;
    margin: 0;
`;

const Thanks = styled.div`
max-width: 62em;
font-size: 16px;
font-family: cardo;
a { color: #00F0FF; }
`;

const Table = styled.div`
width: 100%;
max-width: 748px;
font-family: almendra;
font-size: 24px;
text-align: center;
a { color: #00F0FF; }
`;
const Row = styled.div`
display: flex;
flex-direction: row;
`;
const ColHead = styled.div`
flex: 1;
font-style: italic;
padding: .5em 0;
`;
const Col = styled.div`
flex: 1;
padding: .25em 0;
`;
const YouChose = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 100px;
width: 100%;
font-family: almendra;
text-align: center;
`;