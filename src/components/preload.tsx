import { useEffect } from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useDecks } from 'src/context/decks';

export default function PreloadAssets () {
    const { deck } = useDecks();
    const [back, setBack] = useState<string>();

    useEffect(() => {
        deck.serveCard(78).then(setBack);
    }, [deck])

    return <Helmet>
        <link rel="preload" href={back} as="image" />
    </Helmet>
};