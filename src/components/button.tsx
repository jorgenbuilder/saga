import { MouseEventHandler, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NButton = styled.div<{active?: boolean}>`
display: flex;
align-items: center;
justify-content: center;
padding: 15px;
box-sizing: border-box;
width: 100%;

background-color: hsl(var(--color-copper));
box-shadow: 0 0 0 ${(p) => p.active ? '2px' : '1px'} hsl(var(${(p) => p.active ? '--color-gold' : '--color-front'}));
border-radius: 20px;

color: hsl(var(--color-gold));
text-decoration: none !important;
font-family: Uncial Antiqua;
font-size: 20px;

cursor: pointer;
`;

const LButton = styled(Link)`
display: flex;
align-items: center;
justify-content: center;
padding: 15px;
box-sizing: border-box;
width: 100%;

background-color: hsl(var(--color-copper));
border: 1px solid hsl(var(--color-front));
border-radius: 20px;

color: hsl(var(--color-gold));
text-decoration: none !important;
font-family: Uncial Antiqua;
font-size: 20px;
`;

export default function Button ({ children, onClick, active }: {active?: boolean; children: ReactNode, onClick?: MouseEventHandler<HTMLDivElement>}) {
    return (
        <NButton onClick={onClick} active={active}>
            {children}
        </NButton>
    );
}

export function LinkButton ({children, to}: {children: ReactNode, to: string}) {
    return (
        <LButton to={to}>
            {children}
        </LButton>
    );
}

