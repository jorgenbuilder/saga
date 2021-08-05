











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
import { Deck as DeckInterface, useDecks } from 'src/context/decks';
import ChaosDecks, { Chaos1Deck, Chaos2Deck, Chaos3Deck, Chaos4Deck, Chaos5Deck, Chaos6Deck, Chaos7Deck, Chaos8Deck } from 'src/context/decks/hackaton';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useAccelerometer } from 'src/context/device-accelerometer';

export interface NFT {
    owner: string;
    deck: string;
    timestamp: number;
    alias?: string;
};

type DeckContent = [string, string, string, DeckInterface];

const deadDrop = new Date('August 1 2021').getTime();
const hackathonDecks = [Chaos1Deck, Chaos2Deck, Chaos3Deck, Chaos4Deck, Chaos5Deck, Chaos6Deck, Chaos7Deck, Chaos8Deck];
const hackathonDecksContent : DeckContent[] = [
    ['Chaos #1', Chaos1, 'Gentle lattice hallucination.', Chaos1Deck],
    ['Chaos #2', Chaos2, 'CMYK obsessed painter.', Chaos2Deck],
    ['Chaos #3', Chaos3, 'Lattice hallucination, a stronger hit.', Chaos3Deck],
    ['Chaos #4', Chaos4, 'Color channel vortices and beady eyes.', Chaos4Deck],
    ['Chaos #5', Chaos5, 'I cant see you; you hacked my eyes.', Chaos5Deck],
    ['Chaos #6', Chaos6, '“Your hair is made of snakes.”', Chaos6Deck],
    ['Chaos #7', Chaos7, 'You\'re not in Kansas anymore.', Chaos7Deck],
    ['Chaos #8', Chaos8, 'R.W.S but not at all, with fur and scales.', Chaos8Deck],
];

function pad(n: number) { return n < 10 ? `0${n}` : `${n}` }

export default function HackathonDecks() {

    const { availableDecks, discoverDecks } = useDecks();
    const { isAuthed, principal } = useInternetIdentity();
    
    function count() { return Math.floor((deadDrop - new Date().getTime()) / 1000); };

    function toTimer(countdown: number) {
        const d = Math.floor(countdown / (60 * 60 * 24));
        const h = pad(Math.floor(countdown % (60 * 60 * 24) / (60 * 60)));
        const m = pad(Math.floor(countdown % (60 * 60) / 60));
        const s = pad(Math.floor(countdown % (60 * 60) % 60));
        return `${d}:${h}:${m}:${s}`;
    }

    function claim (deck: DeckInterface) {
        ChaosDecks['chaos'+deck.slug.match(/[0-9]/)].claimNFT(principal);
        setClaimedDeck(deck);
    };

    async function pullLedger () {
        let discoveredLedger: NFT[] = [];
        for (const key in ChaosDecks) {
            discoveredLedger = discoveredLedger.concat((await ChaosDecks[key].listNFT()).map((x: NFT) => Object.assign(x, {deck: key})));
        };
        setLedger(discoveredLedger);
    };

    const [countdown, setCountdown] = useState<number>(count());
    const [claimedDeck, setClaimedDeck] = useState<DeckInterface>();
    const [ledger, setLedger] = useState<NFT[]>([])
    
    const ledgerPercentages = useMemo(() => ledger.reduce((agg, nft) => {
        if (!nft) return agg;
        if (nft.deck in agg) agg[nft.deck]++;
        else agg[nft.deck] = 1;
        agg['total']++;
        return agg
    }, { total: 0, } as { [key: string]: number }), [ledger]);

    useEffect(() => {
        pullLedger();
        if (window.location.hash === '#chooseSection') chooseSection?.current?.scrollIntoView();
        const i = setInterval(() => setCountdown(Math.max(count(), 0)), 1000);
        return () => clearInterval(i);
    }, []);

    useEffect(() => {
        for (const d of availableDecks) {
            if (hackathonDecks.indexOf(d) >= 0) {
                setClaimedDeck(d);
                break;
            }
        };
    }, [availableDecks]);

    useEffect(() => {
        if (isAuthed) {
            discoverDecks(principal);
        }
    }, [principal, isAuthed]);

    const chosenDeck: DeckContent | undefined = claimedDeck ? hackathonDecksContent.find(([,,,deck]) => deck === claimedDeck) : hackathonDecksContent.find(([,,, deck]) => availableDecks.includes(deck as DeckInterface));

    const chooseSection = useRef<HTMLDivElement>(null);

    return (
        <Root>
            <Head>
                <Logo>
                    <StyledSpinner />
                    <H1>Saga</H1>
                </Logo>
                <H2><span>D</span><span>S</span><span>C</span><span>V</span><span>R</span> Hackathon<br />Special Release</H2>
                <Timer>
                    <p>{countdown > 0 ? 'Claim A Deck While You Can!' : `Ended ${new Date(deadDrop)}`}</p>
                    <Countdown>{toTimer(countdown)}</Countdown>
                </Timer>
                {countdown > 0 && <div style={{ width: '24em' }}>
                    <Button onClick={() => chooseSection?.current?.scrollIntoView()}>Claim Your Deck</Button>
                </div>}
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
            <ChooseSection id="chooseSection" ref={chooseSection}>
                {isAuthed && chosenDeck
                    ? <YourChoice chosenDeck={chosenDeck} breakdown={ledgerPercentages} />
                    : countdown === 0
                        ? <DeadDrop breakdown={ledgerPercentages} />
                        : <ChooseCanvas claim={(deck: DeckInterface) => { claim(deck); chooseSection?.current?.scrollIntoView(); }} />}
            </ChooseSection>
            <Thanks>These decks are a proof-of-concept for Saga Tarot, and your participation is very much appreciated. This is an <a href="https://www.github.com/jorgenbuilder/saga">open source</a> distributed application on Internet Computer. These decks can be used in Saga Tarot canisters, and they are simple enough to be integrated into any software. Anyone can mint decks like these. If you are interested in letting people use these decks in your software, or in minting decks with your art, reach out to <a href="https://twitter.com/SagaCards">@SagaCards</a> on Twitter for help.</Thanks>
            <LedgerContainer>
                <H3>Ledger</H3>
                <Ledger ledger={ledger} />
            </LedgerContainer>
        </Root>
    );
};

