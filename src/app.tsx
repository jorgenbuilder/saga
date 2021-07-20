import { BrowserRouter as Router } from 'react-router-dom';
import DeviceAccelerometerProvider from 'src/context/device-accelerometer';
import CanistersProvider, { useCanister } from 'src/context/canisters';
import InternetIdentityProvider from 'src/context/internet-identity';
import DeckProvider from 'src/context/decks';
import { AppRoutes } from 'src/constants/routes';
import Compose from './context/compose';
import { useMemo } from 'react';
import { pushCardsBasic, pushCardsData1, pushCardsData2 } from 'src/services/cards/push-to-database';
import { deck as alphadeck } from './context/decks/alphadeck';
import uploadAssets from './services/upload';
import PreloadAssets from './components/preload';

export default function App () {
    const { tarot } = useCanister();

    useMemo(() => {
        // Easy testing in the console, please:
        (window as any).devPrincipal = '5qkc6-yb2qp-43g6o-cxhp7-bcpx5-a747h-g73np-5qlqg-ad7vf-fdulx-oqe';
        (window as any).tarot = tarot;
        (window as any).alphadeck = alphadeck;
        (window as any).uploadAssets = uploadAssets;
        (window as any).admin = { pushCardsBasic, pushCardsData1, pushCardsData2 };
    }, [tarot]);

    return (
        <Compose components={[
            DeviceAccelerometerProvider,
            CanistersProvider,
            DeckProvider,
            InternetIdentityProvider,
        ]}>
            <PreloadAssets />
            <Router>
                <AppRoutes />
            </Router>
        </Compose>
    );
};
