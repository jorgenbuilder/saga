import { BrowserRouter as Router } from 'react-router-dom';
import DeviceAccelerometerProvider from 'src/context/device-accelerometer';
import CanistersProvider from 'src/context/canisters';
import { AppRoutes } from 'src/constant/routes';

export default function App () {
  return (
    <>
      <DeviceAccelerometerProvider>
        <CanistersProvider>
          <Router>
            <AppRoutes />
          </Router>
        </CanistersProvider>
      </DeviceAccelerometerProvider>
    </>
  );
};
