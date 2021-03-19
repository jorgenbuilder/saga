import { MotionStyle, useMotionValue, useTransform } from 'framer-motion';
import TarotCard from '../../Molecules/TarotCard'

const ShuffleDeck:React.FC = () => {
    return (
        <>
            <TarotCard
                style={DeckStyle}
                animate={{
                    rotate: [0, 5],
                    translateX: [0, 300],
                    translateZ: [0, 100],
                    rotateY: [180, 180],
                }}
                transition={{
                    duration: .5,
                    repeatDelay: .38,
                    repeat: Infinity,
                    repeatType: 'mirror',
                    ease: 'anticipate',
                }}
            />
            <TarotCard
                style={DeckStyle}
                animate={{
                    rotate: [0, -5],
                    translateX: [0, -300],
                    translateZ: [0, 100],
                    rotateY: [180, 180],
                }}
                transition={{
                    delay: .25,
                    duration: .5,
                    repeatDelay: .38,
                    repeat: Infinity,
                    repeatType: 'mirror',
                    ease: 'anticipate',
                }}
            />
            <TarotCard
                style={DeckStyle}
                animate={{
                    rotate: [0, 5],
                    translateX: [0, 300],
                    translateZ: [0, 100],
                    rotateY: [180, 180],
                }}
                transition={{
                    delay: .5,
                    duration: .5,
                    repeatDelay: .38,
                    repeat: Infinity,
                    repeatType: 'mirror',
                    ease: 'anticipate',
                }}
            />
            <TarotCard
                style={DeckStyle}
                animate={{
                    rotate: [0, -5],
                    translateX: [0, -300],
                    translateZ: [0, 100],
                    rotateY: [180, 180],
                }}
                transition={{
                    delay: .75,
                    duration: .5,
                    repeatDelay: .38,
                    repeat: Infinity,
                    repeatType: 'mirror',
                    ease: 'anticipate',
                }}
            />
        </>
    );
}

export default ShuffleDeck;

const DeckStyle: MotionStyle = {
    position: 'absolute',
    rotateX: 15,
    animationFillMode: 'forwards',
    rotateY: 180,
}