export function DemoCanvas() {
    const [rot, setRot] = useState<number>(0);
    const [active, setActive] = useState<number>(0);
    const [hover, setHover] = useState<boolean>(false);
    const cards = [Chaos1Deck, Chaos2Deck, Chaos4Deck, Chaos6Deck, Chaos8Deck];
    useFrame(() => !hover && setRot(rot + .5));
    const { popPermissionToast } = useAccelerometer();
    useEffect(popPermissionToast, []);
    return (
        <>
            {cards.map((deck, i) => <DemoCard key={`democard-${i}`} setParentHover={setHover} rot={rot} i={i} active={active} deck={deck} setActive={setActive} setRot={setRot} />)}
            <DefaultLighting />
        </>
    );
};

function DemoCard(props: { setParentHover: (s: boolean) => void; rot: number, i: number, active: number, deck: DeckInterface, setActive: (i: number) => void, setRot: (i: number) => void }) {
    const [hover, setHover] = useState<boolean>(false);
    const [mx, setMx] = useState<number>(0);
    const [my, setMy] = useState<number>(0);

    function hoverTilt (e: ThreeEvent<PointerEvent>) {
        var bbox = new THREE.Box3().setFromObject(e.eventObject);
        setMx(e.point.x >= 0 ? e.point.x / bbox.max.x : - e.point.x / bbox.min.x);
        setMy(e.point.y >= 0 ? e.point.y / bbox.max.y : - e.point.y / bbox.min.y);
    }

    const { acceleration } = useAccelerometer();
    
    const rotDeviceTilt = [
        -acceleration.alpha * .1,
        -acceleration.beta * .1,
        -acceleration.gamma * .1,
    ];

    const scaHover = hover ? .01 : 0;
    const posHover = hover ? -.15 : 0;
    const nearestFace = props.rot % 180;
    const switchProps = function () {
        const inactives = [0, 1, 2, 3, 4].filter((i) => i !== props.active);
        switch (props.i === props.active) {
            case true: return {
                rotation: [
                    rotDeviceTilt[0] + THREE.MathUtils.degToRad(0 + my * 5),
                    rotDeviceTilt[1] + THREE.MathUtils.degToRad((hover ? props.rot - nearestFace : props.rot) - mx * 5),
                    rotDeviceTilt[2]
                ] as unknown as THREE.Euler,
                position: [0, -1.125, 0] as unknown as THREE.Vector3,
                scale: (hover ? 1 : .8) as unknown as THREE.Vector3,
            };
            default: switch (inactives.indexOf(props.i)) {
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
            ...switchProps,
            config: {
                mass: 10,
                tension: 300,
                friction: 85,
            },
        }),
        onPointerMove: hoverTilt,
        onPointerEnter: (e: ThreeEvent<PointerEvent>) => { if (props.i === props.active) props.setParentHover(true); setHover(true); e.stopPropagation(); },
        onPointerLeave: (e: ThreeEvent<PointerEvent>) => { if (props.i === props.active) { props.setRot(props.rot - nearestFace); props.setParentHover(false); } setHover(false); e.stopPropagation(); },
    };
    return <Suspense key={`democard-${props.i}`} {...cardProps} fallback={<BlankTarotCardMesh plain={true} />}>
        <Suspense {...cardProps} fallback={<BlankTarotCardMesh plain={false} />}>
            <TarotCardMesh forceDeck={props.deck} {...cardProps} cardIndex={19} onClick={(e: ThreeEvent<MouseEvent>) => { props.setActive(props.i); if (props.active === props.i) props.setRot(props.rot - nearestFace - 180); else props.setRot(0); e.stopPropagation(); }} />
        </Suspense>
    </Suspense>
};

