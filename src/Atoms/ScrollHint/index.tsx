import styled from 'styled-components';
import { animated, useSpring } from '@react-spring/web';
import { useDrag } from 'react-use-gesture';

interface ScrollHintProps {
    accept?: () => null;
    dismiss?: () => null;
    show: boolean;
}

const ScrollHint:React.FC<ScrollHintProps> = ({ accept, show, }) => {
    const scrollHintCurrent = { y: show ? 0 : 200, opacity: show ? 1 : 0, };
    const springConf = { mass: 5, tension: 500, friction: 75 };
    const [{y, opacity}, setProps] = useSpring(() => ({ ...scrollHintCurrent, config: springConf}));
    setProps(scrollHintCurrent);

    const bind = useDrag(({ down, movement: [,mY], velocity, direction: [,dY], tap }) => {
        setProps({ y: down ? mY + scrollHintCurrent.y : scrollHintCurrent.y });
        if (velocity > .25 && dY === 1) {
            console.log('Hide')
        }
        if (tap) {
            accept && accept();
        }
    });

    return (
        <>
            <Element style={{ y, opacity, touchAction: 'none' }} {...bind()} />
        </>
    );
}

const Element = styled(animated.div)`
position: absolute;
z-index: 100;
bottom: 10vh;
left: 50%;

width: 62px;
height: 62px;
margin-left: -31px;

background: black;
border-radius: 50%;
`;

export default ScrollHint;
