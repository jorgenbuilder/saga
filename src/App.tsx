import { BrowserRouter as Router } from 'react-router-dom';
import DeviceAccelerometerProvider from 'context/device-accelerometer';
import { AppRoutes } from 'constant/routes';

export default function App () {
  return (
    <>
      <DeviceAccelerometerProvider>
        <Router>
          <AppRoutes />
        </Router>
      </DeviceAccelerometerProvider>
    </>
  );
};