function ChooseCanvas(props: {claim: (deck: DeckInterface) => void}) {
    const { isAuthed, authenticate } = useInternetIdentity();
    const [active, setActive] = useState<number>(Math.floor(Math.random() * hackathonDecksContent.length));
    return (
        <>
            <ChooseHeader>
                <H3>You May Choose One Deck</H3>
            </ChooseHeader>
            <ChooseContainer>
                {hackathonDecksContent.map(([title, image, description, deck], i) => <ChooseDeck onClick={() => setActive(i)} active={active === i} deck={deck as DeckInterface} image={image as string} title={title as string} description={description as string} key={`choosedeck-${i}`} />)}
                <div style={{ width: '38em' }}>
                    {isAuthed
                        ? <Button size={'large'} onClick={() => props.claim(hackathonDecksContent[active][3] as DeckInterface)}>Claim Your Deck 🃏🎉</Button>
                        : <Button size={'large'} onClick={() => authenticate(() => window.location.reload())}>
                            Authenticate to Claim
                            <img alt="with Internet Identity" src={dfinity} height={50} style={{ margin: '0 0 0 1em' }} />
                        </Button>}
                </div>
            </ChooseContainer>
        </>
    );
};

function ChooseDeck(props: { deck: DeckInterface; title: string; image: string; description: string; active: boolean; onClick: () => void; }) {
    return (
        <DeckContainer>
            <Deck>
                <DeckPreview onClick={props.onClick} src={props.image} width="220" />
                <div>
                    <H4>{props.title}</H4>
                    <p>{props.description}</p>
                </div>
                <div style={{ width: '220px' }}><LinkButton to={`/hackathon-decks/${props.deck.slug}/`} size={'small'}>Browse</LinkButton></div>
                <div style={{ width: '220px' }}><Button onClick={props.onClick} active={props.active} size={'small'}>Select</Button></div>
            </Deck>
        </DeckContainer>
    );
};

