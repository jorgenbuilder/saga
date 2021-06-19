import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NButton = styled.div`
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

export default function Button ({ children }: {children: ReactNode}) {
    return (
        <NButton>
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

