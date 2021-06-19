import DirectionIndicator from '../Assets/direction-indicator.svg';
import DirectionIndicatorFlipped from '../Assets/direction-indicator-flipped.svg';

interface Props {
    reversed: boolean;
}

export default function UprightIndicator ({reversed}: Props) {
    return (
        <img
            src={reversed ? DirectionIndicatorFlipped : DirectionIndicator}
            alt={`This card is ${reversed ? 'up-side-down' : 'right-side-up'}`}
        />
    );
}