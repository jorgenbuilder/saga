import { BrowserRouter as Router } from 'react-router-dom';
import DeviceAccelerometerProvider from 'src/context/device-accelerometer';
import CanistersProvider from 'src/context/canisters';
import InternetIdentityProvider from './context/internet-identity';
import { AppRoutes } from 'src/constant/routes';

export default function App () {
  return (
    <>
      <DeviceAccelerometerProvider>
        <CanistersProvider>
          <InternetIdentityProvider>
            <Router>
              <AppRoutes />
            </Router>
          </InternetIdentityProvider>
        </CanistersProvider>
      </DeviceAccelerometerProvider>
    </>
  );
};
