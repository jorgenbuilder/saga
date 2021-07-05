import { BrowserRouter as Router } from 'react-router-dom';
import DeviceAccelerometerProvider from 'src/context/device-accelerometer';
import CanistersProvider, { useCanister } from 'src/context/canisters';
import InternetIdentityProvider from './context/internet-identity';
import { AppRoutes } from 'src/constants/routes';
import Compose from './context/compose';
import CardBack from 'src/assets/cards/rider-waite/back.jpg'
import { useMemo } from 'react';
import { pushCardsBasic, pushCardsData1, pushCardsData2 } from 'src/services/cards/push-to-database';

export default function App () {
    const { tarot } = useCanister();

    useMemo(() => {
        const preload = new Image();
        preload.src = CardBack;

        // Easy testing in the console, please:
        (window as any).devPrincipal = '5qkc6-yb2qp-43g6o-cxhp7-bcpx5-a747h-g73np-5qlqg-ad7vf-fdulx-oqe';
        (window as any).tarot = tarot;
        (window as any).admin = { pushCardsBasic, pushCardsData1, pushCardsData2 };
    }, []);

    return (
        <Compose components={[
            DeviceAccelerometerProvider,
            CanistersProvider,
            InternetIdentityProvider
        ]}>
            <Router>
                <AppRoutes />
            </Router>
        </Compose>
    );
};
