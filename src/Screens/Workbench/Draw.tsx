import { useState } from 'react';
import drawCard, { CardDraw } from 'src/services/cards/draws';
import { defaultUser } from 'src/services/users';
import TarotCardReveal from 'src/three/card/tarot-reveal';
import { useEffect } from 'react';
import { useContext } from 'react';
import { CanistersContext } from 'src/context/canisters';

const DrawWorkbench:React.FC = () => {
    const { tarot } = useContext(CanistersContext);

    const [revealed, setRevealed] = useState<boolean>(false);
    const [draw, setDraw] = useState<CardDraw>();

    useEffect(() => {
        drawCard(defaultUser).then(setDraw);

        // Test canister card draw
        tarot.drawCard().then(console.log).catch(console.error);
    }, [tarot]);

    function handleClick () {
        if (!revealed) {
            drawCard(defaultUser).then(setDraw);
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