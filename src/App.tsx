import { BrowserRouter as Router } from 'react-router-dom';
import DeviceAccelerometerProvider from 'src/context/device-accelerometer';
import CanistersProvider from 'src/context/canisters';
import InternetIdentityProvider from './context/internet-identity';
import { AppRoutes } from 'src/constant/routes';
import Compose from './context/compose';

export default function App () {
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
