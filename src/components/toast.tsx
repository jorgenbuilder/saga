import styled from 'styled-components';
import { animated, useSpring } from '@react-spring/web';
import { useDrag } from 'react-use-gesture';
import { ReactNode } from 'react';

const ToastDiv = styled(animated.div)`
position: absolute;

transform: translateY(-150%);

display: flex;
max-width: 90vw;
padding: 20px;
box-sizing: border-box;

background-color: hsl(var(--color-front));
border-radius: 16px;
cursor: pointer;
user-select: none;

color: hsl(var(--color-gold));
text-align: center;
`;

const ToastContainer = styled.div`
position: fixed;
top: 100%;
z-index: 100;

width: 100%;
display: flex;
justify-content: center;
box-sizing: border-box;
`;

interface ToastProps {
    accept: () => void;
    dismiss: () => void;
    open: boolean;
    children?: ReactNode;
};

export default function Toast ({children, accept, dismiss, open}: ToastProps) {
    const initial = { x: 0, y: 100, rotateZ: '-10deg', };
    const current = { x: 0, y: open ? -100 : 100, rotateZ: '0deg', };
    const springConf = { mass: 5, tension: 500, friction: 75 };
    const [{ x, y, rotateZ }, set] = useSpring(() => ({ ...initial, config: springConf }));

    set(current);

    const bind = useDrag(({ down, movement: [mX, mY], velocity, direction: [dX, dY], tap }) => {
        set({ x: down ? mX : current.x, y: down ? mY + current.y : current.y });
        if (velocity > .25 && dY === 1) {
            dismiss();
        }
        if (tap) {
            accept();
        }
    });

    return (
        <ToastContainer>
            <ToastDiv {...bind()} style={{ x, y, rotateZ, touchAction: 'none' }}>
                <div>{children}</div>
            </ToastDiv>
        </ToastContainer>
    );
}
