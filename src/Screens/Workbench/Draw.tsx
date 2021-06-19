import { useState } from 'react';
import drawCard, { CardDraw } from '../../services/cards/draws';
import { defaultUser } from '../../services/users';
import TarotCardReveal from '../../three/card/tarot-reveal';
import { useEffect } from 'react';

const DrawWorkbench:React.FC = () => {
    const [revealed, setRevealed] = useState<boolean>(false);
    const [draw, setDraw] = useState<CardDraw>();

    useEffect(() => setDraw(drawCard(defaultUser)), [])

    function handleClick () {
        if (!revealed) {
            setDraw(drawCard(defaultUser));
        }
        setRevealed(!revealed);
    }

    return <TarotCardReveal
        onClick={handleClick}
        revealed={revealed}
        draw={draw as CardDraw}
    />
}

export default DrawWorkbench;