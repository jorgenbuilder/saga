import styled, { keyframes } from 'styled-components';
import { ReactComponent as BigLoader } from 'src/assets/loader-big.svg';

const SplashScreen: React.FC = () => {

    return (
        <StyledScreen>
            <StyledSpinner />
        </StyledScreen>
    );
}

const FadeOut = keyframes`
from {
    opacity: 1;
}
to { 
    opacity: 0;
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
animation:
    ${SpinSlowly} 20s linear infinite;
transform-origin: 87.08px 66.945px;

#big-loader-tristar {
    fill: white;
    transform-origin: 87.08px 66.945px;
    animation:
        ${PopIn} 1.5s ease-out;
}

#big-loader-star1 {
    fill: white;
    transform: scale(0);
    transform-origin: 142.53px 30.94px;
    animation:
        ${SpinSlowly} 8s linear infinite 1.25s,
        ${PopIn} 1s ease-out .25s;
}
#big-loader-star2 {
    fill: white;
    transform: scale(0);
    transform-origin: 87.08px 129.475px;
    animation:
        ${SpinSlowly} 8s linear infinite 1.5s,
        ${PopIn} 1s ease-out .5s;
}
#big-loader-star3 {
    fill: white;
    transform: scale(0);
    transform-origin: 30.36px 30.94px;
    animation:
        ${SpinSlowly} 8s linear infinite 1.75s,
        ${PopIn} 1s ease-out .75s;
}
`;

const StyledScreen = styled.div`
animation: ${FadeOut} 380ms linear 4s;
animation-fill-mode: forwards;
display: flex;
align-items: center;
justify-content: center;
height: 100%;
width: 100%;
position: absolute;
top: 0; left: 0;
background: hsl(var(--color-back));
`;

export default SplashScreen;
