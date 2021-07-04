import { BrowserRouter as Router } from 'react-router-dom';
import DeviceAccelerometerProvider from 'src/context/device-accelerometer';
import CanistersProvider from 'src/context/canisters';
import InternetIdentityProvider from './context/internet-identity';
import { AppRoutes } from 'src/constant/routes';
import Compose from './context/compose';
import CardBack from 'src/assets/cards/rider-waite/back.jpg'
import { useMemo } from 'react';

export default function App () {
    useMemo(() => {
        const preload = new Image();
        preload.src = CardBack;
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