function Ledger(props: { ledger: NFT[] }) {
    const perPage = 10;
    const pages = Math.floor(props.ledger.length / perPage) + 1;
    const [page, setPage] = useState<number>(0);
    return (
        <Table>
            <Row>
                <ColHead style={{flex: '.25'}}>#</ColHead>
                <ColHead>Identity</ColHead>
                <ColHead>Timestamp</ColHead>
                <ColHead>Deck</ColHead>
            </Row>
            {props.ledger.sort((a, b) => Number(b.timestamp) - Number(a.timestamp)).slice(page * perPage, page * perPage + perPage).map((nft, i) => {
                const date = new Date(Number(nft.timestamp) / 1e6);
                return <Row key={`ledger-${i}`}>
                    <Col style={{flex: '.25'}}>{props.ledger.length - i - 1}</Col>
                    <Col><span title={nft?.owner}>{nft?.alias?.length ? nft.alias : 'Anonymous'}</span></Col>
                    <Col>{`${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDay())} ${date.toLocaleTimeString()}`}</Col>
                    <Col><Link to={`/hackathon-decks/${nft.deck.split(/[0-9]/).join('-')}${nft.deck.match(/[0-9]/)}/`}>Chaos #{nft.deck.match(/[0-9]/)}</Link></Col>
                </Row>
            })}
            <Pagination>
                <Button size="small" onClick={() => setPage(Math.max(0, page - 1))}>Back</Button>
                <span>Page {page + 1} of {pages} <small><em>({props.ledger.length} Total)</em></small></span>
                <Button size="small" onClick={() => setPage(Math.min(pages - 1, page + 1))}>Next</Button>
            </Pagination>
        </Table>
    );
}

function YourChoice (props: { chosenDeck: DeckContent; breakdown: { [key: string]: number} }) {
    return (
        <YouChose>
            <H3>You Were Here</H3>
            <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center', gap: '100px' }}>
                <div>
                    <DeckPreview src={props.chosenDeck[1]} width="220" />
                    <div>
                        <H4>You Chose &ldquo;{props.chosenDeck[0]}&rdquo;</H4>
                        <p>{props.chosenDeck[2]}</p>
                    </div>
                </div>
                <Table style={{maxWidth: '14em'}}>
                    <Row>
                        <ColHead>Deck</ColHead>
                        <ColHead>%</ColHead>
                    </Row>
                    {Object.keys(props.breakdown).filter(x => x !== 'total').map((key, i) => <Row key={`row${i}`}>
                        <Col>Chaos #{key.match(/[0-9]/)}</Col>
                        <Col>{Math.floor(props.breakdown[key] / props.breakdown['total'] * 100)}% ({props.breakdown[key]})</Col>
                    </Row>)}
                    <H4>Community Choice</H4>
                </Table>
            </div>
            <div style={{width: '24em'}}><LinkButton to='/'>Use My Deck in Saga</LinkButton></div>
        </YouChose>
    )
};

