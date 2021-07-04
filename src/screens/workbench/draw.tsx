import { useState, useEffect } from 'react';
import drawCard, { CardDraw } from 'src/services/cards/draws';
import TarotCardReveal from 'src/three/card/tarot-reveal';
import { useCanister } from 'src/context/canisters';
import { useInternetIdentity } from 'src/context/internet-identity';

const DrawWorkbench:React.FC = () => {
    const { tarot } = useCanister();
    const { identity } = useInternetIdentity();

    const [revealed, setRevealed] = useState<boolean>(false);
    const [draw, setDraw] = useState<CardDraw>();

    useEffect(() => {
        if (!identity) return;
        drawCard(identity?.getPrincipal().toHex()).then(setDraw)
    }, [tarot]);

    function handleClick () {
        if (!revealed && identity) {
            drawCard(identity?.getPrincipal().toHex()).then(setDraw)
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