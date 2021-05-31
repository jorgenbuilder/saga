import { BrowserRouter as Router } from 'react-router-dom';
import DeviceAccelerometerProvider from './Providers/DeviceAccelerometer';
import { AppRoutes } from './System/Constants/Routes';

export default function App () {
  return (
    <DeviceAccelerometerProvider>
      <Router>
        <AppRoutes />
      </Router>
    </DeviceAccelerometerProvider>
  );
};
