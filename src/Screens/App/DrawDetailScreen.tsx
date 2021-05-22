import { MathUtils as M3, Color } from 'three';
import { Canvas, ThreeEvent } from '@react-three/fiber';
import { EventHandler, MouseEvent, Suspense, useContext, useEffect, useState } from 'react';
import SvgCard from '../../Molecules/ThreeTarotCard'
import { useSpring } from '@react-spring/three';
import { DeviceAccelerometerContext } from '../../Providers/DeviceAccelerometer';
import styled from 'styled-components';
import ScrollHint from '../../Atoms/ScrollHint';

const DrawDetailScreen: React.FC = () => {

    const { acceleration, popPermissionToast, devicePermission } = useContext(DeviceAccelerometerContext);

    const [flipped, setFlipped] = useState<boolean>(false);
    const [rando, setRando] = useState<number>(0);

    const props = useSpring({
        rotation: [
            M3.degToRad(-acceleration.alpha * .1 + (flipped ? 0 : 0)),
            M3.degToRad(-acceleration.beta * .1 + (flipped ? 0 : -180)),
            M3.degToRad(-acceleration.gamma * .1 + (flipped ? -180 : 0)),
        ],
        position: [
            M3.degToRad(acceleration.x * 50),
            M3.degToRad(acceleration.y * 50),
            0
        ],
        config: {
            mass: 20,
            tension: 250,
            friction: 100,
        }
    });

    const slowProps = useSpring({
        scale: flipped ? [1.25, 1.25, 1.25] : [1, 1, 1],
        config: {
            mass: 150,
            tension: 100,
            friction: 200,
        }
    });

    const handleClick:EventHandler<MouseEvent>|ThreeEvent<MouseEvent> = (e) => {
        e.stopPropagation();
        setFlipped(true);
    };

    useEffect(() => {
        if (devicePermission === 'pending') {
            popPermissionToast();
        }
    }, [devicePermission, popPermissionToast]);

    return (
        <>
            <Header>
                <Canvas
                    camera={{
                        zoom: .62,
                    }}
                >
                    <spotLight intensity={2} position={[-4, 8, 5]} rotation={[M3.degToRad(180), 0, 0]} color={new Color('hsl(43, 100%, 50%)').convertSRGBToLinear()} />
                    <ambientLight intensity={.1} color={new Color('hsl(43, 100%, 50%)').convertSRGBToLinear()} />
                    <Suspense fallback={null}>
                        {/* @ts-ignore */}
                        <SvgCard scale={slowProps.scale} rotation={props.rotation} position={props.position} randomSeed={rando} onClick={handleClick} />
                    </Suspense>
                </Canvas>
                <ScrollHint />
            </Header>
            <Body on={flipped}>
                <H2>Your Career Card</H2>
                <H1>Ace of Swords</H1>
                <P>
                    Every Ace is sort of an exclamation mark. Something important, even remarkable, will take place - in the case of Wands regarding your material circumstances. It's neither good nor bad, but very significant, indeed, affecting your relation to material matters.
                </P>
                <P>
                    So what is the interpretation in the context of your career?
                </P>
            </Body>
        </>
    );
}

const H2 = styled.h2`
margin: 0 0 10px;
font-family: 'Noto Sans JP';
font-size: 18px;
font-weight: 500;
text-transform: uppercase;
`;

const H1 = styled.h1`
margin: 0 0 20px;
font-family: 'Abril Fatface';
font-weight: 100;
font-size: 40px;
`;

const P = styled.p`
margin: 0 0 10px;
font-family: 'Noto Sans JP';
font-size: 16px;
line-height: 1.5;
`;

const Header = styled.div`
width: 100vw;
height: 100vh;

position: relative;
`;

const Body = styled.div<{on: boolean}>`
display: ${props => props.on ? 'flex' : 'none'};
flex-direction: column;
padding: 20px 10px;

background: #B8B8B8;
`;

export default DrawDetailScreen;
