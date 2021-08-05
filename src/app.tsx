import { BrowserRouter as Router } from 'react-router-dom';
import DeviceAccelerometerProvider from 'src/context/device-accelerometer';
import CanistersProvider from 'src/context/canisters';
import InternetIdentityProvider from 'src/context/internet-identity';
import DeckProvider from 'src/context/decks';
import { AppRoutes } from 'src/constants/routes';
import Compose from './context/compose';
import PreloadAssets from './components/preload';

export default function App () {

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
