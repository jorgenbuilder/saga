import { BrowserRouter as Router } from 'react-router-dom';
import DeviceAccelerometerProvider from 'src/context/device-accelerometer';
import CanistersProvider, { useCanister } from 'src/context/canisters';
import InternetIdentityProvider from './context/internet-identity';
import { AppRoutes } from 'src/constants/routes';
import Compose from './context/compose';
import CardBack from 'src/assets/cards/rider-waite/back.jpg'
import { useMemo } from 'react';

export default function App () {
    const { tarot } = useCanister();

    useMemo(() => {
        const preload = new Image();
        preload.src = CardBack;

        (window as any).draw = function () {
            //@ts-ignore
            return tarot.createDailyDraw('bhvmm-kkp5p-pzycc-apxyy-26mff-zazxc-gyotq-dlvtq-ilprx-g47sw-zae', 'love').catch(console.error).then(console.log);
        };
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
