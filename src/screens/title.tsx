import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Toast from 'src/components/toast';
import { LinkButton } from 'src/components/button';
import Routes from 'src/constants/routes';
import { ReactComponent as BigLoader } from 'src/assets/loader-big.svg';

export default function TitleScreen () {

    const [alphaToast, setAlphaToast] = useState<boolean>(false);

    function dismissToast () {
        setAlphaToast(false)
        window.sessionStorage.setItem('alphatoast', 'true');
    };

    useEffect(() => {
        setTimeout(() => {
            setAlphaToast(true);
            setTimeout(() => setAlphaToast(false), 10000);
        }, 5000);
    }, []);

    return (
        <>
            <Container>
                <Logo>
                    <StyledSpinner />
                    <H1>Saga</H1>
                </Logo>
                <br/><br/><br/><br/>
                <LinkButton to={Routes.drawSelection.path}>Readings</LinkButton>
                <br/>
                <LinkButton to={Routes.decks.path}>My Decks</LinkButton>
            </Container>
            <Toast open={alphaToast} accept={dismissToast} dismiss={dismissToast}>
                Oh! 🐣 I'm just an alpha! Please don't be mad at me 🥺.
            </Toast>
        </>
    );
};

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
height: 100%;
width: 100%;
max-width: 24em;
margin: 0 auto;

color: hsl(var(--color-gold));
`;

const H1 = styled.h1`
position: relative;
z-index: 10;
font-family: 'Astloch';
font-size: 100px;
font-weight: 100;
cursor: default;
`;

const Logo = styled.div`
width: 280px; height: 260px;
position: relative;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
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
position: relative;
z-index: 10;
margin: 0;
font-family: 'Almendra';
font-size: 40px;
font-weight: bold;
cursor: default;
`;