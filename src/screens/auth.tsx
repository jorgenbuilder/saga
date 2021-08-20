import Button from 'src/components/button';
import { useInternetIdentity } from 'src/context/internet-identity';
import styled from 'styled-components';
import dfinity from 'src/assets/dfinity.png';


export default function AuthScreen () {

    const { authenticate } = useInternetIdentity();
    
    return (
        <Container>
            <Button onClick={() => authenticate()}>
                Authenticate
                <img alt="with Internet Identity" src={dfinity} height={40} style={{margin: '0 0 0 1em'}} />
            </Button>
        </Container>
    );
}

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