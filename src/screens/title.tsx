import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Toast from 'src/components/toast';
import { LinkButton } from 'src/components/button';
import Routes from 'src/constants/routes';
import SplashScreen from './splash';

export default function TitleScreen () {

    const [alphaToast, setAlphaToast] = useState<boolean>(false);
    const [splash, setSplash] = useState<boolean>(window.sessionStorage.getItem('splash') === null ? true : false);

    function dismissToast () {
        setAlphaToast(false)
        window.sessionStorage.setItem('alphatoast', 'true');
    };

    useEffect(() => {
        setTimeout(() => {
            setAlphaToast(true);
            setTimeout(() => setAlphaToast(false), 10000);
        }, 5000);
        setTimeout(() => {
            setSplash(false);
            window.sessionStorage.setItem('splash', 'true');
        }, 4500);
    }, []);

    return (
        <>
            {splash && <SplashScreen />}
            <Container>
                <H1>Saga</H1>
                <H2>Tarot</H2>
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
margin: 0;
font-family: 'Astloch';
font-size: 100px;
cursor: default;
`;

const H2 = styled.h2`
margin: 0;
font-family: 'Almendra';
font-size: 40px;
font-weight: bold;
cursor: default;
`;