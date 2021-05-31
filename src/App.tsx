import '@fontsource/noto-sans-jp';
import '@fontsource/abril-fatface';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Routes from './System/Constants/Routes';
import DeviceAccelerometerProvider from './Providers/DeviceAccelerometer';
import { AnimatedRoute, AnimatedSwitch } from './Atoms/Animation/Routes';

export default function App () {
  return (
    <DeviceAccelerometerProvider>
      <Router>
        <AnimatedSwitch>
          {Object.keys(Routes).map(route => <AnimatedRoute {...Routes[route]} />)}
        </AnimatedSwitch>
      </Router>
    </DeviceAccelerometerProvider>
  );
};