function DeadDrop (props: { breakdown: { [key: string]: number} }) {
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
                            <Button size={'large'} onClick={() => authenticate(() => window.location.reload())}>
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
gap: 68px;
padding: 68px .5em;
color: hsl(var(--color-gold));

@media (min-width: 680px) {
    gap: 100px;
    padding: 100px 0;
}
@media (min-width: 1200px) {
    gap: 162px;
    padding: 162px 0;
}
`;

const Head = styled.header`
display: flex;
flex-direction: column;
align-items: center;
gap: 62px;
`;

const Logo = styled.div`
width: 173.6px; height: 161.2px;
position: relative;
display: flex;
align-items: center;
justify-content: center;

@media (min-width: 680px) {
    width: 280px; height: 260px;
}
`;

const H1 = styled.h1`
position: relative;
z-index: 1;
font-family: Astloch;
font-size: 62px;
font-weight: 100;

@media (min-width: 680px) {
    font-size: 100px;
}
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
width: 173.6px; height: 192.2px;
animation:
    ${SpinSlowly} 62s linear infinite;
transform-origin: ${173.6 * .497}px ${192.2 * .418}px;

@media (min-width: 680px) {
    width: 280px; height: 310px;
    transform-origin: ${280 * .497}px ${310 * .418}px;
}

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
font-size: 18px;
line-height: 125%;
text-align: center;
-webkit-text-stroke-width: .5px;
-webkit-text-stroke-color: white;

> span:nth-of-type(1) { -webkit-text-stroke-color: #5B6AFA;}
> span:nth-of-type(2) { -webkit-text-stroke-color: #8952D2;}
> span:nth-of-type(3) { -webkit-text-stroke-color: #D41A69;}
> span:nth-of-type(4) { -webkit-text-stroke-color: #F16B52;}
> span:nth-of-type(5) { -webkit-text-stroke-color: #FFCC07;}

@media (min-width: 440px) {
    font-size: 24px;
}

@media (min-width: 680px) {
    font-size: 32px;
}

@media (min-width: 1200px) {
    font-size: 38px;
}
`;

const Timer = styled.div`
font-family: 'press start 2p';
text-align: center;

p {
    font-size: 8px;

    @media (min-width: 440px) {
        font-size: 10px;
    }

    @media (min-width: 680px) {
        font-size: 12px;
    }
}
`;

const Countdown = styled.div`
font-size: 28px;
color: hsl(var(--color-back));
line-height: 125%;
-webkit-text-stroke-width: 2px;
-webkit-text-stroke-color: white;

@media (min-width: 440px) {
    font-size: 38px;
}

@media (min-width: 680px) {
    font-size: 62px;
    -webkit-text-stroke-width: 4px;
}

@media (min-width: 1200px) {
    font-size: 100px;
}
`;

const TwoBy = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;

@media (min-width: 768px) {
    flex-direction: row;
}
`;

const CardDemo = styled.div`
width: 100%; height: 100%;
flex-shrink: 1;
max-width: 1680px;
min-height: 768px;
`;

const TypeSet = styled.div`
flex-shrink: 0;
font-family: cardo;
line-height: 150%;

margin-right: 0;
gap: 38px;

width: 22em;
font-size: 14px;

@media (min-width: 400px) {
    width: 22em;
    font-size: 18px;
}

@media (min-width: 680px) {
    margin-right: 2em;
    gap: 38px;
    font-size: 20px;
}

@media (min-width: 1200px) {
    margin-right: 2em;
    gap: 38px;
    font-size: 24px;
}
`;

const DropCap = styled.span`
display: flex;
align-items: center;
justify-content: center;
margin: 10px 10px 0 0;
float: left;
background-color: hsl(var(--color-copper));
border: 1px solid hsl(var(--color-gold));
color: hsl(var(--color-gold));
font-family: 'Uncial Antiqua';

width: 46px;
height: 46px;
font-size: 28px;

@media (min-width: 400px) {
    width: 62px;
    height: 62px;
    font-size: 38px;
}

@media (min-width: 680px) {
    width: 68px;
    height: 68px;
    font-size: 44px;
}

@media (min-width: 1200px) {
    width: 86px;
    height: 86px;
    font-size: 62px;
}
`;

const ChooseSection = styled.div`
position: relative;
width: 100%;
`;

const H3 = styled.h3`
margin: 0;
text-align: center;
font-family: 'press start 2p';
color: hsla(var(--color-back), 0);
line-height: 125%;
-webkit-text-stroke-width: 1px;
-webkit-text-stroke-color: white;
text-shadow: 0 0 20px black, 0 0 10px black;

font-size: 24px;

@media (min-width: 680px) {
    font-size: 32px;
}
@media (min-width: 900px) {
    font-size: 38px;
}
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
    transform: scale(1.01);
}
`;

const H4 = styled.h4`
    font-size: 18px;
    margin: 0;
`;

const Thanks = styled.div`
max-width: 62em;
padding: 0 1em;
font-size: 16px;
font-family: cardo;
line-height: 150%;
a { color: #00F0FF; }
`;

const Table = styled.div`
width: 100%;
max-width: 748px;
font-family: almendra;
text-align: center;
a { color: #00F0FF; }

font-size: 16px;
@media (min-width: 680px) { font-size: 18px; }
@media (min-width: 900px) { font-size: 24px; }
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
const LedgerContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
gap: 62px;
align-items: center;
`;

const Pagination = styled.div`
margin-top: 1em;
display: flex;
justify-content: center;
align-items: center;
gap: 20px;

> :first-child, > :last-child {
    flex-grow: 0;
    width: 80px;
}
`;