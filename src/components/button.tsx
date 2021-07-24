import { MouseEventHandler, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NButton = styled.div<{active?: boolean, size?: 'small' | 'large'}>`
display: flex;
align-items: center;
justify-content: center;
box-sizing: border-box;
width: 100%;

background-color: hsl(var(--color-copper));
box-shadow: 0 0 0 ${(p) => p.active ? '2px' : '1px'} hsl(var(${(p) => p.active ? '--color-gold' : '--color-front'}));

color: hsl(var(--color-gold));
text-decoration: none !important;
font-family: Uncial Antiqua;

cursor: pointer;

padding: ${p => p?.size === 'small' ? 5 : p?.size === 'large' ? 12 : 12}px;
border-radius: ${p => p?.size === 'small' ? 10 : p?.size === 'large' ? 15 : 15}px;
font-size: ${p => p?.size === 'small' ? 15 : p?.size === 'large' ? 22 : 15}px;

@media (min-width: 680px) {
    padding: ${p => p?.size === 'small' ? 5 : p?.size === 'large' ? 15 : 10}px;
    border-radius: ${p => p?.size === 'small' ? 10 : p?.size === 'large' ? 24 : 15}px;
    font-size: ${p => p?.size === 'small' ? 15 : p?.size === 'large' ? 24 : 18}px;
}

@media (min-width: 900px) {
    padding: ${p => p?.size === 'small' ? 5 : p?.size === 'large' ? 25 : 15}px;
    border-radius: ${p => p?.size === 'small' ? 10 : p?.size === 'large' ? 25 : 20}px;
    font-size: ${p => p?.size === 'small' ? 15 : p?.size === 'large' ? 28 : 20}px;
}
`;

const LButton = styled(Link)<{size?: 'small' | 'large'}>`
display: flex;
align-items: center;
justify-content: center;
box-sizing: border-box;
width: 100%;

background-color: hsl(var(--color-copper));
box-shadow: 0 0 0 1px hsl(var(--color-front));

color: hsl(var(--color-gold));
text-decoration: none !important;
font-family: Uncial Antiqua;

padding: ${p => p?.size === 'small' ? 5 : p?.size === 'large' ? 15 : 10}px;
border-radius: ${p => p?.size === 'small' ? 10 : p?.size === 'large' ? 15 : 15}px;
font-size: ${p => p?.size === 'small' ? 15 : p?.size === 'large' ? 18 : 15}px;

@media (min-width: 680px) {
    padding: ${p => p?.size === 'small' ? 5 : p?.size === 'large' ? 15 : 10}px;
    border-radius: ${p => p?.size === 'small' ? 10 : p?.size === 'large' ? 15 : 15}px;
    font-size: ${p => p?.size === 'small' ? 15 : p?.size === 'large' ? 24 : 18}px;
}

@media (min-width: 900px) {
    padding: ${p => p?.size === 'small' ? 5 : p?.size === 'large' ? 25 : 15}px;
    border-radius: ${p => p?.size === 'small' ? 10 : p?.size === 'large' ? 25 : 20}px;
    font-size: ${p => p?.size === 'small' ? 15 : p?.size === 'large' ? 28 : 20}px;
}

cursor: pointer;
`;

export default function Button (props: {active?: boolean; size?: 'small' | 'large'; children: ReactNode, onClick?: MouseEventHandler<HTMLDivElement>}) {
    return (
        <NButton size={props.size} onClick={props.onClick} active={props.active}>
            {props.children}
        </NButton>
    );
}

export function LinkButton (props: {children: ReactNode, to: string, size?: 'small' | 'large';}) {
    return (
        <LButton size={props.size} to={props.to}>
            {props.children}
        </LButton>
    );
}

